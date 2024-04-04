import React from "react";
import { shoes } from "@/services/shoes";
import Products from "../products/Products";

const ListProducts = () => {
  return (
    <section className="pl-8 pr-6 py-14 flex flex-col items-center sm:px-8 lg:py-20 text-dark10 ">
      <article className="text-center sm:w-3/4 lg:w-[600px]">
        <h2 className="font-semibold text-xl sm:text-2xl lg:text-[2rem]">
          Os melhores em só lugar{" "}
        </h2>
        <h3 className="mt-3 text-sm leading-5 sm:leading-6 sm:text-base lg:mt-6 lg:text-2xl">
          A marca Jordan na JordanShoes é a escolha certa para os amantes de
          sneakers que buscam estilo e conforto.
        </h3>
      </article>

      <div className="mt-10 flex flex-col gap-10 items-center sm:flex-row sm:justify-center sm:items-start sm:gap-8 sm:flex-wrap sm:w-full lg:mt-18 lg:gap-8 lg:max-w-[1220px] ">
        {shoes.map((item) => (
          <Products
            key={item.title}
            img={item.img}
            title={item.title}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ListProducts;
