let elements = [];
let skySunset, skyDay, skyNight;
let waterSunset, waterDay, waterNight;

function setup() {
  createCanvas(600, 400);
  
  // colorMode()를 명시적으로 사용하여 RGB 컬러 모드 설정
  colorMode(RGB, 255); 
  
  skySunset = color(255, 130, 90);    
  skyDay = color(175, 220, 255);       
  skyNight = color(15, 20, 40);        
  
  waterSunset = color(160, 90, 120);   
  waterDay = color(80, 165, 240);      
  waterNight = color(10, 15, 30);      

  let pts = [[300,205],[290,203],[310,207],[280,206],[320,204],[270,208],[330,202],[260,205],[300,215],[285,213],[315,217],[270,216],[330,214],[255,218],[345,212],[240,215], [300,195],[290,197],[310,193],[280,194],[320,196],[270,192],[330,198],[260,195],[300,185],[285,187],[315,183],[270,184],[330,186],[255,182],[345,188],[240,185]];
  let els = [[300,225,4,1],[280,223,3,1],[320,227,3,1],[260,226,4,1],[340,224,2,1],[240,228,3,1],[300,240,5,1.5],[270,238,4,1],[330,242,4,1],[240,241,5,1],[360,239,3,1],[210,243,4,1], [300,175,4,1],[280,177,3,1],[320,173,3,1],[260,174,4,1],[340,176,2,1],[240,172,3,1],[300,160,5,1.5],[270,162,4,1],[330,158,4,1],[240,159,5,1],[360,161,3,1],[210,157,4,1]];
  let rts = [[295,260,10,0.5],[275,258,8,0.5],[315,262,8,0.5],[255,261,9,0.5],[335,259,7,0.5],[235,263,8,0.5],[280,290,40,0.5],[240,288,30,0.5],[330,292,30,0.5],[200,310,60,1],[340,308,60,1],[100,360,150,1], [295,140,10,0.5],[275,142,8,0.5],[315,138,8,0.5],[255,139,9,0.5],[335,141,7,0.5],[235,137,8,0.5],[280,110,40,0.5],[240,112,30,0.5],[330,108,30,0.5],[200,90,60,1],[340,92,60,1],[100,40,150,1]];

  // random()을 사용하여 각 도형에 각기 다른 초기 오프셋 부여
  for (let p of pts) elements.push({type: 'point', x: p[0], y: p[1], offset: random(TWO_PI)});
  for (let e of els) elements.push({type: 'ellipse', x: e[0], y: e[1], w: e[2], h: e[3], offset: random(TWO_PI)});
  for (let r of rts) elements.push({type: 'rect', x: r[0], y: r[1], w: r[2], h: r[3], offset: random(TWO_PI)});
}

function draw() {
  // frameCount를 사용하여 애니메이션 진행을 위한 기준 시간 생성
  let angle = (frameCount * 0.01) % TWO_PI;
  
  let currentSky, currentWater, sunColor;
  let isDay = angle < PI; 

  // lerpColor()를 사용하여 시간에 따른 부드러운 색상 변화 구현
  if (angle < PI / 2) {
    let amt = map(angle, 0, PI / 2, 0, 1);
    currentSky = lerpColor(skySunset, skyDay, amt);
    currentWater = lerpColor(waterSunset, waterDay, amt);
    sunColor = lerpColor(color(255, 90, 40), color(255, 255, 220), amt);
  } else if (angle < PI) {
    let amt = map(angle, PI / 2, PI, 0, 1);
    currentSky = lerpColor(skyDay, skySunset, amt);
    currentWater = lerpColor(waterDay, waterSunset, amt);
    sunColor = lerpColor(color(255, 255, 220), color(255, 90, 40), amt);
  } else if (angle < PI * 1.5) {
    let amt = map(angle, PI, PI * 1.5, 0, 1);
    currentSky = lerpColor(skySunset, skyNight, amt);
    currentWater = lerpColor(waterSunset, waterNight, amt);
  } else {
    let amt = map(angle, PI * 1.5, TWO_PI, 0, 1);
    currentSky = lerpColor(skyNight, skySunset, amt);
    currentWater = lerpColor(waterNight, waterSunset, amt);
  }

  background(currentSky);

  // sin()을 활용하여 태양의 높낮이 애니메이션 및 궤적 구현
  if (isDay) {
    let sunX = map(angle, 0, PI, 600, 0);       
    let sunY = 200 - sin(angle) * 140;          
    
    noStroke();
    for (let i = 40; i > 0; i -= 10) {
      fill(red(sunColor), green(sunColor), blue(sunColor), 15);
      ellipse(sunX, sunY, i * 2, i * 2);
    }
    fill(sunColor);
    ellipse(sunX, sunY, 25, 25);
  }

  noStroke();
  fill(currentWater);
  rect(0, 200, 600, 200);

  stroke(255, 255, 255, isDay ? 100 : 30); 
  strokeWeight(1);
  line(0, 200, 600, 200);

  for (let el of elements) {
    let isWater = el.y > 200;
    
    // sin(), cos()을 활용하여 도형이 일렁이는 기본 애니메이션 구현
    let moveX = sin(frameCount * 0.02 + el.offset) * 2;
    let moveY = cos(frameCount * 0.015 + el.offset) * 1;
    let finalX = el.x + moveX;
    let finalY = el.y + moveY;

    // millis()와 sin()을 조합하여 도형의 크기가 시간에 따라 변화하도록 구현
    let sizePulse = sin(millis() * 0.003 + el.offset) * 1.5;

    let alphaVal = isDay ? 180 : 120;
    let baseColor = isWater ? (isDay ? color(255, 255, 180, alphaVal) : color(200, 230, 255, alphaVal)) 
                            : (isDay ? color(255, 255, 255, alphaVal) : color(230, 240, 255, alphaVal + 40));

    if (el.type === 'point') {
      stroke(baseColor);
      strokeWeight(isDay ? 1.5 : 1.2);
      point(finalX, finalY);
    } else if (el.type === 'ellipse') {
      noStroke();
      fill(baseColor);
      // 크기(가로 너비) 변수에 시간에 따라 변하는 sizePulse 값을 적용
      ellipse(finalX, finalY, max(1, el.w + sizePulse), el.h);
    } else if (el.type === 'rect') {
      noStroke();
      fill(baseColor);
      // 크기(가로 너비) 변수에 시간에 따라 변하는 sizePulse 값을 적용
      rect(finalX, finalY, max(1, el.w + sizePulse * 2), el.h);
    }
  }
}

function keyPressed() {
 
  if (key === 's') {
    saveGif('task4.gif', 11); 
  }
}