import Following from "../pages/following/Following"
import Home from "../pages/home/Home"
import LoginCyberLearn from "../pages/login/LoginCyberLearn"


export const publicRoute = [
    {path: '/', component: Home },
    {path: '/following', component: Following },
    {path: '/login', component: LoginCyberLearn, layout: LoginCyberLearn },
    
]