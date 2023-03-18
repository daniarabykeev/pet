import axios from "axios";
import React, { createContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/consts";

export const productsContext = createContext();

const initState = {
  products: [],
  oneProduct: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

function ProductsContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProducts() {
    const res = await axios(`${API}${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: res.data,
    });
  }

  async function addProduct(newProduct) {
    await axios.post(`${API}`, newProduct);
    getProducts();
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  }

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  const value = {
    products: state.products,
    oneProduct: state.oneProduct,
    getProducts: getProducts,
    addProduct: addProduct,
    deleteProduct: deleteProduct,
    getOneProduct: getOneProduct,
    editProduct: editProduct,
  };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsContext;
