import BarChar from "./BarChar"
import Wrapper  from '../assets/wrappers/ChartsContainer'
import { useSelector } from "react-redux"
import { useState } from "react"
import AreaChartComponent from "./AreaChartComponent";

function ChartContainer() {

    const [barChart, setBarChart] = useState(true);
    const {monthlyApplications : data} = useSelector( (store) => store.allJobs)
  return (
    <Wrapper>
        <h4>monthly Applications</h4>
        <button type='button' onClick={() => setBarChart(!barChart)}>
            {barChart ? "Area Chart" : "Bar Chart"}
        </button>
        { barChart ? <BarChar data={data} /> : <AreaChartComponent data={data}/> }
    </Wrapper>
  )
}

export default ChartContainer