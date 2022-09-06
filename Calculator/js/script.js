var doArithmatic = (operator) => {
    var input = document.getElementById("inputValue").value;

    if (operator == 'equal') {
        document.getElementById("inputValue").value = eval(input);
    }
}