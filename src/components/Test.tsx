import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showToast } from "../state-slices/toast/toast-slice";

function Test() {
    const dispatch = useDispatch();

    let payload = {
        body: 'it works!'
    }

    let otherPayload = {
        body: 'this works too!'
    }

    let handleClick = () => {
        dispatch(showToast(payload));
    }

    let handleOtherClick = () => {
        dispatch(showToast(otherPayload))
    }

    return (
        <>
            <Button onClick={() => handleClick()}>Show Notification</Button>
            <Button onClick={() => handleOtherClick()}>Show Other Notification</Button>
        </>
    )
}

export default Test;