"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import users from '@/data/users.json';
import NavBar from '@/components/NavBar';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      if (user.role === 'Donor') {
        router.push(`/donor/${user.id}`);
      } else if (user.role === 'Admin') {
        router.push(`/admin/${user.id}`);
      } else if (user.role === 'Hospital') {
        router.push(`/hospital/${user.id}`);
      } else {
        router.push(`/patient/${user.id}`);
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavBar />
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="mb-2 p-2 border"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-2 p-2 border"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2">Login</button>
    </div>
  );
}
