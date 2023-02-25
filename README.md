# mozohack

## Description

To be able to enter a prescription with structured data in a software system, within a comparable time to hand written prescription

EMR software is used by doctors to enter all patient information. They also add the prescribed prescriptions, prescription data entry in software makes it possible for pharmacy and insurance firms to access prescription information and lends itself to research and analytics, but it takes far longer than entering a prescription by hand.

We will therefore simplify and make prescription data entry comparable to handwritten prescription data entry.

## 🛠️ Tech Stack

- React.js for Frontend
- Node.js and Express.js for Backend
- MonogDB for Database
- Tailwind CSS for frontend UI

## 📂 Project Organization

    ├── README.md          <- The top-level README for developers using this project.
    │
    ├── emids-frontend
    │       ├── package.json        <- Containing the required node modules start up scripts etc
    │       ├── postcss.config.js   <- Tailwind css file
    │       ├── tailwind.config.js  <- Tailwind css file
    │       ├── public
    │       └── src
    │           ├── App.js          <- React App
    │           ├── index.js        <- React App startup
    │           ├── Home.js         <- Home Page
    │           ├── Layout.js       <- Navigation Structure
    │           ├── pages           <- Folder for pages
    │           └── components      <- Folder for react components
    │
    │
    └── emids-backend
        ├── node_modules      <- Folder containg node modules
        ├── .env              <- MongoDB connection string
        ├── prescription
        │    └── index.js     <- Making the html for EHR and converting to pdf format
        ├── routes
        │    ├── patient.js   <- API  Routes for add/deleting a patient
        │    └── doctor.js    <- API Routes for add/deleting a doctor
        ├── models
        │    ├── patient.js   <- Defining  Database Structure Routes for  a patient
        │    └── doctor.js    <- Defining  Database Structure Routes for  a doctor
        │
        ├── Prescription.pdf. <- Sample PDF File for editing
        │
        ├── index.js          <- Express app with startu
        ├── package.json      <- Containing the required node modules start up scripts etc
        └── db
             └──  conn.js     <- Connect to MongoDB


## Clone and Start

#### Starting the frontend

```
cd frotend
npm start
```

#### Starting the backend

```
cd backend
npm start
```
