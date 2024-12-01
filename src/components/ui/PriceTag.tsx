import React from "react";

const PriceTag = ({ price }: { price: number }) => {
  return (
    <span className="bg-gray-200 rounded-3xl p-2">
      &#8377; {price.toFixed(2)}
    </span>
  );
};

export default PriceTag;
