import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const { email, password } = await req.json();
  const filePath = path.join(process.cwd(), 'data', 'users.json');

  // Read the current users
  const fileData = fs.readFileSync(filePath);
  const users = JSON.parse(fileData || '[]');

  // Find the user
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    return new Response(JSON.stringify({ success: true, message: 'Login successful' }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), { status: 401 });
  }
}
