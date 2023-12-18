'use strict';

const NotFoundError = require("../notFoundError");
const BaseModel = require("./baseModel");
const Media = require('./mediaModel');

class Request extends BaseModel {
    constructor() {
        super('Request');
    }

    async getRequestAndMediaById(id) {
        const [requestRows] = await this.getByField('id', id);
        if (requestRows.length === 0) {
            throw new NotFoundError(`Request with this id is not exist`);
        } else {
            const media = new Media();
            return await media.getByField('id', requestRows[0]['Media_id']);
        }
    }
}

module.exports = Request;