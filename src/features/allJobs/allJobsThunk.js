import customFetch , {checkForUnauthorizedResponse} from "../../utils/axios";
import authHeader from "../../utils/authHeader";

export const getAllJobsThunk = async(_, thunkApi)=>{
    const {page, search, searchStatus, searchType, sort} = thunkApi.getState().allJobs

    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
    if(search){
        url= url + `&search=${search}`
    }
    try {
        const resp = await customFetch(url, authHeader(thunkApi))
     
        return resp.data
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkApi)
    }
}

export const showStatsThunk = async(_, thunkApi)=>{
    try {
        const resp = await customFetch("/jobs/stats", authHeader(thunkApi))
        console.log(resp.data)
        return resp.data
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkApi)
    }
}