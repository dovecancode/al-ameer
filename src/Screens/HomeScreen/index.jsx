import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import HomeBookApptForm from "../../components/HomeBookApptForm";
import HomeNews from "../../components/HomeNews";
import HomeServices from "../../components/HomeServices";
import HomeSpecialties from "../../components/HomeSpecialties";
import HomeWelcome from "../../components/HomeWelcome";
import PageHeader from "../../components/PageHeader";
import ContactSectionNode from "../../components/shared/ContactSectionNode";
function HomeScreen() {
  return (
    <>
      <PageHeader />
      <Hero />
      <HomeWelcome />
      <HomeServices />
      <HomeSpecialties />
      <HomeBookApptForm />
      <HomeNews />
      <ContactSectionNode />
      <Footer />
    </>
  );
}

export default HomeScreen;
