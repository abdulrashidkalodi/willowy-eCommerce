import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalqty = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );
  const [showCart, setShowCart] = React.useState(false);

  const handleCart = () => {
    setShowCart((prev) => !prev);
  };
  return (
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
            component="div"
            sx={{ flexGrow: 0.1, display: { xs: "none", sm: "block" } }}
          >
            Home
          </Typography>{" "}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Product
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            sx={{ position: "relative", m: 2 }}
            onClick={handleCart}
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
      {showCart && <Cart />}
    </Box>
  );
}
export default Navbar;
