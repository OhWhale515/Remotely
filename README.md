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


Prerequisites
-------------

- Node.js (v12 or higher)
- NPM (Node Package Manager)

Getting Started
---------------


1. Install the dependencies:

   cd your-repo
   npm install

2. Start the server:

   node server.js

3. Open a web browser and navigate to http://<your.server.IP.Here>:3000 or http://localhost:3000.

4. Enter the login credentials (username: "admin", password: "password") to access the application.

Usage
-----

- After logging in, you will be able to view the shared screens from other clients.
- To share your screen, click on the "Toggle Screen Sharing" button. Grant the necessary permissions when prompted by the browser.
- To stop screen sharing, click the "Toggle Screen Sharing" button again.

License
-------

This project is licensed under the MIT License.
