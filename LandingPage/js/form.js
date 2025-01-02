// // Contact form handling
// const contactForm = document.getElementById('contactForm');

// contactForm.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   // Get form data
//   const formData = new FormData(contactForm);
//   const data = Object.fromEntries(formData);
  
//   // Here you would typically send the data to a server
//   console.log('Form submitted:', data);
  
//   // Show success message
//   const button = contactForm.querySelector('button');
//   const originalText = button.textContent;
//   button.textContent = 'Message Sent!';
//   button.disabled = true;
  
//   setTimeout(() => {
//     button.textContent = originalText;
//     button.disabled = false;
//     contactForm.reset();
//   }, 3000);
// });

const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Simulate sending data to a server
  console.log('Form submitted:', data);

  // Show modal
  successModal.style.display = 'flex';

  // Hide modal and reset form after 3 seconds
  setTimeout(() => {
    successModal.style.display = 'none';
    contactForm.reset();
  }, 3000);
});
