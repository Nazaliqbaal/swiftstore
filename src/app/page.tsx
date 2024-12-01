import ProductCard from "@/components/ui/ProductCard";
import { prisma } from "@/lib/db";
import EmblaCarousel from "@/components/ui/BannerCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../components/ui/BannerCarousel/embla.css";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="font-poppins">
      <div className="">
        <div className="max-w-full px-4 my-8">
          <EmblaCarousel
            products={products}
            slides={SLIDES}
            options={OPTIONS}
          />
        </div>
        <div className="grid gap-5 px-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            return (
              <Link key={product.id} href={`/product/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
