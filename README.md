# hospital-management-system
An application system that help's to effectively administer and manage information about patients and health professionals.

## Demo :rocket:
Try hospital management system with the Netlify demo<br>
Link to demo ----> [Hospital management system](https://hospital-management-sys.netlify.app/)<br>


***The survey application is composed of the following user roles:***

1. **Admin** 
      * Has full control over the app
      * Can add doctor's
      * Can delete doctor's
      * Can view all users
      * Can view all appointments
      * Can view all prescriptions
      
2. **Doctor** 
      * Can attend to patient
      * Can view all appointments for that specific doctor
      * Can prescribe medication

3. **Patient** 
      * Can book appointment
      * Can cancel appointments
      * Can view appointment history
      * Can receive prescriptions from docots

## This project demonstrates:

 ***A typcial FullStack Application React & Firebase Project***
 
    **It covers the following**
      *React*
      *Google Firebase*


---

## Developed With

- [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.
- [React](https://reactjs.org/) - A javascript library for building user interfaces.
- [Mongo](https://www.mongodb.com/) - A source-available cross-platform document-oriented database program.
- [Express.js](https://expressjs.com) -  A back end web application framework for Node.js
- [Node.js](https://nodejs.org) - An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. 

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

- Node 14.16.x
- Npm 6.14.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

- Clone _'survey'_ repository from GitHub

  ```bash
  git clone https://github.com/khethelogp/survey
  ```

  _OR USING SSH_

  ```bash
  git clone git@github.com:khethelogp/survey.git
  ```

  - Install node modules (FrontEnd)

  ```bash
  cd survey
  cd client
  npm install
  ```
  
  - Install node modules (BackEnd)

  ```bash
  cd survey
  cd server
  npm install
  ```

Before continuing, the following steps are required:

1. Get API keys

   - Have a Database on Mongo Db

     Have a look at [Mongo](https://www.mongodb.com/basics/create-database)

### Build

- Build application

  This command will also run ESLint as part of build process.

  ```bash
  cd client
  npm run build
  ```

- Build application and start watching for changes

  This command will also run ESLint as part of build process.

  ```bash
  cd client
  npm run build:watch
  ```

  ### Run ESlint

### Run

- Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

- Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  cd client
  npm run serve
  ```

---

## References

https://github.com/khethelogp/survey

Made with :heart: by KhetheloGP
