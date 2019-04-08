'use strict';

/**
 * API Server Module
 * @module src/router
 */


// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( `./middleware/500.js`);
const notFound = require( `./middleware/404.js` );
const v1Router = require( `./api/v1.js` );

// Prepare the express router
const router = express.Router();

// router Level MW
router.use(cors());
router.use(morgan('dev'));

router.use(express.json());
router.use(express.urlencoded({extended:true}));

// Routes
router.use(v1Router);

// Catchalls
router.use(notFound);
router.use(errorHandler);

  
module.exports = router;
