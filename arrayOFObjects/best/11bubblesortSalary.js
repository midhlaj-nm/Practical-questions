
 //bubblesort sort salary   
 function bubblesort(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i].salary>arr[j].salary){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }return arr;
}
console.log(bubblesort([
    {name:"shifana",age:20,salary:150000},
    {name:"rukhiya",age:40,salary:30000},
    {name:"moideen",age:50,salary:50000}
    ])); 

