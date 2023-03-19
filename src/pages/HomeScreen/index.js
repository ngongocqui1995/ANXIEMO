import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import IconLogo from '/assets/logo.png';
import IconTitle from '/assets/title.png';
import AutoDimensionImage, {imageDimensionTypes} from 'react-native-auto-dimensions-image';
import { NAVIGATOR_SCREEN } from '../../utils/enum';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.container, gap: 20}}>
        <AutoDimensionImage
          source={{
            uri: IconLogo,
            height: 458,
            width: 498,
          }}
          dimensionType={imageDimensionTypes.HEIGHT}
          dimensionValue={300}
          otherDimensionMaxValue={150}
          style={styles.image}
        />
        <View style={{...styles.header, gap: 10}}>
          <AutoDimensionImage
            source={{
              uri: IconTitle,
              height: 86,
              width: 539,
            }}
            dimensionType={imageDimensionTypes.HEIGHT}
            dimensionValue={300}
            otherDimensionMaxValue={150}
          />
          <Text style={styles.title}>Mobile Service</Text>
        </View>
      </View>
      <View style={{...styles.container, gap: 15, width: '100%'}}>
        <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate(NAVIGATOR_SCREEN.LOGIN)}>
          <Text style={styles.txtLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate(NAVIGATOR_SCREEN.REGISTER)}>
          <Text style={styles.txtRegister}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#6B9080"
  },
  image: {
    alignSelf: 'center',
    borderRadius: 20
  },
  btnLogin: {
    width: '70%',
    backgroundColor: '#6B9080',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  txtLogin: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  btnRegister: {
    width: '60%',
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  txtRegister: {
    fontSize: 14,
  }
});

export default HomeScreen;