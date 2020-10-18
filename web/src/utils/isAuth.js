export default function isAuth(){
    const token = localStorage.getItem("token");
    var res;
    if(token){
        res = true;
    }else{
        res = false;
    }
    return res;
}