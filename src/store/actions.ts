import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from './constants'
import airlineService from '../services/airline-service'
import { error } from 'console'
export const getData = () => {
    return {
        type: FETCHING_DATA,
    }
}

export const getDataSuccess = (data:[]) => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export const getDataFailure = () => {
    return {
        type: FETCHING_DATA_FAILURE,
    }
}

export function fetchAirline() {
    return(dispatch:any) => {
        dispatch(getData())
        airlineService.getAirlines()
        .then((response)=>{
            dispatch(getDataSuccess(response.data))
        })
        .catch((error)=> {console.log('error:', error)})
    }
}
