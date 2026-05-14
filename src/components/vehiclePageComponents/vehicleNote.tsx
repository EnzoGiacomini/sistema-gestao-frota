export function NoteInput() {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-[15px">Observações</label>
      <input
        type="text"
        className="border rounded p-1 w-full h-20" // Mantive a altura de 20 (h-20)
        id="obs"
        name="obs"
        maxLength={500}
        placeholder="Deixe uma observação aqui..."
      />
    </div>
  );
}
