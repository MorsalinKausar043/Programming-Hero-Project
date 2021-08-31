// used to call , apply 
const Student = {
    name: "Morsalin",
    age: 20,
    cls: "diploma 5th semister",
    biodata: function(kotoBeshi,aroKomaHalapu){
        console.log(this.age - kotoBeshi - aroKomaHalapu);
    }
};

const BiusnessMan = {
    name: "ganjutti",
    age: 50,
    cls : 5
}

// used to bind method 
const Player = {
    name: "md amir",
    age: 40,
    type: "first arm bollwer",
    getData: function (lessthan5) {
        console.log(this.age - lessthan5)
    }
};

const doctor = {
    name: "mahbubur rahman",
    age: 45,
    type: "calsiyam"
};

// called this function 

// console.log(Student.cls)
// Student.biodata.call(BiusnessMan, 20, 5);
// Student.biodata.apply(BiusnessMan, [20, 4])
// Player.getData.bind(doctor)(5);

// make object and use for of and for in loop 
// use to the entries and key and value 

const Devolopers = {
    name: "Morsalin Kausar",
    age: 20,
    type: "Mern Stack Devoloper",
    nowLearning: "Mern Devolopment and Javascript"
};

// console.log(Devoloper.nowLearning)

const keys = Object.keys(Devolopers);
const value = Object.values(Devolopers);

for (let data of keys)
{
    // console.log(`${data} ==> ${Devolopers[data]}`);
}

// console.log(value)

for (let dAtA in Devolopers)
{
    // console.log(dAtA, Devolopers[dAtA]);
}



// const [id, val] = Object.entries(Devolopers);
// console.log(id, val)

// for (let [id, val] of Object.entries(Devolopers))
// {
//     console.log(id , val)
// }

// create object data 

const objectCreate = Object.create(Devolopers);
console.log(objectCreate.name)
delete Devolopers.name;
console.log(Devolopers)