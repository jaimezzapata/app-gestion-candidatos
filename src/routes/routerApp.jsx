import Login from `../pages/Login`
import Dashboard from `../pages/Dashboard`
import Register from `../pages/Register`
import App from `../App`

export let routerApp = [
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/login",
        elemnt: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/dashboard",
        elemnt: <Dashboard/>
    }
    
]