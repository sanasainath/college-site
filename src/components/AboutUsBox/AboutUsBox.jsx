import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h2> we are a Place of Excellence in Pharmacy Education</h2>
          <p style={{textAlign:"justify"}}>
            Kushma Education Society is dedicated to fostering educational excellence in the field of pharmacy. 
            We proudly present Kushma College of Pharmacy, which is affiliated with Rajiv Gandhi University of 
            Health Sciences (RGUHS), Bangalore, and the Board of Examination Authority, Drugs Control Department,
            under the Government of Karnataka, Bangalore.Founders:
            Dr. Abhishek M. Patil - Chairman
            Dr. Vibharani Patil - Vice-Chairman
            Smt. Bharati M. Patil - Member
            At Kushma College of Pharmacy, we strive to provide a comprehensive education that equips our students 
            with the knowledge and skills necessary for success in the pharmaceutical field.
          </p>
        </div>
        <div className="about-col">
          <img src="infinimove/0A3A9162.JPG" alt="" />
        </div>
      </div>
      <div className="row">
      <div className="about-col">
          <img src="/public/infinimove/WhatsApp Image 2024-10-03 at 21.39.55_a9795896.jpg" alt="" />
        </div>
        <div className="about-col">
          <h2>Principals Desk</h2>
          <p style={{ textAlign: "justify" }}>
            Welcome to Kushma College of Pharmacy!<br/> At our college,affiliated with Rajiv Gandhi University of Health Sciences (RGUHS), 
            we are dedicated to providing exceptional education in the field of pharmacy. Under the guidance of our founders—Dr. Abhishek M. Patil,
            Dr. Vibharani Patil, and Smt. Bharati M. Patil—we strive for excellence in academics and professional development.
            I, along with our Vice-Principal Mr. Veeresh Topalakatti, am committed to mentoring our students and preparing them for successful careers
            in pharmacy.
          </p>
          <p>
            <strong>Mr. Veeresh Topalakatti</strong><br />
            <strong>Principal, Kushma College of Pharmacy</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
