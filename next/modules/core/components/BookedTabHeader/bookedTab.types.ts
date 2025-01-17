export enum BookedCategories {
  all = 'ALL',
  excursion = 'EXCURSION',
  placement = 'PLACEMENT',
  guide = 'GUIDE',
  // TODO ADD LATER
  // instructor = 'INSTRUCTOR',
}

export interface Category {
  title: string;
  query: string;
}
