import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconHome from "/assets/home.png";
import Logo from "/assets/logo.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN, QUESTION_SCREEN } from "../../utils/enum";

const AboutScreen = ({ navigation }) => {
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
          <Text style={styles.title}>Giới thiệu về ANXIEMO</Text>
        </View>
        <View style={styles.detail}>
          <Text style={{ fontSize: 20 }}>
            <Text style={{ color: "#6B9080", }}>ANXIEMO </Text>
            là ứng dụng giúp nhận biết các biểu hiện lo âu trong học tập dựa trên mục Lo âu (Anxiety) của thang đo Cảm xúc trong học tập (AEQ - VN) trong ba bối cảnh lớp học, việc học và thi cử.
          </Text>
          <View>
            <AutoDimensionImage
              source={{
                uri: Logo,
                height: 458,
                width: 498,
              }}
              dimensionType={imageDimensionTypes.HEIGHT}
              dimensionValue={300}
              otherDimensionMaxValue={300}
              style={styles.image}
            />
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
    fontSize: 22,
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
});

export default AboutScreen;
