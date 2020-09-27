export default function isAuth(){
    const token = localStorage.getItem("token");
    if(token){
        var res = true;
    }else{
        var res = false;
    }
    return res;
}