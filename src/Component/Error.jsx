import { useRouteError } from "react-router-dom";

const Error = () => {
    console.log("Error fatch");
    const err = useRouteError()
    console.log(err);
    return (
        <>
            <h1>ERROR</h1>
            <h2 >Something wrong{err.status} {err.statusText}</h2>

        </>
    )
}
export default Error;
