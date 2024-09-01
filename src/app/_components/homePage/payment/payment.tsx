export default function Payment() {

    return (
        <div className="mt-10 flex justify-around">

            <div className="flex items-center">
                <span className="border border-gray-300  rounded-full items-center text-2xl py-1 px-3 w-12 h-12"><i className="fa-solid fa-box"></i></span>
                <div className="ml-2">
                    <h3 className="font-semibold">Free Shipping</h3>
                    <p className="text-sm">Free shipping over order $120</p>
                </div>
            </div>

            <div className="flex items-center">
                <span className="border border-gray-300  rounded-full items-center text-2xl py-1 px-3 w-13 h-12"><i className="fa-regular fa-credit-card"></i></span>
                <div className="ml-2">
                    <h3 className="font-semibold">Fexible Payment</h3>
                    <p className="text-sm">Pay with Multiple Credit Cards</p>
                </div>
            </div>

            <div className="flex items-center">
                <span className="border border-gray-300  rounded-full items-center text-2xl py-1 px-3 w-12 h-12"><i className="fa-solid fa-arrow-left"></i></span>
                <div className="ml-2">
                    <h3 className="font-semibold">14 Day Return</h3>
                    <p className="text-sm">Within 30 days for an exchange</p>
                </div>
            </div>

            <div className="flex items-center">
                <span className="border border-gray-300 rounded-full items-center text-2xl py-1 p-3 w-12 h-12"><i className="fa-solid fa-headset"></i></span>
                <div className="ml-2">
                    <h3 className="font-semibold">Premium Support</h3>
                    <p className="text-sm">Outstand premium support</p>
                </div>
            </div>
        </div>
    )
}