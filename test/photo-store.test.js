import PhotoStore from '../src/photo-store.js';
import {expect} from 'chai'

describe('PhotoStore', () => {
    'use strict';
    let store;

    beforeEach(() => {
        store = new PhotoStore();
    });

    describe('add(photo)', () => {
        it('should add into photoMap the given photo and return the new id', () => {
            const id = store.add({});

            expect(id).to.be.equal(1);
            expect(store.find().length).to.be.equal(1);
        });
    });

    describe('get(id)', () => {
        it('should get the photo matching with the given id', () => {
            const id = 1;
            const description = 'description';
            const url = 'url';

            store.add({description: description, url: url});

            const expectedPhoto = {id: id, description: description, url: url};
            expect(store.get(id)).to.deep.equal(expectedPhoto)
        });

        it('should throw error when no photo matching the given id', () => {
            const invalidId = 1;
            const expectedErrorMessage = `Cannot get photo with an non-existent id ${invalidId}`;

            expect(() => store.get(invalidId)).to.throw(expectedErrorMessage);
        });
    });

    describe('remove(id)', () => {
        it('should remove from store the photo matching the given id', () => {
            const id = store.add({});
            const anotherId = store.add({});

            store.remove(id);

            expect(store.find().length).to.equal(1);
            expect(() => store.get(id)).to.throw();
            expect(() => store.get(anotherId)).to.not.throw();
        });

        it('should throw error when no photo matching the given id', () => {
            const invalidId = 1;
            const expectedErrorMessage = `Cannot remove photo with an non-existent id ${invalidId}`;

            expect(() => store.remove(invalidId)).to.throw(expectedErrorMessage);
        });
    });

    describe('edit(photo)', () => {
        it('should update the photo with an existing id', () => {
            const id = store.add({});
            const description = 'description';
            const url = 'url';

            store.update({id: id, description: description, url: url});

            expect(store.get(id)).to.deep.equal({id: id, description: description, url: url});
        });

        it('should throw error when no photo matching the given id', () => {
            const invalidId = 1;
            const expectedErrorMessage = `Cannot update photo with an non-existent id ${invalidId}`;

            expect(() => store.update({id: invalidId})).to.throw(expectedErrorMessage);
        });
    });

    describe('find(term)', () => {
        it('should return photos matching the given term against description', () => {
            const id = store.add({description: 'irrelevantTerm targetTerm'});
            store.add({description: 'irrelevantTerm'});

            const matchedPhotos = store.find('targetTerm');

            expect(matchedPhotos.length).to.equal(1);
            expect(matchedPhotos[0].id).to.equal(id);
        });

        it('should return all photos when no term is given', () => {
            store.add({});
            store.add({});

            expect(store.find().length).to.equal(2);
        });
    });
});
