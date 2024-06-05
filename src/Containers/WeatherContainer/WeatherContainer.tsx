import { Grid } from "@mui/joy"
import useFetchWeather from "./dataFetchHooks/useFetchWeather";

const WeatherContainer = () => {
    console.log('pageloaded');

    const {
        data: weatherData,
        isLoading: isWeatherDataLoading,
    } = useFetchWeather();

    console.log('weatherData', {weatherData, isWeatherDataLoading})
    return <Grid>
        Weather
    </Grid>
}

export default WeatherContainer;