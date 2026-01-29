import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="mb-2">
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-36 object-cover"
        />

        {/* Location badge */}
        <span className="absolute bottom-0 left-0 bg-[#270AA8] text-white text-xs px-8 py-2 rounded-tr-3xl rounded-bl-2xl">
          {car.location}
        </span>
      </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-semibold text-sm">
          {car.name}
        </h3>

        <p className="text-xs text-gray-500 mb-2">
          {car.type} | {car.mileage} km
        </p>

        <p className="text-[#270AA8] font-bold text-sm mb-3">
          {car.price}
        </p>

        <Link
          to={`/cars/${car.id}`}
          className="block text-center bg-[#270AA8] text-white text-sm py-2 rounded-full transition"
        >
          View Details →
        </Link>
      </div>
    </div>

  );
}

export default CarCard;
