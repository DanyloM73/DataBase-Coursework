# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних


```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Origin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Origin` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Origin` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  `rating` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Media`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Media` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Media` (
  `id` INT NOT NULL,
  `type` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `metadate` VARCHAR(45) NULL,
  `Origin_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Media_Origin_idx` (`Origin_id` ASC) VISIBLE,
  CONSTRAINT `fk_Media_Origin`
    FOREIGN KEY (`Origin_id`)
    REFERENCES `mydb`.`Origin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `grants` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`User` ;

CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `login` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `Role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Request` (
  `id` INT NOT NULL,
  `desription` VARCHAR(45) NULL,
  `Media_id` INT NOT NULL,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Media_id`),
  INDEX `fk_Request_Media1_idx` (`Media_id` ASC) VISIBLE,
  INDEX `fk_Request_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Request_Media1`
    FOREIGN KEY (`Media_id`)
    REFERENCES `mydb`.`Media` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Request_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Grant` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Grant` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `Role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Role_id`),
  INDEX `fk_Grant_Role1_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

## RESTfull сервіс для управління даними

RESTful сервіс для управління даними розроблено на мові програмування JavaScript з використанням фреймворку Fastify.

### Головний файл та файл підключення до бази даних

- `server.js`

```js
'use strict';

const fastify = require('fastify')({ logger: true });
const mediaRoutes = require('./routes/mediaRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');
const originRoutes = require('./routes/originRoutes');
const requestRoutes = require('./routes/requestRoutes');

fastify.addHook('onError', (request, reply, error, done) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal server error';
    reply.code(statusCode).send({ error: message });
    done();
});

fastify.register(mediaRoutes, { prefix: '/media' });
fastify.register(userRoutes, { prefix: '/user' });
fastify.register(roleRoutes, { prefix: '/role' });
fastify.register(originRoutes, { prefix: '/origin' });
fastify.register(requestRoutes, { prefix: '/request' });

