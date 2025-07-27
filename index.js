let allproducts = document.getElementById("allproducts");
let products = [
  {
    name: "Aura 2 Ton Inverter Split AC",
    image: "./Totals assests/1.png",
    pprice: "1,0000",
    shortDesc:
      "Air conditioning (AC) is a modern comfort solution that cools and dehumidifies indoor spaces...",
    id: 0,
    longDesc:
      "Air conditioning (AC) is a technology that regulates indoor air quality by cooling and often dehumidifying the air in enclosed spaces. Utilizing a refrigeration cycle, AC systems extract heat from the indoor air, cooling it down and improving comfort. Commonly found in homes, offices, and vehicles, air conditioning enhances living and working environments by maintaining optimal temperatures, fostering productivity, and providing relief from hot weather.",
    catg: "Haier",
  },
  {
    name: "Chrome+ 1.5 Ton Inverter Split AC",
    image: "./Totals assests/2.png",
    pprice: "99,000",
    shortDesc:
      " By employing a refrigeration process, AC systems extract heat, ensuring a pleasant... ",
    id: 1,
    longDesc:
      "Air conditioning (AC) is a modern comfort solution that cools and dehumidifies indoor spaces. By employing a refrigeration process, AC systems extract heat, ensuring a pleasant and controlled environment in homes, offices, and various settings. These systems play a vital role in enhancing comfort, especially during hot weather, by regulating temperatures and improving overall air quality.",
    catg: "Haier",
  },
  {
    name: "Mega T+ 1 Ton Inverter Split AC",
    image: "./Totals assests/3.png",
    pprice: "98,000",
    shortDesc:
      "It controlled environment in homes, offices, and various settings...",
    id: 2,
    longDesc:
      "Air conditioning (AC) is a technology designed to cool and dehumidify indoor spaces, creating a more comfortable environment. By utilizing a refrigeration cycle, AC systems extract heat from the air, allowing for efficient temperature control. Widely used in homes, offices, and commercial spaces, air conditioning contributes to improved comfort and productivity, making it an essential aspect of modern living.",
    catg: "Haier",
  },
  {
    name: "Chrome+ 1.25 Ton Inverter Split AC",
    image: "./Totals assests/4.png",
    pprice: "97,000",
    shortDesc: "These systems play a vital role in enhancing comfort...",
    id: 3,
    longDesc:
      "Air conditioning (AC) is a transformative technology that regulates indoor climates, providing cool and refreshing environments. Employing a refrigeration process, AC systems extract heat from the air, effectively cooling and dehumidifying living or working spaces. Widely adopted in homes, offices, and vehicles, AC enhances comfort, ensuring a pleasant atmosphere during warm weather and fostering a more enjoyable and productive daily experience.",
    catg: "Haier",
  },
  {
    name: "Chrome+ 1.5 Ton Inverter Window AC",
    image: "./Totals assests/5.png",
    pprice: "96,000",
    shortDesc:
      "Especially during hot weather, by regulating temperatures and improving overall air quality....",
    id: 4,
    longDesc:
      "Air conditioning (AC) is a modern comfort technology that efficiently cools indoor spaces. By utilizing a refrigeration mechanism, AC systems remove heat from the air, ensuring a pleasant and regulated temperature. Widely used in homes, offices, and various settings, air conditioning enhances comfort and productivity, providing relief during hot weather and creating a more enjoyable living or working environment.",
    catg: "Haier",
  },
  {
    name: "Mega 1.25 Ton Inverter Split AC",
    image: "./Totals assests/6.png",
    pprice: "95,000",
    shortDesc:
      "Air conditioning (AC) is a technology designed to cool and dehumidify indoor spaces...",
    id: 5,
    longDesc:
      "Air conditioning (AC) is a transformative technology designed to cool and regulate indoor environments. Using a refrigeration cycle, AC systems extract heat from the air, effectively lowering temperatures and creating a more comfortable atmosphere. Widely employed in homes, offices, and commercial spaces, air conditioning enhances living and working conditions, ensuring optimal comfort during warm weather and improving overall air quality for a better indoor experience.",
    catg: "Haier",
  },
  {
    name: "Avante 1.5 Ton Inverter Window AC",
    image: "./Totals assests/7.png",
    pprice: "94,000",
    shortDesc:
      "AC systems extract heat from the air, allowing for efficient temperature control...",
    id: 6,
    longDesc:
      "Air conditioning (AC) is a modern technology that regulates indoor temperatures, creating a comfortable and controlled environment. Using a refrigeration process, AC systems remove heat from the air, effectively cooling and dehumidifying spaces. Found in homes, offices, and various settings, air conditioning plays a crucial role in enhancing comfort, especially during hot weather, and contributes to improved overall well-being by maintaining optimal indoor conditions.",
    catg: "Haier",
  },
  {
    name: "Anav 1.5 Ton Inverter Split AC",
    image: "./Totals assests/8.png",
    pprice: "93,000",
    shortDesc: " Widely used in homes, offices, and commercial spaces...",
    id: 7,
    longDesc:
      "Air conditioning (AC) is a revolutionary technology designed to cool and enhance indoor environments. Through a sophisticated refrigeration process, AC systems extract heat from the air, ensuring a comfortable and controlled atmosphere. Widely utilized in homes, offices, and commercial spaces, air conditioning not only provides relief from heat but also contributes to improved air quality, creating a more pleasant and conducive environment for daily activities.",
    catg: "Haier",
  },
  {
    name: "Avan 1.5 Ton Inverter Split AC",
    image: "./Totals assests/9.png",
    pprice: "92000",
    shortDesc:
      "Air conditioning contributes to improved comfort and productivity, making it an essential aspect of modern living....",
    id: 8,
    longDesc:
      "Air conditioning (AC) is a modern marvel that transforms indoor spaces by efficiently cooling and regulating temperatures. Employing a refrigeration cycle, AC systems extract heat from the air, creating a comfortable and refreshing environment. Widely integrated into homes, offices, and diverse settings, air conditioning is essential for maintaining optimal comfort during warm weather, enhancing productivity, and fostering a more enjoyable living or working experience.",
    catg: "Haier",
  },
  {
    name: "Avante 1.25 Ton Inverter Split AC",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDQ0NDxIQDQ0NDQ0NDQ0NEhUPDQ0NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8PFysdFR0rKys3Ky0rKy8tLS0rLSs3KysrKy0rKy0uNC0tKysrKzcrLisrLS0rKyswKysrNysrN//AABEIAIIBhAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQMEBQYCB//EAEIQAAECAgUJBgIIBgIDAQAAAAABAgMSERVSkdETFiFRU5KTodIEBRRjo+IiYQYxQXGBorHBIzJicnOy4fEzQsIk/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAcEQEBAQABBQAAAAAAAAAAAAAAEQEhAhIUMWH/2gAMAwEAAhEDEQA/APs/bGuf8DVVqf8AsrVocvyRfsKSd2rafvuxIu3xozVVYbqGoq6ERF+35oZa98x0WhX6fmjcDUZdF2fsLWaVVzl/qcqon4Ukqw26jmK5j7Tk3Adcx9pybgIOlyTdQZJNS8zmk74jbTk3AdcRtpybgB0mSTUvMeSTUvPE5qt4205NwHW8bacm4CDpsklH23qLJpqW9cTm63jbTk3AK2jbTk3AQdHkk1LzxDJN1HOVtG2nJuA62jW+TcBB0eSbZ5AkNurkc5W0W3ybgOtotvk3AQdMkNNSXCViajmq1i2+TcArWLb5NwEWuklTUEqajm61i2+TcArWLb5NwER0kvyCVNRzdbRbfJuA071i2+TcBB0iNTUComo5utYtvk3AK2i2+TcBCujo+QfgpzlbRbfJuAq2jW+TcBB0tK/MKV+ZzdbRrfJuAq2jW+TcBB0yL94OU5mto1vk3AK2jW+TcBB0ky/MKV+ZzVbRrfJuA62i2+TcBB0lK/MKV+ZzVbRrfJuAVtG2nJuAHSov3jd+P4UnMVtG2nJuAVtG2nJuAg6TT8+YUr8zm62jbTk3A8r3vG2nJuAHTUr8x0r8zmK3jbTk3AVbxtpybgB1KKvzIO19mVyzI57daNe5EupOdreNtOTcBVxG2nJuAG0vY324vEdiefBxLcXiOxMZe+Y205NwFXMfacm4FGz4OJtI3EdiLwcTaRuI7Exq6j7Tk3AVdR9pybgBs+Ei242+7EPCRbcbfdiYtdx9p+VmAV3H2n5WYAbPhItuNxHYjZ2aM1Ucj4qqmmhz1ci/eirpMWu+0bT8rMCfs3eXanrofo1ytwIOqgRJmoqpQ76nJqcI5/tHb4kNURVVVciOVW6KV+r6vwAkWtCI7S771LEOE1ERJW/PQmlSo5fio1u/TT+xYR5tlNI3U25AlbZbchFOOcQqVGtstuQcrdTbkIpxzkhUiNbqbcg5W6kuQiR45xCpZW6kuQJG6kuQinHOSLUsiakuQJE1JchHOEwhUkiakuQJE1Jch4nCcQr3ImpLkCRNSXIeJhzCFepE1JcgSJqS5DzMEwhXqRNSXIKRuptyCmCYQp5NtltyBk22W3IKYJhCnkm2W3IGSbZbcgphTCFesk2y25AybbLbkPMwTCFesm2y25AybbLbkPMwTCFesm2y25AybdTbkPM4pxCveTbqbcgZNuptyHicJxCveTbZbcgZNtltyEc4TiFe8m2y25AybbLbkI5xK8sSpJG2W3IKRtltyEc4pxCpVY2y25BSNstuQinFOWFSqxtltyCkbZbchFOKYRKkVrbLbkPMjbLd1DxMKcQe1Y2y3dQSsbZbuoeJxTjgelhsss3UIHta12hEbMlPwoiaU+v6vvQkV5B2p+hq6nJcuj90Cs3vb/yN/sT9VAXea/Gn9ifqoGdVpo7+KvyR3Nf+yecown/xIq6lRP1xJpzWIszjnK045yixOOcrTjnAsTjnK045wiyjwmK84TgWZxzlacc4FicJyvOOcCxOE5XnCcCxOE5BOE5BPOE5BOE4FicJyvOE4E6vFOQzhOUTTjnIJwnAmnCchnFOBPOE5BOKcCeYJyCcU4E8wTEE4pwJ5hK4gnFOBYnFOV5xTkVYnEryvOKcCxOKcrq8SvAnV4leQZQWUAnnEryurxZQCwryHtS0sf8A2qqfemlDxlDy54FXtTplautifqoEMFaWM+TZblAy0uQX/FF/yuTkhNlCjAfpi/5X/sSzlZWsoGUK0wTFFrKBlCtOEwFrKDyhVmCcC3lAyhVnCcC3lAyhVnCcC3lAnKs4TgW5wnKs45wLU4TlWcc4FmcJytOE4Fmcc5VnCcCzOE5XnCcCxOE5XnFOBZnCcrTinAszinK6vFOBZnFOVpxTgWcoGUK04pwLOUEsQrTCnAs5Q8rEK6vCcgnWILKEE4pyiecU5BOKcgnnEryCYUwE6vFOQTArwqecU5BOJXAeOxr8LvlEiJ+YR57vWlIv+aJ+oGVOA/4o3+Z/7E05ShuoiRk/rpv/AOiaY0ixOE5XnCcCxOOcrzhOBYnHOVpxzgWJxzlacc4FicJyvOE4FmcJytOOcCzOE5WnHOBZnCcrTjnAsTjnK04ThFmcJyvOE4Ficc5WnCcCxOE5XnCcCxOKcrzhOBYnFOV5wnAnnCcrzCnCrE4pyCcU4E84TlecJwJ5xTkE4pwJ5wnK84K8CecU5BME4E04pyGcU4E04TkE4piCecSvIZhK8CXunSyIuuPF/UA7g0wKbURzr6FAiq8VaI7v6m03L/ySI8j7xSh7H/1K1fx/5oI5zSJljt+1zb0DLttNvQxu1915SI56RXMmoWVGoqItGnTSRVL5z9xMSDdy7bTb0H4htpt6GDUnnu3ExCpF2ztxMQN7xDbTb0DxDbTb0MGpF27txMR1H579xMQN3xDbTb0H4htpt6GDUfnu3ExCo/PduJiBveIbabeg/ENtNvQwKiXbu3ExHUS7d24nUBveIbabegeIbabehg1Eu3dw06gqJdu7cTqA3vENtNvQfiG2m3oYFRLt3biYiqJdu7cTEDoPENtNvQPENtNvQwKhXbu3ExCoV27txMQOg8Q2029A8Q2029Dn6hXbu3E6gqFdu7cTEDoPENtNvQfiG2m3oc7UK7d24nUOoV27txMQOh8S2029A8S2029DnqhXbu3E6gqFdu7cTEDofEttNvQPEttNvQ56oV27txMRVC7bu4adQHQ+IbabegeIbabehz1Qu27txOoKiXbu4aYgdD4htpt6C8Q2029Dn6iXbu3ExFUa7d24nUB0PiG2m3oLxDbTb0OfqNdu7cTqCo127txOoDf8Q2029Ay7bSXoc/Ubtu7hp1BUi7d3DTqA38u3Wl6Bl260vQwKkdt3bidQVIu3dw06gN7Lt1pegsu3Wl6GDUi7d3DTqCpV27txOoDeyzdaXoLLprS9DCqVdu7hp1CqZ22duJ1Ab2WTWl6Cyya0vMGpnbZ24nUFTO2ztxOoDdyya0vQMsmtLzCqd22duJ1BU7tsu4nUBuZZNaXgsZNaXmA/uyXQ7tEq6laiL/sNvdKqlKR1cmtGIqf7AbyRKTxHi0Meuprl5FbskHJw0ZNOqU0uVKKaVp+oO0rS1G23tb+FNK8kUDd7jh0QGpqX9kAtd2M/h0anfsgiKz+3Q5mORPrSlU+9F0Gc19KU6zaZDVy6Na/qJ3cKKtKPVqLpllR1H3aU0GkY8wTGvUHmruJ1DqDzV3PcBkTBSa+b/mrue4M3/NXcTqAyJgmNjN/zV4fuDN/zV4fuEGRMExr5v+avD9w83/NXh+4DHmHMa+b/AJq8P3Bm/wCb6fuEGRMExr5v+avD9wZv+b6fuAyZgpNbN/zV4fuHm/5q8P3BGRMOY1s3/NXhp1Bm/wCavD9wGTMExr5v+avD9wZv+avD9wGTMExrZv8Amrw/cGb/AJq8P3CDJmFMa+b/AJq8P3Bm/wCavD9wGRMExr5v+avD9wZveavD9wGRMKY2M3vNXh+4Wb/mrw/cIMiYJjXX6P8Amrw/cLN/zV4fuAyJgmNfN/zV4fuFm/5vp+4KyJhTGvUHm+n7gzf81eH7iDImFMa+b/m+n7wzf830/cBkTBMa+b/m+n7xL3B5vp+8QZEwUmtUPm+n7wqHzfT94gyKRTGvUPm+n7xVD5vp+8QrJmM3v5kd8BU7Osr5kmoWhzmfaiL9inUVD5vp+8VReb6fvNdNzam8vk0fs70Wh8LtFNK0pSqLRN8lXTRTp1k3Y+y9pVWrAZHY/RTEe+iG3XSlPyTR81PqdReb6fvEvcfm+n7zv5Gz0x2fWPDVZWzUK6hJlTQiuo0qhL2Vk0VuqGiuX+5dCfuaVR+b6XvJYfd2SRaFmVVpc5Uop/D7EPM6NHuxPgd/ev8AqgHvuhPgf/kX/Voia05t/eUaDEjQtKSRYraFZNR8S/UtH1Dr6Nr9P/g1fpl3csOPl0T4I2lflERNKfj9d5zL3FZXY/0miMRFc6iZ0rf4aqrnUKtCIiU/YpHnW/W7gROkyu8GK+Gsv87HMiw/m9jkcifjRR+Im95QVSnKM+5VoVPkqCjXzrfrdwInSPOmJrdwH9JkVjC2jLxVjCtpzFGxnVE1u4ETpDOqJrdwInSY9ZQraXLgKsoVrk7AUbOdUTW7gROkedUTW7gROkxqyhWvyuwCsoVr8rsCUjZzqia3cB/SPOqJrdwH9Ji1lCtfldgFZQrXJ2BaNlPpZE1u/GBET/5DOyJrXgP6TGrKFbS5cB1lCtpzwFGxna/WvAidIZ3PtLwInSY9ZQrbQrKDtG3ko18732l4ETpDPB1peBE6TIrKDtGXhWcHas3kFGvni60vAf0izxdb9B/SZNZwdrD3kFWkDaw99C0jXzxdb9F/SGeK2/Rf0mRWkDaw99ArSBtoe+hKNfPJbfov6QzyW36L+kyK0gbWFvpiFawNtC324ijWzyXaei/pHnk636L+kyK1gbaFvtxCtYG2hb7cRVa+eLrfou6Qzwdb9F3SY9awNtC324hWsDbQt9uIqNjPB1v0XdIZ4Ot+i/pMetYG2hb7cQraBtoW+3EtGvngtv0X9Is8Vt+i/pMmtYG2hb7cQrWBtoW+3ElVrZ4rb9F/SLPFbfov6TJrWBtoW+3EK1gbaFvtxFRrZ4+YnCdgJfpn5rU++GuBlVrA20LfbiFawNtD324ijSX6bt2zNxcDyv04ZtmcNcChWkHbQ99uJ6TvKFtYe+3EUWnfTyEn1x4SfexU/Y0M4Yuv01wOR+kHaYcaHB7M1zXr2jtUBlDXIqyNdlHLo+yhnM3JhRpZwRdfprgLOCLr9NcDJ7Q9ZVl0u+zTRzK0BYv8r9CUL8cyK+m6gUb+cEXX6a4Czgi6/TXA5aLF7YiuayHCVtKo17otD1bToVfhoRSPK9uloycH+7LLN/qWjra/i6/TXAK/i6/TXA5WHE7YvwubCYlH8zXue+n7qENDsbnyJlJUfpRZVVUopWhdP20UEo2q+i6/TXAF79i6/TXAzJz2xaRR2f0LgxI/Z40V6/zdqfJMlHwIxiaE1UooHRdw9jyHZIEJdDkZM5P63fE7mqgRpU+mKf8A4Yq/aiw1RdSzIn7nypzlp+tQAqaSuUFgMX62tX70RQADz4aHYZuoLwsOwzdQAIF4SFs2bqYCXscLZw9xuAAULwcLZw9xuAvBQtnD3G4DAg8+ChbOHuNwF4KFs4e43AAKPK9jhbOHuNwPC9khbNm6mAAQeV7LDsM3UEvZodhm6gAB5Xs7LLd1CPItstuQYFHlYTbKXIecmmpLgAg8ypqQ8qgwA8qIAAVIKoAFKkKVAAgmUUygACmXWo5lAABVBFAAoGABDREHKmpLgAKud3MSdFoSlKaFo0poU1lUYBNeaRUgAQlU8K5QAgJl1qJXLrUAKomXWppfR3T2zsyLpRY8JFRdKKkyABUfYwACNP/Z",
    pprice: "91,000",
    shortDesc:
      "Air conditioning (AC) is a transformative technology that regulates indoor climates...",
    id: 9,
    longDesc:
      "Air conditioning (AC) is a technological innovation that elevates indoor comfort by cooling and regulating temperatures. Using a sophisticated refrigeration process, AC systems extract heat from the air, creating a refreshing environment in homes, offices, and various settings. This essential technology not only provides relief from heat but also contributes to improved air quality, enhancing overall well-being and productivity. Whether at home or work, air conditioning ensures a pleasant atmosphere, making daily activities more comfortable and enjoyable.",
    catg: "Haier",
  },

  {
    name: "Aura X 1 Ton Inverter Split AC",
    image: "data:image/jpeg;base64,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",
    pprice: "9,0000",
    shortDesc: "Ac is providing cool and refreshing environments...",
    id: 10,
    longDesc:
      "Air conditioning (AC) is a transformative technology designed to cool and regulate indoor environments. Through a refrigeration process, AC systems extract heat from the air, ensuring a comfortable and controlled atmosphere. Widely adopted in homes, offices, and commercial spaces, air conditioning contributes to enhanced comfort, productivity, and well-being. By efficiently cooling and dehumidifying indoor spaces, AC systems have become an integral part of modern living, providing relief during hot weather and creating optimal conditions for various activities.",
    catg: "Kenwood",
  },
  {
    name: "Aura X 1.5 Ton Inverter Split AC",
    image: "./Totals assests/12.png",
    pprice: "89,000",
    shortDesc: "AC systems extract heat from the air...",
    id: 11,
    longDesc:
      "Air conditioning (AC) is a modern technology that revolutionizes indoor comfort. Through a sophisticated process of refrigeration, AC systems effectively cool and regulate indoor temperatures, providing a refreshing environment. Widely employed in homes, offices, and commercial spaces, air conditioning plays a pivotal role in creating a comfortable atmosphere, particularly during hot weather. With its ability to improve air quality and ensure optimal temperatures, AC enhances the overall well-being and productivity of occupants, making it an indispensable feature in today's living and working spaces.",
    catg: "Kenwood",
  },
  {
    name: "Econo 1 Ton Inverter Split AC",
    image: "./Totals assests/13.png",
    pprice: "88,000",
    shortDesc:
      " Effectively cooling and dehumidifying living or working spaces... ",
    id: 12,
    longDesc:
      "Air conditioning (AC) is a technological innovation designed to cool and regulate indoor environments. Employing a refrigeration cycle, AC systems extract heat from the air, creating a comfortable and controlled atmosphere. Widely integrated into homes, offices, and various settings, air conditioning not only provides relief from heat but also enhances overall air quality. This essential technology contributes to improved comfort, productivity, and well-being, making it an integral part of modern living and working spaces.",
    catg: "Kenwood",
  },
  {
    name: "Eono X 1 Ton Inverter Split AC",
    image: "./Totals assests/14.png",
    pprice: "87,000",
    shortDesc:
      "Widely adopted in homes, offices, and vehicles, AC enhances comfort, ensuring a pleasant atmosphere during warm weather...",
    id: 13,
    longDesc:
      " Air conditioning (AC) is a sophisticated technology that transforms indoor spaces by efficiently cooling and regulating temperatures. Operating through a complex refrigeration process, AC systems extract heat from the air, creating a comfortable and refreshing atmosphere. Ubiquitous in homes, offices, and diverse settings, air conditioning is essential for maintaining optimal comfort during warm weather. Beyond temperature control, AC systems also play a crucial role in dehumidifying and purifying indoor air, contributing to improved overall air quality. This indispensable technology enhances well-being, productivity, and the overall living and working experience, making it a cornerstone of modern comfort.",
    catg: "Kenwood",
  },
  {
    name: "Aono X 1.5 Ton Inverter Split AC",
    image: "./Totals assests/15.png",
    pprice: "86,000",
    shortDesc: " Fostering a more enjoyable and productive daily experience...",
    id: 14,
    longDesc:
      "Air conditioning (AC) is a cutting-edge technology that revolutionizes indoor environments by effectively cooling and regulating temperatures. Employing a refined refrigeration process, AC systems extract heat from the air, creating a comfortable and controlled setting. Widely integrated into homes, offices, and various establishments, air conditioning is paramount for maintaining optimal comfort, especially during warmer periods. Beyond temperature control, AC contributes to improved air quality, dehumidification, and enhanced overall well-being. This indispensable technology plays a pivotal role in creating pleasant living and working conditions, ensuring a refreshing and productive atmosphere for occupants.",
    catg: "Kenwood",
  },
  {
    name: "Aura X 1.5 Ton Inverter Split AC",
    image: "./Totals assests/16.png",
    pprice: "85,000",
    shortDesc:
      "Air conditioning (AC) is a modern comfort technology that efficiently cools indoor spaces...",
    id: 15,
    longDesc:
      "Air conditioning (AC) is a modern marvel that transforms indoor spaces, ensuring comfort and controlled climates. Operating through advanced refrigeration techniques, AC systems extract heat from the air, providing efficient cooling and temperature regulation. Widely utilized in homes, offices, and commercial spaces, air conditioning is indispensable for maintaining optimal comfort, particularly during periods of heat. Beyond temperature management, AC contributes to improved air quality by filtering and dehumidifying indoor environments. This innovative technology enhances the overall well-being of occupants, fostering a refreshing and conducive atmosphere for daily activities and productivity.",
    catg: "Kenwood",
  },
  {
    name: "Elengence 1 Ton Inverter Split AC",
    image: "./Totals assests/17.png",
    pprice: "84,000",
    shortDesc:
      "Air conditioning (AC) is a modern marvel that transforms indoor spaces, ensuring comfort and controlled climates...",
    id: 16,
    longDesc:
      "Air conditioning (AC) is a technological marvel designed to regulate indoor environments and optimize comfort. Using a sophisticated refrigeration process, AC systems efficiently extract heat from the air, providing effective cooling in homes, offices, and various settings. This transformative technology not only ensures a pleasant temperature but also contributes to improved air quality by filtering and dehumidifying. In hot weather, AC becomes an essential component for creating a refreshing and comfortable atmosphere, enhancing overall well-being and productivity. With its ability to create controlled climates, air conditioning has become a cornerstone of modern living, significantly improving the quality of indoor spaces.",
    catg: "Kenwood",
  },
  {
    name: "Aura X 1 Ton Floor Standing AC",
    image: "./Totals assests/18.png",
    pprice: "83,000",
    shortDesc:
      "By utilizing a refrigeration mechanism, AC systems remove heat from the air, ensuring a pleasant and regulated temperature...",
    id: 17,
    longDesc:
      "Air conditioning (AC) is a modern technology that regulates indoor temperatures, creating a comfortable and controlled environment. Using a refrigeration process, AC systems remove heat from the air, effectively cooling and dehumidifying spaces. Found in homes, offices, and various settings, air conditioning plays a crucial role in enhancing comfort, especially during hot weather, and contributes to improved overall well-being by maintaining optimal indoor condition.",
    catg: "Kenwood",
  },
  {
    name: "Aura X 1.25 Ton Inverter Split AC",
    image: "./Totals assests/19.png",
    pprice: "82,000",
    shortDesc:
      "Widely used in homes, offices, and various settings, air conditioning enhances comfort and productivity...",
    id: 18,
    longDesc:
      "Air conditioning (AC) is a transformative technology designed to cool and regulate indoor environments. Using a refrigeration cycle, AC systems extract heat from the air, effectively lowering temperatures and creating a more comfortable atmosphere. Widely employed in homes, offices, and commercial spaces, air conditioning enhances living and working conditions, ensuring optimal comfort during warm weather and improving overall air quality for a better indoor experience.",
    catg: "Kenwood",
  },
  {
    name: "Eono 1 Ton Inverter Split AC",
    image: "./Totals assests/20.png",
    pprice: "81,000",
    shortDesc:
      "It provide relief during hot weather and creating a more enjoyable living or working environment....",
    id: 19,
    longDesc:
      "Air conditioning (AC) is a modern comfort technology that efficiently cools indoor spaces. By utilizing a refrigeration mechanism, AC systems remove heat from the air, ensuring a pleasant and regulated temperature. Widely used in homes, offices, and various settings, air conditioning enhances comfort and productivity, providing relief during hot weather and creating a more enjoyable living or working environment.",
    catg: "Kenwood",
  },

  {
    name: "Econo 1 Ton Inverter Split AC",
    image: "./Totals assests/21.png",
    pprice: "8,0000",
    shortDesc:
      "Air conditioning (AC) is a transformative technology designed to cool and regulate indoor environments....",
    id: 20,
    longDesc:
      "Air conditioning (AC) is a transformative technology that regulates indoor climates, providing cool and refreshing environments. Employing a refrigeration process, AC systems extract heat from the air, effectively cooling and dehumidifying living or working spaces. Widely adopted in homes, offices, and vehicles, AC enhances comfort, ensuring a pleasant atmosphere during warm weather and fostering a more enjoyable and productive daily experience.",
    catg: "Dawlance",
  },
  {
    name: "Elegance UV 1.5 Ton Inverter Split AC",
    image: "./Totals assests/22.png",
    pprice: "1,50000",
    shortDesc:
      "Air conditioning (AC) is a technology that regulates indoor air quality by cooling...",
    id: 21,
    longDesc:
      "Air conditioning (AC) is a modern technology that regulates indoor temperatures, creating a comfortable and controlled environment. Using a refrigeration process, AC systems remove heat from the air, effectively cooling and dehumidifying spaces. Found in homes, offices, and various settings, air conditioning plays a crucial role in enhancing comfort, especially during hot weather, and contributes to improved overall well-being by maintaining optimal indoor conditions.",
    catg: "Dawlance",
  },
  {
    name: "Elegance 1.5 Ton Inverter Split AC",
    image: "./Totals assests/23.png",
    pprice: "1,40000",
    shortDesc:
      " AC systems extract heat from the indoor air, cooling it down and improving comfort...",
    id: 22,
    longDesc:
      " Air conditioning (AC) is a transformative technology designed to cool and regulate indoor environments. Through a refrigeration process, AC systems extract heat from the air, ensuring a comfortable and controlled atmosphere. Widely adopted in homes, offices, and commercial spaces, air conditioning contributes to enhanced comfort, productivity, and well-being. By efficiently cooling and dehumidifying indoor spaces, AC systems have become an integral part of modern living, providing relief during hot weather and creating optimal conditions for various activities.",
    catg: "Dawlance",
  },
  {
    name: "Chrome 1.5 Ton Inverter Split AC",
    image: "./Totals assests/24.png",
    pprice: "1,3000",
    shortDesc: "Ac is found in homes, offices, and vehicles...",
    id: 23,
    longDesc:
      " Air conditioning (AC) is a modern technology that revolutionizes indoor comfort. Through a sophisticated process of refrigeration, AC systems effectively cool and regulate indoor temperatures, providing a refreshing environment. Widely employed in homes, offices, and commercial spaces, air conditioning plays a pivotal role in creating a comfortable atmosphere, particularly during hot weather. With its ability to improve air quality and ensure optimal temperatures, AC enhances the overall well-being and productivity of occupants, making it an indispensable feature in today's living and working spaces.",
    catg: "Kenwood",
  },
  {
    name: "Avante 1.5 Ton Inverter Split AC",
    image: "./Totals assests/25.png",
    pprice: "1,2000",
    shortDesc:
      "Air conditioning enhances living and working environments by maintaining optimal temperatures...",
    id: 24,
    longDesc:
      " Air conditioning stands as a symbol of modern comfort and technological progress. Its evolution from ancient cooling methods to today's sophisticated systems reflects our ongoing pursuit of a comfortable and healthy living environment. As the industry continues to advance, the future of air conditioning holds the promise of even greater innovations, further enriching our lives and contributing to a sustainable and technologically integrated world.",
    catg: "Dawlance",
  },
  {
    name: "Mega T-Pro 1 Ton Inverter Split AC",
    image: "./Totals assests/26.png",
    pprice: "1,1000",
    shortDesc:
      " It has fostering productivity, and providing relief from hot weather.",
    id: 25,
    longDesc:
      " The future of this air conditioning holds exciting prospects with the integration of smart technologies. Innovations such as smart thermostats, IoT connectivity, and artificial intelligence promise to enhance efficiency, user control, and energy savings. These advancements not only contribute to a more sustainable future but also align air conditioning systems with the broader landscape of smart homes and environmentally conscious buildings.",
    catg: "Dawlance",
  },
  {
    name: "Eono 1 Ton Inverter Split AC",
    image: "./Totals assests/27.png",
    pprice: "79,000",
    shortDesc:
      " Using a refrigeration cycle, AC systems extract heat from the air, effectively lowering temperatures...",
    id: 26,
    longDesc:
      " Recognizing the environmental impact of conventional air conditioning methods, the industry is actively engaged in sustainable practices. Ongoing research endeavors aim to develop energy-efficient technologies and environmentally friendly refrigerants, aligning with global initiatives to reduce carbon footprints and promote eco-conscious living.",
    catg: "Dawlance",
  },
  {
    name: "Elengence 1.5 Ton Inverter Split AC",
    image: "./Totals assests/28.png",
    pprice: "78,000",
    shortDesc: "It creates a more comfortable atmosphere. ",
    id: 27,
    longDesc:
      "Modern AC units often incorporate advanced features to address not only temperature but also indoor air quality concerns. Filtration systems remove pollutants, allergens, and contaminants, creating a healthier and more breathable indoor environment. This dual focus on comfort and health underscores the comprehensive impact that air conditioning has on our overall well-being.",
    catg: "Dawlance",
  },
  {
    name: "Elence X 1 Ton Inverter Split AC",
    image: "./Totals assests/29.png",
    pprice: "77,000",
    shortDesc:
      "Ac is  in homes, offices, and commercial spaces, air conditioning enhances living and working conditions...",
    id: 28,
    longDesc:
      "Air conditioning plays a crucial role in maintaining optimal conditions for both occupants and equipment. Centralized HVAC systems, with their ability to regulate temperature and humidity on a large scale, contribute to enhanced productivity, operational efficiency, and the preservation of sensitive equipment in diverse sectors such as healthcare, manufacturing, and technology.",
    catg: "Dawlance",
  },
  {
    name: "Chrome 1 Ton Inverter Split AC",
    image: "./Totals assests/30.png",
    pprice: "76,000",
    shortDesc:
      "Ensuring optimal comfort during warm weather and improving overall air quality for a better indoor experience....  ",
    id: 29,
    longDesc:
      "Air conditioning has evolved from a luxury to a necessity, offering homeowners a variety of choices to customize their indoor environments. Whether it's the convenience of a window unit, the flexibility of a split system, or the comprehensive climate control provided by central HVAC systems, AC ensures a comfortable haven irrespective of external weather conditions.",
    catg: "Dawlance",
  },

  {
    name: "Chrome 1.5 Ton Inverter Split AC",
    image: "./Totals assests/31.png",
    pprice: "75,000",
    shortDesc:
      "Air conditioning (AC) is a technology that regulates indoor air quality by cooling.....",
    id: 30,
    longDesc:
      " The historical journey of air conditioning traces back to ancient civilizations that ingeniously sought ways to cool indoor spaces. However, it was in the 20th century that the modern AC systems emerged, transforming our homes, workplaces, and public spaces. Today, a diverse range of AC units caters to different needs, with options such as split systems, window units, portable ACs, and centralized HVAC systems, each tailored to specific requirements in residential, commercial, and industrial contexts.",
    catg: "Lennox",
  },
  {
    name: "Elengence 1 Ton Inverter Split AC",
    image: "./Totals assests/32.png",
    pprice: "74,000",
    shortDesc:
      " AC systems extract heat from the indoor air, cooling it down and improving comfort....",
    id: 31,
    longDesc:
      " Air conditioning is a complex system designed to regulate and maintain a desired indoor climate. Through a combination of intricate processes, including refrigeration, compression, and heat exchange, AC units efficiently manage temperature and humidity levels, creating an environment that promotes well-being and productivity. Beyond mere temperature regulation, contemporary AC systems offer a holistic approach to indoor comfort, incorporating features like air filtration and purification technologies.",
    catg: "Lennox",
  },
  {
    name: "Mega 1 Ton Inverter Split AC",
    image: "./Totals assests/33.png",
    pprice: "73,000",
    shortDesc:
      "Commonly found in homes, offices, and vehicles, air conditioning....",
    id: 32,
    longDesc:
      "Air conditioning (AC) stands as a pivotal advancement in modern technology, reshaping the way we perceive and interact with our immediate environments. From its inception to its current state of sophistication, AC has become an integral element of our daily lives, providing unparalleled comfort, climate control, and improved air quality in diverse settings.",
    catg: "Lennox",
  },
  {
    name: "Anav 1 Ton Inverter Split AC",
    image: "./Totals assests/34.png",
    pprice: "72,000",
    shortDesc:
      "Air conditioning enhances living and working environments by maintaining optimal temperatures, fostering productivity, and providing relief from hot weather.....",
    id: 33,
    longDesc:
      " Air conditioning has transcended its role as a mere temperature-regulating device to become an integral part of the modern human experience. Its evolution reflects a continuous quest for comfort, efficiency, and environmental responsibility. As the industry progresses, the future of air conditioning holds the potential for even greater innovations, contributing to a more sustainable, comfortable, and technologically integrated world.",
    catg: "Lennox",
  },
  {
    name: "Pron X 1 Ton Inverter Split AC",
    image: "./Totals assests/35.png",
    pprice: "71,000",
    shortDesc:
      "Air conditioning enhances living and working environments by maintaining optimal temperatures, fostering productivity, and providing relief from hot weather.....",
    id: 34,
    longDesc:
      " The future, the trajectory of air conditioning holds promise with the integration of emerging technologies. Smart thermostats, Internet of Things (IoT) connectivity, and artificial intelligence are poised to enhance the efficiency and user-friendliness of AC systems. These innovations not only promise greater energy savings but also pave the way for a seamless integration of air conditioning into the broader framework of smart homes and sustainable buildings.",
    catg: "Lennox",
  },
  {
    name: "Prov 1.5 Ton Inverter Split AC",
    image: "./Totals assests/36.png",
    pprice: "7,0000",
    shortDesc:
      "Air conditioning (AC) is a modern comfort solution that cools and dehumidifies indoor spaces. By employing a refrigeration process...",
    id: 35,
    longDesc:
      "Recognizing the environmental impact of traditional air conditioning methods, the industry is actively engaged in a paradigm shift toward sustainability. Ongoing research and development efforts focus on creating energy-efficient technologies and eco-friendly refrigerants to mitigate the ecological footprint of AC systems. This commitment aligns with global initiatives aimed at addressing climate change and fostering responsible consumption.",
    catg: "Lennox",
  },
  {
    name: "Pro X 1 Ton Inverter Split AC",
    image: "./Totals assests/37.png",
    pprice: "69,000",
    shortDesc:
      "AC systems extract heat, ensuring a pleasant and controlled environment in homes, offices, and various settings...",
    id: 36,
    longDesc:
      " Beyond temperature control, contemporary AC units often incorporate advanced features such as air purification and filtration technologies. These innovations play a crucial role in improving indoor air quality by removing pollutants, allergens, and contaminants, thereby creating healthier and more breathable spaces. The holistic impact of air conditioning on human health underscores its multifaceted significance in enhancing not only comfort but overall well-being.",
    catg: "Lennox",
  },
  {
    name: "Elengence 1 Ton Inverter Split AC",
    image: "./Totals assests/38.png",
    pprice: "68,000",
    shortDesc:
      "These systems play a vital role in enhancing comfort, especially during hot weather, by regulating temperatures and improving overall air quality.....",
    id: 37,
    longDesc:
      "In commercial and industrial contexts, the role of air conditioning extends beyond individual comfort to the preservation of equipment functionality and operational efficiency. Centralized HVAC systems are designed to regulate temperature, humidity, and air quality on a larger scale, contributing significantly to the well-being of occupants and the smooth operation of various industries, ranging from healthcare facilities and manufacturing plants to technology hubs.",
    catg: "Lennox",
  },
  {
    name: "Chrome 1.25 Ton Inverter Split AC",
    image: "./Totals assests/39.png",
    pprice: "67,000",
    shortDesc:
      "Air conditioning (AC) is a technology designed to cool and dehumidify indoor spaces, creating a more comfortable environment.... ",
    id: 38,
    longDesc:
      " Air conditioning has become synonymous with a haven from extreme weather conditions. Homeowners can choose from a myriad of options, including split systems, portable units, or ducted systems, allowing them to tailor their indoor climate to suit personal preferences. AC has transcended the notion of a luxury amenity to become an integral aspect of modern living, ensuring families can enjoy a comfortable and temperate living environment throughout the year.",
    catg: "Lennox",
  },
  {
    name: "Aura X 1 Ton Inverter Split AC",
    image: "./Totals assests/40.png",
    pprice: "66,000",
    shortDesc:
      "By utilizing a refrigeration cycle, AC systems extract heat from the air, allowing for efficient temperature control...",
    id: 39,
    longDesc:
      " The historical trajectory of air conditioning reveals its fascinating journey from ancient times to the 20th century, where it emerged as a technological game-changer. Today, a diverse array of AC units caters to the unique needs of different settings, offering solutions for residential comfort, commercial efficiency, and industrial functionality. From traditional window units to sophisticated central HVAC (Heating, Ventilation, and Air Conditioning) systems, AC technology has evolved to accommodate various scales and purposes.",
    catg: "Lennox",
  },

  {
    name: "Aura X 1.75 Ton Inverter Split AC",
    image: "./Totals assests/41.png",
    pprice: "65,000",
    shortDesc: "Widely used in homes, offices, and commercial spaces....",
    id: 40,
    longDesc:
      "Air conditioning has become synonymous with a haven from extreme weather conditions. Homeowners can choose from a myriad of options, including split systems, portable units, or ducted systems, allowing them to tailor their indoor climate to suit personal preferences. AC has transcended the notion of a luxury amenity to become an integral aspect of modern living, ensuring families can enjoy a comfortable and temperate living environment throughout the year.",
    catg: "Hitachi",
  },
  {
    name: "Avan 1 Ton Inverter Split AC",
    image: "./Totals assests/42.png",
    pprice: "64,000",
    shortDesc:
      " Air conditioning contributes to improved comfort and productivity, making it an essential aspect of modern living....",
    id: 41,
    longDesc:
      " AC units often incorporate advanced features such as air purification and filtration technologies. These innovations play a crucial role in improving indoor air quality by removing pollutants, allergens, and contaminants, thereby creating healthier and more breathable spaces. The holistic impact of air conditioning on human health underscores its multifaceted significance in enhancing not only comfort but overall well-being.",
    catg: "Hitachi",
  },
  {
    name: "Avante 1 Ton Inverter Split AC",
    image: "./Totals assests/43.png",
    pprice: "63,000",
    shortDesc:
      "Air conditioning (AC) is a transformative technology that regulates indoor climates, providing cool and refreshing environments...",
    id: 42,
    longDesc:
      " The trajectory of air conditioning holds promise with the integration of emerging technologies. Smart thermostats, Internet of Things (IoT) connectivity, and artificial intelligence are poised to enhance the efficiency and user-friendliness of AC systems. These innovations not only promise greater energy savings but also pave the way for a seamless integration of air conditioning into the broader framework of smart homes and sustainable buildings.",
    catg: "Hitachi",
  },
  {
    name: "Anav 1 Ton Inverter Split AC",
    image: "./Totals assests/44.png",
    pprice: "62,000",
    shortDesc:
      "Employing a refrigeration process, AC systems extract heat from the air, effectively cooling and dehumidifying living ....",
    id: 43,
    longDesc:
      " Air conditioning has transcended its role as a mere temperature-regulating device to become an integral part of the modern human experience. Its evolution reflects a continuous quest for comfort, efficiency, and environmental responsibility. As the industry progresses, the future of air conditioning holds the potential for even greater innovations, contributing to a more sustainable, comfortable, and technologically integrated world.",
    catg: "Hitachi",
  },
  {
    name: "Avan 1 Ton Inverter Split AC",
    image: "./Totals assests/45.png",
    pprice: "61,000",
    shortDesc:
      "Widely adopted in homes, offices, and vehicles, AC enhances comfort, ensuring a pleasant atmosphere....",
    id: 44,
    longDesc:
      "  Air conditioning (AC) is a revolutionary technology designed to create a comfortable and controlled indoor environment, fundamentally altering the way we experience and interact with our surroundings. With its roots tracing back to ancient civilizations' ingenious methods of cooling, modern air conditioning has evolved into a sophisticated and indispensable part of our daily lives.",
    catg: "Hitachi",
  },
  {
    name: "Elene 1 Ton Inverter Split AC",
    image: "./Totals assests/46.png",
    pprice: "6,0000",
    shortDesc:
      " During warm weather and fostering a more enjoyable and productive daily experience....",
    id: 45,
    longDesc:
      " An air conditioning system functions as a thermal regulation device, regulating temperature, humidity, and air quality within enclosed spaces. The primary objective is to create an optimal and pleasant atmosphere for occupants, regardless of the external weather conditions. AC units are commonly employed in residential, commercial, industrial, and institutional settings, showcasing their versatility and adaptability.",
    catg: "Hitachi",
  },
  {
    name: "Avan 1.5 Ton Inverter Split AC",
    image: "./Totals assests/47.png",
    pprice: "59,0000",
    shortDesc:
      "Air conditioning (AC) is a modern comfort technology that efficiently cools indoor spaces...",
    id: 46,
    longDesc:
      " The intricate workings of an air conditioner involve a cycle of refrigeration and condensation, manipulating the physical properties of air to achieve the desired indoor climate. This process not only cools the air but also dehumidifies it, ensuring a balanced and comfortable living or working environment. The innovation of central air conditioning systems has allowed for the efficient cooling of entire buildings, contributing significantly to energy conservation and environmental sustainability.",
    catg: "Hitachi",
  },
  {
    name: " Chrome 1 Ton Inverter Split AC",
    image: "./Totals assests/48.png",
    pprice: "58,000",
    shortDesc:
      "By utilizing a refrigeration mechanism, AC systems remove heat from the air, ensuring a pleasant and regulated temperature. ",
    id: 47,
    longDesc:
      " Modern AC units come equipped with advanced features such as air filtration, ventilation, and air purification technologies. These capabilities enhance indoor air quality, reducing the presence of allergens, pollutants, and microorganisms. The result is not only a cooler space but also a healthier and more breathable atmosphere.",
    catg: "Hitachi",
  },
  {
    name: " Pro X 1 Ton Inverter Split AC",
    image: "./Totals assests/49.png",
    pprice: "57,000",
    shortDesc:
      "Widely used in homes, offices, and various settings, air conditioning enhances comfort and productivity.....",
    id: 48,
    longDesc:
      " The evolution of air conditioning technology has witnessed the development of various types of systems, each tailored to specific needs and preferences. Window units, split systems, ducted systems, and portable units offer diverse options for residential use, while large-scale commercial and industrial applications often employ sophisticated HVAC (Heating, Ventilation, and Air Conditioning) systems.",
    catg: "Hitachi",
  },

  {
    name: " DT-Pro X 1 Ton Inverter Split AC",
    image: "./Totals assests/50.png",
    pprice: "56,000",
    shortDesc:
      "Providing relief during hot weather and creating a more enjoyable living or working environment....",
    id: 49,
    longDesc:
      "Beyond mere functionality, air conditioning has become a symbol of modernity and comfort, influencing architectural designs and urban planning. The prevalence of air-conditioned spaces has redefined our expectations of comfort, productivity, and leisure, shaping the way we design and experience our living and working environments.",
    catg: "Gree",
  },
  {
    name: " BT-Prov X 1 Ton Inverter Split AC",
    image: "./Totals assests/51.png",
    pprice: "55,000",
    shortDesc:
      "Air conditioning (AC) is a transformative technology designed to cool and regulate indoor environments....",
    id: 50,
    longDesc:
      "While the benefits of air conditioning are undeniable, there is a growing awareness of the environmental impact associated with traditional cooling methods. Efforts are underway to develop eco-friendly refrigerants and energy-efficient technologies to mitigate the ecological footprint of air conditioning systems, aligning with the global push towards sustainability.",
    catg: "Gree",
  },
  {
    name: " Anav 1 Ton Inverter Split AC",
    image: "./Totals assests/52.png",
    pprice: "54,000",
    shortDesc:
      "Using a refrigeration cycle, AC systems extract heat from the air, effectively lowering temperatures and creating a more comfortable atmosphere...",
    id: 51,
    longDesc:
      "Air conditioning is not merely a technological convenience; it is a transformative force that has reshaped the way we live, work, and interact with our surroundings. From its humble origins to its present-day sophistication, AC continues to be an integral aspect of modern life, providing us with unparalleled comfort and control over our indoor environments. As technology advances, the future of air conditioning holds the promise of even greater efficiency, sustainability, and innovation.",
    catg: "Gree",
  },
  {
    name: " Elengence 1 Ton Inverter Split AC",
    image: "./Totals assests/53.png",
    pprice: "53,000",
    shortDesc: "Widely employed in homes, offices, and commercial spaces...",
    id: 52,
    longDesc:
      " Air conditioning (AC) stands as a remarkable innovation in the realm of climate control, revolutionizing the way we experience and manage indoor environments. From its inception to its current state, AC has evolved into a sophisticated system that transcends mere temperature regulation, offering a plethora of benefits in residential, commercial, and industrial settings.",
    catg: "Gree",
  },
  {
    name: " Mega 1 Ton Inverter Split AC",
    image: "./Totals assests/54.png",
    pprice: "52,000",
    shortDesc:
      " Air conditioning enhances living and working conditions, ensuring optimal comfort during warm weather and improving overall air quality for a better indoor experience....",
    id: 53,
    longDesc: "",
    catg: "Gree",
  },
  {
    name: " GT-Pro X 1 Ton Inverter Split AC",
    image: "./Totals assests/55.png",
    pprice: "51,000",
    shortDesc:
      "Air conditioning (AC) is a modern technology that regulates indoor temperatures, creating a comfortable and controlled environment...",
    id: 54,
    longDesc:
      " Air conditioning involves the intricate interplay of physics and engineering to manipulate the properties of air within enclosed spaces. The primary goal is to create a comfortable and controlled atmosphere, shielding occupants from the harsh extremes of external weather conditions. AC achieves this through a complex process of refrigeration, compression, and expansion, resulting in the cooling and dehumidification of air.",
    catg: "Gree",
  },
  {
    name: " Aro X 1 Ton Inverter Split AC",
    image: "./Totals assests/56.png",
    pprice: "5,0000",
    shortDesc:
      "Using a refrigeration process, AC systems remove heat from the air, effectively cooling and dehumidifying spaces....",
    id: 55,
    longDesc:
      "The transformative impact of air conditioning on daily life is undeniable. It has not only redefined our expectations of comfort but has also influenced architectural designs and urban planning. The ubiquity of air-conditioned spaces has become synonymous with modernity, providing respite from sweltering summers and enabling year-round productivity in diverse climates. ",
    catg: "Gree",
  },
  {
    name: " Avante 1 Ton Inverter Split AC",
    image: "./Totals assests/57.png",
    pprice: "68,000",
    shortDesc: "Found in homes, offices, and various settings....",
    id: 56,
    longDesc:
      "Modern air conditioning systems extend far beyond basic temperature control. Many units are equipped with advanced features such as air filtration, ventilation, and air purification technologies. These functionalities not only enhance the comfort level but also contribute to improving indoor air quality by reducing pollutants, allergens, and airborne contaminants.",
    catg: "Gree",
  },
  {
    name: " Avante 1.5 Ton Inverter Split AC",
    image: "./Totals assests/58.png",
    pprice: "78,000",
    shortDesc:
      "Air conditioning plays a crucial role in enhancing comfort, especially during hot weather, and contributes to improved overall well-being by maintaining optimal indoor conditions....",
    id: 57,
    longDesc:
      "In the residential sector, a variety of AC options cater to different needs and preferences. Window units, split systems, ducted systems, and portable units offer flexibility and efficiency, allowing homeowners to tailor their indoor climate to suit individual preferences. Commercial and industrial spaces often rely on centralized HVAC (Heating, Ventilation, and Air Conditioning) systems, showcasing the scalability and adaptability of AC technology.",
    catg: "Gree",
  },
  {
    name: " Avante 1.75 Ton Inverter Split AC",
    image: "./Totals assests/59.png",
    pprice: "66,000",
    shortDesc:
      "Air conditioning (AC) is a revolutionary technology designed to cool and enhance indoor environments....",
    id: 58,
    longDesc:
      "Beyond its immediate benefits, the impact of air conditioning on human health and well-being cannot be overstated. AC helps prevent heat-related illnesses, promotes better sleep by maintaining optimal temperatures, and creates a more comfortable environment for individuals with respiratory conditions. In workplaces, efficient climate control has been linked to increased productivity and employee satisfaction. ",
    catg: "Gree",
  },

  {
    name: " Anav 1.75 Ton Inverter Split AC",
    image: "./Totals assests/60.png",
    pprice: "76,000",
    shortDesc:
      "Through a sophisticated refrigeration process, AC systems extract heat from the air....",
    id: 59,
    longDesc:
      "The environmental impact of traditional air conditioning methods has raised concerns, particularly in terms of energy consumption and refrigerant emissions. The industry is actively addressing these challenges through the development of energy-efficient technologies and the adoption of eco-friendly refrigerants. The quest for sustainability has become a driving force in shaping the future of air conditioning.",
    catg: "Voltas",
  },
  {
    name: " Anav 1.5 Ton Inverter Split AC",
    image: "./Totals assests/61.png",
    pprice: "87,000",
    shortDesc:
      " Ensuring a comfortable and controlled atmosphere. Widely utilized in homes, offices, and commercial spaces...",
    id: 60,
    longDesc:
      "The future of AC promises further innovation and efficiency gains. Emerging technologies, such as smart thermostats, artificial intelligence-driven climate control, and sustainable design practices, are set to redefine the landscape of air conditioning. As society places greater emphasis on environmental responsibility, the industry continues to evolve towards more eco-conscious solutions. ",
    catg: "Voltas",
  },
  {
    name: " Chrome 1.75 Ton Inverter Split AC",
    image: "./Totals assests/62.png",
    pprice: "75,000",
    shortDesc:
      "Air conditioning not only provides relief from heat but also contributes to improved air quality, creating a more pleasant and conducive environment for daily activities.....",
    id: 61,
    longDesc:
      "Air conditioning is not just a technological convenience; it is an integral aspect of modern living that has transformed the way we approach comfort and climate control. From its early beginnings to its current state of sophistication, AC has become a staple in our daily lives, offering respite from extreme temperatures and contributing to the overall well-being of individuals and communities. As the journey of technological advancement continues, the evolution of air conditioning holds the promise of a more sustainable and comfortable future. ",
    catg: "Voltas",
  },
  {
    name: " Chrome 1 Ton Floor Standing AC",
    image: "./Totals assests/63.png",
    pprice: "79,000",
    shortDesc:
      "Air conditioning (AC) is a modern marvel that transforms indoor spaces by efficiently cooling and regulating temperatures...",
    id: 62,
    longDesc:
      "Air conditioning (AC) is an extraordinary technological marvel that has significantly impacted the way we experience and interact with our living and working spaces. From its inception to its current state of sophistication, AC has evolved into a pivotal element of modern life, providing unparalleled comfort and climate control in various environments. ",
    catg: "Voltas",
  },
  {
    name: " MEga 1.5 Ton Inverter Split AC",
    image: "./Totals assests/64.png",
    pprice: "89,000",
    shortDesc:
      "Employing a refrigeration cycle, AC systems extract heat from the air, creating a comfortable and refreshing environment....",
    id: 63,
    longDesc:
      "Air conditioning is a complex system designed to regulate temperature, humidity, and air quality within enclosed spaces. It achieves this through a series of intricate processes involving refrigeration, compression, and expansion. The result is not only a cool and refreshing indoor atmosphere but also an environment that fosters comfort, productivity, and well-being.",
    catg: "Voltas",
  },
  {
    name: " Eono 1 Ton Inverter Split AC",
    image: "./Totals assests/65.png",
    pprice: "99,000",
    shortDesc:
      "Widely integrated into homes, offices, and diverse settings....",
    id: 64,
    longDesc:
      "The historical roots of air conditioning can be traced back to ancient civilizations that ingeniously devised methods to cool indoor spaces. However, it wasn't until the 20th century that modern air conditioning systems emerged, transforming the way we live and work. Today, these systems come in various forms, catering to a diverse range of needs in residential, commercial, and industrial settings.",
    catg: "Voltas",
  },
  {
    name: " Econo 1 Ton Inverter Split AC",
    image: "./Totals assests/66.png",
    pprice: "81,000",
    shortDesc:
      "Air conditioning is essential for maintaining optimal comfort during warm weather....",
    id: 65,
    longDesc:
      "In residential applications, air conditioning has become a staple, offering a wide array of options such as window units, split systems, ducted systems, and portable units. These options provide homeowners with the flexibility to customize their indoor climate according to personal preferences, creating a comfortable and inviting living environment regardless of external weather conditions. ",
    catg: "Voltas",
  },
  {
    name: " Grande 1 Ton Inverter Split AC",
    image: "./Totals assests/67.png",
    pprice: "82,000",
    shortDesc:
      "Enhancing productivity, and fostering a more enjoyable living or working experience.....",
    id: 66,
    longDesc:
      "In commercial and industrial contexts, air conditioning takes on a larger scale with centralized HVAC systems. These systems are designed to regulate the climate of entire buildings, ensuring optimal working conditions for occupants and safeguarding the functionality of sensitive equipment. The versatility and adaptability of AC technology have made it an indispensable asset in sectors ranging from healthcare and hospitality to manufacturing and technology. ",
    catg: "Voltas",
  },
  {
    name: " Grande 1.75 Ton Inverter Split AC",
    image: "./Totals assests/68.png",
    pprice: "85,000",
    shortDesc:
      "Air conditioning (AC) is a technological innovation that elevates indoor comfort by cooling and regulating temperatures...",
    id: 67,
    longDesc:
      "Beyond temperature control, modern AC units often incorporate advanced features such as air filtration and purification technologies. These capabilities contribute to improving indoor air quality by removing pollutants, allergens, and contaminants, creating healthier living and working spaces. The significance of air conditioning in enhancing not just comfort but also overall health cannot be overstated. ",
    catg: "Voltas",
  },
  {
    name: " Avante 1.5 Ton Inverter Split AC",
    image: "./Totals assests/69.png",
    pprice: "83,000",
    shortDesc:
      "Using a sophisticated refrigeration process, AC systems extract heat from the air, creating a refreshing environment in homes, offices, and various settings....",
    id: 68,
    longDesc:
      "However, the environmental impact of traditional air conditioning methods has prompted a shift towards sustainability within the industry. Efforts are underway to develop energy-efficient technologies and eco-friendly refrigerants to minimize the ecological footprint of AC systems. This focus on environmental responsibility aligns with global efforts to address climate change and promote sustainable living. ",
    catg: "Voltas",
  },

  {
    name: " Chrone 1 Ton Inverter Split AC",
    image: "./Totals assests/70.png",
    pprice: "88,000",
    shortDesc:
      "This essential technology not only provides relief from heat but also contributes to improved air quality, enhancing overall well-being and productivity....",
    id: 69,
    longDesc:
      "The future of air conditioning holds exciting possibilities. Emerging technologies like smart thermostats, Internet of Things (IoT) integration, and artificial intelligence are poised to revolutionize the way we control and interact with our indoor environments. These innovations promise greater energy efficiency, cost savings, and a more seamless integration of AC systems into the overall architecture of smart homes and buildings. ",
    catg: "York",
  },
  {
    name: " Chrome 1 Ton Inverter Split AC",
    image: "./Totals assests/71.png",
    pprice: "98,000",
    shortDesc:
      "Whether at home or work, air conditioning ensures a pleasant atmosphere, making daily activities more comfortable and enjoyable....",
    id: 70,
    longDesc:
      "air conditioning has transcended its role as a mere climate control mechanism to become an integral part of modern life. Its evolution from ancient cooling methods to cutting-edge technology reflects the continuous pursuit of comfort and well-being. As the industry continues to innovate, the future of air conditioning holds the promise of even greater efficiency, sustainability, and integration into the fabric of our daily lives. ",
    catg: "York",
  },
  {
    name: " FL-Pro X 1 Ton Inverter Split AC",
    image: "./Totals assests/72.png",
    pprice: "78,000",
    shortDesc:
      "Air conditioning (AC) is a transformative technology designed to cool and regulate indoor environments....",
    id: 71,
    longDesc:
      "Air conditioning (AC) stands as a pinnacle of modern technological innovation, redefining the way we experience and engage with our indoor environments. From its humble beginnings to its current state of sophistication, AC has evolved into an indispensable feature in homes, businesses, and various institutions, enhancing our quality of life by providing optimal comfort, temperature regulation, and air quality control. ",
    catg: "York",
  },
  {
    name: " BT X 1 Ton Inverter Split AC",
    image: "./Totals assests/73.png",
    pprice: "10,000",
    shortDesc:
      "Through a refrigeration process, AC systems extract heat from the air, ensuring a comfortable and controlled atmosphere....",
    id: 72,
    longDesc:
      "Air conditioning is a complex system designed to create a controlled climate within enclosed spaces. This involves a meticulous interplay of components, including refrigerants, compressors, condensers, and evaporators, all working together to regulate temperature and humidity. The end result is not just a cool environment, but a carefully calibrated atmosphere that fosters well-being and productivity. ",
    catg: "York",
  },
  {
    name: " Elengence 1 Ton Floor Standing AC",
    image: "./Totals assests/74.png",
    pprice: "120,000",
    shortDesc:
      "Widely adopted in homes, offices, and commercial spaces, air conditioning contributes to enhanced comfort....",
    id: 73,
    longDesc:
      "Historically, the roots of air conditioning can be traced back to ancient civilizations that employed innovative techniques to cool indoor spaces. However, it wasn't until the 20th century that the advent of modern air conditioning systems revolutionized the way we approach comfort. Today, a diverse array of AC units, ranging from traditional window units to sophisticated central HVAC (Heating, Ventilation, and Air Conditioning) systems, caters to the unique needs of residential, commercial, and industrial settings. ",
    catg: "York",
  },
  {
    name: " Chrome 1 Ton Floor Standing AC",
    image: "./Totals assests/75.png",
    pprice: "90,000",
    shortDesc: "By efficiently cooling and dehumidifying indoor spaces....",
    id: 74,
    longDesc:
      "In residential applications, air conditioning has become an integral part of everyday life. Homeowners can choose from a variety of options, such as split systems, portable units, or ducted systems, allowing them to customize their indoor climate according to personal preferences. AC has become synonymous with creating a haven from extreme weather conditions, ensuring that families can enjoy a comfortable living environment throughout the year. ",
    catg: "York",
  },
  {
    name: " Chrone 1 Ton Floor Standing AC",
    image: "./Totals assests/76.png",
    pprice: "87,000",
    shortDesc:
      "AC systems have become an integral part of modern living, providing relief during hot weather and creating optimal conditions for various activities.....",
    id: 75,
    longDesc:
      "In commercial and industrial contexts, air conditioning plays a pivotal role in maintaining optimal working conditions and safeguarding equipment. Centralized HVAC systems are designed to regulate temperature, humidity, and air quality on a larger scale, contributing not only to the comfort of occupants but also to the efficiency and functionality of various industries, including healthcare, manufacturing, and technology. ",
    catg: "York",
  },
  {
    name: " Mega X 1 Ton Inverter Split AC",
    image: "./Totals assests/77.png",
    pprice: "85,000",
    shortDesc:
      "Air conditioning (AC) is a modern technology that revolutionizes indoor comfort....",
    id: 76,
    longDesc:
      "Beyond temperature control, modern AC units often incorporate advanced features such as air purification and filtration technologies. These innovations serve to improve indoor air quality by removing pollutants, allergens, and contaminants, creating healthier and more breathable spaces. The holistic impact of air conditioning on human health and well-being is a testament to its multifaceted significance. ",
    catg: "York",
  },
  {
    name: " Mega Pro X 1 Ton Floor Standing AC",
    image: "./Totals assests/78.png",
    pprice: "97,000",
    shortDesc:
      "Through a sophisticated process of refrigeration, AC systems effectively cool and regulate indoor temperatures, providing a refreshing environment....",
    id: 77,
    longDesc:
      "However, as society increasingly recognizes the environmental impact of traditional air conditioning methods, the industry is undergoing a paradigm shift towards sustainability. Ongoing research and development efforts focus on creating energy-efficient technologies and eco-friendly refrigerants to mitigate the carbon footprint of AC systems, aligning with global initiatives to address climate change and promote responsible consumption. ",
    catg: "York",
  },
  {
    name: " Chrome 1 Ton Floor Standing AC",
    image: "./Totals assests/79.png",
    pprice: "99,000",
    shortDesc:
      "Widely employed in homes, offices, and commercial spaces, air conditioning plays a pivotal role in creating a comfortable atmosphere....",
    id: 78,
    longDesc:
      "air conditioning has transcended its status as a mere climate control mechanism to become an integral component of modern living. Its journey from ancient cooling methods to cutting-edge technology mirrors the continuous quest for comfort, efficiency, and sustainability. As the industry evolves, the future of air conditioning holds the promise of even greater innovations that will further enhance our indoor environments and contribute to a more sustainable and comfortable world.",
    catg: "York",
  },

  {
    name: " Econo X 1 Ton Inverter Split AC",
    image: "./Totals assests/80.png",
    pprice: "98,000",
    shortDesc:
      "With its ability to improve air quality and ensure optimal temperatures....",
    id: 79,
    longDesc:
      "Air conditioning (AC) stands as a transformative technological marvel, shaping the way we experience and interact with our immediate surroundings. Evolving from ancient cooling techniques to contemporary climate control systems, AC has become an indispensable feature in homes, businesses, and public spaces, revolutionizing our daily lives by providing unparalleled comfort, temperature regulation, and air quality management.",
    catg: "Mitsubishi",
  },
  {
    name: " Econo 1 Ton Floor Standing AC",
    image: "./Totals assests/81.png",
    pprice: "97,000",
    shortDesc:
      "AC enhances the overall well-being and productivity of occupants, making it an indispensable feature in today's living and working spaces.....",
    id: 80,
    longDesc:
      "Air conditioning is a sophisticated system designed to create a controlled indoor environment. Through the intricate interplay of components such as compressors, condensers, evaporators, and refrigerants, AC units work diligently to regulate temperature and humidity levels. The result is not merely a reduction in ambient temperature but the creation of an optimally balanced atmosphere that fosters comfort, productivity, and well-being. ",
    catg: "Mitsubishi",
  },
  {
    name: " Elengence 1 Ton Inverter Split AC",
    image: "./Totals assests/82.png",
    pprice: "87,000",
    shortDesc:
      "Air conditioning (AC) is a technological innovation designed to cool and regulate indoor environments...",
    id: 81,
    longDesc:
      "The historical trajectory of air conditioning reveals its fascinating journey from ancient times to the 20th century, where it emerged as a technological game-changer. Today, a diverse array of AC units caters to the unique needs of different settings, offering solutions for residential comfort, commercial efficiency, and industrial functionality. From traditional window units to sophisticated central HVAC (Heating, Ventilation, and Air Conditioning) systems, AC technology has evolved to accommodate various scales and purposes. ",
    catg: "Mitsubishi",
  },
  {
    name: " Anav X 1.75 Ton Inverter Split AC",
    image: "./Totals assests/83.png",
    pprice: "89,000",
    shortDesc:
      "Employing a refrigeration cycle, AC systems extract heat from the air, creating a comfortable and controlled atmosphere....",
    id: 82,
    longDesc:
      "In residential applications, air conditioning has become synonymous with a haven from extreme weather conditions. Homeowners can choose from a myriad of options, including split systems, portable units, or ducted systems, allowing them to tailor their indoor climate to suit personal preferences. AC has transcended the notion of a luxury amenity to become an integral aspect of modern living, ensuring families can enjoy a comfortable and temperate living environment throughout the year. ",
    catg: "Mitsubishi",
  },
  {
    name: " Avan 1 Ton Inverter Split AC",
    image: "./Totals assests/84.png",
    pprice: "88,000",
    shortDesc:
      "Widely integrated into homes, offices, and various settings....",
    id: 83,
    longDesc:
      " In commercial and industrial contexts, the role of air conditioning extends beyond individual comfort to the preservation of equipment functionality and operational efficiency. Centralized HVAC systems are designed to regulate temperature, humidity, and air quality on a larger scale, contributing significantly to the well-being of occupants and the smooth operation of various industries, ranging from healthcare facilities and manufacturing plants to technology hubs.",
    catg: "Mitsubishi",
  },
  {
    name: " Grande 1 Ton Inverter Split AC",
    image: "./Totals assests/85.png",
    pprice: "99,000",
    shortDesc:
      "Air conditioning not only provides relief from heat but also enhances overall air quality....",
    id: 84,
    longDesc:
      " Beyond temperature control, contemporary AC units often incorporate advanced features such as air purification and filtration technologies. These innovations play a crucial role in improving indoor air quality by removing pollutants, allergens, and contaminants, thereby creating healthier and more breathable spaces. The holistic impact of air conditioning on human health underscores its multifaceted significance in enhancing not only comfort but overall well-being.",
    catg: "Mitsubishi",
  },
  {
    name: " Anavte 1 Ton Inverter Split AC",
    image: "./Totals assests/86.png",
    pprice: ",000",
    shortDesc:
      "This essential technology contributes to improved comfort, productivity, and well-being, making it an integral part of modern living and working spaces.....",
    id: 85,
    longDesc:
      "Recognizing the environmental impact of traditional air conditioning methods, the industry is actively engaged in a paradigm shift toward sustainability. Ongoing research and development efforts focus on creating energy-efficient technologies and eco-friendly refrigerants to mitigate the ecological footprint of AC systems. This commitment aligns with global initiatives aimed at addressing climate change and fostering responsible consumption.",
    catg: "Mitsubishi",
  },
  {
    name: " Elengence X 1.5 Ton Inverter Split AC",
    image: "./Totals assests/87.png",
    pprice: "78,000",
    shortDesc:
      "Air conditioning (AC) is a sophisticated technology that transforms indoor spaces by efficiently cooling and regulating temperatures....",
    id: 86,
    longDesc:
      "The future, the trajectory of air conditioning holds promise with the integration of emerging technologies. Smart thermostats, Internet of Things (IoT) connectivity, and artificial intelligence are poised to enhance the efficiency and user-friendliness of AC systems. These innovations not only promise greater energy savings but also pave the way for a seamless integration of air conditioning into the broader framework of smart homes and sustainable buildings.",
    catg: "Mitsubishi",
  },
  {
    name: " Chrone 1 Ton Inverter Split AC",
    image: "./Totals assests/88.png",
    pprice: "67,000",
    shortDesc: "Operating through a complex refrigeration process....",
    id: 87,
    longDesc:
      " Air conditioning has transcended its role as a mere temperature-regulating device to become an integral part of the modern human experience. Its evolution reflects a continuous quest for comfort, efficiency, and environmental responsibility. As the industry progresses, the future of air conditioning holds the potential for even greater innovations, contributing to a more sustainable, comfortable, and technologically integrated world.",
    catg: "Mitsubishi",
  },
  {
    name: " Chrome 1.75 Ton Inverter Split AC",
    image: "./Totals assests/89.png",
    pprice: "86,000",
    shortDesc:
      "AC systems extract heat from the air, creating a comfortable and refreshing atmosphere....",
    id: 88,
    longDesc:
      "  Air conditioning (AC) stands as a pivotal advancement in modern technology, reshaping the way we perceive and interact with our immediate environments. From its inception to its current state of sophistication, AC has become an integral element of our daily lives, providing unparalleled comfort, climate control, and improved air quality in diverse settings.",
    catg: "Mitsubishi",
  },

  {
    name: " Grande 1 Ton Floor Standing AC",
    image: "./Totals assests/90.png",
    pprice: "84,000",
    shortDesc:
      "Ubiquitous in homes, offices, and diverse settings, air conditioning is essential for maintaining optimal comfort during warm weather.....",
    id: 89,
    longDesc:
      " Air conditioning is a complex system designed to regulate and maintain a desired indoor climate. Through a combination of intricate processes, including refrigeration, compression, and heat exchange, AC units efficiently manage temperature and humidity levels, creating an environment that promotes well-being and productivity. Beyond mere temperature regulation, contemporary AC systems offer a holistic approach to indoor comfort, incorporating features like air filtration and purification technologies.",
    catg: "Panasonic",
  },
  {
    name: " Avan 1 Ton Inverter Split AC",
    image: "./Totals assests/91.png",
    pprice: "82,000",
    shortDesc:
      "AC systems also play a crucial role in dehumidifying and purifying indoor air....",
    id: 90,
    longDesc:
      "The historical journey of air conditioning traces back to ancient civilizations that ingeniously sought ways to cool indoor spaces. However, it was in the 20th century that the modern AC systems emerged, transforming our homes, workplaces, and public spaces. Today, a diverse range of AC units caters to different needs, with options such as split systems, window units, portable ACs, and centralized HVAC systems, each tailored to specific requirements in residential, commercial, and industrial contexts. ",
    catg: "Panasonic",
  },
  {
    name: " Elengence X 1 Ton Floor Standing AC",
    image: "./Totals assests/92.png",
    pprice: "81,000",
    shortDesc:
      "Air contributing to improved overall air quality. This indispensable technology enhances well-being, productivity....",
    id: 91,
    longDesc:
      "In residential applications, air conditioning has evolved from a luxury to a necessity, offering homeowners a variety of choices to customize their indoor environments. Whether it's the convenience of a window unit, the flexibility of a split system, or the comprehensive climate control provided by central HVAC systems, AC ensures a comfortable haven irrespective of external weather conditions. ",
    catg: "Panasonic",
  },
  {
    name: " Anav 1 Ton Inverter Split AC",
    image: "./Totals assests/93.png",
    pprice: "80,000",
    shortDesc:
      "He overall living and working experience, making it a cornerstone of modern comfort.....",
    id: 92,
    longDesc: "",
    catg: "Panasonic",
  },
  {
    name: " Chrone 1 Ton Inverter Split AC",
    image: "./Totals assests/94.png",
    pprice: "68,000",
    shortDesc:
      "Air conditioning (AC) is a cutting-edge technology that revolutionizes indoor environments by effectively cooling and regulating temperatures....",
    id: 93,
    longDesc:
      "In commercial and industrial settings, air conditioning plays a crucial role in maintaining optimal conditions for both occupants and equipment. Centralized HVAC systems, with their ability to regulate temperature and humidity on a large scale, contribute to enhanced productivity, operational efficiency, and the preservation of sensitive equipment in diverse sectors such as healthcare, manufacturing, and technology. ",
    catg: "Panasonic",
  },
  {
    name: " Chrome 1 Ton Inverter Split AC",
    image: "./Totals assests/95.png",
    pprice: "67,000",
    shortDesc:
      "Employing a refined refrigeration process, AC systems extract heat from the air, creating a comfortable and controlled setting.....",
    id: 94,
    longDesc:
      "Modern AC units often incorporate advanced features to address not only temperature but also indoor air quality concerns. Filtration systems remove pollutants, allergens, and contaminants, creating a healthier and more breathable indoor environment. This dual focus on comfort and health underscores the comprehensive impact that air conditioning has on our overall well-being. ",
    catg: "Panasonic",
  },
  {
    name: " Anav 1 Ton Inverter Split AC",
    image: "./Totals assests/96.png",
    pprice: "77,000",
    shortDesc:
      "Widely integrated into homes, offices, and various establishments, air conditioning is paramount for maintaining optimal comfort....",
    id: 95,
    longDesc:
      "Recognizing the environmental impact of conventional air conditioning methods, the industry is actively engaged in sustainable practices. Ongoing research endeavors aim to develop energy-efficient technologies and environmentally friendly refrigerants, aligning with global initiatives to reduce carbon footprints and promote eco-conscious living. ",
    catg: "Panasonic",
  },
  {
    name: " Avan 1 Ton Inverter Split AC",
    image: "./Totals assests/97.png",
    pprice: "78,000",
    shortDesc:
      "AC contributes to improved air quality, dehumidification, and enhanced overall well-being....",
    id: 96,
    longDesc:
      " The future of air conditioning holds exciting prospects with the integration of smart technologies. Innovations such as smart thermostats, IoT connectivity, and artificial intelligence promise to enhance efficiency, user control, and energy savings. These advancements not only contribute to a more sustainable future but also align air conditioning systems with the broader landscape of smart homes and environmentally conscious buildings. ",
    catg: "Panasonic",
  },
  {
    name: "Econo 1 Ton Inverter Split AC",
    image: "./Totals assests/98.png",
    pprice: "73,000",
    shortDesc:
      "This indispensable technology plays a pivotal role in creating pleasant living and working conditions, ensuring a refreshing and productive atmosphere for occupants...",
    id: 97,
    longDesc:
      " Air conditioning stands as a symbol of modern comfort and technological progress. Its evolution from ancient cooling methods to today's sophisticated systems reflects our ongoing pursuit of a comfortable and healthy living environment. As the industry continues to advance, the future of air conditioning holds the promise of even greater innovations, further enriching our lives and contributing to a sustainable and technologically integrated world. ",
    catg: "Panasonic",
  },
  {
    name: "Eono 1 Ton Inverter Split AC",
    image: "./Totals assests/99.png",
    pprice: "75,000",
    shortDesc:
      "Air conditioning (AC) is a modern marvel that transforms indoor spaces, ensuring comfort and controlled climates...",
    id: 98,
    longDesc:
      "Air conditioning (AC) is a revolutionary technology designed to create a comfortable and controlled indoor environment, fundamentally altering the way we experience and interact with our surroundings. With its roots tracing back to ancient civilizations' ingenious methods of cooling, modern air conditioning has evolved into a sophisticated and indispensable part of our daily lives. ",
    catg: "Panasonic",
  },
  {
    name: "Elengence 1 Ton Inverter Split AC",
    image: "./Totals assests/100.png",
    pprice: "98,000",
    shortDesc:
      "Operating through advanced refrigeration techniques, AC systems extract heat from the air, providing efficient cooling and temperature regulation....",
    id: 99,
    longDesc:
      "An air conditioning system functions as a thermal regulation device, regulating temperature, humidity, and air quality within enclosed spaces. The primary objective is to create an optimal and pleasant atmosphere for occupants, regardless of the external weather conditions. AC units are commonly employed in residential, commercial, industrial, and institutional settings, showcasing their versatility and adaptability. ",
    catg: "Panasonic",
  },
  
];

