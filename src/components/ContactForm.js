import '../components/css/ContactForm.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "React Contact Detail",
        "react contact form",
        form.current,
        "7LyZ2sovpyw_93QHC"
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log("message sent");
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
          <input type='text' tabIndex='0' label='Full Name' placeholder='Full Name' name='user_name' />
          <input type='email' tabIndex='0' label='Email address' placeholder='Email address' name='user_email' />
        </div>
        <div className='half right cf'>
          <textarea name='message' tabIndex='0' label='message' type='text' placeholder='Your Message'></textarea>
        </div>
        <input type='submit' tabIndex='0' value='Submit' id='input-submit' />
      </form>
    </div>
  );
}


export default ContactForm;