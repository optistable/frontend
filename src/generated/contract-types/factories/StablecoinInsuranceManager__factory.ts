/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  StablecoinInsuranceManager,
  StablecoinInsuranceManagerInterface,
} from "../StablecoinInsuranceManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "policyId",
        type: "bytes32",
      },
    ],
    name: "activatePolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "policyId",
        type: "bytes32",
      },
    ],
    name: "cancelPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_insuredToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_insurerToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_policyManagerContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_premiumAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_insuredAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_policyTermInSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_depegTermInSeconds",
        type: "uint256",
      },
    ],
    name: "createPolicy",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "policyId",
        type: "bytes32",
      },
    ],
    name: "getPolicy",
    outputs: [
      {
        internalType: "contract StablecoinInsurancePolicy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "policies",
    outputs: [
      {
        internalType: "contract StablecoinInsurancePolicy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_policyId",
        type: "bytes32",
      },
    ],
    name: "policyIsDepegged",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "policyId",
        type: "bytes32",
      },
    ],
    name: "recordPolicyDepeg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b50611e03806100246000396000f3fe608060405260043610620000795760003560e01c8063c67503e21162000054578063c67503e2146200010c578063da2ae73c1462000142578063ddbfd8ef1462000167578063e661e1f214620001a157600080fd5b806399f8a6cc146200007e578063a3f685f914620000a5578063a86146d014620000e7575b600080fd5b3480156200008b57600080fd5b50620000a36200009d366004620007d6565b620001c7565b005b348015620000b257600080fd5b50620000ca620000c4366004620007d6565b50600090565b6040516001600160a01b0390911681526020015b60405180910390f35b348015620000f457600080fd5b50620000a362000106366004620007d6565b62000276565b3480156200011957600080fd5b50620001316200012b366004620007d6565b620002fd565b6040519015158152602001620000de565b3480156200014f57600080fd5b50620000a362000161366004620007d6565b6200037f565b3480156200017457600080fd5b50620000ca62000186366004620007d6565b6001602052600090815260409020546001600160a01b031681565b620001b8620001b23660046200080d565b62000407565b604051908152602001620000de565b60008181526001602052604090205481906001600160a01b0316620002095760405162461bcd60e51b815260040162000200906200087c565b60405180910390fd5b60008281526001602052604080822054815163323a5f3560e11b815291516001600160a01b03909116928392636474be6a926004808301939282900301818387803b1580156200025857600080fd5b505af11580156200026d573d6000803e3d6000fd5b50505050505050565b60008181526001602052604090205481906001600160a01b0316620002af5760405162461bcd60e51b815260040162000200906200087c565b6000828152600160205260408082205481516213bcb360ea1b815291516001600160a01b03909116928392634ef2cc00926004808301939282900301818387803b1580156200025857600080fd5b6000818152600160209081526040808320548151631680cca960e21b815291516001600160a01b03909116928392635a0332a492600480830193928290030181865afa15801562000352573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003789190620008ab565b9392505050565b60008181526001602052604090205481906001600160a01b0316620003b85760405162461bcd60e51b815260040162000200906200087c565b60008281526001602052604080822054815163660d403f60e01b815291516001600160a01b0390911692839263660d403f926004808301939282900301818387803b1580156200025857600080fd5b600087620004168686620008e5565b604051636eb1769f60e11b8152336004820152306024820152829082906001600160a01b0383169063dd62ed3e90604401602060405180830381865afa15801562000465573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200048b919062000901565b1015620004db5760405162461bcd60e51b815260206004820152601f60248201527f75736572206e6f7420617574686f72697a656420746f207472616e7366657200604482015260640162000200565b6040516370a0823160e01b815233600482015282906001600160a01b038316906370a0823190602401602060405180830381865afa15801562000522573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000548919062000901565b1015620005a95760405162461bcd60e51b815260206004820152602860248201527f496e7375726564206d757374206465706f7369742074686520726571756972656044820152671908185b5bdd5b9d60c21b606482015260840162000200565b60008b90506000338d8d8f8c8e8d8d3030604051620005c890620007c8565b6001600160a01b039a8b168152988a1660208a015296891660408901529488166060880152608087019390935260a086019190915260c085015260e0840152831661010083015290911661012082015261014001604051809103906000f08015801562000639573d6000803e3d6000fd5b5090506001600160a01b0382166323b872dd3383620006598e8e620008e5565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af1158015620006ae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006d49190620008ab565b620007225760405162461bcd60e51b815260206004820152601860248201527f6661696c656420746f207472616e736665722066756e64730000000000000000604482015260640162000200565b80600160008054846040516020016200075792919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b60405160208183030381529060405280519060200120815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600080815480929190620007b3906200091b565b91905055505050505050979650505050505050565b611496806200093883390190565b600060208284031215620007e957600080fd5b5035919050565b80356001600160a01b03811681146200080857600080fd5b919050565b600080600080600080600060e0888a0312156200082957600080fd5b6200083488620007f0565b96506200084460208901620007f0565b95506200085460408901620007f0565b969995985095966060810135965060808101359560a0820135955060c0909101359350915050565b602080825260159082015274141bdb1a58de48191bd95cc81b9bdd08195e1a5cdd605a1b604082015260600190565b600060208284031215620008be57600080fd5b815180151581146200037857600080fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115620008fb57620008fb620008cf565b92915050565b6000602082840312156200091457600080fd5b5051919050565b600060018201620009305762000930620008cf565b506001019056fe60806040819052600060088190556009819055600a818155600b919091556010805463ffffffff1916909117905562001496388190039081908339810160408190526200004c91620003b0565b6001600160a01b038916620000a85760405162461bcd60e51b815260206004820152601f60248201527f496e737572656420746f6b656e206d757374206265207370656369666965640060448201526064015b60405180910390fd5b6001600160a01b0388166200010b5760405162461bcd60e51b815260206004820152602260248201527f436f6c6c61746572616c20746f6b656e206d7573742062652073706563696669604482015261195960f21b60648201526084016200009f565b6001600160a01b038716620001635760405162461bcd60e51b815260206004820152601f60248201527f5072656d69756d20746f6b656e206d757374206265207370656369666965640060448201526064016200009f565b876001600160a01b0316896001600160a01b031603620001ec5760405162461bcd60e51b815260206004820152603460248201527f496e737572656420746f6b656e20616e6420636f6c6c61746572616c20746f6b60448201527f656e206d75737420626520646966666572656e7400000000000000000000000060648201526084016200009f565b600086116200024c5760405162461bcd60e51b815260206004820152602560248201527f496e737572656420616d6f756e74206d75737420626520677265617465722074604482015264068616e20360dc1b60648201526084016200009f565b600085116200029e5760405162461bcd60e51b815260206004820152601e60248201527f5072656d69756d206d7573742062652067726561746572207468616e2030000060448201526064016200009f565b6001600160a01b038216620002f65760405162461bcd60e51b815260206004820152601f60248201527f446174612070726f7669646572206d757374206265207370656369666965640060448201526064016200009f565b600180546001600160a01b03199081166001600160a01b039c8d16179091556003805482169a8c169a909a17909955600480548a16988b1698909817909755600580548916968a1696909617909555600693909355600c91909155600755600d55601280548416918516919091179055426011556010805460ff60201b19166401000000001790556000805490921692169190911790556200045b565b80516001600160a01b0381168114620003ab57600080fd5b919050565b6000806000806000806000806000806101408b8d031215620003d157600080fd5b620003dc8b62000393565b9950620003ec60208c0162000393565b9850620003fc60408c0162000393565b97506200040c60608c0162000393565b965060808b0151955060a08b0151945060c08b0151935060e08b01519250620004396101008c0162000393565b91506200044a6101208c0162000393565b90509295989b9194979a5092959850565b61102b806200046b6000396000f3fe60806040526004361061007b5760003560e01c8063660d403f1161004e578063660d403f146100d55780636709c18b146100ea5780638b4924a1146100ff578063cc01f8751461010757600080fd5b806309a7cb34146100805780634ef2cc001461008a5780635a0332a41461009f5780636474be6a146100c0575b600080fd5b610088610127565b005b34801561009657600080fd5b5061008861032e565b3480156100ab57600080fd5b50604080516000815290519081900360200190f35b3480156100cc57600080fd5b5061008861045b565b3480156100e157600080fd5b5061008861068d565b3480156100f657600080fd5b5061008861081c565b6100886108f9565b34801561011357600080fd5b50610088610122366004610cf1565b610b05565b6002546001600160a01b0316331461015a5760405162461bcd60e51b815260040161015190610d21565b60405180910390fd5b600654600354604051636eb1769f60e11b81523360048201523060248201526001600160a01b039091169063dd62ed3e90604401602060405180830381865afa1580156101ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cf9190610d68565b10156101ed5760405162461bcd60e51b815260040161015190610d81565b6006546003546040516370a0823160e01b81523360048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610238573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025c9190610d68565b101561027a5760405162461bcd60e51b815260040161015190610dde565b6003546006546040516323b872dd60e01b815233600482015230602482015260448101919091526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156102d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f99190610e26565b6103155760405162461bcd60e51b815260040161015190610e48565b34600960008282546103279190610ea7565b9091555050565b6000601054600160201b900460ff16600481111561034e5761034e610ec0565b1415801561037a57506003601054600160201b900460ff16600481111561037757610377610ec0565b14155b80156103a457506004601054600160201b900460ff1660048111156103a1576103a1610ec0565b14155b6040516020016103b390610ed6565b604051602081830303815290604052906103e05760405162461bcd60e51b81526004016101519190610f4f565b506001546001600160a01b0316331461040b5760405162461bcd60e51b815260040161015190610f62565b61043d6040518060400160405280601181526020017043616e63656c6c696e6720706f6c69637960781b815250610b43565b601080546003919064ff000000001916600160201b835b0217905550565b6000601054600160201b900460ff16600481111561047b5761047b610ec0565b141580156104a757506003601054600160201b900460ff1660048111156104a4576104a4610ec0565b14155b80156104d157506004601054600160201b900460ff1660048111156104ce576104ce610ec0565b14155b6040516020016104e090610ed6565b6040516020818303038152906040529061050d5760405162461bcd60e51b81526004016101519190610f4f565b50306001600160a01b0316635a0332a46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561054c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105709190610e26565b1561066b576002601054600160201b900460ff16600481111561059557610595610ec0565b0361064f57601054600f5463ffffffff909116906105b39043610fa9565b6105bd9190610fbc565b600e60008282546105ce9190610ea7565b925050819055506106076040518060400160405280600e81526020016d03a34b6b2a232b832b3b3b2b21d160951b815250600e54610b89565b600d54600e541061064a576106426040518060400160405280600f81526020016e10db185a5b481d195c9b5cc81b595d608a1b815250610b43565b61064a610bd2565b610665565b6010805464ff0000000019166402000000001790555b43600f55565b6000600e55601080546001919064ff000000001916600160201b83610454565b565b6002546001600160a01b031633146106b75760405162461bcd60e51b815260040161015190610d21565b6000601054600160201b900460ff1660048111156106d7576106d7610ec0565b146107245760405162461bcd60e51b815260206004820152601f60248201527f506f6c696379206d757374206265206177616974696e6720696e7375726572006044820152606401610151565b60065460085410156107485760405162461bcd60e51b815260040161015190610dde565b600c54600a54101561079c5760405162461bcd60e51b815260206004820181905260248201527f496e7375726564206d757374206465706f73697420746865207072656d69756d6044820152606401610151565b60065460095410156108015760405162461bcd60e51b815260206004820152602860248201527f496e7375726572206d757374206465706f7369742074686520726571756972656044820152671908185b5bdd5b9d60c21b6064820152608401610151565b601080546001919064ff000000001916600160201b83610454565b6000601054600160201b900460ff16600481111561083c5761083c610ec0565b1415801561086857506003601054600160201b900460ff16600481111561086557610865610ec0565b14155b801561089257506004601054600160201b900460ff16600481111561088f5761088f610ec0565b14155b6040516020016108a190610ed6565b604051602081830303815290604052906108ce5760405162461bcd60e51b81526004016101519190610f4f565b506002546001600160a01b0316331461068b5760405162461bcd60e51b815260040161015190610d21565b6001546001600160a01b031633146109235760405162461bcd60e51b815260040161015190610f62565b6000600c546006546109359190610ea7565b600354604051636eb1769f60e11b815233600482015230602482015291925082916001600160a01b039091169063dd62ed3e90604401602060405180830381865afa158015610988573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ac9190610d68565b10156109ca5760405162461bcd60e51b815260040161015190610d81565b6003546040516370a0823160e01b815233600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa158015610a12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a369190610d68565b1015610a545760405162461bcd60e51b815260040161015190610dde565b6003546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610aab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acf9190610e26565b610aeb5760405162461bcd60e51b815260040161015190610e48565b8060086000828254610afd9190610ea7565b909155505050565b60405162461bcd60e51b8152602060048201526013602482015272139bdd081a5b5c1b195b595b9d1959081e595d606a1b6044820152606401610151565b610b8681604051602401610b579190610f4f565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052610cd0565b50565b610bce8282604051602401610b9f929190610fd3565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052610cd0565b5050565b6000601054600160201b900460ff166004811115610bf257610bf2610ec0565b14158015610c1e57506003601054600160201b900460ff166004811115610c1b57610c1b610ec0565b14155b8015610c4857506004601054600160201b900460ff166004811115610c4557610c45610ec0565b14155b604051602001610c5790610ed6565b60405160208183030381529060405290610c845760405162461bcd60e51b81526004016101519190610f4f565b50610cb56040518060400160405280600f81526020016e457865637574696e6720636c61696d60881b815250610b43565b601080546004919064ff000000001916600160201b83610454565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600060208284031215610d0357600080fd5b81356001600160a01b0381168114610d1a57600080fd5b9392505050565b60208082526027908201527f4f6e6c792074686520696e73757265722063616e2063616c6c207468697320666040820152663ab731ba34b7b760c91b606082015260800190565b600060208284031215610d7a57600080fd5b5051919050565b6020808252603f908201527f496e7375726564206d75737420617070726f76652074686520706f6c6963792060408201527f746f207472616e736665722074686520726571756972656420616d6f756e7400606082015260800190565b60208082526028908201527f496e7375726564206d757374206465706f7369742074686520726571756972656040820152671908185b5bdd5b9d60c21b606082015260800190565b600060208284031215610e3857600080fd5b81518015158114610d1a57600080fd5b60208082526029908201527f496e7375726564206d757374207472616e736665722074686520726571756972604082015268195908185b5bdd5b9d60ba1b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b80820180821115610eba57610eba610e91565b92915050565b634e487b7160e01b600052602160045260246000fd5b7f506f6c696379206d75737420626520696e20616e2061637469766520737461748152606560f81b602082015260210190565b6000815180845260005b81811015610f2f57602081850181015186830182015201610f13565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610d1a6020830184610f09565b60208082526027908201527f4f6e6c792074686520696e73757265642063616e2063616c6c207468697320666040820152663ab731ba34b7b760c91b606082015260800190565b81810381811115610eba57610eba610e91565b8082028115828204841417610eba57610eba610e91565b604081526000610fe66040830185610f09565b9050826020830152939250505056fea26469706673582212205f72066a2a73b76c314b17486b7232b63ae1825642063c5d68815ffe9c557baa64736f6c63430008130033a264697066735822122032bd8a1ee6ad4ef4d34d25855e0d4234fecbcc9e8f3ad1a1e735081a35d65e9064736f6c63430008130033";

type StablecoinInsuranceManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StablecoinInsuranceManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StablecoinInsuranceManager__factory extends ContractFactory {
  constructor(...args: StablecoinInsuranceManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      StablecoinInsuranceManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): StablecoinInsuranceManager__factory {
    return super.connect(runner) as StablecoinInsuranceManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StablecoinInsuranceManagerInterface {
    return new Interface(_abi) as StablecoinInsuranceManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): StablecoinInsuranceManager {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as StablecoinInsuranceManager;
  }
}
