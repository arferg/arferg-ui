import React, {useEffect} from "react";
import "./header.scss"
import Option from "./Option";
import {ToastProvider} from "react-toast-notifications";
import {getHeaderDetails} from "../../store/header/Actions";


const Header = props => {
    const {
        options
    } = props

    useEffect(async () => {
        getHeaderDetails()
    }, [])

    return (
        <ToastProvider>
            <div className={"header"}>
                logo

                {options.map((option, index) =>
                    <Option key={index}
                            details={option}
                    />)}
            </div>
        </ToastProvider>
    )
}

export default Header