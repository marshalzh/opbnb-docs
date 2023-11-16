"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[2851],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>b});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),l=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},d=function(n){var e=l(n.components);return r.createElement(c.Provider,{value:e},n.children)},p="mdxType",h={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),p=l(t),m=o,b=p["".concat(c,".").concat(m)]||p[m]||h[m]||a;return t?r.createElement(b,i(i({ref:e},d),{},{components:t})):r.createElement(b,i({ref:e},d))}));function b(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[p]="string"==typeof n?n:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8897:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={},i="Arbitrary BEP20 Cross-chain",s={unversionedId:"build-on-opbnb/bep20-crosschain",id:"build-on-opbnb/bep20-crosschain",title:"Arbitrary BEP20 Cross-chain",description:"You can use the opBNB bridge or third-party bridges like zkBridge and rhino.fi to easily deposit and withdraw most mainstream BEP20 tokens on BSC.",source:"@site/docs/build-on-opbnb/bep20-crosschain.md",sourceDirName:"build-on-opbnb",slug:"/build-on-opbnb/bep20-crosschain",permalink:"/opbnb-docs/docs/build-on-opbnb/bep20-crosschain",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/build-on-opbnb/bep20-crosschain.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"User manual for geth sync feature",permalink:"/opbnb-docs/docs/build-on-opbnb/geth-sync"},next:{title:"Why opBNB as a New Layer2 Solution",permalink:"/opbnb-docs/docs/core-concepts/need-for-opbnb"}},c={},l=[{value:"Deploying a L2 Mirror Token Contract",id:"deploying-a-l2-mirror-token-contract",level:2},{value:"Cross-chain Transfer with JS SDK",id:"cross-chain-transfer-with-js-sdk",level:2}],d={toc:l};function p(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"arbitrary-bep20-cross-chain"},"Arbitrary BEP20 Cross-chain"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://opbnb-bridge.bnbchain.org/deposit"},"opBNB bridge")," or third-party bridges like ",(0,o.kt)("a",{parentName:"p",href:"https://zkbridge.com/opbnb"},"zkBridge")," and ",(0,o.kt)("a",{parentName:"p",href:"https://app.rhino.fi/bridge?token=BNB&chainOut=OPBNB&chain=BINANCE"},"rhino.fi")," to easily deposit and withdraw most mainstream BEP20 tokens on BSC."),(0,o.kt)("p",null,"If a token is not supported by these bridges, you have the option to deploy your own L2 mirror token contract on opBNB.\nThis allows for permissionless cross-chain transfer of these tokens."),(0,o.kt)("p",null,"This guide will help you deploy your L2 mirror token contract on opBNB and demonstrate how to use it for transferring tokens between BSC and opBNB."),(0,o.kt)("h2",{id:"deploying-a-l2-mirror-token-contract"},"Deploying a L2 Mirror Token Contract"),(0,o.kt)("p",null,"There is a pre-deployed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/opbnb/blob/develop/packages/contracts-bedrock/contracts/universal/OptimismMintableERC20Factory.sol"},"OptimismMintableERC20Factory contract")," on opBNB that allows you to deploy a L2 token by calling a function of the factory contract.\nThe address of the contract is ",(0,o.kt)("inlineCode",{parentName:"p"},"0x4200000000000000000000000000000000000012"),"."),(0,o.kt)("p",null,"The function signature and the emitted event are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n    * @notice Emitted whenever a new OptimismMintableERC20 is created.\n    *\n    * @param localToken  Address of the created token on the local chain.\n    * @param remoteToken Address of the corresponding token on the remote chain.\n    * @param deployer    Address of the account that deployed the token.\n    */\nevent OptimismMintableERC20Created(\n    address indexed localToken,\n    address indexed remoteToken,\n    address deployer\n);\n\n/**\n    * @notice Creates an instance of the OptimismMintableERC20 contract.\n    *\n    * @param _remoteToken Address of the token on the remote chain.\n    * @param _name        ERC20 name.\n    * @param _symbol      ERC20 symbol.\n    *\n    * @return Address of the newly created token.\n    */\nfunction createOptimismMintableERC20(\n    address _remoteToken,\n    string memory _name,\n    string memory _symbol\n) public returns (address) {}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"_remoteToken")," is the address of the token on the remote chain, which is BSC in this case.\n",(0,o.kt)("inlineCode",{parentName:"p"},"_name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"_symbol")," should be the same with the name and symbol of the token on BSC.\nThe decimal of the token on opBNB is always 18."),(0,o.kt)("p",null,"Here is the ",(0,o.kt)("a",{parentName:"p",href:"https://opbnbscan.com/tx/0x4e3da7329cdf0ad67fb82a2a02978518f988125221229747afe90886f7e6512b"},"transaction")," that generates the ",(0,o.kt)("a",{parentName:"p",href:"https://opbnbscan.com/address/0x50c5725949a6f0c72e6c4a641f24049a917db0cb"},"FDUSD token")," on opBNB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning"),": It does not support certain BEP20 configurations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/d-xo/weird-erc20#fee-on-transfer"},"Fee on transfer tokens")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/d-xo/weird-erc20#balance-modifications-outside-of-transfers-rebasingairdrops"},"Tokens that modify balances without emitting a Transfer event"))),(0,o.kt)("h2",{id:"cross-chain-transfer-with-js-sdk"},"Cross-chain Transfer with JS SDK"),(0,o.kt)("p",null,"Once you have deployed your own L2 mirror token contract, you can use the JS SDK to transfer tokens between BSC and opBNB."),(0,o.kt)("p",null,"The following script is a TypeScript demo script.\nIt uses ",(0,o.kt)("inlineCode",{parentName:"p"},"ethers.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@eth-optimism/sdk")," to transfer tokens between BSC and opBNB."),(0,o.kt)("p",null,"You can save the script as ",(0,o.kt)("inlineCode",{parentName:"p"},"erc20CrosschainTransfer.ts")," and run it with the following command(ensure that you have installed ",(0,o.kt)("a",{parentName:"p",href:"https://docs.deno.com/runtime/manual#install-deno"},"deno"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deno run -A erc20CrosschainTransfer.ts\n")),(0,o.kt)("p",null,"Feel free to modify the script to suit your needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Contract, ethers, Signer, Wallet } from "npm:ethers@^5";\nimport "https://deno.land/x/dotenv/load.ts";\nimport { CrossChainMessenger, ETHBridgeAdapter } from "npm:@eth-optimism/sdk";\nimport * as optimismSDK from "npm:@eth-optimism/sdk";\n\nconst gwei = BigInt(1e9);\nconst BridgeConfigTestnet = {\n  l1URL: "https://bsc-testnet.bnbchain.org",\n  l2URL: "https://opbnb-testnet-rpc.bnbchain.org",\n  l1ChainID: 97,\n  l2ChainID: 5611,\n  contracts: {\n    AddressManager: "0x0000000000000000000000000000000000000000",\n    StateCommitmentChain: "0x0000000000000000000000000000000000000000",\n    CanonicalTransactionChain: "0x0000000000000000000000000000000000000000",\n    BondManager: "0x0000000000000000000000000000000000000000",\n    L1CrossDomainMessenger: "0xD506952e78eeCd5d4424B1990a0c99B1568E7c2C",\n    L1StandardBridge: "0x677311Fd2cCc511Bbc0f581E8d9a07B033D5E840",\n    OptimismPortal: "0x4386C8ABf2009aC0c263462Da568DD9d46e52a31",\n    L2OutputOracle: "0xFf2394Bb843012562f4349C6632a0EcB92fC8810",\n  },\n  l1GasPrice: 5n * gwei,\n  l1Explorer: "https://testnet.bscscan.com",\n  l2Explorer: "https://testnet.opbnbscan.com",\n};\n\nconst BridgeConfigMainnet = {\n  l1URL: "https://bsc-dataseed.bnbchain.org",\n  l2URL: "https://opbnb-mainnet-rpc.bnbchain.org",\n  l1ChainID: 56,\n  l2ChainID: 204,\n  contracts: {\n    AddressManager: "0x0000000000000000000000000000000000000000",\n    StateCommitmentChain: "0x0000000000000000000000000000000000000000",\n    CanonicalTransactionChain: "0x0000000000000000000000000000000000000000",\n    BondManager: "0x0000000000000000000000000000000000000000",\n    L1CrossDomainMessenger: "0xd95D508f13f7029CCF0fb61984d5dfD11b879c4f",\n    L1StandardBridge: "0xF05F0e4362859c3331Cb9395CBC201E3Fa6757Ea",\n    OptimismPortal: "0x7e2419F79c9546B9A0E292Fd36aC5005ffed5495",\n    L2OutputOracle: "0x0d61A015BAeF63f6740afF8294dAc278A494f6fA",\n  },\n  l1GasPrice: 3n * gwei,\n  l1Explorer: "https://bscscan.com",\n  l2Explorer: "https://opbnbscan.com",\n};\n\nconst BridgeConfig = BridgeConfigTestnet;\n\nconst privateKey = Deno.env.get("PRIVATE_KEY")!;\nconst l1RpcProvider = new ethers.providers.JsonRpcProvider(BridgeConfig.l1URL);\nconst l2RpcProvider = new ethers.providers.JsonRpcProvider(BridgeConfig.l2URL);\nconst wallet = new Wallet(privateKey);\nconst l1Signer = wallet.connect(l1RpcProvider);\nconst l2Signer = wallet.connect(l2RpcProvider);\nlet crossChainMessenger: CrossChainMessenger;\n\nconst l1BUSDAddr = "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee";\nconst l2BUSDAddr = "0xa9aD1484D9Bfb27adbc2bf50A6E495777CC8cFf2";\n\nfunction setup() {\n  crossChainMessenger = new CrossChainMessenger({\n    l1ChainId: BridgeConfig.l1ChainID,\n    l2ChainId: BridgeConfig.l2ChainID,\n    l1SignerOrProvider: l1Signer,\n    l2SignerOrProvider: l2Signer,\n    bedrock: true,\n    contracts: {\n      l1: BridgeConfig.contracts,\n      l2: optimismSDK.DEFAULT_L2_CONTRACT_ADDRESSES,\n    },\n  });\n  const ethBridgeAdapter = new ETHBridgeAdapter(\n    {\n      messenger: crossChainMessenger,\n      l1Bridge: BridgeConfig.contracts.L1StandardBridge,\n      l2Bridge: "0x4200000000000000000000000000000000000010",\n    },\n  );\n  crossChainMessenger.bridges.ETH = ethBridgeAdapter;\n}\n\nasync function depositERC20() {\n  const tx = await crossChainMessenger.depositERC20(l1BUSDAddr, l2BUSDAddr, 1, {\n    overrides: {\n      gasPrice: BridgeConfig.l1GasPrice,\n    },\n  });\n  await tx.wait();\n  console.log(\n    `depositBNB Transaction hash (on L1): ${BridgeConfig.l1Explorer}/tx/${tx.hash}`,\n  );\n  console.log(\n    `please check ${BridgeConfig.l2Explorer}/address/${l1Signer.address}?tab=deposit&p=1 for the deposit txn on L2`,\n  );\n}\n\nasync function withdrawERC20(): Promise<string> {\n  const tx = await crossChainMessenger.withdrawERC20(\n    l1BUSDAddr,\n    l2BUSDAddr,\n    1,\n    {\n      overrides: {\n        maxPriorityFeePerGas: 1,\n        maxFeePerGas: 10000,\n      },\n    },\n  );\n  await tx.wait();\n  console.log(\n    `withdrawBNB Transaction hash (on L2): ${BridgeConfig.l2Explorer}/tx/${tx.hash}`,\n  );\n  return tx.hash;\n}\n\nasync function proveWithdrawal(hash: string, wait: boolean = true) {\n  while (true) {\n    try {\n      const tx = await crossChainMessenger.proveMessage(hash, {\n        overrides: {\n          gasPrice: BridgeConfig.l1GasPrice,\n        },\n      });\n      await tx.wait();\n      console.log(\n        `proveWithdrawal Transaction hash (on L1): ${BridgeConfig.l1Explorer}/tx/${tx.hash}`,\n      );\n      break;\n    } catch (error) {\n      console.log(error.message);\n      if (error.message.includes("state root for message not yet published")) {\n        if (wait) {\n          console.log(\n            `Waiting for status to be READY_TO_PROVE, current time: ${new Date()}`,\n          );\n        } else {\n          throw error;\n        }\n      } else {\n        throw error;\n      }\n    }\n  }\n}\n\nasync function finalizeWithdrawal(hash: string, wait: boolean = true) {\n  while (true) {\n    try {\n      const tx = await crossChainMessenger.finalizeMessage(hash, {\n        overrides: {\n          gasPrice: BridgeConfig.l1GasPrice,\n        },\n      });\n      await tx.wait();\n      console.log(\n        `finalizeWithdrawal Transaction hash (on L1): ${BridgeConfig.l1Explorer}/tx/${tx.hash}`,\n      );\n      break;\n    } catch (error) {\n      if (\n        error.message.includes(\n          "proven withdrawal finalization period has not elapsed",\n        )\n      ) {\n        if (wait) {\n          console.log(\n            `Waiting for status to be READY_TO_FINALIZE, current time: ${new Date()}`,\n          );\n        } else {\n          throw error;\n        }\n      } else {\n        throw error;\n      }\n    }\n  }\n}\n\nasync function main() {\n  console.log("opbnbBridge demo");\n\n  setup();\n  // deposit ERC20\n  await depositERC20()\n\n  // withdraw ERC20\n  const hash = await withdrawERC20();\n  await proveWithdrawal(hash);\n  await finalizeWithdrawal(hash);\n}\n\nawait main();\n')))}p.isMDXComponent=!0}}]);