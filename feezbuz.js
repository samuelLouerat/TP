
let count=0;
let text="";
while (count<100) {
    count++;
    if (count % 3==0) {
       text+="Fizz ";
        if (count % 5==0) {
            text+="buzz ";
        }
    } else {
        if (count % 5==0) {
            text+="buzz ";
        }else
        {
            text+=count+" ";
        }
    }
}
console.log(text);
