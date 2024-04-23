# Welcome to Statistiscord

## About The Statistiscord

A Simple Interface to Display User Data from Discord.js on a Website Using Next.js and Tailwind CSS

**Statistiscord** is a simple interface that utilizes Discord.js to fetch user data and displays it on a website built with Next.js and Tailwind CSS. It provides a user-friendly way to visualize and analyze Discord user information.

Key Features:

1. Discord.js Integration: Seamlessly retrieves user data from Discord using the Discord.js library.

2. Next.js Framework: Leverages the power of Next.js for server-side rendering and static site generation.

3. Tailwind CSS Styling: Employs Tailwind CSS for rapid and responsive styling of the web interface.

Benefits:

1. Effortless Data Visualization: Simplifies the process of displaying Discord user data in a clear and organized manner.

2. Enhanced User Experience: Provides a user-friendly interface for interacting with Discord user information.

3. Tailwind CSS Advantages: Enhances the look and feel of the web interface with Tailwind CSS's utility-first approach.


Overall, **Statistiscord** serves as a valuable tool for anyone seeking to effectively display and analyze Discord user data.


### Built With

* Next.js
* Tailwindcss
* Discord.js

## Getting Started

You can see how to use it by following the steps.

### Installation:

1. Clone the repository.
2. Install the dependencies:

``` bash
npm install || yarn install
```

To configure **Statistiscord**, follow these steps:

1. Create a .env.local file:

In the root directory of your **Statistiscord** project, create a file named .env.local.

2. Fill in the environment variables:

Open the .env.local file and add the following lines, replacing the placeholder values with your actual information:
```
// .env.local

// Discord Bot Token
BOT_TOKEN=your_bot_token_here

// Discord User ID
USER_ID=your_discord_user_id_here

// Discord Guild ID
GUILD_ID=your_discord_guild_id_here
```
3. Obtain Discord credentials:

 * Navigate to https://discord.com/developers
 * Create a new bot application.
 * Copy the bot token from the "Bot" section.
 * Find your Discord user ID by opening your Discord profile settings and copying the ID from the URL.
 * Find your Discord guild ID by opening the "Server Settings" for the guild you want to use and copying the ID from the URL.

4. Replace placeholder values:

In the .env.local file, replace with the actual values you obtained.
```
your_bot_token_here, 
your_discord_user_id_here,
your_discord_guild_id_here
```

5. Save the `.env.local` file:

Save the `.env.local` file.

Additional Notes:

The `.env.local` file should not be committed to your version control system, as it contains sensitive information.
Make sure you have the necessary permissions to access the Discord user and guild data you want to display.

Running the application:

1. Start the development server:

```
npm run dev || yarn dev
```
2. Open your browser and go to `localhost:/3000`


Done!
