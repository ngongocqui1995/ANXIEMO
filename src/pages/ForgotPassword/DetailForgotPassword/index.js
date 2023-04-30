import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NAVIGATOR_SCREEN } from "../../../utils/enum";
import { TextField, IconButton, styled, InputAdornment } from "@mui/material";
import { useReactive } from "ahooks";
import AwesomeAlert from "react-native-awesome-alerts";
import { checkSendCodeEmail, updateUser } from "../../../services/auth";
import to from "await-to-js";
import IconPassword from "/assets/icon-password.png";
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

const DetailForgotPassword = ({ navigation, route }) => {
  const { email } = route.params;

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const state = useReactive({
    code: "",
    password: "",
    passwordConfirm: "",
    notify: {
      title: "",
      message: "",
      color: "",
      status: false,
    },
  });

  const handleChangePassword = async () => {
    if (!state.code) {
      state.notify.title = "Lỗi";
      state.notify.message = "Chưa nhập code!";
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

    if (state.passwordConfirm !== state.password) {
      state.notify.title = "Lỗi";
      state.notify.message =
        "Mật khẩu mới và xác nhận mật khẩu mới không khớp!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    const [err, result] = await to(
      checkSendCodeEmail({
        email: email,
        code: state.code,
      })
    );

    if (err) {
      state.notify.title = "Lỗi";
      state.notify.message = "Nhập sai code!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    const [err_1] = await to(
      updateUser(result.data?._id, {
        password: state.password,
      })
    );

    if (err_1) {
      state.notify.title = "Lỗi";
      state.notify.message = "Thay đổi mật khẩu thất bại!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    navigation.navigate(NAVIGATOR_SCREEN.LOGIN);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPasswordConfirm = (event) => {
    event.preventDefault();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đổi mật khẩu</Text>
      <View style={{ ...styles.detail, gap: 10 }}>
        <CssTextField
          variant="outlined"
          label="Code"
          style={{
            ...styles.input,
            width: "70%",
          }}
          onChange={(event) => (state.code = event.target.value)}
        />
        <CssTextField
          variant="outlined"
          label="Mật khẩu mới"
          style={{
            ...styles.input,
            width: "70%",
          }}
          type={showPassword ? "text" : "password"}
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
                  <Image
                    source={{ uri: IconPassword, width: 20, height: 25 }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(event) => (state.password = event.target.value)}
        />
        <CssTextField
          variant="outlined"
          label="Nhập lại mật khẩu mới"
          style={{
            ...styles.input,
            width: "70%",
          }}
          type={showPasswordConfirm ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordConfirm}
                  onMouseDown={handleMouseDownPasswordConfirm}
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
                  <Image
                    source={{ uri: IconPassword, width: 20, height: 25 }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(event) => (state.passwordConfirm = event.target.value)}
        />
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={handleChangePassword}
        >
          <Text style={styles.txtLogin}>Xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATOR_SCREEN.LOGIN)}
        >
          <Text style={styles.txtBack}>Quay lại đăng nhập</Text>
        </TouchableOpacity>
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
  txtBack: {
    color: "black",
    textDecorationLine: "underline",
  },
});

export default DetailForgotPassword;
