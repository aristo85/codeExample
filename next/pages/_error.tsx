import {NextPageContext} from 'next';
import logger, {getAdditionalFieldsError} from '@/logger';
import path from 'path';
import ErrorPage from 'next/error';

interface ErrorProps {
  statusCode: number | null;
}

const Error = ({statusCode}: ErrorProps) => {
  return (
    <ErrorPage
      statusCode={statusCode ?? 400}
      title={`Something went wrong on the client`}
    />
  );
};

Error.getInitialProps = ({res, err}: NextPageContext) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const statusCode = res ? res.statusCode : err ? (err as any).statusCode : 404;
  logger?.error(
    'Unexpected Error',
    `An error occurred ${statusCode ?? 'on client side'}`,
    getAdditionalFieldsError(
      {
        LoggerName: path.basename(__filename),
      },
      err instanceof Error ? err : undefined,
    ),
  );
  return {statusCode};
};

export default Error;
