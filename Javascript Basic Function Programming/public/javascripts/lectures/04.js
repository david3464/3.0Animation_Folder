window.onload = function() {
    var btn1 = document.getElementById('btn1');
    btn1.onclick = function() {
        alert('1')
    }

    // var oDivs = document.getElementsByTagName ('div');
    // // oDiv[1].style.background ='red';
    // console.log(oDivs.length);
    // for(let i=0; i<oDivs.length; i++) {
    //     oDivs[i].style.background = 'red';
    // }
    // for(var i = 0; i <)

    var btn2 = document.getElementById('btn2'); 
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var oDiv6 =document.getElementById('div6');
    var aCh = oDiv6.getElementsByTagName ('input');
    
    btn2.onclick = function () {
        for(var i=0; i<aCh.length; i++){
            aCh[i].checked = true;
        }
    };
    btn3.onclick = function () {
        for(var i=0; i<aCh.length; i++){
            aCh[i].checked = false;
        }
    };
    btn4.onclick = function () {
        for(var i=0; i<aCh.length; i++){
            if(aCh[i].checked==true) {
                aCh[i].checked = false;
            }
            else {
                aCh[i].checked = true;
            }
        }
    };
}

