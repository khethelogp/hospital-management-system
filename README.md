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
 
    It covers the following:
      React
      React Context
      React Routing & Protected Routes
      Google Firebase
      Authentication
      Cloud FireStore

---

## Developed With

- [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.
- [React](https://reactjs.org/) - A javascript library for building user interfaces.
- [Firebase](https://firebase.google.com/) - A platform developed by Google for creating mobile and web applications.

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

- Clone _'hospital-management-system'_ repository from GitHub

  ```bash
  git clone https://github.com/khethelogp/hospital-management-system
  ```

  _OR USING SSH_

  ```bash
  git clone git@github.com:khethelogp/hospital-management-system.git
  ```

  - Install node modules (Client)

  ```bash
  cd survey
  cd client
  npm install
  ```
  
Before continuing, the following steps are required:

1. Get API keys

   - Have an app on FireBase

     Have a look at [Firebase](https://console.firebase.google.com/)

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

### Run

- Run start
     
  This will run the _'hospital-management-system'_ npm task

  ```bash
  npm start
  ```
---

## References

https://github.com/khethelogp/hospital-management-system

Made with :heart: by KhetheloGP
