# NASA Space Data Application

## Overview
 This project is a full-stack web application that uses NASA's Open APIs to showcase space-related data, specifically the Astronomy Picture of the Day (APOD). It features a React frontend and a Node.js backend that are already hosted and accessible via live links.

---

## Demo

- **Frontend (React)**: [NASA Space Data Frontend](https://nasa-frontend-apod.vercel.app/)
- **Backend (Node.js)**: [NASA Space Data Backend](https://nasa-backend-ananya-8a0f587afdfc.herokuapp.com/)
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
    ├── /components        # React components for the landing page
    ├── /assets            # Images and static files
    ├── App.js             # Main React app file that handles the UI and logic
    ├── App.css            # Styles for the main app component
    ├── index.js           # Entry point for the React app
    ├── index.css          # Global styles for the app
  ├── /public
    ├── index.html         # Main HTML file for the frontend
  ├── package.json         # Frontend dependencies and metadata
  ├── README.md            # Project documentation
  ├── /backend
    ├── server.js          # Node.js server to handle API requests
    ├── package.json       # Backend dependencies and metadata
  ├── README.md            # Backend documentation
```

## Live Links

-  **Frontend**: [APOD Frontend on Vercel](https://nasa-frontend-apod.vercel.app/)
- **Backend Live API**: [NASA Space Data Backend on Heroku](https://nasa-backend-ananya-8a0f587afdfc.herokuapp.com/)

## How to Use

The frontend and backend are already hosted and running. You can visit the following URLs to interact with the application:

- **Frontend (React App)**: [NASA Space Data Frontend](https://nasa-frontend-apod.vercel.app/)
- **Backend API**: [NASA Space Data API](https://nasa-backend-ananya-8a0f587afdfc.herokuapp.com/)

No setup is required. Simply visit the live demo links to view the **Astronomy Picture of the Day (APOD)** along with its title and explanation.

## API Key Setup

The backend makes requests to NASA's API to fetch the Astronomy Picture of the Day (APOD). No need to configure an API key on your local machine, as the backend has been set up to use the key.

## Contributing

We welcome contributions! Feel free to fork this repository and submit pull requests for bug fixes or improvements.

## License

This project is open-source and available under the [MIT License](LICENSE).
```

### Key Updates:
1. **Live Links**: Added a section that directly links to the live demo of the frontend and backend hosted on Vercel and Heroku, respectively.
2. **No Setup Needed**: Mentioned that everything is already hosted, so there's no need to clone or run the backend locally.

This should now reflect the current state of the project. Let me know if you'd like any further changes!
