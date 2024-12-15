import Image from "next/image";
import styles from "@/styles/pages/404.module.css";
import Link from "next/link";

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div
        className={styles.sky404Img1}
        style={{
          position: "relative",
        }}
      >
        <Image
          src="/images/404page/sky_cloud_1-img.png"
          alt="404 하늘, 구름 이미지"
          fill
          style={{
            ObjectFit: 'cover',
          }}
        />
      </div>
      <dev className={styles.notFoundContainerBox}>
        <div
          className={styles.notFoundImg}
          style={{
            position: "relative",
          }}
        >
          <Image
            src="/images/404page/Not_Found_img.png"
            alt="404 Not Found 이미지"
            fill
            style={{
              ObjectFit: 'cover',
            }}
          />
        </div>
        <div className={styles.notFoundImgBox}>
          <div
            className={styles.pandaPresidentImg}
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/images/404page/panda_president.png"
              alt="판다 대통령 이미지"
              fill
              style={{
                ObjectFit: 'cover',
              }}
            />
          </div>
          <div className={styles.notFoundTextBox}>
            <h1>Welcome to 404 Panda World!</h1>
            <p className={styles.pandaPresidentTextSmall}>You are looking for a page you can&apos;t find.
              Please follow me.</p>
            <Link href="/">
              <button className={styles.toHomePageButton}>
                홈페이지로 이동하기
              </button>
            </Link>
          </div>
        </div>
      </dev>
      <div
        className={styles.ground404Img2}
        style={{
          position: "relative",
        }}
      >
        <Image
          src="/images/404page/panda_land-rigt_big.png"
          alt="404 땅 이미지"
          fill
          style={{
            ObjectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}

export default NotFound;