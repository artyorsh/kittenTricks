import React from 'react';
import { View } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@ui-kitten/components';
import {
  Button,
  Input,
  Text,
} from '@ui-kitten/components';
import { BookHeader } from '@src/components/ecommerce';
import { CommentsList1 } from '@src/components/articles';
import {
  Book,
  Comment,
} from '@src/core/model';
import { ContainerView } from '@src/components/common';

interface ComponentProps {
  book: Book;
  comments: Comment[];
  currentCommentText: string;
  onBuyBook: () => void;
  onCommentSubmit: () => void;
  onCommentTextChange: (text: string) => void;
  onCommentLikePress: (index: number) => void;
  onCommentMorePress: (index: number) => void;
  onCommentReplyMorePress: (index: number) => void;
}

export type BookDetailsProps = ThemedComponentProps & ComponentProps;

class BookDetailsComponent extends React.Component<BookDetailsProps> {

  private onBuyBook = (): void => {
    this.props.onBuyBook();
  };

  private onCommentLikePress = (index: number) => {
    this.props.onCommentLikePress(index);
  };

  private onCommentMorePress = (index: number) => {
    this.props.onCommentMorePress(index);
  };

  private onCommentReplyMorePress = (index: number) => {
    this.props.onCommentReplyMorePress(index);
  };

  private onCommentTextChange = (text: string): void => {
    this.props.onCommentTextChange(text);
  };

  private handleTextSubmit = () => {
    this.props.onCommentSubmit();
  };

  public render(): React.ReactNode {
    const { themedStyle, book, comments, currentCommentText } = this.props;

    return (
      <ContainerView style={themedStyle.container}>
        <BookHeader
          style={themedStyle.bookHeader}
          image={book.preview.imageSource}
          title={book.name}
          author={book.author}
          categories={book.categories}
          rating={book.rating}
          price={`${book.currency} ${book.price}`}
        />
        <Button
          style={themedStyle.buyButton}
          onPress={this.onBuyBook}>
          BUY BOOK
        </Button>
        <View style={themedStyle.descriptionContainer}>
          <Text
            style={themedStyle.aboutLabel}
            category='s1'>
            About Book
          </Text>
          <Text
            appearance='hint'>
            {book.description}
          </Text>
        </View>
        <View style={themedStyle.commentsContainer}>
          <View style={themedStyle.inputContainer}>
            <Text
              style={themedStyle.commentsLabel}
              category='s1'>
              Comments
            </Text>
            <Input
              placeholder='Write your comment'
              value={currentCommentText}
              onChangeText={this.onCommentTextChange}
              onSubmitEditing={this.handleTextSubmit}
            />
          </View>
          <CommentsList1
            data={comments}
            onLikePress={this.onCommentLikePress}
            onMorePress={this.onCommentMorePress}
            onReplyMorePress={this.onCommentReplyMorePress}
          />
        </View>
      </ContainerView>
    );
  }
}

export const BookDetails = withStyles(BookDetailsComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
  bookHeader: {
    paddingHorizontal: 16,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: theme['background-basic-color-2'],
  },
  commentsContainer: {
    paddingVertical: 24,
    backgroundColor: theme['background-basic-color-2'],
  },
  inputContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  aboutLabel: {
    marginBottom: 16,
  },
  commentsLabel: {
    marginBottom: 8,
  },
  buyButton: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
}));
