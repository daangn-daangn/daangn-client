export interface IReview {
  id: number;
  reviewer_id: number;
  reviewer: string;
  profile_url: string;
  location: string;
  content: string;
  created_at: Date;
  review_type: 0 | 1;
}
