import React, { useEffect, useState } from 'react';
import MasterLayout from '../layouts/MasterLayout';
import Product from '../models/Product';
import numeral from 'numeral';

function HomePage(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Product.all()
            .then(function (res) {
                // Log data trả về để kiểm tra dữ liệu
                console.log(res.data);
                setProducts(res.data.data);
            })
            .catch(function (error) {
                alert("500 error");
            });
    }, []);
    return (
        <MasterLayout>
            {/* <h1>HomePage</h1> */}

            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>Latest Products</h2>
                    </div>

                    <div className="row">
                        {
                            products.map((product, key) => (
                                <div className="col-sm-6 col-md-4 col-lg-3" key={key}>
                                    <div className="box">
                                        <a href={`product/${product.id}`}>
                                            <div className="img-box">
                                                <img src={product.image} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h6>{product.name}</h6>
                                                <h6>
                                                    Price:{" "}
                                                    <span>
                                                        {numeral(product.price).format("0,0")} VNĐ
                                                    </span>
                                                </h6>
                                            </div>
                                            <div className="new"></div>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="btn-box">
                        <a href="">View All Products</a>
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
}

export default HomePage;


