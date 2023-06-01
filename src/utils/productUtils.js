export const isPresentInWishlist = (list, productID) => {
  return list.some((product) => product._id === productID);
};

export const isPresentInCart = (list, productID) => {
  return list.some((product) => product._id === productID);
};
