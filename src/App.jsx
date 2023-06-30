import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ContextProvider } from "./Components/utils/global.context";
import Layout from "./Components/Layout";
import ThemeProvider from "./Components/utils/ThemeContext";




function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
    <ContextProvider>
    <Layout >
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favs" element={<Favs />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </Layout>
      </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
     
  );
}

export default App;
