import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useToast } from "@/context/toastContext";

const Toast = () => {
    const { toast, close } = useToast();

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        //Evita que el toast se cierre cuando se agrege uno nuevo 
        if (reason === 'clickaway') {
          return;
        }
    
        close();
      };

    return (
        <Snackbar
            open={toast.open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}>
            <Alert
                variant="filled"
                onClose={handleClose}
                severity={toast.type} sx={{ width: '100%' }}>
                {toast.message}
            </Alert>
        </Snackbar>
    );
};

export { Toast };
