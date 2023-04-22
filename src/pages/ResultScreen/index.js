import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconHome from "/assets/home.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN, QUESTION_TYPE_SCREEN } from "../../utils/enum";
import { user, users } from "../../utils/data";
import dayjs from "dayjs";
import { getResult } from "../../utils/utils";
import to from "await-to-js";
import { createQuestion } from "../../services/question";
import { useReactive } from "ahooks";

const ResultScreen = ({ navigation, route }) => {
  const { score, key, title, answers } = route.params;
  const state = useReactive({
    notify: {
      title: "",
      message: "",
      color: "",
      status: false,
    },
  });

  const handleYes = async () => {
    users.forEach((user) => {
      if (user.email === user.email) {
        user.results.push({ score, key, title, date: dayjs() });
      }
    });

    const [err] = await to(createQuestion({
      userId: user._id,
      answer: answers,
      type: QUESTION_TYPE_SCREEN[key].type,
    }))

    if (err) {
      state.notify.title = "Lỗi";
      state.notify.message = err.message;
      state.notify.color = "red";
      state.notify.status = true;
      return;
    }

    navigation.navigate(NAVIGATOR_SCREEN.ADMIN);
  };

  const handleNo = () => {
    navigation.navigate(NAVIGATOR_SCREEN.ADMIN);
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
          <Text style={styles.title}>Kết quả</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.txtScore}>{score}</Text>
          <Text style={styles.txtResult}>{getResult(key, score)}</Text>
        </View>
        <View style={styles.detail}>
          <View
            style={{
              display: "flex",
              gap: 20,
              width: "100%",
              textAlign: "center",
            }}
          >
            <Text style={{ ...styles.txtResult, fontWeight: "bold" }}>
              Lưu kết quả?
            </Text>
            <TouchableOpacity style={styles.btnSave} onPress={handleYes}>
              <Text style={styles.txtSave}>Có</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSave} onPress={handleNo}>
              <Text style={styles.txtSave}>Không</Text>
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
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    gap: 50,
  },
  txtScore: {
    fontSize: 80,
    color: "#6B9080",
    fontWeight: "bold",
  },
  txtResult: {
    fontSize: 24,
    color: "#6B9080",
  },
  btnSave: {
    borderWidth: 1,
    borderColor: "#6B9080",
    borderRadius: 10,
    width: "100%",
    padding: 10,
    textAlign: "center",
  },
  txtSave: {
    color: "#6B9080",
  },
});

export default ResultScreen;
