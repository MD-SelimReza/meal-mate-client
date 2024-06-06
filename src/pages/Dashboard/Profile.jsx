import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/shared/Loader";
import useBadge from "../../hooks/useBadge";

const Profile = () => {
  const { user, loading } = useAuth();
  const [badge, isLoading] = useBadge();

  if (loading || isLoading) return <Loader />;

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-132px)]">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="bg-[#121a1a] text-white h-[500px] shadow-lg rounded-2xl md:w-3/5 w-full">
        <div className="w-full mb-4 rounded-t-lg h-40 bg-[#015b65]"></div>
        <div className="flex flex-col items-center justify-center -mt-12">
          <div className="relative -mt-16">
            <p className="mb-4 capitalize text-xl text-center">{badge}</p>
            <a href="#" className="block">
              <img
                alt="profile"
                src={user?.photoURL}
                className="mx-auto object-cover rounded-full h-24 w-24 border-[3px] border-[#171414]"
              />
            </a>
          </div>

          <div className="text-center w-full border-b border-gray-400 pb-6">
            <p className="mt-2 text-xl font-semibold">{user?.displayName}</p>
            <p className="mt-2">{user?.email}</p>
          </div>
          <div className="w-full font-medium py-6 rounded-lg">
            <p className="hover:bg-[#e0d0d0] px-4 py-1 w-full">
              Customize your profile
            </p>
            <p className="hover:bg-[#171414] px-4 py-1 w-full">Sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
