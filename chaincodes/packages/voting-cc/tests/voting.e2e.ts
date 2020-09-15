// tslint:disable:no-unused-expression
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import 'mocha';

import { CouchDBStorage } from '@worldsibu/convector-storage-couchdb';
import { FabricControllerAdapter } from '@worldsibu/convector-platform-fabric';
import { BaseStorage, ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';

import { Voting, VotingController } from '../src';
import { testData } from './voting.test.data';

describe('Voting', () => {
  let adapter: FabricControllerAdapter;
  let votingCtrl: ConvectorControllerClient<VotingController>;

  before(async () => {
      adapter = new FabricControllerAdapter({
        skipInit: true,
        txTimeout: 300000,
        user: 'user1',
        channel: 'ch1',
        chaincode: 'voting',
        keyStore: '$HOME/hyperledger-fabric-network/.hfc-org1',
        networkProfile: '$HOME/hyperledger-fabric-network/network-profiles/org1.network-profile.yaml',
        userMspPath: '$HOME/hyperledger-fabric-network/artifacts/crypto-config/peerOrganizations/org1.hurley.lab/users/User1@org1.hurley.lab/msp',
        userMsp: 'org1MSP'
      });
      votingCtrl = ClientFactory(VotingController, adapter);
      await adapter.init(true);

      BaseStorage.current = new CouchDBStorage({
        host: 'localhost',
        protocol: 'http',
        port: '5084'
      }, 'ch1_voting');
  });

  after(() => {
    // Close the event listeners
    adapter.close();
  });

  it('should create and get the default model', async () => {
    await votingCtrl.vote(testData);
    const justSavedModel = await votingCtrl.getByPostId(testData.postId);
    expect(justSavedModel[0].id).to.equal(testData.postId);
  });

});
