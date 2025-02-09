import styles from "@/components/ItemsPost/TagsForm.module.css";
import Image from "next/image";
import { useState, ChangeEvent, KeyboardEvent } from "react";

interface TagsFormProps {
  updateFormData: (field: string, value: string[]) => void;
}

export default function TagsForm({ updateFormData }: TagsFormProps) {
  const [tagMessage, setTagMessage] = useState<string>("");
  const [isTag, setIsTag] = useState<boolean>(true);
  const [tags, setTags] = useState<string[]>([]);

  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTag = e.target.value;

    if (currentTag === "" || currentTag.length > 5) {
      setTagMessage("5글자 이내로 입력해주세요");
      setIsTag(false);
    } else {
      setTagMessage("");
      setIsTag(true);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const value = e.currentTarget.value;
    if (value.length > 5 || !value.trim()) return;

    const newTags = [...tags, value];
    setTags(newTags);
    updateFormData("tags", newTags);
    e.currentTarget.value = "";
    setTagMessage("");
  };

  const handleRemoveTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    updateFormData("tags", newTags);
  };

  return (
    <div className={styles.tagWrapper}>
      <div className={styles.tagContainer}>
        <label className={styles.tagText}>태그</label>
        <input
          type="text"
          placeholder="태그를 입력해주세요"
          style={{ border: isTag ? "none" : "1px solid #F74747" }}
          onChange={onChangeTag}
          onKeyDown={handleKeyDown}
          className={styles.tagInput}
        />
        <p className={styles.errorMsg}>{tagMessage}</p>
      </div>
      <ul className={styles.tagBtnSection}>
        {tags.map((tag, index) => (
          <li key={index} className={styles.tag}>
            #{tag}
            <button type="button" onClick={() => handleRemoveTag(index)}>
              <Image
                className={styles.tagIcon}
                src="/images/ic_x.png"
                width={22}
                height={24}
                alt="X Icon"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
