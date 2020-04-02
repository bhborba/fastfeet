import produce from 'immer';

const INITIAL_STATE = {
    edit: null,
};

export default function edit(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_SUCCESS': {
                draft.edit = action.payload.user;
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.edit = null;
                break;
            }
            default:
        }
    });
}
