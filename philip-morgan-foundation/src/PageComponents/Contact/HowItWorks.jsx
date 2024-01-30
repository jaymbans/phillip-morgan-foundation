import React from 'react'
import MailIcon from '../../media/blue-mail-icon.png';
import PhoneIcon from '../../media/blue-phone-icon.png';
import GiftIcon from '../../media/blue-gift-icon.png';

function HowItWorks() {
  return (
    <div>
      <div className="popup">
        <h2>How it works!</h2>
        <span>
          <img src={MailIcon} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </span>
        <span>
          <img src={PhoneIcon} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </span>
        <span>
          <img src={MailIcon} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </span>
        <span>
          <img src={GiftIcon} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </span>
      </div>
    </div>
  )
}

export default HowItWorks