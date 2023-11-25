import { Card } from "@/components/ui/card";
import { EmailInputRow, PasswordInputRow, SignInButtonRow } from "../prefabs";

function SignInForm() {
    const validation = () => {
        // validation
    };

    const handleSubmit = () => {
        // handle submit form
    }
    return (
        <Card>
            <div>
                <EmailInputRow />
            </div>
            <div>
                <PasswordInputRow />
            </div>
            <SignInButtonRow />
        </Card>
    )
}

export default SignInForm