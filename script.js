
const input = document.getElementById('textbar');
const tagWrap = document.getElementById('tag-wrap');
let closeIcon = document.getElementsByClassName("close");
const container = document.getElementById('container');
let list = [];
let ID=0;
const BODY = document.getElementsByTagName("body");

console.log(BODY);


//add a new tag
const addTag =(text)=>{
    let newTag = document.createElement("div");
    newTag.classList.add("tag");
    newTag.setAttribute("id", ID);

    //add the tag to the list
    list.push(ID);

    
    newTag.innerHTML = text;


    //color tags
    let icon;

    if(ID==0){
        newTag.classList.add("green");
        icon = `<i data-feather="x" class="close green"></i>`;
    }

    if(ID==1){
        newTag.classList.add("blue");
        icon = `<i data-feather="x" class="close blue"></i>`;

    }

    if(ID==2){
        newTag.classList.add("red");
        icon = `<i data-feather="x" class="close red"></i>`;

    }

    if(ID>2){    
    //randomly assign a color theme to the tag
    let colorNum = Math.floor(Math.random()*3);
    if(colorNum == 0){
        newTag.classList.add("blue");
        icon = `<i data-feather="x" class="close blue"></i>`;
        
    }else if(colorNum==1){
        newTag.classList.add("green");
        icon = `<i data-feather="x" class="close green"></i>`;
        
    }else if(colorNum==2){
        newTag.classList.add("red");
        icon = `<i data-feather="x" class="close red"></i>`;
    }
};

    newTag.insertAdjacentHTML("beforeend",icon);
    tagWrap.append(newTag);
    feather.replace();
    ID++;
};


const removeTag = (element)=>{
    element.parentNode.parentNode.removeChild(element.parentNode);
    
};

//click the close icon
tagWrap.addEventListener("click",function(event){
    let icon = event.target;
    
    if(icon.tagName === "svg"){
        removeTag(icon);
        let currentID = icon.parentNode.attributes.id.value;
           let index = list.indexOf(currentID);
        list.splice(index,1);
    }
});


//click enter, trigger add tag function
document.addEventListener("keyup",function(event){
    if(event.code === "Enter"){
        let TEXT = input.value;
    if(TEXT){
        addTag(TEXT);
        input.value = "";
        
    }
    }
});


//remove a tag by entering deleting
document.addEventListener("keyup",function(event){
    if(list.length!==0){    
    if(event.code ==="Backspace"){
        let lastTagId = Math.max(...list);
        let lastTag = document.getElementById(lastTagId);
        lastTag.parentNode.removeChild(lastTag);

        let currentID = Math.max(...list);
        let index = list.indexOf(currentID);
        list.splice(index,1);
    }

}
});

//highlight input area
window.onclick = function(event){
    if(container.contains(event.target)){
        container.classList.add('active');
    }else{
        container.classList.remove('active');
    }
    
};
