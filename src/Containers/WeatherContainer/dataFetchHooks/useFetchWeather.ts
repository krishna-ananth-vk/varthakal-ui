import { useQuery } from 'react-query';
import axios from 'axios';
import API from '../../../utils/API';

const useFetchWeather = () => (
    useQuery(
        ['fetch-weather'],
        () => (axios.get(API.WEATHER.GET)),
    )
);

export default useFetchWeather;
