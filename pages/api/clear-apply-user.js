import { respData, respErr } from '../../lib/resp';
import { deleteApplyUser } from '../../models/applyUser';

export default async (req, res) => {
  if (req.method === 'DELETE') {
    try {
      const users = await deleteApplyUser();

      return res.status(200).json();
    } catch (e) {
      console.log('delete users failed', e);
      return respErr('delete users failed');
    }
  }
};
