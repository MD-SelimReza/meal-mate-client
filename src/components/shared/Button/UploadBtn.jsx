import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PropTypes from "prop-types";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadBtn = ({ hook, setImagePreview, setImageText }) => {
  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImageText(file.name);
      hook.onChange(file);
    }
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{ py: 1.5 }}
    >
      Upload image
      <VisuallyHiddenInput
        type="file"
        accept="image/*"
        onChange={handleImage}
      />
    </Button>
  );
};

UploadBtn.propTypes = {
  hook: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  setImagePreview: PropTypes.func.isRequired,
  setImageText: PropTypes.func.isRequired,
};

export default UploadBtn;
