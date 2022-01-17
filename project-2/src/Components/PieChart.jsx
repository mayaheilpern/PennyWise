import Chart from "react-apexcharts";

export default function PieChart({ data, title }) {

  let name = data.map(names => names.fields.name);
  let amount = data.map(amounts => amounts.fields.amount);

  const options = {
    labels: name,
    dataLabels: {
      enabled: false
    },
    theme: {
      monochrome: {
        enabled: true
      }
    },
  //   dataLabels: {
  //     formatter(val, opts) {
  //       const name = opts.w.globals.labels[opts.seriesIndex]
  //       return [name, val.toFixed(1) + '%']
  //     }
  //   },
  //   legend: {
  //     show: false
  //   },
    title: {
      text: title,
      align: 'center',
      margin: 10,
      style: {
        fontSize:  '17px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#263238'
      },
    }
  };
  const series = amount;

  return (
    <Chart
      options={options}
      series={series}
      type="pie"
      width="380"
    />
  )
}
