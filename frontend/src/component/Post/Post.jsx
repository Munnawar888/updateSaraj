import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, getProduct } from '../../actions/productAction';
import Loader from '../layout/Loader/Loader';
import './post.css'

const Post = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
   const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
      dispatch(getProduct());
    }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="app__explore">
            <div className="explore__container">
              {products.map((product) => (
                <Link to={`/post/${product._id}`} key={product._id}>
                  <div className="explore">
                    <img src={product.images[0].url} alt={product.name} />
                    <div className="explore__content"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
              }
export default Post
