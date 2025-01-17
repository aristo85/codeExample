import {cors} from '@/pages/api/cors';
import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

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
      const filePath = path.join(process.cwd(), 'public/data/home.json');
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(jsonData);

      if (slugs[0] === 'general') {
        res.status(200).json(data);
      } else {
        res.status(405).json({error: 'Method Not Allowed'});
      }
      break;
    case 'POST':
      // Handle POST request
      break;
    case 'PUT':
      // Handle PUT request
      break;
    default:
      res.status(405).json({message: 'Method Not Allowed'});
      break;
  }
}
