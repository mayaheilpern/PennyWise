export default function Tables({ data }) {
  return (
    <div className="px-5">
      <div className="rounded-lg shadow-2xl">
        <div className="p-8">
          <table className="w-full md:w-8/12 border-collapse border border-slate-500">
            <thead>
              <tr className="pl-10">
                <th className="p-3 text-sm font-bold tracking-wide text-center border border-slate-600">Name</th>
                <th className="p-3 text-sm font-bold tracking-wide text-center border border-slate-600">Amount</th>
                <th className="p-3 text-sm font-bold tracking-wide text-center border border-slate-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i) => {
                return (
                  <tr key={i.id} className="hover:bg-gray-50 pl-10 border border-slate-700">
                    <td className="text-center p-3 text-sm border border-slate-700">{i.fields.name}</td>
                    <td className="text-center p-3 text-sm border border-slate-700">{`$${i.fields.amount}`}</td>
                    <td className="text-center p-3 text-sm border border-slate-700">{i.fields.date}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}