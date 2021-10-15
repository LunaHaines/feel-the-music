import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { hideToast, toastState } from "../../toast-slice"

function Notification() {
    const info = useSelector(toastState);
    const dispatch = useDispatch();

    return (
        <>
            <Toast onClose={() => dispatch(hideToast())} show={info.show} delay={3000} autohide>
                </Toast> 
        </>
    )
}

export default Notification;