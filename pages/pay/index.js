import React from "react";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://razorpay.me/@priyangsubanerjee",
      permanent: true,
    },
  };
}

function Pay() {
  return <div>Pay</div>;
}
export default Pay;
