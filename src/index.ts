import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([25, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// console.log("=> Antes de:", numbersCollection.data);
// sorter.sort();
// console.log("=> Después de:", numbersCollection.data);

const charactersCollection = new CharactersCollection("ckjsObhFba");
const sorter = new Sorter(charactersCollection);
console.log("=> Antes de:", charactersCollection.data);
sorter.sort();
console.log("=> Después de:", charactersCollection.data);
