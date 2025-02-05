import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NAVIGATOR_SCREEN } from "../../utils/enum";
import IconPassword from "/assets/icon-password.png";
import { useReactive } from "ahooks";
import AwesomeAlert from "react-native-awesome-alerts";
import { users } from "../../utils/data";
import { IconButton, InputAdornment, TextField, styled } from "@mui/material";
import { checkEmail } from "../../services/auth";
import to from "await-to-js";
import dayjs from "dayjs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

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

const RegisterScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const state = useReactive({
    email: "",
    password: "",
    confirmPassword: "",
    notify: {
      title: "",
      message: "",
      color: "",
      status: false,
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = async () => {
    if (!state.email) {
      state.notify.title = "Lỗi";
      state.notify.message = "Chưa nhập email!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) {
      state.notify.title = "Lỗi";
      state.notify.message = "Email không hợp lệ!";
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
    if (!state.confirmPassword) {
      state.notify.title = "Lỗi";
      state.notify.message = "Chưa nhập xác nhận mật khẩu!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    if (state.password !== state.confirmPassword) {
      state.notify.title = "Lỗi";
      state.notify.message = "Mật khẩu và mật khẩu xác nhận không khớp!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    const findUser = users.find((user) => user.email === state.email);
    if (findUser) {
      state.notify.title = "Lỗi";
      state.notify.message = "Người dùng đã tồn tại!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    const [, res] = await to(checkEmail({
      "email": state.email,
      "dateOfBirth": dayjs(),
      "username": "a",
      "password": "a",
      "gender": "Male"
    }))
    if (!Boolean(res.data)) {
      state.notify.title = "Lỗi";
      state.notify.message = "Email đã tồn tại!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    // users.push({
    //   email: state.email,
    //   password: state.password,
    //   results: [],
    //   notes: [],
    // });
    navigation.navigate(NAVIGATOR_SCREEN.REGISTER_DETAIL, {
      email: state.email,
      password: state.password,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <View style={{ ...styles.detail, gap: 10 }}>
        <CssTextField
          variant="outlined"
          label="Email"
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
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="start"
                  style={{ padding: 16 }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  style={{ padding: 16 }}
                >
                  <Image source={{ uri: IconPassword, width: 20, height: 25 }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(event) => (state.password = event.target.value)}
        />
        <CssTextField
          variant="outlined"
          label="Nhập lại mật khẩu"
          style={{
            ...styles.input,
            width: "70%",
          }}
          type={showConfirmPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="start"
                  style={{ padding: 16 }}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  style={{ padding: 16 }}
                >
                  <Image source={{ uri: IconPassword, width: 20, height: 25 }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(event) => (state.confirmPassword = event.target.value)}
        />
        <TouchableOpacity style={styles.btnLogin} onPress={handleRegister}>
          <Text style={styles.txtLogin}>Xác nhận</Text>
        </TouchableOpacity>
        <Text>Đã có tài khoản?</Text>
        <Text>
          <Text>Đăng nhập </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(NAVIGATOR_SCREEN.LOGIN)}
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
    backgroundColor: "white",
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

export default RegisterScreen;
