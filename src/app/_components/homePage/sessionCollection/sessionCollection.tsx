import Image from "next/image";
import { categories } from "@/app/_model/categoria";

export default function SessionCollection() {
  return (
    <div className="bg-red-200 p-10 ">
      <div className="flex justify-between">
        <h2 className="text-left text-3xl mb-10 font-semibold">
          Season Collections
        </h2>
        <a href="#" className="text-right underline">
          View all categories <i className="fa-solid fa-arrow-turn-up"></i>
        </a>
      </div>

      <div className="flex justify-center gap-8">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="relative w-56 h-56 mb-4">
              <Image
                src={category.img}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            <h3 className="text-lg font-semibold">{category.title}</h3>
            <p className="text-sm">{category.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
}
