import NavBar from '../NavBar';
import './_Donate.scss';
import Footer from '../Footer';

function Donate() {


  return (
    <>
      <section id="donate">
        <h1>
          Thank you for your support
        </h1>
        <div className="donation">
          <h2>Donate with QR Code:</h2>
          <img src={require("../../media/pmf-qr-donate.png")} />
          <h2>or</h2>
        </div>
        <div className="donation">
          <h2>Donate through our form</h2>
        </div>
        <div className='donation-iframe'>
          <iframe title='Donation form powered by Zeffy' src='https://www.zeffy.com/en-US/embed/donation-form/324a1727-cb81-4b10-ba06-4e0d68fdf08c' allowpaymentrequest allowTransparency="true"></iframe>
        </div>
      </section >
    </>
  )
}

export default Donate