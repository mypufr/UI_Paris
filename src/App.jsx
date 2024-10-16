import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TourguidesPage from "./pages/TourguidesPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import TourguideProfilePage from "./pages/TourguideProfilePage";
import EditMessagePage from "./pages/EditMessagePage";
import TripsPage from "./pages/TripsPage";
import SitesInfoPage from "./pages/SitesInfoPage";
import TravelInfoPage from "./pages/TravelInfoPage";
import About from "./pages/About";
import SignUp from "./pages/SingUp";
import BookPrivateTripsPage from "./pages/BookPrivateTripsPage";
import OrderInfoPage from "./pages/OrderInfoPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/search-tourguides" element={<TourguidesPage />} />
          <Route
            path="/search-tourguides/search-results"
            element={<SearchResultsPage />}
          />
          <Route
            path="/search-tourguides/tourguide-profile/:id"
            element={<TourguideProfilePage />}
          />
          <Route
            path="/search-tourguides/tourguide-profile/:id/message"
            element={<EditMessagePage />}
          />

          <Route
            path="/search-tourguides/tourguide-profile/:id/private-trips"
            element={<BookPrivateTripsPage />}
          />

          <Route
            path="/search-tourguides/tourguide-profile/:id/private-trips/confirm-order"
            element={<OrderInfoPage />}
          />

          {/* 
          <Route path="/search-tourguides" element={<TourguidesPage />}>
            <Route path="search-results" element={<SearchResultsPage />} />
            <Route
              path="tourguide-profile/:id"
              element={<TourguideProfilePage />}
            />
          </Route> */}

          <Route path="/book-trips" element={<TripsPage />}></Route>
          <Route path="/sites-info" element={<SitesInfoPage />}></Route>
          <Route path="/travel-info" element={<TravelInfoPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      ;
    </>
  );
}
