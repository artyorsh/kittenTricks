import React from 'react';
import {
  Avatar,
  AvatarProps,
} from 'react-native-ui-kitten';
import { imageProfile1 } from '@src/assets/images';

type AvatarElement = React.ReactElement<AvatarProps>;

export const TinyAvatar = (): AvatarElement => {
  return (
    <Avatar
      size='tiny'
      source={imageProfile1.imageSource}
    />
  );
};
