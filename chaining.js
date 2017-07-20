let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort(function(a,b){return b-a;}).filter(function(e){return e<19;}).map(function(a){return (a * 1.5)-1}).reduce(function(p,c,i,a){return p + c}));








// filter(function(e){return e<19;}).forEach(function(num){(num*1.5)-1})
