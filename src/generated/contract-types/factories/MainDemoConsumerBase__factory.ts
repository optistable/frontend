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
  MainDemoConsumerBase,
  MainDemoConsumerBaseInterface,
} from "../MainDemoConsumerBase";

const _abi = [
  {
    inputs: [],
    name: "CalldataMustHaveValidPayload",
    type: "error",
  },
  {
    inputs: [],
    name: "CalldataOverOrUnderFlow",
    type: "error",
  },
  {
    inputs: [],
    name: "CanNotPickMedianOfEmptyArray",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampMustNotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampsMustBeEqual",
    type: "error",
  },
  {
    inputs: [],
    name: "EachSignerMustProvideTheSameValue",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyCalldataPointersArr",
    type: "error",
  },
  {
    inputs: [],
    name: "GetDataServiceIdNotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectUnsignedMetadataSize",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedSignersCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredSignersCount",
        type: "uint256",
      },
    ],
    name: "InsufficientNumberOfUniqueSigners",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCalldataPointer",
    type: "error",
  },
  {
    inputs: [],
    name: "RedstonePayloadMustHaveAtLeastOneDataPackage",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receivedSigner",
        type: "address",
      },
    ],
    name: "SignerNotAuthorised",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "TimestampFromTooLongFuture",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "TimestampIsTooOld",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "aggregateValues",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "extractTimestampsAndAssertAllAreEqual",
    outputs: [
      {
        internalType: "uint256",
        name: "extractedTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signerAddress",
        type: "address",
      },
    ],
    name: "getAuthorisedSignerIndex",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataServiceId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUniqueSignersThreshold",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampMilliseconds",
        type: "uint256",
      },
    ],
    name: "validateTimestamp",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061082b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633ce142f51461006757806355a547d514610091578063b24ebfcc146100a7578063c274583a146100ba578063f50b2efe146100ee578063f90c492414610103575b600080fd5b61007a6100753660046105d1565b61010a565b60405160ff90911681526020015b60405180910390f35b610099610161565b604051908152602001610088565b6100996100b5366004610610565b610279565b604080518082018252601281527172656473746f6e652d6d61696e2d64656d6f60701b6020820152905161008891906106ce565b6101016100fc36600461071c565b61028a565b005b600161007a565b60006001600160a01b038216730c39486f770b26f5527bbbf942726537986cd7eb0361013857506000919050565b6040516303b1166f60e61b81526001600160a01b03831660048201526024015b60405180910390fd5b60008061016c610296565b9050600061017982610344565b61ffff169050806000036101a057604051632154bfcf60e21b815260040160405180910390fd5b6101ab60028361074b565b915060005b818110156102735760006101c38461037e565b90506000806101d360688761074b565b905060006101e1823661075e565b9050803592508265ffffffffffff1660000361021057604051630336dc9d60e41b815260040160405180910390fd5b87600003610228578265ffffffffffff169750610250565b878365ffffffffffff16146102505760405163d9d1f46560e01b815260040160405180910390fd5b61025a848861074b565b965050505050808061026b90610771565b9150506101b0565b50505090565b6000610284826103ba565b92915050565b610293816103c5565b50565b60006602ed57011e0000601f19360135811614806102c7576040516373bb264f60e11b815260040160405180910390fd5b600036602911156102eb57604051632bcb7bc560e11b815260040160405180910390fd5b5060281936013560006009610306600362ffffff851661074b565b610310919061074b565b90503661031e60028361074b565b111561033d5760405163c30a7bd760e01b815260040160405180910390fd5b9392505050565b60008061035260208461074b565b90503681111561037557604051632bcb7bc560e11b815260040160405180910390fd5b36033592915050565b600080600061038c84610449565b9092509050604e61039e82602061074b565b6103a8908461078a565b6103b2919061074b565b949350505050565b6000610284826104a0565b60006103d36103e8836107b7565b90508042101561041557603c6103e9428361075e565b11156104115760405163b6b0916d60e01b815260048101829052426024820152604401610158565b5050565b60b4610421824261075e565b111561041157604051630321d0b560e01b815260048101829052426024820152604401610158565b60008080808061045a60418761074b565b9050600061047361046c60208461074b565b369061056b565b80359450905061048481600361056b565b62ffffff9490941697933563ffffffff16965092945050505050565b600081516000036104c457604051639e198af960e01b815260040160405180910390fd5b6104cd82610577565b6000600283516104dd91906107b7565b9050600283516104ed91906107cb565b60000361054957600061053c8461050560018561075e565b81518110610515576105156107df565b602002602001015185848151811061052f5761052f6107df565b60200260200101516105c5565b90506103b26002826107b7565b82818151811061055b5761055b6107df565b6020026020010151915050919050565b600061033d828461075e565b8051602082016020820281019150805b828110156105bf57815b818110156105b65781518151808210156105ac578084528183525b5050602001610591565b50602001610587565b50505050565b600061033d828461074b565b6000602082840312156105e357600080fd5b81356001600160a01b038116811461033d57600080fd5b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561062357600080fd5b823567ffffffffffffffff8082111561063b57600080fd5b818501915085601f83011261064f57600080fd5b813581811115610661576106616105fa565b8060051b604051601f19603f83011681018181108582111715610686576106866105fa565b6040529182528482019250838101850191888311156106a457600080fd5b938501935b828510156106c2578435845293850193928501926106a9565b98975050505050505050565b600060208083528351808285015260005b818110156106fb578581018301518582016040015282016106df565b506000604082860101526040601f19601f8301168501019250505092915050565b60006020828403121561072e57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561028457610284610735565b8181038181111561028457610284610735565b60006001820161078357610783610735565b5060010190565b808202811582820484141761028457610284610735565b634e487b7160e01b600052601260045260246000fd5b6000826107c6576107c66107a1565b500490565b6000826107da576107da6107a1565b500690565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220ee07efd0151448bdbf52f490e79b75ad65e18670597e8937410e2604105c6b6364736f6c63430008130033";

type MainDemoConsumerBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MainDemoConsumerBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MainDemoConsumerBase__factory extends ContractFactory {
  constructor(...args: MainDemoConsumerBaseConstructorParams) {
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
      MainDemoConsumerBase & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MainDemoConsumerBase__factory {
    return super.connect(runner) as MainDemoConsumerBase__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MainDemoConsumerBaseInterface {
    return new Interface(_abi) as MainDemoConsumerBaseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MainDemoConsumerBase {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MainDemoConsumerBase;
  }
}
