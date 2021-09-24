import React from "react";
// import "@testing-library/jest-dom"
import {ToastProvider, useToasts} from 'react-toast-notifications'
import {render, fireEvent} from "@testing-library/react"
import Option from "../Option"
import {BrowserRouter} from "react-router-dom";

jest.mock('react-toast-notifications', () => (
    {
        ...(jest.requireActual('react-toast-notifications')),
        useToasts: jest.fn()
    }
))
const addToastMock = jest.fn()

const getComponent = (props) =>
    <BrowserRouter>
        <ToastProvider>
            <Option
                details={{
                    link: "/cats",
                    label: "Cat Pics"
                }}
                {...props} />
        </ToastProvider>
    </BrowserRouter>

describe("Option Tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        // after jest.fn() too
        useToasts.mockImplementation(() => ({
            addToast: addToastMock
        }))
    });

    describe("Should render ", () => {
        it("correctly with the label", () => {
            const {asFragment} = render(getComponent())
            expect(asFragment()).toMatchSnapshot()
        });
    })

    describe("Should call ", () => {
        it("addToast whenever the option is clicked", () => {
            const {getByText} = render(getComponent())
            const option = getByText("Cat Pics")

            fireEvent.click(option)
            expect(addToastMock).toHaveBeenCalledWith('Clicked Successfully', { appearance: 'success' })
        });

        it("onClick prop whenever provided and the option is clicked", () => {
            // spyOn only overrides for this test
            const alertMock = jest.spyOn(window,'alert').mockImplementation();

            const onClick = jest.fn()
            // const onClick = jest.fn(() => alert("hayooooo"))
            onClick.mockImplementation(() => alert("hayooooo"))
            // onClick.mockReturnValue("returned string")

            const {getByText} = render(getComponent({onClick}))
            const option = getByText("Cat Pics")

            fireEvent.click(option)
            expect(alertMock).toHaveBeenCalledWith("hayooooo")
        });
    })
})
