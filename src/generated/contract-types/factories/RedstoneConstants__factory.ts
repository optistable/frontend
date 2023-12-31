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
  RedstoneConstants,
  RedstoneConstantsInterface,
} from "../RedstoneConstants";

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
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220e53f48b288d22640bc30410cc30f9664a1e335b86ed49aa0f0fb436483f9694e64736f6c63430008130033";

type RedstoneConstantsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedstoneConstantsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RedstoneConstants__factory extends ContractFactory {
  constructor(...args: RedstoneConstantsConstructorParams) {
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
      RedstoneConstants & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): RedstoneConstants__factory {
    return super.connect(runner) as RedstoneConstants__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedstoneConstantsInterface {
    return new Interface(_abi) as RedstoneConstantsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RedstoneConstants {
    return new Contract(address, _abi, runner) as unknown as RedstoneConstants;
  }
}
