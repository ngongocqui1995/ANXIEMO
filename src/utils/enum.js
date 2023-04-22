export const NAVIGATOR_SCREEN = {
  HOME: "HOME",
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  REGISTER_DETAIL: "REGISTER_DETAIL",
  QUESTION: "QUESTION",
  QUESTION_DETAIL: "QUESTION_DETAIL",
  SPLASH: "SPLASH",
  ADMIN: "ADMIN",
  RESULT: "RESULT",
  REPO: "REPO",
  REPO_DETAIL: "REPO_DETAIL",
  NOTE: "NOTE",
  NOTE_DETAIL: "NOTE_DETAIL",
  NOTE_FORM: "NOTE_FORM",
  ABOUT: "ABOUT",
  PROFILE: "PROFILE",
  UPDATE_PROFILE: "UPDATE_PROFILE"
};

export const QUESTION_SCREEN = {
  LOP_HOC: "LOP_HOC",
  VIEC_HOC: "VIEC_HOC",
  THI_CU: "THI_CU",
};

export const QUESTION_TYPE_SCREEN = {
  [QUESTION_SCREEN.LOP_HOC]: { type: "Class", title: "Lo lắng - Lớp học", key: QUESTION_SCREEN.LOP_HOC, },
  [QUESTION_SCREEN.VIEC_HOC]: { type: "Study", title: "Lo lắng - Việc học", key: QUESTION_SCREEN.VIEC_HOC },
  [QUESTION_SCREEN.THI_CU]: { type: "Exam", title: "Lo lắng - Thi cử", key: QUESTION_SCREEN.THI_CU }
}

export const QUESTION_TYPE = {
  Class: { type: "Class", title: "Lo lắng - Lớp học", key: QUESTION_SCREEN.LOP_HOC, },
  Study: { type: "Study", title: "Lo lắng - Việc học", key: QUESTION_SCREEN.VIEC_HOC },
  Exam: { type: "Exam", title: "Lo lắng - Thi cử", key: QUESTION_SCREEN.THI_CU }
}
