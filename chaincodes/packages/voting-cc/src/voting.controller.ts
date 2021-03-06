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
    console.log(`***Voting started ( ${JSON.stringify(voting, null, 2)} )***`)
    
    try {
      const stub = this.tx.stub.getStub();
      voting.id = stub.getTxID();
      voting.created = Date.now();
      voting.modified = Date.now();
      voting.sender = this.sender;
      await voting.save();
      this.tx.stub.setEvent('TxSuccess', voting);
      console.log(`***Voting finished ( ${JSON.stringify(voting, null, 2)} )***`)
    } catch (error) {
      console.log(`***Voting finished with error ( ${JSON.stringify(error, null, 2)} )***`)
    }
    return voting.id;
  }

  @Invokable()
  public async getByPostId(
    @Param(yup.string())
    postId: string
  ) {
    let votes = [] as Voting[];
    let result = [] as any[];
    console.log(`***Get Votes by PostId (${postId}) started***`);

    try {
      votes = await Voting.query(Voting, {
        "selector": {
          "postId": postId
       }
      }) as Voting[];
      result = votes.map(x => x.toJSON());      
      console.log(`***Get Votes by PostId (${postId}) finished***`);
    } catch (error) {
      console.log(`***Get Votes by PostId return error (${JSON.stringify(error, null, 2)}) finished***`);
    }

    return result;
  }
}
