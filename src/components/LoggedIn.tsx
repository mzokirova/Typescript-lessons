import { useState } from "react";


export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = () => { 
        setIsLoggedIn(true)
    };
    const handleLogout = () => { 
        setIsLoggedIn(false)
    };

    return (
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div>User {isLoggedIn ? 'logged in': 'log out'} </div>

        </div>
    )


}