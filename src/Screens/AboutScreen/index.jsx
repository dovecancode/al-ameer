import TitlePage from '../../components/TitlePage'
import AboutUsWelcome from '../../components/AboutUsWelcome';

function AboutScreen() {
  return (
    <div>
      <TitlePage pageTitle='About Us' bgimage='subhero-aboutus.jpg'/>
      <AboutUsWelcome/>
    </div>
  );
}

export default AboutScreen;
