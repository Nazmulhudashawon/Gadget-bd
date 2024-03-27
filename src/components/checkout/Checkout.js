import React from 'react';
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import '../checkout/Checkout.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Checkout = () => {
    return (


        <div class="row mb-4">
            <div class="col-75">
                <div class="container">
                    <form>

                        <div class="row">
                            <div class="col-50">
                                <h3>Billing Address</h3>
                                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname"  />
                                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email"  />
                                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                                <input type="text" id="adr" name="address"  />
                                <label for="city"><i class="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city"  />

                                <div class="row">
                                    <div class="col-50">
                                        <label for="state">State</label>
                                        <input type="text" id="state" name="state" placeholder="NY" />
                                    </div>
                                    <div class="col-50">
                                        <label for="zip">Zip</label>
                                        <input type="text" id="zip" name="zip"  />
                                    </div>
                                </div>
                            </div>


                            <div class="col-50">
                                <h3>Payment</h3>
                                <label for="fname">Accepted Cards</label>
                                <div class="icon-container">
                                    <i> <FaCcMastercard /> </i>
                                    <FaCcVisa className='pl-4' />
                                </div>
                                <label for="cname">Name on Card</label>
                                <input type="text" id="cname" name="cardname"  />
                                <label for="ccnum">Credit card number</label>
                                <input type="text" id="ccnum" name="cardnumber" />
                                <label for="expmonth">Exp Month</label>
                                <input type="text" id="expmonth" name="expmonth"  />
                                <div class="row">
                                    <div class="col-50">
                                        <label for="expyear">Exp Year</label>
                                        <input type="text" id="expyear" name="expyear" />
                                    </div>
                                </div>
                            </div>


                        </div>
                        <label>
                            <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                        </label>
                        <Link as={Link} to="/checkout">
                            <button
                                className="btn btn-info text-capitalize mt-4"
                            >
                                Place My Order
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
            

        </div>

    );
};

export default Checkout;