import TitlePage from "../../components/TitlePage";
import AboutUsWelcome from "../../components/AboutUsWelcome";
import DoctorSliderCards from "../../components/DoctorSliderCards";
import HomeNews from "../../components/HomeNews";
import ContactSectionNode from "../../components/shared/ContactSectionNode";
import AboutUsTestimonial from "../../components/AboutUsTestimonial";
import PageHeader from "../../components/PageHeader/Index";
import Footer from "../../components/Footer/Index";

function AboutScreen() {
  return (
    <div>
      <PageHeader />
      <TitlePage pageTitle="About Us" bgimage="subhero-aboutus.jpg" />
      <AboutUsWelcome />
      <AboutUsTestimonial />
      <DoctorSliderCards />
      <HomeNews />
      <ContactSectionNode />
      <Footer />
    </div>
  );
}

export default AboutScreen;
