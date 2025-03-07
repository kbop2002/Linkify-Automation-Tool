import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signin.tsx";
import MainPage from "./pages/MainPage.tsx";
import SupplierCenter from "./pages/SupplierCenter.tsx";
import StorefrontCenter from "./pages/StorefrontCenter.tsx";
import Plans from "./pages/PlansPage.tsx";
import SettingsPage from "./pages/Settings.tsx";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path ='/settings' element={<SettingsPage/>}/>
      <Route path ='/plans' element={<Plans/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<MainPage />} />
        <Route path="/supplier-center" element={<SupplierCenter />} />
        <Route path="/storefront-center" element={<StorefrontCenter />} />
    </Routes>
  );
};

export default App;


