import { config } from 'dotenv';
import { existsSync } from 'fs';
import { resolve } from 'path';
import { logger } from './logger';

// Use .env if it exists, otherwise use the example
if (existsSync(resolve(__dirname, '../../../env/.env'))) {
  logger.debug('Using .env');
  config({ path: resolve(__dirname, '../../../env/.env') });
} else {
  logger.debug('Using .sample.env');
  config({ path: resolve(__dirname, '../../../env/.env.example') });
}
