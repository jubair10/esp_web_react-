/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, query } from "firebase/database";
import { fireNotification, gasNotification } from "../utils/Notifications";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyATLck7bu6T8VKEamSiBe1WQogeb2lf1mI",
  authDomain: "project-aurixeon.firebaseapp.com",
  databaseURL: "https://project-aurixeon-default-rtdb.firebaseio.com",
  projectId: "project-aurixeon",
  storageBucket: "project-aurixeon.appspot.com",
  messagingSenderId: "1046166625004",
  appId: "1:1046166625004:web:ddf00feb706931cfcb63c9",
  measurementId: "G-CNE9P34WPM",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const RealtimeUpdates = ({ setData }) => {
  const [latestData, setLatestData] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, "data");
    const latestDataQuery = query(dataRef);

    onValue(latestDataQuery, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setLatestData(data);
        setData(data);

        // pop-up notifications
        if (data["fire_detected"]) fireNotification();
        if (data["gas_detected"]) gasNotification();
      } else {
        console.log("No data available");
      }
    });

    return () => {
      setLatestData(null);
    };
  }, [setData]);

  return null
};

export default RealtimeUpdates;