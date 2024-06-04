import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner";
import BasicTabs from "../components/Home/BasicTabs";
import NewsLetter from "../components/Home/NewsLetter";
import Packages from "../components/Home/Packages";

const Home = () => {
  return (
    <div>
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
