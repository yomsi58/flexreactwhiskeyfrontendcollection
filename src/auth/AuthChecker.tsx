import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithRedirect, onAuthStateChanged } from 'firebase/auth'
import { auth, Providers } from '../config/firebase.config'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({children}: Props) => {
    const navigate = useNavigate()
    const signInOnClick = async () => {
        const response = await signInWithRedirect(auth, Providers.google);
    }
    
    useEffect(() => {
        const auth_state = onAuthStateChanged(auth, (user:any) => {
            if (!user) {
                signInOnClick()
                navigate('/dashboard')
            }
        });
        return () => auth_state();

    }, [auth, navigate]);
    
    return (
    <> { children } </>
  )
}

export default AuthChecker
