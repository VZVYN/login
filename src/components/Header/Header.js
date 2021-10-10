import React from 'react'
import "./Header.css"
import {useSelector} from 'react-redux'
function Header() {
    const progress = useSelector(state => state.app.progress);
    const currentForm = useSelector(state => state.app.currentForm);
    return (
        <div className="logo">
            <div className="logo__text">
               {currentForm!==3?"Signup":"Thank you!"}
            </div>
            <div className="logo__progress" style={{background: `linear-gradient(to right, blue ${progress}%, transparent ${progress}%)`}}></div>
        </div>
    )
}
export default Header
