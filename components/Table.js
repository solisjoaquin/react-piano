import PlayButton from './PlayButton';

export const Table = () => {
    return (<table class="my-3 table-auto border-collapse border border-blue-700">
        <thead>
            <tr className="bg-blue-200">
                <th className="border text-blue-500 border-blue-700">Notas</th>
                <th className="border text-blue-500 border-blue-700">Base</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border font-medium text-sm text-white border-blue-700 py-1 px-2 ">DO <span className="text-black">FA</span>  DO <span className="text-black">DO</span> FA <span className="text-black">DO</span> FA</td>
                <td className="border text-blue-100 border-blue-700 py-1 px-2"><PlayButton /></td>

            </tr>
            <tr className="bg-blue-200">
                <td className="border font-medium text-sm text-blue-600 border-blue-700 py-1 px-2">
                    MI <span className="text-black">SI</span> FA <span className="text-black">DO</span> FA <span className="text-black">SI</span> FA <span className="text-black">DO</span></td>
                <td className="border text-blue-500 border-blue-700 py-1 px-2"><PlayButton /></td>

            </tr>
            <tr>
                <td className="border font-medium text-sm text-white border-blue-700 py-1 px-2">
                    DO <span className="text-black">FA</span> MI <span className="text-black">SI</span> SI <span className="text-black">DO</span> MI <span className="text-black">FA</span> SI <span className="text-black">DO</span> FA <span className="text-black">DO</span></td>
                <td className="border text-blue-100 border-blue-700 py-1 px-2"><PlayButton /></td>

            </tr>
            <tr className="bg-blue-200 ">
                <td className="border font-medium text-sm text-blue-600 border-blue-700 py-1 px-2">
                    RE <span className="text-black">SOL</span> MI <span className="text-black">SI</span> LA <span className="text-black">SOL</span> RE <span className="text-black">DO</span> FA <span className="text-black">RE</span> FA</td>
                <td className="border text-blue-500 border-blue-700 py-1 px-2"><PlayButton /></td>

            </tr>
        </tbody>
    </table>)
}