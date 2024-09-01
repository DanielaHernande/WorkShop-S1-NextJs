export default function ProductDetails() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold">Cotton jersey top</h1>
      <div className="mt-2 flex items-center space-x-2">
        <span className="px-2 py-1 border-2 border-zinc-950 text-black text-xs rounded">
          Best seller
        </span>
        <span className="text-red-500">
          ⚡ Selling fast! 56 people have this in their carts.
        </span>
      </div>

      <div className="mt-2 flex items-center">
        <span className="text-2xl font-bold text-red-500">$8.00</span>
        <span className="ml-2 line-through text-gray-500">$10.00</span>
        <span className="ml-2 bg-orange-500 text-white font-semibold px-2 py-1 rounded-xl text-sm">
          20% OFF
        </span>
      </div>

      <p className="mt-2 text-sm">20 people are viewing this right now</p>
      <div className="mt-4 bg-red-100 border border-red-300 p-2 text-center text-red-600">
        ⏰ HURRY UP! SALE ENDS IN: 11 Days : 15 Hours : 51 Mins : 32 Secs
      </div>

      <div className="mt-4">
        <span className="text-sm font-semibold">Color: </span>

        <div className="flex space-x-2 mt-2">
          {["Beige", "Black", "Blue", "White"].map((color) => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full border  "border-black" : "border-gray-300"}`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <span className="text-sm font-semibold">Size: </span>

        <div className="flex space-x-2 mt-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`border px-3 py-1 "border-black" : "border-gray-300" rounded`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <span className="text-sm font-semibold">Quantity</span>
        <div className="flex items-center mt-2">
          <button className="border p-2 text-lg">-</button>

          <button className="border p-2 text-lg">1</button>

          <button className="border p-2 text-lg">+</button>
        </div>
      </div>

      <div className="mt-4">
        <button className="w-full bg-black text-white p-3 rounded-lg mb-2 flex justify-center items-center">
          Add to cart - $8.000
        </button>
        <button className="w-full bg-yellow-400 text-black p-3 rounded-lg flex justify-center items-center">
          Buy with <span className="ml-2 font-bold">PayPal</span>
        </button>
        <a href="#" className="block mt-2 text-sm text-center text-gray-500">
          More payment options
        </a>
      </div>
    </div>
  );
}
