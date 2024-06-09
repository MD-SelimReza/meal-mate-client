import { useQuery } from "@tanstack/react-query";
import PackageCard from "./PackageCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import SectionTitle from "../shared/SectionTitle";

const Packages = () => {
  const axiosCommon = useAxiosCommon();
  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const { data } = await axiosCommon("/packages");
      return data;
    },
  });

  return (
    <div>
      <SectionTitle
        title="Explore Our Awesome Packages"
        description="Upgrade to one of our premium packages for enhanced features and benefits."
      />
      <div className="flex justify-center items-center py-20 bg-blue-700 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
          {packages.map((item) => (
            <PackageCard
              key={item._id}
              title={item.package_name}
              price={item.price}
              icon={item.icon}
              features={item.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
