fetch("https://dinmaegler.onrender.com/auth/local", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "identifier": "carsten@mail.dk",
    "password": "654321"
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));