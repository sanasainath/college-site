import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>Immerse yourself in a world of exceptional amenities and services.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="/public/infinimove/5600428.jpg" alt="" />
          <h3>Wards</h3>
          <p>
            Dive into a sea of knowledge with our state-of-the-art library. An
            oasis for intellectual exploration.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/public/infinimove/WhatsApp Image 2024-10-03 at 19.05.35_3db93a66.jpg" alt="" />
          <h3>VR ClassRooms</h3>
          <p>
            Unleash your energy on our expansive playground. A haven for sports
            enthusiasts and active minds.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/public/infinimove/0A3A9129.JPG" alt="" />
          <h3>Labs</h3>
          <p>
            Indulge your taste buds with our delightful and nutritious cuisine.
            Fuel for both body and mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
