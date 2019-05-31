function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

var gotCharacters = function(){
    const ul = document.getElementById('characters'); // Get the list where we will place our authors
    const url = 'http://www.anapioficeandfire.com/api/characters'; // Get 10 random users
    var globalData;

    function getMain(){
        get(url, function(data){
            data.forEach(nameFunction)
        })       
        
        function nameFunction(character){
            if(character.name != "") {
                ubfi = character.name + "-" + character.gender
                $ 
            })
        }
        })
    }

    function allCharacters(jsonResults){
        console.log(jsonResults);
        jsonResults.forEach(character => {
            let li = createNode('li'),
                span = createNode('span');
            span.innerHTML = `${character}`;
            append(li, span);
            append(ul, li);
        })
    }
}

console.log(gotCharacters.name());