// import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import Home from "./components/Home";
import BookDetail from "./components/BookDetail";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/book/:id" element={<BookDetail />}></Route>
        </Routes>
        {/* Nav Menu */}
        <NavMenu />
        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
