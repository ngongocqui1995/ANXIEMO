import { useAsyncEffect } from 'ahooks';
import { StyleSheet, View } from 'react-native';
import Logo from '/assets/logo.png';
import Title from '/assets/title.png';
import AutoDimensionImage, {imageDimensionTypes} from 'react-native-auto-dimensions-image';

const SplashScreen = ({ navigation }) => {
  const performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  useAsyncEffect(async () => {
    const data = await performTimeConsumingTask();
    if (data !== null) {
      navigation.navigate('Home');
    }
  }, [])

  return (
    <View style={styles.viewStyles}>
      <AutoDimensionImage
        source={{
          uri: Logo,
          height: 458,
          width: 498,
        }}
        dimensionType={imageDimensionTypes.HEIGHT}
        dimensionValue={350}
        otherDimensionMaxValue={200}
        style={styles.image}
      />
      <AutoDimensionImage
        source={{
          uri: Title,
          height: 86,
          width: 539,
        }}
        dimensionType={imageDimensionTypes.HEIGHT}
        dimensionValue={350}
        otherDimensionMaxValue={200}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25
  },
  image: {
    alignSelf: 'center',
    borderRadius: 20
  },
});

export default SplashScreen;