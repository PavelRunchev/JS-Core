const expect = require('chai').expect;
const SoftUniFy = require('../03. Softunify.js');

describe('Testing SoftUniFy', function() {
    //test 1
    it('should return true by default allSongs', function() {
        let su = new SoftUniFy();
        expect(su.allSongs).to.deep.equal({});
    });

    //test 2
    it('should return all Artists and own songs!', function() {
        let su = new SoftUniFy();
        su.downloadSong('Nirvana', "Hell", "Knock");
        //su.downloadSong('Nirvana', "Sky", "Copy");
        expect(su.allSongs.hasOwnProperty('Nirvana')).to.equal(true);
    });

    //test 3 4 5 6 7 8 9
    it('should return message for not song in playlist!', function() {
        let su = new SoftUniFy();
        su.downloadSong('Nirvana', "Hell", "Knock");
        expect(su.playSong('diamond')).to.equal(`You have not downloaded a diamond song yet. Use SoftUniFy's function downloadSong() to change that!`);
    });

    //test 10
    it('should return rate in current artist', function() {
        let su = new SoftUniFy();
        expect(su.rateArtist('Rihanna')).to.equal('The Rihanna is not on your artist list.');
    });
});