const startServer = async () => {
    try {
        await fastify.listen({ port: 3001 })
        console.log(`Server is running on ${fastify.server.address().port}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

startServer();
```

- `database.js`

```js
'use strict';

require('dotenv').config();

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = pool.promise();
```

### Файли моделей

- `baseModel.js` - файл, у якому реалізовано абстрактний клас BaseModel, що містить у собі основні методи моделей

```js
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
```

- `mediaModel.js`

```js
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
```

- `originModel.js`

```js
'use strict';

const db = require('../database');
const BaseModel = require('./baseModel');

class Origin extends BaseModel {
    constructor() {
        super('Origin');
    }
}

module.exports = new Origin();
```

- `requestModel.js`

```js
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
            return await Media.getByField('id', requestRows[0]['Media_id']);
        }
    }
}

module.exports = new Request();
```

- `roleModel.js`

```js
'use strict';

const db = require('../database');
const BaseModel = require('./baseModel');

class Role extends BaseModel {
    constructor() {
        super('Role');
    }

    async addGrant(roleId, grantId) {
        const [rows] = await db.execute(`SELECT * FROM ${this.tableName} WHERE id = ? AND FIND_IN_SET(?, grants)`, [roleId, grantId]);
        if (rows.length > 0) {
            throw new Error(`Grant with id ${grantId} already exists in role with id ${roleId}`);
        } else {
            return await db.execute(`UPDATE ${this.tableName} SET grants = CONCAT(grants, ?) WHERE id = ?`, [grantId + ',', roleId]);
        }
    }
}

module.exports = new Role();
```

- `userModel.js`

```js
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
```

### Файли контролерів

- `mediaController.js`

```js
'use strict';

const Media = require('../models/mediaModel');

const addMedia = async (request, reply) => {
    const [rows, fields] = await Media.add(request.body, 'url');
    reply.send({ message: 'Media added...' });
};

const searchMedia = async (request, reply) => {
    const [rows, fields] = await Media.search(request.params.keyword);
    reply.send(rows);
};

const deleteMediaById = async (request, reply) => {
    const [rows, fields] = await Media.deleteById(request.params.id);
    reply.send({ message: 'Media deleted...' });
};

module.exports = {
    addMedia,
    searchMedia,
    deleteMediaById
};
```

- `originController.js`

```js
'use strict';

const Origin = require('../models/originModel');

const addOrigin = async (request, reply) => {
    const [rows, fields] = await Origin.add(request.body);
    reply.send({ message: 'Origin added...' });
};

const deleteOriginById = async (request, reply) => {
    const [rows, fields] = await Origin.deleteById(request.params.id);
    reply.send({ message: 'Origin deleted...' });
};

module.exports = { 
    addOrigin,
    deleteOriginById
};
```

- `requestController.js`

```js
'use strict';

const Request = require('../models/requestModel');

const addRequest = async (req, reply) => {
    const [rows, fields] = await Request.add(req.body, 'User_id');
    reply.send({ message: 'Request added...' });
};

const getMediaByRequestId = async (req, reply) => {
    const [rows, fields] = await Request.getRequestAndMediaById(req.params.id);
    reply.send(rows);
};

const deleteRequestById = async (req, reply) => {
    const [rows, fields] = await Request.deleteById(req.params.id);
    reply.send({ message: 'Request deleted...' });
};

module.exports = {
    addRequest,
    getMediaByRequestId,
    deleteRequestById
};
```

- `roleController.js`

```js
'use strict';

const Role = require('../models/roleModel');

const addRole = async (request, reply) => {
    const [rows, fields] = await Role.add(request.body, 'name');
    reply.send({ message: 'Role added...' });
};

const addGrant = async (request, reply) => {
    const [rows, fields] = await Role.addGrant(request.params.id, request.params.grantId);
    reply.send({ message: 'Grant added to role...' });
};

const deleteRoleById = async (request, reply) => {
    const [rows, fields] = await Role.deleteById(request.params.id);
    reply.send({ message: 'Role deleted...' });
};

module.exports = { 
    addRole,
    addGrant,
    deleteRoleById
};
```

- `userController.js`

```js
'use strict';

const User = require('../models/userModel');

const getAllUsers = async (request, reply) => {
    const [rows, fields] = await User.getAll();
    reply.send(rows);
};

const getUserById = async (request, reply) => {
    const [rows, fields] = await User.getByField('id', request.params.id);
    reply.send(rows);
};

const addUser = async (request, reply) => {
    const [rows, fields] = await User.add(request.body, 'email');
    reply.send({ message: 'User added...' });
};

const deleteUserById = async (request, reply) => {
    const [rows, fields] = await User.deleteById(request.params.id);
    reply.send({ message: 'User deleted...' });
};

const updateUserRoleById = async (request, reply) => {
    const [rows, fields] = await User.updateRoleById(request.params.id, request.params.roleId);
    reply.send({ message: 'User role updated...' });
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    updateUserRoleById
};
```

### Файли шляхів

- `mediaRoutes.js`

```js
'use strict';

const mediaController = require('../controllers/mediaController');

const mediaRoutes = async (fastify, options) => {
    fastify.post('/', mediaController.addMedia);
    fastify.get('/search/:keyword', mediaController.searchMedia);
    fastify.delete('/:id', mediaController.deleteMediaById);
};

module.exports = mediaRoutes;
```

- `originRoutes.js`

```js
'use strict';

const originController = require('../controllers/originController');

const originRoutes = async (fastify, options) => {
    fastify.post('/', originController.addOrigin);
    fastify.delete('/:id', originController.deleteOriginById);
}

module.exports = originRoutes;
```

- `requestRoutes.js`

```js
'use strict';

const requestController = require('../controllers/requestController');

const requestRoutes = async (fastify, options) => {
    fastify.post('/', requestController.addRequest);
    fastify.get('/:id', requestController.getMediaByRequestId);
    fastify.delete('/:id', requestController.deleteRequestById);
};

module.exports = requestRoutes;
```

- `roleRoutes.js`

```js
'use strict';

const roleController = require('../controllers/roleController');

const roleRoutes = async (fastify, options) => {
    fastify.post('/', roleController.addRole);
    fastify.put('/:id/:grantId', roleController.addGrant);
    fastify.delete('/:id', roleController.deleteRoleById);
}

module.exports = roleRoutes;
```

- `userRoutes.js`

```js
'use strict';

const userController = require('../controllers/userController');

const userRoutes = async (fastify, options) => {
    fastify.get('/all', userController.getAllUsers);
    fastify.get('/:id', userController.getUserById);
    fastify.post('/', userController.addUser);
    fastify.delete('/:id', userController.deleteUserById);
    fastify.put('/:id/role/:roleId', userController.updateUserRoleById);
}

module.exports = userRoutes;
```

### Інше

- `notFoundError.js`

```js
'use strict';

class NotFoundError extends Error {
    constructor(msg) {
        super(msg);
        this.statusCode = 404;
    }
}

module.exports = NotFoundError;
```