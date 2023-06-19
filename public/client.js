const socket = io();

// Capture screen and send data to server
function captureAndSendScreen() {
  navigator.mediaDevices
    .getDisplayMedia({ video: true })
    .then((stream) => {
      const videoTrack = stream.getVideoTracks()[0];
      const videoSender = socket.emit('screenData', videoTrack);
    })
    .catch((error) => {
      console.error('Error capturing screen:', error);
    });
}

// Handle received screen data
socket.on('screenData', (data) => {
  // Process the received screen data
  console.log('Received screen data:', data);
});

// Call the function to start screen sharing
captureAndSendScreen();
