function formSubmit(){
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let message = document.getElementById("Message").value;
    let mobileNumber = document.getElementById("MobileNumber").value;
    if(name&&email&&message){
        alert("Thank you " + name + " we have send your message to harshosale and will contact you soon.");
    }
}