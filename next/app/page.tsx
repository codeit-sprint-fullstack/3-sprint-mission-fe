import Image from "next/image";
import styles from "./page.module.css";
import GlobalContext from "./shared/contexts/globalContext";

export default function Home() {
  return (
    <GlobalContext.Provider value={'sssss'}>
      <div className={styles.page}>

      </div>
    </GlobalContext.Provider>
   
  );
}
