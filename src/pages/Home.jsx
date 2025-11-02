import React from "react";
import Loader from "../components/Loader";
import LazySection from "../components/LazySection";

const Home = () => {
  return (
    <>
      <Loader />

      {/* Lazy loaded sections */}
      <LazySection importFunc={() => import("../components/Hero")} />
      <LazySection importFunc={() => import("../components/About")} />
      <LazySection importFunc={() => import("../components/Skills")} />
      <LazySection importFunc={() => import("../components/Projects")} />
      <LazySection importFunc={() => import("../components/Contact")} />
      <LazySection importFunc={() => import("../components/Footer")} />
    </>
  );
};

export default Home;
