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
import { NAVIGATOR_SCREEN } from "../../utils/enum";
import { useAsyncEffect, useReactive } from "ahooks";
import { user, users } from "../../utils/data";
import { deleteNote, getNote } from "../../services/note";
import dayjs from "dayjs";
import AwesomeAlert from "react-native-awesome-alerts";
import { Close } from "@mui/icons-material";

const NoteScreen = ({ navigation, route }) => {
  const { key } = route.params;

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
    const note = await getNote(user._id);
    state.data =
      note?.data?.map?.((item) => {
        return {
          title: item.title,
          description: item.description,
          date: dayjs(item.createdAt),
          _id: item._id,
        };
      }) || [];
  };

  useAsyncEffect(async () => {
    await loadData();
  }, [key]);

  const handleClick = (item) => {
    navigation.navigate(NAVIGATOR_SCREEN.NOTE_DETAIL, item);
  };

  const handleDelete = (item) => {
    state.notify.title = "Xoá ghi chú";
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
          <Text style={styles.title}>Ghi chú</Text>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              padding: 13,
              borderRadius: 100,
              width: 45,
              height: 45,
              backgroundColor: "#6B9080",
              textAlign: "center",
            }}
            onPress={() => navigation.navigate(NAVIGATOR_SCREEN.NOTE_FORM)}
          >
            <Text style={{ color: "white" }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detail}>
          <FlatList
            data={state.data}
            style={{ width: "100%" }}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => handleClick(item)}
              >
                <View
                  style={{
                    borderColor: "#6B9080",
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                  }}
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
                  <Text
                    style={{ fontSize: 18, color: "#6B9080", marginTop: 10 }}
                    numberOfLines={2}
                  >
                    Nội dung: {item.description}
                  </Text>
                  <Text
                    style={{ fontSize: 18, color: "#6B9080", marginTop: 10 }}
                  >
                    {item.date.format("DD/MM/YYYY")}
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
            if (state.deleted) deleteNote(state.deleted);
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
  image: {
    alignSelf: "center",
    borderRadius: 20,
  },
  card: {
    padding: 5,
    width: "50%",
  },
  cardTitle: {
    color: "#6B9080",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardHeader: {
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

export default NoteScreen;
