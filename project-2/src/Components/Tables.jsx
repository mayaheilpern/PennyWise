export default function Tables({ data, total }) {
  return (
    <div className="p-5 col-span-2">
      <div className="rounded-lg shadow-2xl">
        <div className="px-8 pt-8">
          <table className="w-full">
            <thead>
              <tr className="pl-10">
                <th className="p-3 text-sm font-bold tracking-wide text-center border-b-4 border-gray-600">Name</th>
                <th className="p-3 text-sm font-bold tracking-wide text-center border-b-4 border-gray-600">Amount</th>
                <th className="p-3 text-sm font-bold tracking-wide text-center border-b-4 border-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i) => {
                return (
                  <tr key={i.id} className="hover:bg-gray-50 pl-10">
                    <td className="text-center p-3 text-sm border-b-2">{i.fields.name}</td>
                    <td className="text-center p-3 text-sm border-b-2">{`$${i.fields.amount}`}</td>
                    <td className="text-center p-3 text-sm border-b-2">{i.fields.date}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="py-4">
            <h3 className="text-center bg-sky-500 rounded py-1 text-white">{`Total $${total}`}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}