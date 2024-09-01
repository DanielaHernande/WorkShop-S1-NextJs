import ProductGallery from "@/app/_components/infoPage/productGallery/productGallery";

export default function PageProduct() {
    
    return (
        <div className="container mx-auto p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Galería de imágenes del producto */}
            <ProductGallery />
    
            {/* Detalles del producto */}
            
          </div>
    
          {/* Extras como políticas de devolución, comparaciones, etc. */}
          
    
          {/* Descripción del producto con pestañas */}
          
        </div>
      );
    }