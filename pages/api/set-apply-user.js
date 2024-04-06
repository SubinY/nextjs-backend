import { respData, respErr } from '../../lib/resp';
import { insertApplyUser } from '../../models/applyUser';

export default async (req, res) => {
  console.log(req, 'rrrrrr')
  if (req.method === 'POST') {
    try {
      const params = await req.body;
      // const limit = 30;

      const users = await insertApplyUser(params);

      return res.status(200).json(respData(users));
    } catch (e) {
      console.log('get users failed', e);
      return respErr('get users failed');
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
