# Online Blood Bank

An online blood bank management system built with Next.js. The platform enables donors, patients, hospitals, and admins to manage blood donation processes efficiently. Users can register, log in, and manage appointments based on their roles, with specific functionalities for each user type.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

### Donor
- View and edit personal details.
- Access donation history from a JSON file.
- Request appointments for donation.
- Receive notifications for scheduled appointments (time, location, token ID).
- Accept appointments and download appointment details as a PDF.

### Patient
- Register with a hospital, providing blood type, name, contact number, and documents.
- Track hospital registration and interactions.

### Hospital
- Manage donor notifications and allocate donation slots.
- Maintain an inventory of blood levels.
- View and manage patient details.

### Admin
- Receive alerts when donors request appointments.
- Accept or cancel appointments.
- View donor details and manage appointment schedules.

## Technologies Used

- **Next.js** (React framework)
- **Tailwind CSS** (for styling)
- **Node.js** (for backend logic)
- **JSON files** (for credential storage and data handling)
- **PDF generation library** (for downloading appointment details)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/online-blood-bank.git
   cd online-blood-bank
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Registration and Login
1. Users can sign up by providing their details (Donor, Patient, Hospital, or Admin) on the registration page.
2. Credentials are validated using a JSON file located in the `data` folder.
3. After login, users are redirected to their respective dashboards based on their role:
   - **Donor**: Access donation history, request appointments, receive notifications.
   - **Patient**: Register with a hospital and manage documents.
   - **Hospital**: Manage blood inventory and donor schedules.
   - **Admin**: Manage all system data and respond to donor requests.

### Data Storage
- The project uses a `users.json` file located in the `data` folder for storing user details.
- Donation history and appointment data are stored in additional JSON files for donors, hospitals, and admins.

### Appointment Scheduling
- Donors request appointments via the donation request page.
- Notifications are sent to hospitals and admins for confirmation and scheduling.
- After confirmation, the donor receives a PDF with appointment details.

## Folder Structure

```bash
online-blood-bank/
├── public/
├── src/
│   ├── components/         # Reusable components for forms, notifications, etc.
│   ├── pages/              # Next.js pages for different routes
│   ├── styles/             # Tailwind CSS configurations and global styles
│   └── data/               # JSON files for storing user and appointment data
├── README.md               # Project README file
└── package.json            # Project configuration and dependencies
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.
