// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Signalled extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("curator", Value.fromBytes(Bytes.empty()));
    this.set("subgraphDeploymentID", Value.fromBytes(Bytes.empty()));
    this.set("tokens", Value.fromBigInt(BigInt.zero()));
    this.set("signal", Value.fromBigInt(BigInt.zero()));
    this.set("curationTax", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Signalled entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Signalled entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Signalled", id.toString(), this);
    }
  }

  static load(id: string): Signalled | null {
    return changetype<Signalled | null>(store.get("Signalled", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get curator(): Bytes {
    let value = this.get("curator");
    return value!.toBytes();
  }

  set curator(value: Bytes) {
    this.set("curator", Value.fromBytes(value));
  }

  get subgraphDeploymentID(): Bytes {
    let value = this.get("subgraphDeploymentID");
    return value!.toBytes();
  }

  set subgraphDeploymentID(value: Bytes) {
    this.set("subgraphDeploymentID", Value.fromBytes(value));
  }

  get tokens(): BigInt {
    let value = this.get("tokens");
    return value!.toBigInt();
  }

  set tokens(value: BigInt) {
    this.set("tokens", Value.fromBigInt(value));
  }

  get signal(): BigInt {
    let value = this.get("signal");
    return value!.toBigInt();
  }

  set signal(value: BigInt) {
    this.set("signal", Value.fromBigInt(value));
  }

  get curationTax(): BigInt {
    let value = this.get("curationTax");
    return value!.toBigInt();
  }

  set curationTax(value: BigInt) {
    this.set("curationTax", Value.fromBigInt(value));
  }
}

export class Burned extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("curator", Value.fromBytes(Bytes.empty()));
    this.set("subgraphDeploymentID", Value.fromBytes(Bytes.empty()));
    this.set("tokens", Value.fromBigInt(BigInt.zero()));
    this.set("signal", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Burned entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Burned entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Burned", id.toString(), this);
    }
  }

  static load(id: string): Burned | null {
    return changetype<Burned | null>(store.get("Burned", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get curator(): Bytes {
    let value = this.get("curator");
    return value!.toBytes();
  }

  set curator(value: Bytes) {
    this.set("curator", Value.fromBytes(value));
  }

  get subgraphDeploymentID(): Bytes {
    let value = this.get("subgraphDeploymentID");
    return value!.toBytes();
  }

  set subgraphDeploymentID(value: Bytes) {
    this.set("subgraphDeploymentID", Value.fromBytes(value));
  }

  get tokens(): BigInt {
    let value = this.get("tokens");
    return value!.toBigInt();
  }

  set tokens(value: BigInt) {
    this.set("tokens", Value.fromBigInt(value));
  }

  get signal(): BigInt {
    let value = this.get("signal");
    return value!.toBigInt();
  }

  set signal(value: BigInt) {
    this.set("signal", Value.fromBigInt(value));
  }
}

export class Collected extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("subgraphDeploymentID", Value.fromBytes(Bytes.empty()));
    this.set("tokens", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Collected entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Collected entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Collected", id.toString(), this);
    }
  }

  static load(id: string): Collected | null {
    return changetype<Collected | null>(store.get("Collected", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get subgraphDeploymentID(): Bytes {
    let value = this.get("subgraphDeploymentID");
    return value!.toBytes();
  }

  set subgraphDeploymentID(value: Bytes) {
    this.set("subgraphDeploymentID", Value.fromBytes(value));
  }

  get tokens(): BigInt {
    let value = this.get("tokens");
    return value!.toBigInt();
  }

  set tokens(value: BigInt) {
    this.set("tokens", Value.fromBigInt(value));
  }
}
