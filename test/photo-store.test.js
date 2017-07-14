import store from "../src/photo-store.js";

import chai from "chai"
chai.should();

describe('PhotoStore', () => {
    "use strict";

    it('should export an empty object', () => {
        store.should.be.empty;
    });
});
