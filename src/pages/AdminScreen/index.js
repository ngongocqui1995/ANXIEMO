import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconUser from "/assets/user.png";
import Logo from "/assets/logo.png";
import IconNote from "/assets/note.png";
import IconQuestion from "/assets/question.png";
import IconRepo from "/assets/repo.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN } from "../../utils/enum";
import { Drawer } from "@mui/material";
import ProfileScreen from "../ProfileScreen";
import { useReactive } from "ahooks";

const AdminScreen = ({ navigation }) => {
  const state = useReactive({ drawer: false });

  return (
    <View style={styles.container}>
      <View style={{ ...styles.container, gap: 20 }}>
        <View style={styles.header}>
          <View style={styles.toolbar}>
            <Text style={styles.title}>ANXIEMO</Text>
            <TouchableOpacity onPress={() => state.drawer = true}>
              <AutoDimensionImage
                source={{
                  uri: IconUser,
                  height: 114,
                  width: 114,
                }}
                dimensionType={imageDimensionTypes.HEIGHT}
                dimensionValue={45}
                otherDimensionMaxValue={45}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ ...styles.detail, marginTop: 60 }}>
          <TouchableOpacity
            style={styles.btnAbout}
            onPress={() => navigation.navigate(NAVIGATOR_SCREEN.ABOUT)}
          >
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
            <Text style={styles.txtAbout}>Giới thiệu về ANXIEMO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detail}>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.btnQuestion}
              onPress={() => navigation.navigate(NAVIGATOR_SCREEN.QUESTION)}
            >
              <View style={styles.iconQuestion}>
                <AutoDimensionImage
                  source={{
                    uri: IconQuestion,
                    height: 83,
                    width: 87,
                  }}
                  dimensionType={imageDimensionTypes.HEIGHT}
                  dimensionValue={35}
                  otherDimensionMaxValue={35}
                  style={styles.imageQuestion}
                />
              </View>
              <Text style={styles.txtQuestion}>Bảng hỏi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnQuestion}
              onPress={() => navigation.navigate(NAVIGATOR_SCREEN.REPO)}
            >
              <View style={styles.iconQuestion}>
                <AutoDimensionImage
                  source={{
                    uri: IconRepo,
                    height: 80,
                    width: 75,
                  }}
                  dimensionType={imageDimensionTypes.HEIGHT}
                  dimensionValue={35}
                  otherDimensionMaxValue={35}
                  style={styles.imageQuestion}
                />
              </View>
              <Text style={styles.txtQuestion}>Lưu trữ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnQuestion}
              onPress={() =>
                navigation.navigate(NAVIGATOR_SCREEN.NOTE, { key: 1 })
              }
            >
              <View style={styles.iconQuestion}>
                <AutoDimensionImage
                  source={{
                    uri: IconNote,
                    height: 80,
                    width: 80,
                  }}
                  dimensionType={imageDimensionTypes.HEIGHT}
                  dimensionValue={35}
                  otherDimensionMaxValue={35}
                  style={styles.imageQuestion}
                />
              </View>
              <Text style={styles.txtQuestion}>Ghi chú</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Drawer anchor="right" open={state.drawer} onClose={() => state.drawer = false}>
        <ProfileScreen navigation={navigation} closeDrawer={() => state.drawer = false} />
      </Drawer>
    </View >
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
    width: "87%",
    position: "relative",
    marginTop: 20,
    marginBottom: 20,
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "87%",
  },
  title: {
    fontSize: 36,
    color: "#6B9080",
    fontWeight: "bold",
    flex: 1,
    textAlign: "left",
  },
  detail: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "87%",
    gap: 50,
  },
  footer: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "87%",
    backgroundColor: "#6B9080",
    borderRadius: 20,
  },
  image: {
    alignSelf: "center",
    borderRadius: 20,
  },
  imageQuestion: {
    alignSelf: "center"
  },
  btnAbout: {
    width: "87%",
    backgroundColor: '#CCE3DE',
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  btnQuestion: {
    backgroundColor: "#6B9080",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  iconQuestion: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 10
  },
  txtQuestion: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  txtAbout: {
    color: "#6B9080",
    fontSize: 24,
    fontWeight: "bold",
  }
});

export default AdminScreen;
