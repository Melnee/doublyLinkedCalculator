// ██╗     ██╗███████╗████████╗     ██████╗██╗      █████╗ ███████╗███████╗
// ██║     ██║██╔════╝╚══██╔══╝    ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝
// ██║     ██║███████╗   ██║       ██║     ██║     ███████║███████╗███████╗
// ██║     ██║╚════██║   ██║       ██║     ██║     ██╔══██║╚════██║╚════██║
// ███████╗██║███████║   ██║       ╚██████╗███████╗██║  ██║███████║███████║
// ╚══════╝╚═╝╚══════╝   ╚═╝        ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝


                   
class DoublyLinkedList{
    constructor(head = null){
        this.head = head;
    }
}

// ███╗   ██╗ ██████╗ ██████╗ ███████╗     ██████╗██╗      █████╗ ███████╗███████╗
// ████╗  ██║██╔═══██╗██╔══██╗██╔════╝    ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝
// ██╔██╗ ██║██║   ██║██║  ██║█████╗      ██║     ██║     ███████║███████╗███████╗
// ██║╚██╗██║██║   ██║██║  ██║██╔══╝      ██║     ██║     ██╔══██║╚════██║╚════██║
// ██║ ╚████║╚██████╔╝██████╔╝███████╗    ╚██████╗███████╗██║  ██║███████║███████║
// ╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝     ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝                                                                     
                                   
 class Node{
     constructor(value, previous = null, next = null){
        this.value = value;
        this.previous = previous;
        this.next = next;
     }
 }






//  ██╗███╗   ██╗██████╗ ██╗   ██╗████████╗    ████████╗ ██████╗     ██╗     ██╗███████╗████████╗
//  ██║████╗  ██║██╔══██╗██║   ██║╚══██╔══╝    ╚══██╔══╝██╔═══██╗    ██║     ██║██╔════╝╚══██╔══╝
//  ██║██╔██╗ ██║██████╔╝██║   ██║   ██║          ██║   ██║   ██║    ██║     ██║███████╗   ██║   
//  ██║██║╚██╗██║██╔═══╝ ██║   ██║   ██║          ██║   ██║   ██║    ██║     ██║╚════██║   ██║   
//  ██║██║ ╚████║██║     ╚██████╔╝   ██║          ██║   ╚██████╔╝    ███████╗██║███████║   ██║   
//  ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝    ╚═╝          ╚═╝    ╚═════╝     ╚══════╝╚═╝╚══════╝   ╚═╝   
//put each character into a node in the doubly linked list

var newList = new DoublyLinkedList();

var testInput = "-1/5*4*7";
var symbols = ["+", "-", "/", "*"];
var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


for(var i = 0; i < testInput.length; i++){
    var newNode = new Node(testInput[i]);
    if(newList.head == (null)){
        newList.head = newNode;
    }else{
        var runner = newList.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = newNode;
        newNode.previous = runner;
    }

}


// ██████╗ ███████╗███╗   ███╗██████╗  █████╗ ███████╗
// ██╔══██╗██╔════╝████╗ ████║██╔══██╗██╔══██╗██╔════╝
// ██████╔╝█████╗  ██╔████╔██║██║  ██║███████║███████╗
// ██╔═══╝ ██╔══╝  ██║╚██╔╝██║██║  ██║██╔══██║╚════██║
// ██║     ███████╗██║ ╚═╝ ██║██████╔╝██║  ██║███████║
// ╚═╝     ╚══════╝╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝
//find * and / symbols
//math them together into one node
//use if then statements to add together, with exceptions for negative numbers

