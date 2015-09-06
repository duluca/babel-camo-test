/**
 * Created by doguhanuluca on 9/6/15.
 */
'use strict';
//require("babel").transform("code", { optional: ["runtime"] });

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require("babel/register")({
    optional: ['es7.asyncFunctions']
});

console.log('hello world');

var connect = require('camo').connect;

var database;
var uri = 'mongodb://localhost:27017/animals';

function connectToDb() {
    return regeneratorRuntime.async(function connectToDb$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                console.log('async connect');

                context$1$0.next = 3;
                return regeneratorRuntime.awrap(connect(uri));

            case 3:
                database = context$1$0.sent;

            case 4:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this);
}

database = connectToDb();
console.log('connected');

var Document = require('camo').Document;

var Dog = (function (_Document) {
    _inherits(Dog, _Document);

    function Dog() {
        _classCallCheck(this, Dog);

        _get(Object.getPrototypeOf(Dog.prototype), 'constructor', this).call(this, 'dogs');

        this.name = String;
        this.breed = String;
    }

    return Dog;
})(Document);

var lassie = Dog.create({
    name: 'Lassie',
    breed: 'Collie'
});

console.log('saving');

function saveLassie() {
    var l, lOne;
    return regeneratorRuntime.async(function saveLassie$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return regeneratorRuntime.awrap(lassie.save());

            case 2:
                l = context$1$0.sent;

                console.log(l.id);

                context$1$0.next = 6;
                return regeneratorRuntime.awrap(Dog.loadOne({ name: 'Lassie' }));

            case 6:
                lOne = context$1$0.sent;

                console.log('Got Lassie!');
                console.log('Her unique ID is', lOne.id);

            case 9:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this);
}
saveLassie();

//# sourceMappingURL=index-compiled.js.map