import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material"; // Use @mui/material instead of @mui/joy
import { Button, Typography, IconButton } from "@mui/material";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
  Close,
} from "@mui/icons-material";

function Cart() {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}
    >
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: { xs: 400, sm: 500 }, // Responsive max width
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Table
          sx={{ minWidth: { xs: 400, sm: 500 } }}
          aria-label="spanning table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Details</TableCell>
              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Grid item xs={4} sm={2}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                    alt="Cotton T-shirt"
                    style={{ width: "100px", borderRadius: "8px" }}
                  />
                </Grid>
              </TableCell>
              <TableCell align="center">
                <Grid
                  container
                  direction="column" // Vertical layout
                  alignItems="center" // Center items horizontally
                  spacing={1} // Add vertical space between items
                >
                  <Grid item>
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                      Item Name
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                      $333
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems="center" spacing={1}>
                      {" "}
                      {/* Inline buttons */}
                      <Grid item>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ minWidth: 0 }}
                        >
                          <RemoveCircleOutlineOutlined />
                        </Button>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">1</Typography>{" "}
                        {/* This is the quantity */}
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ minWidth: 0 }}
                        >
                          <AddCircleOutlineOutlined />
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align="center">
                <Grid container direction="column" alignItems="flex-end">
                  <Grid item>
                    <Typography variant="h6">€ 44.00</Typography>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <Close />
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" colSpan={2}>
                <Typography variant="h6">TOTAL</Typography>
              </TableCell>
              <TableCell align="right" colSpan={1}>
                <Typography variant="h6">€ 44.00</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Cart;
