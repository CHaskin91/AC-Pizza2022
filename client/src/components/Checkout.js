import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
export default function Checkout({ total }) {
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, total));
  }

  return (
    <div>
      <StripeCheckout
        amount={total * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Ku4OLFbdjG8jqKTUQDrLAbj2sREH3cJBX3M2mYMmX1LpBsMrOYjphgiUWpnMubzSBkyU8TtlOrBzcATBEUeMlpy00lMm8bIqe"
        currency="USD"
      >
        <button className="btn">Pay Now.</button>
      </StripeCheckout>
    </div>
  );
}
