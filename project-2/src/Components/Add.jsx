export default function Add({
  show,
  name,
  setName,
  amount,
  setAmount,
  date,
  setDate,
  handleSubmit,
}) {
  return (show) ? (
    <form onSubmit={handleSubmit} className="px-5 grid grid-cols-4 md:flex md:justify-end">
      <input
        required
        id="name"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        className="border-b-2 mx-2 border-gray-600 col-span-1"
      />
      <input
        required
        id="amount"
        type="number"
        value={amount}
        placeholder="amount"
        onChange={(e) => setAmount(e.target.valueAsNumber)}
        className="border-b-2 mx-2 border-gray-600 col-span-1"
      />
      <input
        required
        id="date"
        type="text"
        value={date}
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
        className="border-b-2 mx-2 border-gray-600 col-span-1"
      />
      <button className="col-span-1">Add</button>
    </form>
  ) : "";
}
