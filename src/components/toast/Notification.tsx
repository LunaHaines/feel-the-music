import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { hideToast, toastState } from "../../state-slices/toast/toast-slice"

function Notification() {
    const info = useSelector(toastState);
    const dispatch = useDispatch();

    return (
        <>
            <Toast onClose={() => dispatch(hideToast())} show={info.show} delay={3000} autohide>
                <Toast.Header>
                    {info.header}
                </Toast.Header>
                <Toast.Body>
                    {info.body}
                </Toast.Body>
            </Toast> 
        </>
    )
}

export default Notification;