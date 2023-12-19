'use strict';

const db = require('../database');
const BaseModel = require('./baseModel');

class Role extends BaseModel {
    constructor() {
        super('Role');
    }

    async addGrant(roleId, grantId) {
        const [rows] = await db.execute(`SELECT * FROM ${this.tableName} WHERE id = ? AND FIND_IN_SET(?, TRIM(grants))`, [roleId, grantId]);
        if (rows.length > 0) {
            throw new Error(`Grant with id ${grantId} already exists in role with id ${roleId}`);
        } else {
            return await db.execute(`UPDATE ${this.tableName} SET grants = CONCAT(grants, ?) WHERE id = ?`, [grantId + ',', roleId]);
        }
    }
}

module.exports = new Role();