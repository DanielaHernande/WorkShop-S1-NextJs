export default function Brand() {
  const brands = ["SSENSE", "BURBERRY", "NIKE", "ASOS", "PULL&BEAR", "GILDAN"];

  return (
    <div className="flex justify-between items-center my-2 p-6 border-gray-700">
      {brands.map((brand, index) => (
        <div key={index} className="flex justify-center items-center w-1/6 border py-5">
          <span className="text-2xl font-bold">{brand}</span>
        </div>
      ))}
    </div>
  );
}
