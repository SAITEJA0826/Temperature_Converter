const convertFah = () =>{
    var celsius = parseFloat(document.querySelector("#celsius").value);

    var fahrenresult = (1.8 * celsius)+32;
    var kelvinresult  = (celsius) + 273.15;
    var a = fahrenresult.toFixed(3);
    var b = kelvinresult.toFixed(3);

    document.querySelector("#celsius").value = celsius;
    document.querySelector("#fahren").value = a;
    document.querySelector("#kelvin").value = b;
}
const convertKel = () =>{
    var fahren = parseFloat(document.querySelector("#fahren").value);

    var celsiusresult = (fahren - 32) / 1.8;
    var kelvinresult = (fahren - 32)/1.8 + 273.15
    var c = celsiusresult.toFixed(3)
    var d = kelvinresult.toFixed(3) //it results float values in 3 values ex=1.360

    document.querySelector("#fahren").value = fahren
    document.querySelector("#celsius").value = c
    document.querySelector("#kelvin").value = d
}
const convertCel = () =>{
    var kelvin = parseFloat(document.querySelector("#kelvin").value);

    var celsiusresult = kelvin - 273.15;
    var fahrenresult = (kelvin - 273.15)*1.8 + 32
    var e = celsiusresult.toFixed(3)
    var f = fahrenresult.toFixed(3) //it results float values in 3 values ex=1.360

    document.querySelector("#kelvin").value = kelvin
    document.querySelector("#celsius").value = e
    document.querySelector("#fahren").value = f
}

const reset = () => {
    document.querySelector("#celsius").value = "";
    document.querySelector("#fahren").value = "";
    document.querySelector("#kelvin").value = "";
}
