import { reducer } from './githubTrending';
import * as Types from '../types';

describe('github trending reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            starred: {},
        });
    });

    it('should handle TOGGLE_STAR after initial state', () => {
        expect(
            reducer(undefined, {
                type: Types.TOGGLE_STAR,
                id: 666,
                currentRepoIds: [],
            }),
        ).toEqual({ starred: { 666: true } });
    });

    it('should handle toggle star off', () => {
        expect(
            reducer({ starred: { 42: true } }, {
                type: Types.TOGGLE_STAR,
                id: 42,
                currentRepoIds: [],
            }),
        ).toEqual({ starred: { 42: false } });
    });

    it('delete stale ids', () => {
        expect(
            reducer({ starred: { 42: true, 29384723894: true, 9812437: false } }, {
                type: Types.TOGGLE_STAR,
                id: 42,
                currentRepoIds: [42, 43, 44, 45],
            }),
        ).toEqual({ starred: { 42: false } });
    });
});
