import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconHome from "/assets/home.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN } from "../../../utils/enum";
import { useReactive } from "ahooks";
import dayjs from "dayjs";
import { TextField, styled } from "@mui/material";
import { user, users } from "../../../utils/data";
import AwesomeAlert from "react-native-awesome-alerts";
import { createNote } from "../../../services/note";
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

const NoteForm = ({ navigation }) => {
  const state = useReactive({
    title: "",
    description: "",
    notify: {
      title: "",
      message: "",
      color: "",
      status: false,
    },
  });

  const handleSave = async () => {
    if (!state.title) {
      state.notify.title = "Lỗi";
      state.notify.message = "Chưa nhập tiêu đề!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }
    if (!state.description) {
      state.notify.title = "Lỗi";
      state.notify.message = "Chưa nhập nội dung!";
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    const [err] = await to(createNote({
      userId: user._id,
      title: state.title,
      description: state.description
    }))

    if (err) {
      state.notify.title = "Lỗi";
      state.notify.message = err.message;
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    // users.forEach((item) => {
    //   if (item.email === user.email) {
    //     item.notes.push({
    //       title: state.title,
    //       description: state.description,
    //       date: dayjs(),
    //     });
    //   }
    // });
    navigation.navigate(NAVIGATOR_SCREEN.NOTE, { key: 2 });
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.container, gap: 20 }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ position: "absolute", left: 0 }}
            onPress={() => navigation.navigate(NAVIGATOR_SCREEN.ADMIN)}
          >
            <AutoDimensionImage
              source={{
                uri: IconHome,
                height: 105,
                width: 105,
              }}
              dimensionType={imageDimensionTypes.HEIGHT}
              dimensionValue={45}
              otherDimensionMaxValue={45}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Ghi chú</Text>
        </View>
        <View style={styles.detail}>
          <CssTextField
            variant="outlined"
            label="Nhập tiêu đề"
            style={{
              ...styles.input,
            }}
            onChange={(event) => (state.title = event.target.value)}
          />
          <CssTextField
            variant="outlined"
            label="Nhập nội dung"
            style={{
              ...styles.input,
            }}
            onChange={(event) => (state.description = event.target.value)}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#6B9080",
                borderRadius: 10,
                padding: 10,
                width: 100,
                textAlign: "center",
              }}
              onPress={handleSave}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    width: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    position: "relative",
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    color: "#6B9080",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  detail: {
    flex: 1,
    width: "80%",
    gap: 10,
  },
  image: {
    alignSelf: "center",
    borderRadius: 20,
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
});

export default NoteForm;
