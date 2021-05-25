function onClickLight(light){
  light.classList.toggle("off");
  
  let x = Number(light.id[6]);
  let y = Number(light.id[8]);
  
  let mv = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  for (let mv_xy of mv){
    let moved_x = x + mv_xy[0];
    let moved_y = y + mv_xy[1];
    let moved_right = document.getElementById("light-" + String(moved_x) + "-" + String(moved_y));
    if (moved_right){
      moved_right.classList.toggle("off");
    } else {
      moved_right.classList.toggle("off");
    }
  }
  
  if (document.querySelector(".on") === null){
    alert("クリア！");
  }
}
