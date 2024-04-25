// DrawerContent.js
import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const DrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    {/* Add custom drawer items here if needed */}
    {/* <DrawerItem label="Settings" onPress={() => {}} /> */}
  </DrawerContentScrollView>
);

export default DrawerContent;
