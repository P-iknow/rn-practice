import React, {useState, useCallback, useContext} from 'react';

// UserDispatch 라는 이름으로 내보내줍니다.
export const CitiesContext = React.createContext({
  cities: [],
  addCity() {},
  addLocation() {},
});

export function CitiesProvider(props) {
  const [cities, setCities] = useState([]);

  const addCity = useCallback(
    city => {
      setCities(cities.concat(city));
    },
    [cities],
  );

  const addLocation = useCallback(
    (location, city) => {
      const cityIndex = cities.findIndex(item => {
        return item.id === city.id;
      });
      const chosenCity = cities[cityIndex];
      chosenCity.location.push(location);
      const updatedCities = [...cities];
      setCities(updatedCities);
    },
    [cities],
  );

  const value = {
    cities,
    addCity,
    addLocation,
  };

  return (
    <CitiesContext.Provider value={value}>
      {props.children}
    </CitiesContext.Provider>
  );
}

export const useCitesConText = () => useContext(CitiesContext);
