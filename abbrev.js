// write a function that takes a name then gives you the abbreviation of the first and last name
function abbrevName(name){
    let aName = [name[0]] //initalizes the container for my pushed array
    for (let i = 0; i < name.length; i++){ //sets for loop to loop through the given string
        if(name[i]=== " "){ // sets conditional that looks for the space as a stopping place then goes to the next letter after
               aName.push(name[i + 1]);
        }
    }
    return aName.map(el => el.toUpperCase()).join("."); // returns the first letters and makes them uppercase and then joins them with a period in the middle
}