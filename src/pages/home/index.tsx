import style from "./style.module.scss";
import MainTemplate from "../../components/Templates";
import { Card } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#495579', '#263159', '#251749', 'rgb(25, 25, 25)'];

export default function Home() {
  return (
    <MainTemplate>
      <div className={style.container}>
        <h1 className={style.title}>Dashboard</h1>

        <div className={style.row}>
          <Card variant="flat" className={style.card}>
            <h1><FontAwesomeIcon icon={'eye'}/></h1>
            <p className={style.percent}>+10%</p>
            <h3>25.556</h3>
            <p>Total accesses</p> 
          </Card>

          <Card variant="flat" className={style.card}>
            <p className={style.percent}>+12% ( T / Y )</p>
            <h1><FontAwesomeIcon icon={'eye'}/></h1>
            <h3>374</h3>
            <p>Accesses today</p> 
          </Card>

          <Card variant="flat" className={style.card}>
            <p className={style.percent}>+9% ( T / Y )</p>
            <h1><FontAwesomeIcon icon={'arrow-pointer'}/></h1>
            <h3>12.324</h3>
            <p>Total clicks</p> 
          </Card>

          <Card variant="flat" className={style.card}>
            <h1><FontAwesomeIcon icon={'arrow-pointer'}/></h1>
            <p className={style.percent}>+7% ( T / Y )</p>
            <h3>122</h3>
            <p>Clicks Today</p> 
          </Card>

          <Card variant="flat" className={style.card}>
            <h1>{'{}'}</h1>
            <p className={style.percent}>+3% ( T / Y )</p>
            <h3>122</h3>
            <p>{'{button.title}'} today</p> 
          </Card>

          <Card variant="flat" className={style.card}>
            <h1>{'{}'}</h1>
            <h3>122</h3>
            <p>Total {'{button.title}'}</p> 
          </Card>

          
        </div>

        <div>
          <Card variant="flat" className={`${style.lineChart} ${style.card}`}>
            <h2>Title</h2>

            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#495579" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className={style.row}>
          <Card variant="flat" className={`${style.pieChart} ${style.card}`}>
            <h2>Title</h2>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Card>

            <Card variant="flat" className={`${style.pieChart} ${style.card}`} style={{margin:0}}>
            <h2>Title</h2>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>

      
      
    </MainTemplate>
  )
}