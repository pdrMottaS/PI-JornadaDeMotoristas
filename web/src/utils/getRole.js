const { getRoles } = require("@testing-library/react")

function getRole(){
    const role = localStorage.getItem("role");
    var link = "/";
    switch (role) {
        case "ROLE_ADM": link += "administrador"; break;
        case "ROLE_FINANCEIRO": link += "financeiro"; break;
        case "ROLE_GERENTE": link += "gerente"; break;
        case "ROLE_MOTORISTA": link += "motorista"; break;
    }
    return link
}

export default getRole;