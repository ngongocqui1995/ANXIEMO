import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconHome from "/assets/home.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN, QUESTION_TYPE } from "../../utils/enum";
import { FlatList } from "react-native";
import { useAsyncEffect, useReactive } from "ahooks";
import { getQuestion } from "../../services/question";
import { user } from "../../utils/data";
import dayjs from "dayjs";

const RepoScreen = ({ navigation }) => {
  const state = useReactive({ data: [] });

  useAsyncEffect(async () => {
    // const findUser = users.find((item) => item.email === user.email);
    // state.data = findUser?.results || [];
    const question = await getQuestion(user._id);
    state.data = question?.data?.map?.((item) => {
      return {
        title: QUESTION_TYPE[item.type].title,
        key: QUESTION_TYPE[item.type].key,
        score: item.answer.reduce((a, b) => a + b, 0),
        date: dayjs(item.createdAt)
      }
    }) || [];
  }, []);

  const handleClick = (item) => {
    navigation.navigate(NAVIGATOR_SCREEN.REPO_DETAIL, item);
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
          <Text style={styles.title}>Lưu trữ</Text>
        </View>
        <View style={styles.detail}>
          <FlatList
            data={state.data}
            keyExtractor={(_, index) => index}
            style={{ width: "100%" }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => handleClick(item)}
              >
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.cardDescription}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    {item.date.format("DD/MM/YYYY")}
                  </Text>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    {`${item.date.format("HH")}h${item.date.format("mm")}`}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
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
  card: {
    backgroundColor: "#6B9080",
    borderRadius: 10,
    width: "100%",
    padding: 20,
    display: "flex",
    gap: 10,
    marginBottom: 30,
  },
  cardTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RepoScreen;
