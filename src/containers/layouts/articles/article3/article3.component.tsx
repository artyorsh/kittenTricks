import React from 'react';
import {
  ImageBackground,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Input,
  Layout,
  Text,
} from '@kitten/ui';
import { CommentsList1 } from '@src/components/articles';
import { ContainerView } from '@src/components/common';
import {
  Article,
  Comment,
} from '@src/core/model';

interface ComponentProps {
  article: Article;
  comments: Comment[];
  currentCommentText: string;
  onCommentSubmit: () => void;
  onCommentTextChange: (text: string) => void;
  onCommentLikePress: (index: number) => void;
  onCommentMorePress: (index: number) => void;
  onCommentReplyMorePress: (index: number) => void;
}

export type Article3Props = ThemedComponentProps & ComponentProps;

class Article3Component extends React.Component<Article3Props> {

  private onLikePress = (index: number) => {
    this.props.onCommentLikePress(index);
  };

  private onMorePress = (index: number) => {
    this.props.onCommentMorePress(index);
  };

  private onReplyMorePress = (index: number) => {
    this.props.onCommentReplyMorePress(index);
  };

  private onCommentTextChange = (text: string): void => {
    this.props.onCommentTextChange(text);
  };

  private handleTextSubmit = () => {
    this.props.onCommentSubmit();
  };

  public render(): React.ReactNode {
    const { themedStyle, article, comments, currentCommentText } = this.props;

    return (
      <ContainerView style={themedStyle.container}>
        <Text
          style={themedStyle.titleLabel}
          category='h2'>
          {article.title}
        </Text>
        <Text
          style={themedStyle.descriptionLabel}
          category='s1'>
          {article.description}
        </Text>
        <ImageBackground
          style={themedStyle.image}
          source={article.image.imageSource}
        />
        <Text
          style={themedStyle.contentLabel}
          category='s1'>
          {article.content}
        </Text>
        <Layout style={{ paddingHorizontal: 24 }}>
          <View style={themedStyle.inputContainer}>
            <Text
              style={[themedStyle.inputLabel, themedStyle.inputSpace]}
              category='s1'>
              Comments
            </Text>
            <Input
              style={themedStyle.inputSpace}
              placeholder='Write your comment...'
              size='large'
              value={currentCommentText}
              onChangeText={this.onCommentTextChange}
              onSubmitEditing={this.handleTextSubmit}
            />
          </View>
          <CommentsList1
            data={comments}
            onLikePress={this.onLikePress}
            onMorePress={this.onMorePress}
            onReplyMorePress={this.onReplyMorePress}
          />
        </Layout>
      </ContainerView>
    );
  }
}

export const Article3 = withStyles(Article3Component, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-2'],
  },
  image: {
    minHeight: 240,
    marginVertical: 8,
  },
  authorPhoto: {
    position: 'absolute',
    left: 24,
    bottom: -32,
    margin: 0,
    borderWidth: 2,
    borderColor: theme['border-basic-color-2'],
  },
  titleLabel: {
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
  },
  descriptionLabel: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  contentLabel: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  articleAuthorContainer: {
    marginHorizontal: 24,
    flexDirection: 'row',
  },
  inputContainer: {
    marginVertical: 16,
  },
  inputLabel: {
    marginBottom: 8,
  },
}));
