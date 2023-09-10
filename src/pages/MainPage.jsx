import MenuBar from "../components/MenuBar";
import ContentContainer from "../components/Page";
import SideBar from "../components/SideBar";

const MainPage = () => {
  const ESI_SCOPES = import.meta.env.VITE_ESI_SCOPE;
  const ESI_CLIENT_ID = import.meta.env.VITE_ESI_CLIENT_ID;
  const ESI_CALLBACK_URL = import.meta.env.VITE_ESI_CALLBACK_URL;

  const state = "unique-state";
  const link = new URL("https://login.eveonline.com/v2/oauth/authorize/");
  link.searchParams.append("response_type", "code");
  link.searchParams.append("redirect_uri", ESI_CALLBACK_URL);
  link.searchParams.append("client_id", ESI_CLIENT_ID);
  link.searchParams.append("scope", ESI_SCOPES);
  link.searchParams.append("state", state);
  console.log("link::: ", link.href);
  return (
    <>
      <SideBar />
      <MenuBar title="Settings" />
      <ContentContainer />
      {/* <a className="text-center font-bold" href={link.href}>
        Login
      </a> */}
    </>
  );
};

export default MainPage;
