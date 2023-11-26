window.addEventListener('load', () =>{


    const userReceptorProx = {
       nomeReceptor: "Bruno Ribeiro",
       hospital: "Hospital das Clínicas",
       hemocentro: "Hemominas BH",
       horario:"15:00",
    };
    const userReceptorPass = {
       nomeReceptor: "Camila Alves",
       hospital: "Hospital da Baleia",
       hemocentro: "Hemocentro Uberaba",
       horario:"16:30",
    };
 
    const userDoador = {
       nomeDoador: "Maria Silveira",
       tipoSanguineo: "A+",
       fotoPerfil:"https://randomuser.me/api/portraits/women/53.jpg",
       proximaDoacao: {
          hemocentro: "Hemominas BH",
          horario:"14:00",
       },
       doacaoPassada: {
          hemocentro: "Hemominas BH",
          horario:"12:00",
       },
 
    };
 
    const userD = JSON.stringify(userDoador);
    const userRProx = JSON.stringify(userReceptorProx);
    const userRPass = JSON.stringify(userReceptorPass);
 
    localStorage.setItem("userDoador", userD);
    localStorage.setItem("userReceptorProx", userRProx);
    localStorage.setItem("userReceptorPass", userRPass);
 
    renderDoador(userDoador);
    renderReceptorProx(userReceptorProx);
    renderReceptorPass(userReceptorPass);
 });
 
 function renderDoador(item) {
    // Adicionando uma div com o item e a quantidade na div .items
    $('#nome-usuario').append(`${item.nomeDoador}`);
    $('#tipo-sanguineo').append(`${item.tipoSanguineo}`);
    $('#div-img-perfil').append(`<img id="img-perfil" src="${item.fotoPerfil}" alt="Foto de perfil"/>`);
  };
 
 function renderReceptorProx(item) {
    // Adicionando uma div com o item e a quantidade na div .items
    $('#prox-nome-receptor').append(`${item.nomeReceptor}`);
    $('#prox-hospital-receptor').append(`${item.hospital}`);
    $('#prox-hemocentro').append(`${item.hemocentro}`); 
    $('#prox-horario').append(`${item.horario}`); 
 };
 
 function renderReceptorPass(item) {
    // Adicionando uma div com o item e a quantidade na div .items
    $('#pass-nome-receptor').append(`${item.nomeReceptor}`);
    $('#pass-hospital-receptor').append(`${item.hospital}`);
    $('#pass-hemocentro').append(`${item.hemocentro}`); 
    $('#pass-horario').append(`${item.horario}`); 
 };
