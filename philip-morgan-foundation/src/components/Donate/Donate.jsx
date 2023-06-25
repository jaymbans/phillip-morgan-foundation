import NavBar from '../NavBar';
import './_Donate.scss';

import { useState, Fragment, React } from 'react';
import Footer from '../Footer';

function Donate() {

  const [formData, setformData] = useState({
    userName: '',
    userEmail: '',
  })

  const updateForm = (e) => {
    const content = e.target.value;

    setformData({
      ...formData,
      [e.target.id]: content,
    })

    return;
  }

  const submitForm = (e) => {
    e.preventDefault();
  }


  return (
    <Fragment>
      <NavBar />
      <section>
        <div className="donations-hero">
          <div className="overlay"></div>
          <div className="container">
            <div>
              <div className="popup">
                <h2>Hey there!</h2>
                <p>
                  Our donation portal is currently in maintenance. Please fill out the form and we will reach out to you with donation information
                </p>
              </div>
            </div>
            <div>
              <form>
                <img
                  src={require('../../media/blue-medium-logo.png')} />
                <div className="form-title">
                  <button className='active'
                    id='donations'>Donations
                  </button>
                </div>
                <div className="form-content">
                  <div className="popup">
                    <h2>Hey there!</h2>
                    <p>
                      Our donation portal is currently in maintenance. Please fill out the form and we will reach out to you with donation information
                    </p>
                  </div>
                  <div className="required">
                    <input onChange={updateForm} id='userName' className='required' type="text" placeholder='Your Name' required />
                  </div>
                  <div className="required">
                    <input onChange={updateForm} id='userEmail' type="text" placeholder='Your Email' required />
                  </div>
                  <div id="message">
                    <p className="title">
                      Message
                      <span>(Templated)</span>
                    </p>
                    <p>Hi PMF Team,</p>
                    <p>
                      I would like to learn more information about donating to the foundation.
                    </p>
                    <p>
                      Sincerely,
                    </p>
                    <p>{formData.userName}</p>
                  </div>
                </div>
                <p>
                  please give us 2-3 business days before expecting a reply
                </p>
                <button onClick={submitForm} type="submit">send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </Fragment>
  )
}

export default Donate