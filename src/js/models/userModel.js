'use strict';

const db = require('../database');
const BaseModel = require('./baseModel');

class User extends BaseModel {
    constructor() {
        super('User');
    }
    
    async updateRoleById(userId, roleId) {
        return await db.execute(`UPDATE ${this.tableName} SET Role_id = ? WHERE id = ?`, [roleId, userId]);
    }
}

module.exports = new User();
