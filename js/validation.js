function validateData()
{
    var nama = document.forms['reservation']['nama'].value;
    var surel = document.forms['reservation']['surel'].value;
    var gender = document.forms['reservation']['gender'].value;
    var branchLoc = document.forms['reservation']['lokasi'].value;
    var message = document.forms['reservation']['deskripsi'].value;

    var error = document.getElementById('errorMsg')
    if (nama == '')
    {
        error.innerText = "*Name field must be filled"
    }
    else if (surel == '')
    {
        error.innerText = "*E-mail field must be filled"
    }
    else if (gender == '')
    {
        error.innerText = "*Gender cannot be empty"
    }
    else if (branchLoc == '0')
    {
        error.innerText = "*Choose a branch location"
    }
    else if (message == '')
    {
        error.innerText = "*Message field must be filled"
    }
    else
    {
        alert("Message succesfully delivered to Danbam!")
        document.getElementById('resetBtn').click();
    }
}