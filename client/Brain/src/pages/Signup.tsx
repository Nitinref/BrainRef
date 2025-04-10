import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useRef } from "react"
export function Signup() {

    const usernameRef = useRef<HTMLInputElement| null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
       const  navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
           
                username,
                password
            

        })
        navigate("/signin")
        alert("You have signed up")
    }


    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">


        <div className="bg-white rounded-xl border min-w-50 border-gray-300 p-8 ">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
            <div className="flex justify-center pt-4">


                <Button onClick={signup} variant="primary" text="Signup" fullWidth={true} />
            </div>
        </div>
    </div>
}