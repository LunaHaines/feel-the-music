import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showToast } from "../state-slices/toast/toast-slice";

function Test() {
    const dispatch = useDispatch();

    let payload = {
        body: 'it works!'
    }

    let handleClick = () => {
        dispatch(showToast(payload));
    }
    return (
        <>
            <Button onClick={() => handleClick()}>Show Notification</Button>
        </>
    )
}

export default Test;