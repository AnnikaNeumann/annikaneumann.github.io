import '../components/css/ContactForm.css';
import emailjs from '@emailjs/browser';
import React from 'react'


const ContactForm = () => {


  return (
    <div>
      <h1 >Contact Form</h1>
      <form className='cf'>
        <div className='half left cf'>
          <input type='text' tabIndex='0' label='Full Name' placeholder='Full Name' name='user_name' />
          <input type='email' tabIndex='0' label='Email address' placeholder='Email address' name='user_email' />
        </div>
        <div className='half right cf'>
          <textarea name='message' tabIndex='0' label='Inputfield for message' type='text' placeholder='Your Message'></textarea>
        </div>
        <input type='submit' tabIndex='0' value='Submit' id='input-submit' />
      </form>
    </div>
  );
}


export default ContactForm;