import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TbFidgetSpinner } from "react-icons/tb";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import { imageUpload } from "../../utils/imageUpload";
import UploadBtn from "../../components/shared/Button/UploadBtn";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const {
    user,
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
  } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSignUp = async (data) => {
    const { name, email, files, password } = data;
    const image = files[0];

    try {
      setLoading(true);
      const image_url = await imageUpload(image);

      await createUser(email, password);

      await updateUserProfile(name, image_url);
      alert("Sign up successful");
      navigate(from);
    } catch (err) {
      console.log(err);
      alert(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Sign Up successful");
      navigate(from);
    } catch (err) {
      alert(err?.message);
    }
  };

  useEffect(() => {
    if (user && loading) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#2563eb" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
        </Box>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <TextField
              margin="normal"
              fullWidth
              label="Name"
              type="name"
              id="name"
              placeholder="Enter Your Name"
              autoComplete="name"
              sx={{
                "& .MuiInputBase-root": {
                  padding: "0.5rem",
                  backgroundColor: "#e5e7eb",
                  color: "#1f2937",
                },
                "& .MuiInputBase-input": {
                  padding: "0.5rem",
                },
              }}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">The name field is required</span>
            )}
            <div>
              <UploadBtn hook={{ ...register("files", { required: true }) }} />
            </div>
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              type="email"
              id="email"
              placeholder="Enter Your Email Address"
              autoComplete="email"
              sx={{
                "& .MuiInputBase-root": {
                  padding: "0.5rem",
                  backgroundColor: "#e5e7eb",
                  color: "#1f2937",
                },
                "& .MuiInputBase-input": {
                  padding: "0.5rem",
                },
              }}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">The email field is required</span>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              sx={{
                "& .MuiInputBase-root": {
                  padding: "0.5rem",
                  backgroundColor: "#e5e7eb",
                  color: "#1f2937",
                },
                "& .MuiInputBase-input": {
                  padding: "0.5rem",
                },
              }}
              {...register("password", { required: true })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errors.password && (
              <span className="text-red-500">
                The password field is required
              </span>
            )}
          </div>
          <div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: 2, py: 1.5 }}
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto text-teal-500" />
              ) : (
                "Sign Up"
              )}
            </Button>
          </div>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-500"></div>
          <div className="px-3 text-gray-700">Login with social accounts</div>
          <div className="flex-1 h-px sm:w-16 bg-gray-500"></div>
        </div>
        <Button
          onClick={handleGoogleSignIn}
          disabled={loading}
          variant="outlined"
          startIcon={<FcGoogle size={32} />}
          sx={{
            cursor: loading ? "not-allowed" : "pointer",
            padding: "8px 16px",
            my: 2,
            color: "#1f2937",
            borderColor: "#2563eb",
          }}
        >
          Login with Google
        </Button>
        <Link href="/signIn" variant="body2" sx={{ textAlign: "center" }}>
          {"Already have an account? Sign In"}
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
