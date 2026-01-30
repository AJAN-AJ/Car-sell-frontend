const API_URL = import.meta.env.VITE_API_URL;


export const fetchCars = async () => {
  const res = await fetch(`${API_URL}cars`);
  if (!res.ok) throw new Error("Failed to fetch cars");
  return res.json();
};

export const fetchCarById = async (id) => {
  const res = await fetch(`${API_URL}cars`);
  const cars = await res.json();
  return cars.find((car) => car.id === Number(id));
};
