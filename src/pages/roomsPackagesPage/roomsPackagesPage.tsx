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
    <div className="flex gap-6 p-10 bg-[#f6f3ee] min-h-screen">
      {/* Left menu */}
      <div className="bg-white rounded-2xl p-5 w-60">
        {rooms.map((room, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-full text-sm transition
              ${
                active === i
                  ? "bg-[#c9a25d] text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            <span className="opacity-60">
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
          className="w-full h-[420px] object-cover rounded-2xl"
        />

        <div className="absolute bottom-5 right-5 bg-white rounded-2xl p-4 text-center shadow">
          <p className="text-xs text-gray-500">Starting from</p>
          <h3 className="text-lg font-bold my-1">$50.00</h3>
          <button className="bg-black text-white px-4 py-2 rounded-full text-xs">
            BOOK NOW →
          </button>
        </div>
      </div>

      {/* Right details */}
      <div className="bg-[#fdfaf6] rounded-2xl p-6 w-80">
        <span className="text-[#c9a25d] text-sm">Phenomenal view</span>
        <h2 className="text-2xl font-semibold mt-2 mb-3">
          Premium cottage
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Discover a private home in the orchard, three bedrooms and baths
          with a private plunge pool and service and a three sided view from
          the king size bed.
        </p>

        <div className="mt-6 space-y-3 text-sm">
          <div>☕ Breakfast included</div>
          <div>🧺 Laundry facilities</div>
          <div>🚗 Pickup and drop</div>
        </div>
      </div>
    </div>
  );
}