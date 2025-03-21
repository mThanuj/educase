import { Camera } from "lucide-react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 p-5 bg-slate-50">
      <div className="flex ">
        <div className="mr-5 relative">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div className="absolute -right-0 bottom-2 bg-blue-600 rounded-full size-[18px] flex items-center justify-center">
            <Camera className="size-3 fill-white" />
          </div>
        </div>
        <div>
          <h1>Marry Doe</h1>
          <p>marry.doe@example.com</p>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam
        ipsa adipisci, quae perspiciatis neque excepturi porro asperiores eaque
        dicta nobis sapiente aspernatur tempora quam obcaecati libero corporis
        reiciendis deserunt.
      </div>
    </div>
  );
};

export default Profile;
