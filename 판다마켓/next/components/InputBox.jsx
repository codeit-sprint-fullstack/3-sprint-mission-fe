import styles from "@/components/BestPost.module.css";

export function InputBox({ title, content, height, onChange }) {
  return (
    <>
      {title ? <h3 className={styles.s_title}>{title}</h3> : null}
      <div className={styles.input_container}>
        <input
          type="text"
          placeholder={content}
          style={{ height: height }}
          onChange={onChange}
        />
      </div>
    </>
  );
}
