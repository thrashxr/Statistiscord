import { Client, GatewayIntentBits, OAuth2Scopes, Partials, ActivityType } from 'discord.js';
import moment from 'moment';
moment.locale('tr');
export default async function handler(req, res) {
   const client = new Client({
      intents: [
         GatewayIntentBits.Guilds,
         GatewayIntentBits.GuildMembers,
         GatewayIntentBits.GuildBans,
         GatewayIntentBits.GuildEmojisAndStickers,
         GatewayIntentBits.GuildIntegrations,
         GatewayIntentBits.GuildWebhooks,
         GatewayIntentBits.GuildInvites,
         GatewayIntentBits.GuildVoiceStates,
         GatewayIntentBits.GuildPresences,
         GatewayIntentBits.GuildMessages,
         GatewayIntentBits.GuildMessageReactions,
         GatewayIntentBits.GuildMessageTyping,
         GatewayIntentBits.MessageContent,
      ],
      scopes: [OAuth2Scopes.Bot, OAuth2Scopes.ApplicationsCommands],
      partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember, Partials.ThreadMember, Partials.GuildScheduledEvent],
      ws: {
         version: '10',
      },
   });

   try {
      await client.login(process.env.BOT_TOKEN);
      const guildId = process.env.GUILD_ID;
      const userId = process.env.USER_ID;
      const user = await client.users.fetch(userId, { force: true });
      const guild = await client.guilds.fetch(guildId);
      const member = await guild.members.fetch(userId);
      const filterOutCustomStatus = (activity) => activity.type !== ActivityType.Custom;

      if (member) {
         const userData = {
            avatar: user.avatarURL({ dynamic: true, size: 2048 }),
            banner: user.bannerURL({ dynamic: true, size: 2048 }),
            displayName: member.displayName,
            username: user.username,
            accentColor: member.accentColor,
            id: member.id,
            status: member.presence?.status ?? 'offline',
            since: user.createdAt,
            activity: member.presence
               ? member.presence.activities.filter(filterOutCustomStatus).map((activity) => ({
                    name: activity.name.replace(/\s\(\d+\)/, ''),
                    type: activity.type,
                    details: activity.details,
                    state: activity.state,
                    startedAt: activity.timestamps ? moment(activity.timestamps.start).format('LT') : null,
                    assets: activity.assets
                       ? {
                            largeImageURL: activity.assets.largeImageURL({ size: 2048 }),
                            smallImageURL: activity.assets.smallImageURL({ size: 2048 }),
                         }
                       : null,
                 }))
               : [],
         };

         res.status(200).json(userData);
      } else {
         res.status(404).json({ message: 'User not found.' });
      }
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error.' });
   } finally {
      await client.destroy();
   }
}
