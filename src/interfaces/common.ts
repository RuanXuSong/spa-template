import { MenuDataItem } from '@ant-design/pro-layout';

/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-23 21:12:06
 * @LastEditors: 黄姗姗
 * @LastEditTime: 2019-12-12 15:55:27
 */

export interface CustomWindow extends Window {
  gMenus: MenuDataItem[];
  requestConfig: {
    withCredentials: boolean;
    getToken: () => Promise<string>;
  };
  authConfig: {
    url: string;
    client_id: string;
    client_secret: string;
    password_min: number;
    password_max: number;
    company: number;
  };
}

export interface CustomLocation extends Location {
  query: {
    [x: string]: string;
  };
}

export interface PageMatchModel {
  isExact: boolean;
  params: object;
  path: string;
  url: string;
}

export interface PrivilegeResource {
  apiUrl: string;
  description: string;
  icon: string;
  id: number;
  orderValue: number;
  resourceKey: string;
  type: number;
  privilegeList: string[];
  resourceBusinessValue: string;
  children: PrivilegeResource[];
  isVisible: boolean;
}
