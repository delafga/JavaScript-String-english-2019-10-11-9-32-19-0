// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
document.write(name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
const words = sentence.split(" ");
        
for(let ctr = 0; ctr < words.length; ctr++){
	words[ctr] = words[ctr][0].toUpperCase() + words[ctr].substr(1);
	document.write(words[ctr] + " ");
}

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
const value = money.substr(1);
document.write(value);