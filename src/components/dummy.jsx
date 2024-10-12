// import React from "react";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";

// // Dummy JSON data
// const dummyData = [
//   { ac_name: "Company A" },
//   { ac_name: "Company B" },
//   { ac_name: "Company C" },
//   { ac_name: "Company D" },
//   { ac_name: "Company E" },
// ];

// export default function HeaderFilter() {
//   return (
//     <Stack spacing={3} sx={{ width: 300 }}>
//       <Autocomplete
//         multiple
//         id="tags-standard"
//         options={dummyData} // Use dummy JSON data
//         getOptionLabel={(option) => option.ac_name}
//         renderTags={() => null}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             variant="standard"
//             label="Filter Company"
//             placeholder="Search Company" // Static placeholder
//             sx={{ bgcolor: 'white', borderRadius: 1, boxShadow: 1 }} // Custom styling
//           />
//         )}
//       />
//     </Stack>
//   );
// }















// import React, { useState } from "react";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// function SearchBar() {
//   return (
//     <div>
//       <Search>
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <StyledInputBase
//           placeholder="Search…"
//           inputProps={{ "aria-label": "search" }}
//         />
//       </Search>
//     </div>
//   );
// }

// export default SearchBar;
