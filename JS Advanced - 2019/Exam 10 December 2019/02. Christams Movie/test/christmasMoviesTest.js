const expect = require('chai').expect;
const ChristmasMovies = require('../02. Christmas Movies_Resources');

describe('tests at ChristamsMovie class', function() {
	let cm;
	this.beforeEach(function() {
		cm = new ChristmasMovies();
	})
	describe('tests all initial properties', function() {
		//test 1
		it('Instantiation with no parameters', function() {
			expect(cm.movieCollection).to.eql([]);
			expect(cm.movieCollection.length).to.deep.equal(0);
			expect(cm.watched).to.eql({});
			expect(cm.actors).to.deep.equal([]);
			expect(cm.actors.length).to.deep.equal(0);
		});
	});

	describe('tests function buyMovie', function() {
		// test 2
		it('should return added corectly a movie', function() {
			expect(cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']))
			.to.equal('You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!');
		});

		it('should thrown error that exist a movie name', function() {
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			expect(() => cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']))
			.to.throw(Error, 'You already own Last Christmas in your collection!');
		});
	});

	describe('tests function discardMovie', function() {
		it('should throw error that no exist movie name', function() {
			expect(() => cm.discardMovie('The Grunch')).to.throw(Error, 'The Grunch is not at your collection!');
		});

		it('should throw error that no exist movie watch', function() {
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			expect(() => cm.discardMovie('Last Christmas')).to.throw(Error, 'Last Christmas is not watched!');
		});

		it('should return message that correctly remove a movie', function() {
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			cm.watchMovie('Last Christmas');
			expect(cm.discardMovie('Last Christmas')).to.equal('You just threw away Last Christmas!');
		});
	});

	describe('tests function watchMovie', function() {
		it('should throw error that no exist in collection list this a movie name', function() {
			expect(()=> cm.watchMovie('The Grunch')).to.throw(Error, 'No such movie in your collection!');
		});

		it('should return three watched a movie', function() {
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			cm.watchMovie('Last Christmas');
			cm.watchMovie('Last Christmas');
			cm.watchMovie('Last Christmas');
			expect(cm.watched['Last Christmas']).to.deep.equal(3);
		});
	});

	describe('tests function favouriteMovie', function() {
		it('should thtow error that empty watched collection', function() {
			expect(() => cm.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
		});

		it('should return a movie with the most watched', function() {
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
			cm.watchMovie('Last Christmas');
			cm.watchMovie('Last Christmas');
			cm.watchMovie('Last Christmas');
			cm.watchMovie('Home Alone');
			expect(cm.favouriteMovie()).to.equal('Your favourite movie is Last Christmas and you have watched it 3 times!');
		});
	});

	describe('tests function mostStarredActors', function() {
		//test 11
		it('should throw error that empty movieCollection', function() {
			expect(() => cm.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
		});
		//test 10
		it('should return the most played actor  in the movies', function() {
			cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
			cm.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
			cm.buyMovie('Home Alone 2', ['Macaulay Culkin']);
			cm.buyMovie('Home Alone 3', ['Macaulay Culkin', 'Emma Thompson']);
			cm.watchMovie('Home Alone');
			expect(cm.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 3 movies!');

		});
	});
});