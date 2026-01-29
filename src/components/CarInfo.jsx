function CarInfo({ car }) {
  // Defaults for fields not yet in schema
  const mileage = car.mileage || "2400 Km Mileage";
  const transmission = car.transmission || "Manual";
  const weight = car.weight || "300kg";
  const fuel = car.fuel || "Diesel Running";
  const condition = car.condition || "Good Condition";
  const location = car.location || "Lilongwe";
  const price = car.price || "K23 Million";
  const name = car.name || "Toyota Axio Hybrid";

  return (
    <>
      <div className="flex mb-10 w-[95%] mx-auto rounded-3xl text-gray-400 gap-3 justify-center bg-[#303030] px-4 py-5">
        
        {/* LEFT */}
        <div className="flex flex-col gap-1">
          <h2 className="text-white font-semibold">{name}</h2><br />

          <div className="flex items-center gap-1">
            <img src="/CarInfoIcons/road.png" alt="" />
            <p className="text-[15px]">{mileage}</p>
          </div>

          <div className="flex items-center gap-1">
            <img src="/CarInfoIcons/transition.png" alt="" />
            <p className="text-[15px]">{transmission}</p>
          </div>

          <div className="flex items-center gap-1">
            <img src="/CarInfoIcons/gis_car.png" alt="" />
            <p className="text-[15px]">{weight}</p>
          </div>

          <div className="flex items-center gap-1">
            <img src="/CarInfoIcons/location.png" alt="" />
            <p className="text-[15px]">{location}</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-bold text-2xl">{price}</h1>

          <div className="flex items-center gap-1">
            <img src="/CarInfoIcons/OilFill.png" alt="" />
            <p className="text-[15px]">{fuel}</p>
          </div>

          <div className="flex items-center gap-1">
            <img src="/CarInfoIcons/condition.png" alt="" />
            <p className="text-[15px]">{condition}</p>
          </div>

          <div className="flex items-center gap-1">
            <img src="/CarInfoIcons/agreement.png" alt="" />
            <p className="text-[15px]">
              Reach out on <br /> WhatsApp
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default CarInfo;
