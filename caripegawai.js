// JavaScript Document
$(document).ready(function() {
 $("#pegawai").change(function() {
	var skpd = $("#skpd").val();  
    var pegawai = $("#pegawai").val();
    $("#CariPegawai").html('<img src=\"img/Preloader_3.gif\">'); 
    $.ajax({
     type:"get",
     url:"Profil/caripegawai1.php",
     data:"pegawai="+ pegawai + "&skpd="+skpd,
     success: function(data){
      $("#CariPegawai").html(data);
	  $("#PenCarian").modal('show');
     }
    });
  });
	
		  function CariPegawaix(){
			 	var skpd = $("#skpd").val();  
			    var pegawai = $("#pegawai").val();
			    var length = pegawai.length;
			    if(pegawai != "")
				{
					if(length > 3)
					{
						$("#CariPegawai").html('<img src=\"img/Preloader_3.gif\">'); 
						$.ajax({
						 type:"get",
						 url:"Profil/caripegawai1.php",
						 data:"pegawai="+ pegawai + "&skpd="+skpd,
						 success: function(data){
						  $("#CariPegawai").html(data);
						  $("#PenCarian").modal('show');
						 }
						});
					}
					else
					{
						$("#isinotifikasi").html('Masukkan Minimal 4 Karakter Untuk Pencarian Pegawai');
						$("#notifikasi").modal('show');										
					}
				}
			    else
				{
						$("#isinotifikasi").html('Nama / NIP Pegawai Yang Di Cari Tidak Boleh Kosong');
						$("#notifikasi").modal('show');					
				}
		  };
	  	  $("#CaPeg").click(function(){
                  	 CariPegawaix();
       	  });
		  $("#pegawai").keyup(function(event){
			  if(event.keyCode == 13){
				$("#CaPeg").click();
			  }
		  });
	
});

