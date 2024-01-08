import TitlePage from '../../components/TitlePage';
import AboutUsWelcome from '../../components/AboutUsWelcome';
import DoctorSliderCards from '../../components/DoctorSliderCards';
import HomeNews from '../../components/HomeNews'
import ContactSectionNode from '../../components/shared/ContactSectionNode';
import AboutUsTestimonial from '../../components/AboutUsTestimonial';

function AboutScreen() {
  return (
    <div>
      <TitlePage pageTitle="About Us" bgimage="subhero-aboutus.jpg" />
      <AboutUsWelcome />
      <AboutUsTestimonial/>
      <DoctorSliderCards />
      <HomeNews />
      <ContactSectionNode />
    </div>
  );
}

export default AboutScreen;
