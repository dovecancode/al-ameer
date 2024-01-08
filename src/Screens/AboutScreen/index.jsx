import TitlePage from '../../components/TitlePage';
import AboutUsWelcome from '../../components/AboutUsWelcome';
import DoctorCard from '../../components/DoctorCard';
import { doctorInfo } from './data';

function AboutScreen() {
  return (
    <div>
      <TitlePage pageTitle="About Us" bgimage="subhero-aboutus.jpg" />
      <AboutUsWelcome />
      <DoctorCard doctorData={doctorInfo} />
    </div>
  );
}

export default AboutScreen;
