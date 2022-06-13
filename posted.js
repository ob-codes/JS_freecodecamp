/*Hey guyss!! 
I'm starting my #100DaysOfCode challenge
I will learn javascript & would try to do some projects */

/*Topic: first compilation*/
var number = 5; //inline comment


/*Topic: first program*/
console.log("hello world");

/*Hey guyss!! 
I'm starting my #100DaysOfCode challenge
Learning javascript & would try to do some projects */

/*Topic: datatypes & variable decalaration in JS*/
//number, string, undefined, null, Boolean, Symbol, Object 

var myName = "ob.code"; // visible to whole program 

let myName2 = "ob.code"; // visible only where declared

const pi = 3.142; // cannot be changed

/*Topic: initialize variable & assignment*/
var a = 5;
var b = 10; 
var c = "i am ob.";

a = a + 1;
b= b + 5;
c = c + "codes"

console.log(a);
console.log(b);
console.log(c);

/*Topic: variable assignment*/
var a;
console.log(a);
a = 7; 
console.log(a);
var b = 9;
console.log(b);

/*Topic: case sensitive names of variable & functions*/
var studyGroup;
STUDYGROUP = 10;
console.log(studyGroup); //undefined
console.log(STUDYGROUP); //10

/*Topic: Add subtract multiply divide numbers*/
var sum = 10 + 12;
console.log(sum);

var diff = 12-2;
console.log(diff);

var product = 12*2;
console.log(product);

var divide = 12/2;
console.log(divide);

var myVar = 8;
myVar++;
console.log(myVar);

/*Topic: floating numbers*/
var decimal = 0.000097;
console.log(decimal);//0.000097

var product = 3.0*2.5;
console.log(product);//7.5

var remainder = 11%7;
console.log(remainder);//4

var a = 9;
a += 6;
console.log(a);

var b = 9;
b -= 6;
console.log(b);

var c = 3;
c *= 6;
console.log(c);//18


/*Topic: strings declaration*/
var firstname = "ob.codes";
console.log(firstname);

/*Topic: qoutes in a strings*/
var lastname = "They call me \"ob\"";
console.log(lastname);

var lastname2 = 'They call me "ob"';
console.log(lastname2);

var lastname3 = `They 'call' \\ me \n"ob.codes"`;
console.log(lastname3);

var myStr = "This is a firstline \n\t second line with tab \n \\thirdline with a slash and \"qoutes\"";
console.log(myStr);

/*Topic: strings operations*/
var myStr1 = "John";
var myStr2 = "Smith";
var myStr3 = myStr1 + " " + myStr2;
console.log(myStr3);
myStr1 += myStr2;
console.log(myStr1);

var temp = "freecodecamp";
var myStr1 = "our  name is " + temp + ". Welcome on board!";
console.log(myStr1);

var myStr1Length = myStr1.length;
console.log(myStr1Length); //console.log(myStr1.length)

/*individual index cannot be modified in a string*/
var firstname = "John Smith";
firstname[0] = 'S';
console.log(firstname[0]);///no change
firstname = "Sohn Smith";
console.log(firstname[0]);///changed to A

/*last character in a string*/
var firstname = "John Smith";
var lastchar = firstname.length - 1;
console.log(firstname[lastchar]);

var firstname = "John Smith";
var secondlast = firstname.length - 2;
console.log(firstname[secondlast]);

/*function word blanks*/
function wordgame(myNoun, myAdjective, myVerb, myAdverb)
{
    var result;
    result =  myNoun + " is a " + myAdjective + " animal that " + myVerb + " very " + myAdverb;
    return result;
}
console.log(wordgame("dog", "big", "run", "fast"));
console.log(wordgame("cat", "little", "run", "slowly"));

/*arrays*/
var myArr = ["John", "23"]; 
console.log(myArr[0]);

var doubleArray = [["Son", "31"], ["daughter", "21"]];
console.log(doubleArray[0]);//[ 'Son', '31' ]
console.log(doubleArray[0][0]);//Son

/*individual index can be modified in arrays*/
var myArray = [32, 31, 45];
console.log(myArray);
myArray[0] = 26;
console.log(myArray);

/*3D arrays*/
var complexArray = [[1, 2], [3, 4], [[5, 6], 7, 8]];
console.log(complexArray);
console.log(complexArray[2]);
console.log(complexArray[2][0]);
console.log(complexArray[2][0][1]);

/*push & pop in array*/
var myArr = [0,1,2];
myArr.push("its my name");
console.log(myArr);
myArr.push(3);
console.log(myArr);

var temp = myArr.pop();  //removes last element
console.log(temp);
console.log(myArr);

/*shift() and unshift() in array*/
var myArr = [21, 06, 17];
console.log(myArr);
var temp = myArr.shift(); //removes first element
console.log(temp);
console.log(myArr);

myArr.unshift("begining"); //add element on first index
console.log(myArr);

/*functions */
function func1()
{
    console.log("Hello world!!"); 
}
func1();

function subtract(a, b) //no need to mention data types of arguments
{
    return a-b;
}
console.log(subtract(5,4)); //1

/*Global scope */

