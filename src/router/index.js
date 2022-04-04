// Ini adalah file untuk mengantur router

import React from "react";
import { Routes, Route } from "react-router-dom";
import List from "../view/contact/List";
import Create from "../view/contact/Create";
import NotFound from "../view/component/NotFound";
// import your route components too

function Router() {
   return (
      // route/url yg dapat di akses oleh aplikasi
      // exact yang mana bertugas untuk memastikan Route hanya merender component yang memiliki path dan location.pathname yang cocok. jika tidak ada yang cocok, maka akan di alihkan ke halaman not found
      <Routes>
         <Route exact path="/" element={<List />} />
         <Route exact path="/create" element={<Create />} />
         <Route exact path="/edit/:param" element={<Create />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
}

export default Router;
