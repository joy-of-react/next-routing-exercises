import React from 'react';

function ContactPage() {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input id="name" required={true} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" />

      <button>Submit</button>
    </form>
  );
}

export default ContactPage;
