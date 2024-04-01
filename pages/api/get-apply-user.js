import { respData, respErr } from '../../lib/resp';
import { findApplyUser } from '../../models/applyUser';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      // console.log('get users failed', req);
      // const { page } = await req.json();
      // const limit = 30;

      const users = await findApplyUser();

      return res.status(200).json({ data: users, code: 2000, desc: 'success' });
    } catch (e) {
      console.log('get users failed', e);
      return respErr('get users failed');
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
