import React from 'react';
import ErrorPage from 'next/error';

interface ErrorCustomPageProps {
  status?: number;
  message?: string;
}

const ErrorCustomPage: React.FC<ErrorCustomPageProps> = ({status, message}) => {
  const title = status?.toString().startsWith('5')
    ? 'Сервис недоступен'
    : message;
  return <ErrorPage title={title} statusCode={status ?? 500} />;
};

export default ErrorCustomPage;
