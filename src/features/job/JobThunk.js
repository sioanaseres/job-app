import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import customFetch, {checkForUnauthorizedResponse} from "../../utils/axios"
import { clearValues } from "./jobSlice";

import authHeader from "../../utils/authHeader";

export const createJobThunk = async (job, thunkApi)=>{
    try {
        const resp = await customFetch.post("/jobs", job, authHeader(thunkApi))
         thunkApi.dispatch(clearValues())
         return resp.data
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkApi)
    }
}
export const deleteJobThunk = async(jobId, thunkApi)=>{
    thunkApi.dispatch(showLoading())
    try {
        const resp = await customFetch.delete(`/jobs/${jobId}`, authHeader(thunkApi))
        thunkApi.dispatch(getAllJobs())
        return resp.data.msg

    } catch (error) {
        thunkApi.dispatch(hideLoading())
        return checkForUnauthorizedResponse(error, thunkApi)
    }
}
export const editJobThunk = async({jobId, job},thunkApi )=>{
    try {
        const resp = await customFetch.patch(`/jobs/${jobId}`, job, authHeader(thunkApi))
        thunkApi.dispatch(clearValues())
        return resp.data
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkApi)
    }
}


