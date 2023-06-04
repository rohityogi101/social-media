const Context = async () => {
  const URL = `https://jsonplaceholder.typicode.com/posts`;

  const urlData = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const { userId, id, title, body } = urlData;

  return {
    // userId,
    // id,
    // title,
    // body,
    urlData,
  };
  // const {
  //   coord: { lon, lat },
  //   weather,
  //   main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
  //   wind: { speed, deg },
  //   sys: { country },
  //   name,
  // } = data;

  // const { description, icon } = weather[0];
  // return {
  //   description,
  //   iconImage: iconURL(icon),
  //   lon,
  //   lat,
  //   temp,
  //   feels_like,
  //   temp_min,
  //   temp_max,
  //   pressure,
  //   humidity,
  //   speed,
  //   deg,
  //   country,
  //   name,
  // };
};

export { Context };
