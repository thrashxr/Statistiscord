import { FaDiscord, FaGithub } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
const socialMediaAccounts = [
   {
      name: 'Discord',
      username: 'thrasher',
      icon: (
         <IconContext.Provider value={{ color: '#5865F2', className: 'global-class-name' }}>
            <FaDiscord size={24} />
         </IconContext.Provider>
      ),
      link: 'https://discord.com/users/739853682430050335',
   },
   {
      name: 'Twitter',
      username: 'thrasher',
      icon: <FaGithub size={24} />,
      link: 'https://github.com/thrashxr',
   },
];
export default socialMediaAccounts;
