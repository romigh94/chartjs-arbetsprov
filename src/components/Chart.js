import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import '../App.css'
import { CompanyData } from './Data';


const Chart = () => {
  return (
    <div className='BarChart'>
        <Bar data={{
            labels: CompanyData.map((data) => data.company),
            datasets: [
                {
                    label: "Electricity 2019",
                    data: CompanyData.map((data) => data.el2019),
                    backgroundColor: ["orange"],
                },
                {
                    label: "Electricity 2020",
                    data: CompanyData.map((data) => data.el2020),
                    backgroundColor: ["limegreen"]
                }
            ]
        }
    } />

    </div>
  )
}

export default Chart