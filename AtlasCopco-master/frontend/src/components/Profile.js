import IconWithText from "./IconWithText";
import styles from "../styles/Profile.module.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import Navbar from "./Navbar";
const Profile = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  return (
    <div>
      <Navbar selected={"profile"} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div className={styles["profile"]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <span className={styles["header"]}></span>

            <div style={{ marginBottom: "5px" }}>
              <IconWithText
                variant={"h5"}
                heading={<div className={styles["user"]}>Email</div>}
                content={
                  <div className={styles["user"]}>
                    : &nbsp;
                    <span>{authUser?.email}</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div className={styles["table"]}>
          <button style={{}} className={styles["btn-right"]}>
            Send Reminders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
