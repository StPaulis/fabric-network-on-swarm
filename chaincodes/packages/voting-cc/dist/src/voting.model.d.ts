import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Voting extends ConvectorModel<Voting> {
    readonly type: string;
    id: string;
    postId: string;
    postIdType: string;
    questionId: string;
    questionIdType: string;
    answerId: string;
    answerIdType: string;
    userId: string;
    userIdType: string;
    sender: string;
    metadata: string;
    created: number;
    modified: number;
}
