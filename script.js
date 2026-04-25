$(document).ready(function(){

    /* ================= BOTÓN CONTINUAR ================= */
    $("#btnContinuar").click(function(){

        Swal.fire({
            title: "⚡ TRUENO ⚡",
            text: "Entrando al álbum...",
            background: "#111",
            color: "#fff",
            showConfirmButton: false,
            timer: 2000,

            didOpen: () => {
                Swal.showLoading();
            }

        }).then(()=>{
            window.location.href = "musica.html";
        });

    });

    /* ================= ANIMACIÓN CARDS ================= */
    $(".canciones").hide().fadeIn(1500);

    $(".canciones").hover(
        function(){
            $(this).css("transform","scale(1.05)");
        },
        function(){
            $(this).css("transform","scale(1)");
        }
    );

    /* ================= PARTÍCULAS ================= */
    for (let i = 0; i < 30; i++) {
        $(".particles").append("<span></span>");
    }

    $(".particles span").each(function(){
        let size = Math.random() * 6;
        let posX = Math.random() * window.innerWidth;
        let delay = Math.random() * 10;
        let duration = 5 + Math.random() * 10;

        $(this).css({
            width: size + "px",
            height: size + "px",
            left: posX + "px",
            animationDelay: delay + "s",
            animationDuration: duration + "s"
        });
    });

});