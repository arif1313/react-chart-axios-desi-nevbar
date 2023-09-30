
import { PieChart as Pchart, Pie} from 'recharts';
const PieChart = () => {
    const pieChartData = [
        { category: "Category A", value: 30 },
        { category: "Category B", value: 45 },
        { category: "Category C", value: 15 },
        { category: "Category D", value: 10 }
      ];
      
      
    return (
        <div>
            <Pchart width={300} height={300} >

            <Pie dataKey={'value'}
            data={pieChartData}
            // cx={'50%'}
            // cy={'50%'}
            fill='#8884d8'
         
           label
         
           
            >
            

            </Pie>
            </Pchart>
        </div>
    );
};

export default PieChart;