import {initialState, headerReducer} from "../Reducers";
import * as types from "../types";


const headerData = {
    something: "I am something",
    else: "something else"
}

const initializeReducerWith = (action, state) => headerReducer(state ?? initialState, action);

describe("ProductDefinition Reducer", () => {

    describe("GET_PRODUCT_DEFINITION_* tests", () => {
        it("should set isLoadingProductDefinition to true when GET_PRODUCT_DEFINITION_REQUEST received", () => {
            expect(initializeReducerWith({type: types.GET_HEADER_DETAILS_REQUEST})).toEqual({
                ...initialState, isLoading: true
            });
        });

        it("should return the product definition as a payload and set isLoadingProductDefinition to false when GET_PRODUCT_DEFINITION_SUCCESS received", () => {
            expect(initializeReducerWith({
                type: types.GET_HEADER_DETAILS_SUCCESS,
                payload: headerData
            })).toEqual({
                ...initialState, isLoading: false, productDefinition: headerData,
            });
        });

        it("should return error message as productDefinitionError and set isLoadingProductDefinition to false when GET_PRODUCT_DEFINITION_ERROR received", () => {
            const errorMessage = "Oh no, an error occurred fetching the specified product definition";
            expect(initializeReducerWith({
                type: types.GET_HEADER_DETAILS_ERROR,
                payload: errorMessage
            })).toEqual({
                ...initialState, isLoading: false, error: errorMessage
            });
        });
    });
})