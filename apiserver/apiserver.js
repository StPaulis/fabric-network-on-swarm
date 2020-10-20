var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
const { FileSystemWallet, Gateway } = require('fabric-network');


var app = express();
app.use(bodyParser.json());

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    next();
});

// JWT
const jwtSharedKey = process.env.JWT_SHARED_KEY || 'shared-blockchain-api-key';
const jwtIssuer = process.env.JWT_ISSUER || 'https://auth.dev.egritosgroup.gr';
const jwtAlgorithm = process.env.JWT_ALGO || 'HS256';
app.use(jwt({ secret: jwtSharedKey, issuer: jwtIssuer, algorithms: [jwtAlgorithm] }));

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        console.log('Unauthorized request', new Date());
        res.status(401).send('Unauthorized');
    }
});

// Setting for Hyperledger Fabric
const path = require('path');
const ccpPath = process.env.CONNECTION_CONFIG_PATH || path.resolve(__dirname, '../network-config', 'network-profile.json');
const walletPath = process.env.WALLET_PATH || path.join(process.cwd(), '../network-config');

app.get('/api/query/:post_id', async function (req, res) {
    try {

        // Create a new file system based wallet for managing identities.
        const wallet = new FileSystemWallet(walletPath);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('admin');
        if (!userExists) {
            console.log('An identity for the user "admin" does not exist in the wallet');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'admin', discovery: { enabled: true, asLocalhost: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('voting');

        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        const result = await contract.evaluateTransaction('voting_getByPostId', req.params.post_id);
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        res.status(200).json({ response: result.toString() });

        await gateway.disconnect();

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({ error: error });
    }
});

app.post('/api/vote/', async function (req, res) {
    try {

        // Create a new file system based wallet for managing identities.
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('admin');
        if (!userExists) {
            console.log('An identity for the user "admin" does not exist in the wallet');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'admin', discovery: { enabled: true, asLocalhost: false } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('voting');

        // Submit the specified transaction.
        await contract.submitTransaction('voting_vote', req.body);
        console.log('Transaction has been submitted');
        res.send('Transaction has been submitted');

        // Disconnect from the gateway.
        await gateway.disconnect();

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
    }
})

console.log('Voting api has started!')
app.listen(8080);