import { useParams } from "next/navigation";
import Page from "./page";

const Default = () => {
  const { uid } = useParams();

  return <Page params={Promise.resolve({ uid: uid?.toString() || "" })} />;
};

export default Default;
