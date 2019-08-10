const expect = require('chai').expect;
const FilmStudio = require('../2. Film Studio/filmStudio.js');

describe('testing Film Studio', function() {
    it('shoudl return empty array by default', () => {
        let fs = new FilmStudio('Adventure');
        expect(fs.films).to.deep.equal([]);
    });

    it('shoudl return film name at initialite', () => {
        let fs = new FilmStudio('Adventure');
        expect(fs.name).to.deep.equal('Adventure');
    });

    describe('testing make movie function', () => {
        it('shoudl return throw invalid parameters counts', () => {
            let fs = new FilmStudio('Studio');
            expect(() => fs.makeMovie('Adventure', ['Spider-Man'], 'Coupe')).to.throw('Invalid arguments count');
        });

        it('shoudl return throw invalid first parameters', () => {
            let fs = new FilmStudio('Studio');
            expect(() => fs.makeMovie({}, ['Spider-Man'])).to.throw('Invalid arguments');
        });

        it('shoudl return throw invalid second parameters', () => {
            let fs = new FilmStudio('Studio');
            expect(() => fs.makeMovie('Adventure', 5)).to.throw('Invalid arguments');
        });

        it('shoudl return obect with film', () => {
            let fs = new FilmStudio('Studio');
            expect(fs.makeMovie('Avengers', ['Spider-Man', 'Hulk'])).to.deep.equal({ filmName: 'Avengers', filmRoles: [ { role: 'Spider-Man', actor: false }, { role: 'Hulk', actor: false }]});
        });

        it('shoudl return obect with film series', () => {
            let fs = new FilmStudio('Studio');
            fs.makeMovie('Avengers', ['Spider-Man', 'Hulk']);
            expect(fs.makeMovie('Avengers', ['Spider-Man', 'Hulk'])).to.deep.equal({ filmName: 'Avengers 2', filmRoles: [ { role: 'Spider-Man', actor: false }, { role: 'Hulk', actor: false }]});
        });
    });

    describe('testing casting function', () => {
        it('should return not exist film', () => {
            let fs = new FilmStudio('Studio');
            expect(fs.casting('Keany Reavs', 'Spider-Man')).to.equal('There are no films yet in Studio.');
        });

        it('should return not exist role', () => {
            let fs = new FilmStudio('Studio');
            fs.makeMovie('Avengers', ['Spider-Man', 'Hulk']);
            expect(fs.casting('Keany', 'Iron-Man')).to.equal('Keany, we cannot find a Iron-Man role...');
        });

        it('should return artist get role', () => {
            let fs = new FilmStudio('Studio');
            fs.makeMovie('Avengers', ['Spider-Man', 'Hulk']);
            expect(fs.casting('Keany', 'Hulk')).to.equal('You got the job! Mr. Keany you are next Hulk in the Avengers. Congratz!');
        });
    });

    describe('testing look for producer function', () => {
        it('should return throw not exist film!', () => {
            let fs = new FilmStudio('Studio');
            expect(() => fs.lookForProducer('Star Wars')).to.throw('Star Wars do not exist yet, but we need the money...');
        });

        it('should return exist film', () => {
            let fs = new FilmStudio('Studio');
            fs.makeMovie('Avengers', ['Spider-Man', 'Hulk']);
            expect(fs.lookForProducer('Avengers')).to.equal(`Film name: Avengers\nCast:\nfalse as Spider-Man\nfalse as Hulk\n`);
        });
    });
});
