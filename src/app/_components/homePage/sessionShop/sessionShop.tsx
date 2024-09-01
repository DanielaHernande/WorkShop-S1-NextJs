import Image from "next/image";

export default function SessionShop() {
    
  const categories = [
    {
      title: "Essential Basics",
      subtitle: "UP TO 30% OFF",
      imageSrc: "/img/img1.jpg",
    },
    {
      title: "Athleisure Wear",
      subtitle: "UP TO 30% OFF",
      imageSrc: "/img/img1.jpg",
    },
    {
      title: "Seasonal Favorites",
      subtitle: "UP TO 30% OFF",
      imageSrc: "/img/img1.jpg",
    },
  ];

  return (
    <div className="mt-5 p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center justify-center p-4 text-center bg-white rounded-lg shadow-md h-96"
        >
          <Image
            src={category.imageSrc}
            alt={category.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg"></div>
          <div className="z-10">
            <p className="text-sm text-white mb-2">{category.subtitle}</p>
            <h2 className="text-xl font-semibold text-white mb-4">
              {category.title}
            </h2>
            <button className="px-4 py-2 text-sm font-medium text-black bg-white rounded">
              Shop now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
