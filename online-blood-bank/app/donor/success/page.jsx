"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { saveAs } from 'file-saver';

const SuccessPage = () => {
  const router = useRouter();
  const query = new URLSearchParams(window.location.search);
  const name = query.get('name');
  const location = query.get('location');
  const hospital = query.get('hospital');
  const bloodGroup = query.get('bloodGroup');
  const time = query.get('time');

  useEffect(() => {
    // Automatically trigger the download of the PDF after the component mounts
    downloadAppointmentDetails();
  }, []);

  const downloadAppointmentDetails = () => {
    const appointmentDetails = `
      Appointment Details:
      Name: ${name}
      Location: ${location}
      Hospital: ${hospital}
      Blood Group: ${bloodGroup}
      Time: ${time}
    `;

    const blob = new Blob([appointmentDetails], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'appointment-details.txt'); // You can change the file format as needed
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Success!</h1>
      <p className="mt-4">Your appointment has been requested successfully!</p>
      <p className="mt-2">Details will be downloaded shortly.</p>
      <button onClick={() => router.push('/')} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
        Go to Home
      </button>
    </div>
  );
};

export default SuccessPage;
