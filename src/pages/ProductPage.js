import React, { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import Product from "../models/Product";
import numeral from 'numeral';
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../redux/action";

function ProductPage(props) {
  const { id } = useParams();
  const [products, setProducts] = useState();
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    Product.find(id)
      .then(function (res) {
        // Log data trả về để kiểm tra dữ liệu
        console.log(res);
        setProducts(res.data.data);
      })
      .catch(function (error) {
        alert("500 error");
      });
  }, [id]);

  const handleAddtoCart = ()=>{
    alert ("Add to cart successfully")
    let newCart = [...cart]
    newCart.push({
      product_id : id,
      quantity : 1,
      product : products
    })
    dispatch({
      type : SET_CART,
      payload : newCart
    })
    navigate("/cart");

  }

  console.log(useParams());
  return (
    <MasterLayout>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 ftco-animate">
              <a href="" className="image-popup prod-img-bg">
                <img
                  src={products && products.image}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
            <div className="col-lg-6 product-details pl-md-5 ftco-animate">
              <h3>{products && products.name}</h3>
              <div className="rating d-flex"></div>
              <p className="price">
                <span>
                  {products && numeral(products.price).format("0,0")}{" "}
                  VNĐ
                </span>
              </p>
              <span>{products && products.description}</span>
              <p>
                <Link
                  to="/cart"
                  className="btn btn-black py-3 px-5 mr-2" onClick={handleAddtoCart}
                >
                  Add to Cart
                </Link>
                <Link to="/cart" className="btn btn-primary py-3 px-5">
                  Buy now
                </Link>
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 nav-link-wrap">
              <div
                className="nav nav-pills d-flex text-center"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </MasterLayout>
  );
}

export default ProductPage;