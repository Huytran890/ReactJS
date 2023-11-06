import { useUserContext } from "./Context";

export function Sidebar() {
    const user = useUserContext();

    return (
        <div>
            <div>{user.name}</div>
            {user.isSubscribed ? <div>Subscription Status: Rồi</div> : <div>Subscription Status: Chưa</div>}
        </div>
    );
}

export function Profile() {
    const user = useUserContext();

    return <div>{user.name}</div>;
}

