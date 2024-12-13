"use server"
import { z } from "zod";

export default async function test(state: any, formData: FormData) {
  const { identifier, password } = Object.fromEntries(formData) as {
    identifier: string;
    password: string;
  };

  const Schema = z.object({
    identifier: z.string().email(),
    password: z.string(),
  });
  const result = Schema.safeParse({ identifier, password });

  if (!result.success) {
    return { success: false };
  }

  const response = await fetch('https://dinmaegler.onrender.com/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Authentication failed:', data);
    return { success: false };
  }

  
  return new Response(JSON.stringify({ success: true }), {
    headers: {
      'Set-Cookie': [
        `dm_token=${data.jwt}; Path=/; HttpOnly; Secure; SameSite=Strict`,
        `dm_userid=${data.user.id}; Path=/; HttpOnly; Secure; SameSite=Strict`,
      ].join(', '),
      'Content-Type': 'application/json',
    },
  });
}
