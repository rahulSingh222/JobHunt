import { ResponsiveContainer,Area
,AreaChart,XAxis,YAxis,Tooltip,CartesianGrid } from "recharts"

function AreaChartComponent({data}) {
  return (
     <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={data} margin={{top : 50}}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Area type='monotone' dataKey='count' stroke="#A0A"  fill='#A0A'/>
        </AreaChart>
     </ResponsiveContainer>
  )
}

export default AreaChartComponent