import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([25, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// console.log("=> Antes de:", numbersCollection.data);
// sorter.sort();
// console.log("=> Después de:", numbersCollection.data);

// const charactersCollection = new CharactersCollection("ckjsObhFba");
// const sorter = new Sorter(charactersCollection);
// console.log("=> Antes de:", charactersCollection.data);
// sorter.sort();
// console.log("=> Después de:", charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);

// console.log("=> Antes de:", linkedList.data);
sorter.sort();
linkedList.print();
