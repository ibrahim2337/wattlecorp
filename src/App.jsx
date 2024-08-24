import Advantage from "./components/Advantage/Advantage"
import Articles from "./components/Articles/Articles"
import Banner from "./components/Banner/Banner"
import Benefits from "./components/Benefits/Benefits"
import Cybersecurity from "./components/Cybersecurity/Cybersecurity"
import Explore from "./components/Explore/Explore"
import Faq from "./components/Faq/Faq"
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News"
import Penetration from "./components/Penetration/Penetration"
import Program from "./components/Program/Program"
import Protection from "./components/Protection/Protection"
import Recommended from "./components/Recommended/Recommended"
import Request from "./components/Request/Request"
import Steps from "./components/Steps/Steps"
import Touch from "./components/Touch/Touch"


function App() {
  

  return (
    <div>
      <Navbar />
      <Banner />
      <Cybersecurity />
      <Benefits />
      <News />
      <Advantage />
      <Protection />
      <Penetration />
      <Steps />
      <Explore />
      <Program />
      <Faq />
      <Touch />
      <Recommended />
      <Articles />
      <Request />
    </div>
  )
}

export default App
