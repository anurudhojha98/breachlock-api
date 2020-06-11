'use strict';
const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

const logDir = 'log';
// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const filename = path.join(logDir, 'error.log');
const logger = createLogger({
    exitOnError: false,
    level: 'error',
    format: format.combine(format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
        format.label({ label: path.basename(process.mainModule.filename) }),
        format.printf(
            info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
    ),

    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                format.colorize(),
                format.label({ label: path.basename(process.mainModule.filename) }),
                format.printf(
                    info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
                )
            )

        }),
        new transports.File({
            filename,
            level: 'error',
            format: format.combine(
                format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                format.colorize(),
                format.label({ label: path.basename(process.mainModule.filename) }),
                format.printf(
                    info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
                )
            )
        })]
});

module.exports = logger;