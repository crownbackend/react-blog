import User from "../../components/users/User.tsx";
import {useEffect, useState} from "react";
import {UserType} from "../../types/AuthTypes.ts";

export function Users() {

    const apiUrl = import.meta.env.VITE_APP_API_URL;
    const [users, setUsers] = useState([]);

    const info = JSON.parse(localStorage.getItem("user"))
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + info.token
    }

    console.log(headers)

    useEffect(() => {
        fetch(apiUrl + '/users', {
            method: 'GET',
            headers: headers
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then((data) => {
                setUsers(data.users)
            })
            .catch(err => {
                console.error('There was a problem with the fetch operation:', err);
            });
    }, [])

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox"/>
                            </label>
                        </th>
                        <th>Id</th>
                        <th>Mail</th>
                        <th>Nom</th>
                        <th>Date de création</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user: UserType, index: number) => (
                        <User
                            key={index}
                            id={user.id}
                            email={user.email}
                            firstName={user.firstname}
                            lastName={user.lastname}
                            createdAt={user.created_at}
                        />
                    ))}
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </>
    )
}