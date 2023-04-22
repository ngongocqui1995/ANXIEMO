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
import { getNote } from "../../services/note";
import dayjs from "dayjs";

const NoteScreen = ({ navigation, route }) => {
  const { key } = route.params;

  const state = useReactive({
    data: [],
  });

  useAsyncEffect(async () => {
    // const findUser = users.find((item) => item.email === user.email);
    // state.data = findUser?.notes || [];
    const note = await getNote(user._id);
    state.data = note?.data?.map?.((item) => {
      return {
        title: item.title,
        description: item.description,
        date: dayjs(item.createdAt)
      }
    }) || [];
  }, [key]);

  const handleClick = (item) => {
    navigation.navigate(NAVIGATOR_SCREEN.NOTE_DETAIL, item);
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
                  <Text
                    style={{
                      color: "#6B9080",
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>
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
});

export default NoteScreen;
