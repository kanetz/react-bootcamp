import Rx from 'rxjs';
import {combineEpics} from 'redux-observable';

import {load, loadFulfilled} from './actions';

const loadEpic = action$ => action$.ofType(load.toString())
    .mergeMap(action =>
        Rx.Observable.ajax.getJSON('/fake-data.json')
            .map(data => loadFulfilled(data))
    );

export default combineEpics(loadEpic);
