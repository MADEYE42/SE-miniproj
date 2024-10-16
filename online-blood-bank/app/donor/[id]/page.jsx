"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import users from '@/data/users.json'; // Assuming this is where you have your user data
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

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
    <div>
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <NavBar />
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 mt-8">
        <h1 className="text-4xl font-bold text-red-900 text-center mb-8">Request an Appointment</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-red-900"
          />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-red-900"
          >
            <option value="">Select Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
          <select
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-red-900"
          >
            <option value="">Select Hospital</option>
            {hospitals.map((hos, index) => (
              <option key={index} value={hos}>{hos}</option>
            ))}
          </select>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-red-900"
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((bg, index) => (
              <option key={index} value={bg}>{bg}</option>
            ))}
          </select>
          <label className="block text-lg font-semibold text-gray-700">Appointment Time:</label>
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-red-900"
          />
          <button
            type="submit"
            className="w-full bg-red-900 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-yellow-500 transition duration-300 ease-in-out"
          >
            Request Appointment
          </button>
        </form>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default DonorPage;
