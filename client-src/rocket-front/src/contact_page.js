const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Basic validation
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name.trim() === '') {
    responseDiv.textContent = 'Please enter your name.';
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    responseDiv.textContent = 'Please enter a valid email address.';
    return;
  }

  if (message.trim() === '') {
    responseDiv.textContent = 'Please enter a message.';
    return;
  }

  // Simulate form submission (replace with actual submission logic one from google)
  responseDiv.textContent = 'Message sent successfully!';
  form.reset();
});
