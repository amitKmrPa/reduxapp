import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getProducts from "../actions/GetProductForHome";
import axios from "axios";


let HomePage = () => {
    const state = useSelector((state) => state);
    const getAllProducts = useDispatch();
    useEffect(() => {
        getAllProducts(getProducts());
    }, []);
    console.log(state.products.data);
    return <React.Fragment>
        <div className="continer">
            <div className="row">
               
                 
                    <div className="col" >
                   { state.products.data && 
                   state.products.data.map(
                    (element) => {
                        return (
                            <ul type="disc">
                                <li style={{ 
                                    fontWeight: 'bold', 
                                    color: 'green' }}
                                >
                                    {element.id}
                                    {element.productName}
                                    {element.quantity}
                                    {element.price}
                                    {element.productType}
                                    {element.productId}
                                </li>
                            </ul>
                        )
                    }
                )
                   }
                </div>
            </div>
        </div>

    </React.Fragment>
}

export default HomePage;