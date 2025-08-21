# Snapdrop Clone

A simple peer-to-peer file sharing web app inspired by [https://snapdrop.net/](https://snapdrop.net/).
Allows devices on the same network to discover each other and share files directly via WebSockets.

---

## Features

* Auto-detect devices on the same network
* Peer-to-peer file transfer
* Accept or reject incoming files
* Custom device names (stored in browser)
* Works on desktop and mobile browsers
* No installation required on client devices

---

## Installation

### Requirements

* Node.js (v18+ recommended)
* npm
* Web browser (Chrome, Firefox, Safari, Edge)

### Steps

1. Clone the repository
   git clone [https://github.com/YOUR\_USERNAME/snapdrop-clone.git](https://github.com/YOUR_USERNAME/snapdrop-clone.git)
   cd snapdrop-clone

2. Install dependencies
   npm install

3. Run the server
   node server.js

4. Open in browser
   Go to [http://localhost:3000](http://localhost:3000) on any device connected to your local network.

---

## Usage

1. On first visit, a popup will ask for your device name.
2. All devices on the same network will appear in the device list.
3. Click a device to select files for sending.
4. The receiving device will get a confirmation popup to accept or reject the file.
5. Accepted files are downloaded automatically.

---

## Notes

* Works best on the same Wi-Fi network.
* No internet connection is required.
* Device names are stored locally in the browser for convenience.

---

## License

MIT License
