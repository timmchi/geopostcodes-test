import type { Country } from "../../types";
import { Link } from "react-router-dom";

export default function CountryElement({ country }: { country: Country }) {
  return (
    <Link to={`/data-explorer/${country.url}`} key={country.iso}>
      <div className="flex gap-2 drop-shadow-lg">
        <img
          alt={`${country.name} flag`}
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.iso}.svg`}
          width="20"
          height="20"
        />
        <p className="font-light text-blue-500 hover:underline active:underline">
          {country.name}
        </p>
      </div>
    </Link>
  );
}
