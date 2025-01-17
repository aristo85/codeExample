import {Service} from '@/modules/profile/types';

export const serviceHandler = (
  allServices: Service[] | undefined,
): {
  mealService?: Service;
  transportService?: Service;
  anotherServices?: Service[];
} => {
  const mealService = allServices?.find(service => service.kind === 'Meal');

  // We don't know how to understand that we have transport service so there is only one method we can try
  const transportService = allServices?.find(
    service =>
      service.description.toLowerCase().includes('transport') ||
      service.description.toLowerCase().includes('транспорт'),
  );

  const anotherServices = allServices?.filter(
    service =>
      service?.id !== mealService?.id &&
      service?.id !== transportService?.id &&
      !service.mealPlanCode,
  );

  return {mealService, transportService, anotherServices};
};
