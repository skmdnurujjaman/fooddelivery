import React from "react";
import Navigation from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";

export const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Navigation />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="m-5">
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
