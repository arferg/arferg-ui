import "regenerator-runtime/runtime"; // probably a better way
import configureMockStore from "redux-mock-store"
import MockAdapter from "axios-mock-adapter"
import thunk from "redux-thunk"
import axios from "axios"
import * as actions from "../actions"
import  * as Types  from "../types"

const mockStore = configureMockStore([thunk])
const mockRequest = new MockAdapter(axios)

describe("Header Actions", () => {
    let storeStub

    beforeEach(() => {
        storeStub = mockStore({})
    });

    afterEach(() => {
        mockRequest.reset();
    });

    it("should publish GET_HEADER_DETAILS_SUCCESS on 200 result from API", done => {
        const expectedAction = {
            payload: { test: "" },
            type: Types.GET_HEADER_DETAILS_SUCCESS
        };

        mockRequest.onGet().reply(200, { test: "" });
        storeStub.dispatch(actions.getHeaderDetails("12")).then(() => {
            expect(storeStub.getActions()[0].type).toEqual(Types.GET_HEADER_DETAILS_REQUEST);
            expect(storeStub.getActions()[1]).toEqual(expectedAction);
            done();
        });
    });

    it("should publish GET_PRODUCT_DEFINITION_ERROR on 500 result from API", done => {
        const response = {
            error: "error",
            path: "/",
            message: "Request failed with status code 500"
        };

        mockRequest.onGet().reply(500);
        storeStub.dispatch(actions.getHeaderDetails("")).then(() => {
            expect(storeStub.getActions()[0].type).toEqual(Types.GET_HEADER_DETAILS_REQUEST);
            expect(storeStub.getActions()[1].type).toEqual(Types.GET_HEADER_DETAILS_ERROR);
            expect(storeStub.getActions()[1].payload.message).toContain(response.message);
            done();
        });
    });

    it("should publish GET_DOCUMENTS_ERROR on not 200 result from API - network error response", done => {
        mockRequest.onGet().networkError();
        storeStub.dispatch(actions.getHeaderDetails("")).then(() => {
            expect(storeStub.getActions()[0].type).toEqual(Types.GET_HEADER_DETAILS_REQUEST);
            expect(storeStub.getActions()[1].type).toEqual(Types.GET_HEADER_DETAILS_ERROR);
            expect(storeStub.getActions()[1].payload.message).toContain("Network Error");
            done();
        });
    })
});
