import {getData} from '../../services/IndexPage/CommoditySearch'

export default {
    namespace: 'CommoditySearch',

    state: {
        data: {
            data: {
                data: [],
            },
        },
        text: {},
        switchVal: false,
    },

    reducers: {
        INIT(state, {payload}) {
            return Object.assign({}, {
                data: {
                    data: {
                        data: [],
                    },
                },
                text: {},
                switchVal: false,
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

        changeSwitchVal(state, {payload}) {
            state.switchVal = payload;
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
