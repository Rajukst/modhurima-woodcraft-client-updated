import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import MakeAdmin from "./Admin/MakeAdmin/MakeAdmin";
import ManageProducts from "./Admin/ManageProducts/ManageProducts";
import { Button } from "@mui/material";
import PayLink from "./DashBoard-Empliment/Pay-Link/PayLink";
import MyOrders from "./DashBoard-Empliment/My-Orders/MyOrders";
import Review from "./DashBoard-Empliment/Review/Review";
import LogOut from "./DashBoard-Empliment/LogOut/LogOut";
import AddProduct from "./Admin/AddProduct/AddProduct";
import ManageAllOrders from "./Admin/Manage-All-Orders/ManageAllOrders";
import "./DashBoard.css";
const drawerWidth = 240;
const DashBoard = (props) => {
  const { window } = props;
  let { path, url } = useRouteMatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <Box>
        <Link className="remove" to={`${url}/my-orders`}>
          <Button color="inherit">My Orders</Button>
        </Link>

        <Link className="remove" to={`${url}/review-us`}>
          <Button color="inherit">Review Our Products</Button>
        </Link>
        <Link className="remove" to={`${url}/payment`}>
          <Button color="inherit">Make Payment</Button>
        </Link>
        <Link className="remove" to={`${url}/makeAdmin`}>
          <Button color="inherit">Make Me Admin</Button>
        </Link>
        <Link className="remove" to={`${url}/manageProducts`}>
          <Button color="inherit">Manage Products</Button>
        </Link>
        <Link className="remove" to={`${url}/add-product`}>
          <Button color="inherit">Add A Product</Button>
        </Link>
        <Link className="remove" to={`${url}/manage-orders`}>
          <Button color="inherit">Manage All Orders</Button>
        </Link>
        <Link className="remove" to={`${url}/log-out`}>
          <Button color="inherit">Log Out</Button>
        </Link>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route path={`${path}/payment`}>
              <PayLink></PayLink>
            </Route>
            <Route path={`${path}/my-orders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review-us`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </Route>
            <Route path={`${path}/add-product`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/manage-orders`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path={`${path}/log-out`}>
              <LogOut></LogOut>
            </Route>
          </Switch>
        </Box>
      </Box>
    </div>
  );
};

export default DashBoard;
