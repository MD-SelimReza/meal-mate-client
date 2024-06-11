import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner";
import BasicTabs from "../components/Home/BasicTabs";
import NewsLetter from "../components/Home/NewsLetter";
import Packages from "../components/Home/Packages";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (location?.hash) {
      document.getElementById("Goto").click();
    }
  }, [location]);
  return (
    <div>
      <a href="#package" id="Goto"></a>
      <Helmet>
        <title>HostelEase</title>
      </Helmet>
      <Banner />
      <BasicTabs />
      <Packages />
      <NewsLetter />
    </div>
  );
};

export default Home;
