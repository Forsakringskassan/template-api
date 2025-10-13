import { ombudResponse } from "../objects/Ombud";
import {
    defineMock,
    createResponseByCookie,
} from "@forsakringskassan/apimock-express/helpers";

const cookie = "api-ombud";

export default defineMock({
    meta: {
        title: "GET /api/ombud",
        method: "GET",
        url: "/api/ombud",
    },
    responses: [
        createResponseByCookie(cookie, "slow-response", {
            label: "Slow response",
            status: 200,
            delay: 3000,
            body: ombudResponse,
        }),
        createResponseByCookie(cookie, "slow-ok", {
            label: "Slow response",
            status: 200,
            delay: 100,
            body: ombudResponse,
        }),
        createResponseByCookie(cookie, "slow-not-found", {
            label: "Slow response",
            status: 204,
            delay: 100,
        }),
    ],
    defaultResponse: {
        status: 200,
        body: ombudResponse,
    },
});
