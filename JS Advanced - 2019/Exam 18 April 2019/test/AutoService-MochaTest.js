const expect = require('chai').expect;
const AutoService = require('../02. Auto Service.js');

describe('testing AutoService', () => {
    describe('testing constructor parameters', () => {
        it('should return garage capacity!', () => {
            let service = new AutoService(20);
            expect(service.garageCapacity).to.equal(20);
        });

        it('should return default empty array!', () => {
            let service = new AutoService(20);
            expect(service.workInProgress).to.deep.equal([]);
        });

        it('should return default empty array back log work!', () => {
            let service = new AutoService(20);
            expect(service.backlogWork).to.deep.equal([]);
        });
    });

    describe('testing sign up for review function', () => {
        it('should return regiset client in workInProgress', () => {
            let service = new AutoService(20);
            service.signUpForReview('Ivan', 'EB1232AH', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Kaloqn', 'RB8888CX', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            expect(service.workInProgress.length).to.equal(2);
        });

        it('should return zero availible space', () => {
            let service = new AutoService(2);
            service.signUpForReview('Ivan', 'EB1232AH', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Kaloqn', 'RB8888CX', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            expect(service.availableSpace).to.equal(0);
        });

        it('should return 1 added client to back log work', () => {
            let service = new AutoService(2);
            service.signUpForReview('Ivan', 'EB1232AH', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Kaloqn', 'RB8888CX', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Asq', 'EB2233BK', {'engine': 'MFRGG11', 'transmission': 'FF4418kk', 'tires': 'broken'});
            expect(service.backlogWork.length).to.equal(1);
        });
    });

    describe('testing car info function', () => {
        it('should return info for client', () => {
            let service = new AutoService(2);
            service.signUpForReview('Ivan', 'EB1232AH', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Kaloqn', 'RB8888CX', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Asq', 'EB2233BK', {'engine': 'MFRGG11', 'transmission': 'FF4418kk', 'tires': 'broken'});
            expect(service.carInfo('RB8888CX', 'Kaloqn')).to.deep.equal( {plateNumber: 'RB8888CX', clientName: 'Kaloqn', carInfo: { engine: 'MFRGG23', transmission: 'FF4418ZZ', doors: 'broken', wheels: 'broken', tires: 'broken' } });
        });

        it('should return info for client in back log work!', () => {
            let service = new AutoService(2);
            service.signUpForReview('Ivan', 'EB1232AH', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Kaloqn', 'RB8888CX', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Asq', 'EB2233BK', {'engine': 'MFRGG11', 'transmission': 'FF4418kk', 'tires': 'broken'});
            expect(service.carInfo('EB2233BK', 'Asq')).to.deep.equal({ plateNumber: 'EB2233BK', clientName: 'Asq', carInfo: { engine: 'MFRGG11', transmission: 'FF4418kk', tires: 'broken' } });
        });

        it('should return invalid plate number for car info', () => {
            let service = new AutoService(2);
            service.signUpForReview('Ivan', 'EB1232AH', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Kaloqn', 'RB8888CX', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Asq', 'EB2233BK', {'engine': 'MFRGG11', 'transmission': 'FF4418kk', 'tires': 'broken'});
            expect(service.carInfo('BT2233BK', 'Asq')).to.deep.equal('There is no car with platenumber BT2233BK and owner Asq.');
        });

        it('should return invalid client name for car info', () => {
            let service = new AutoService(2);
            service.signUpForReview('Ivan', 'EB1232AH', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Kaloqn', 'RB8888CX', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Asq', 'EB2233BK', {'engine': 'MFRGG11', 'transmission': 'FF4418kk', 'tires': 'broken'});
            expect(service.carInfo('EB2233BK', 'Anna')).to.deep.equal('There is no car with platenumber EB2233BK and owner Anna.');
        });
    });

    describe('testing repair car function', () => {
        it('should return client repaired!', () => {
            let service = new AutoService(2);
            service.signUpForReview('Ivan', 'EB1232AH', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ'});
            service.signUpForReview('Kaloqn', 'RB8888CX', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Asq', 'EB2233BK', {'engine': 'MFRGG11', 'transmission': 'FF4418kk', 'tires': 'broken'});
            service.repairCar();
            service.repairCar();
            expect(service.repairCar()).to.equal('Your tires were repaired.');
        });

        it('should return car is fine, nothing repaired!', () => {
            let service = new AutoService(2);
            service.signUpForReview('Ivan', 'EB1232AH', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ'});
            service.signUpForReview('Kaloqn', 'RB8888CX', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Asq', 'EB2233BK', {'engine': 'MFRGG11', 'transmission': 'FF4418kk', 'tires': 'broken'});
            expect(service.repairCar()).to.equal('Your car was fine, nothing was repaired.');
        });

        it('should return repaired all part in the car!', () => {
            let service = new AutoService(2);
            service.signUpForReview('Ivan', 'EB1232AH', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ'});
            service.signUpForReview('Kaloqn', 'RB8888CX', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Asq', 'EB2233BK', {'engine': 'MFRGG11', 'transmission': 'FF4418kk', 'tires': 'broken'});
            service.repairCar();
            expect(service.repairCar()).to.equal('Your doors and wheels and tires were repaired.');
        });

        it('should return no client for repair', () => {
            let service = new AutoService(2);
            expect(service.repairCar()).to.equal('No clients, we are just chilling...');
        });
    });
});