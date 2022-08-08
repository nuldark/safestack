import { createHash } from "crypto";

export class Block {
  public index: number;
  public timestamp: string;
  public hash: string;
  public previousHash: string;
  public nonce: number;
  public txs: object;

  constructor(
    index: number,
    timestamp: string,
    previousHash: string,
    data: object
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.txs = data;
    this.nonce = 0;
    this.hash = this.computeHash();
  }

  computeHash(): string {
    const stringify = JSON.stringify(this.txs);

    return createHash("sha256")
      .update(
        `${this.index}${this.timestamp}${this.previousHash}${this.nonce}${stringify}`
      )
      .digest("hex");
  }
}
