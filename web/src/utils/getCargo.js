function getCargo(role){
    var link;
    switch (role) {
        case "ROLE_ADM": link = "Administrador"; break;
        case "ROLE_FINANCEIRO": link = "Financeiro"; break;
        case "ROLE_GERENTE": link = "Gerente"; break;
        case "ROLE_MOTORISTA": link = "Motorista"; break;
    }
    return link
}

export default getCargo;