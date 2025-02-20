# NASA Space Data Application APOD

## Overview
 This project is a full-stack web application that uses NASA's Open APIs to showcase space-related data, specifically the Astronomy Picture of the Day (APOD). It features a React frontend and a Node.js backend that are already hosted and accessible via live links.

---

## Features

- Displays the **Astronomy Picture of the Day (APOD)** along with its title and explanation.
- Shows **loading** and **error states** while fetching data.
- Uses **React** for a responsive and user-friendly interface.
- The **Node.js backend** fetches data from NASA's API and serves it to the frontend.

## Project Structure

```bash
/nasa-app
  ├── /src
    ├── /components        # React components for the landing page /not used currently
    ├── /assets            # Images and static files /not used currently 
    ├── App.js             # Main React app file that handles the UI and logic
    ├── App.css            # Styles for the main app component
    ├── index.js           # Entry point for the React app
    ├── index.css          # Global styles for the app
                           # currently not used and could be used  auto generated by "npm create-react-app app_name"
  ├── /public
    ├── index.html         # Main HTML file for the frontend /not used currently 
  ├── package.json         # Frontend dependencies and metadata
  ├── README.md            # Project documentation
  
```

## GitHub Repositories

- **Web1 (APOD App)**:
  - **Backend**: [APOD Backend GitHub Repository](https://github.com/Ananyanayaka/nasa-app-Backend-APOD)
---

## How to Use

The frontend and backend are already hosted and running. You can visit the following URLs to interact with the application:

- **Frontend (React App)**: [NASA Space Data Frontend](https://nasa-frontend-apod.vercel.app/)
- **Backend API**: [NASA Space Data API](https://nasa-backend-ananya-8a0f587afdfc.herokuapp.com/)

No setup is required. Simply visit the live demo links to view the **Astronomy Picture of the Day (APOD)** along with its title and explanation.


## Frontend Setup (React)

If you want to run the frontend locally:

### 1. Clone the repository

Clone the frontend repository from GitHub:

```bash
git clone https://github.com/Ananyanayaka/nasa-FRONTEND-APOD.git
cd nasa-FRONTEND-APOD
```

### 2. Install dependencies

Install the necessary dependencies using `npm` (Node Package Manager):

```bash
npm install
```

### 3. Set up the Backend

If you want to run the backend locally see the local set up of backend at 
 **Backend**: [APOD Backend GitHub Repository](https://github.com/Ananyanayaka/nasa-app-Backend-APOD)

- Launch the backend server locally:


### 4. Set up the Frontend to Connect to the Backend

- In your frontend project Repository src/app.js, replace the link of the port that backend is running on, usually the  port "5000 " by default (or the port you specify)
- or u can also use the already launched backend link on Heraku(its updated in code already)


### 5. Start the Frontend

Now, start the frontend React development server:

```bash
npm start
```
- The app will be available at "http://localhost:3000" in your browser

---
## API Key Setup
- The backend makes requests to NASA's API to fetch the Astronomy Picture of the Day (APOD). No need to configure an API key on your local machine, as the backend has been set up to use the key.!

---

## Acknowledgements
- Thanks to NASA for providing the Open APIs!
- React.js for being an excellent frontend framework.
- Vercel and Heroku for making deployment easy.

---
## How the Application Works

1. The **React frontend** communicates with the **Node.js backend** via API requests to fetch **Astronomy Picture of the Day (APOD)** data.
2. The backend fetches the data from NASA's public API (https://api.nasa.gov/) and returns it to the frontend.
3. The frontend then displays the APOD, its title, and an explanation.



