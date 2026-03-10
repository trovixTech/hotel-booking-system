import { useState } from "react";
import cafeIcon from "../../assets/logo/cafeIcon.gif";
import pickUpIcon from "../../assets/logo/pickUp.gif";

const rooms = [
  {
    title: "Premium cottage",
    price: "$50.00",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    description:
      "Discover a private home in the orchard, three bedrooms and baths with a private plunge pool.",
  },
  {
    title: "Studios with terrace",
    price: "$60.00",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    description:
      "Enjoy a peaceful stay with a private terrace and beautiful mountain view.",
  },
  {
    title: "Premium pavilions",
    price: "$80.00",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    description:
      "Luxury pavilion surrounded by nature with premium facilities.",
  },
  {
    title: "The luxury villa",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description:
      "Experience ultimate luxury in our private villa with pool and garden.",
  },
  {
    title: "Grand deluxe room",
    price: "$70.00",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    description:
      "Spacious deluxe room with modern design and relaxing ambiance.",
  },
];

export default function HotelRooms() {
  const [active, setActive] = useState(0);

  const room = rooms[active];

  return (
    <div className="min-h-screen bg-[#f6f3ee] px-6 py-28">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8">

        {/* Left menu */}
        <div className="bg-white rounded-3xl p-6 w-full lg:w-64 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">
            Room Types
          </h3>

          {rooms.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-4 w-full px-5 py-3 mb-2 rounded-full text-sm font-medium transition
              ${
                active === i
                  ? "bg-[#c9a25d] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-xs opacity-50">
                {String(i + 1).padStart(2, "0")}
              </span>
              {r.title}
            </button>
          ))}
        </div>

        {/* Center image */}
        <div className="relative flex-1">
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover rounded-3xl shadow-lg"
          />

          <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-6 py-4 text-center shadow-lg">
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Starting from
            </p>
            <h3 className="text-xl font-bold my-1">{room.price}</h3>
            <button className="mt-2 bg-black text-white px-5 py-2 rounded-full text-xs hover:bg-gray-800 transition">
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
            {room.title}
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            {room.description}
          </p>

          <div className="mt-8 space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
            <img src={cafeIcon} alt="Breakfast" className="w-6 h-6" /> <span>Breakfast included</span>
            </div>
            <div className="flex items-center gap-2">
              🧺 <span>Laundry facilities</span>
            </div>
            <div className="flex items-center gap-2">
            <img src={pickUpIcon} alt="pickup and drop" className="w-6 h-6" /> <span>Pickup and drop</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}