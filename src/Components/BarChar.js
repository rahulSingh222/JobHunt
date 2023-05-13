import { ResponsiveContainer,Bar, XAxis,YAxis,CartesianGrid, Tooltip,BarChart } from "recharts"

function BarChar({data}) {
  return (
    <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data} margin={{top:50}}>
            <CartesianGrid strokeDasharray='10 10' />
            <XAxis dataKey='date' />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey='count' fill='#A0A' barSize={75}/>
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChar