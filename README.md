<div align="center">
<a href=""><img src="./.docs/logo.svg" alt="Logo" width="200"/></a>
<h1>Instagram Stories</h1>
<h4>Simplified version of Instagram stories built on top of <a href="https://react.dev/" target="_blank">ReactJS</a></h4>
</div>

<div align="center">
  <h3>
    <a href="https://react.dev/">
      React
    </a>
    <span> | </span>
    <a href="https://nextjs.org/">
      Next.js
    </a>
    <span> | </span>
    <a href="https://jestjs.io/">
      Jest
    </a>
    <span> | </span>
    <a href="https://testing-library.com">
      React Testing Library
    </a>
    <span> | </span>
    <a href="https://eslint.org/">
      EsLint
    </a>
    <span> | </span>
    <a href="https://typicode.github.io/husky/">
      Husky
    </a>
  </h3>
</div>

<details>
<summary>📖 <b>Table of Contents</b></summary>
<br />

[![-----------------------------------------------------][colored-line]](#table-of-contents)

## ➤ Table of Contents

* [➤ Walkthrough](#-walkthrough)
	* [Built With](#built-with)
	* [File Structure](#file-structure)
	* [Testing Setup](#testing-setup)
* [➤ Getting Started](#-getting-started)
	* [Dependencies](#dependencies)
	* [Install Node.js](#install-nodejs)
	* [Check your Node.js installation](#check-your-nodejs-installation)
	* [Installing](#installing)
	* [Running the App](#running-the-app)
	* [Tasks](#tasks)
* [➤ Design Decisions](#-design-decisions)
</details>

[![-----------------------------------------------------][colored-line]](#-walkthrough)

## ➤ Walkthrough


### Built With

- [Node.js](https://nodejs.org/en/)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [EsLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/)


### File Structure

```
src/
 ├──app/                   * Next.js app router folder. It contains pages
 │   |--layout.tsx         * Defines shared layout for routes
 │   |--page.tsx           * Main page
 │   │
 │──components/            * Contains app components
 │   ├──Header/            * Header component which shows logo
 │   ├──Stories/           * Stories list component
 │   └──StoryViewer/       * Component to display stories
 |──hooks/                 * Contains React hook for data and logic handling
 │
 |──public/                * Contains public assets
 │
 |──styles/                * Contains app style CSS files
 │
 └──test/                  * Jest configuration for testing application
```

### Testing Setup
This is our testing stack:
* React Testing Library
* Jest
* Cypress
* Eslint

To run unit and integration tests, type `npm test` in the terminal.

[![-----------------------------------------------------][colored-line]](#-getting-started)

## ➤ Getting Started

### Dependencies
Tools needed to run this app:
* `node` and `npm`

#### Install Node.js

Node.js is an environment that can run JavaScript code outside of a web browser and is used to write and run server-side JavaScript apps. Node.js installation includes `npm`, the package manager that allows you to install NPM modules from your terminal. 
You can download an installer from the [Node.js homepage](https://nodejs.org/en/).

##### Check your Node.js installation

Check that you have the minimum required version installed by running the following command:

```sh
node -v
```

You should see a version larger than Node 18.

```sh
node -v
v18.19.0
```

> The application minimum supported Node.js version is Node 18, but more recent versions will work as well.


### Installing
* `clone` this repo
* `npm install` to install dependencies

> Once all dependencies are installed, `husky` will setup Git hooks which will automatically execute build and testing on commit to make sure everything is working.


### Running the App
After you have installed all dependencies, you may run the app. Running `npm run dev` will launch a development server, and watch all files. The port will be displayed in the terminal.


#### Tasks
Here's a list of available tasks:
* `npm run lint`
	* runs linting with Eslint to verify code styles and formatting.
* `npm run dev`
	* starts a dev server via `Next.js`.
* `npm run build`
	* builds production build of the application.
* `npm run export` Builds and exports static version of the application.
* `npm start`
	* runs the production build of the application.
* `npm test`
	* runs the testing.

[![-----------------------------------------------------][colored-line]](#-design-decisions)

## ➤ Design Decisions

* The application is built using Next.js, a React framework that allows for server-side rendering and static site generation. The application is built using a component-based architecture, with components being organized into folders based on their functionality. The application uses React hooks to manage state and logic, and the application is styled using CSS.


* To keep the component dumb and separate the logic behind them, the components are made only responsible for UI and hooks are created to handle the logic. This makes the components reusable and easy to test.


* For testing, the application uses Jest and React Testing Library. Jest is used for unit and integration tests, and React Testing Library is used to test the components. The application uses Eslint to enforce code style and formatting, and Husky is used to run linting and testing on commit.


* React testing library is used because it encourages best practices by helping you write tests that closely resemble how your web application is used. It is a lightweight solution that is easy to use and provides a great developer experience.


* The application uses a simple layout with a header and a list of stories. The header contains the application logo, and the stories list contains a list of stories that can be clicked on to view the story. The story viewer component displays the story and allows the user to navigate between stories.


* The application uses a simple data structure to store the stories, with each story containing an id, a title, and an array of images. The application uses React hooks to fetch the stories data and manage the state of the application.


* To optimize for performance and scalability, the application uses server-side rendering and static site generation. This allows the application to load quickly and be easily indexed by search engines.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[colored-line]: ./.docs/rainbow.png
[project-logo]: ./.docs/logo.svg