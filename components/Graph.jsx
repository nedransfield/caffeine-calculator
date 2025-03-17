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
import Annotation from 'chartjs-plugin-annotation'

const Graph = ({ drinks }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    Annotation
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
      tooltip: {
        intersect: false,
        displayColors: false,
        position: 'nearest',
        callbacks: {
          title: () => '',
          label: (context) => `${context.parsed.y.toFixed(1)} mg`,
        },
      },
      annotation: {
        annotations: {
          line: {
            type: 'line',
            yMin: 400,
            yMax: 400,
            borderColor: 'rgb(255, 73, 88)',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
              content: 'Safe Daily Max',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              color: 'rgb(255, 73, 88)',
              display: true,
              position: 'end',
              yAdjust: -10,
            },
          },
          box: {
            type: 'box',
            yMin: 400,
            backgroundColor: 'rgba(255, 60, 60, 0.15)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
        },
      },
    },
    scales: {
      x: {},
      y: {
        suggestedMax: 500,
        ticks: {
          callback: (value) => `${value} mg`,
        },
      },
    },
    elements: {
      point: {
        pointStyle: false,
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
        data: caffeineData,
        label: 'Caffeine level',
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return <Line options={options} data={data} />
}

export default Graph
