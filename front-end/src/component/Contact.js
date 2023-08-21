import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c8f0v4d', 'template_z02mf1x', form.current, 'BplNyD2b98NgGNDzl')
      .then((result) => {
          console.log(result.text);
          alert("Message Send Sucessfully");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong...")
      });
  };

    return (
        <div className="contact_container">
            <form ref={form} onSubmit={sendEmail}>
                <h3>GET IN TOUCH</h3>
                <input type="text" id="name"  name="user_name"  placeholder='Your Name' required />
                <input type="text" id="email" name="user_email" placeholder='Your Email' required />
                <textarea name='message' rows="4" placeholder="How can we help you?"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
