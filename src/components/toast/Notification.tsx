import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { hideToast, toastState } from "../../state-slices/toast/toast-slice"
import logo from '../../logo.svg';

function Notification() {
    const info = useSelector(toastState);
    const dispatch = useDispatch();

    return (
        <>
            <Toast onClose={() => dispatch(hideToast())} show={info.show} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src={logo}
                        className='rounded me-2'
                        alt=''
                    />
                    <strong className='me-auto'>Feel The Music</strong>
                    <small className='text-muted'>just now</small>
                </Toast.Header>
                <Toast.Body>
                    {info.body}
                </Toast.Body>
            </Toast> 
        </>
    )
}

export default Notification;