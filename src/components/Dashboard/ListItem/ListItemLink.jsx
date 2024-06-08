import { NavLink } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

const ListItemLink = ({ icon, primary, to, end }) => {
  return (
    <ListItem
      button
      component={NavLink}
      to={to}
      end={end}
      sx={{
        "&.active": {
          backgroundColor: "rgba(0, 0, 0, 0.10)",
          "& .MuiListItemIcon-root": {
            color: "primary.main",
          },
          "& .MuiListItemText-root": {
            color: "primary.main",
            fontWeight: "bold",
          },
        },
        "& .MuiTooltip-tooltip": {
          backgroundColor: "black",
          color: "white",
          fontSize: "14px",
        },
      }}
    >
      <Tooltip title={primary} placement="right">
        <ListItemIcon>{icon}</ListItemIcon>
      </Tooltip>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  end: PropTypes.bool,
};

export default ListItemLink;
