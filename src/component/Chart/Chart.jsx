

import { LineChart, Line,  XAxis, YAxis } from 'recharts';
const Chart = () => {
    const studentResults = [
        { id: 1, name: "Emma Johnson", math: 95, physics: 78, chemistry: 88 },
        { id: 2, name: "David Brown", math: 89, physics: 85, chemistry: 92 },
        { id: 3, name: "Olivia Davis", math: 78, physics: 90, chemistry: 85 },
        { id: 4, name: "Sophia Wilson", math: 92, physics: 91, chemistry: 94 },
        { id: 5, name: "Noah Smith", math: 88, physics: 84, chemistry: 87 },
        { id: 6, name: "Ava Martinez", math: 90, physics: 88, chemistry: 91 },
        { id: 7, name: "Liam Taylor", math: 87, physics: 83, chemistry: 86 }
      ];
      
    return (
        <div>
            <LineChart width={1000} height={400} data={studentResults}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
     <Line dataKey={'math'} stroke='red'></Line>
     <Line dataKey='physics' stroke='blue'></Line>
     <Line dataKey={'chemistry'} stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default Chart;