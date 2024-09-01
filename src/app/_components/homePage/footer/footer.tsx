export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div>
          <h2 className="font-bold text-3xl mb-4">ecomus</h2>
          <p className="mb-2">Address: <span>1234 Fashion Street, Suite 567,</span></p>
          <p className="mb-2">New York, NY 10001</p>
          <p className="mb-2">Email: info@fashionshop.com</p>
          <p className="mb-2">Phone: (212) 555-1234</p>
          <p className="mb-2">Address: <span>1234 Fashion Street, Suite 567</span></p>
          <p className="mb-4 underline underline-offset-8">Get direction <i className="fa-solid fa-arrow-up"></i></p>

          <div className="flex space-x-4">
            {/* Icons would be placed here */}
            <a href="#" aria-label="Facebook" className="text-xl">
                <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-xl">
            <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-xl">
            <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="TikTok" className="text-xl">
            <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="#" aria-label="Pinterest" className="text-xl">
            <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Help</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Returns + Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                FAQ's
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Compare
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                My Wishlist
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">About us</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Visit Our Store
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Account
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Sign Up for Email</h2>
          <p className="text-gray-700 mb-4">
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events and more!
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email..."
              className="border rounded p-2 w-full"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center mt-8">
        <div className="flex items-center space-x-2">
          <span>USD</span>
          <span>English</span>
        </div>
        <div className="flex items-center space-x-4">
          {/* Payment icons would go here */}
          <span>VISA</span>
          <span>PayPal</span>
          <span>MasterCard</span>
          <span>AMEX</span>
        </div>
      </div>

      <div className="container mx-auto text-center mt-8 text-gray-600">
        &copy; 2024 Ecomus Store. All Rights Reserved.
      </div>
    </footer>
  );
}
