import PeopleIcon from "@mui/icons-material/People";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";

import ListItemLink from "./ListItemLink";

export const AdminListItem = (
  <>
    <ListItemLink to="/dashboard/users" primary="Users" icon={<PeopleIcon />} />
    <ListItemLink
      to="/dashboard/add-meal"
      primary="Add meal"
      icon={<AddCircleIcon />}
    />
    <ListItemLink
      to="/dashboard/all-meals"
      primary="All meals"
      icon={<RestaurantIcon />}
    />
    <ListItemLink
      to="/dashboard/users-reviews"
      primary="Users reviews"
      icon={<RateReviewIcon />}
    />
    <ListItemLink
      to="/dashboard/serve-meals"
      primary="Serve meals"
      icon={<LocalDiningIcon />}
    />
    <ListItemLink
      to="/dashboard/upcoming-meals"
      primary="Upcoming meals"
      icon={<AlarmOnIcon />}
    />
  </>
);
