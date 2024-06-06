import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../../components/Dashboard/AppBar";
import Drawer from "../../components/Dashboard/Drawer";
import DrawerHeader from "../../components/Dashboard/DrawerHeader";
import { AdminListItem } from "../../components/Dashboard/ListItem/AdminListItem";
import { UserListItem } from "../../components/Dashboard/ListItem/UserListItem";
import Logo from "../../components/shared/Logo";
import useAdmin from "../../hooks/useAdmin";
import Loader from "../../components/shared/Loader";

const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading) return <Loader />;
  console.log(isAdmin.admin);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Logo />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List component="nav">
          {isAdmin && isAdmin?.admin ? (
            <div>{AdminListItem}</div>
          ) : (
            <div>{UserListItem}</div>
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;
