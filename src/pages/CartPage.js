import React from "react";
import MasterLayout from "../layouts/MasterLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import numeral from 'numeral';

function CartPage(props) {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.product.price * cartItem.quantity;
    });
    return total;
  };

  const handleCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <MasterLayout>
      <h1>CartPage</h1>
      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((cartItem, key) => (
                      <tr key={key}>
                        <td className="product-thumbnail">
                          <img
                            src={cartItem.product.image}
                            alt="Image"
                            className="img-fluid"
                            style={{ width: '100px', height: '100px' }}
                          />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">
                            {cartItem.product.name}
                          </h2>
                        </td>
                        <td> {numeral(cartItem.product.price).format("0,0")} VNĐ</td>
                        <td>
                          <div
                            className="input-group mb-3 d-flex align-items-center quantity-container"
                            style={{ maxWidth: 120 }}
                          >
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-black decrease"
                                type="button"
                              >
                                −
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center quantity-amount"
                              defaultValue={cartItem.quantity}
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-black increase"
                                type="button"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>{numeral(cartItem.product.price * cartItem.quantity).format("0,0")} VNĐ</td>
                        <td>
                          <a href="#" className="btn btn-black btn-sm">
                            X
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">
                        Cart Totals
                      </h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        {numeral(calculateTotal()).format("0,0")} VNĐ
                      </strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                      {numeral(calculateTotal()).format("0,0")} VNĐ
                      </strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        className="btn btn-black btn-lg py-3 btn-block"
                        onClick={handleCheckOut}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}

export default CartPage;