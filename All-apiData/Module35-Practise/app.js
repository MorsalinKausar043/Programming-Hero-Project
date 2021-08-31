// // declare object value ---------------=>
// const BioData = {
//     name: "Morsalin",
//     age: 20,
//     cls: "diploma 5th Semister",
//     hobby: {
//         first: "Programming",
//         second: "football",
//         third: "drawing"
//     },
//     favNum: [10, 5, 53, 36, 06, 22],
//     getData: function (anything) {
//         console.log(this.hobby,this.age - anything);
//     },
//     getAll: function () {
//         // destracturating all object val ========-=>
//         const { name, age, cls, hobby: { first, second, third }, favNum: [a, b, c,d,e,f] } = this;
//         // console.log(a,b,c,d,e,f,first,second,third,name,age,cls)
//         console.log(`My name is ${name} . I'm ${age} years . I read in class ${cls} . My first hobby is ${first} and second hobby is ${second} or third hobby is ${third} . My all Class roll is ${a} , ${b}, ${c},${d},${e},${f} . Thank You So Much..!`)
//     }
// };


// // call object function ----------------=>

// // BioData.getData();
// // BioData.getData(3);
// BioData.getAll()

// // use to arrow function ===------=>

// const valueOf89 = () => 89;
// const valueOf10 = _ => 10082002;

// // call function  ===--------=>
// console.log(valueOf89())
// console.log(valueOf10())


// 2 para function declare =----------=>

// const use2Para = (firstValue , secondValue) => {
//     const additonAllVal = (firstValue + secondValue) / 2;
//     return additonAllVal;
// }

// const useAllPara = (Fval,Sval) => {
//     const FvalAdd = Fval + 7;
//     const SvalAdd = Sval + 7;
//     const AddVal = FvalAdd + SvalAdd;
//     return AddVal;
// }

// 2 para function call =____------_____===>
// console.log(use2Para(4,8));
// console.log(useAllPara(2,2))


// use map , filter , forEach and find function ----=========>

// const AllArray = [2, 5, 8, 64, 35, 66, 35, 63];
// console.log(AllArray.sort((a,b) => a-b)) 

// use map -------=>

// AllArray.map((crrElm) => console.log(crrElm / 7));
// AllArray.map((crrElm) => console.log(crrElm));
// const mapArray = AllArray.map((crrElm) => crrElm);
// console.log(mapArray)

// use filter --------=>

// AllArray.filter((crrElm) => console.log(crrElm > 5))
// const filterArray = AllArray.filter((crrElm) => {
//     return crrElm > 8;
// })
// console.log(filterArray)

// use forEach --------=>

// AllArray.forEach((crrElm) => console.log(crrElm));

// use find -----=>

// const findArray = AllArray.find((crrElm) => crrElm > 8);
// console.log(findArray)

// use array and flat -----------====>

const flatArray = [2, 3, [4, 6, [5, 8, [23, 56,[9]]]]];
console.log(flatArray.flat(4))
console.log(flatArray.flat(Infinity))