const code = '0K8'
function codeToTime(code){
    let startHour = ''
    let startMin = ''
    let endHour = ''
    let endMin = ''
    let restTime = ''
    restTime = turnRestTime(code[code.length - 1])
    startHour = turnStartHour(String(code[0])+String(code[1]))
    function turnRestTime(code){
        if (code === 'H'){
            return '30'
        } 
        return '60'
    }
    function turnStartHour(code){
        if(code[0] == '0'){
            return code.charCodeAt(1) - 64;
        }
        return code;
    }
}
codeToTime(code)