export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/dayclear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/day/dayclouds.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/day/dayfog.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/dayrain.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/daysnow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/day/daystorm.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/nightclear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/night/nightclouds.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/night/nightfog.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/night/nightrain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/nightsnow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/night/nightstorm.png", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/daydefault.png", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/nightdefault.png", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 33.696923,
  longitude: -86.525229,
};

export const apiKey = "d2b8ebf70cb227f66408cff615f4ccde";
