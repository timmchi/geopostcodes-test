export default function DatasetPanel() {
  return (
    <div className="w-96 mx-12 font-extralight">
      <h3 className="border-b py-2">
        <span className="font-bold">Dataset</span> content
      </h3>
      <table className="w-full">
        <tbody>
          <tr className="">
            <td className="py-1">Countries</td>
            <td className="text-right font-light">193</td>
          </tr>
          <tr className="bg-gray-100 bg-opacity-70">
            <td className="py-1">Administrative Regions</td>
            <td className="text-right font-light">284 626</td>
          </tr>
          <tr className="">
            <td className="py-1">Streets</td>
            <td className="text-right font-light">34 404 491</td>
          </tr>
          <tr className="bg-gray-100 bg-opacity-70">
            <td className="py-1">Businesses & admin.</td>
            <td className="text-right font-light">1 721 216</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
