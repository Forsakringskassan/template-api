import {
    alternativesResponse_two,
    alternativesResponse_one,
} from "../../objects/Alternatives";
import {
    defineMock,
    createResponseByCookie,
} from "@forsakringskassan/apimock-express/helpers";

const cookie = "api-alternatives";

export default defineMock({
    meta: {
        title: "GET /api/template/alternatives",
        method: "GET",
        url: "/api/template/alternatives",
    },
    responses: [
        createResponseByCookie(cookie, "one-alternative", {
            label: "One alternative",
            status: 200,
            delay: 100,
            body: alternativesResponse_one,
        }),
        createResponseByCookie(cookie, "two-alternatives", {
            label: "Two alternatives",
            status: 200,
            delay: 100,
            body: alternativesResponse_two,
        }),
    ],
    defaultResponse: {
        status: 200,
        body: alternativesResponse_two,
    },
});
