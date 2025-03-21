import Profile from "@/components/profile/Profile";
import Topbar from "@/components/profile/Topbar";
import { Separator } from "@/components/ui/separator";

const ProfilePage = () => {
  return (
    <div className="flex flex-col p-2 h-screen w-full">
      <Topbar />
      <Profile />
      <Separator />
    </div>
  );
};

export default ProfilePage;
