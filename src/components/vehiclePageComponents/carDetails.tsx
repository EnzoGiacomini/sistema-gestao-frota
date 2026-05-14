interface CarDetailsFieldProps {
  item: string;
  result: string;
}

export function CarDetails({ item, result }: CarDetailsFieldProps) {
  const placeholder = "Será preenchido automaticamente";

  return (
    <div className="flex flex-col w-full gap-1.5">
      <label className="text-[15px]">{item}</label>
      <div
        className={`px-3 py-2 border border-gray-300 rounded w-full overflow-hidden ${result !== "" ? "bg-white" : "bg-gray-100 text-gray-400"}`}
      >
        <p className="truncate text-sm whitespace-nowrap">
          {result !== "" ? result : placeholder}
        </p>
      </div>
    </div>
  );
}
