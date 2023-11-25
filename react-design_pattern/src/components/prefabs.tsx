import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const EmailInputRow = () => {
    return <>
        <Label htmlFor="Email">Email</Label>
        <Input type="email" placeholder="Email" />
    </>
};

export const PasswordInputRow = () => {
    return <>
        <Label htmlFor="Password">Password</Label>
        <Input type="password" placeholder="Password" />
    </>
};

export const SignInButtonRow = () => {
    return <Button title="Sign In" />
};

