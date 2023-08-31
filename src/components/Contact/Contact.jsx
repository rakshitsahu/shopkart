import React, { useState } from 'react';
import './contact.css';
const Contact = () => {
  const [inpVal, setInpVal] = useState({
    name: '',
    email: '',
    message: '',
  });

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const addUserData = (e) => {
    e.preventDefault();
    const { name, email, message } = inpVal;
    if (name === '') {
      alert('Name cannot be empty');
    } else if (name.length <= 6) {
      alert('Name should be of at least 6 characters');
    } else if (email === '') {
      alert('Email cannot be empty');
    } else if (!email.includes('@')) {
      alert('Enter valid email');
    } else if (message === '') {
      alert('Message cannot be empty');
    } else if (message.length < 10 || message.length > 200) {
      alert('Message should be within 10 to 200 characters');
    } else {
      alert('Message Sent');
      console.log('Message Sent');
      console.log(name, email, message);
    }
  };
  return (
    <>
      <div className='contact'>
        <div className='contact-top'>
          <div className='contact-left'>
            <p>Newsletter</p>
            <p>Get news about articles and</p> <p>updates in your inbox</p>
          </div>
          <form action='' className='contact-right' id='feedback-form'>
            <div>
              <input
                type='text'
                placeholder='NAME'
                name='name'
                onChange={setVal}
                value={inpVal.name}
              />
            </div>
            <div>
              <input
                type='email'
                placeholder='EMAIL'
                name='email'
                onChange={setVal}
                value={inpVal.email}
              />
            </div>
            <div>
              <input
                placeholder='MESSAGE'
                name='message'
                onChange={setVal}
                value={inpVal.message}
              />
            </div>
          </form>
        </div>
        <div className='contact-bottom'>
          <p>GET </p>
          <p>
            IN TOUCH
            <button form='feedback-form' onClick={addUserData}>
              Send
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
