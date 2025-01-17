export interface UrlQueries {
  [key: string]: unknown;
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export const getUrlQueries = (params: UrlQueries): string => {
  const queries = new URLSearchParams();

  for (const key in params) {
    const value = params[key];

    if (value !== undefined && value !== null && value !== '') {
      queries.append(key, String(value));
    }
  }

  return queries.toString();
};
