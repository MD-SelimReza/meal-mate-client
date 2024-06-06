import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import ListItemLink from "./ListItemLink";

export const AdminListItem = (
  <>
    <ListItemLink
      to="/dashboard"
      primary="Dashboard"
      icon={<DashboardIcon />}
    />
    <ListItemLink
      to="/dashboard/profile"
      primary="Profile"
      icon={<ShoppingCartIcon />}
    />
    <ListItemLink to="/customers" primary="Customers" icon={<PeopleIcon />} />
    <ListItemLink to="/reports" primary="Reports" icon={<BarChartIcon />} />
    <ListItemLink
      to="/integrations"
      primary="Integrations"
      icon={<LayersIcon />}
    />
  </>
);
