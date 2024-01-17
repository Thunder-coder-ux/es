int = "";

function ChangeText(){
    int= document.getElementById("B").value;

    if(int == ""){
        document.getElementById("C").innerHTML = "Please enter a text";
    }
    else {
        document.getElementById("C").innerHTML = int;
    }
}