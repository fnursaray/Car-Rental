import { CarType } from "./../types";
import { colors } from "./constants";
colors;
// aracın fotosunun oluşması şiçin gerekli paramları url'e ekle
const generateImage = (car: CarType, angle?: string): string => {
  //api dan url verisini bir değişkene atadık
  const url = new URL("https://cdn.imagin.studio/getimage");

  //searchParams değerleri alarak sayfa yenilense dahi sayfada kayıtlı kalmasını sağlıyor

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("zoomType", "fullscreen");
  // açı parametresi geldiyse url'e ekle
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  // colors dizisinin uzunluğuna göre rastgele bir sayı seçelim
  const i = Math.round(Math.random() * colors.length);

  // rastgele seçilen rengi url'e ekle
  url.searchParams.append("paintId", colors[i]);

  return url.href;
};

export default generateImage;
