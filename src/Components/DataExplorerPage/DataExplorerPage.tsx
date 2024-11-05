import { useState, useEffect } from "react";
import { TbWorldSearch } from "react-icons/tb";
import Continent from "./Continent";
import DatasetPanel from "./DatasetPanel";
import SearchBar from "./SearchBar";

interface Country {
  continent: string;
  iso: string;
  name: string;
  noPostalCode: boolean;
  limited: boolean;
  notAvailable: boolean;
  url: string;
  continentCode: number;
}

export default function DataExplorerPage() {
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      try {
        console.log("fetching country data...");
        const response = await fetch("/data/countries.json");

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();

        setCountryData(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) console.log(error.message);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, []);

  if (loading) return <div>Loading...</div>;

  console.log(countryData);

  return (
    <div className="flex h-[100%]">
      <div className="text-black font-geo p-8 bg-white w-2/3 border-r-2">
        <div className="flex">
          <div>
            <div>
              <h1 className="font-bold text-3xl">Data Explorer</h1>
              <div className="flex items-center gap-1 font-light pt-2 pb-8">
                <TbWorldSearch size="22" />
                <p>
                  Index <span className="text-gray-400">of Countries</span>
                </p>
              </div>
            </div>
            {/* <div className="flex"> */}
            <div>
              {/* I know this is a bit messy */}
              {[
                ...new Set(countryData.map((country) => country.continent)),
              ].map((continent) => (
                <Continent
                  continent={continent}
                  countries={countryData.filter(
                    (c) => c.continent === continent
                  )}
                  key={continent}
                />
              ))}
            </div>
          </div>
          <div>
            <SearchBar />
            <DatasetPanel />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-1/3"></div>
    </div>
  );
}
