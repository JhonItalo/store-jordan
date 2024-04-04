import SpanFrete from "@/components/spanFrete/SpanFrete";
import BannerMain from "@/components/banner.main.tsx/Banner.main";
import ListProducts from "@/components/listProducts/ListProducts";

export default function Home() {
  return (
    <>
      <SpanFrete />
      <main className="mt-[39px] lg:mt-[70px]">
        <BannerMain />
        <ListProducts />
      </main>
    </>
  );
}
