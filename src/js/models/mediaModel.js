'use strict';

const db = require('../database');
const BaseModel = require('./baseModel');

class Media extends BaseModel {
    constructor() {
        super('Media');
    }

    async search(keyword) {
        return await db.execute(
           `SELECT * FROM Media 
            WHERE type LIKE ? OR 
                  url LIKE ? OR 
                  name LIKE ? OR 
                  metadate LIKE ? OR
                  Origin_id IN (SELECT id FROM Origin WHERE name LIKE ?)`, 
            new Array(5).fill(`%${keyword}%`));
    }
}

module.exports = new Media();