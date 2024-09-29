const people = [
    {
        id : 1,
        name : 'Ahbab Zaman',
        age : 24,
        occupation : 'Web developer',
        contact : {
            email : 'ahbab123@gmail.com',
        },
        address : {
            street : '123, Main St.',
            city : 'San Francisco',
            state : 'New york',
            zid : 3344,
        },
        social : {
            twitter : 'ahbab@twitter.com',
        },
        hobbies : ['coding', 'gaming', 'listening song'],
    },
    {
        id : 2,
        name : 'Emadul Bashar',
        age : 23,
        occupation : 'UI-UX Designer',
        contact : {
            email : 'emad@123gmail.com',
            phone : 921087218,
        },
        address : {
            house : 'zaman-villa',
            area : 'square-road',
            state : 'Mumbai',
        },
        social : {
            facebook : 'bashar@444gmail.com',
            instagram : 'manicmikegamil.com',
        }
    },
    {
        id : 3,
        name : 'omar talha',
        age : 25,
        occupation : 'Editor',
        social : {
            linkedin : 'omar999@hotmail.com',
        },
        hobbies : ['gaming', 'movies', 'talking'],
    }
]

const ulList = document.getElementById('ul-list');
const newList = document.getElementById('new-list');
const getName = (people) => {
    people.map((person)=>{

        const li = document.createElement('li');
        li.innerHTML = `
        <li class = "cursor-pointer p-4 font-bold text-xl">${person.name}</li>`;
        li.addEventListener('click', ()=>{
            getId(person.id); 
        })
        ulList.appendChild(li);
    })
}

const showId = (person) =>{
    console.log(person.name)
    newList.innerHTML = `
        <h2 class = "text-xl font-semibold text-gray-600 p-4 bg-white">${person.name}</h2>
        <h2 class = "text-xl font-semibold text-gray-600 p-4 bg-white">${person?.address?.city || "N/A"}</h2>
        <h2 class = "text-xl font-semibold text-gray-600 p-4 bg-white">${person?.social?.linkedin || "N/A"}</h2>
    `
}


const getId = (id) => {
   const person = people.find((p)=> p.id === id)
   showId(person)
}   

getName(people);
