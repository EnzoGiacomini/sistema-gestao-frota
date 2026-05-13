export function NoteInput() {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-[15px">Observações</label>
      <textarea
        className="border rounded p-1 w-180 h-20"
        id="obs"
        name="obs"
        rows={5}
        cols={30}
        maxLength={500}
        placeholder="Deixe uma observação aqui..."
      ></textarea>
    </div>
  );
}
