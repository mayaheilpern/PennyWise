import Chart from "react-apexcharts";

export default function TotalChart({totalBill, totalExpense, totalOther}) {

  const options = {
    labels: ["Bills", "Expenses", "Other Charges"],
    dataLabels: {
      enabled: false
    }
  }

  const series = [totalBill, totalExpense, totalOther];

  return (
    <>
      <Chart
        type="pie"
        options={options}
        series={series}
      />
    </>
  )
}
