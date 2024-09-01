import Image from "next/image";

export default function ProductGallery() {
  const images = [
    "/img/img1.jpg",
    "/img/img18.jpg",
    "/img/img18.jpg",
    "/img/img1.jpg",
    "/img/img18.jpg",
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 mt-8">
        <Image
          src={images[0]}
          alt="Producto"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="flex space-x-2">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            width={100}
            height={100}
            className="rounded cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
