"use strict";
let Guest_List = ["Asad", "Ahmed", "Aliyan"];
console.log("\nNEW LISTOF INVETATION :\n");
for (let j = 0; j < Guest_List.length; j++) {
    console.log(`Dear ${Guest_List[j]} :\n you are invited to dinner!\n`);
}
console.log("good news! we've found a bige dinner table,somore space is avalable. so our new gest are :\n");
Guest_List.unshift("Ali");
Guest_List.splice(2, 0, "Arsel");
Guest_List.push("Azan");
for (let j = 0; j < Guest_List.length; j++) {
    console.log(`Dear ${Guest_List[j]} :\n you are invited to dinner!\n`);
}
