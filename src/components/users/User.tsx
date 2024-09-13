interface UserProps {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string
}
export default function User({id, email, firstName, lastName, createdAt}: UserProps) {
    return (
        <>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <td>
                    <div className="flex items-center">
                        <div>
                            {id}
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flex items-center">
                        <div>
                            <div className="font-bold">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {firstName} {lastName}
                </td>
                <td>{createdAt}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </>
    )
}