const createCitySelectOptionList = (cities) => {
	return cities.map((city) => ({
		label: city.name,
		value: city.name,
	}));
};

export default createCitySelectOptionList;
