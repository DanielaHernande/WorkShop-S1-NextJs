import { cardProduct } from "@/app/_model/card";
import Image from "next/image";
import Link from "next/link";

export default function SessionCard() {
  return (
    <div className="p-5 ml-10 grid grid-cols-4">
      {cardProduct.map((card, index) => (
        <Link href={`home/product`} key={index} className="mb-8">
          <div className="cursor-pointer">
            <Image
              src={card.img}
              alt={card.name}
              width={310}
              height={310}
              className="rounded-lg"
            />
            <h3 className="mt-2 font-semibold text-gray-600">{card.name}</h3>
            <p className="font-medium text-sm">{card.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}