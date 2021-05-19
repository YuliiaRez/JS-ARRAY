function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
/*0 Создать числовой массив и проинициализировать его (*случайными числами).*/
const randomArray = [];
const length = randomInteger(1, 10);
console.log(`${length} random length of Array`);
for (let i = 0; i < length; i++) {
    randomArray[i] = randomInteger(-5, 5);
};
console.log(`[${randomArray}] is our Array`);
/*1 Удалить последний элемент из массива, добавить по элементу в начало и конец.*/
console.log(`"${randomArray.pop()}" pops of Array. For next step add elements in head and end of Array.`);
randomArray.push(1);
randomArray.unshift(2);
console.log(`[${randomArray}] is our Array on this step`);

/*2 Вывести размер массива.*/
console.log(`${randomArray.length} is new lentgh of Array;`)
/*3 Вывести элементы с четными индексами.*/
for (let i = 0; i < randomArray.length; i++) {
    if (i % 2 === 0) { console.log(`element ${randomArray[i]} has odd index ${i};`) };
};

/*4 Вывести только четные элементы (четные числа делятся на 2 без остатка).*/
for (let i = 0; i < randomArray.length; i++) {
    if (+randomArray[i] % 2 === 0) { console.log(`element ${randomArray[i]} is odd;`) };
};

/*5 Вывести индексы нулевых элементов (элемент равен нулю).*/
randomArray.forEach(function (item, index, array) {
    if (item === 0) {
        const n = index;
        console.log(`element with index ${n}  is  0;`)
    };
}
);

/*6 Подсчитать количество нулевых элементов.*/
let numberOfZero = 0;
for (let i = 0; i < randomArray.length; i++) {
    if (+randomArray[i] === 0) { numberOfZero += 1 };
};
console.log(`${numberOfZero} is number of zero elements;`);

// Методы перебора массивов.
/*7 Получить новый массив из заданного, который будет содержать только положительные числа(-1, 5, 0, 9, -10 => 5, 9).*/

const randomArray2 = randomArray.filter(function (item, index, array) {
    return item > 0;
});
console.log(`[${randomArray2}] array with positive numbers`);

/*8 Получить новый массив их заданного, который будет содержать все элементы исходного, 
возведенные в квадрат(-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).*/
const randomArraySquared = [];
randomArray.forEach(function (item, index, array) {
    randomArraySquared.push(item * item)
});
console.log(`[${randomArraySquared}] this array consists of sqared items;`)
/*9 Проверить, являются ли все елементы массива положительными числами(* или в принципе числами).*/

const randomArrayTypeNumber = [];
randomArray.forEach(function (item, index, array) {
    if (typeof item === "number") randomArrayTypeNumber.push(item);
});
console.log(`[${randomArrayTypeNumber}] is array of numbers;`)

/*10 Проверить, есть ли в массиве хоть один отрицательный элемент.*/
const randomArrayNeg = randomArray.filter(function (item, index, array) {
    return item < 0;
});
console.log(`[${randomArrayNeg}] is array with nagitive numbers;`);


/*11 Вывести элементы массива, возведенные в куб.*/
const randomArrayCubed = [];
randomArray.forEach(function (item, index, array) {
    randomArrayCubed.push(item ** 3);
});
console.log(`[${randomArrayCubed}] this array consists of cubed elements;`)

/**12 Прописать для MyArray метод unshift.*/
const myArray = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    length: 5,
    unshift(item) {
        ++this.length;
        for (let i = 1; i < this.length; i++) {
            this[(this.length - i)] = this[this.length - 1 - i];
        }
        this[0] = item;
        return this.length;
    }
}
myArray.unshift(12);
console.log(myArray);


