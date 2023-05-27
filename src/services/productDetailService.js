import axios from "axios";

export const productFetch = async (productID, setProduct, setIsError) => {
  try {
    const res = await axios.get(`/api/products/${productID}`);
    const {
      data: { product },
    } = res;
    setProduct(product);
  } catch (error) {
    console.log(error);
    setIsError(error.message);
  }
};
