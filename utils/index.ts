

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "425e820309msh4df3295b51039f8p127a40jsn724185e40791",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    });
	const result = await response.json();

	return result
}
