const dummyData = [
  { strike: 22000, price: 120 },
  { strike: 22100, price: 95 },
  { strike: 22200, price: 70 },
];

export default function OptionChain({ type }) {
  return (
    <div className="p-3">
      <h2 className="text-lg font-bold mb-3">
        {type === "CE" ? "CALL (CE)" : "PUT (PE)"}
      </h2>

      {dummyData.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center mb-2 p-2 bg-gray-900 rounded"
        >
          <div>
            <div>{item.strike}</div>
            <div className="text-sm text-gray-400">
              ₹{item.price}
            </div>
          </div>

          <button className="bg-green-600 px-3 py-1 rounded">
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}