import axios from "axios";
import { ADDDATA, ORDER, REMOVE, DECR } from "./actionType";
const API = "APII";

export const addData = (allData) => {
  console.log("Data ", allData);
  return {
    type: ADDDATA,
    payload: {
      data: allData,
    },
  };
};

export const getApi = () => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5000/foodMenu`, config);
      console.log("data", res.data);
      dispatch({
        type: API,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getOrderDetail = () => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5000/orderData`, config);
      console.log("order data", res.data);
      dispatch({
        type: "getOrderData",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const placeOrder = (allData) => {
  const OrderId = allData.id;
  const Des = allData.des;
  const Items = allData.items;
  const Date1 = allData.date;
  const Price = allData.price;
  const Name = allData.name;
  const PhoneNo = allData.phno;

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return async (dispatch) => {
    try {
      const apiSendData = await fetch("http://localhost:5000/orderData", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          OrderId,
          Name,
          Des,
          PhoneNo,
          Date1,
          Price,
          Items,
        }),
      });
      const res = await apiSendData.json();
      console.log("api ka res", res);
      dispatch({
        type: ORDER,
        payload: {
          mydata: PhoneNo,
        },
      });
    } catch (error) {
      console.log("hello", error);
    }
  };
};

// export const placeOrder = (orderDatas) => {
//   console.log("Order placing detail ", orderDatas);
//   return {
//     type: ORDER,
//     payload: {
//       mydata: orderDatas,
//     },
//   };
// };

export const removeItem = (id) => {
  console.log("mu incr data ", id);
  return {
    type: REMOVE,
    payload: {
      idds: id,
    },
  };
};
export const incr = (acType, id, qunatity, price) => {
  console.log("mu incr data ", id, qunatity);
  return {
    type: "INCR",
    payload: {
      acType: acType,
      idd: id,
      quan: qunatity,
      price: price,
    },
  };
};
export const decr = (allData) => {
  console.log("mu sdkjsd ", allData);
  return {
    type: DECR,
    payload: {
      data: allData,
    },
  };
};
