import { getDb } from './db';
import { genUuid } from '../lib/uuid';

export async function insertApplyUser(user) {
  const createdAt = new Date().toISOString();

  try {
    const db = await getDb();

    const res = await db.query(
      `INSERT INTO applyUsers 
      (phone, name, created_at, uuid) 
      VALUES 
      ($1, $2, $3, $4)
  `,
      [user.phone, user.name, createdAt, genUuid()]
    );
    return res;
  } catch (error) {
    return error;
  }

}

export async function findApplyUser() {
  const db = await getDb();
  const res = await db.query(`SELECT * FROM applyUsers`);
  if (res.rowCount === 0) {
    return [];
  }

  const { rows } = res;
  return rows;
}

export async function deleteApplyUser() {
  const db = await getDb();
  const res = await db.query(`DELETE FROM applyUsers`);

  const { rows } = res;
  return rows;
}

// export async function findUserByUuid(uuid: string): Promise<User | undefined> {
//   const db = getDb();
//   const res = await db.query(`SELECT * FROM users WHERE uuid = $1 LIMIT 1`, [
//     uuid,
//   ]);
//   if (res.rowCount === 0) {
//     return undefined;
//   }

//   const { rows } = res;
//   const row = rows[0];
//   const user: User = {
//     email: row.email,
//     nickname: row.nickname,
//     avatar_url: row.avatar_url,
//     created_at: row.created_at,
//     uuid: row.uuid,
//   };

//   return user;
// }
