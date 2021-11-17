import axios from 'axios'

export const getAllServices = () => async (dispatch) => {
    dispatch({type: 'GET_SERVICES_REQUEST'})
    try {
        const res = await axios.get('/api/services/getAllServices')
        dispatch({type: 'GET_SERVICES_SUCCESS', payload: res.data})
    } catch (err) {
        dispatch({type: 'GET_SERVICES_FAIL', payload:err})
    }
}