import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { cartContext } from "../contexts/CartContext";
import ClearIcon from "@mui/icons-material/Clear";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData("ID"),
//   createData("Title"),
//   createData("Image"),
//   createData("Price"),
//   createData("Count"),
// ];

export default function CartPage() {
  const { cart, getCart, deleteProductFromCart } =
    React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* {!cart ? ( */}
      <TableContainer
        component={Paper}
        sx={{ width: "90%", marginTop: "30px" }}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Count</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <h3>{item.title}</h3>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <img style={{ width: "80px" }} src={item.image} alt="" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <h3 style={{ color: "green" }}>{item.price}</h3>
                </StyledTableCell>
                <StyledTableCell align="right">{item.count}</StyledTableCell>
                <StyledTableCell align="right">
                  <button
                    onClick={(e) => {
                      deleteProductFromCart(item.id);
                    }}
                  >
                    <ClearIcon sx={{ fontSize: "small" }} />
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* ) : (
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Cart is empty</h3>
          <img
            src="https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGklMjBkb250JTIwaGF2ZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <h3>Just go to HomePage and choose something to buy</h3>
        </div>
      )} */}
    </div>
  );
}
