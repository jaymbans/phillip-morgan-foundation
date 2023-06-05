import React, { useState } from 'react';
import HowItWorks from './HowItWorks';

function Referral() {
  const [formData, setformData] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    refName: '',
    refEmail: '',
    message: ''
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
    <div>
      <HowItWorks />
      <div className="required">
        <input onChange={updateForm} id='userName' className='required' type="text" placeholder='Your Name' required />
      </div>
      <div className="required">
        <input onChange={updateForm} id='userEmail' type="text" placeholder='Your Email' required />
      </div>
      <input onChange={updateForm} id='userPhone' type="text" placeholder='Your Phone' />
      <div className="required">
        <input onChange={updateForm} id='refName' type="text" placeholder='Referral Name' required />
      </div>
      <div className="required">
        <input onChange={updateForm} id='refEmail' type="text" placeholder='Referral Email' required />
      </div>
      <div className="required">
        <textarea onChange={updateForm} id="message" cols="30" rows="10" placeholder='Message' required>{formData.message.value}</textarea>
      </div>
      <p>
        please give us 2-3 business days before expecting a reply
      </p>
      <button onClick={submitForm} type="submit">send
      </button>
    </div>
  )
}

export default Referral