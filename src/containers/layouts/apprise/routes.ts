import {
  imageChat2Layout,
  imageConversationListLayout,
  imageForgotPasswordLayout,
  imageProfile7Layout,
  imageSignIn4Layout,
  imageSignUp4Layout,
} from '@src/assets/images';
import { AppriseContainerData } from './type';

export const routes: AppriseContainerData[] = [
  {
    title: 'Sign In',
    description: 'Apprise Version',
    image: imageSignIn4Layout.imageSource,
    route: 'Sign In 4',
  },
  {
    title: 'Sign Up',
    description: 'Apprise Version',
    image: imageSignUp4Layout.imageSource,
    route: 'Sign Up 4',
  },
  {
    title: 'Forgot Password',
    description: 'Apprise Version',
    image: imageForgotPasswordLayout.imageSource,
    route: 'Forgot Password',
  },
  {
    title: 'Profile',
    description: 'Apprise Version',
    image: imageProfile7Layout.imageSource,
    route: 'Profile 7',
  },
  {
    title: 'Messaging',
    description: 'Apprise Version',
    image: imageConversationListLayout.imageSource,
    route: 'Conversations List',
  },
  {
    title: 'Chat',
    description: 'Apprise Version',
    image: imageChat2Layout.imageSource,
    route: 'Chat 2',
  },
];
