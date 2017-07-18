// @flow

import { NonExistentIdError } from './errors';

type Photo = {id: number, description: string, url: string};

class PhotoStore {
    photoMap: {[number]: Photo};
    newId: number;

    constructor() {
        this.photoMap = {};
        this.newId = 1;
    }

    find(term?: string): Photo[] {
        const allPhotos = (Object.values(this.photoMap): any);
        return term ?
            allPhotos.filter(photo => photo.description.includes(((term: any): string))) :
            allPhotos;
    }

    add(photo: {description: string, url: string}): number {
        const id = this.newId++;
        this.photoMap[id] = {id, ...photo};
        return id;
    }

    get(id: number): Photo {
        const photo = this.photoMap[id];
        if(!photo) throw new NonExistentIdError(id);

        return photo;
    }

    remove(id: number): void {
        if(!this.photoMap[id]) throw new NonExistentIdError(id);

        delete this.photoMap[id];
    }

    edit(photo: Photo): void {
        const id = photo.id;
        if(!this.photoMap[id]) throw new NonExistentIdError(id);

        this.photoMap[id] = photo;
    }

}

export default PhotoStore;
