import { MenuDataItem } from '@ant-design/pro-layout';

/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-27 17:34:01
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-10-27 17:43:40
 */

export interface BaseStore {
  menus: MenuDataItem[];
  privileges: string[];

  setMenus: (menus: MenuDataItem[]) => void;
  setPrivileges: (privileges: string[]) => void;
}
