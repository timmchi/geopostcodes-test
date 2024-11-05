import { FaUser } from "react-icons/fa";

interface User {
  email: string;
  company: string;
  profilePicture?: string;
}

export default function UserMiniProfile({ user }: { user: User }) {
  return (
    <div className="flex gap-2 items-center ml-24">
      <div>
        <p className="font-thin text-sm">{user.email}</p>
        <p className="font-bold text-end text-xs">{user.company}</p>
      </div>
      <FaUser
        className="text-geopostcodes-navy bg-white rounded-full"
        size="32"
      />
    </div>
  );
}
