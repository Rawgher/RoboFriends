import { CHANGE_SEARCH_FIELD } from "./constants";

export const setSearchField = (text) => ({
    // type is action taken -- all caps since it's a constant
    type: CHANGE_SEARCH_FIELD,
    // payload is what's returned from the action
    payload: text
});