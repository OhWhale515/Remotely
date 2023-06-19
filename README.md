# Remotely
 
Browser Based Remote Desktop Application
=======================================

This is a demo project showcasing a browser-based remote desktop application using WebRTC, Socket.IO, Node.js, HTML, CSS, and JavaScript.

Features
--------

- User authentication
- Screen sharing
- Viewing shared screens
- Toggle screen sharing
- Simple AWS Console style interface

Prerequisites
-------------

- Node.js (v12 or higher)
- NPM (Node Package Manager)

Getting Started
---------------

1. Clone the repository:

   git clone https://github.com/your-username/your-repo.git

2. Install the dependencies:

   cd your-repo
   npm install

3. Start the server:

   node server.js

4. Open a web browser and navigate to http://<serverIP>:3000 or http://localhost:3000.

5. Enter the login credentials (username: "admin", password: "password") to access the application.

Usage
-----

- After logging in, you will be able to view the shared screens from other clients.
- To share your screen, click on the "Toggle Screen Sharing" button. Grant the necessary permissions when prompted by the browser.
- To stop screen sharing, click the "Toggle Screen Sharing" button again.

License
-------

This project is licensed under the MIT License.
