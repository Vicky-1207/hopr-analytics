// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get totalSupply(): boolean {
    let value = this.get("totalSupply");
    return value.toBoolean();
  }

  set totalSupply(value: boolean) {
    this.set("totalSupply", Value.fromBoolean(value));
  }

  get xHoprBalance(): BigDecimal {
    let value = this.get("xHoprBalance");
    return value.toBigDecimal();
  }

  set xHoprBalance(value: BigDecimal) {
    this.set("xHoprBalance", Value.fromBigDecimal(value));
  }

  get wxHoprBalance(): BigDecimal {
    let value = this.get("wxHoprBalance");
    return value.toBigDecimal();
  }

  set wxHoprBalance(value: BigDecimal) {
    this.set("wxHoprBalance", Value.fromBigDecimal(value));
  }

  get totalBalance(): BigDecimal {
    let value = this.get("totalBalance");
    return value.toBigDecimal();
  }

  set totalBalance(value: BigDecimal) {
    this.set("totalBalance", Value.fromBigDecimal(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class AccountSnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AccountSnapshot entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AccountSnapshot entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AccountSnapshot", id.toString(), this);
  }

  static load(id: string): AccountSnapshot | null {
    return store.get("AccountSnapshot", id) as AccountSnapshot | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get xHoprBalance(): BigDecimal {
    let value = this.get("xHoprBalance");
    return value.toBigDecimal();
  }

  set xHoprBalance(value: BigDecimal) {
    this.set("xHoprBalance", Value.fromBigDecimal(value));
  }

  get wxHoprBalance(): BigDecimal {
    let value = this.get("wxHoprBalance");
    return value.toBigDecimal();
  }

  set wxHoprBalance(value: BigDecimal) {
    this.set("wxHoprBalance", Value.fromBigDecimal(value));
  }

  get totalBalance(): BigDecimal {
    let value = this.get("totalBalance");
    return value.toBigDecimal();
  }

  set totalBalance(value: BigDecimal) {
    this.set("totalBalance", Value.fromBigDecimal(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class StatsContainer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StatsContainer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StatsContainer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StatsContainer", id.toString(), this);
  }

  static load(id: string): StatsContainer | null {
    return store.get("StatsContainer", id) as StatsContainer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get lastAccountIndex(): BigInt {
    let value = this.get("lastAccountIndex");
    return value.toBigInt();
  }

  set lastAccountIndex(value: BigInt) {
    this.set("lastAccountIndex", Value.fromBigInt(value));
  }

  get lastAccountSnapshotIndex(): BigInt {
    let value = this.get("lastAccountSnapshotIndex");
    return value.toBigInt();
  }

  set lastAccountSnapshotIndex(value: BigInt) {
    this.set("lastAccountSnapshotIndex", Value.fromBigInt(value));
  }

  get lastTransactionIndex(): BigInt {
    let value = this.get("lastTransactionIndex");
    return value.toBigInt();
  }

  set lastTransactionIndex(value: BigInt) {
    this.set("lastTransactionIndex", Value.fromBigInt(value));
  }

  get lastTransferEventIndex(): BigInt {
    let value = this.get("lastTransferEventIndex");
    return value.toBigInt();
  }

  set lastTransferEventIndex(value: BigInt) {
    this.set("lastTransferEventIndex", Value.fromBigInt(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (value === null) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(value as Bytes));
    }
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transferEvents(): Array<string> {
    let value = this.get("transferEvents");
    return value.toStringArray();
  }

  set transferEvents(value: Array<string>) {
    this.set("transferEvents", Value.fromStringArray(value));
  }
}

export class TransferEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferEvent entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferEvent entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferEvent", id.toString(), this);
  }

  static load(id: string): TransferEvent | null {
    return store.get("TransferEvent", id) as TransferEvent | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get logIndex(): BigInt {
    let value = this.get("logIndex");
    return value.toBigInt();
  }

  set logIndex(value: BigInt) {
    this.set("logIndex", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get tokenType(): string {
    let value = this.get("tokenType");
    return value.toString();
  }

  set tokenType(value: string) {
    this.set("tokenType", Value.fromString(value));
  }
}
