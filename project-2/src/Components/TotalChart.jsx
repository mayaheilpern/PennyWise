import Chart from "react-apexcharts";

export default function TotalChart({totalBill, totalExpense, totalOther}) {

  const options = {
    labels: ["Bills", "Expenses", "Other Charges"],
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
  }

  const series = [totalBill, totalExpense, totalOther];

  return (
    <>
      <Chart
        type="pie"
        options={options}
        series={series}
        className="w-auto"
      />
    </>
  )
}
