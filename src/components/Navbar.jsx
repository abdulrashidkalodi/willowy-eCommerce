import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useSelector } from "react-redux";
import Cart from "./Cart";

import Dialog from "@mui/material/Dialog";
import { Link } from "react-router-dom";
import SearchItem from "./SearchItem";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalqty = cartItems.reduce((total, item) => total + item.qty, 0);
  const [openCart, setOpenCart] = React.useState(false);

  const handleCartOpen = () => {
    setOpenCart(true);
  };

  const handleCartClose = () => {
    setOpenCart(false);
  };
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 0.3, display: { xs: "none", sm: "block" } }}
            >
              E-Shoping
            </Typography>{" "}
            <Typography
              variant="h6"
              noWrap
              sx={{
                flexGrow: 0.1,
                display: {
                  xs: "none",
                  sm: "block",
                  textDecoration: "none",
                  color: "inherit",
                },
              }}
              component={Link} 
              to="/"
            >
              Home
            </Typography>{" "}
            <Typography
              variant="h6"
              noWrap
              component={Link} 
              to="/products"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Product
            </Typography>
            {/* search component */}
            <SearchItem />
            {/* end */}
            <IconButton
              sx={{ position: "relative", m: 2 }}
              onClick={handleCartOpen}
            >
              <LocalMallOutlinedIcon />
              {totalqty > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -10,
                    background: "red",
                    borderRadius: "50%",
                    padding: "0 6px",
                    color: "white",
                    fontSize: "12px",
                  }}
                >
                  {totalqty}
                </span>
              )}
            </IconButton>{" "}
          </Toolbar>
        </AppBar>
      </Box>
      <Dialog
        open={openCart}
        onClose={handleCartClose}
        PaperProps={{
          sx: {
            position: "absolute",
            top: 70,
            right: 50,
            m: 1,
          },
        }}
        hideBackdrop
      >
        {/* cart component */}
        <Cart onClick={handleCartClose} />
        {/* end */}
      </Dialog>
    </React.Fragment>
  );
}
export default Navbar;
