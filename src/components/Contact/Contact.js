import React from 'react';
import './Contact.css'; // Create this CSS file for styling
import { Link } from 'react-scroll';
// Import your custom images
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import gmail from '../../assets/gmail.png'

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <h1 className='contact-title'>Contact Me</h1>
      <div className='contact-info'>
        <p>If you have any questions or would like to get in touch, feel free to reach out through the following channels:</p>
        <div className='social-media-icons'>
          <a href='https://www.linkedin.com/in/akshita-khandelwal-ab8a4624b/' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <img src={linkedin} alt='LinkedIn' />
          </a>
          <a href='https://github.com/akshitak27' target='_blank' rel='noopener noreferrer' className='social-icon'>
            <img src={github} alt='GitHub' />
          </a>
          <a href="mailto:akshitakhandelwal201@gmail.com" target='_blank'  className='social-icon'>
            <img src={gmail} alt='GitHub' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
