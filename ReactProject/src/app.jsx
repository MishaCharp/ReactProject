import { Layout } from "./components/Layout/Layout";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider.jsx";
import { UserProvider } from "./components/UserProvider/UserProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { RestorauntMainPage } from "./components/RestourantMainPage/RestourantMainPage.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Layout>
            <RestorauntMainPage />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};
