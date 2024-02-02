import './_Contact.scss';
import { useState } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleMailto = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:pmfoundationorg@gmail.com?subject=Contact%20Form%20from%20PMF.org&body=Email:%20${encodeURIComponent(email)}%0A%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };


  return (
    <>
      <section id='contact-page'>
        <div className="form-container">
          <h3>CONTACT US</h3>
          <p>We'd love to hear from you</p>
          <form onSubmit={handleMailto}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            ></textarea>
            <input id='contact-btn' type="submit" value="Send" />
            <div className="contact-info">
              <LocalPhoneIcon />
              (201)-294 3265
            </div>
            <div className="contact-info">
              <MailIcon />
              pmfoundationorg@gmail.com
            </div>
          </form>
        </div>
        <div className="image-container">
        </div>
      </section>
    </>
  )
}

export default Contact