var myGlobal=10;

function func1()
{
    oopsGlobal = 5; // variable defined without var keyword it becomes global
}

function func2()
{
    var output = "";
    if (typeof myGlobal != "undefined")
    {
        output += "myGlobal: " + myGlobal;
    }

    if (oopsGlobal != "undefined")
    {
        output += "\noopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

func1();
func2();

/*Local Scope */
function myLocal() {
    var myVar = 5; //local scope
    console.log(myVar);
}
myLocal();
console.log(myVar); //error - access outside function

/*Local & Global variable */
var outerwear = "Tshirt";

function func3() {
    var outerwear = "Jeans";
    console.log(outerwear); //local variable takes precedence if global has same name
}
func3();
console.log(outerwear);

/*shopping list*/
var shoppingList = [["milk", 3], ["vegetables", 5], ["oil", 1], ["banana", 3], ["juice", 12]];
console.log();

/*functions practice */
function timesfive(num)
{
    return num *  5;
}
console.log(timesfive(5));

function change(num)
{
    return (num+5)/3;
}
var stored = change(4);
console.log(stored);

/*queue */
var queue = [1,2,3,4,5]
function nextInline(arr, val) 
{
    arr.push(val);
    return arr.shift();
}
console.log("Before: " + queue);
console.log(nextInline(queue, 6));
console.log("After: " + JSON.stringify(queue)); //shows bracket

/*decision: if-else*/
function isPositive(inp)
{
    if (inp >= 0) 
        return "Yes, this is postive";
    else 
        return "No, this is negative";
}
console.log(isPositive(19));
console.log(isPositive(-19));

/*comparison and logical AND */
function logic(para1, para2) 
{
    if (para1 > para2 &&  para1 > 0)
        return para1 + " is greater and postive number";
    else if (para1 < para2 &&  para1 >0)
        return para1 + " is lesser but positive";
    else
        return para2 + " is greater";    
}
console.log(logic(14, 12));
console.log(logic(-12, -8));
console.log(logic(12, 14));

/*comparison & logical OR*/
function logicalOR(a, b)
{
    if (a > b || b > a)
        return "different numbers";
    else 
        return "Same numbers";
}
console.log(logicalOR(8, 9));
console.log(logicalOR(7, 7));

/*if - elseif - else*/
function comparison(inp)
{
    if (inp > 100)
        return inp + ": Greater than 100";
    else if (inp > 50)
        return inp + ": Greatar than 50";
    else
        return inp + ": under 50";
}
console.log(comparison(150));
console.log(comparison(75));
console.log(comparison(5));


function  logical3(inp)
{
    if (inp  < 5) return "tiny";
    else if (inp  < 10) return "Small";
    else if (inp  < 15) return "Medium";
    else if (inp  < 20) return "Large";
    else return "Huge";
}
console.log(logical3(3));
console.log(logical3(8));
console.log(logical3(13));
console.log(logical3(18));
console.log(logical3(23));

/*strict equality operator*/
//3===3 
// 3 == '3' true -> bcoz of type conversion
// 3 === '3' false -> no type conversion
function isMatched(inp)
{
    if (inp === '7') 
        return "Exact match";
    else if (inp == '7')
        return "Match but not exact"; 
    else
        return "Not a match";
}
console.log(isMatched(7));
console.log(isMatched('7'));
console.log(isMatched(8));
console.log(isMatched('8'));

function isEqual(a, b)
{
    if (a !== b)
        return "Not equal"; 
    else return "equal";
}
console.log(isEqual(12, "12")); //not equal

var names =["hole-in-one", "Eagle","Birdie", "par", "Bogey", "Double Bogey"];
function golfscore(par, strokes)
{
    if (strokes == 1) return names[0];
    else if (strokes <= par - 2) return names[1];
    else if (strokes == par - 1) return names[2];
    else if (strokes == par) return names[3];
    else if (strokes == par + 1) return names[4];
    else if (strokes == par + 2) return names[5];
    else return "Go Home!";
}
console.log(golfscore(5,4));
console.log(golfscore(5,3));
console.log(golfscore(5,6));
console.log(golfscore(5,7));
console.log(golfscore(5,8));

/*switch-case */
function caseInSwitch(val) 
{
    var answer = "";
    switch(val)
    {
        case 1:
        case "1":
            answer = "alpha";
        break;
        case 2:
        case "2":
            answer = "beta";
        break;
        case 3:
        case "3":
            answer = "gamma";
        break;
        case 4:
        case "4":
            answer = "delta";
        break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch("2"));
console.log(caseInSwitch(5));
console.log(caseInSwitch(3));

/*switch-case */
function caseInSwitch(val) 
{
    var answer = "";
    switch(val)
    {
        case 1:
        case 2:
        case 3:
            answer = "Minors";
        break;
        case 4:
        case 5:
        case 6:
            answer = "Primary";
        break;
        case 7:
        case 8:
        case 9:
            answer = "Secondary";
        break;
        default:
            answer = "Minors";
            break;
    }
    return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch("4")); //default case hit
console.log(caseInSwitch(5));
console.log(caseInSwitch("9")); //default case hit