import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super(); // reference of the parent class
  }

  get length(): number {
    return this.data.length;
  }

  compare(LeftIndex: number, rightIndex: number): boolean {
    return this.data[LeftIndex] > this.data[rightIndex];
  }

  swap(LeftIndex: number, rightIndex: number): void {
    const leftHand = this.data[LeftIndex];
    this.data[LeftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
