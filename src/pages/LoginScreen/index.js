import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "@react-native-material/core";
import { NAVIGATOR_SCREEN } from "../../utils/enum";
import IconPassword from "/assets/icon-password.png";
import { TextField, styled } from "@mui/material";
import { useReactive } from "ahooks";
import { user, users } from "../../utils/data";
import AwesomeAlert from "react-native-awesome-alerts";

const CssTextField = styled(TextField)({
  "& .MuiFormLabel-root": {
    color: "rgb(33, 33, 33)",
    "&.Mui-focused": {
      color: "#6B9080 !important",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6B9080",
    },
  },
});

const LoginScreen = ({ navigation }) => {
  const state = useReactive({
    email: "",
    password: "",
    notify: {
      title: "",
      message: "",
      color: "",
      status: false,
    },
  });

  const handleLogin = () => {
    if (!state.email) {
      state.notify.title = "Lỗi";
      state.notify.message = "Chưa nhập email!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }
    if (!state.password) {
      state.notify.title = "Lỗi";
      state.notify.message = "Chưa nhập mật khẩu!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    const findUser = users.find((user) => user.email === state.email);
    if (!findUser) {
      state.notify.title = "Lỗi";
      state.notify.message = "Email không tồn tại!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    const findPassword = users.find((user) => user.password === state.password);
    if (!findPassword) {
      state.notify.title = "Lỗi";
      state.notify.message = "Nhập sai mật khẩu!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    user.email = state.email;
    navigation.navigate(NAVIGATOR_SCREEN.ADMIN);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={{ ...styles.detail, gap: 10 }}>
        <CssTextField
          variant="outlined"
          label="Email / Số điện thoại"
          style={{
            ...styles.input,
            width: "70%",
          }}
          onChange={(event) => (state.email = event.target.value)}
        />
        <CssTextField
          variant="outlined"
          label="Mật khẩu"
          style={{
            ...styles.input,
            width: "70%",
          }}
          type="password"
          InputProps={{
            endAdornment: (
              <Image source={{ uri: IconPassword, width: 20, height: 25 }} />
            ),
          }}
          onChange={(event) => (state.password = event.target.value)}
        />
        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
          <Text style={styles.txtLogin}>Xác nhận</Text>
        </TouchableOpacity>
        <Text>Chưa có tài khoản?</Text>
        <Text>
          <Text>Đăng ký </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(NAVIGATOR_SCREEN.REGISTER)}
          >
            <Text style={styles.txtRegister}>tại đây</Text>
          </TouchableOpacity>
        </Text>
      </View>
      {state.notify.status && (
        <AwesomeAlert
          show={state.notify.status}
          showProgress={false}
          title={state.notify.title}
          message={state.notify.message}
          onDismiss={() => {
            state.notify.title = "";
            state.notify.color = "";
            state.notify.message = "";
            state.notify.status = false;
          }}
          titleStyle={{
            fontSize: 24,
            color: state.notify.color,
            fontWeight: "bold",
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 200,
  },
  detail: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 40,
    color: "#6B9080",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#6B9080",
    width: "100%",
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  btnLogin: {
    width: "70%",
    backgroundColor: "#6B9080",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  txtLogin: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  txtRegister: {
    color: "#6B9080",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
