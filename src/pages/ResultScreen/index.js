import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconHome from "/assets/home.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN } from "../../utils/enum";
import { users } from "../../utils/data";
import dayjs from "dayjs";

const ResultScreen = ({ navigation, route }) => {
  const { score, title } = route.params;

  const getResult = () => {
    if (score <= 13)
      return "Bạn thật xuất sắc khi không có sợ hãi hay lo lắng.";
    if (score <= 30)
      return "Bạn cần khắc phục để tốt hơn trong nỗi sợ của mình.";
    if (score <= 50) return "Bạn trong tâm trạng mệt mỏi.";
    if (score <= 80) return "Bạn đang chán nản trong việc học.";
    if (score >= 81) return "Bạn có nguy cơ ở lại lớp.";
  };

  const handleYes = () => {
    users.forEach((user) => {
      if (user.email === user.email) {
        user.results.push({ score, title, date: dayjs() });
      }
    });
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
          <Text style={styles.txtResult}>{getResult()}</Text>
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
