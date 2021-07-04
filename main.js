
let startPoint = document.getElementById("form_start");
let elements = []; 




function createForm(){

    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php"); 
    document.body.appendChild(form); 

    let test = document.createElement("div"); 
    test.innerHTML = "This si the test"; 

    let fullName = new inputJS('standard_text', 'fullname', 'text', 'Enter Full Name', '100px', '20px', '', document.body); 
    let testDiv = new divJS('standard_div', 'testDiv', '200px', '50px', document.body);
    
    let testCheck = new inputJS('checkbox_style_1','testcjecl', 'checkbox', 'thing', '100px', '100px', 'option  one', testDiv.element); 
    let testCheck2 = new inputJS('standard', 'testcjecl2', 'checkbox', 'thing', '100px', '100px', 'option  two' , testDiv.element); 
    let testCheck3 = new inputJS('standard', 'testcjecl3', 'checkbox', 'thing', '100px', '100px', 'option  three',  testDiv.element); 
    

    let testButton = new buttonJS('standard', 'test', 'testAction()', 'value');

    console.log("complete");

}



function testAction() {
    console.log('yeppers'); 
}


class divJS {
    
    constructor(classType, name, height, width, parent, inner) {
    
        this.classType = classType; 
        this.name = name; 
        this.height = height; 
        this.width = width; 
        this.parent = parent; 
        this.element = document.createElement('div'); 
        this.element.setAttribute('width', this.width); 
        this.element.setAttribute('height', this.height);
        if(inner != undefined){
            this.element.innerHTML = inner; 
        }
        this.parent.appendChild(this.element);
        console.log('created the div');
    }

}


class inputJS {
   //TODO - need to add a label to the checkbox version
    constructor(classType, name, type, placeholder, width, height, value, parent) {

        this.classType = classType; 
        this.width = width; 
        this.height = height;  
        this.name = name; 
        this.type = type;
        this.element = document.createElement("input");
        this.element.setAttribute('value', this.label)
        this.element.setAttribute('type', this.type); 
        this.element.setAttribute('width', this.width); 
        this.element.setAttribute('height', this.height); 
        this.element.setAttribute('value', value); 
        
        elements.push(this); 
        parent.appendChild(this.element);
            console.log('created the input');
    }

}

class buttonJS {

    constructor(classType, name, action, label, width, height) {

        this.classType = classType;
        this.width = width; 
        this.height = height; 
        this.label = label; 
        this.name = name; 
        this.action = action;
        this.element = document.createElement("button");
        this.element.setAttribute('value', this.label)
        this.element.setAttribute('onClick', this.action); 
        this.element.setAttribute('width', this.width); 
        this.element.setAttribute('height', this.height); 
        
        elements.push(this); 
        document.body.appendChild(this.element);
            console.log('created the button');
    }
}
