document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.target;
  const formMessage = document.getElementById('form-message');
  const formData = new FormData(form);

  try {
    const response = await fetch('/', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      formMessage.textContent = 'Message sent successfully!';
      formMessage.className = 'text-green-600';
      form.reset();
    } else {
      formMessage.textContent = 'Failed to send message. Please try again.';
      formMessage.className = 'text-red-600';
    }
  } catch (error) {
    formMessage.textContent = 'Error: ' + error.message;
    formMessage.className = 'text-red-600';
  }
});