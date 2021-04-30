import React from "react";
import "./something.scss";
import {SomethingContainer, Test} from "./StyledSomething";

export const Something = (props) => {
    const {

    } = props


    return (
        <SomethingContainer>
            I Am Something
            <Test primary={false}>
                yes. i am indeed.
            </Test>
        </SomethingContainer>
    )
}