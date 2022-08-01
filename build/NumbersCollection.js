"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(LeftIndex, rightIndex) {
        return this.data[LeftIndex] > this.data[rightIndex];
    }
    swap(LeftIndex, rightIndex) {
        const leftHand = this.data[LeftIndex];
        this.data[LeftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
