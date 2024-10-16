import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  Grid,
  Button,
  Typography,
  IconButton,
  DialogTitle,
} from "@mui/material";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { updateQty, removeFromCart } from "../Redux/slice/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const addQty = (productId) => {
    dispatch(updateQty({ productId, qty: 1 }));
  };

  const decreaseQty = (productId, currentQty) => {
    if (currentQty === 1) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateQty({ productId, qty: -1 }));
    }
  };

  const removeProduct = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.qty,
    0
  );

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <TableContainer
        sx={{
          maxWidth: { xs: 500, sm: 600 },
          maxHeight: { xs: 400, sm: 500 },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        {" "}
        <DialogTitle>Your Cart</DialogTitle>
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
            {cartItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Typography variant="h6">Your cart is empty</Typography>
                </TableCell>
              </TableRow>
            ) : (
              cartItems.map((item) => (
                <TableRow key={item.product.id}>
                  <TableCell align="center">
                    <Grid item xs={4} sm={2}>
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        style={{ width: "100px", borderRadius: "8px" }}
                      />
                    </Grid>
                  </TableCell>
                  <TableCell align="center">
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                          {item.product.title}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                          ${item.product.price.toFixed(2)}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item>
                            <Button
                              variant="contained"
                              size="small"
                              onClick={() =>
                                decreaseQty(item.product.id, item.qty)
                              }
                            >
                              <RemoveCircleOutlineOutlined />
                            </Button>
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">{item.qty}</Typography>
                          </Grid>
                          <Grid item>
                            <Button
                              variant="contained"
                              size="small"
                              onClick={() => addQty(item.product.id)}
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
                        <Typography variant="h6">
                          ${(item.product.price * item.qty).toFixed(2)}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <IconButton
                          onClick={() => removeProduct(item.product.id)}
                        >
                          <DeleteOutlinedIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))
            )}
            <TableRow>
              <TableCell align="right" colSpan={2}>
                <Typography variant="h6">TOTAL</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Cart;
