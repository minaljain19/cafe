import { Navigate } from "react-router-dom";

const initialData = {
  apidata: [],
  list: [],
  orderData: [],
  selectedNum: "",
  cartStatus: "false",
};

const menuReducers = (state = initialData, action) => {
  switch (action.type) {
    case "APII": {
      console.log("action.payload", action.payload);
      return {
        ...state,
        apidata: action.payload,
      };
    }
    case "getOrderData": {
      const { mydata } = action.payload;
      console.log("order in", action.payload);
      return {
        ...state,
        orderData: action.payload,
      };
    }
    case "ORDER":
      const { mydata } = action.payload;
      console.log("order in", mydata);
      return {
        ...state,
        selectedNum: mydata,
        orderData: [],
        list: [],
      };
    case "ADDDATA":
      console.log("state", state.list);
      const { data } = action.payload;
      console.log("dtajd jkhsd", data);
      const newList1 = state.list.filter((item) => item.id == data.id);
      let ind1 = state.list.findIndex((element) => element.id === data.id);
      // console.log("dat mil rha",newList1)
      if (newList1.length > 0) {
        state.list[ind1].qunatity = state.list[ind1].qunatity + 1;
        state.list[ind1].price =
          state.list[ind1].qunatity * state.list[ind1].eachPrice;
        return {
          ...state,
        };
      }
      // for (let i = 0; i < state.list.length; i++) {
      //   if (state.list[i].id == data.id) {
      //     alert("already exist in cart");
      //     return {
      //       ...state,
      //     };
      //   }
      // }
      return {
        ...state,
        list: [...state.list, data],
      };
    case "INCR":
      const { acType, idd, quan, price } = action.payload;
      console.log("reducers quan", idd, quan);
      let ind = state.list.findIndex((element) => element.id === idd);
      if (acType == "D") {
        if (quan > 1) {
          state.list[ind].qunatity = quan - 1;
          state.list[ind].price =
            state.list[ind].qunatity * state.list[ind].eachPrice;
        }
      }
      if (acType == "I") {
        state.list[ind].qunatity = state.list[ind].qunatity + 1;
        state.list[ind].price =
          state.list[ind].qunatity * state.list[ind].eachPrice;
      }
      let newLists = state.list;
      console.log("this is new list");
      console.log(newLists);
      return {
        ...state,
        list: newLists,
      };

    case "REMOVE":
      const { idds } = action.payload;
      const newList = state.list.filter((item) => item.id != idds);
      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};
export default menuReducers;
