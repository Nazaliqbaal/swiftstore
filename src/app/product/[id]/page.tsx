import { prisma } from "@/lib/db";
import React from "react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const productDetail = await prisma.product.findUnique({ where: { id } });
  console.log(id);
  console.log(productDetail);

  return <div>ProductPage</div>;
};

export default ProductPage;
