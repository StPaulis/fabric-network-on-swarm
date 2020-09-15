import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Voting extends ConvectorModel<Voting> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.blockchainVote';

  @Validate(yup.string())
  public id: string;

  @Required()
  @Validate(yup.string())
  public postId: string;
  @Validate(yup.string())
  public postIdType: string;

  @Validate(yup.string())
  public questionId: string;
  @Validate(yup.string())
  public questionIdType: string;

  @Required()
  @Validate(yup.string())
  public answerId: string;
  @Validate(yup.string())
  public answerIdType: string;

  @Required()
  @Validate(yup.string())
  public userId: string;
  @Validate(yup.string())
  public userIdType: string;

  @Required()
  @Validate(yup.string())
  public sender: string;

  @Validate(yup.string())
  public metadata: string;

  @ReadOnly()
  @Validate(yup.number())
  public created: number;

  @Validate(yup.number())
  public modified: number;
}
