function getCargo(role){
    var link;
    // eslint-disable-next-line default-case
    switch (role) {
        case "ROLE_ADM": link = "Administrador"; break;
        case '1': link = "Administrador"; break;
        case "ROLE_FINANCEIRO": link = "Financeiro"; break;
        case '2': link = "Financeiro"; break;
        case "ROLE_GERENTE": link = "Gerente"; break;
        case '3': link = "Gerente"; break;
        case "ROLE_MOTORISTA": link = "Motorista"; break;
        case '4': link = "Motorista"; break;

    }
    return link
}

export default getCargo;