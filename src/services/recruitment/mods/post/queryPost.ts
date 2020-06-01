/**
 * @description 分页查询岗位信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['recruitment'];

export const init = new defs.recruitment.Page();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/post/queryPost', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (!result.success) throw new Error(result.message);
  return result.data || new defs.recruitment.Page();
}
