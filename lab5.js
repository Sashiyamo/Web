///1///
var arr = [];
for (i = 0; i < 1000; i++) {
    arr.push(Math.round(Math.random() * 100));
}
print('Наш случайный массив:', arr, '\n');

///2///
function Max(array){
    var max = array[0];
    for (var i = 0; i < array.length; i++) { 
        if (max < array[i]) max = array[i]; 
    }
    return max;
}
 
function Min(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}

function Median(array) {
  var half = Math.floor(array.length / 2);
  array.sort(function(a, b) { return a - b;});
  if (array.length % 2) {
    return array[half];
  } else {
    return (array[half-1] + array[half]) / 2.0;
  }
}

print('Максимальное значение:', Max(arr), 'Минимальное значение:', Min(arr), 'Медиана:', Median(arr), '\n');

///3///
function QuickSort(array) {
    if (array.length == 0) return [];
    var a = [], b = [], p = array[0];
    for (var i = 1; i < array.length; i++)
     { if (array[ i ] < p) a[a.length] = array[ i ];
       else b[b.length] = array[ i ];
     }
    return QuickSort(a).concat( p,QuickSort(b) );
}

QuickSort(arr);
print('Наш отсортированный массив:', arr, '\n');

///4/// 
var array_tags = document.getElementsByTagName("*");
let r = []
for (var i = 1; i < array_tags.length; i++) {
    r.push(array_tags[i].localName)
    }
let result = r.filter((v, i, a) => a.indexOf(v) == i)
    .map(v => [v, r.filter(x => x == v).length]);
console.log(result);