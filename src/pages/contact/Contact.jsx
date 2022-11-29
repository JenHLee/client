import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_info">
        <h1 className="contact_title">Reach out</h1>
        <div className="contact_info_detail">
          <span className="contact_info_name">Hyunju Jennie Lee</span>
          <a href="mailto:hj.jennie.lee@email.com" className="contact_info_email_mailto">
          <span className="contact_info_email">hj.jennie.lee@gmail.com</span>
          </a>
        </div>
          <span className="contact_info_icons_connect">CONNECT WITH ME</span>
        <div className="contact_info_icons_div">
          <span className="contact_info_icons">
            <a href="https://github.com/JenHLee">
            <i className="fa-brands fa-github fa-2xl" id="icon1"></i>
            </a>
            <a href="https://www.instagram.com/bravehien">
            <i className="fa-brands fa-instagram fa-2xl" id="icon2"></i>
            </a>
            <a href="https://dribbble.com/JenHLee">
            <i className="fa-brands fa-dribbble fa-2xl" id="icon3"></i>
            </a>
            <a href="https://www.linkedin.com/in/hyunju-jennie-lee-405186177/">
            <i className="fa-brands fa-linkedin-in fa-2xl" id="icon4"></i>
            </a>

            
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
