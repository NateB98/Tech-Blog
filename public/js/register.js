async function registrationHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#username-register').value.trim();
  const password = document.querySelector('#password-register').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      console.log('success');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#register-form').addEventListener('submit', registrationHandler);