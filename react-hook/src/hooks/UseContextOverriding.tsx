import { useState } from "react";
import Dashboard from "../utils/Dashboard";
import { DashboardContext } from "../utils/Context";

export interface User {
    isSubscribed: boolean;
    name: string;
}

//! useContext dùng để handle việc mà phải truyền state vào trong nested component như thế sẽ rất khó maintaining có nghĩa là chia sẻ dữ liệu global giữa cho component con với việc không truyền qua props

const UseContextOverriding = () => {
    const [user] = useState<User>({
        isSubscribed: true,
        name: 'You',
    });
    return (
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    )
}

export default UseContextOverriding