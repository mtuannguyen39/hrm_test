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
          <div className={styles.container}>
            <h1 className={styles.text}>User Profile</h1>
            {user ? (
              <>
                <p key={user.id} className={styles.textContent}>Name: {user.name || "No Name Available"}</p>
                <p key={user.id} className={styles.textContent}>Email: {user.email || "No Email Available"}</p>
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        );
};

export default UserProfile;