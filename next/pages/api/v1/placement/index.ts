// pages/api/v1/[...slugs].ts

import {cors} from '@/pages/api/cors';
import {NextApiRequest, NextApiResponse} from 'next';
import path from 'path';
import fs from 'fs';
import {BookingCardProps} from '@/modules/placement/components/BookingCard';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const filePath = path.join(process.cwd(), 'public/data/placement.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  await cors(req, res);

  setTimeout(() => {
    res.status(200).json({
      data: data.bookingListData as BookingCardProps[],
    });
  }, 500);
}
