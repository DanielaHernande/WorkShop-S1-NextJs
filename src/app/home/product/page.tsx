import ProductDetails from "@/app/_components/infoPage/productDetail/productDetail";
import ProductGallery from "@/app/_components/infoPage/productGallery/productGallery";
import ProductDescription from "@/app/_components/infoPage/productInformation/productInformation";

export default function PageProduct() {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductGallery />

        <ProductDetails />
      </div>

      <ProductDescription />
    </div>
  );
}
