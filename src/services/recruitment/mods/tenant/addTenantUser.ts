/**
 * @description 添加租户下用户
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['recruitment'];

export const init = undefined;

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/tenant/addTenantUser', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || undefined;
  } else {
    throw new Error();
  }
}
