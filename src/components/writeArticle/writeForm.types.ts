export interface ArticleFormProps {
  initialData?: ArticleFormData;
  articleId?: string;
  variant: 'write' | 'edit';
}

export interface ArticleFormData {
  title: string;
  content: string;
}
