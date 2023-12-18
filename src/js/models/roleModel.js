'use strict';

const db = require('../database');
const BaseModel = require('./baseModel');

class Role extends BaseModel {
    constructor() {
        super('Role');
    }

    async addGrant(roleId, grantId) {
        return await db.execute(`UPDATE ${this.tableName} SET grants = CONCAT(grants, ?) WHERE id = ?`, [grantId, roleId]);
    }
}

module.exports = Role;