import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Email() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      userEmail: email,
    };

    emailjs
      .send(
        'service_5j2xsju',   // Your service ID here
        'template_02h8sqq',  // Your template ID here
        templateParams,
        'WTCSu_Ykc_cF6_mkH'       // Your user ID here
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Thanks for signing up! Please check your email.');
        },
        (error) => {
          console.log(error.text);
          setMessage('Failed to send the email. Error: ', error.text);
        }
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Email;
