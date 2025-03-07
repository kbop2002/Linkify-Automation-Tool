import React from "react";
import { useNavigate } from "react-router-dom";


const SettingsPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
        <h1>Settings Page</h1>
        <button onClick={()=>navigate('/dashboard')}>Home</button>
        </>
    )


}
interface Theme {
    primary: string
    secondary: string
    tertiary: string
    specialColors1: string
    specialColors2: string
    text1: string
    text2: string
}

interface SettingsPageProps {
    theme : Theme;
}


export default SettingsPage