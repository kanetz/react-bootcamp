// @flow
'use strict';

function NonExistentIdError(id: number) {
    this.name = 'NonExistentIdError';
    this.message = `Cannot execute operation with an non-existent id [${id}].`;
}
NonExistentIdError.prototype = (new Error(): any);

export default NonExistentIdError;
