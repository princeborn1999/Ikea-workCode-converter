function converter() {
  const code = document.getElementById("workCode").value;
  const restTime = getRestTime(code[code.length - 1]);
  const startHour = getStartHour(String(code[0]) + String(code[1]));
  const startMin = getStartMin(code[1]);
  const workTime = getWorkTime(code);
  const endTime = getEndTime(workTime, startHour, startMin);
  function getRestTime(code) {
    if (code === "H") {
      return "30";
    }
    return "60";
  }
  function getStartHour(code) {
    if (code[0] == "0") {
      return code.charCodeAt(1) - 64;
    }
    return code;
  }
  function getStartMin(code) {
    if (code >= "0" && code <= "9") {
      return "00";
    }
    return "30";
  }
  function getWorkTime(code) {
    let hour = "";
    let min = "";
    if (code.length === 4) {
      // it means code[2]+code[3] === 'X'H
      if (code[2] > "0" && code[2] < "9") {
        hour = code[2];
        min = "00";
      } else {
        hour =
          code[1] > "0" && code[1] < "9"
            ? code.charCodeAt(2) - 64
            : code.charCodeAt(2) - 63;
        min = "30";
      }
    } else if (code.length === 3) {
      if (code[2] === "H") {
        hour = "9";
        min = "30";
      } else {
        hour = code[2];
        min = "00";
      }
    }
    return { hour, min };
  }
  function getEndTime(workTime, startHour, startMin) {
    let endMin = parseInt(workTime.min) + parseInt(startMin);
    let endHour = parseInt(workTime.hour) + parseInt(startHour);
    if (endMin == 60) {
      //   endHour += 1;
      endMin = "00";
    }
    endMin = endMin == 0 ? "00" : "30";
    return { endHour, endMin };
  }
  const result = `On duty = ${startHour}:${startMin}, off duty = ${endTime.endHour}:${endTime.endMin}, rest time = ${restTime} min`;
  document.getElementById("result").innerText = result;
}
