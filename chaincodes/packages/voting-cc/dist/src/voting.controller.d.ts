import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Voting } from './voting.model';
export declare class VotingController extends ConvectorController<ChaincodeTx> {
    vote(voting: Voting): Promise<string>;
    getByPostId(postId: string): Promise<any[]>;
}
