const createCitySelectOptionList = (cities) => {
	return cities.map((city) => ({
		label: city.name,
		value: city.name,
	}));
};

export const formatTime = (time) => (time < 10 ? `0${time}` : time);

export default createCitySelectOptionList;
