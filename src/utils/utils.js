import { QUESTION_SCREEN } from "./enum";

export const getResult = (key, score) => {
  switch (key) {
    case QUESTION_SCREEN.LOP_HOC: {
      if (score === 31)
        return "Biểu hiện lo âu trong lớp học của bạn ở mức trung bình";
      if (score <= 21.75)
        return "Bạn ít có khả năng có biểu hiện lo âu liên quan đến lớp học";
      if (score <= 25.06)
        return "Biểu hiện lo âu liên quan đến lớp học của bạn ở mức rất thấp";
      if (score <= 31.68)
        return "Biểu hiện lo âu liên quan đến lớp học của bạn ở mức thấp";
      if (score <= 38.3)
        return "Biểu hiện lo âu liên quan đến lớp học của bạn ở mức vừa phải";
      if (score <= 40.98)
        return "Biểu hiện lo âu liên quan đến lớp học của bạn ở mức khá cao";
      if (score <= 44.92)
        return "Bạn có nguy cơ cao có biểu hiện lo âu liên quan đến lớp học";
      if (score > 44.92)
        return "Bạn có nguy cơ rất cao có biểu hiện lo âu liên quan đến lớp học";
    }
    case QUESTION_SCREEN.VIEC_HOC: {
      if (score === 33)
        return "Biểu hiện lo âu trong việc học của bạn ở mức trung bình";
      if (score <= 24.11)
        return "Bạn ít có khả năng có biểu hiện lo âu liên quan đến việc học";
      if (score <= 27.14)
        return "Biểu hiện lo âu liên quan đến việc học của bạn ở mức rất thấp";
      if (score <= 33.2)
        return "Biểu hiện lo âu liên quan đến việc học của bạn ở mức thấp";
      if (score <= 39.26)
        return "Biểu hiện lo âu liên quan đến việc học của bạn ở mức vừa phải";
      if (score <= 42.29)
        return "Biểu hiện lo âu liên quan đến việc học của bạn ở mức khá cao";
      if (score <= 45.32)
        return "Bạn có nguy cơ cao có biểu hiện lo âu liên quan đến việc học";
      if (score > 45.32)
        return "Bạn có nguy cơ rất cao có biểu hiện lo âu liên quan đến việc học";
    }
    case QUESTION_SCREEN.THI_CU: {
      if (score === 38)
        return "Biểu hiện lo âu trong thi cử của bạn ở mức trung bình";
      if (score <= 27.14)
        return "Bạn ít có khả năng có biểu hiện lo âu liên quan đến thi cử";
      if (score <= 30.81)
        return "Biểu hiện lo âu liên quan đến thi cử của bạn ở mức rất thấp";
      if (score <= 38.15)
        return "Biểu hiện lo âu liên quan đến thi cử của bạn ở mức thấp";
      if (score <= 45.49)
        return "Biểu hiện lo âu liên quan đến thi cử của bạn ở mức vừa phải";
      if (score <= 49.16)
        return "Biểu hiện lo âu liên quan đến thi cử của bạn ở mức khá cao";
      if (score <= 52.83)
        return "Bạn có nguy cơ cao có biểu hiện lo âu liên quan đến thi cử";
      if (score > 52.83)
        return "Bạn có nguy cơ rất cao có biểu hiện lo âu liên quan đến thi cử";
    }
  }
};
