import { useEffect } from "react";
import SignInForm from "./SignInForm";


const SignInPage = () => {
    useEffect(() => {
        // fetch data
    }, []);

    useEffect(() => {
        // second analytics events
    }, []);

    // other effects go here ...
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <SignInForm />
        </div>
    )
}

export default SignInPage