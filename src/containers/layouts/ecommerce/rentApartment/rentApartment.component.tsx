import React from 'react';
import {
  ImageBackground,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import {
  Button,
  Text,
} from '@ui-kitten/components';
import {
  ApartmentFacilityList1,
  ApartmentFacilityList2,
  ApartmentPhotoList,
  PriceText,
} from '@src/components/ecommerce';
import { Apartment } from '@src/core/model';
import { ContainerView } from '@src/components/common';

interface ComponentProps {
  apartment: Apartment;
  onBookPress: () => void;
  onPhotoPress: (index: number) => void;
}

export type RentApartmentProps = ThemedComponentProps & ComponentProps;

class RentApartmentComponent extends React.Component<RentApartmentProps> {

  private onBookPress = () => {
    this.props.onBookPress();
  };

  private onPrimaryFacilityPress = (index: number) => {

  };

  private onPhotoPress = (index: number) => {
    this.props.onPhotoPress(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, apartment } = this.props;

    return (
      <ContainerView style={themedStyle.container}>
        <ImageBackground
          style={themedStyle.backgroundImage}
          source={apartment.primaryPhoto.imageSource}
        />
        <View style={themedStyle.infoContainer}>
          <View style={themedStyle.detailsContainer}>
            <Text
              category='h6'>
              {apartment.title}
            </Text>
            <Text
              style={themedStyle.rentLabel}
              appearance='hint'
              category='p2'>
              Rent House
            </Text>
            <View style={themedStyle.bookContainer}>
              <PriceText
                style={themedStyle.priceLabel}
                valueStyle={themedStyle.priceValueLabel}
                scaleStyle={themedStyle.priceScaleLabel}
                scale='night'>
                {`${apartment.price}`}
              </PriceText>
              <Button
                style={themedStyle.bookButton}
                onPress={this.onBookPress}>
                BOOK NOW
              </Button>
            </View>
          </View>
          <View style={themedStyle.facilitiesContainer}>
            <Text
              category='s1'>
              Facilities
            </Text>
            <ApartmentFacilityList1
              style={themedStyle.primaryFacilityList}
              data={apartment.primaryFacilities}
              onItemPress={this.onPrimaryFacilityPress}
            />
            <ApartmentFacilityList2
              style={themedStyle.facilityList}
              data={apartment.facilities}
            />
          </View>
        </View>
        <View style={themedStyle.aboutSection}>
          <Text
            category='s1'>
            About
          </Text>
          <Text
            appearance='hint'>
            {apartment.description}
          </Text>
        </View>
        <View style={themedStyle.photoSection}>
          <Text
            style={themedStyle.photoLabel}
            category='s1'>
            Photos
          </Text>
          <ApartmentPhotoList
            contentContainerStyle={themedStyle.photoList}
            data={apartment.photos}
            onItemPress={this.onPhotoPress}
          />
        </View>
      </ContainerView>
    );
  }
}

export const RentApartment = withStyles(RentApartmentComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-2'],
  },
  backgroundImage: {
    flex: 1,
    minHeight: 280,
  },
  infoContainer: {
    marginTop: -80,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: theme['background-basic-color-1'],
  },
  detailsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: theme['border-basic-color-2'],
  },
  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  facilitiesContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  primaryFacilityList: {
    paddingVertical: 16,
  },
  facilityList: {
    paddingVertical: 12,
  },
  aboutSection: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  photoSection: {
    marginVertical: 8,
  },
  photoList: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  rentLabel: {
    marginTop: 24,
  },
  bookButton: {},
  priceLabel: {
    marginTop: 8,
  },
  priceValueLabel: {
    fontFamily: 'opensans-bold',
    fontSize: 26,
    lineHeight: 32,
  },
  priceScaleLabel: {
    fontSize: 13,
    lineHeight: 24,
  },
  aboutLabel: {
    marginVertical: 16,
  },
  photoLabel: {
    marginHorizontal: 24,
  },
}));
