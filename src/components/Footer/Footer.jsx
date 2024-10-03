import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
 
  faInstagram,

  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faX } from "@fortawesome/free-solid-svg-icons";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer links take 4 columns */}
        <div className="footer-links">
          <h4>Other Links</h4>
          <ul>
            <li><a target="_blank" href="https://www.aicte-india.org/">AICTE</a></li>
            <li><a  target="_blank" href=" https://www.pci.nic.in/">PCI</a></li>
            <li><a target="_blank" href="http://www.rguhs.ac.in/">RGUHS</a></li>
          </ul>
          {/* <div className="icons">
            <FontAwesomeIcon icon={faFacebookF} className="fab" />
            <FontAwesomeIcon icon={faTwitter} className="fab" />
            <FontAwesomeIcon icon={faInstagram} className="fab" />
            <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
          </div> */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p> mail:<a href="mailto:kushmainstitutions09@gmail.com">kushmainstitutions09@gmail.com</a></p>
            <p>Contact Number:</p>
            <p>Office: 0836-2002321 / 22</p>
            <p>Mobile: 9916197799</p>
            <p>Address: Opposite to Court Complex, Beside Hosur Bus Terminal,<br />
              Mariyan Timmasagar Extension, Vidyanagar, Hubballi-580031</p>
          </div>

          
        </div>

        {/* Footer map takes 8 columns */}
        <div className="footer-map">
          <h4>Location Map</h4>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.364123614187!2d75.12333257363895!3d15.356753858120227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d749e4c0ec9d%3A0xc329d6af065b5910!2sKushma%20Institutions!5e0!3m2!1sen!2sin!4v1727965549569!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
    
        </div>
        
        
          
        
        
      </div>

      <div className="footer-about">
        {/* Additional footer content can go here */}
        <div className="icons">
            <Link to={"https://m.facebook.com/kushma.nursing1/"}><FontAwesomeIcon icon={faFacebookF} className="fab" /></Link>
            <Link to={"https://x.com/Kushma_Nursing"}><FontAwesomeIcon icon={faX} className="fab" /></Link>
            <Link to={"https://www.instagram.com/kushma.nursing/"}><FontAwesomeIcon icon={faInstagram} className="fab" /></Link>
            <Link to={"https://youtube.com/@kushmanursingofficial?si=w72iZoD6Yxdd5pmx"}><FontAwesomeIcon icon={faYoutube} className="fab" /></Link>
          </div>
          <p>
              © 2024 Tarini College of Pharmacy. All rights
          </p>
      </div>
    </footer> 
  );
};

export default Footer;