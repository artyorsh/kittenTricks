import { LayoutMenuItemData } from '@src/components/common';

export type AuthData = LayoutMenuItemData;

export interface AppriseContainerData extends AuthData {
  route: string;
}
