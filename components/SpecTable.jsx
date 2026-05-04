export default function SpecTable({ rows }) {
  const headers = ["GSM", "Thickness (mm)", "Tensile MD", "Tensile CD", "Elongation MD %", "Elongation CD %", "Tear MD", "Tear CD"];
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-md">
      <table className="min-w-full text-sm">
        <thead className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 text-left text-white">
          <tr>
            {headers.map((h) => (
              <th key={h} className="border border-white/30 px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={`${row[0]}-${idx}`} className="border-t border-slate-200 odd:bg-slate-50">
              {row.map((cell) => (
                <td key={cell} className="border border-slate-200 px-4 py-3 text-slate-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
