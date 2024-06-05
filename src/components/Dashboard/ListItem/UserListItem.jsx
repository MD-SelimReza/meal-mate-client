import ListSubheader from "@mui/material/ListSubheader";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListItemLink from "./ListItemLink";

export const UserListItem = (
  <>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemLink
      to="/current-month"
      primary="Current month"
      icon={<AssignmentIcon />}
    />
    <ListItemLink
      to="/last-quarter"
      primary="Last quarter"
      icon={<AssignmentIcon />}
    />
    <ListItemLink
      to="/year-end-sale"
      primary="Year-end sale"
      icon={<AssignmentIcon />}
    />
  </>
);
