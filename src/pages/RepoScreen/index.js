import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconHome from "/assets/home.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN, QUESTION_TYPE } from "../../utils/enum";
import { FlatList } from "react-native";
import { useAsyncEffect, useReactive } from "ahooks";
import AwesomeAlert from "react-native-awesome-alerts";
import { deleteQuestion, getQuestion } from "../../services/question";
import { user } from "../../utils/data";
import { Close } from "@mui/icons-material";
import dayjs from "dayjs";

const RepoScreen = ({ navigation }) => {
  const state = useReactive({
    data: [],
    notify: {
      title: "",
      message: "",
      color: "",
      status: false,
    },
    deleted: "",
  });

  const loadData = async () => {
    const question = await getQuestion(user._id);
    state.data =
      question?.data?.map?.((item) => {
        return {
          title: QUESTION_TYPE[item.type].title,
          key: QUESTION_TYPE[item.type].key,
          score: item.answer.reduce((a, b) => a + b, 0),
          date: dayjs(item.createdAt),
          _id: item._id,
        };
      }) || [];
  };

  useAsyncEffect(async () => {
    await loadData();
  }, []);

  const handleClick = (item) => {
    navigation.navigate(NAVIGATOR_SCREEN.REPO_DETAIL, item);
  };

  const handleDelete = (item) => {
    state.notify.title = "Xoá lưu trữ";
    state.notify.message = "Bạn có chắc chắn muốn xoá?";
    state.notify.color = "blue";
    state.notify.status = true;
    state.deleted = item._id;
  };

  const handleDismiss = () => {
    state.notify.title = "";
    state.notify.color = "";
    state.notify.message = "";
    state.notify.status = false;
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
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <TouchableOpacity
                    style={styles.btnDelete}
                    onPress={() => handleDelete(item)}
                  >
                    <Close />
                  </TouchableOpacity>
                </View>
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
      {state.notify.status && (
        <AwesomeAlert
          show={state.notify.status}
          showProgress={false}
          title={state.notify.title}
          message={state.notify.message}
          onDismiss={handleDismiss}
          titleStyle={{
            fontSize: 24,
            color: state.notify.color,
            fontWeight: "bold",
          }}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Huỷ"
          confirmText="Đồng ý"
          confirmButtonColor="#DD6B55"
          onCancelPressed={handleDismiss}
          onConfirmPressed={() => {
            if (state.deleted) deleteQuestion(state.deleted);
            state.deleted = "";
            handleDismiss();
            setTimeout(() => {
              loadData();
            }, 1000);
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
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnDelete: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 100,
  },
});

export default RepoScreen;
