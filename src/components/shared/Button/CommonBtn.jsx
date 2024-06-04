import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const CommonBtn = ({ outline, address, label, color }) => {
  return (
    <Button
      variant={outline ? "outlined" : "contained"}
      href={address ? address : ""}
      color={color ? "warning" : "primary"}
      sx={{
        background: outline ? "transparent" : "#F59E0B",
        color: outline ? "#F59E0B" : "#1E3A8A",
        border: outline ? "1px solid #F59E0B" : "none",
        "&:hover": {
          border: outline ? "1px solid #F59E0B" : "none",
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
