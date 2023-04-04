import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconHome from "/assets/home.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN, QUESTION_SCREEN } from "../../utils/enum";

const QuestionScreen = ({ navigation }) => {
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
          <Text style={styles.title}>Bảng hỏi</Text>
        </View>
        <View style={styles.detail}>
          <TouchableOpacity
            style={styles.btnQuestion}
            onPress={() =>
              navigation.navigate(NAVIGATOR_SCREEN.QUESTION_DETAIL, {
                key: QUESTION_SCREEN.LOP_HOC,
                label: "Lớp học",
              })
            }
          >
            <Text style={styles.txtQuestion}>Lớp học</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnQuestion}
            onPress={() =>
              navigation.navigate(NAVIGATOR_SCREEN.QUESTION_DETAIL, {
                key: QUESTION_SCREEN.VIEC_HOC,
                label: "Việc học",
              })
            }
          >
            <Text style={styles.txtQuestion}>Việc học</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnQuestion}
            onPress={() =>
              navigation.navigate(NAVIGATOR_SCREEN.QUESTION_DETAIL, {
                key: QUESTION_SCREEN.THI_CU,
                label: "Thi cử",
              })
            }
          >
            <Text style={styles.txtQuestion}>Thi cử</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  image: {
    alignSelf: "center",
    borderRadius: 20,
  },
  btnQuestion: {
    width: "80%",
    backgroundColor: "#6B9080",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  txtQuestion: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default QuestionScreen;