var runner = newList.head;
while(runner != null){
    if(runner.value == "*"){   
// ▄ ██╗▄
//  ████╗
// ▀╚██╔▀
//   ╚═╝ 
        var answerValue = runner.previous.value * runner.next.value;
        var answerNode = new Node(answerValue);

        //if answer node is not at the back, point answerNode forward,
        if(runner.next.next != null){
            answerNode.next = runner.next.next;
        }
        //if answer node is not at the front, point answerNode back,
        if(runner.previous.previous != null){
            answerNode.previous = runner.previous.previous;
        }

        //if answer node IS near the front, make it the new head.
        if(runner.previous.previous == null){
            newList.head = answerNode;
        }

        //point references only to this node, only if it's not near the front
        if(runner.previous.previous != null){
            runner.previous.previous.next = answerNode;
        }
        //point references only to this node, only if it's not near the back
        if(runner.next.next != null){
            runner.next.next.previous = answerNode;
        }
//     ██╗
//    ██╔╝
//   ██╔╝ 
//  ██╔╝  
// ██╔╝   
// ╚═╝    
    }else if(runner.value == "/"){
        var answerValue = runner.previous.value / runner.next.value;
        var answerNode = new Node(answerValue);

        //if answer node is not at the back, point answerNode forward,
        if(runner.next.next != null){
            answerNode.next = runner.next.next;
        }
        //if answer node is not at the front, point answerNode back,
        if(runner.previous.previous != null){
            answerNode.previous = runner.previous.previous;
        }

        //if answer node IS near the front, make it the new head.
        if(runner.previous.previous == null){
            newList.head = answerNode;
        }

        //point references only to this node, only if it's not near the front
        if(runner.previous.previous != null){
            runner.previous.previous.next = answerNode;
        }
        //point references only to this node, only if it's not near the back
        if(runner.next.next != null){
            runner.next.next.previous = answerNode;
        }
    }
    runner = runner.next;
}


// ██╗     ██╗███████╗████████╗██╗   ██╗ █████╗ ██╗     ██████╗ ██████╗ ██╗███╗   ██╗████████╗
// ██║     ██║██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║     ██╔══██╗██╔══██╗██║████╗  ██║╚══██╔══╝
// ██║     ██║███████╗   ██║   ██║   ██║███████║██║     ██████╔╝██████╔╝██║██╔██╗ ██║   ██║   
// ██║     ██║╚════██║   ██║   ╚██╗ ██╔╝██╔══██║██║     ██╔═══╝ ██╔══██╗██║██║╚██╗██║   ██║   
// ███████╗██║███████║   ██║    ╚████╔╝ ██║  ██║███████╗██║     ██║  ██║██║██║ ╚████║   ██║   
// ╚══════╝╚═╝╚══════╝   ╚═╝     ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝   ╚═╝   
                                                                                           

// to test that it worked, create a runner and print every value in the list

var runner = newList.head;
console.log(runner.value)
while(runner.next != null){
    console.log(runner.next.value);
    runner = runner.next;
}


//it worked!!! :D


//  █████╗ ██████╗ ██████╗ 
// ██╔══██╗██╔══██╗██╔══██╗
// ███████║██║  ██║██║  ██║
// ██╔══██║██║  ██║██║  ██║
// ██║  ██║██████╔╝██████╔╝
// ╚═╝  ╚═╝╚═════╝ ╚═════╝ 
//add it all together! :D

var runner = newList.head;
var sum = 0;
var headIsNegative = false;

while(runner != null){
    if(symbols.includes(runner.value)){
        runner = runner.next;
        headIsNegative = true;
    }
    //conditional to check if head is negative
    if(headIsNegative == false){
        sum+=parseFloat(runner.value);
        console.log("added " + runner.value);
        console.log("SUM SO FAR " + sum);
        runner = runner.next;
    }else if(runner.previous.value == "-"){
        sum-=parseFloat(runner.value);
        console.log("subtracted " + runner.value);
        console.log("SUM SO FAR " + sum);
        runner = runner.next;
    }else{
        sum += parseFloat(runner.value);
        console.log("added " + runner.value);
        console.log("SUM SO FAR " + sum);
        runner = runner.next;
    }    
}

console.log("answer is: " + sum);