// @flow
'use strict';

class PhotoStore {
    photoMap: {[number]: {id: number, description: string, url: string}};
    newId: number;

    constructor() {
        this.photoMap = {};
        this.newId = 1;
    }

    find(term?: string): {id: number, description: string, url: string}[] {
        const allPhotos = (Object.values(this.photoMap): any);
        return (term: any) ?
            allPhotos.filter(photo => photo.description.includes(term)) :
            allPhotos;
    }

    add(photo: {description: string, url: string}): number {
        const id = this.newId++;
        this.photoMap[id] = {id, ...photo};
        return id;
    }

    get(id: number): {id: number, description: string, url: string} {
        const photo = this.photoMap[id];
        if(!photo) throw `Cannot get photo with an non-existent id ${id}`;

        return photo;
    }

    remove(id: number): void {
        if(!this.photoMap[id]) throw `Cannot remove photo with an non-existent id ${id}`;

        delete this.photoMap[id];
    }

    update(photo: {id: number, description: string, url: string}): void {
        const id = photo.id;
        if(!this.photoMap[id]) throw `Cannot update photo with an non-existent id ${id}`;

        this.photoMap[id] = photo;
    }

}

export default PhotoStore;
