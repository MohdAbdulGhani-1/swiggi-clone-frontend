import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div style={{ display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",height: "100vh"}}>
            <h1>Oops! Something went wrong.!!</h1>
            <p>{error.statusText }</p>
        </div>
    );
};

export default ErrorPage;