import TitlePage from '../../components/TitlePage';
import AboutUsWelcome from '../../components/AboutUsWelcome';
import DoctorCard from '../../components/DoctorCard';

function AboutScreen() {
  return (
    <div>
      <TitlePage pageTitle="About Us" bgimage="subhero-aboutus.jpg" />
      <AboutUsWelcome />
      <DoctorCard />
    </div>
  );
}

export default AboutScreen;
