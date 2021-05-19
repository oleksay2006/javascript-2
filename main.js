
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
function parse() {
  let textarea = document.querySelector('textarea');
  let myList = textarea.value.split('\n');
  console.log(myList);

  let newArray = myList.map((item) => {
    console.log(item);
    let arr = item.split(',');
    let arr2 = [];
    arr.map((item_2, index) => {
      let s = [];
      if (index == 0) { s['x'] = item_2 }
      if (index == 1) { s['y'] = item_2 }
      if (index == 2) { s['city'] = item_2 }
      if (index == 3) { s['popul'] = item_2 }
      arr2.push(s);
    })
    return arr2;
  });

  // console.log(newArray);
  newArray = newArray.map(item);
}

// $.ajax({
//   url: 'what.csv',
//   dataType: 'text',
// }).done(successFunction);

// function successFunction(data) {
//   var allRows = data.split(/\r?\n|\r/);
//   console.log(allRows);
// }

let csvFileText = "10,20,Кропивницкий,200000 \n" + 
"15,30,Львов,200000 \n"
+ "10,20,Одесса,200000 \n"
+ "10,20,Киев,200000";
var allRows = csvFileText.split('\n');
console.log(allRows);


let newArray = allRows.map((item) => {
    // console.log(item);
    let arr = item.split(',');
    console.log(arr);
    // let arr2 = [];
    arr.map((item_2, index) => {
    //   let s = [];
      if (index == 0) { arr[0] = `x: ${item_2}` }
      if (index == 1) { arr[1] = `y: ${item_2}` }
      if (index == 2) { arr[2] = `name: ${item_2}` }
      if (index == 3) { arr[3] = `population: ${item_2}` }
    //   arr2.push(s);
    })
    // return arr;
  });

// getData();
// async function getData() {
//   const response = await fetch('what.csv');
//   const data = await response.text();
//   console.log(data);
// }