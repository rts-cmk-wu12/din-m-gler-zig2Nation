"use server"
import { cookies } from "next/headers";
import { z } from "zod";

export default async function test(state: any, formData: FormData) {
  const { identifier, password } = Object.fromEntries(formData) as {
    identifier: string;
    password: string;
  };

  // Validate inputs
  const Schema = z.object({
    identifier: z.string().email(),
    password: z.string(),
  });
  const result = Schema.safeParse({ identifier, password });

  if (!result.success) {
    return { success: false };
  }

  // Authenticate bruger
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

   // Store cookies using the response object
   const cookieStore = cookies();

   // Set cookies - make sure the cookies API works in this context
   cookieStore.set('dm_token', data.jwt, { path: '/' }); 
   cookieStore.set('dm_userid', data.user.id, { path: '/' });

  return { success: true };
}
