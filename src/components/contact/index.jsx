import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { ThemeContext } from '../../context';

const Index = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_wr7hay7',
        'template_2pl0nvp',
        formRef.current,
        'user_NVNDcKOfCvceV0dHTOL6y'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='wrapper'>
      <div className='contact'>
        <div className='contact-headline'>
          <p>be in touch</p>
          <h1>Contact</h1>
        </div>
        <div
          className='contact-container'
          style={{
            backgroundColor: darkMode ? '#636363' : '#ffffff',
            color: darkMode && '#fff',
          }}
        >
          <div className='contact-left'>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label>
                <p>Name</p>
                <input
                  type='text'
                  name='user_name'
                  style={{
                    backgroundColor: darkMode ? '#b8b5b5' : '#ffffff',
                  }}
                />
              </label>
              <label>
                <p>Email</p>
                <input
                  type='email'
                  name='user_email'
                  style={{
                    backgroundColor: darkMode ? '#b8b5b5' : '#ffffff',
                  }}
                />
              </label>
              <label>
                <p>Subject</p>
                <input
                  type='text'
                  name='user_subject'
                  style={{
                    backgroundColor: darkMode ? '#b8b5b5' : '#ffffff',
                  }}
                />
              </label>
              <label>
                <p>Message</p>
                <textarea
                  rows='10'
                  name='user_message'
                  style={{
                    backgroundColor: darkMode ? '#b8b5b5' : '#ffffff',
                  }}
                />
              </label>
              <button>send</button>
              {sent && <h4>Thank you for your message!</h4>}
            </form>
          </div>
          <div className='contact-right'>
            <img src='/assets/shake.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
