import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconHome from "/assets/home.png";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { NAVIGATOR_SCREEN, QUESTION_SCREEN } from "../../utils/enum";
import { useState } from "react";
import { Modal } from "@mui/material";
import { settings } from "../../utils/data";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
};

const QuestionScreen = ({ navigation }) => {
  const [open, setOpen] = useState(settings.popupQuestion);
  const handleClose = () => {
    settings.popupQuestion = false;
    setOpen(false);
  }

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
          <Text style={styles.title}>Bảng hỏi</Text>
        </View>
        <View style={styles.detail}>
          <TouchableOpacity
            style={styles.btnQuestion}
            onPress={() =>
              navigation.navigate(NAVIGATOR_SCREEN.QUESTION_DETAIL, {
                key: QUESTION_SCREEN.LOP_HOC,
                label: "Lớp học",
              })
            }
          >
            <Text style={styles.txtQuestion}>Lớp học</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnQuestion}
            onPress={() =>
              navigation.navigate(NAVIGATOR_SCREEN.QUESTION_DETAIL, {
                key: QUESTION_SCREEN.VIEC_HOC,
                label: "Việc học",
              })
            }
          >
            <Text style={styles.txtQuestion}>Việc học</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnQuestion}
            onPress={() =>
              navigation.navigate(NAVIGATOR_SCREEN.QUESTION_DETAIL, {
                key: QUESTION_SCREEN.THI_CU,
                label: "Thi cử",
              })
            }
          >
            <Text style={styles.txtQuestion}>Thi cử</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal open={open}>
        <View style={styles.bodyModal}>
          <Text style={styles.detailModal}>
            Bảng hỏi này đề cập đến những cảm xúc mà bạn có thể đã trải qua trong quá trình học, có liên quan đến lớp học, việc học cũng như thi cử.{"\n\n"}
            Để trả lời câu hỏi, bạn hãy nhớ lại một vài tình huống đặc trưng/phổ biến mà bạn đã trải qua trong quá trình học.{"\n\n"}
            Xin vui lòng đọc kỹ từng câu và chọn câu trả lời đúng với bạn nhất.
          </Text>
          <View style={styles.hr}></View>
          <TouchableOpacity style={styles.btnModal} onPress={handleClose}>
            <Text style={{ color: "#6B9080", fontSize: 18, alignSelf: "center" }}>Tôi đã hiểu</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  btnQuestion: {
    width: "80%",
    backgroundColor: "#6B9080",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  txtQuestion: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  bodyModal: {
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    backgroundColor: "white",
    borderRadius: 25,
    padding: 40
  },
  hr: {
    borderBottomWidth: 1,
    backgroundColor: "black",
    width: "80%",
    alignSelf: "center",
    margin: 20
  },
  detailModal: {
    fontSize: 18,
    color: "#6B9080"
  },
  btnModal: {
    borderColor: "#6B9080",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 25
  }
});

export default QuestionScreen;
