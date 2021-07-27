import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useSelector } from "react-redux";

const StripeCheckoutButton = ({ price, activity, bookActivity }) => {
  const user = useSelector((state) => state.user.currentUser);
  const priceForStripe = price;
  const publishableKey =
    "pk_test_51JHdYqErgxY0VgSyBJ4OUwmYXt7zLVIrHGRgQFy4ID4AXdOr2xuZuDHynF0HMXmhHa5WcxXQg767QtKIPPOWcjd100USNS3z2X";
  const onToken = (token) => {
    console.log(token);
    if (user) {
      // axios
      //   .post("/payment", { amount: priceForStripe, token })
      //   .then((res) => console.log("Payment Success :", res))
      //   .catch((err) => console.log("Payment err :", err));
      axios({
        url: "/api/club/payment",
        method: "post",
        data: {
          amount: priceForStripe,
          token,
        },
      })
        .then((response) => {
          console.log("Payment Success : ", response);
          if (response.status === 200) {
            bookActivity(activity);
          }
        })
        .catch((err) => console.log("Payment Error :", err));
    } else {
      alert("Please login to do payment");
    }
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CMS"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total Price is $${price * 0.01}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
