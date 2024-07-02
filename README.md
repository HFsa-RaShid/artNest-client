# Website Name: ArtNest
# [Server Github] (https://github.com/HFsa-RaShid/artNest-server)


# Concept and Problem Solved
ArtNest is an inclusive online platform designed for art enthusiasts to showcase, explore, and manage art & craft items. It provides a centralized space where users can seamlessly interact with art through various core functionalities.

# Key Features
+ Multi-Platform Authentication
  + Versatile Login Options: Users can sign up and log in using email/password, Google, GitHub, Facebook, or Twitter.
  + Secure Access Control: Implements JWT authentication for secure user sessions and data protection.
+ Comprehensive CRUD Operations
  + User-Friendly Interfaces: Enables users to Add, View, Update, and Delete art & craft items effortlessly.
  + Intuitive Feedback: Provides clear and immediate feedback for actions such as item addition, updates, or deletions.
+ Responsive Design
  + Cross-Device Compatibility: Ensures a seamless and consistent user experience across mobile, tablet, and desktop devices.
  + Enhanced Accessibility: Adapts to various screen sizes and resolutions, making the platform accessible to a wider audience.

# Technologies Used
+ Frontend: HTML, CSS, Tailwind CSS, JavaScript, React.js
+ Backend: Node.js, Express.js
+ Database: MongoDB
+ Authentication: Firebase, JWT
+ Animations: AOS (Animate on Scroll)

# Local Setup Guide
To run EduConnect locally on your machine, follow these steps:
+ Clone the Client Repository:
  + git clone https://github.com/HFsa-RaShid/artNest-client.git
  + cd artNest-client

+ Clone the server Repository:
  + git clone https://github.com/HFsa-RaShid/artNest-server.git
  + cd artNest-server

+ Install Dependencies:
  + npm install

+ Set Environment Variables:
  + Create a .env file in the root directory and configure necessary environment variables such as database connection URI, JWT secret key, and Auth credentials.

+ Start the Server:
  + Install nodemon globally (if you haven't already):npm install -g nodemon

+ Access the Application:
  + Open your web browser and navigate to http://localhost:5000  to access the locally running instance of ArtNest.