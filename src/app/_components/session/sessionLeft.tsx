import Image from "next/image";

export default function SessionLeft() {
    return (
        <div className="mt-4 bg-[rgb(245,248,230)] flex justify-between items-start">
            <div className="ml-11 max-w-lg py-8">
                <h2 className="text-6xl font-bold mb-4">Summer Escapades</h2>
                <p className="text-base mb-6">Embrace the sun-kissed season with our collection of breezy</p>
                <button className="mt-5 bg-white h-10 w-40 text-sm drop-shadow-md rounded-lg">Shop Collection <i className="fa-solid fa-angle-right ml-2"></i></button>
            </div>

            <div className="relative w-1/2 h-96">
                <Image 
                    src="/img/img1.jpg"
                    alt="summer escapedes"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};