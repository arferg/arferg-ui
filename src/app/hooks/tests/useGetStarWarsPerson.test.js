import "regenerator-runtime/runtime"; // probably a better way
import React from "react";
import "@testing-library/jest-dom"
import {QueryClient, QueryClientProvider} from "react-query"
import {renderHook} from "@testing-library/react-hooks"
import useGetStarWarsPerson from "../useGetStarWarsPerson"
import {waitFor} from "@testing-library/react";
import swapiService from "../../services/SwapiService";

jest.mock("../../services/SwapiService")

describe("useGetStarWarsPerson Tests", () => {
    const wrapper = ({ children }) => (
        <QueryClientProvider client={new QueryClient()}>
            {children}
        </QueryClientProvider>
    )

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("Should ", () => {

        it("fetch star wars person data", async () => {
            swapiService.getStarWarsPerson.mockReturnValue({
                id: "123",
                name: "Luke Skywalker"
            })

            // hookWrapper allows the hook to be wrapped in react query stuff for testing
            const {result} = renderHook(() => useGetStarWarsPerson("123"), {wrapper})

            await waitFor(() => expect(result.current?.data).toEqual({
                id: "123",
                name: "Luke Skywalker"
            }))
        })
    })
})
