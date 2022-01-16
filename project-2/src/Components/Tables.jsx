export default function Tables({ data }) {

  return (
    <table className="w-full md:w-8/12">
      <thead className="bg-gray-50 border-b-3 border-gray-800">
        <tr className="pl-10">
          <th className="p-3 text-sm font-semibold tracking-wide text-center">Name</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-center">Amount</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-center">Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((i) => {
          return (
            <tr key={i.id} className="hover:bg-gray-50 pl-10 border-b-10 border-gray-900">
              <td className="text-center p-3 text-sm">{i.fields.name}</td>
              <td className="text-center p-3 text-sm">{`$${i.fields.amount}`}</td>
              <td className="text-center p-3 text-sm">{i.fields.date}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}