import React from 'react';
import {
  Avatar,
  AvatarProps,
} from 'react-native-ui-kitten';
import { imageProfile1 } from '@src/assets/images';

type AvatarElement = React.ReactElement<AvatarProps>;

export const LargeAvatar = (): AvatarElement => {
  return (
    <Avatar
      size='large'
      source={imageProfile1.imageSource}
    />
  );
};
