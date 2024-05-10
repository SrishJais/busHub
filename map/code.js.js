/* 
Here I'm considering the state, Himachal Pradesh. Suppose the user chooses kalka,kullu,shimla, manali as the destinations he
wants to visit. So, in the output he gets the route as kalka, shimla,kullu followed by manali as the most appropriate route considering his selections. Here,
kalka is considered as the first and last destination as it is the railway station. If the user doesn't choose any railway stations as a destination, the tour will start from an appropriate railway
station depending on the selection of his choices.
*/ 



const dist={
    Shimla:{
        Kullu:213,
        Manali:247,
        Kalka:30
    },
    Manali:{
        Shimla:247,
        Kullu:51,
        Kalka:256
    },
    Kullu:{
        Shimla:213,
        Manali:51,
        Kalka:256
    },
    Kalka:{
        Shimla:30,
        Manali:256,
        Kullu:218
    }
}


function Sort(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<(arr.length-i-1);j++)
        {
             if(arr[j]>arr[j+1])
             {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
             }
        }
    }
    return arr;
}



let start="Kalka";
let start_copy=start;
let arr=[start];
let key=Object.keys(dist);
let l=key.length;
while(l>0)
{
    for(let i=0;i<l;i++)
    {
       
        if(key[i]==start)
        {
            let val=Object.values(dist[start]);
            Sort(val);
            
            for(let prop in dist[start])
            {
           
               if(arr.includes(prop)==false)
               {
                for(let j=0;j<val.length;j++)
                {
                    if(dist[start][prop]==val[j])
                    {
                        arr.push(prop);
                        start=prop;
                        break;
                    }
                }
               }
            }
            key.splice(i,1);
            break;
        }
    }
    l=l-1;
}

arr.push(start_copy);

for(let i=0;i<arr.length;i++)
{
    console.log((i+1)+"."+arr[i]+"\n")
}

