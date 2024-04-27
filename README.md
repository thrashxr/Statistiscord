<p align="center">
  <img src="https://i.imgur.com/wFGgvPe.png" width="500" />
</p>
<p align="center">
    <h1 align="center">STATISTISCORD</h1>
</p>
<p align="center">
    <em>Welcome to STATISTISCORD</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/thrashxr/Statistiscord?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/thrashxr/Statistiscord?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/thrashxr/Statistiscord?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/thrashxr/Statistiscord?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#overview)
> - [ Features](#features)
> - [ Repository Structure](#repository-structure)
> - [ Modules](#modules)
> - [ Getting Started](#getting-started)
>   - [ Installation](#installation)
>   - [ Running Statistiscord](#running-Statistiscord)
>   - [ Tests](#tests)
> - [ Project Roadmap](#project-roadmap)
> - [ Contributing](#contributing)
> - [ License](#license)
> - [ Acknowledgments](#acknowledgments)

---

##  Overview

Statistiscord is a web application that uses the Discord.js library to fetch and display user data from a Discord server. It features a simple interface built with Next.js and Tailwind CSS. It allows users to visualize and analyze Discord user information in a user-friendly manner.

---

##  Features

- Discord.js Integration: Retrieves user data from Discord seamlessly using the Discord.js library.

- Next.js Framework: Harnesses the power of Next.js for server-side rendering and static site generation.

- Tailwind CSS Styling: Utilizes Tailwind CSS for fast and responsive styling of the web interface.

---

##  Repository Structure

```sh
└── Statistiscord/
    ├── README.md
    ├── app
    │   ├── activity
    │   │   └── page.js
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.js
    │   └── page.js
    ├── components
    │   ├── activity.js
    │   ├── buttons.js
    │   └── profile.js
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   └── api
    │       └── userInfo.js
    ├── postcss.config.mjs
    ├── public
    │   ├── favicon.ico
    │   ├── favicon.png
    │   ├── next.svg
    │   ├── no-data-2.png
    │   ├── no-data.png
    │   └── vercel.svg
    ├── tailwind.config.js
    └── utils
        └── links.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                           | Summary                         |
| ---                                                                                            | ---                             |
| [jsconfig.json](https://github.com/thrashxr/Statistiscord/blob/master/jsconfig.json)           | <code>Javascript config file</code> |
| [postcss.config.mjs](https://github.com/thrashxr/Statistiscord/blob/master/postcss.config.mjs) | <code>Postcss config file</code> |
| [package.json](https://github.com/thrashxr/Statistiscord/blob/master/package.json)             | <code>Project and dependencies file</code> |
| [next.config.mjs](https://github.com/thrashxr/Statistiscord/blob/master/next.config.mjs)       | <code>Next.js config file</code> |
| [tailwind.config.js](https://github.com/thrashxr/Statistiscord/blob/master/tailwind.config.js) | <code>Tailwindcss config file</code> |
| [package-lock.json](https://github.com/thrashxr/Statistiscord/blob/master/package-lock.json)   | <code>This file is automatically generated by npm or yarn and contains a specific snapshot of the project's dependencies and their exact versions.</code> |

</details>

<details closed><summary>utils</summary>

| File                                                                             | Summary                         |
| ---                                                                              | ---                             |
| [links.js](https://github.com/thrashxr/Statistiscord/blob/master/utils/links.js) | <code>Social media links</code> |

</details>

<details closed><summary>pages.api</summary>

| File                                                                                       | Summary                         |
| ---                                                                                        | ---                             |
| [userInfo.js](https://github.com/thrashxr/Statistiscord/blob/master/pages/api/userInfo.js) | <code>Fetching discord user informations</code> |

</details>

<details closed><summary>components</summary>

| File                                                                                        | Summary                         |
| ---                                                                                         | ---                             |
| [activity.js](https://github.com/thrashxr/Statistiscord/blob/master/components/activity.js) | <code>Activity page component</code> |
| [buttons.js](https://github.com/thrashxr/Statistiscord/blob/master/components/buttons.js)   | <code>Buttons page component</code> |
| [profile.js](https://github.com/thrashxr/Statistiscord/blob/master/components/profile.js)   | <code>Profile page component</code> |

</details>

<details closed><summary>app</summary>

| File                                                                                 | Summary                         |
| ---                                                                                  | ---                             |
| [layout.js](https://github.com/thrashxr/Statistiscord/blob/master/app/layout.js)     | <code>Layout of project</code> |
| [page.js](https://github.com/thrashxr/Statistiscord/blob/master/app/page.js)         | <code>Main page of project</code> |
| [globals.css](https://github.com/thrashxr/Statistiscord/blob/master/app/globals.css) | <code>Global css</code> |

</details>

<details closed><summary>app.activity</summary>

| File                                                                                  | Summary                         |
| ---                                                                                   | ---                             |
| [page.js](https://github.com/thrashxr/Statistiscord/blob/master/app/activity/page.js) | <code>Activity page route</code> |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`
* **Discord.js**: `version 14.y.z`
* **Next.js**: `version 14.y.z`
* **Tailwindcss**: `version 3.y.z`

###  Installation

1. Clone the Statistiscord repository:

```sh
git clone https://github.com/thrashxr/Statistiscord
```

2. Change to the project directory:

```sh
cd Statistiscord
```

3. Create `.env.local` file:

```sh
// .env.local

// Discord Bot Token
BOT_TOKEN=your_bot_token_here

// Discord User ID
USER_ID=your_discord_user_id_here

// Discord Guild ID
GUILD_ID=your_discord_guild_id_here
```

4. Install the dependencies:

```sh
npm install
```

###  Running Statistiscord

Use the following command to run Statistiscord:

```sh
npm run start
```

###  Tests

To execute tests, run:

```sh
npm run dev
```

---

##  Project Roadmap

- [X] `--------`
- [ ] `--------`
- [ ] `--------`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/thrashxr/Statistiscord/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/thrashxr/Statistiscord/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/thrashxr/Statistiscord/issues)**: Submit bugs found or log feature requests for Statistiscord.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/thrashxr/Statistiscord
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [Creative Commons Attribution 3.0 Unported license](https://creativecommons.org/licenses/by/3.0/) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

[**Return**](#-quick-links)

---
