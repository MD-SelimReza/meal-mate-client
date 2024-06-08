import RequestedMealDataRow from "../../../components/TableRows/RequestedMealDataRow";
import SectionTitle from "../../../components/shared/SectionTitle";
import useMeal from "../../../hooks/useMeal";
import { CircularProgress } from "@mui/material";

const RequestedMeals = () => {
  const { meals, isLoading } = useMeal();
  console.log(meals);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle
        title="Requested Meals Overview"
        description="View requested meals in a table with details such as meal title, likes, reviews, status, and cancel button."
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
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                      Title
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-center">
                      Likes
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-center">
                      Reviews
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-center">
                      Cancel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals.map((meal) => (
                    <RequestedMealDataRow key={meal._id} meal={meal} />
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

export default RequestedMeals;
