



let ind=0;
function add()
{


    let m=document.getElementById("alltodo");

    let di=document.createElement("div");

    di.setAttribute("id","tk");
    let di2=document.createElement("div");
    let chk=document.createElement("input");
    chk.setAttribute("type","checkbox");
    chk.setAttribute("id","chbx"+ind);

    chk.setAttribute("onchange","un(this.id)")
    
    let pd=document.createElement("p");

    let butto=document.createElement("button");
    butto.innerText="delete";
    butto.setAttribute("onclick","del(this)");

    
    pd.innerText=document.getElementById("task").value;


    pd.setAttribute("contenteditable","true");

    
    di.appendChild(pd);
  
    
    let arr = JSON.parse(localStorage.getItem("data"));
    arr.push(ind);


    di2.appendChild(chk);
    di2.appendChild(pd);

    di.appendChild(di2);
    di.appendChild(butto);
    ind++;
    m.appendChild(di);

    // m.appendChild(butto);

}




function un(s)
{

    let chec=document.getElementById(s);
    if (chec.checked == true){
    chec.contenteditable=false;
    }


}

function del(s)
{

    
    let m=document.getElementById("alltodo");

    console.log(s);
    m.removeChild(s.parentNode);


}





