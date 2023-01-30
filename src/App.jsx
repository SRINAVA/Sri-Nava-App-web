// import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";

import { ThemeProvider } from "./lib/context/ThemeContext/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNotion from "./Components/Navigations/TopNotion/TopNotion";
import Loginpage from "./Pages/LoginPage/Loginpage";
import BottomTabs from "./Components/Navigations/BottomTabs/BottomTabs";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ConferencePageOne from "./Pages/MeetPages/ConferencePageOne/ConferencePageOne";

function App() {
  console.log(ThemeProvider);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/conference" element={<ConferencePageOne />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
