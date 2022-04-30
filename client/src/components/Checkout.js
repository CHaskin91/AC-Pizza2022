import React from "react";
import StripeCheckout from "react-stripe-checkout";
export default function Checkout({ total }) {
  function tokenHandler(token) {
    console.log(token);
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
