export interface WriteFormProps {
  initialData?: {
    title: string;
    content: string;
  };
  articleId?: string;
  variant: 'write' | 'edit';
}
