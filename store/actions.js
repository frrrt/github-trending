import * as Types from './types';

// eslint-disable-next-line import/prefer-default-export
export const toggleStar = (id, currentRepoIds) => ({ type: Types.TOGGLE_STAR, id, currentRepoIds });
