"use strict";

class PhotoStore {
    constructor(...photos) {
        this.store = photos.reduce((photo, store) => ({...store, [photo.id]: photo}), {});
    }

    find() {
        return Object.values(this.store);
    }
}

export default PhotoStore;
