import React from 'react'

const Wishlist = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Wishlist</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
       <div className="wishlist">
        
       </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Wishlist
