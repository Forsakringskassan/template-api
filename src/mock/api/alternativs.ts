import { alternativesResponse } from "../objects/Alternatives";
import {
    defineMock,
    createResponseByCookie,
} from "@forsakringskassan/apimock-express/helpers";

const cookie = "api-alternatives";

export default defineMock({
    meta: {
        title: "GET /api/alternatives",
        method: "GET",
        url: "/api/alternatives",
    },
    responses: [
        createResponseByCookie(cookie, "slow-response", {
            label: "Slow response",
            status: 200,
            delay: 3000,
            body: alternativesResponse,
        }),
    ],
    defaultResponse: {
        status: 200,
        body: alternativesResponse,
    },
});
