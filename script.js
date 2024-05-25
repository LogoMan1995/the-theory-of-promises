fetch('https://jsonplaceholder.typicode.com/posts') 
.then(response => response.json()) // Преобразования ответа в json
.then(data => console.log(data)) // Вывод данных в консоль
.catch(error => console.log('ERROR',error)) // Обработка ошибок
.finally(() => console.log('Operation complete done or not ???')) // Выполнение после завершения операции 



console.log('Hello'); // Выводит в консоль

const user = new Promise((resolve, reject) => {//  Создается новый промис `user`. 
    setTimeout(() => {//Используется `setTimeout` для имитации асинхронной операции,
        console.log('David');//Выводит в консоль
        const worker = {//Затем создается объект `worker`
            name: 'David',
            lastname: 'King',
            status: 'junior js engineer'
        };
        resolve(worker);//Успешное завершение промиса 
    }, 1000);//
});


user.then(data => {// Обработка успешного завершение промиса `user`
    return new Promise ((resolve,reject)=>{//Возвращается новый промис, который добавляет `age` к данным.
        setTimeout(()=>{//Который через 2 секунды
            data.age = 28;//Добавляет свойство `age` к объекту `data`.
            resolve(data);//Успешное выполнение
        }, 2000)//
    })
}).then(personalaize =>{// Обрабатывается успешное завершение предыдущего промиса. 
    console.log('User',personalaize);// Выводится информация о пользователе в консоль
    personalaize.verification = 'true';//Добавляется свойство `verification` со значением `'true'`.
    return personalaize;//Используются для передачи данных из одного `then` в следующий.
}).then(experience =>{//Обрабатывается успешное завершение предыдущего промиса.
    console.log('Worker',experience);//Выводится информация о пользователе в консоль
    experience.work = '6 month';//Добавляется свойство `work` со значением `'6 month'`.
    return experience;//  Используются для передачи данных из одного `then` в следующий.
}).then(data => {//Обрабатывается успешное завершение предыдущего промиса.
    console.log('Operating time',data);//Выводится информация об оперативном времени в консоль.
}).catch(error => console.log('Bug',error))//Блок выполняется, если в цепочке промисов возникнет ошибка. 
.finally(() => {
    console.log('Welcome to the world of programming !!!');//Этот блок выполняется в любом случае, после завершения всех промисов, независимо от того, была ли ошибка или нет.
});


 

 const url = new Promise ((resolve,reject) =>{ //Новый экземпляр Promise успешно или отклоненно
 fetch('https://jsonplaceholder.typicode.com/users')  ///  Отправляет HTTP-запрос на указанный URL адресс
.then(response => { //Функция, которая вызывается, когда `fetch` получает ответ от сервера.
  console.log(response); ///Получаем response(ответ с url).Выводит объект ответа в консоль.
   if(response.ok) resolve(response.json());  // Если ответ УСПЕШЕН , то изменяем состояние Promise на положительный.
   //Который возвращает промис, разрешающийся с данными в формате JSON.
   else reject(response);
  })//Если ответ не успешен, промис отклоняется
  .catch(error => reject(error));//Отлавливает ошибки
});
 


url.then(f1,f2); // Запускается , когда промис изменит своё состояние. Успешно вызывается функция `f1`. Если промис отклоняется, вызывается функция `f2`.

function f1(data){
    console.log(url);
    console.log('succes');
    console.log(data);
} 

function f2(data){//Обязательно должны вывести состяние promise. Выведим ошибки если они есть . Проблема.
    console.log(url);
    console.log('problem');
    console.log(data);
} 

const f = fetch('https://api.itgid.info/api/delay') // fetch изначально находится в promise(pending)
console.log(f)//Выводит текущее состояние промиса `f` в консоль
f.then(response =>response.json())// Получила ответ с заднными и вывела в консоль
.then(data => {
    console.log(data)//Cодержит данные в формате JSON
}) 
f.then(response =>{
    console.log(f);// Получила ответ с заднными и вывела в консоль
    return response.json()
})
.then(data => {
    console.log(data) //Он выводит данные, полученные из JSON-объекта, в консоль.
})



fetch('https://api.itgid.info/api/delay')//Отправляет HTTP-запрос на указанный URL.
.then(response => {//Ловит состояние promise . resolve or reject
    return response.json();//Преобразует объект в json. Возвращая новый промис,
})//`data` - это данные в формате JSON, полученные из ответа сервера.
.then(data => {
    console.log(data); //`data` - это данные в формате JSON, полученные из ответа сервера.
    return fetch('https://api.itgid.info/api/test')// Отправляем новый HTTP-запрос на другой URL. Возвращает промис, связанный с этим запросом.
})
.then(response => response.json())//Ловит состояние запроса 1.1(resolve or reject).Вызывается, когда промис, возвращенный `fetch`, резолвится. Он преобразует ответ в JSON.
.then(data => console.log(data))//Выводит данные из второго запроса в консоль.
.catch(error => console.log('Error',error))//Этот метод вызывается, если в цепочке промисов возникнет ошибка 
.finally(()=> console.log('Все прошло успешно?'))//Этот метод вызывается независимо от того, резолвился или реджектился промис.




