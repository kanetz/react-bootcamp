import PhotoStore from "../src/photo-store.js";
import {expect} from "chai"

describe("PhotoStore", () => {
    "use strict";
    let store;

    beforeEach(() => { store = new PhotoStore(); });

    it("should initialize with given photos", () => {
        store = new PhotoStore({});
        expect(store.find()).to.deep.equal([{}]);
    });
});
