import React, { useEffect, useState } from 'react';
import slide1 from "../../media/phil-slide-2.jpg"
import slide2 from "../../media/phil-slide3.jpg"
import slide3 from "../../media/phil-and-fam.jpg"
import slide4 from "../../media/phil-slide-4.JPG"
import slide5 from "../../media/phil-and-mq.jpg"
import "./_About.scss"

function About() {

  const [backgroundIndex, setBackgroundIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (backgroundIndex + 1) % 5;

      setBackgroundIndex(nextIndex);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundIndex]);


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
    const mailtoLink = `mailto:pmfoundationorg@gmail.com?subject=PMF Distribution List Request&body=
    The following contact would like to join the PMF mailing list: First%20Name:%20${encodeURIComponent(formData.fName)}
    %0ALast%20Name:%20${encodeURIComponent(formData.lName)}
    %0AEmail:%20${encodeURIComponent(formData.email)}`;

    window.location.href = mailtoLink;
    return
  }


  return (
    <>
      <section id="about">
        <div id="about-hero"
        >
          <div className="overlay">
            {
              [slide1, slide2, slide3, slide4, slide5].map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt="photo of phil"
                  className={`background ${backgroundIndex === index ? "show" : ""}`}
                />))
            }
          </div>
          <h1>Philip Morgan</h1>
          <h5>A Fighter, a Father, a Friend</h5>
        </div>
        <div className='first'>
          <div className="who">
            <h1>Who is Philip Morgan?</h1>
            <img src={require("../../media/phil-with-fish.png")}
              className='mobile-img'
            />
            <p>
              At the age of 56, Philip Morgan,

              a devoted family man,

              businessman, Navy Veteran,

              funny, no-nonsense, Yankee

              and Giants--loving, wonderful

              person, succumbed to the

              effects of a hard battle with

              cancer.
            </p>
            <p>
              Philip was diagnosed in

              August, 2020 with esophageal

              cancer. He bravely endured

              chemotherapy, hospitalizations,

              32 blood transfusions, immuno-

              therapy and embraced every

              available procedure/medication

              that could beat this disease. His

              suffering and war with this

              monster were shared by his

              family. He passed away

              peacefully at home on April 14,

              2021, just 8 months after being

              diagnosed. He was adamant

              that no family should ever

              experience such a horrific

              ordeal and if they face this fight,

              they do not do it alone.
            </p>
          </div>
          <div className="images">
            <img src={require("../../media/phil-with-fish.png")} />
          </div>
        </div>
        <div className='second'>
          <h1>Phil's Mission</h1>
          <p>
            The mission of our organization is to provide support and assistance to families experiencing the hardships associated with the terminal or devastating illness of a loved one.
          </p>
        </div>
        <div className="join-us">
          <div className="row-flex">
            <h1>Join Us</h1>
            <p>
              at our upcoming events, lend a helping hand, and experience the joy of giving back. Whether you're passionate about making a difference or simply want to connect with like-minded individuals, we welcome you with open arms. Your involvement matters, and together, we can create positive change.
            </p>
          </div>
          <div className="row-flex">
            <div>
              <h3>keep in touch</h3>
              <form>
                <div className="row-flex">
                  <input onChange={updateForm} id='fName' type="text" placeholder='First Name' />
                  <input onChange={updateForm} id='lName' type="text" placeholder='Last Name' />
                </div>
                <input onChange={updateForm} id='email' type="text" placeholder='Email' />
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
    </>
  )
}

export default About