import {cors} from '@/pages/api/cors';
import {NextApiRequest, NextApiResponse} from 'next';
const dataToken = {
  accessToken: 'any_access_Token',
  refreshToken: 'any_refresh_Token',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {method} = req;
  const {slugs} = req.query;

  await cors(req, res);

  if (!slugs) {
    res.status(200).json({message: `User endpoint reached base`});
    return;
  }
  switch (method) {
    case 'GET':
      res.status(200).json({
        success: true,
        data: {
          id: 1,
          firstName: 'Иван',
          lastName: 'Иванов',
          email: 'mail@mail.ru',
          phone: '79004565656',
          birthdayDate: '2010-01-01T12:00:00+01:00',
          commission: '13',
          company: 'Company',
        },
      });
      break;
    case 'POST':

    case 'PUT':

    default:
      res.status(405).json({message: 'Method Not Allowed'});
      break;
  }
}
