import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper"
import Home from "./pages/Home/Home";
import ProjectGallery from "./pages/ProjectGallery";
import Contact from "./pages/Contac";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div class="App">
    <Router>
      <div>
        <Header />
        <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projectgallery" element={<ProjectGallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
