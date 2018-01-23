import {getData} from '../../services/IndexPage/CommoditySearch'

export default {
    namespace: 'CommoditySearch',

    state: {
        data: {
            data:{
                data: [],
            },
        },
        text: {},
    },

    reducers: {
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
