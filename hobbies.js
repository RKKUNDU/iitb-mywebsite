function displayDescription() {
        var btn = document.getElementsByName('hobby');
        var z = document.getElementsByClassName("description");
        for(var i = 0; i < btn.length; i++) {
                if(btn[i].checked)
                {
                        z[i].style.display = 'block';
                        break;
                }
        }
}
function changeDescription(x) {
        var z = document.getElementsByClassName("description");
        for(var i=0;i<z.length;i++)
        {
                if(i==x)
                        z[i].style.display = 'block';
                else
                        z[i].style.display = 'none';
        }
}
