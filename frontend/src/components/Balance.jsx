import { useEffect, useState } from "react"
import { Appbar } from "./Appbar"
import axios from "axios";

export const Balance = () => {
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/v1/account/balance',
            headers: {
                'Authorization': "Bearer " + localStorage.getItem("token")
            }
        };

        axios.request(config)
            .then(res => {
                setBalance(res.data.balance)
            })

    }, [])

    let userBalance = balance.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    })
    
    return (
        <>
            <div className="flex mt-2">
                <div className="font-bold text-lg ml-6">
                    Your Balance
                </div>
                <div className="font-medium text-md ml-4 mt-0.5">
                   {userBalance}
                </div>
            </div>
        </>
    )
}