import { useEffect, useState } from "react";
import styles from '../../styles/userProfile.module.css';


type UserProfileType = {
    id: string;
    name: string;
    email: string;
}


const UserProfile = () => {
  const [user, setUser] = useState<UserProfileType | null>(null);
  
  useEffect(() => {
    const fetchUserProfile = async () => {
        const res = await fetch('/pages/api/user');
        const data = await res.json();
        console.log(data)
        setUser(data);
    };
    fetchUserProfile();
  }, []);

  console.log("User state:", user);

  return (
    <div className="text-center bg-gray p-5 rounded-2xl shadow-xl ">
      <h1 className="text-2xl text-black">User Profile</h1>
      {user ? (
        <>
          <p className="text-l text-black">Name: {user.name || "No Name Available"}</p>
          <p className="text-l text-black">Email: {user.email || "No Email Available"}</p>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default UserProfile;