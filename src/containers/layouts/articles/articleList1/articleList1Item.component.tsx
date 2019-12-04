import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import { Text } from '@ui-kitten/components';
import { ArticleActivityBar } from '@src/components/articles';
import { Article } from '@src/core/model';

// @ts-ignore (override `onPress` prop)
interface ComponentProps extends TouchableOpacityProps {
  article: Article;
  onPress: (article: Article) => void;
  onCommentPress: (article: Article) => void;
  onLikePress: (article: Article) => void;
}

export type ArticleList1ItemProps = ThemedComponentProps & ComponentProps;

class ArticleList1ItemComponent extends React.Component<ArticleList1ItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.article);
  };

  private onCommentsButtonPress = () => {
    this.props.onCommentPress(this.props.article);
  };

  private onLikeButtonPress = () => {
    this.props.onLikePress(this.props.article);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, article, ...restProps } = this.props;
    const commentsCount: number = article.comments ? article.comments.length : 0;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <ImageBackground
          style={themedStyle.image}
          source={article.image.imageSource}
        />
        <View style={themedStyle.infoContainer}>
          <Text
            category='h5'>
            {article.title}
          </Text>
          <Text
            style={themedStyle.descriptionLabel}
            appearance='hint'
            category='s1'>
            {article.description}
          </Text>
        </View>
        <ArticleActivityBar
          style={themedStyle.activityContainer}
          comments={commentsCount}
          likes={article.likes}
          onCommentPress={this.onCommentsButtonPress}
          onLikePress={this.onLikeButtonPress}>
          <Text
            style={themedStyle.dateLabel}
            appearance='hint'
            category='p2'>
            {article.date}
          </Text>
        </ArticleActivityBar>
      </TouchableOpacity>
    );
  }
}

export const ArticleList1Item = withStyles(ArticleList1ItemComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  infoContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme['border-basic-color-2'],
  },
  activityContainer: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  image: {
    height: 220,
  },
  descriptionLabel: {
    marginTop: 8,
  },
}));
