import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const { name, email, role, password } = await req.json();
  const filePath = path.join(process.cwd(), 'data', 'users.json');

  // Read the current users
  const fileData = fs.readFileSync(filePath);
  const users = JSON.parse(fileData || '[]');

  // Check for existing user
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return new Response(JSON.stringify({ success: false, message: 'User already exists' }), { status: 400 });
  }

  // Create a new user
  const newUser = { name, email, role, password }; // Store password
  users.push(newUser);

  // Write updated users back to file
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
