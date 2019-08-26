#!/bin/sh
if [ -z "${DBENV}" ]; then
  ./build/bin/geth --config ./shyft-config/config.toml --ws --nat=any --mine --minerthreads 4 --targetgaslimit 8000000 --port "31340" --rpc --rpcapi="personal,eth,network,net,web3" --rpcport 8555 --rpcaddr "localhost" --disablepg --unlock "0x43EC6d0942f7fAeF069F7F63D0384a27f529B062,0x9e602164C5826ebb5A6B68E4AFD9Cd466043dc4A,0x5Bd738164C61FB50eb12E227846CbaeF2dE965Aa,0xC04eE4131895F1d0C294D508AF65D94060AA42BB,0x07D899C4aC0c1725C35C5f816e60273B33a964F7" --password ./shyft-config/unlockPasswords.txt --bootnodes enode://0f540aa1f3147b1dd5e336eca5a30314a272b52f4cbe78afa164772d8be0862b965c715aa27a00c23bca3e7219201510ca84faf463414818e00411189b93699d@127.0.0.1:31333
else
  /bin/geth --config ./shyft-config/config.toml --ws --nat=any --mine --minerthreads 4 --targetgaslimit 8000000 --port "31340" --rpc --rpcapi="personal,eth,network,net,web3" --rpcport 8555 --rpcaddr "localhost" --disablepg --unlock "0x43EC6d0942f7fAeF069F7F63D0384a27f529B062,0x9e602164C5826ebb5A6B68E4AFD9Cd466043dc4A,0x5Bd738164C61FB50eb12E227846CbaeF2dE965Aa,0xC04eE4131895F1d0C294D508AF65D94060AA42BB,0x07D899C4aC0c1725C35C5f816e60273B33a964F7" --password ./shyft-config/unlockPasswords.txt --bootnodes enode://0f540aa1f3147b1dd5e336eca5a30314a272b52f4cbe78afa164772d8be0862b965c715aa27a00c23bca3e7219201510ca84faf463414818e00411189b93699d@127.0.0.1:31333
fi
