import useMeal from "../../../hooks/useMeal";

const RequestedMeals = () => {
  const { meals } = useMeal();
  console.log(meals);

  return (
    <div className="container mx-auto px-4 sm:px-8">
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
                    Category
                  </th>
                  <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                    Price
                  </th>
                  <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                    From
                  </th>
                  <th className="px-6 py-3 bg-gray-200 text-gray-600 uppercase font-bold text-sm text-left">
                    Cancel
                  </th>
                </tr>
              </thead>
              <tbody>
                {meals.map((meal) => (
                  <tr key={meal._id} className="hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      {meal?.title}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      {meal?.category}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      ${meal?.price}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      {meal?.rating}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <button className="text-red-500 hover:text-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestedMeals;

// import React from "react";
// import useMeal from "../../../hooks/useMeal";
// import { useTable } from "@tanstack/react-table";

// const RequestedMeals = () => {
//   const { meals } = useMeal();
//   console.log(meals);

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Title",
//         accessor: "title",
//         Cell: ({ row }) => (
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <div className="block relative">
//                 <img
//                   alt="profile"
//                   src={row.original.image}
//                   className="mx-auto object-cover rounded h-10 w-15 "
//                 />
//               </div>
//             </div>
//             <div className="ml-3">
//               <p className="text-gray-900 whitespace-no-wrap">
//                 {row.original.title}
//               </p>
//             </div>
//           </div>
//         ),
//       },
//       {
//         Header: "Category",
//         accessor: "category",
//       },
//       {
//         Header: "Price",
//         accessor: "price",
//       },
//       {
//         Header: "From",
//         accessor: "rating",
//       },
//       {
//         Header: "Cancel",
//         Cell: () => (
//           <button className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
//             <span
//               aria-hidden="true"
//               className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
//             ></span>
//             <span className="relative">Delete</span>
//           </button>
//         ),
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data: meals });

//   return (
//     <div className="container mx-auto px-4 sm:px-8">
//       <div className="py-8">
//         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
//           <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
//             <table className="min-w-full leading-normal">
//               <thead>
//                 {headerGroups.map((headerGroup, idx) => (
//                   <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column, idx) => (
//                       <th
//                         key={idx}
//                         {...column.getHeaderProps()}
//                         scope="col"
//                         className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
//                       >
//                         {column.render("Header")}
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody>
//                 {rows.map((row, idx) => {
//                   prepareRow(row);
//                   return (
//                     <tr key={idx} {...row.getRowProps()}>
//                       {row.cells.map((cell, idx) => (
//                         <td
//                           key={idx}
//                           {...cell.getCellProps()}
//                           className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
//                         >
//                           {cell.render("Cell")}
//                         </td>
//                       ))}
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestedMeals;
