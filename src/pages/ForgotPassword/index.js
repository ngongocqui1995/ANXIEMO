import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NAVIGATOR_SCREEN } from "../../utils/enum";
import { TextField, styled } from "@mui/material";
import { useReactive } from "ahooks";
import { user } from "../../utils/data";
import AwesomeAlert from "react-native-awesome-alerts";
import { loginUser, sendCodeEmail } from "../../services/auth";
import to from "await-to-js";

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

const ForgotPassword = ({ navigation }) => {
  const state = useReactive({
    email: "",
    notify: {
      title: "",
      message: "",
      color: "",
      status: false,
    },
  });

  const handleSendMail = async () => {
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

    const [err, result] = await to(sendCodeEmail({ email: state.email }));

    if (err) {
      state.notify.title = "Lỗi";
      state.notify.message = "Bạn nhập sai email!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    state.notify.title = "Thành công";
    state.notify.message = "Gửi email thành công!";
    state.notify.color = "green";
    state.notify.status = true;
    navigation.navigate(NAVIGATOR_SCREEN.DETAIL_FORGOT_PASSWORD, {
      email: state.email,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quên mật khẩu</Text>
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
        <TouchableOpacity style={styles.btnLogin} onPress={handleSendMail}>
          <Text style={styles.txtLogin}>Gửi</Text>
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

export default ForgotPassword;
