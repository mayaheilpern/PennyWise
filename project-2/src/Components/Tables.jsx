export default function Tables({ data }) {

  let total = data.reduce((a, v) => a = a + v.fields.amount, 0);

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
                {/* <th className="p-3 text-sm font-bold tracking-wide text-center border border-slate-600">Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((i) => {
                return (
                  <tr key={i.id} className="hover:bg-gray-50 pl-10">
                    <td className="text-center p-3 text-sm border-b-2">{i.fields.name}</td>
                    <td className="text-center p-3 text-sm border-b-2">{`$${i.fields.amount}`}</td>
                    <td className="text-center p-3 text-sm border-b-2">{i.fields.date}</td>
                    {/* <td className="items-center p-3 text-sm border border-slate-700">
                      <button onClick={handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td> */}
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