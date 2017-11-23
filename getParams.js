exports.fromUri = (uri) =>{
    let index = uri.indexOf("text=", 0)
    let param = uri.slice(index)
    param = param.replace("text=", "")
    param = param.split("&")
    return param[0]
}