var productsCatg = document.getElementsByClassName("productsCatg");

for (var i = 0; i < products.length; i++) {
  allproducts.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card"  style="width:100%; z-index:20;height:80vh;border-radius:20px ">
      <img src="${products[i].image}" class="card-img-top" height="200" width="100%" style="border-radius:10px" alt="...">
      <div class="card-body" styyle="display:flex;flex-direction:column;justify-content:space-between">
        <h5 class="card-title text-warning">${products[i].name}</h5>
        <p class="card-text text-success">${products[i].pprice}</p>
        <p class="card-text text-secondary">${products[i].shortDesc}</p>
        <a href="./eachproduct.html?id=${products[i].id}" class="btn text-secondary"><button class="btn-cart">See More</button></a>
      </div>
    </div>`;
}

for (var i = 0; i < productsCatg.length; i++) {
  productsCatg[i].addEventListener("click", (f) => {
    if (f.target.id == "All") {
      console.log("asdasda");
    } else {
      allproducts.innerHTML = "";
      let filterData = products.filter((e) => {
        return e.catg == f.target.id;
      });
      filterData.forEach((a) => {
        allproducts.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card"  style="width:100%; z-index:20;height:80vh;border-radius:20px">
      <img src="${a.image}" class="card-img-top" height="200" width="100%" style="border-radius:10px" alt="...">
      <div class="card-body">
        <h5 class="card-title text-warning">${a.name}</h5>
        <p class="card-text text-success">${a.pprice}</p>
        <p class="card-text text-secondary">${a.shortDesc}</p>
        <a href="./eachproduct.html?id=${a.id}" class="btn text-secondary"><button class="btn-cart">See More</button></a>
      </div>
    </div>`;
      });
    }
  });
}
