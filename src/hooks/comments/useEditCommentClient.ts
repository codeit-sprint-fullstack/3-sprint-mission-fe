import { editingCommentIdAtom } from '@/lib/store/atoms';
import { useAtom } from 'jotai';
import { useState } from 'react';

export const useEditCommentClient = ({
  content,
  id,
}: {
  content: string;
  id: string;
}) => {
  const [editingCommentId, setEditingCommentId] = useAtom(editingCommentIdAtom);
  const [comment, setComment] = useState(content);
  const isEditing = editingCommentId === id;

  const onEditButtonClick = () => {
    setEditingCommentId(id);
  };

  return {
    isEditing,
    comment,
    setComment,
    setEditingCommentId,
    onEditButtonClick,
  };
};
