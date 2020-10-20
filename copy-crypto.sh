#!/bin/bash

# ---------------------------------------------------------------------------
# Clear screen
# ---------------------------------------------------------------------------
clear

echo "# ---------------------------------------------------------------------------"
echo "# Remove old crypto material"
echo "# ---------------------------------------------------------------------------"
rm -rf mkdir /var/mynetwork/*

echo "# ---------------------------------------------------------------------------"
echo "# Create material folder if necessary"
echo "# ---------------------------------------------------------------------------"
if [ -d "/var/mynetwork" ] 
then
  echo "Material folder exists"
else 
  mkdir -p /var/mynetwork -m 777
  echo "Material folder created!"
fi

echo 
echo "# ---------------------------------------------------------------------------"
echo "# Create directories to copy crypto material"
echo "# ---------------------------------------------------------------------------"
mkdir -p /var/mynetwork/chaincode /var/mynetwork/certs /var/mynetwork/bin /var/mynetwork/fabric-src /var/mynetwork/network/

echo 
echo "# ---------------------------------------------------------------------------"
echo "# Clone fabric repository"
echo "# ---------------------------------------------------------------------------"
git clone https://github.com/hyperledger/fabric /var/mynetwork/fabric-src/hyperledger/fabric
cd /var/mynetwork/fabric-src/hyperledger/fabric
git checkout release-1.4

echo 
echo "# ---------------------------------------------------------------------------"
echo "# Copy new crypto material"
echo "# ---------------------------------------------------------------------------"
cd -

cp -R crypto-config /var/mynetwork/certs/
cp -R config /var/mynetwork/certs/
cp -R chaincodes/* /var/mynetwork/chaincode/
cp -R bin/* /var/mynetwork/bin/
cp -R network-config/* /var/mynetwork/network/

echo "# ---------------------------------------------------------------------------"
echo "# Create couchdb data folder if necessary"
echo "# ---------------------------------------------------------------------------"
if [ -d "/var/mydb/couchdb1" ] 
then
    echo "Directory /var/mydb/couchdb1/ exists." 
else
    echo "Directory /var/mydb/couchdb1/ does not exists. Creating..."
    if [ -d "/var/mydb" ]
    then 
      echo "Directory /var/mydb/ exists" 
    else 
      mkdir -p /var/mydb -m 777
    fi
    mkdir -p /var/mydb/couchdb1 -m 777
    echo "Directory /var/mydb/couchdb1/ does not exists. Created..."
fi
