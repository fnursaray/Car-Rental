import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "cb956e4f50msh538e2e33fddf4e2p13255ejsnd720c852d2ab",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

// Normal de bu fonksiyonumuz bir CarType dizisi return ediyor ama bu dizi api dan bir gecikme sonrasında geldiğinde dolayı return satırına sadece CarType[] yazmaıyoruz bu return deilen değeri Promise ismindeki interface'e generic tip olarak göndermeliyiz

type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};

export const fetchCars = async (paramsObj: FilterType): Promise<CarType[]> => {
  // parametreler gelmediği durumda geçerli olucak varsayılan değerlini belirle
  const {
    limit = "5",
    make = "bmw",
    model = "",
    fuel_type = "",
    year = "",
  } = paramsObj;

  console.log(make);

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}&limit=${limit}`;

  const res = await fetch(url, options);

  return await res.json();
};
