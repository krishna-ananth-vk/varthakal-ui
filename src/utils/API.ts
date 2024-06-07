const baseUrl = 'https://varthakal.xyz'
const weatherContext = '/weather'

const weatherWithBase = `${baseUrl}${weatherContext}`
export default {
    WEATHER: {
        GET: `${weatherWithBase}/getWeather`
    }
}