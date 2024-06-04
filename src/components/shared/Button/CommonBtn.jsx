import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const CommonBtn = ({ outline, address, label, color }) => {
  return (
    <Button
      variant={outline ? "outlined" : "contained"}
      href={address ? address : ""}
      color={color ? "warning" : "primary"}
      sx={{
        background: outline ? "transparent" : "primary",
        color: outline ? "#EAB308" : "white",
        border: outline ? "1px solid #EAB308" : "none",
        "&:hover": {
          border: outline ? "1px solid #EAB308" : "none",
        },
      }}
    >
      {label}
    </Button>
  );
};

CommonBtn.propTypes = {
  outline: PropTypes.bool,
  address: PropTypes.string,
  label: PropTypes.string.isRequired,
  color: PropTypes.bool,
};

export default CommonBtn;
