import React from "react";
import "./something.scss";
import {SomethingContainer, Test} from "./StyledSomething";
import Header from "./header/Header";

export const Something = props => {
    const {

    } = props

    const options = [{
            label: "About Me",
            link: "/about-me"
        },
        {
            label: "Projects",
            link: "/projects"
        },
        {
            label: "Cat Pictures",
            link: "/cat-pictures"
        }
    ]

    return (
        <>
            <Header options={options}/>
            <SomethingContainer>
                I Am Something
                <Test primary={false}>
                    yes. i am indeed.
                </Test>
            </SomethingContainer>
        </>
    )
}