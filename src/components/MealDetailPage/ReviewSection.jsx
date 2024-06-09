import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import a11yProps from "../Home/a11yProps";
import CustomTabPanel from "../Home/CustomTabPanel";
import MealDescription from "./MealDescription";
import MealIngredients from "./MealIngredients";
import Reviews from "./Reviews";
import PropTypes from "prop-types";
import ReviewForm from "./ReviewForm";

const ReviewSection = ({
  mealId,
  description,
  ingredients,
  initialReviews,
  refetch,
}) => {
  const [value, setValue] = useState(0);
  const [reviews, setReviews] = useState(initialReviews);
  console.log(reviews);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addReview = (review) => {
    setReviews([...reviews, review]);
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
          <Tab
            label={`Reviews (${reviews?.length ? reviews?.length : 0})`}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MealDescription description={description} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MealIngredients ingredients={ingredients} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Reviews reviews={reviews} />
        <ReviewForm addReview={addReview} mealId={mealId} refetch={refetch} />
      </CustomTabPanel>
    </div>
  );
};

ReviewSection.propTypes = {
  mealId: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.array,
  initialReviews: PropTypes.array,
  refetch: PropTypes.func,
};

export default ReviewSection;
