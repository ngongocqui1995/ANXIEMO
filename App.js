import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/pages/HomeScreen";
import LoginScreen from "./src/pages/LoginScreen";
import RegisterScreen from "./src/pages/RegisterScreen";
import SplashScreen from "./src/pages/SplashScreen";
import { NAVIGATOR_SCREEN } from "./src/utils/enum";
import QuestionScreen from "./src/pages/QuestionScreen";
import RegisterDetail from "./src/pages/RegisterScreen/RegisterDetail";
import QuestionDetail from "./src/pages/QuestionScreen/QuestionDetail";
import AdminScreen from "./src/pages/AdminScreen";
import ResultScreen from "./src/pages/ResultScreen";
import RepoScreen from "./src/pages/RepoScreen";
import NoteScreen from "./src/pages/NoteScreen";
import RepoDetail from "./src/pages/RepoScreen/RepoDetail";
import NoteDetail from "./src/pages/NoteScreen/NoteDetail";
import NoteForm from "./src/pages/NoteScreen/NoteForm";
import AboutScreen from "./src/pages/AboutScreen";
import UpdateProfile from "./src/pages/ProfileScreen/UpdateProfile";
import ForgotPassword from "./src/pages/ForgotPassword";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NAVIGATOR_SCREEN.SPLASH}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.HOME}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.LOGIN}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.REGISTER}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.REGISTER_DETAIL}
          component={RegisterDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.QUESTION}
          component={QuestionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.QUESTION_DETAIL}
          component={QuestionDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.ADMIN}
          component={AdminScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.RESULT}
          component={ResultScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.REPO}
          component={RepoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.NOTE}
          component={NoteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.REPO_DETAIL}
          component={RepoDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.NOTE_DETAIL}
          component={NoteDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.NOTE_FORM}
          component={NoteForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.ABOUT}
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.UPDATE_PROFILE}
          component={UpdateProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NAVIGATOR_SCREEN.FORGOT_PASSWORD}
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
