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
            text: 'Users',
        },
    },
};

const labels = ['Faculty', 'Students', 'QA Officer', 'Cordinator', "Admin"];

export const data = {
    labels,
    datasets: [
        {
            label: 'Total Users',
            data: [3000, 12000, 200, 2000, 1],
            backgroundColor: 'rgba(99, 102, 255, 0.5)',
        }
    ],
};

export default function AdminBar() {
    return <>
        <Bar options={options} data={data} />
    </>
}