import React, { useState } from 'react';
import ProLayout, { BasicLayoutProps } from '@ant-design/pro-layout';
import { defaultLayoutProps } from '../../../config/defaultSettings';
import { CustomWindow } from '@/interfaces/common';
import Link from 'umi/link';

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  const [collapsed, handleMenuCollapse] = useState<boolean>(true);
  return (
    <ProLayout
      location={{ pathname: '/homepage' }}
      menuDataRender={() => ((window as unknown) as CustomWindow).gMenus}
      collapsed={collapsed}
      onCollapse={handleMenuCollapse}
      menuRender={(props: BasicLayoutProps, dom) => {
        return (
          <div
            style={{
              background: '#fff',
              boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
              transition: 'all 0.2s',
              overflow: 'hidden',
              width: props.collapsed ? 0 : props.siderWidth || 256,
            }}
          >
            {dom}
          </div>
        );
      }}
      menuItemRender={(menuItemProps, defaultDom) =>
        menuItemProps.isUrl ? defaultDom : <Link to={menuItemProps.path || '/'}>{defaultDom}</Link>
      }
      {...defaultLayoutProps}
    >
      {children}
    </ProLayout>
  );
};

export default BasicLayout;
