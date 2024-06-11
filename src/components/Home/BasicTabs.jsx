import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomTabPanel from "./CustomTabPanel";
import a11yProps from "./a11yProps";
import MealCard from "./MealCard";
import { useState } from "react";
import useMeal from "../../hooks/useMeal";
import SectionTitle from "../shared/SectionTitle";
import Loader from "../shared/Loader";

const BasicTabs = () => {
  const categories = ["Breakfast", "Lunch", "Dinner", "All Meals"];
  const { meals, mealsLoading } = useMeal();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (mealsLoading) return <Loader />;

  return (
    <div>
      <SectionTitle
        title="Meals by Category"
        description="Explore meals categorized by Breakfast, Lunch, Dinner, or view all meals in one place."
      />
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
            <div className="flex flex-wrap justify-center gap-5">
              {(meals?.filter((meal) => meal.category === category).length > 0
                ? meals.filter((meal) => meal.category === category)
                : meals
              )?.map((meal, mealIndex) => (
                <MealCard
                  key={mealIndex}
                  id={meal._id}
                  title={meal.title}
                  image={
                    "https://opencart.dostguru.com/FD01/flavoro_02/image/cache/catalog/product/27-543x543.jpg"
                  }
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
    </div>
  );
};

export default BasicTabs;
