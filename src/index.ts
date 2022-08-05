import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([50, 12, -80, -25]);
// numbersCollection.sort();
// console.log("numbersCollection", numbersCollection.data);

// const charactersCollection = new CharactersCollection("KhadbU");
// charactersCollection.sort();
// console.log("charactersCollection", charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
