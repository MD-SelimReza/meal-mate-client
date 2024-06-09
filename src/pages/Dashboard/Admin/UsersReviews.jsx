import SectionTitle from "../../../components/shared/SectionTitle";
import useMeal from "../../../hooks/useMeal";
import { CircularProgress } from "@mui/material";
import UsersReviewDataRow from "../../../components/TableRows/UsersReviewDataRow";

const UsersReviews = () => {
  const { meals, isLoading } = useMeal();

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle
        title="Users Reviews"
        description="Browse through all reviews in a table format, including details such as meal title, likes, number of reviews, and options to delete or view each meal."
      />
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-left">
                      Title
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Likes
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Total reviews
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals.map((meal) => (
                    <UsersReviewDataRow key={meal._id} meal={meal} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersReviews;
