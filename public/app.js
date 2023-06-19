// Simple user authentication (username: "admin", password: "password")
function authenticateUser(username, password) {
  return username === 'yo' && password === 'ho';
}

// Global variables
let isScreenSharing = false;
let authToken = null;

// Toggle screen sharing
function toggleScreenSharing() {
  if (!isScreenSharing) {
    // Request screen sharing permission
    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then((stream) => {
        const videoTrack = stream.getVideoTracks()[0];
        const videoSender = socket.emit('screenData', videoTrack);
        isScreenSharing = true;
        console.log('Screen sharing started');
      })
      .catch((error) => {
        console.error('Error capturing screen:', error);
      });
  } else {
    // Stop screen sharing
    socket.emit('stopScreenSharing');
    isScreenSharing = false;
    console.log('Screen sharing stopped');
  }
}

// Authenticate user
function authenticate() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (authenticateUser(username, password)) {
    authToken = generateAuthToken();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    console.log('User authenticated');
  } else {
    alert('Invalid credentials. Please try again.');
  }
}

// Generate authentication token
function generateAuthToken() {
  // Generate a random token for demonstration purposes
  const token = Math.random().toString(36).substring(2);
  return token;
}

// Add a new screen to the screens container
function addScreenElement(screenId) {
  const screensContainer = document.getElementById('screensContainer');
  const screenElement = document.createElement('div');
  screenElement.id = `screen-${screenId}`;
  screenElement.classList.add('screen');
  screenElement.innerText = `Screen ${screenId}`;
  screensContainer.appendChild(screenElement);
}

// Remove a screen from the screens container
function removeScreenElement(screenId) {
  const screenElement = document.getElementById(`screen-${screenId}`);
  if (screenElement) {
    screenElement.parentNode.removeChild(screenElement);
  }
}

// Socket.io logic
const socket = io();

socket.on('connect', () => {
  console.log('Connected to server');

  // Send authentication token
  socket.emit('authenticate', authToken);
});

socket.on('authenticationError', () => {
  console.log('Authentication failed. Redirecting to login...');
  window.location.href = '/';
});

socket.on('screenData', (data) => {
  // Process the received screen data
  console.log('Received screen data:', data);
  addScreenElement(data.screenId);
});

socket.on('stopScreenSharing', (data) => {
  // Remove screen from the screens container
  console.log('Screen sharing stopped:', data);
  removeScreenElement(data.screenId);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

// Event listeners for screen sharing and authentication
document.getElementById('toggleScreenSharingBtn').addEventListener('click', toggleScreenSharing);
document.getElementById('loginBtn').addEventListener('click', authenticate);
document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  authenticate();
});
