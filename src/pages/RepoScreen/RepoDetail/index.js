import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NAVIGATOR_SCREEN } from "../../../utils/enum";
import { getResult } from "../../../utils/utils";
import { ArrowBack } from "@mui/icons-material";

const RepoDetail = ({ navigation, route }) => {
  const { score, key, title, date } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ ...styles.container, gap: 20 }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ position: "absolute", left: 0 }}
            onPress={() => navigation.navigate(NAVIGATOR_SCREEN.REPO)}
          >
            <ArrowBack style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.title}>Lưu trữ</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.cardDescription}>
            <Text style={{ fontWeight: "bold" }}>
              {date.format("DD/MM/YYYY")}
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              {`${date.format("HH")}h${date.format("mm")}`}
            </Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Text style={styles.txtScore}>{score}</Text>
          <Text style={styles.txtResult}>{getResult(key, score)}</Text>
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
  card: {
    width: "80%",
    display: "flex",
    gap: 10,
  },
  cardTitle: {
    color: "#6B9080",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
});

export default RepoDetail;
