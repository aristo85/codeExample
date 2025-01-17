import {NextApiRequest, NextApiResponse} from 'next';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(
    process.cwd(),
    'public/data/placement-detail.json',
  );
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const {data} = JSON.parse(jsonData);
  res.status(200).json({
    data,
  });
}
