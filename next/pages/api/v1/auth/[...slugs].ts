// pages/api/v1/[...slugs].ts

import {cors} from '@/pages/api/cors';
import {NextApiRequest, NextApiResponse} from 'next';
const dataToken = {
  accessToken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXRoZW50aWNhdGlvbiIsImF1ZCI6Imcyay1hdWRpZW5jZSIsImlzcyI6Imh0dHA6Ly8wLjAuMC4wOjgwIiwiaWF0IjoxNjg2MDYzNTI2LCJ0eXBlIjoiQUNDRVNTIiwidXNlciI6eyJpZCI6MTIsInJvbGVUeXBlIjoyMH0sImV4cCI6MTY4NjA4MTUyNn0.m9p_SqnZVugHDmDVAG9c2fQNG027V561kNozTO26kiTRmDSWUHy6Z2T1-FjE5bINLRdFMn7G8Su4-rPf-LBYag',
  refreshToken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBdXRoZW50aWNhdGlvbiIsImF1ZCI6Imcyay1hdWRpZW5jZSIsImlzcyI6Imh0dHA6Ly8wLjAuMC4wOjgwIiwiaWF0IjoxNjg2MDYzNTI2LCJ0eXBlIjoiUkVGUkVTSCIsInVzZXIiOnsiaWQiOjEyLCJyb2xlVHlwZSI6MjB9LCJleHAiOjE2ODY2NjgzMjZ9.WqdGlmyew_GwNjAqgn9QL5QcmchDk5tZNb_LPFb5wNCu1GkC3lJLC_1uLQUmn_D3gOmd51Hu2BWhmUsflgKUtA',
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
      res.status(200).json({message: `User endpoint reached ${slugs}`});
      break;
    case 'POST':
      if (slugs[0] === 'sign-in') {
        const {email, password} = req.body;
        // Perform authentication logic here (e.g., validate email and password)

        res.status(200).json({data: {...dataToken}, email});
      } else if (slugs[0] === 'sign-up') {
        const {role, contactName, email, password, passwordRepeat} = req.body;
        res.status(200).json({success: true});
      } else if (slugs[0] === 'restore-by-email') {
        const {email} = req.body;
        res.status(200).json({success: true, email});
      } else if (slugs[0] === 'resend-email') {
        const {email} = req.body;
        res.status(200).json({success: true, email});
      } else {
        res.status(405).json({error: 'Method Not Allowed'});
      }
      break;
    case 'PUT':
      if (slugs[0] === 'confirm-email') {
        const {role, contactName, email, password, passwordRepeat} = req.body;
        const token = 'any-token';
        res.status(200).json({success: true});
      } else if (slugs[0] === 'restore-by-email') {
        const {confirmationToken} = req.body;
        res.status(200).json({success: true});
      } else {
        res.status(405).json({error: 'Method Not Allowed'});
      }
      break;
    default:
      res.status(405).json({message: 'Method Not Allowed'});
      break;
  }
}
