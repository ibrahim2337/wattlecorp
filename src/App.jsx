import Advantage from "./components/Advantage/Advantage";
import Articles from "./components/Articles/Articles";
import Assessment from "./components/Assessment/Assessment";
import Banner from "./components/Banner/Banner";
import Benefits from "./components/Benefits/Benefits";
import Bespoke from "./components/Bespoke/Bespoke";
import Budget from "./components/Budget/Budget";
import Cybersecurity from "./components/Cybersecurity/Cybersecurity";
import Explore from "./components/Explore/Explore";
import Factor from "./components/Factor/Factor";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Listen from "./components/Listen/Listen";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Penetration from "./components/Penetration/Penetration";
import Program from "./components/Program/Program";
import Recommended from "./components/Recommended/Recommended";
import Request from "./components/Request/Request";
import Steps from "./components/Steps/Steps";
import Touch from "./components/Touch/Touch";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cybersecurity />
      <Benefits />
      <News />
      <Advantage />
      <Assessment />
      <Penetration />
      <Steps />
      <Explore />
      
      <Program />
      <Budget />
      <Factor />
      <Bespoke />
      <Listen />
      <Faq />
      <Touch />
      <Recommended />
      <Articles />
      <Request />
      <Footer />
    </div>
  );
}

export default App;
