
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
const nuke = require("../06.ArmageDOM");

describe("ArmageDOM Unit Tests", function () {
    let targethtml;
    let oldHtml;
    before( () => global.$ = $);
    beforeEach(function () {
        document.body.innerHTML = `<body>
    <div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
    </div>
    </body>`;
        targethtml = $('#target');
        oldHtml = targethtml.html();
    });

    it("test with invalid selector", function () {
        let selector1 = targethtml;
        let selector2 = 2;
        nuke(selector1, selector2);
        expect(targethtml.html()).to.be.equal(oldHtml);
    });

    it("test with equal selectors", function () {
        let selector1 = $('.inside');
        let oldValue = targethtml.html();
        nuke(selector1, selector1);
        expect(targethtml.html()).to.be.equal(oldValue);
    });


    it("test with two valid selectors", function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        nuke(selector1, selector2);
        expect(targethtml.html()).to.be.equal(oldHtml);
    });

    it("test with two valid selectors", function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        nuke(selector1, selector2);
        expect(targethtml.html()).to.not.be.equal(oldHtml);
    });
});