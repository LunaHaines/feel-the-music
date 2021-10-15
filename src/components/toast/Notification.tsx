import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { hideToast, toastState } from "../../state-slices/toast/toast-slice"
import logo from '../../logo.svg';

function Notification() {
    const info = useSelector(toastState);
    const dispatch = useDispatch();

    return (
        <>
            <ToastContainer position='bottom-start' style={{margin: '1rem'}}>
                <Toast onClose={() => dispatch(hideToast())} show={info.show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src={logo}
                            className='rounded me-2'
                            alt=''
                            width='25'
                            height='25'
                        />
                        <strong className='me-auto'>Feel The Music</strong>
                        <small className='text-muted'>just now</small>
                    </Toast.Header>
                    <Toast.Body>
                        {info.body}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default Notification;