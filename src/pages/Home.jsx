import Header from "../components/Header/Header";
import Courses from "../components/Courses/Courses";
import Facilities from "../components/Facilities/Facilities";
import Cta from "../components/Cta/Cta";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Document from "../components/Document/Document";
import Academic from "../components/Academic/Academic";

const Home = () => {
  return (
    <>
      <Header />
      <Document/>
      <Academic/>
      <Courses />
      <Facilities />
      <Cta />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
