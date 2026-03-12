import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';

function User1() {
    const { user, setUser } = useContext(UserContext);

    function handleChangeUser() {
        setUser({
            ...user,
            name: "manasass"
        });
    }

    return (
        <div>
            <button onClick={handleChangeUser}>Change</button>
        </div>
    )
}

export default User1
