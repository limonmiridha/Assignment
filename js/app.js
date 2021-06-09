// Popup

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('edit-user')){
        const popup = document.getElementById('popup')
        popup.classList.add('active')
    }
    else if(e.target.classList.contains('fa-window-close')){
        const popup = document.getElementById('popup')
        popup.classList.remove('active')
    }
})

// Popup form with table data
var table = document.getElementById('table');
var singleIndex = [];
                
for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
        singleIndex = this.rowIndex;
         document.getElementById("name").value = this.cells[1].innerHTML;
         document.getElementById("email").value = this.cells[2].innerHTML;
         document.getElementById("phone").value = this.cells[3].innerHTML;
         document.getElementById("role").value = this.cells[7].innerHTML;
    };
}
