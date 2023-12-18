'use strict';

const db = require('../database');
const NotFoundError = require("../notFoundError");

class BaseModel {
    constructor(tableName) {
        this.tableName = tableName;
    }

    async getAll() {
        return await db.execute(`SELECT * FROM ${this.tableName}`);
    }

    async getByField(field, value) {
        return await db.execute(`SELECT * FROM ${this.tableName} WHERE ${field} = ?`, [value]);
    }

    async add(values, uniqueField) {
        const [existingRows] = await this.getByField(uniqueField, values[uniqueField]);
        if (existingRows.length > 0) {
            throw new Error(`${this.tableName} with this ${uniqueField} already exists`);
        } else {
            const fields = Object.keys(values).join(',');
            const placeholders = Object.keys(values).map(() => '?').join(',');
            return await db.execute(`INSERT INTO ${this.tableName} (${fields}) VALUES (${placeholders})`, Object.values(values));
        }
    }

    async deleteById(id) {
        const [existingRows] = await this.getByField('id', id);
        if (existingRows.length === 0) {
            throw new NotFoundError(`${this.tableName} with this id is not exist`);
        } else {
            return await db.execute(`DELETE FROM ${this.tableName} WHERE id = ?`, [id]);
        }
    }
}

module.exports = BaseModel;