import {getData} from '../../services/IndexPage/CustomServer'

export default {
    namespace: 'CustomServer',
    state: {
        data: {
            data: {
                result: []
            }
        },
        text: {},
    },

    reducers: {
        INIT(state, {payload}) {
            return Object.assign({}, {
                data: {
                    data: {
                        result: []
                    }
                },
                text: {},
            });
        },

        initData(state, {payload}) {
            state.data = payload;
            return Object.assign({}, state);
        },

        initText(state, {payload}) {
            state.text = payload;
            return Object.assign({}, state);
        },
    },

    effects: {
        * getValue({payload}, {call, put, select}) {
            yield put({type: 'initText', payload: payload});
            const result = yield call(getData, payload);
            if (JSON.stringify(result).indexOf('"err":') === -1) {
                yield put({type: 'initData', payload: result});
            }
        },
    },

    subscriptions: {},
};
