function remove(input, toBeRemoved)
{
    input = input.split(toBeRemoved).join("")
    return input;
}

function changeText()
{
    let text = document.getElementById("input-text").value;
    console.log(text);
    output = remove(text, "+");
    document.getElementById("newText").innerHTML = output;
    document.getElementById("input-text").value = "";
}