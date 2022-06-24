// Seleção do botão de categoria ativo no momento que clicka na categoria
// funciona na pagina de projetos e blog devido as classes terem o mesmo nome caso contrario teria de repetir
// repetir a logica com os nomes certos das classes  

$(".filtroItem").click(function(){
    $(this).addClass("filtroAtivo").siblings().removeClass("filtroAtivo");
})

// mostra todos os posts quando clica em ver tudo
// mostra os posts que foram adicionados na mesma categoria que o nome do botao

$(document).ready(function(){
    $(".filtroItem").click(function(){
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".cardPost").show("1000");
        }
        else{
            $(".cardPost")
            .not('.' + value)
            .hide("1000");
            $(".cardPost")
            .filter('.' + value)
            .show("1000");
        }
    });
});