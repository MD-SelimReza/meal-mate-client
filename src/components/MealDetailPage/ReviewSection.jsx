import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import a11yProps from "../Home/a11yProps";
import CustomTabPanel from "../Home/CustomTabPanel";
import MealDescription from "./MealDescription";
import MealIngredients from "./MealIngredients";
import Reviews from "./Reviews";

const ReviewSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="border m-6 rounded-md">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Ingredients" {...a11yProps(1)} />
          <Tab label="Reviews (2)" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MealDescription />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MealIngredients />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Reviews />
      </CustomTabPanel>
    </div>
  );
};

export default ReviewSection;
