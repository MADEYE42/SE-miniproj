"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import users from '@/data/users.json'; // Assuming this is where you have your user data
import NavBar from '@/components/NavBar';
import { saveAs } from 'file-saver'; // Make sure to install file-saver: npm install file-saver

const DonorPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const donor = users.find(u => u.id == id); // Fetch donor details
  const [name, setName] = useState(donor?.name || '');
  const [location, setLocation] = useState('');
  const [hospital, setHospital] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('10:00 AM'); // Default time

  const locations = ["Location A", "Location B", "Location C"];
  const hospitals = ["Hospital X", "Hospital Y", "Hospital Z"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAppointment = {
      name,
      location,
      hospital,
      bloodGroup,
      time: appointmentTime,
    };

    // Save appointment details to donors.json (this should be done on the server-side)
    await fetch('/api/saveAppointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAppointment),
    });

    // Redirect to the success page
    router.push(`/donor/success?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}&hospital=${encodeURIComponent(hospital)}&bloodGroup=${encodeURIComponent(bloodGroup)}&time=${encodeURIComponent(appointmentTime)}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <NavBar />
      <h1 className="text-3xl my-4">Donor Information</h1>
      <form onSubmit={handleSubmit} className="p-4 border">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)} required className="border p-2 mb-2 w-full">
          <option value="">Select Location</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>{loc}</option>
          ))}
        </select>
        <select value={hospital} onChange={(e) => setHospital(e.target.value)} required className="border p-2 mb-2 w-full">
          <option value="">Select Hospital</option>
          {hospitals.map((hos, index) => (
            <option key={index} value={hos}>{hos}</option>
          ))}
        </select>
        <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required className="border p-2 mb-2 w-full">
          <option value="">Select Blood Group</option>
          {bloodGroups.map((bg, index) => (
            <option key={index} value={bg}>{bg}</option>
          ))}
        </select>
        <label className="block mb-2">Appointment Time:</label>
        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Request Appointment
        </button>
      </form>
    </div>
  );
};

export default DonorPage;
