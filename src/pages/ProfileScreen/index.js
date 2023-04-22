import { StyleSheet, Text, View } from "react-native";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import IconUser from "/assets/user.png";
import { user } from "../../utils/data";
import SettingsIcon from '@mui/icons-material/Settings';
import dayjs from "dayjs";
import { TouchableOpacity } from "react-native";
import { NAVIGATOR_SCREEN } from "../../utils/enum";

const ProfileScreen = ({ navigation, closeDrawer }) => {
  return (
    <View style={{ width: 300, padding: 30, display: "flex", gap: 20, height: "100%", position: "relative" }}>
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
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.title}>Ngày sinh{"\n"}<Text style={{ fontWeight: "400" }}>{dayjs(user.dateOfBirth).format("DD/MM/YYYY")}</Text></Text>
      <Text style={styles.title}>Giới tính{"\n"}<Text style={{ fontWeight: "400" }}>{user.gender}</Text></Text>
      <View style={{ borderBottomWidth: 1, backgroundColor: "black" }}></View>
      <View style={{ position: "absolute", bottom: 0, width: "100%", paddingBottom: 50 }}>
        <View style={{ borderTopWidth: 1, backgroundColor: "black" }}></View>
        <TouchableOpacity
          style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}
          onPress={() => {
            closeDrawer();
            navigation.navigate(NAVIGATOR_SCREEN.UPDATE_PROFILE);
          }}
        >
          <SettingsIcon style={{ fontSize: 30 }} />
          <Text style={styles.title}>Cài đặt</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  image: {
    alignSelf: "center",
    borderRadius: 20,
  },
});

export default ProfileScreen;