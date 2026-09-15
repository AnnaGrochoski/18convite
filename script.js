/* =====================================================
   ABERTURA DO ENVELOPE
===================================================== */

const abrir = document.getElementById("abrir");

const envelope = document.getElementById("envelope");

const abertura = document.getElementById("abertura");

const convite = document.getElementById("convite");


abrir.addEventListener("click", function () {

    /* começa a animação */

    envelope.classList.add("aberto");


    /* espera o convite sair */

    setTimeout(() => {

        abertura.classList.add("finalizada");

        convite.classList.add("visivel");

        document.body.style.overflow = "auto";

    }, 3000);

});


/* =====================================================
   MENU
===================================================== */

function mostrarSecao(id) {

    const secoes =
        document.querySelectorAll(".pagina");


    secoes.forEach(secao => {

        secao.classList.remove("ativa");

    });


    const secaoEscolhida =
        document.getElementById(id);


    if (secaoEscolhida) {

        secaoEscolhida.classList.add("ativa");

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

}


/* =====================================================
   CONTAGEM REGRESSIVA
===================================================== */

const dataFesta =
    new Date(
        "2027-04-11T19:00:00-03:00"
    ).getTime();


function atualizarContador() {

    const agora =
        new Date().getTime();


    const distancia =
        dataFesta - agora;


    if (distancia <= 0) {

        document.getElementById("dias").textContent =
            "00";

        document.getElementById("horas").textContent =
            "00";

        document.getElementById("minutos").textContent =
            "00";

        document.getElementById("segundos").textContent =
            "00";

        return;

    }


    const dias =
        Math.floor(
            distancia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (
                distancia %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutos =
        Math.floor(
            (
                distancia %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const segundos =
        Math.floor(
            (
                distancia %
                (1000 * 60)
            ) /
            1000
        );


    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");


    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");


    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


atualizarContador();


setInterval(
    atualizarContador,
    1000
);
