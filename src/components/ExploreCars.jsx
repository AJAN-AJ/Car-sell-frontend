import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { fetchCars } from "../services/api";

const categories = ["All", "Toyota", "Mazda", "Nissan", "SUV", "Pickup"];

function ExploreCars() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchCars().then(setCars).catch(console.error);
  }, []);

  const filteredCars = cars.filter((car) => {
    const name = `${car.brand} ${car.model}`.toLowerCase();

    const matchesSearch = name.includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      car.brand === activeCategory ||
      car.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="px-4 py-8 bg-gray-50">
      {/* Search */}
      <div className="mx-auto flex items-center mb-6 relative">
        <input
          type="text"
          placeholder="Search for cars"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-white rounded-full px-8 py-4 text-sm shadow-sm outline-none"
        />

        <button className="bg-[#270AA8] p-3 absolute right-4 rounded-full text-white">
          <img src="/filter.png" alt="" className="w-5" />
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap ${
              activeCategory === cat
                ? "bg-[#270AA8] text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-1">Explore Cars</h2>
      <p className="text-sm text-gray-500 mb-6">
        Explore the best cars we have and choose
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredCars.map((car) => {
          const mainPhoto = car.photos.find((p) => p.isMain);

          return (
            <CarCard
              key={car.id}
              car={{
                id: car.id,
                name: `${car.brand} ${car.model}`,
                price: `MK ${car.price.toLocaleString()}`,
                location: car.location || "Malawi",
                image: mainPhoto?.url,
              }}
            />
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 mt-6">
        <p>{cars.length}+ Cars</p>
        <button className="bg-[#270AA8] flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm">
          <p>See More</p>
          <img src="/call_made(1).png" alt="" className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}

export default ExploreCars;
