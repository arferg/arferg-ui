import React, {useEffect} from "react";
import "./header.scss"
import Option from "./Option";
import {ToastProvider} from "react-toast-notifications";
import {getHeaderDetails} from "../../store/header/Actions";
import useGetStarWarsPerson from "../../hooks/useGetStarWarsPerson";


const Header = props => {
    const {
        options
    } = props

    const {data, isError, isLoading} = useGetStarWarsPerson("123")

    useEffect(async () => {
        getHeaderDetails()
    }, [])

    if (isLoading) return "Loading...";

    if (isError) return "An error has occurred: " + error.message;

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