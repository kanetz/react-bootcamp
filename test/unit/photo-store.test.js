// @flow

import PhotoStore from '../../src/photo-store.js';
import {NonExistentIdError} from '../../src/errors/index';
import {expect} from 'chai'

describe('PhotoStore', () => {
    let store;

    beforeEach(() => store = new PhotoStore());

    describe('add(photo)', () => {
        it('should add into photoMap the given photo and return the new id', () => {
            const id1 = store.add({});
            const id2 = store.add({});

            expect(id1).to.be.equal(1);
            expect(id2).to.be.equal(2);
            expect(store.find().length).to.be.equal(2);
        });
    });

    describe('get(id)', () => {
        it('should get the photo matching with the given id', () => {
            const id = 1;
            const description = 'description';
            const url = 'url';

            store.add({description: description, url: url});

            const expectedPhoto = {id: id, description: description, url: url};
            expect(store.get(id)).to.deep.equal(expectedPhoto);
        });

        it('should throw error when no photo matching the given id', () => {
            const invalidId = 1;
            expect(() => store.get(invalidId)).to.throw(NonExistentIdError, new RegExp(invalidId));
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
            expect(() => store.remove(invalidId)).to.throw(NonExistentIdError, new RegExp(invalidId));
        });
    });

    describe('edit(photo)', () => {
        it('should update the photo with an existing id', () => {
            const id = store.add({});
            const description = 'description';
            const url = 'url';

            store.edit({id: id, description: description, url: url});

            expect(store.get(id)).to.deep.equal({id: id, description: description, url: url});
        });

        it('should throw error when no photo matching the given id', () => {
            const invalidId = 1;
            expect(() => store.edit({id: invalidId})).to.throw(NonExistentIdError, new RegExp(invalidId));
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
            store.add({description: 'term1'});
            store.add({description: 'term2'});

            expect(store.find().length).to.equal(2);
        });

        it('should NOT throw exception on photos with description as NULL', () => {
            store.add({description: null});

            expect(() => store.find().length).to.not.throw;
        });

        it('should NOT throw exception on photos with NO description', () => {
            store.add({});

            expect(() => store.find().length).to.not.throw;
        });
    });
});
