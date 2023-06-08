let cont =0;
document.getElementById('btn-triangle').addEventListener('click',function(){
    cont +=1;
    const triangleInput1= getInputField();
    const triangleInput2= getInputField();
    const triangleArea= 0.5*triangleInput1*triangleInput2;
    const areaFixed= triangleArea.toFixed(2);
    const AreaUpdate= parseFloat(areaFix);
    const NameUpdate= document.getElementById().innerText;
    getOutputFunction= (cont, NameUpdate,  AreaUpdate);
})
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = "blog.html";
})