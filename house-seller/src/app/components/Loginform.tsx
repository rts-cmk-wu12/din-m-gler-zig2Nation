//// src/components/LoginForm.tsx
//'use client';
//
//import { useState, FormEvent } from 'react';
//
//const LoginForm = () => {
//  const [identifier, setIdentifier] = useState<string>('');
//  const [password, setPassword] = useState<string>('');
//  const [error, setError] = useState<string>('');
//
//  const handleLogin = async (e: FormEvent) => {
//    e.preventDefault();
//
//    const res = await fetch('/api/auth', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify({ identifier, password })
//    });
//
//    const data = await res.json();
//
//    if (res.ok) {
//      console.log('Login successful');
//      // Redirect or show success
//    } else {
//      setError(data.message || 'Login failed');
//    }
//  };
//
//  return (
//    <form onSubmit={handleLogin}>
//      <div>
//        <label>Email</label>
//        <input
//          type="email"
//          value={identifier}
//          onChange={(e) => setIdentifier(e.target.value)}
//          required
//        />
//      </div>
//      <div>
//        <label>Password</label>
//        <input
//          type="password"
//          value={password}
//          onChange={(e) => setPassword(e.target.value)}
//          required
//        />
//      </div>
//      {error && <p>{error}</p>}
//      <button type="submit">Login</button>
//    </form>
//  );
//};
//
//export default LoginForm;
//