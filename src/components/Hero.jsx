import { Link } from "react-router-dom";


function Hero({url, title, description}) {
  return (
    <section className="relative py-10 min-h-[50vh] pt-35 flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <img
        src={url}
        alt="Car background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      

      {/* Content */}
      <div className="relative z-10 px-4 max-w-md">
        <h1 className="text-3xl font-bold leading-tight mb-4">
          {title}
        </h1>

        <p className="text-sm text-gray-200 mb-6">
         {description}
        </p>

        <Link
          to="/cars"
          className="inline-block bg-[#270AA8] hover:bg-blue-400 transition p-[20px] rounded-full font-semibold"
        >
          Explore our cars →
        </Link>
      </div>
    </section>
  );
}

export default Hero;
