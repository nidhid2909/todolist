function addon(){
    var item=document.form1.item.value;
    var list=document.createElement("li");
    var element=document.createTextNode(item);
    list.appendChild(element);
    document.getElementById("name").appendChild(list);
    }
