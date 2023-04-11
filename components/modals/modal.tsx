import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface ModalProps {
    title: string;
    children: JSX.Element;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ title, children, open, setOpen }: ModalProps) => {

    return (
        <Dialog  open={open} onClose={() => { setOpen(false) }}>
            <DialogTitle className="flex justify-center font-bold"> {title} </DialogTitle>
            <DialogContent>
                <div  >
                    {children}
                </div>
            </DialogContent>
        </Dialog>

    )
}

export { Modal }