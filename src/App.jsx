import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
