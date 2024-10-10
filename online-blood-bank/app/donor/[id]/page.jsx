import { useRouter } from 'next/navigation';
import users from '../../../data/users.json';
import { useState } from 'react';
import NavBar from '../../../components/NavBar';

export default function DonorPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const donor = users.find(u => u.id == id);
  const [schedule, setSchedule] = useState({
    time: "10:00 AM",
    location: "City Hospital",
    token: "12345"
  });
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    router.push('/donor/success');
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <NavBar />
      <h1 className="text-3xl my-4">Welcome, {donor?.name}</h1>
      <div className="p-4 border">
        <h2 className="text-xl">Donation History</h2>
        <ul>
          {donor?.donationHistory?.map((donation, index) => (
            <li key={index}>
              {donation.date} - {donation.location} (Token: {donation.token})
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border mt-4">
        <h2 className="text-xl">Upcoming Appointment</h2>
        <p>Time: {schedule.time}</p>
        <p>Location: {schedule.location}</p>
        <p>Token ID: {schedule.token}</p>
        <button onClick={handleAccept} className="bg-green-500 text-white p-2 mt-2">Accept</button>
        <button className="bg-red-500 text-white p-2 mt-2 ml-2">Decline</button>
      </div>
    </div>
  );
}
