import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomTabPanel from "./CustomTabPanel";
import a11yProps from "./a11yProps";
import MealCard from "./MealCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";

// const meals = {
//   Breakfast: [
//     {
//       title: "Pancakes",
//       image: "https://via.placeholder.com/150",
//       rating: 4,
//       price: 5.99,
//     },
//     {
//       title: "Omelette",
//       image: "https://via.placeholder.com/150",
//       rating: 5,
//       price: 4.99,
//     },
//     {
//       title: "Smoothie",
//       image: "https://via.placeholder.com/150",
//       rating: 3,
//       price: 3.99,
//     },
//   ],
//   Lunch: [
//     {
//       title: "Burger",
//       image: "https://via.placeholder.com/150",
//       rating: 4.3,
//       price: 7.99,
//     },
//     {
//       title: "Salad",
//       image: "https://via.placeholder.com/150",
//       rating: 4.6,
//       price: 6.99,
//     },
//     {
//       title: "Pasta",
//       image: "https://via.placeholder.com/150",
//       rating: 4.8,
//       price: 8.99,
//     },
//   ],
//   Dinner: [
//     {
//       title: "Steak",
//       image: "https://via.placeholder.com/150",
//       rating: 4.9,
//       price: 14.99,
//     },
//     {
//       title: "Salmon",
//       image: "https://via.placeholder.com/150",
//       rating: 4.5,
//       price: 13.99,
//     },
//     {
//       title: "Pizza",
//       image: "https://via.placeholder.com/150",
//       rating: 4.4,
//       price: 9.99,
//     },
//   ],
//   "All Meals": [
//     {
//       title: "Pancakes",
//       image: "https://via.placeholder.com/150",
//       rating: 4.5,
//       price: 5.99,
//     },
//     {
//       title: "Omelette",
//       image: "https://via.placeholder.com/150",
//       rating: 4.0,
//       price: 4.99,
//     },
//     {
//       title: "Smoothie",
//       image: "https://via.placeholder.com/150",
//       rating: 4.7,
//       price: 3.99,
//     },
//     {
//       title: "Burger",
//       image: "https://via.placeholder.com/150",
//       rating: 4.3,
//       price: 7.99,
//     },
//     {
//       title: "Salad",
//       image: "https://via.placeholder.com/150",
//       rating: 4.6,
//       price: 6.99,
//     },
//     {
//       title: "Pasta",
//       image: "https://via.placeholder.com/150",
//       rating: 4.8,
//       price: 8.99,
//     },
//     {
//       title: "Steak",
//       image: "https://via.placeholder.com/150",
//       rating: 4.9,
//       price: 14.99,
//     },
//     {
//       title: "Salmon",
//       image: "https://via.placeholder.com/150",
//       rating: 4.5,
//       price: 13.99,
//     },
//     {
//       title: "Pizza",
//       image: "https://via.placeholder.com/150",
//       rating: 4.4,
//       price: 9.99,
//     },
//   ],
// };

const BasicTabs = () => {
  const categories = ["Breakfast", "Lunch", "Dinner", "All Meals"];
  const axiosCommon = useAxiosCommon();
  const { data: meals = [] } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const { data } = await axiosCommon("/meals");
      return data;
    },
  });

  console.log(meals);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const categories = Object.keys(meals);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="meal categories"
        >
          {categories.map((category, index) => (
            <Tab
              key={index}
              label={category}
              {...a11yProps(index)}
              sx={{ fontSize: "16px" }}
            />
          ))}
        </Tabs>
      </Box>
      {categories.map((category, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <div className="flex flex-wrap justify-center gap-10">
            {(meals.filter((meal) => meal.category === category).length > 0
              ? meals.filter((meal) => meal.category === category)
              : meals
            ).map((meal, mealIndex) => (
              <MealCard
                key={mealIndex}
                id={meal._id}
                title={meal.title}
                image={"https://i.ibb.co/WDKRDcr/16-2.jpg"}
                rating={meal.rating}
                description="Description"
                price={meal.price}
                onDetailsClick={() => alert(`${meal.title} details`)}
              />
            ))}
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default BasicTabs;
