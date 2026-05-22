export function NoteInput() {
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor="obs" className="text-[15px] text-gray-600">
        Observações
      </label>
      <textarea
        id="obs"
        name="obs"
        maxLength={500}
        placeholder="Deixe uma observação aqui..."
        className="w-full h-35 p-3 border border-gray-300 rounded-md resize-none placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-colors"
      />
    </div>
  );
}