import useMeal from "../../../hooks/useMeal";
import SectionTitle from "../../../components/shared/SectionTitle";
import { CircularProgress } from "@mui/material";
import PaymentDataRow from "../../../components/TableRows/PaymentDataRow";

const PaymentHistory = () => {
  const { meals, isLoading } = useMeal();

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <SectionTitle
        title="Payment History"
        description="View your payment history here."
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
                      Date
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                      Amount
                    </th>
                    <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meals.map((meal) => (
                    <PaymentDataRow key={meal._id} meal={meal} />
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

export default PaymentHistory;
