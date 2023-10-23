import React , {useState, useMemo} from 'react'
import {FormRow, FormRowSelect} from "./"
import Wrapper from '../assets/wrappers/SearchContainer'
import { useSelector, useDispatch } from 'react-redux'
import { handleChange, clearFilters} from '../features/allJobs/allJobsSlice'

const SearchContainer = () => {

  const {isLoading, search, searchStatus, searchType, sort, sortOptions }  = useSelector(store=>store.allJobs)
  const {jobTypeOptions, statusOptions} = useSelector(store=>store.job)
const [localSearch, setLocalSearch] = useState("")

  const dispatch = useDispatch()
  const handleSearch = (e)=>{

  
    dispatch(handleChange({name:e.target.name, value:e.target.value}))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setLocalSearch("")
    dispatch(clearFilters())
  }

  const debounce = () =>{
    let timeoutID
    return (e) =>{
      setLocalSearch(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(()=>{
        dispatch(handleChange({name:e.target.name, value:e.target.value}))
      }, 1000)
    }
  }

  const optimizedDebounce = useMemo(()=>debounce(), [])
  return (
   <Wrapper  >
    <form  className="form">
      <h4>search form</h4>
      <div className="form-center">
        {/* search position */}
        <FormRow type="text" name="search" value={localSearch} handleChange={optimizedDebounce}></FormRow>
        {/* search by status */}
        <FormRowSelect labelText="status" name="searchStatus" value={searchStatus} handleChange={handleSearch}
        list={["all", ...statusOptions]}> </FormRowSelect>
           {/* search by type */}
        <FormRowSelect labelText="type" name="searchType" value={searchType} handleChange={handleSearch}
        list={["all", ...jobTypeOptions]}
        ></FormRowSelect>
           {/* sort */}
         <FormRowSelect name="sort" value={sort} handleChange={handleSearch}
        list={sortOptions}
        ></FormRowSelect>
        <button className="btn btn-block btn-danger" disabled={isLoading} onClick={handleSubmit}>Clear filters</button>
      </div>
    </form>
   </Wrapper>
  )
}

export default SearchContainer