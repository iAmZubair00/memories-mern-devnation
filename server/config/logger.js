import winston from 'winston';
import Config from './config.js';

const { format, createLogger, transports } = winston;
const { printf, combine, timestamp, colorize, uncolorize } = format;

const winstonFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp}: ${level}: ${stack || message}`;
});

const logger = createLogger({
  level: Config.env === 'development' ? 'debug' : 'info',
  format: combine(
    timestamp(),
    winstonFormat,
    Config.env === 'development' ? colorize() : uncolorize()
  ),
  transports: [new transports.Console()],
});

export default logger;
