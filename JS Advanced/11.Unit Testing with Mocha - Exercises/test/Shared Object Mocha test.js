const expect = require('chai').expect;

let jsdom = require('jsdom-global')();
const $ = require('jquery');
const sharedObject = require("../05.Shared Object");


document.body.innerHTML =
    `<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>`;

describe("Shared Object Unit Tests", function () {
    before( () => global.$ = $);

    describe("initially name and income should be null", function () {
        it("should return null for initial name", function () {
            expect(sharedObject.name).to.be.null;
        });

        it("should return null for initial income", function () {
            expect(sharedObject.income).to.be.null;
        });
    });
   describe("changeName tests", function () {
       it("test empty string(name should be null)", function () {
           sharedObject.changeName("");
           expect(sharedObject.name).to.be.null;
       });

       it("test a non-empty string(name should not be null)", function () {
           sharedObject.changeName("Pesho");
           expect(sharedObject.name).to.be.equal('Pesho', 'Name did not change correctly!');
       });

       describe("Name input tests", function () {
          it("test empty string(name should be null)", function () {
              sharedObject.changeName('Nakov');
              sharedObject.changeName('');
              let nameText = $('#name');
              expect(nameText.val()).to.be.equal('Nakov', "Name did not change correctly!");
          });

          it("test a non-empty string(name should not be null)", function () {
               sharedObject.changeName("Pesho");
               let nameText = $('#name');
               expect(nameText.val()).to.be.equal("Pesho", 'Name did not change correctly!');
          });
       });
   });

    describe("changeIncome tests", function () {
        it("test with a string (should stay null)", function () {
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });

        it("test with a positive number", function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5, "Income did not change correctly");
        });

        it("test with a floating-point", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.be.equal(5, "Income did not change correctly");
        });

        it("test with a negative number", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.be.equal(5, "Income did not change correctly");
        });

        it("test with a zero", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5, "Income did not change correctly");
        });

        describe("Income input tests", function () {
            it("test with a string", function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', "Income input did not change correctly")
            }) ;

            it("test with positive value", function () {
                sharedObject.changeIncome(5);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', "Income input did not change correctly")
            }) ;

            it("test with floating-point value", function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(5.55);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', "Income input did not change correctly")
            }) ;

            it("test with negative value", function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-4);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', "Income input did not change correctly")
            }) ;
        });
    });

    describe("updateName tests", function () {
        it("test with an empty string", function () {
            sharedObject.changeName('Viktor');
            let name = $('#name');
            name.val("");
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Viktor', "Name did not update")
        });

        it("test with an non-empty string", function () {
            sharedObject.changeName('Viktor');
            let name = $('#name');
            name.val("Gosho");
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Gosho');
        });
    });

    describe("updateIncome tests", function () {
        it("test with a string", function () {
            sharedObject.changeIncome(6);
            let incomeElement = $('#income');
            incomeElement.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(6, "Income to not update");
        });

        it("test with a floating-point number", function () {
            sharedObject.changeIncome(6);
            let incomeElement = $('#income');
            incomeElement.val('3.77');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(6, "Income to not update");
        });

        it("test with a negative number", function () {
            sharedObject.changeIncome(6);
            let incomeElement = $('#income');
            incomeElement.val('-3');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(6, "Income to not update");
        });

        it("test with a zero", function () {
            sharedObject.changeIncome(6);
            let incomeElement = $('#income');
            incomeElement.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(6, "Income to not update");
        });

        it("test with a positive number", function () {
            sharedObject.changeIncome(6);
            let incomeElement = $('#income');
            incomeElement.val(11);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(11, "Income to the updated");
        });
    });
});



//-Initial value
//--test that name is null
//-- test that income is null
//-ChangeName tests
//--test if name is an empty string
//--test with a non-empty string
//--same tests for the name input element
//-ChangeIncome tests
//--test with a string
//--test with a floating-point
//--test with a negative number
//--test with zero
//--same tests for the name input element
//--test with correct value
//-UpdateName tests
//--test with an empty string
//test with a non-empty string
//-UpdateIncome tests
//--test with a string
//--test with a floating-point
//--test with a negative number
//--test with zero
//--test with correct value