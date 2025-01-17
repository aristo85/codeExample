import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import logger, {
  getAdditionalFieldsError,
  getAdditionalFieldsInfo,
} from '@/logger';
import path from 'path';

type ServerResponseData = {
  data: unknown | null;
  errorData: unknown | null;
};

type ServerResponse<Props> = GetServerSidePropsResult<Props> & {
  props: Props;
};

export const withLogging = (getServerSideProps: GetServerSideProps) => {
  return async (ctx: GetServerSidePropsContext) => {
    let serverSideProps;

    try {
      serverSideProps = await getServerSideProps(ctx);
    } catch (e) {
      logger?.error(
        'Unexpected Error',
        'An error occurred during getServerSideProps',
        getAdditionalFieldsError(
          {
            LoggerName: path.basename(__filename),
            headers: ctx.req?.headers,
            httpMethod: ctx.req?.method,
            originalUrl: ctx.req?.url,
            queryParameters: ctx.query,
            requestPath: ctx.resolvedUrl,
            responseStatus: ctx.res?.statusCode,
            responseHeaders: ctx.res?.getHeaders(),
          },
          e instanceof Error ? e : undefined,
        ),
      );
      return {
        props: {
          errorData: {
            status: 500,
            message: 'An unexpected error occurred.',
          },
        },
      };
    }

    const props = (serverSideProps as ServerResponse<ServerResponseData>).props;

    if (props.errorData) {
      logger?.error(
        'Error',
        'An error returned from backend',
        getAdditionalFieldsError(
          {
            LoggerName: path.basename(__filename),
            headers: ctx.req?.headers,
            httpMethod: ctx.req?.method,
            originalUrl: ctx.req?.url,
            queryParameters: ctx.query,
            requestPath: ctx.resolvedUrl,
            responseStatus: ctx.res?.statusCode,
            responseHeaders: ctx.res?.getHeaders(),
            responseBody: props.errorData,
          },
          props.errorData instanceof Error ? props.errorData : undefined,
        ),
      );
    } else {
      logger?.info(
        'Request',
        'Server side props request',
        getAdditionalFieldsInfo({
          // logging details here
          LoggerName: path.basename(__filename),
          headers: ctx.req?.headers,
          httpMethod: ctx.req?.method,
          originalUrl: ctx.req?.url,
          queryParameters: ctx.query,
          requestPath: ctx.resolvedUrl,
          responseStatus: ctx.res?.statusCode,
          responseHeaders: ctx.res?.getHeaders(),
          responseBody: props.data,
        }),
      );
    }

    return serverSideProps;
  };
};
