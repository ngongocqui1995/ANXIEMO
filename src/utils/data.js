import dayjs from "dayjs";
import { QUESTION_SCREEN } from "./enum";

export const settings = {
  popupQuestion: true,
};

export const user = {
  email: "",
  dateOfBirth: "",
  gender: "",
  _id: "",
  name: "",
};

export const users = [
  {
    email: "admin",
    password: "123456",
    name: "admin",
    birth_date: "12/12/1998",
    gender: "Nam",
    results: [
      {
        title: "Lo lắng - Việc học",
        key: QUESTION_SCREEN.VIEC_HOC,
        score: 13,
        date: dayjs(),
      },
    ],
    notes: [
      { title: "Tiêu đề", description: "a", date: dayjs() },
      { title: "Tiêu đề", description: "b", date: dayjs() },
      { title: "Tiêu đề", description: "c", date: dayjs() },
    ],
  },
];

export const room = [
  {
    title: "Nghĩ về lớp học khiến tôi cảm thấy không dễ chịu!",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi cảm thấy sợ hãi!",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi cảm thấy lo lắng khi ở trong lớp!",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title:
      "Thậm chí ngay trước giờ lên lớp, tôi cảm thấy lo lắng không biết mình có thể hiểu bài không.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi lo lắng không biết mình có chuẩn bị đầy đủ cho bài học chưa.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi lo lắng yêu cầu của lớp học có thể sẽ quá cao.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi lo lắng những bạn khác sẽ hiểu bài hơn mình.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Bởi vì tôi cảm thấy quá lo lắng nên tôi thà nghỉ học cho rồi.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi sợ có thể nói sai nên tôi thà không nói gì cả.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Khi nghĩ về lớp học, tôi cảm thấy buồn nôn.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi cảm thấy căng thẳng khi ở trong lớp.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title:
      "Khi tôi không hiểu điều gì đó quan trọng trong lớp thì tim tôi đập nhanh.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
];

export const learn = [
  {
    title:
      "Khi nhìn vào những cuốn sách tôi vẫn cần phải đọc, tôi cảm thấy lo lắng!",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi cảm thấy căng thẳng và lo lắng khi đang học!",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title:
      "Khi tôi không thể theo kịp việc học của mình, tôi cảm thấy hoảng sợ!",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title:
      "Tôi lo lắng không biết mình có thể đương đầu với tất cả công việc không.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Môn học làm tôi sợ vì tôi không hiểu nó tường tận.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi lo lắng không biết mình có hiểu đúng tài liệu học hay không.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi lo lắng đến độ thậm chí tôi không muốn bắt đầu học.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Trong khi học, tôi muốn tự làm mình xao lãng để bớt lo lắng.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Khi tôi phải học, tôi bắt đầu cảm thấy buồn nôn.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Khi sắp hết thời gian học, tim tôi bắt đầu đập nhanh.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Lo lắng về việc không hoàn thành tài liệu làm tôi đổ mồ hôi.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
];

export const examination = [
  {
    title: "Khi tôi phải thi, tôi bắt đầu cảm thấy buồn nôn.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Khi sắp hết thời gian thi, tim tôi bắt đầu đập nhanh.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi cảm thấy hoang mang sợ hãi khi làm bài thi!",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi lo lắng không biết mình đã ôn bài đủ chưa.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi lo lắng không biết bài thi có khó quá không.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi lo lắng không biết mình sẽ vượt qua kỳ thi hay không.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi rất lo lắng, tôi ước mình có thể bỏ qua kỳ thi.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi quá lo lắng đến mức chỉ mong cho kỳ thi sớm kết thúc.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi rất lo lắng nên tôi muốn ở một nơi nào khác mà không phải thi.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Tôi cảm thấy đau bụng trước khi làm bài thi.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Khi bắt đầu làm bài thi, tim tôi đập thình thịch.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
  {
    title: "Cả hai tay của tôi rung rẩy trong lúc thi.",
    questions: [
      { key: 1, label: "Rất không đồng ý" },
      { key: 2, label: "Không đồng ý" },
      { key: 3, label: "Phân vân" },
      { key: 4, label: "Đồng ý" },
      { key: 5, label: "Rất đồng ý" },
    ],
  },
];
