import React from "react";
import "@testing-library/jest-dom"
import {render} from "@testing-library/react"
import Header from "../Header"

jest.mock('../Option', () => () => <div/>)

const props = {
    options: []
};

describe("Header Tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("Should render ", () => {
        it("correctly with the product name", () => {
            const {asFragment} = render(<Header {...props}/>)
            expect(asFragment()).toMatchSnapshot()
        });
    })
})
