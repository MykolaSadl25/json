// const objA = {
//     name:"mykola",
//     age:15,
//     location: {
//         city:"Khmelnitskiy",
//         street:"Shevchenko",
//         house:29
//     },
//     friends:["nazar","maks","vlad"],
// }

// const userDataToJSON = JSON.stringify(objA);
// // console.log(objA);
// // console.log(userDataToJSON);

// const save = localStorage.setItem("test",userDataToJSON)
// const get = localStorage.getItem("test")
// const parsed = JSON.parse(get);
// console.log(parsed);



// const userDataStr = `{"name":"mykola","age":15,"location":{"city":"Khmelnitskiy","street":"Shevchenko","house":29},"friends":["nazar","maks","vlad"]}`;

// const userDataToObj = JSON.parse(userDataStr);
// console.log(userDataToObj);

//Створіть об'єкт JSON з інформацією про книгу. Книга повинна мати наступні поля:
// назва книги
// автор книги
// рік видання
// жанр
// Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

// const book = `{name:"Christmas Carol", author:"Charles Dickens", year:1800, genre:"novella"}`
// console.log(book);

// const parse = JSON.parse(book)
// console.log(parse);


// Напишіть функцію, яка відкриває файл з даними у форматі JSON та повертає об'єкт JavaScript. Файл повинен містити інформацію про список студентів. Для кожного студента повинні бути такі поля:
// ім'я
// прізвище
// рік народження
// номер групи
// оцінки з курсів
// Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

const strUser = '{"name":"Mykola","age":15,"surname":"Sadlii", "grades": [5,4,5,3,2]}'

function transformJSON(json){
    try {
        const transformed = JSON.parse(json);
    return transformed
    } catch (error) {
        console.log("Error",error);
        
    }
}

console.log(transformJSON(strUser));
