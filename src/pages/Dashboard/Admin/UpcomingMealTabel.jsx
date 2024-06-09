import SectionTitle from "../../../components/shared/SectionTitle";
import useMeal from "../../../hooks/useMeal";
import { CircularProgress } from "@mui/material";
import UpcomingMealDataRow from "../../../components/TableRows/UpcomingMealDataRow";

const MyReviews = () => {
  const { meals, isLoading } = useMeal();

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle
        title="Upcoming Meals"
        description="Review upcoming meals and publish them to the meal collection. Each row includes meal details and a Publish button for easy management."
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
                      Distributor name
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Post Time
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Published
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm w-1/4 text-center">
                      Add to
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals.map((meal) => (
                    <UpcomingMealDataRow key={meal._id} meal={meal} />
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
