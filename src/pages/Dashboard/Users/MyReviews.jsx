import SectionTitle from "../../../components/shared/SectionTitle";
import useMeal from "../../../hooks/useMeal";
import ReviewDataRow from "../../../components/TableRows/ReviewDataRow";
import { CircularProgress } from "@mui/material";

const MyReviews = () => {
  const { meals, isLoading } = useMeal();

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle
        title="My Reviews Dashboard"
        description="Explore your reviews in a table showcasing meal titles, likes, your review, options to edit or delete, and buttons to view meals."
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
                      Reviews
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals.map((meal) => (
                    <ReviewDataRow key={meal._id} meal={meal} />
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

export default MyReviews;
