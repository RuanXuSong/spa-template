/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-27 17:10:00
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-10-27 19:29:56
 */
import { BaseStore } from '@/interfaces/base.store';
import { MenuDataItem } from '@ant-design/pro-layout';

const baseStore: BaseStore = {
  menus: [
    {
      name: '首页',
      link: '/',
      icon: 'iconhomepage',
      children: [],
    },
  ],
  privileges: [],

  // methods
  setMenus(menus: MenuDataItem[]) {
    this.menus = menus;
  },
  setPrivileges(privileges: string[]) {
    this.privileges = privileges;
  },
};

export default baseStore;