const promise_1 = new Promise((resolve,reject) =>{//Создается новый промис
    fetch('https://api.itgid.info/api/test')//В этом промисе выполняется запрос к API по указанному URL.
    .then(data => resolve(data.json()));//Когда ответ получен, его JSON-представление преобразуется в объект JavaScript, и промис разрешается этим объектом.
})

const promise_2 = new Promise((resolve,reject) =>{//Аналогично создается второй промис 
    fetch('https://api.itgid.info/api/delay')//Выполняется запрос к другому API.
    .then(data => resolve(data.json()));// Когда ответ получен, его JSON-представление преобразуется в объект JavaScript, и промис разрешается этим объектом.
})

Promise.all([promise_1,promise_2]).then(data => {//Принимает массив из двух промисов `promise_1` и `promise_2`. Он возвращает новый промис, который разрешается, когда оба промиса `promise_1` и `promise_2` успешно разрешены.
    console.log(data)// Когда оба промиса успешно разрешены, в `data` будет массив с результатами обеих запросов. Этот массив выводится в консоль.
})


/* 1.Констурктор на вход которого переходит executor в свойствах которого две функции для успеха и ошибки , которые можно выполнить и изменить состояние.
2.Используется для отложенного кода
3.Resolve,reject можно вызвать только один раз.
4. Чтобы перехвотить значения используется метод .then
5. Чтобы перехвотить ошибку используется метод .catch<
6. Можно вызвать then сколько угодно раз на одном промисе и все равно получим результат
7. Если вызвать then когда состояние уже было установлено , всё равно получим значение <
8. Можно использовать цепочки .then промисов
Используется `Promise.all` для ожидания выполнения всех промисов в массиве, и `Promise.race` для ожидания первого промиса, который завершится.<br>
Pending в ожидание, Fullfield выполнено, Rejected выполнено с ошибкой.
fetch() можно отправлять сетевые запросы на сервер — как получать, так и отправлять данные. Метод возвращает промис с объектом ответа, где находится дополнительная информация (статус ответа, заголовки) и ответ на запрос. */






fetch('https://api.itgid.info/api/delay')//Отправляет HTTP-запрос на указанный URL.
.then(response => {//Ловит состояние promise . resolve or reject
    return response.json();//Преобразует объект в json. Возвращая новый промис,
})//`data` - это данные в формате JSON, полученные из ответа сервера.
.then(data => {
    console.log(data); //`data` - это данные в формате JSON, полученные из ответа сервера.
    return fetch('https://api.itgid.info/api/test')// Отправляем новый HTTP-запрос на другой URL. Возвращает промис, связанный с этим запросом.
})
.then(response => response.json())//Ловит состояние запроса 1.1(resolve or reject).Вызывается, когда промис, возвращенный `fetch`, резолвится. Он преобразует ответ в JSON.
.then(data => console.log(data))//Выводит данные из второго запроса в консоль.
.catch(error => error) //Этот метод вызывается, если в цепочке промисов возникнет ошибка 
.finally('Все прошло успешно')//Этот метод вызывается независимо от того, резолвился или реджектился промис.








async function fetchData(){ // Объявление асинхронной функции fetchData. Асинхронные функции позволяют использовать ключевое слово await внутри себя, чтобы ожидать завершения промисов.
    try{// Начало блока try, который используется для обработки исключений. Внутри блока try выполняется код, который может выбросить ошибк
        const response = await fetch('https://api.github.com/users/LogoMan1995')//Использование fetch для выполнения HTTP-запроса к URL.  Заставляет выполнение кода дождаться завершения этого запроса. Ответ сохраняется в переменной response.
        const data = await response.json()//Преобразование ответа в формат JSON с помощью метода json(), который возвращает промис. await используется снова, чтобы дождаться завершения этого промиса. Преобразованные данные сохраняются в переменной data.
        console.log('Полученные данные:', data)// Вывод полученных данных в консоль.
        } 
    catch(error){//
        console.log('Ошибка',error)//Начало блока catch, который выполняется, если в блоке try возникает ошибка. Ошибка передается в блок catch и сохраняется в переменной error.
    }
}

fetchData()//  Вызов функции fetchData, чтобы выполнить весь описанный выше процесс.