// @flow
'use strict';

import React from 'react';
import {render} from 'react-dom';

render(
    <h1>Hello, React Bootcamp!</h1>,
    createRootElem('app')
);

function createRootElem(id: string) {
    let rootElem = document.createElement('div');
    rootElem.id = id;
    (document.body: any).appendChild(rootElem);
    return document.getElementById(id);
}
