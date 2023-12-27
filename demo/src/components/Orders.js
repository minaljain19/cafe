import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Header from "./Header";
import "jspdf-autotable";
import { incr, removeItem, placeOrder, getOrderDetail } from "./../action";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import jsPDF from "jspdf";
import { Typography } from "@mui/material";
function Orders(props) {
  const { orderData, selectedNum, getOrderDetail } = props;
  console.log("ordertData", orderData);
  const dispatch = useDispatch();
  console.log("my orderss", orderData);
  console.log("selected num", selectedNum);
  const [open, setOpen] = React.useState(false);
  let x = 0;
  function pdfGenerate(mybillData) {
    let doc = new jsPDF("landscape", "px", "a4", "false");

    doc.setFont("helvetica", "italic");
    doc.setFillColor(10, 15, 10);
    doc.setTextColor(10, 20, 10);
    doc.setFontSize(24);
    doc.text(
      "Caffein Cafe",
      doc.internal.pageSize.width / 2,
      30,
      null,
      null,
      "center"
    );

    const customerDetails = [
      ["Customer Name", mybillData.Name],
      ["Date", mybillData.Date1],
      ["Phone No", mybillData.PhoneNo],
    ];

    doc.autoTable({
      body: customerDetails,
      startY: 60,
      margin: { top: 20 },
      theme: "grid",
    });

    const tableData = mybillData.Items.map((itemm) => [
      itemm.name,
      "Rs." + itemm.price,
      itemm.price / itemm.eachPrice,
    ]);

    // Table headers for order items
    const tableColumnHeaders = ["Item Name", "Price", "Quantity"];
    const headerStyles = {
      fillColor: [114, 39, 39], // Background color using RGB values
      textColor: 255, // Text color (white in this case)
    };
    doc.autoTable({
      head: [tableColumnHeaders],
      body: tableData,
      startY: doc.lastAutoTable.finalY + 15,
      margin: { top: 20 },
      theme: "grid",
      headerStyles: headerStyles,
    });

    const totalAmountRow = [["Total Amount", "RS." + mybillData.Price]];

    doc.autoTable({
      body: totalAmountRow,
      startY: doc.lastAutoTable.finalY + 15,
      margin: { top: 20 },
      theme: "grid",
    });

    var randomNum = Math.floor(1000 + Math.random() * 9000);

    doc.save(`Caffein${randomNum}.pdf`);
    // let allitem = mybillData.Items.map(
    //   (itemm) =>
    //     itemm.name +
    //     " -  Rs." +
    //     itemm.eachPrice +
    //     " -  Quatity." +
    //     itemm.price / itemm.eachPrice
    // );
    // var doc = new jsPDF("landscape", "px", "a4", "false");
    // doc.setFont("helvetica", "italic");
    // doc.setFillColor(10, 15, 10);
    // doc.setTextColor(10, 20, 10);
    // // doc.rect(200, 40, 10, 10, "T");
    // doc.text(200, 60, "Food Order Detail");
    // doc.text(350, 60, mybillData.Date1);
    // doc.text(200, 80, "Customer Name : " + mybillData.Name);
    // doc.text(200, 100, "Order items : ");

    // doc.text(200, 120, allitem);
    // doc.setFontSize(20);
    // doc.text(200, 300, "Total Amount : " + "RS." + mybillData.Price);
    // var randomNum = Math.floor(1000 + Math.random() * 9000);

    // doc.save(`Caffein${randomNum}.pdf`);
  }

  return (
    <>
      <div className="back backs">
        <Header />
        <Grid
          sm={12}
          md={11}
          xs={12}
          sx={{ pt: "10px", px: { xs: 2, sm: 0 } }}
          container
          className="box2"
        >
          <Grid sx={{ py: 2 }}>
            <Typography variant="h6" className="pageHeding">
              Order Details
            </Typography>
          </Grid>
          <TableContainer component={Paper} className="tableBoxShadow">
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell className="heading">Sno</TableCell>
                  <TableCell className="heading">Name</TableCell>
                  <TableCell className="heading">Date</TableCell>
                  <TableCell className="heading" sx={{ minWidth: "100px" }}>
                    Item Name
                  </TableCell>
                  <TableCell className="heading">Total</TableCell>
                  <TableCell className="heading">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderData
                  .filter((item) => item.PhoneNo == selectedNum)
                  .reverse()
                  .slice(0, 10)
                  .map((itm, index) => {
                    return (
                      <TableRow key="12">
                        <TableCell>{index + 1}</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>
                          {itm.Name}
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>
                          {itm.Date1}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            width: "150px !important",
                          }}
                        >
                          {itm.Items.map((itemm) => itemm.name + " , ")}
                        </TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>
                          RS.{itm.Price}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            className="ckeckOut2"
                            onClick={() => pdfGenerate(itm)}
                          >
                            GetBill
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}

                {/* <TableRow key="12">
                  <TableCell style={{ width: "10%" }}>2</TableCell>
                  <TableCell style={{ width: "30%" }}>Minal jain</TableCell>
                  <TableCell style={{ width: "30%" }}>
                    pizza,cofee,fries
                  </TableCell>
                  <TableCell style={{ width: "30%" }}>4500</TableCell>
                  <TableCell style={{ width: "14%" }}>
                    <Button variant="contained" className="ckeckOut">
                      GetBill
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow key="12">
                  <TableCell style={{ width: "10%" }}>3</TableCell>
                  <TableCell style={{ width: "30%" }}>Minal jain</TableCell>
                  <TableCell style={{ width: "30%" }}>
                    pizza,cofee,fries
                  </TableCell>
                  <TableCell style={{ width: "30%" }}>1000</TableCell>
                  <TableCell style={{ width: "14%" }}>
                    <Button variant="contained" className="ckeckOut" color="success">
                      GetBill
                    </Button>
                  </TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    orderData: state?.menuReducers?.orderData,
    selectedNum: state?.menuReducers?.selectedNum,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getOrderDetail,
    },

    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
