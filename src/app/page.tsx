import ProductCard from "@/components/ui/ProductCard";
import { prisma } from "@/lib/db";
import EmblaCarousel from "@/components/ui/BannerCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../components/ui/BannerCarousel/embla.css";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className=" flex gap-4 font-poppins">
      <div className="flex flex-col">
        <div className="max-w-full px-4 my-8">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div className="flex flex-row gap-4 flex-1 px-5 flex-wrap">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
