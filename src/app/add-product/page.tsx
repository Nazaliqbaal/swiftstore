// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { prisma } from "@/lib/db";
import SubmitButton from "@/components/ui/SubmitButton";
import { redirect } from "next/navigation";

const AddProduct = () => {
  const onSubmit = async (formData: FormData) => {
    "use server";

    const productName = formData.get("productName")?.toString();
    const price = Number(formData.get("price")) || 0;
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();

    await prisma.product.create({
      data: {
        name: productName,
        description: description,
        imageUrl,
        price,
      },
    });
    redirect("/");

    console.log({ productName, price, description, imageUrl });
  };
  return (
    <div className="max-w-3xl m-auto">
      <form
        action={onSubmit}
        className="flex flex-col space-y-6 p-6 shadow-md rounded-3xl"
      >
        <div className="flex flex-col gap-3">
          <Label className="text-sm" htmlFor="productName">
            Product Name
          </Label>
          <Input
            className=" rounded-sm"
            type="text"
            name="productName"
            id="productName"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-sm" htmlFor="description">
            Description
          </Label>
          <Textarea
            className=" rounded-sm"
            name="description"
            id="description"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-sm" htmlFor="imageUrl">
            Image Url
          </Label>
          <Input
            className=" rounded-sm"
            type="text"
            name="imageUrl"
            id="imageUrl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-sm" htmlFor="price">
            Price
          </Label>
          <Input className=" rounded-sm" type="text" name="price" id="price" />
        </div>
        <div className="flex flex-col gap-3">
          <SubmitButton>Submit</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
