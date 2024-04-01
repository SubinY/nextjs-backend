import { respData, respErr } from '../../lib/resp';
import { insertApplyUser } from '../../models/applyUser';
import { NextResponse } from 'next/server'

export default async (req, res) => {
  console.log(req, 'rrrrrr')
  if (req.method === 'OPTIONS') {
    return NextResponse.next()
  }
  if (req.method === 'POST') {
    try {
      const params = await req.body;
      // const limit = 30;

      const users = await insertApplyUser(params);

      return NextResponse.json({ data: users, code: 2000, desc: 'success' });
    } catch (e) {
      console.log('get users failed', e);
      return respErr('get users failed');
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
