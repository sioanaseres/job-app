import customFetch , {checkForUnauthorizedResponse} from "../../utils/axios";
import { logoutUser } from "./userSlice";
import authHeader from "../../utils/authHeader";
import {clearAllJobsState} from "../allJobs/allJobsSlice"
import { clearValues } from "../job/jobSlice";

export const registerUserThunk = async (url, user, thunkApi) =>{
    try {
        const resp = await customFetch.post(url, user)
        return resp.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg)
        
    }
}

export const loginUserThunk = async (url, user, thunkApi) =>{
    try {
        const resp = await customFetch.post(url, user)
        return resp.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg)
        
    }
}

export const updateUserThunk = async (url, user, thunkApi) =>{
    try {
        const resp = await customFetch.patch(url, user, authHeader(thunkApi))
        return resp.data
    
    } catch (error) {
        console.log(error.response)
      
        return checkForUnauthorizedResponse(error, thunkApi)
    }
}
export const clearStoreThunk = async (message, thunkApi)=>{
    try {
        thunkApi.dispatch(logoutUser(message))
        thunkApi.dispatch(clearAllJobsState())
        thunkApi.dispatch(clearValues())
        return Promise.resolve()
    } catch (error) {
        return Promise.reject()
    }
}