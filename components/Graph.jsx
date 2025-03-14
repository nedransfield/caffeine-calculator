import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  elements,
} from 'chart.js'

const Graph = ({ drinks }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  )

  const halfLife = 6
  const decay = Math.log(2) / halfLife
  const caffeineData = new Array(25).fill(0)
  for (let drink of drinks) {
    console.log(drink)
    for (let i = 0; i <= 24; i++) {
      if (i < drink.time.match(/^\d+/)[0]) {
        caffeineData[i] += 0
      } else {
        caffeineData[i] +=
          drink.caffeine *
          Math.E ** (-decay * (i - drink.time.match(/^\d+/)[0]))
      }
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Caffeine',
      },
    },
    scales: {
      y: {
        stacked: true,
      },
    },
    elements: {
      point: {
        pointStyle: false,
      },
      line: {
        tension: 0.1,
      },
    },
  }

  const labels = [
    '0:00',
    '1:00',
    '2:00',
    '3:00',
    '4:00',
    '5:00',
    '6:00',
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '1:00',
    '2:00',
    '3:00',
    '4:00',
    '5:00',
    '6:00',
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
  ]

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Caffeine levels',
        data: caffeineData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return <Line options={options} data={data} />
}

export default Graph
