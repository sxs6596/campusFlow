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
            text: 'Analytics of Students Data',
        },
    },
};

const labels = ['Assignment', 'Exams', 'Events', 'Quizzes', "Survey"];

export const data = {
    labels,
    datasets: [
        {
            label: 'Analytics of Students Data',
            data: [30, 5, 4, 15, 11],
            backgroundColor: 'rgba(99, 102, 255, 0.5)',
        }
    ],
};

export default function AdminBar() {
    return <>
        <Bar options={options} data={data} />
    </>
}