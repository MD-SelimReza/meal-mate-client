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
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { signInWithGoogle, signIn, user, loading, setLoading } = useAuth();

  useEffect(() => {
    if (user && loading) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = async (data) => {
    const { email, password } = data;
    if (!/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and lowercase letter"
      );
      return;
    }
    try {
      await signIn(email, password);
      setLoading(false);
      toast.success("Sign In Successful");
      navigate(location.state || "/");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Sign Up successful");
      navigate(from);
    } catch (err) {
      toast.error(err?.message);
    }
  };

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
            Sign in
          </Typography>
        </Box>
        <form
          onSubmit={handleSubmit(handleSignIn)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
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
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter password"
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
          </div>
          {errors.password && (
            <span className="text-red-500">The password field is required</span>
          )}
          <div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                py: 1.5,
                backgroundColor: "#2563eb",
                "&:hover": { backgroundColor: "#1d4ed8" },
              }}
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto text-teal-500" />
              ) : (
                "Sign In"
              )}
            </Button>
          </div>
          <Link
            href="#"
            variant="body2"
            sx={{ color: "#2563eb", textDecoration: "underline" }}
          >
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
            borderColor: "#2563eb",
            color: "#2563eb",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          Login with Google
        </Button>
        <Link
          href="/signUp"
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#2563eb",
            textDecoration: "underline",
          }}
        >
          {"Don't have an account? Sign Up"}
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
