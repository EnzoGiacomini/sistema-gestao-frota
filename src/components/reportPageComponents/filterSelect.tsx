export function FilterSelect({ label, options }: { label: string; options: { value: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 text-gray-600 bg-white">
        <option value="">Selecione</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}