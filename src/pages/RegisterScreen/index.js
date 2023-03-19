import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "@react-native-material/core";
import { NAVIGATOR_SCREEN } from "../../utils/enum";
import IconPassword from '/assets/icon-password.png';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <View style={{...styles.detail, gap: 10}}>
        <TextInput 
          variant="outlined" 
          label="Email / Số điện thoại" 
          color="#6B9080" 
          inputStyle={styles.input} 
          style={{ width: '70%' }}
        />
        <TextInput 
          variant="outlined" 
          label="Mật khẩu" 
          color="#6B9080" 
          inputStyle={styles.input} 
          style={{ width: '70%' }}
          trailing={() => (
            <Image source={{uri: IconPassword, width: 20, height: 25}} />
          )}
        />
        <TextInput 
          variant="outlined" 
          label="Nhập lại mật khẩu" 
          color="#6B9080" 
          inputStyle={styles.input} 
          style={{ width: '70%' }}
          trailing={() => (
            <Image source={{uri: IconPassword, width: 20, height: 25}} />
          )}
        />
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.txtLogin}>Xác nhận</Text>
        </TouchableOpacity>
        <Text>Đã có tài khoản?</Text>
        <Text>
          <Text>Đăng nhập </Text>
          <TouchableOpacity onPress={() => navigation.navigate(NAVIGATOR_SCREEN.LOGIN)}>
            <Text style={styles.txtRegister}>tại đây</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 200,
  },
  detail: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 40,
    color: "#6B9080",
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1, 
    borderRadius: 5, 
    borderColor: "#6B9080",
    width: '100%',
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  btnLogin: {
    width: '70%',
    backgroundColor: '#6B9080',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  txtLogin: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  txtRegister: {
    color: '#6B9080',
    textDecorationLine: 'underline'
  },
});

export default RegisterScreen;