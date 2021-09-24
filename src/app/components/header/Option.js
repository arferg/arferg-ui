import React from "react"
import {Link} from "react-router-dom"
import { useToasts } from 'react-toast-notifications'


const Option = props => {
    const {
        details,
        onClick
    } = props

    const { addToast } = useToasts();

    return (
        <div className={"option"}
             onClick={() => onClick ? onClick() : addToast('Clicked Successfully', { appearance: 'success' })}>
            {details.label}
        </div>
        // <Link to={details.link} >
        //     <div className={"option"}
        //          onClick={() => addToast('Clicked Successfully', { appearance: 'success' })}>
        //         {details.label}
        //     </div>
        // </Link>
    )
}

export default Option