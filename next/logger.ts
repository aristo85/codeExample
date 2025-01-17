// eslint-disable-next-line @typescript-eslint/no-explicit-any
import {graylog} from 'graylog2';

let logger: graylog | undefined;

if (typeof window === 'undefined') {
  // Check if we are on the server-side
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const graylog2 = require('graylog2');

  logger = new graylog2.graylog({
    servers: [{host: '173.212.230.84', port: 12201}],
    facility: 'g2k-next',
  });

  logger?.on('error', function (error: Error) {
    console.error('Error while trying to write to graylog2:', error);
  });

  if (process.env.NODE_ENV !== 'production') {
    // Additional logger setup for development only
  }
}

export function getAdditionalFieldsInfo(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  return {
    env: process.env.ENV,
    level: 6,
    Severity: 'INFO',
    timestamp: new Date().toISOString(),
    ...obj,
  };
}

export function getAdditionalFieldsError(
  obj: Record<string, unknown>,
  e?: Error | unknown,
): Record<string, unknown> {
  return {
    env: process.env.ENV,
    level: 3,
    Severity: 'ERROR',
    timestamp: new Date().toISOString(),
    StackTrace: e instanceof Error ? e.stack : e?.toString(),
    message: e instanceof Error ? e.message : 'Unexpected error',
    full_message: e instanceof Error ? e.message : 'Unexpected error',
    ...obj,
  };
}

export default logger;
