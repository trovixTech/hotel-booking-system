import { useState } from "react";

const rooms = [
  "Premium cottage",
  "Studios with terrace",
  "Premium pavilions",
  "The luxury villa",
  "Grand deluxe room",
];

export default function HotelRooms() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-[#f6f3ee] px-6 py-28">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8">
        
        {/* Left menu */}
        <div className="bg-white rounded-3xl p-6 w-full lg:w-64 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">
            Room Types
          </h3>

          {rooms.map((room, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group flex items-center gap-4 w-full px-5 py-3 mb-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  active === i
                    ? "bg-[#c9a25d] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <span
                className={`text-xs ${
                  active === i ? "opacity-80" : "opacity-40"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {room}
            </button>
          ))}
        </div>

        {/* Center image */}
        <div className="relative flex-1">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="room"
            className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover rounded-3xl shadow-lg"
          />

          <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-6 py-4 text-center shadow-lg">
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Starting from
            </p>
            <h3 className="text-xl font-bold my-1">$50.00</h3>
            <button className="mt-2 bg-black text-white px-5 py-2 rounded-full text-xs tracking-wide hover:bg-gray-800 transition">
              BOOK NOW →
            </button>
          </div>
        </div>

        {/* Right details */}
        <div className="bg-[#fdfaf6] rounded-3xl p-8 w-full lg:w-80 shadow-sm">
          <span className="text-[#c9a25d] text-sm font-semibold tracking-wide">
            Phenomenal view
          </span>

          <h2 className="text-2xl font-semibold mt-3 mb-4">
            Premium cottage
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            Discover a private home in the orchard, three bedrooms and baths
            with a private plunge pool and service and a three sided view from
            the king size bed.
          </p>

          <div className="mt-8 space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              ☕ <span>Breakfast included</span>
            </div>
            <div className="flex items-center gap-2">
              🧺 <span>Laundry facilities</span>
            </div>
            <div className="flex items-center gap-2">
              🚗 <span>Pickup and drop</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}