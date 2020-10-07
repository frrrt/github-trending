import * as Types from '../types';

export const initialState = {
    starred: {},
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.TOGGLE_STAR: {
            const newStarred = { ...state.starred };

            // Delete old repo ids which are no longer in use
            (Object.keys(state.starred))
                .filter(x => !action.currentRepoIds.includes(Number(x)))
                .forEach(key => {
                    delete newStarred[key];
                });

            return {
                ...state,
                starred: {
                    ...newStarred,
                    [action.id]: !state.starred[action.id],
                },
            }; }
        default:
            return state;
    }
};
