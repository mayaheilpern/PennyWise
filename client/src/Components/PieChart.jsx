import Chart from "react-apexcharts";

export default function PieChart({ data }) {

  let name = data.map(names => names.fields.name);
  let amount = data.map(amounts => amounts.fields.amount);

  const options = {
    labels: name,
    dataLabels: {
      enabled: true,
      formatter(val, opts) {
        return [val.toFixed(1) + '%']
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: '#000',
        opacity: 0.45
      },
    },
    theme: {
      monochrome: {
        enabled: true
      }
    },
  };
  const series = amount;

  return (
    <Chart
      options={options}
      series={series}
      type="pie"
      className="w-auto"
    />
  )
}
