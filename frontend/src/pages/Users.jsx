import { useEffect, useState } from "react"
import axios from "axios"
import { SearchBox } from "../components/SearchBox"
import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(res => {
                setUsers(res.data.user)
            })
    }, [filter])

    return (
        <>
            <div className="flex mt-4 ml-6 font-bold text-md">
                Users
            </div>
            <SearchBox placeholder={"Search users..."} onChange={(e) => setFilter(e.target.value)} />
            <div>
                {users.map((user, key) => <User user={user} />)}
            </div>
        </>
    )
}

function User({user}) {
    let navigate = useNavigate()

    function clickHandler() {
        navigate("/sendmoney?id=" + user._id + "&name=" + user.firstName);
    }
    return (
        <div className="mx-6 my-1 flex justify-between">
            <div className="flex">
                <div className="rounded-full w-12 h-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-md uppercase font-medium text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="mb-4 flex flex-col justify-center h-full ml-1  font-medium">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <div>
                <Button label={"Send Money"} onClick={clickHandler}/>
            </div>
        </div>
    )
}