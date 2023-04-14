import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Test = lazy(() => import("../pages/Test"));

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/:id" element={<Contact />} />
        <Route path="/test" element={<Suspense> <Test /> </Suspense> } />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
