/**
 * Created by doguhanuluca on 9/6/15.
 */
'use strict';
//require("babel").transform("code", { optional: ["runtime"] });

require("babel/register")({
    optional: ['es7.asyncFunctions']
});

console.log('hello world');

var connect = require('camo').connect;

var database;
var uri = 'mongodb://localhost:27017/animals';

async function connectToDb(){
    console.log('async connect');

    database = await connect(uri);
}

database = connectToDb();
console.log('connected');

var Document = require('camo').Document;

class Dog extends Document {
    constructor() {
        super('dogs');

        this.name = String;
        this.breed = String;
    }
}

var lassie = Dog.create({
    name: 'Lassie',
    breed: 'Collie'
});

console.log('saving');


async function saveLassie() {
    let l = await lassie.save();
    console.log(l.id);

    let lOne = await Dog.loadOne({ name: 'Lassie' });

    console.log('Got Lassie!');
    console.log('Her unique ID is', lOne.id);
}
saveLassie();