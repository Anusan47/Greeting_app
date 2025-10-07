const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchGreetingByCategory = async (name, category) => {
  const url = `${BACKEND_URL}/greeting?category=${category}&name=${encodeURIComponent(name)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json();
};

export const fetchRandomGreeting = async (name) => {
  const url = `${BACKEND_URL}/greeting/random?name=${encodeURIComponent(name)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json();
};
