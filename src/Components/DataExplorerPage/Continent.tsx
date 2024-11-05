import type { Country } from "../../types";
import CountryElement from "./Country";

export default function Continent({
  continent,
  countries,
}: {
  continent: string;
  countries: Country[];
}) {
  return (
    <div className="">
      <p className="text-2xl font-extralight border-b pb-2">{continent}</p>
      <div className="grid grid-cols-3 py-8 gap-4">
        {countries.map((country) => (
          <CountryElement country={country} key={country.iso} />
        ))}
      </div>
    </div>
  );
}
