import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Voting } from './voting.model';

@Controller('voting')
export class VotingController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async vote(
    @Param(Voting)
    voting: Voting
  ) {
    const stub = this.tx.stub.getStub();
    
    voting.id = stub.getTxID();
    voting.created = Date.now();
    voting.modified = Date.now();
    voting.sender = this.sender;
    await voting.save();
    this.tx.stub.setEvent('TxSuccess', voting);
    return voting.id;
  }

  @Invokable()
  public async getByPostId(
    @Param(yup.string())
    postId: string
  ) {
      const votes = await Voting.query({ postId } as any) as Voting[]; 
      return votes.map(x => x.toJSON());
  }
}
