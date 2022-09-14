import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SpeedIcon from "@mui/icons-material/Speed";
import { Box, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import { makeStyles } from "@material-ui/core";

const SidebarNavigation = () => {
  const { logOut } = useAuth();
  const [admin, setAdmin] = React.useState(true);

  return (
    <Box
      sx={{
        background: "#003366 !important",
        color: "#fff !important",
      }}
    >
      {admin ? (
        <>
          {/*======= Dashboard Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "300",
                    fontSize: "16px",
                  }}
                >
                  <SpeedIcon sx={{ mr: 2, fontSize: "24px" }} />
                  Dashboard
                </Button>
              </NavLink>
            </AccordionSummary>
          </Accordion>
          {/*======= Dashboard Nav Menu End ======*/}

          {/*======= Sell Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <PointOfSaleIcon sx={{ mr: 2, fontSize: "24px" }} />
                Sell
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-new-invoice`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> POS
                </Button>
              </NavLink>
              <br />
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-invoice`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Invoice
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Sell Nav Menu End ======*/}

          {/*======= Product Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <ShoppingCartIcon sx={{ mr: 2, fontSize: "24px" }} />
                Product
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/product-category`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Category
                </Button>
              </NavLink>
              {/* <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-unit`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Unit
                </Button>
              </NavLink> */}
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/purchase-product`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Purchase Product
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-product`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Product
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-product`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Product
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Product Nav Menu End ======*/}

          {/*======= Customer Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <PeopleAltIcon sx={{ mr: 2, fontSize: "24px" }} />
                Customer
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-customer`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Customer
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-customer`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Customer
                </Button>
              </NavLink>

            </AccordionDetails>
          </Accordion>
          {/*======= Customer Nav Menu End ======*/}

          {/*======= Supplier Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <PersonIcon sx={{ mr: 2, fontSize: "24px" }} />
                Supplier
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-supplier`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Supplier
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-supplier`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Supplier
                </Button>
              </NavLink>

            </AccordionDetails>
          </Accordion>
          {/*======= Supplier Nav Menu End ======*/}


          {/*======= Accounts Nav Menu Start ======*/}
          {/* <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <PaidIcon sx={{ mr: 2, fontSize: "24px" }} />
                Accounts
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/payment`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Payment
                </Button>
              </NavLink>
              <br />
              
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-transaction`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Transaction
                </Button>
              </NavLink>
              
            </AccordionDetails>
          </Accordion> */}
          {/*======= Accounts Nav Menu End ======*/}

          {/*======= Stock Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <SignalCellularAltIcon sx={{ mr: 2, fontSize: "24px" }} />
                Stock
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/stock-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Stock
                  Report
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/supplier-stock-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Stock
                  Report (Supplier)
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/product-stock-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Stock
                  Report (Product)
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Stock Nav Menu End ======*/}

          {/*======= Report Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <MenuBookIcon sx={{ mr: 2, fontSize: "24px" }} />
                Report
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/purchase-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Purchase Report
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/sales-report-product`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Sales
                  Report (Product)
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/profit-report-invoice`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Profit
                  Report (Invoice)
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/today-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter4Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Todays
                  Report
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/sales-report`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter5Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Sales
                  Report
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Report Nav Menu End ======*/}


          {/*======= HRM Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <AccountCircleIcon sx={{ mr: 2, fontSize: "24px" }} />
                HRM
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/designation`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} />{" "}
                  Designation
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-employee`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Employee
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-employee`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Employee
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= HRM Nav Menu End ======*/}

          {/*======= Expense Nav Menu Start ======*/}
          {/* <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <CurrencyExchangeIcon sx={{ mr: 2, fontSize: "24px" }} />
                Expense
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/expense-item`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Expense
                  Item
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-expense`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Expense
                </Button>
              </NavLink>

            </AccordionDetails>
          </Accordion> */}
          {/*======= Expense Nav Menu End ======*/}


          {/*======= Personal Loan Nav Menu Start ======*/}
          {/* <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <AccountBoxIcon sx={{ mr: 2, fontSize: "24px" }} />
                Personal Loan
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>

              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-personal-loan`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Loan
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-personal-loan`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Loan
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-payment`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add
                  Payment
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion> */}

          {/*======= Test Component Nav Menu End ======*/}
        </>
      ) : (
        <>
          {/*======= Sell Nav Menu Start ======*/}
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              background: "#003366 !important",
              boxShadow: "none !important",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowBackIosNewIcon
                  sx={{ color: "#fff !important", fontSize: "12px" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-90deg)",
                  marginBottom: 0,
                },
              }}
            >
              <Button
                sx={{
                  color: "#fff !important",
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                <PointOfSaleIcon sx={{ mr: 2, fontSize: "24px" }} />
                Sell
              </Button>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#012C56 !important" }}>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/add-new-invoice`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter1Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Add New
                  Invoice
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/manage-invoice`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter2Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> Manage
                  Invoice
                </Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", marginTop: "0 !important" }}
                to={`/dashboard/pos`}
              >
                <Button
                  sx={{
                    color: "#fff !important",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <Filter3Icon sx={{ mr: 1, ml: 1, color: "yellow" }} /> POS
                </Button>
              </NavLink>
            </AccordionDetails>
          </Accordion>
          {/*======= Sell Nav Menu End ======*/}
        </>
      )}
    </Box>
  );
};

export default SidebarNavigation;
