import {cors} from '@/pages/api/cors';
import {NextApiRequest, NextApiResponse} from 'next';
import path from 'path';
import fs from 'fs';

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
      const filePath = path.join(process.cwd(), 'public/data/booked.json');
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(jsonData);
      setTimeout(() => {
        res.status(200).json({
          data: data.data,
        });
      }, 500);
      break;
    case 'POST':

    case 'PUT':

    default:
      res.status(405).json({message: 'Method Not Allowed'});
      break;
  }
}
