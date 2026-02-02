import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import CarInfo from "../components/CarInfo.jsx";
import Footer from "../components/Footer.jsx";
import { fetchCarById } from "../services/api";
import { Link } from "react-router-dom";

function CarDetails() {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    fetchCarById(id)
      .then((data) => {
        setCar(data);
        const mainPhoto = data.photos.find((p) => p.isMain);
        setActiveImage(mainPhoto?.url || data.photos[0]?.url);
      })
      .catch(console.error);
  }, [id]);

  if (!car) {
    return <p className="text-center py-10">Loading car...</p>;
  }

  return (
    <>
      <div className="px-2 py-6">
        <Link to="/cars">
          <button className="mb-4">
          <img src="/back.png" alt="" />
        </button>
        </Link>
       
        <img
          src={activeImage}
          alt="Car"
          className="w-full h-60 object-cover rounded-2xl mb-4"
        />

        {/* Thumbnails */}
        <div className="flex gap-3 mx-auto mb-6">
          {car.photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.url}
              alt=""
              onClick={() => setActiveImage(photo.url)}
              className={`w-20 h-16 object-cover rounded-xl cursor-pointer border ${
                activeImage === photo.url
                  ? "border-[#270AA8]"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      <CarInfo car={car} />

      {/* CTA */}
      <WhatsAppButton
  phone="265999988511"
  message={`Hello, I’m interested in this car:

${car.name}
Price: MK ${car.price}
Location: ${car.location}

Image:
${car.image}
`}
>
  <button className="w-[95%] mx-auto bg-[#270AA8] text-white py-4 rounded-2xl font-semibold">
    Contact Seller
  </button>
</WhatsAppButton>
      <Footer />
    </>
  );
}

export default CarDetails;
