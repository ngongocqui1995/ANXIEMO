import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconHome from "/assets/home.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN } from "../../../utils/enum";

const NoteDetail = ({ navigation, route }) => {
  const { title, description, date } = route.params;

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
          <Text
            style={{
              color: "#6B9080",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <Text style={{ fontSize: 18 }}>
            {`${date.format("DD/MM/YYYY")}        ${date.format(
              "HH"
            )}h${date.format("mm")}`}
          </Text>
          <Text style={{ fontSize: 18, color: "#6B9080", marginTop: 10 }}>
            Nội dung: {description}
          </Text>
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
    width: "80%",
  },
  image: {
    alignSelf: "center",
    borderRadius: 20,
  },
});

export default NoteDetail;
