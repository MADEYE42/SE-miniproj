"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';
import users from '../../data/users.json'; // Adjust path if necessary
import fs from 'fs';
import path from 'path';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Donor'); // Default role can be set
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new user object
    const newUser = {
      id: users.length + 1,
      username,
      password,
      role,
    };

    // Write the new user to the users.json file
    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const updatedUsers = [...users, newUser];

    fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2), 'utf8');

    // Redirect to the login page after registration
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl mb-6">Register</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm mb-1">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm mb-1">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="Donor">Donor</option>
            <option value="Patient">Patient</option>
            <option value="Admin">Admin</option>
            <option value="Hospital">Hospital</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
