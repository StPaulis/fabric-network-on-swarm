// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Voting, VotingController } from '../src';
import { testData } from './voting.test.data';

describe('Voting', () => {
  let adapter: MockControllerAdapter;
  let votingCtrl: ConvectorControllerClient<VotingController>;

  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    votingCtrl = ClientFactory(VotingController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'VotingController',
        name: join(__dirname, '..')
      }
    ]);

    adapter.addUser('Test');
  });

  it('should create a default model', async () => {
    await votingCtrl.$withUser('Test').vote(testData);

    const justSavedModel = await adapter.getById<Voting>(testData.id);

    expect(justSavedModel.id).to.exist;
  });
});
