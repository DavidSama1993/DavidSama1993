var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base(key1) {
        this.prop1 = 1;
        this.prop2 = '1';
        this.prop3 = [];
        this.key1 = key1;
    }
    Base.prototype.fn1 = function (a) {
        console.log(a);
        console.log(this);
    };
    return Base;
}());
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub(key1, key2) {
        var _this = _super.call(this, key1) || this;
        _this.prop1 = 23423;
        _this.prop4 = {};
        _this.key2 = key2;
        return _this;
    }
    Sub.prototype.fn1 = function (a) {
        console.log(a);
        console.log(this);
    };
    return Sub;
}(Base));
var base = new Base(1);
var sub = new Sub(222, '234234');
console.log(base, sub);
