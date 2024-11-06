import UserMiniProfile from "./UserMiniProfile";
import { Link } from "react-router-dom";

const exampleUser = {
  email: "example@geopostcodes.com",
  company: "GeoPostcodes",
};

export default function NavBar() {
  return (
    <div className="bg-geopostcodes-navy text-white flex justify-center items-center font-geo">
      <div className="flex gap-8 items-center py-3 text-base font-extralight">
        <Link to="/">
          <img
            alt="GeoPostcodes Logo"
            src="/images/Geopostcodes-logo-header.svg"
          />
        </Link>
        <Link to="/data-explorer">
          <div>Data Explorer</div>
        </Link>
        <div>Map Explorer</div>
        <div>Download Center</div>
        <div>Knowledge Base</div>
        <UserMiniProfile user={exampleUser} />
      </div>
    </div>
  );
}
