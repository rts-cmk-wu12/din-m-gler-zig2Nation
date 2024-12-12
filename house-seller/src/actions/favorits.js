import fetch from 'node-fetch';

async function updateUser() {
  try {
    const response = await fetch("https://dinmaegler.onrender.com/users/6163ff832616683c883b049f", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjNmZjgzMjYxNjY4M2M4ODNiMDQ5ZiIsImlhdCI6MTYzNTg0NDM2MywiZXhwIjoxNjM4NDM2MzYzfQ.w1VIG08a8IeHgLIEfgToxHIaJiA8tl2txjeQWq8H_gE"
      },
      body: JSON.stringify({
        homes: ["61572ad4251a8a42ec8cb544"]
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched data:', data); // Log data fra API-svaret

  } catch (error) {
    console.error('Error:', error); // Log fejl her
  }
}

updateUser();
