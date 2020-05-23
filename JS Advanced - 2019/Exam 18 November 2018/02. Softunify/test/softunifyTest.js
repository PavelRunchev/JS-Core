const expect = require('chai').expect;
const SoftUniFy = require('../app');

describe('we are testing class SoftUniFy', function() {
	let suf;
	this.beforeEach(function() {
		suf = new SoftUniFy();
	});

	describe('we are testing that initialized allSongs property', function() {
		it('should return empty object that initialized allSongs property', function() {
			expect(suf.allSongs).to.deep.equal({});
		});
	});

	describe('we are testing that downloadSong functionality', function() {
		it('should return one song', function() {
			expect(suf.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...')).to.deep
			.equal({ "allSongs": { "Eminem": { rate: 0, votes: 0, songs: ['Phenomenal - IM PHENOMENAL...'] } } });
		});
	});

	describe('we are testing that playSong functionality', function() {
		it('should return one song', function() {
			suf.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
			expect(suf.playSong('Phenomenal')).to.equal('Eminem:\nPhenomenal - IM PHENOMENAL...\n');
		});

		it('should return no searched song', function() {
			suf.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
			expect(suf.playSong('Phenomenal1')).to.equal(`You have not downloaded a Phenomenal1 song yet. Use SoftUniFy's function downloadSong() to change that!`);
		});
	});

	describe('we are testing that rateArtist functionality', function() {
		//test 10
		it('should return zero rate', function() {
			suf.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
			suf.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar..');
			expect(suf.rateArtist('Eminem', 50)).to.equal(50);
		});
	});
});