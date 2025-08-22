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
   ```bash
   git clone https://github.com/pyprogrammer79/snapdrop-clone.git && cd snapdrop-clone
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Run the server
   ```bash
   node server.js
   ```
5. Open in browser
   Go to [http://localhost:3000](http://localhost:3000) on any device connected to your local network.

---

## Usage

1. On first visit, a popup will ask for your device name.
2. All devices on the same network will appear in the device list.
3. Click a device to select files for sending.
4. The receiving device will get a confirmation popup to accept or reject the file.
5. Accepted files are downloaded automatically.

---

## Run as systemd Service (optional)

You can run Snapdrop Clone as a background service on Linux (e.g. Raspberry Pi):

1. Copy the provided `snapdrop-clone.service` file to systemd:

```bash
sudo cp snapdrop-clone.service /etc/systemd/system/
```

2. Edit the service file to set the correct user and path for your system:

```bash
sudo nano /etc/systemd/system/snapdrop-clone.service
```

* Change the `User=` line to the Linux user you want the service to run as.
* Update `WorkingDirectory=` and `ExecStart=` to the full path of your Snapdrop Clone folder and server script.

3. Reload systemd and enable the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable snapdrop-clone
sudo systemctl start snapdrop-clone
```

4. Check the service status:

```bash
systemctl status snapdrop-clone
```

Now Snapdrop Clone will start automatically on boot.

---

## Notes

* Works best on the same Wi-Fi network.
* No internet connection is required.
* Device names are stored locally in the browser for convenience.

---

## License

MIT License
