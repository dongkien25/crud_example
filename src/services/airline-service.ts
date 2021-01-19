import axios from "axios"
import {BASE_URL} from '../store/constants'
export default {
    getAirlines: async () => {
        return axios.get(`${BASE_URL}airlines`)
    }
}