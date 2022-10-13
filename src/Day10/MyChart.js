import React from 'react';
import {Bar} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  // LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  // LineElement,
  Title,
  Tooltip,
  Legend
)

// for getting single bar chart

// const mydata = {
//   labels: ['January', 'February', 'March',
//            'April', 'May','June'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'aqua',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 89, 56,10]
//     }
//   ]
// }

// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = ['January', 'February', 'March',
'April', 'May','June']
const mydata = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      // data: labels.map(() => {
      //   return 50;
      // }),
      data: [65, 59, 80, 89, 56,10],
      backgroundColor: 'green',
    },
    {
      label: 'Dataset 2',
      // data: labels.map(() => {
      //   return 100;
      // }),
      data: [35, 34, 50, 79, 86,50],
      backgroundColor:'orange',
    },
  ]
};

export default class MyChart extends React.Component {
  render() {
    return (
      <div className='w-50 mx-auto bg-light my-2 p-1'>
        <Bar
          data={mydata}
          // options={{
          //   title:{
          //     display:true,
          //     text:'Average Rainfall per month',
          //     fontSize:10
          //   },
          //   legend:{
          //     display:true,
          //     position:'right'
          //   }
          // }}
          options= {{
            responsive: true,
            plugins: {
              legend: {
                position: 'left',
              },
              title: {
                display: true,
                text: 'Chart.js Bar Chart',
                color:'red',

              }
            }
          }}
        />
      </div>
    );
  }
}