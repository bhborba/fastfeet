export function editRequest(data) {
    return {
        type: '@recipient/EDIT_REQUEST',
        payload: { data },
    };
}

export function editSuccess() {
    return {
        type: '@recipient/EDIT_SUCCESS',
    };
}

export function editFailure() {
    return {
        type: '@recipient/EDIT_FAILURE',
    };
}

export function addRequest(data) {
    return {
        type: '@recipient/ADD_REQUEST',
        payload: { data },
    };
}

export function addSuccess() {
    return {
        type: '@recipient/ADD_SUCCESS',
    };
}

export function addFailure() {
    return {
        type: '@recipient/ADD_FAILURE',
    };
}
