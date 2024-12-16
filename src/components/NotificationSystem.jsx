/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSnackbar } from "notistack";

const NotificationSystem = ({ data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const fireNotification = () => {
    enqueueSnackbar("🔥 Fire Ignited!", {
      variant: "warning",
      style: {
        backgroundColor: "#a70002",
        color: "#fff",
        padding: "1em",
        borderRadius: "1rem",
      },
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  const gasNotification = () => {
    enqueueSnackbar("💨 Gas Detected! Take immediate action.", {
      variant: "warning",
      style: {
        backgroundColor: "#ecbe00",
        color: "#fff",
        padding: "1em",
        borderRadius: "1rem",
      },
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  // Trigger Notifications based on data changes
  useEffect(() => {
    if (data.fire) {
      fireNotification();
    }
    if (data.gas) {
      gasNotification();
    }
  }, [data]);

  return null;
};

export default NotificationSystem;
