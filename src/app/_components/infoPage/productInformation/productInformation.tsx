export default function ProductTabs() {
  return (
    <div className="mt-8 max-w-4xl p-6 border border-gray-400">
      {/* Pestañas */}
      <div className="flex border-b">
        <button className="py-2 px-4 border-b-2 border-black text-sm font-semibold text-black">
          Description
        </button>
        <button className="py-2 px-4 border-b-2 border-transparent text-sm font-semibold text-gray-500">
          Review
        </button>
        <button className="py-2 px-4 border-b-2 border-transparent text-sm font-semibold text-gray-500">
          Shipping
        </button>
        <button className="py-2 px-4 border-b-2 border-transparent text-sm font-semibold text-gray-500">
          Return Policies
        </button>
      </div>

      {/* Contenido de todas las pestañas (estático) */}
      <div className="mt-6">
        {/* Descripción */}
        <div>
          <p className="text-sm text-gray-700">
            Button-up shirt sleeves and a relaxed silhouette. It’s tailored with
            drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™
            Viscose — responsibly sourced wood-based fibres produced through a
            process that reduces impact on forests, biodiversity and water
            supply.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Front button placket</li>
                <li>Adjustable sleeve tabs</li>
                <li>Babaton embroidered crest at placket and hem</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Materials Care</h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                <li>Care: Hand wash</li>
                <li>Imported</li>
              </ul>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">
                    <i className="fa-solid fa-basket-shopping"></i>
                  </span>{" "}
                  Machine wash max. 30°C. Short spin.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🧴</span> Iron maximum 110°C.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                  </span>{" "}
                  Do not bleach/bleach.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">
                    <i className="fa-solid fa-ban"></i>
                  </span>{" "}
                  Do not dry clean.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                  </span>{" "}
                  Tumble dry, medium heat.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
