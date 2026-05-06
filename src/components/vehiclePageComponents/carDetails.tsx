interface CarDetailsFieldProps {
  item: string;
  result: string;
}

export function CarDetails({ item, result }: CarDetailsFieldProps) {
  const placeholder = "Será preenchido automaticamente";

  return (
    <div className="flex flex-col w-75 gap-1.5">
      <label className="text-[15px]">{item}</label>
      <div
        className={`p-2 border border-black rounded ${result !== "" ? "" : "bg-gray-200 text-gray-400"}`}
      >
        <p>{`${result !== "" ? result : placeholder}`}</p>
      </div>
    </div>
  );
}
