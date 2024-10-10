"use client"; // Ensure this is a client component
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Donor'); // Default role
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, role, password }),
    });

    if (response.ok) {
      // Handle success, redirect or show a message
      router.push('/login'); // Redirect to login page
    } else {
      // Handle error
      console.error('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Register</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 mb-2"
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 mb-2">
          <option value="Donor">Donor</option>
          <option value="Patient">Patient</option>
          <option value="Hospital">Hospital</option>
          <option value="Admin">Admin</option>
        </select>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 mb-2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="border p-2 mb-2"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
