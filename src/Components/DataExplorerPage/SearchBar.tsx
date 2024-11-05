import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        placeholder="Search by postcode, locality or region"
        className="bg-gray-200 w-96 h-12 rounded-md border-gray-300 border-2 opacity-55 px-8 mb-12 mx-12 font-light text-base"
      />
      <FaSearch
        size="28"
        className="text-gray-300 absolute inset-y-0 left-12 top-2.5 pl-3 flex items-center pointer-events-none"
      />
    </div>
  );
}
