// import PersonIcon from "@mui/icons-material/Person";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RateReviewIcon from "@mui/icons-material/RateReview";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import ListItemLink from "./ListItemLink";

export const UserListItem = (
  <>
    {/* <ListItemLink
      to="/dashboard/profile"
      primary="Profile"
      icon={<PersonIcon />}
    /> */}
    <ListItemLink
      to="/dashboard/request-meals"
      primary="Requested Meals"
      icon={<RestaurantIcon />}
    />
    <ListItemLink
      to="/dashboard/my-reviews"
      primary="Reviews"
      icon={<RateReviewIcon />}
    />
    <ListItemLink
      to="/dashboard/payment-history"
      primary="Payment History"
      icon={<EventAvailableIcon />}
    />
  </>
);
