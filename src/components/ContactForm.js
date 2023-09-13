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
    <h1 tabIndex={'0' }>Get in touch with me for any business related enquiries</h1>
    <form className='contactform' ref={form} onSubmit={sendEmail}>
    <div className='name'>
        <div className='input-icon'>
          <FaUser /> 
          <label for='user_name'>Full Name<span aria-hidden="true">*</span></label>
          <input type='text' id='user_name' tabIndex='0' placeholder='Full Name' name='user_name' required />
        </div>
        <div className='input-icon'>
          <FaEnvelope /> 
          <label for='user_email'>Email address<span aria-hidden="true">*</span></label>
          <input type='email' id='user_email' tabIndex='0' placeholder='Email address' name='user_email' required />
        </div>
      </div>
      <div className='message_field'>
        <div className='input-icon'>
          <FaPhone /> 
          <label for='message'>Your Message<span aria-hidden="true">*</span></label>
          <textarea name='message' id='message' tabIndex='0' type='text' placeholder='Your Message' required></textarea>
        </div>
        {isFormEmpty && <p style={{ color: 'red' }}>Message field cannot be empty.</p>}
      </div>
      <input type='submit' tabIndex='0' value='Submit' className='submit' />
    </form>
  </div>
  );
};

export default ContactForm;



