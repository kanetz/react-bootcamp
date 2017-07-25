import Rx from 'rxjs';
import {combineEpics} from 'redux-observable';

import * as actions from './actions';

const loadEpic = action$ => action$.ofType(actions.load.toString())
    .mergeMap(action =>
        Rx.Observable.ajax.getJSON('/fake-data.json')
            .delay(2000)
            .map(data => actions.loadFulfilled(data))
            .catch(error => Rx.Observable.of(actions.loadFulfilled(error)))
    );

const likeEpic = action$ => action$.ofType(actions.like.toString())
    .map(action => actions.likeFulfilled(action.payload));

const removeEpic = action$ => action$.ofType(actions.remove.toString())
    .map(action => actions.removeFulfilled(action.payload));

export default combineEpics(
    loadEpic,
    likeEpic,
    removeEpic,
);
