import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import IconHome from "/assets/home.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN, QUESTION_SCREEN } from "../../../utils/enum";
import { examination, learn, room } from "../../../utils/data";
import { useReactive } from "ahooks";
import AwesomeAlert from "react-native-awesome-alerts";
import { useEffect } from "react";

const QuestionDetail = ({ route, navigation }) => {
  const { key, label } = route.params;
  const state = useReactive({
    data: [],
    notify: {
      title: "",
      message: "",
      color: "",
      status: false,
    },
  });

  useEffect(() => {
    if (key === QUESTION_SCREEN.LOP_HOC)
      state.data = JSON.parse(JSON.stringify(room));
    if (key === QUESTION_SCREEN.VIEC_HOC)
      state.data = JSON.parse(JSON.stringify(learn));
    if (key === QUESTION_SCREEN.THI_CU)
      state.data = JSON.parse(JSON.stringify(examination));
  }, []);

  const handleSelected = (index, indexQuestion) => {
    state.data[index].questions.forEach((item) => (item.selected = false));
    state.data[index].questions[indexQuestion].selected = true;
  };

  const handleResult = async () => {
    for (let i = 0; i < state.data.length; i++) {
      const check = state.data[i].questions.some((it) => it.selected);
      if (!check) {
        state.notify.title = "Lỗi";
        state.notify.message = `Bạn chưa chọn câu ${i + 1}!`;
        state.notify.color = "red";
        state.notify.status = true;
        return;
      }
    }

    const answers = state.data.map((item) => {
      const findQuestion = item.questions.find((item) => item.selected);
      return findQuestion.key;
    });

    const score = state.data.reduce((prev, cur) => {
      const findQuestion = cur.questions.find((item) => item.selected);
      return prev + +findQuestion.key;
    }, 0);

    navigation.navigate(NAVIGATOR_SCREEN.RESULT, {
      score,
      key,
      answers,
      title: `Lo lắng - ${label}`,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.container, gap: 20 }}>
        <View style={{ ...styles.toolbar, gap: 20 }}>
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
            <Text style={styles.title}>Bảng hỏi</Text>
          </View>
          <Text style={styles.txtTitle}>{label}</Text>
        </View>
        <View style={styles.detail}>
          <FlatList
            data={state.data}
            style={{ width: "100%" }}
            renderItem={({ item, index }) => (
              <View style={{ gap: 8, marginBottom: 30 }}>
                <Text style={styles.titleQuestion}>
                  {`Câu ${index + 1}: ${item?.title || ""}`}
                </Text>
                {item?.questions?.map?.((it, indexQuestion) => (
                  <TouchableOpacity
                    key={it.key}
                    style={
                      state.data[index].questions[indexQuestion].selected
                        ? styles.btnQuestionActive
                        : styles.btnQuestion
                    }
                    onPress={() => handleSelected(index, indexQuestion)}
                  >
                    <Text
                      style={
                        state.data[index].questions[indexQuestion].selected
                          ? styles.txtQuestionActive
                          : styles.txtQuestion
                      }
                    >
                      {it.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btnFooter} onPress={handleResult}>
            <Text style={styles.txtFooter}>Hoàn tất</Text>
          </TouchableOpacity>
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
  toolbar: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    position: "relative",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
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
  image: {
    alignSelf: "center",
    borderRadius: 20,
  },
  txtTitle: {
    fontSize: 20,
    backgroundColor: "#6B9080",
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    width: "auto",
    padding: 15,
    paddingLeft: 65,
    paddingRight: 65,
  },
  titleQuestion: {
    fontSize: 20,
    color: "#6B9080",
    fontWeight: "bold",
  },
  btnQuestion: {
    borderColor: "#6B9080",
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    padding: 4,
  },
  btnQuestionActive: {
    backgroundColor: "#6B9080",
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    padding: 4,
  },
  txtQuestion: {
    fontSize: 20,
    color: "#6B9080",
  },
  txtQuestionActive: {
    fontSize: 20,
    color: "white",
  },
  footer: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 10,
  },
  btnFooter: {
    backgroundColor: "#6B9080",
    borderRadius: 10,
    borderWidth: 1,
    padding: 4,
    width: 150,
    textAlign: "center",
  },
  txtFooter: {
    fontSize: 20,
    color: "white",
  },
});

export default QuestionDetail;
