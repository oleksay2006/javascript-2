
// function parse() {
// 	let textarea = document.querySelector('textarea');
// 	let myList = textarea.value.split('\n');
// 	console.log(myList);
// 	// let newArray = myList.slice(0, 1)
// 	// console.log(newArray);
// 	// newArray = newArray.toString();
// 	// newArray.split(',');
// 	// console.log(newArray);
// 	let newArray = myList.map(item => {let arr = item.split(','); arr.map((item_2, index) => {if (index == 0){}})});

// 	console.log(newArray);
// 	newArray = newArray.map(item);
// }



/* 10,20,Кропивницкий,200000
15,30,Львов,200000
10,20,Одесса,200000
10,20,Киев,200000 */
// function parse() {
//   let textarea = document.querySelector('textarea');
//   let myList = textarea.value.split('\n');
//   console.log(myList);

//   let newArray = myList.map((item) => {
//     console.log(item);
//     let arr = item.split(',');
//     let arr2 = [];
//     arr.map((item_2, index) => {
//       let s = [];
//       if (index == 0) { s['x'] = item_2 }
//       if (index == 1) { s['y'] = item_2 }
//       if (index == 2) { s['city'] = item_2 }
//       if (index == 3) { s['popul'] = item_2 }
//       arr2.push(s);
//     })
//     return arr2;
//   });

//   // console.log(newArray);
//   newArray = newArray.map(item);
// }

// $.ajax({
//   url: 'what.csv',
//   dataType: 'text',
// }).done(successFunction);

// function successFunction(data) {
//   var allRows = data.split(/\r?\n|\r/);
//   console.log(allRows);
// }

// let csvFileText = "10,20,Кропивницкий,200000 \n" + 
// "10,20,Одесса,2050000 \n"
// + "15,30,Львов,325000 \n"
// + "10,20,Киев,32500000";

// var allRows = csvFileText.split('\n');
// console.log(allRows);


// let newArray = allRows.map((item) => {
//     // console.log(item);
//     let arr = item.split(',');
//     // let arr2 = [];
//     arr.map((item_2, index) => {
//     //   let s = [];
//       if (index == 0) { arr[0] = `x: ${item_2}` }
//       if (index == 1) { arr[1] = `y: ${item_2}` }
//       if (index == 2) { arr[2] = `name: ${item_2}` }
//       if (index == 3) { arr[3] = `population: ${item_2}` }
//     //   arr2.push(s);
//     })
//     arr = { ...arr}
//     arr = Object.values(arr).reduce((prev,curr) => {
    
//       return {
//           ...prev,
//           [curr.split(': ')[0]]: curr.split(': ')[1]
//       }

//     }, {});

//     y = {
//         [arr.name]: {
//            population : arr.population,
//            x: arr.x
//         }
//     }
//     arr = y
//     // console.log(arr);
//     console.log(y)
//     return arr;
//   });
// function sortByPopulation(newArray) {
//   return newArray.sort((a, b) => a.population > b.population ? 1 : -1);

// };
// newArray = sortByPopulation(newArray);
// console.log(newArray);
// let top_10 = newArray.slice(0,10)


// x = {0: "x: 10", 1: "y: 20", 2: "name: Кропивницкий", 3: "population: 200000 "}
// x = Object.values(x).reduce((prev,curr) => {
    
//     return {
//         ...prev,
//         [curr.split(': ')[0]]: curr.split(': ')[1]
//     }

// }, {});
// console.log(x);



// let result = newArray.reduce((combo, item) => {
//     combo[item.name] = item.value;
//     return combo;
// }, {});

// console.log(result);


// getData();
// async function getData() {
//   const response = await fetch('what.csv');
//   const data = await response.text();
//   console.log(data);
// }


let csvFileText = `10,20,Кропивницкий,200000
49,50,Киев,2868702
30,40,Львов,700000
#hello world
50,60,Харьков,1470000
70,80,Одесса,1000000
70,80,Херсон,286000
70,80,Франковск,237000
70,80,Чернигов,286000
70,80,Ужгород,115000
70,80,Луцк,217000
70,80,Хмельницк,100000
70,80,Мукачево,85000
70,80,Суммы,268000`;

function get(csvFileText) {
  let topCities = []; //*
  let rating = 1;
  let topCity = csvFileText
    .split("\n")
    .filter((a) => a.match(/[а-я0-9]/gi))
    .map((element) => {
      let value = element.split(",");

      return {
        x: Number(value[0]),
        y: Number(value[1]),
        name: value[2],
        population: Number(value[3]),
      };
    })
    .sort((a, b) => b.population - a.population)
    .slice(0, 10)
    .reduce((accumulator, currentValue) => {
      let { name, population } = currentValue;
      topCities.push(name);
      accumulator[name] = { population, rating };
      rating++;
      return accumulator;
    }, {});
  console.log(topCities);
  console.log(topCity);
  return (resultText) => {
    topCities.forEach((city) => {
      if (resultText.includes(city)) {
        let { population, rating } = topCity[city];
        resultText = resultText.replace(
          city,
          `${city} (население: ${population}, рейтинг: ${rating})`
        );
      }
    });
    return resultText;
  };
}

console.log(
  get(csvFileText)(
    "Харьков второй по количеству населения город в Украине, Киев столица Украины"
  )
);