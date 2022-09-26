import AssignmentIcon from "@mui/icons-material/Assignment";
import { Button, Collapse, Container, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import styles from "./ProductSalesReport.module.css";

function Row({ product }) {
  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {product.date}
        </TableCell>
        <TableCell align="left">{product.product}</TableCell>
        <TableCell align="left">{product.customerPhone}</TableCell>
        <TableCell align="right">{product.price}</TableCell>
        <TableCell align="right">{product.grandTotal}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const ProductSalesReport = () => {
  const [open, setOpen] = React.useState(false);
  const [allProducts, setAllProducts] = React.useState([]);
  const [productDisplayed, setProductDisplayed] = React.useState([]);
  const [startDate, setStartDate] = React.useState("")
  const [endDate, setEndDate] = React.useState("")
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then(res => res.json())
      .then(data => {

        setAllProducts(data)
        setProductDisplayed(data)
      })
  }, []);
  const handleProductSearch = (event) => {
    event.preventDefault()
    const matchedProduct = allProducts.filter(product => (product.date >= startDate && product.date <= endDate)
    );
    setProductDisplayed(matchedProduct);
  };
  let total = 0;
  productDisplayed.forEach(item => {
    total = total + parseInt(item.grandTotal)
  })
  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px", marginLeft: "-88px" }}>Report</span>{" "}
          <br />{" "}
          <span style={{ color: "#969494" }}>Sales Report (Product)</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "left", mb: 1 }}>
        <Button className={`${styles.filterBtn}`} onClick={() => setOpen(!open)}>
          Filter
        </Button>
        <Collapse
          in={open}
          sx={{ mt: 2, mb: 2 }}
          timeout="auto"
          unmountOnExit
          className={`${styles.tableContainer}`}
        >
          <form onSubmit={handleProductSearch}>

            <TextField onChange={(e) => setStartDate(e.target.value)} size="small" id="date" label="Start Date" type="date" sx={{ mr: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <TextField onChange={(e) => setEndDate(e.target.value)} size="small" id="date" label="End Date" type="date" sx={{ mr: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <Button className={`${styles.searchBtn}`} type='submit'>Search</Button>
          </form>
        </Collapse>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
          Sales Report (Product Wise)
        </Typography>
        <hr />
        <TableContainer
          component={Paper}
          sx={{ border: 1, borderColor: "grey.300" }}
        >
          <Table aria-label="simple table">
            <TableHead className={`${styles.tableHeader}`}>
              <TableRow>
                <TableCell className={`${styles.tableCell}`}>
                  Sales Date{" "}
                </TableCell>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Product Name
                </TableCell>
                <TableCell align="left" className={`${styles.tableCell}`}>
                  Customer Phone
                </TableCell>
                <TableCell align="right" className={`${styles.tableCell}`}>
                  Rate
                </TableCell>
                <TableCell align="right" className={`${styles.tableCell}`}>
                  Total Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productDisplayed.map((product) => (
                <Row key={product._id} product={product} />
              ))}
              <TableRow>
                <TableCell colSpan={4} align="right" sx={{ borderRight: 1 }}>
                  Total sell:
                </TableCell>
                <TableCell align="right">BDT {total} </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ProductSalesReport;
