import '../components/css/ContactForm.css';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import React icons


const ContactForm = () => {
  const form = useRef();
  const [isFormEmpty, setIsFormEmpty] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if the message field is empty
    const messageField = form.current.querySelector('textarea[name="message"]');
    if (!messageField || !messageField.value.trim()) {
      setIsFormEmpty(true);
      return;
    }

    emailjs
      .sendForm(
        "React Contact Detail",
        "react contact form",
        form.current,
        "7LyZ2sovpyw_93QHC"
      )
      .then(
        (result) => {
          alert('Message sent successfully...');
          console.log("Message sent");
          setIsFormEmpty(false); // Reset the empty form flag
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
    <h1>Contact Form</h1>
    <form className='cf' ref={form} onSubmit={sendEmail}>
      <div className='half left cf'>
        <div className='input-icon'>
          <FaUser /> 
          <label htmlFor='user_name'>Full Name*</label>
          <input type='text' tabIndex='0' placeholder='Full Name' name='user_name' required />
        </div>
        <div className='input-icon'>
          <FaEnvelope /> 
          <label htmlFor='user_email'>Email address*</label>
          <input type='email' tabIndex='0' placeholder='Email address' name='user_email' required />
        </div>
      </div>
      <div className='half right cf'>
        <div className='input-icon'>
          <FaPhone /> 
          <label htmlFor='message'>Your Message*</label>
          <textarea name='message' tabIndex='0' type='text' placeholder='Your Message' required></textarea>
        </div>
        {isFormEmpty && <p style={{ color: 'red' }}>Message field cannot be empty.</p>}
      </div>
      <input type='submit' tabIndex='0' value='Submit' id='input-submit' />
    </form>
  </div>
  );
};

export default ContactForm;



