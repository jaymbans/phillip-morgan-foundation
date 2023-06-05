import NavBar from '../NavBar';
import './_Contact.scss';
import Referral from './Referral';
import ContactUs from './ContactUs';

import { useState, useEffect } from 'react';
import HowItWorks from './HowItWorks';

function Contact() {
  const [formType, setFormType] = useState('referral');

  useEffect(() => {
    setFormType('referral');
    document.getElementById('referral').classList.add('active');

  }, [])

  const changeFormType = (e) => {
    e.preventDefault();

    const referralButton = document.getElementById('referral');

    const contactButton = document.getElementById('contact-us');

    // remove any active button
    [referralButton, contactButton].forEach(button => button.classList.remove('active'));

    // add the active to the button clicked
    e.target.classList.add('active');

    // change the state
    setFormType(String(e.target.id))

  }


  return (
    <>
      <NavBar />
      <section>
        <div className="contact-hero">
          <div className="overlay"></div>
          <div className="container">
            <div>
              {
                formType === 'referral'
                  ?
                  <HowItWorks />
                  :
                  <></>
              }
            </div>
            <div>
              <form>
                <img
                  src={require('../../media/blue-medium-logo.png')} />
                <div className="form-title">
                  <button
                    onClick={changeFormType}
                    id='referral'>Referral</button>
                  <button
                    onClick={changeFormType}
                    id='contact-us'>Contact Us</button>
                </div>
                <div className="form-content">
                  {formType === 'referral' ? <Referral /> : <ContactUs />}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact