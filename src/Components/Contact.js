import React, { useRef} from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import "./Contact.css";
import { CgMail } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_763cgbg",
        "template_gxt3syy",
        form.current,
        "1-HGDh1HeOAHSiGrB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-margin-item" id="contact">
      <div className="title">CONTACT</div>
      <hr className="hr" />

      <div className="contact-flex">
        <div>
          <div className="message">Leave a message for me I will get back to you</div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              className="contact-input"
              placeholder="Name"
            />
            <br />

            <input
              type="email"
              name="useremail"
              className="contact-input"
              placeholder="Email"
            />
            <br />

            <textarea
              type="text"
              name="message"
              className="contact-inputs"
              placeholder="Enter any message for me"
            />
            <br />

            <button type="submit" className="contact-button">
              Send
            </button>
          </form>
        </div>

        <div className="contact-tips">
          <label className="contact-talk">Let's talk</label>
          <br />
          <div className="contact-list-main">
            <label className="contact-list">
              I am open to any Full Stack job opportunities.
            </label>
            <br />
            <a
              className="contact-list-all"
              href="mailto:saurabhmhaisdhune1@gmail.com"
            >
              <CgMail className="contact-icons" />
              <span className="email">saurabhmhaisdhune1@gmail.com</span>
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              className="contact-list-all"
              href="https://www.google.com/maps/place/Mumbai,+Maharashtra/@19.2506916,72.8716992,10.75z/data=!4m5!3m4!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559"
            >
              <GoLocation className="contact-icons" />
              Mumbai, India.
            </a>
            <br />
            <a className="contact-list-all" href="tel:8956293676">
              <IoCallOutline className="contact-icons" />
              +91-8956293676
            </a>
            <br />
          </div>
          <div className="social-media">
            <label className="contact-list-connect">Connect me on</label>
            <label className="social-icon-main">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Saurabhmhaisdhune"
                className="social-icon"
              >
                <FaGithub />
                <span className="tooltip">Github</span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mlsaurabh/"
                className="social-icon"
              >
                <FaLinkedin />
                <span className="tooltip">Linkedin</span>
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
