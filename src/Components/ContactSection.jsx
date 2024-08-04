import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m3zseho', 'template_hilh548', form.current, 'RypkQ_OmxWolgrPh1')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again later.');
        }
      );
  };

  return (
    <section className='py-10 px-20' id='contact'> 
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='px-16'>
          <h1 className='text-white font-bold text-3xl'>Let's Connect</h1>
          <p className='text-white mt-5 text-justify font-semibold'>
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        <div>
          <form ref={form} className='space-y-4' onSubmit={sendEmail}>
            <div>
              <label className='block text-white' htmlFor='from_name'>Your Name</label>
              <input
                className='w-full px-3 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500'
                type='text'
                id='from_name'
                name='from_name'
                required
                placeholder='Enter your name'
              />
            </div>
            <div>
              <label className='block text-white' htmlFor='email'>Your Email</label>
              <input
                className='w-full px-3 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500'
                type='email'
                id='email'
                name='user_email'
                required
                placeholder='Enter your email'
              />
            </div>
            <div>
              <label className='block text-white' htmlFor='message'>Message</label>
              <textarea
                className='w-full px-3 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500'
                id='message'
                name='message'
                rows='5'
                required
                placeholder='Enter your message'
              ></textarea>
            </div>
            <button
              className='px-6 py-2 bg-[#576CBC] text-white font-bold rounded-lg hover:bg-blue-600 transition duration-200'
              type='submit'
              value='send'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
