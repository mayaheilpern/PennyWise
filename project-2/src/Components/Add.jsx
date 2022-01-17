export default function Add({
  show,
  setShow,
  name,
  setName,
  amount,
  setAmount,
  date,
  setDate,
  handleSubmit,
}) {
  return (show) ? (
    <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
      <div className="bg-white rounded-md">
        <header className="flex justify-between p-2" >
          <h3 className="pt-1">Add New</h3>
          <svg onClick={() => setShow(false)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </header>
        <hr />
        <form className="grid grid-col-4 p-8" onSubmit={handleSubmit}>
          <input
            required
            id="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="rounded-md p-3 space-y-1 border-2"
          />
          <br/>
          <input
            required
            id="amount"
            type="number"
            value={amount}
            placeholder="amount"
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            className="rounded-md p-3 space-y-1 border-2"
          />
          <br/>
          <input
            required
            id="date"
            type="text"
            value={date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
            className="rounded-md p-3 space-y-1 border-2"
          />
          <br/>
          <button className="rounded-md p-3 bg-blue-500 space-y-1">Add</button>
        </form>
      </div>
    </div>
  ) : "";
}
