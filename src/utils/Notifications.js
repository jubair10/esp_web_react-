import { enqueueSnackbar } from "notistack";

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


export { fireNotification, gasNotification };
