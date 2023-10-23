import React , {useState} from 'react'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useSelector } from 'react-redux'
import AreaChartComponent from './AreaChart'
import BarChartComponent from './BarChart'

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const {monthlyApplications:data }= useSelector(store=>store.allJobs)
  return (
    <Wrapper >
      <h4>Monthly Applications</h4>
      <button type='button' onClick={()=>setBarChart(!barChart)}>
        {barChart? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChartComponent data={data}></BarChartComponent> :<AreaChartComponent data={data}></AreaChartComponent>}
    </Wrapper>
  )
}

export default ChartsContainer