import Banner from "../components/Home/Banner";
import BasicTabs from "../components/Home/BasicTabs";
import NewsLetter from "../components/Home/NewsLetter";
import Packages from "../components/Home/Packages";

const Home = () => {
  return (
    <div>
      <Banner />
      <BasicTabs />
      <Packages />
      <NewsLetter />
    </div>
  );
};

export default Home;
