import axios from 'axios';

class WeatherService {
	api_key = 'BCQZY66HTZ2TKT9PK76S3GLSY';

	async getTodayWeather(city) {
		try {
			const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${this.api_key}&contentType=json`);
			return response.data;
		} catch (e) {
			throw new Error(e);
		}
	}

	async getWeatherByPeriod(city, startDate, endDate) {
		try {
			const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${this.api_key}&contentType=json`);
			return response.data;
		} catch (e) {
			throw new Error(e);
		}
	}

	async getAllWeatherInfo(city, startDate, endDate) {
		try {
			return await Promise.all([this.getTodayWeather(city), this.getWeatherByPeriod(city, startDate, endDate)]);
		} catch (e) {
			throw new Error(e);
		}
	}
}

export default new WeatherService();
