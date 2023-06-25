import React, { useState, Fragment } from 'react';
import NavBar from '../NavBar';
import './_About.scss';
import largeLogo from '../../media/about-background.png'
import Footer from '../Footer';

function About() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: ''
  })

  const updateForm = (e) => {
    const content = e.target.value;

    setFormData({
      ...formData,
      [e.target.id]: content,
    })

    return;
  }

  const submitForm = (e) => {
    e.preventDefault();
    alert(formData.email);
    return
  }

  return (
    <Fragment>
      <NavBar />
      <section>
        <div className='first'>
          <img src={largeLogo} />
          <div className="who">
            <h1>Who is Philip Morgan?</h1>
            <div className="mobile-img"></div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="images">
            <div className="img"></div>
            <div className="row">
              <div className="img"></div>
              <div className="img"></div>
            </div>
            <div className="img"></div>
          </div>
        </div>
        <div className='second'>
          <h1>Phil's Mission</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="join-us">
          <div className="row">
            <h1>Join Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="row">
            <div>
              <h3>keep in touch</h3>
              <form>
                <div className="row">
                  <input onChange={updateForm} id='fName' type="text" placeholder='First Name' />
                  <input onChange={updateForm} id='lName' type="text" placeholder='Last Name' />
                </div>
                <input onChange={updateForm} id='email' type="text" placeholder='Email Name' />
                <button type='submit' onClick={submitForm}>sign up for updates</button>
              </form>
            </div>
            <div className="media-links">
              <div className="links">
                <a target='_blank' href='https://www.facebook.com/PhilipMorganFoundation/'>
                  <img src={require('../../media/purple-fb.png')} />
                </a>
                <a target='_blank' href='https://www.instagram.com/philipmorganfoundation/'>
                  <img src={require('../../media/purple-ig.png')} />
                </a>
                <a target='_blank' href='mailto:pmfoundationorg@gmail.com'>
                  <img src={require('../../media/purple-mail.png')} />
                </a>
              </div>
              <h3>@philipmorganfoundation</h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  )
}

export default About