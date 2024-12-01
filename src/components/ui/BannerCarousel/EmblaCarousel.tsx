"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { Product } from "@prisma/client";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  products: Product[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, products } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Fade(),
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  if (!products) {
    return "No products";
  }

  //   const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //     useDotButton(emblaApi);

  //   const {
  //     prevBtnDisabled,
  //     nextBtnDisabled,
  //     onPrevButtonClick,
  //     onNextButtonClick,
  //   } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container bg-slate-50 p-4 rounded-2xl">
          {products.map((product, index) => (
            <div className="embla__slide" key={index}>
              <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <Image
                  src={product.imageUrl || "/assets/product-placeholder.jpg"}
                  alt="product-image"
                  width={800}
                  height={800}
                  className="flex-1 embla__slide__img h-[200px] lg:h-[350px] rounded-md"
                />
                <div className=" flex-2 text-center md:m-auto">
                  <h1 className="font-bold my-4 text-2xl">{product.name}</h1>
                  <p className="mb-4">{product.description}</p>
                  <Link href={`/product/${product.id}`}>
                    <Button>Buy now @ &#8377; {product.price}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
