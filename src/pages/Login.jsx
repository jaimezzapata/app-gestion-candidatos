import { useState, useEffect } from "react"
import { end_points } from "../services/api"
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    function fetchUsers() {
        fetch(end_points.users)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((err) => setError(err))
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    function findUser() {
        let auth = users.some((item) => email == item.email && password == item.password)
        if (auth) {
            alert("Bienvenido al sistema...")
        } else {
            alert("Error de credenciales...")
        }
    }

    return (
        <div>
            <div class="flex flex-col items-center justify-center h-screen">
                <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Login</h2>
                    <form class="flex flex-col">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />
                        <div class="flex items-center justify-between flex-wrap">
                            <label for="remember-me" class="text-sm text-gray-900 cursor-pointer">
                                Remember me
                            </label>
                            <input onChange={() => setRemember(!remember)} type="checkbox" id="remember-me" class="mr-2" />
                            <a href="#" class="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
                            <p class="text-gray-900 mt-4"> Don't have an account? <a href="#" class="text-sm text-blue-500 -200 hover:underline mt-4">Signup</a></p>
                        </div>
                        <button onClick={findUser} type="button" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login    