import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Paper, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../Redux/slice/productSlice";
const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
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
const Dropdown = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: "auto",
  right: 0,
  zIndex: 1,
  maxHeight: 200,
  overflow: "auto",
  marginTop: theme.spacing(1),
  width: "300px",
}));
function SearchBar() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const { products_data, filteredProducts } = useSelector((state) => state.product);


  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      dispatch(setFilteredProducts(products_data));
    } else {
      const filtered = products_data.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setFilteredProducts(filtered));
    }
  };

  return (
    <SearchContainer>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search products…"
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={handleChange}
        />
      </Search>
      {searchTerm && filteredProducts.length > 0 && (
        <Dropdown elevation={2}>
          <List>
          {filteredProducts.map((product, index) => (
              <ListItem button key={index}>
                <ListItemText primary={product.title} />
              </ListItem>
            ))}
          </List>
        </Dropdown>
      )}
    </SearchContainer>
  );
}

export default SearchBar;
