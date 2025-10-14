import alternatives from "./api/template/alternatives";
import ombud from "./api/template/ombud";

export { ombudResponse } from "./objects/Ombud";
export {
    alternativesResponse_one,
    alternativesResponse_two,
} from "./objects/Alternatives";

export const mockApi = [alternatives, ombud];
