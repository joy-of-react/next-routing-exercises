'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  const router = useRouter();

  const { createToast } =
    React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();

    // TODO: Send the data to the server

    router.push('/exercises/02-flash-messages');

    createToast(
      "Your message was received. We'll get back to you shortly!",
      'success'
    );
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
