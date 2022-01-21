(() => {
  const tirePressure = document.getElementsByClassName('tirePressure');

  const gears = document.getElementsByClassName('gearing');
  const camber = document.getElementsByClassName('camber');
  const toe = document.getElementsByClassName('toe');
  const caster = document.getElementsByClassName('caster');
  const antirollBars = document.getElementsByClassName('antiroll-bars');
  const springTension = document.getElementsByClassName('spring-tension');
  const rideHeight = document.getElementsByClassName('ride-height');
  const reboundStiffness = document.getElementsByClassName('rebound-stiffness');
  const aero = document.getElementsByClassName('aero');
  const brake = document.getElementsByClassName('brake');
  const differential = document.getElementsByClassName('differential');

  const result = document.getElementById('result');

  function generateText() {
    const lines = [];
    lines.push('TIRES | PRESSURE');
    lines.push(': --| --:');
    lines.push(`FRONT | ${tirePressure[0].value}`);
    lines.push(`REAR | ${tirePressure[1].value}`);
    lines.push('\n');
    lines.push('GEARS | RATIO');
    lines.push(': --| --:');
    lines.push(`FINAL DRIVE | ${gears[0].value}`);
    for (let index = 1; index < gears.length; index++) {
      lines.push(`Gear ${index} | ${gears[index].value}`);
    }

    const text = lines.join('\n');
    document.getElementById('result').innerHTML = text;
  }

  const button = document.getElementById('generate-button');
  button.addEventListener('click', generateText);
})();
