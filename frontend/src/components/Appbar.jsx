import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

export const Appbar = () => {
    const navigate = useNavigate()

    function clickHandler() {
        localStorage.removeItem("token")
        navigate('/signin')
    }
    return (
        <nav className="bg-white h-14 shadow flex justify-between">
            <div className="font-bold flex flex-col justify-center ml-4">
                PayU App
            </div>
            <div className="flex">
                <div className="font-medium flex flex-col justify-center h-full mr-4">
                    Hello
                </div>
                <div className="rounded-full bg-slate-200 flex justify-center h-12 w-12 mt-1 mr-2">
                    <div className="font-bold flex flex-col justify-center h-full text-xl">
                        U
                    </div>
                </div>
                <div className="flex flex-col justify-center mr-4 mb-2">
                    <Button label={"Logout"} onClick={clickHandler} />
                </div>
            </div>
        </nav>
    )
}