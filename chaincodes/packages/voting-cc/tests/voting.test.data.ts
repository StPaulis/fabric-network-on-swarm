import { Voting } from '../src';

export const testData = new Voting({
  questionId: '1',
  answerId: '1',
  postId: '1',
  userId: '1',
  metadata: 'metadata',
  created: Date.now(),
  modified: Date.now()
});