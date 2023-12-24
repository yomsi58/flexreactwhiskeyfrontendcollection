import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        protected: false
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard',
        protected: true
    }
]

export default routes