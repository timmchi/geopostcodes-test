import UserMiniProfile from "./UserMiniProfile";

const exampleUser = {
  email: "example@geopostcodes.com",
  company: "GeoPostcodes",
};

export default function NavBar() {
  return (
    <div className="bg-geopostcodes-navy text-white flex justify-center items-center font-geo">
      <div className="flex gap-8 items-center py-3 text-base font-extralight">
        <img
          alt="GeoPostcodes Logo"
          src="/images/Geopostcodes-logo-header.svg"
        />
        <div>Data Explorer</div>
        <div>Map Explorer</div>
        <div>Download Center</div>
        <div>Knowledge Base</div>
        <UserMiniProfile user={exampleUser} />
      </div>
    </div>
  );
}
