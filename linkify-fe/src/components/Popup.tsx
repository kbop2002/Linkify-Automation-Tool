import React from "react";
import { Snackbar, Alert } from "@mui/material";

interface PopupProps {
  message: string;
  open: boolean;
  onClose: () => void;
  severity?: "error" | "warning" | "info" | "success";
}

const Popup: React.FC<PopupProps> = ({ message, open, onClose, severity = "error" }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Popup;
