import React from "react";
import Image from "next/image";

interface ProductsProps {
  img: string;
  title: string;
  category: string;
  price: number;
}

const Products = ({ img, title, category, price }: ProductsProps) => {
  const value = price.toLocaleString("pt-Br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className=" w-[320px] flex flex-col gap-6 items-start md:w-[336px] lg:w-[384px] ">
      <div className="w-full h-[200px] flex justify-center items-center bg-dark20">
        <Image src={img} alt={title} width={225} height={135}></Image>
      </div>

      <div className="text-start font-medium">
        <h4 className="text-lg font-medium leading-6 lg:leading-6">{title}</h4>
        <h5 className="mt-3 text-base font-medium text-brandColor ">
          {category}
        </h5>
      </div>
      <h6 className="text-xl font-medium">{value}</h6>
    </div>
  );
};

export default Products;
