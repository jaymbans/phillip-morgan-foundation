import './_Donate.scss';

function Donate({
  title = "Thank you for your support",
  action = "Donate through",
  qrLink = require("../../media/pmf-qr-donate.png"),
  formLink = "https://www.zeffy.com/en-US/embed/donation-form/324a1727-cb81-4b10-ba06-4e0d68fdf08c"
}) {


  return (
    <>
      <section id="donate">
        <h1>
          {title}
        </h1>
        <div className="donation">
          <h2>{`${action} QR Code:`}</h2>
          <img src={qrLink} />
          <h2>or</h2>
        </div>
        <div className="donation">
          <h2>{`${action} form`}</h2>
        </div>
        <div className='donation-iframe'>
          <iframe title='Donation form powered by Zeffy' src={formLink} allow="payment" allowTransparency="true"></iframe>
        </div>
      </section >
    </>
  )
}

export default Donate