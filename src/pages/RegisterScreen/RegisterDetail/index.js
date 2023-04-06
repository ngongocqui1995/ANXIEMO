import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NAVIGATOR_SCREEN } from "../../../utils/enum";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  TextField,
  Select,
  styled,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "dayjs/locale/vi";
import { useReactive } from "ahooks";
import { users } from "../../../utils/data";
import AwesomeAlert from "react-native-awesome-alerts";

const CssFormControl = styled(FormControl)({
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

const RegisterDetail = ({ navigation, route }) => {
  const { email } = route.params;
  const state = useReactive({
    name: "",
    birth_date: "",
    gender: "",
    notify: {
      title: "",
      message: "",
      color: "",
      status: false,
    },
  });

  const handleRegister = async () => {
    if (!state.name) {
      state.notify.title = "Lỗi";
      state.notify.message = "Chưa nhập tên!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }
    if (!state.birth_date) {
      state.notify.title = "Lỗi";
      state.notify.message = "Chưa nhập ngày sinh nhật!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }
    if (!state.gender) {
      state.notify.title = "Lỗi";
      state.notify.message = "Chưa nhập giới tính!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    users.forEach((user) => {
      if (user.email === email) {
        user.name = state.name;
        user.birth_date = state.birth_date;
        user.gender = state.gender;
      }
    });
    state.notify.title = "Thành công";
    state.notify.message = "Đăng ký thành công!";
    state.notify.color = "green";
    state.notify.status = true;
    navigation.navigate(NAVIGATOR_SCREEN.HOME);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin</Text>
      <View style={{ ...styles.detail, gap: 10 }}>
        <CssTextField
          variant="outlined"
          label="Họ và tên"
          style={{
            ...styles.input,
            width: "70%",
          }}
          onChange={(event) => (state.name = event.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
          <DatePicker
            label="Ngày sinh"
            localeText={{
              cancelButtonLabel: "Huỷ",
              okButtonLabel: "Đồng ý",
              toolbarTitle: "Chọn ngày",
            }}
            slots={{
              textField: (params) => (
                <CssTextField
                  {...params}
                  style={{
                    ...styles.input,
                    width: "70%",
                  }}
                />
              ),
            }}
            onChange={(value) => (state.birth_date = value)}
          />
        </LocalizationProvider>
        <CssFormControl style={{ ...styles.input, width: "70%" }}>
          <InputLabel htmlFor="gender">Giới tính</InputLabel>
          <Select
            id="gender"
            variant="outlined"
            label="Giới tính"
            onChange={(event) => (state.gender = event.target.value)}
          >
            <MenuItem value="0">Nam</MenuItem>
            <MenuItem value="1">Nữ</MenuItem>
          </Select>
        </CssFormControl>
        <TouchableOpacity style={styles.btnLogin} onPress={handleRegister}>
          <Text style={styles.txtLogin}>Xác nhận</Text>
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
});

export default RegisterDetail;
