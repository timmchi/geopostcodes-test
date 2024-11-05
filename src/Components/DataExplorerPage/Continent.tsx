import React from "react";
import { Country } from "../../types";

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
      <ul className="grid grid-cols-3 py-8">
        {countries.map((country) => (
          <li key={country.iso}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}
