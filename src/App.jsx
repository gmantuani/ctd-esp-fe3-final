import { React } from "react";
import Home from "./Routes/Home";
import ContactoPage from "./Routes/Contact";
import FavsPage from "./Routes/Favs";
import DetailPage from "./Routes/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Components/Layout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route index path="/Home" element={<Home />} />
            <Route path="/Contact" element={<ContactoPage />} />
            <Route path="/Dentist/:id" element={<DetailPage />} />
            <Route path="/Favs" element={<FavsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
