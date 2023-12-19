'use strict';

const db = require('../database');
const BaseModel = require('./baseModel');

class Origin extends BaseModel {
    constructor() {
        super('Origin');
    }
}

module.exports = new Origin();