import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Result',
        },
    },
};

const labels = ['ML', 'Web Dev', 'SE2', 'UI/UX', 'DataMining',];

export const data = {
    labels,
    datasets: [
        {
            label: 'Grades',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};

export default function StudentGradesBar() {
    return <>
        <Bar options={options} data={data} />
    </>
}