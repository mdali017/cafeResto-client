import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const Payment = () => {
  const [carts] = useCart();
  const total = carts.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  // TODO:
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  return (
    <div>
      <SectionTitle title="Payment" subTitle="please proceed to"></SectionTitle>
      <h2>Teka o teka tumi uira uira aso...</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} carts={carts} />
      </Elements>
    </div>
  );
};

export default Payment;
