import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../features/allJobs/allJobsSlice'
import { StatsContainer, ChartsContainer, Loading } from '../../components'

const Stats = () => {
  const {isLoading, monthlyApplications } = useSelector(store=>store.allJobs)

const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(showStats())
  },[])
  return (
    <>
      <StatsContainer></StatsContainer>
      {monthlyApplications.length >0 && <ChartsContainer></ChartsContainer>}
    </>
  )
}

export default Stats