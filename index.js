const result=document.querySelectorAll('.counter');

const speed=200;

result.forEach((counter)=>
{
    const updatecount=()=>
    {
     const target =+counter.getAttribute('data-target');    //60000
     const a_1=+counter.innerText;                             //0

     const inc=target/speed;              //60000/200 ==300

    if(a_1<=target)
    {
        counter.innerText=a_1+inc;
        setTimeout(updatecount,1);
    }
    else{
        counter.innerText=target;
    }
   }
   updatecount();
})















// //60000/200 = 0+300=300 
// 300            300      = 600
// 300            600      = 900
// 59700          300      =60000

// //15000/200 = 0+75=75
// //75+75--->150
// 150+75

// 15000

// //9000/200 = 45
