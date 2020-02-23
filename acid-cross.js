mult=1
voronoi(20,({time}) => 0.01*Math.sin(mult*time),({time}) => 15+5*Math.sin(mult*time))
  .color(({time}) => 1 + Math.sin(mult*time),Math.random(), 1 + Math.cos(mult*time))
  .rotate(0.01, ({time}) => 0.000001*Math.cos(mult*time))
  .scrollX(1, ({time}) => 20000*Math.cos(0.05*mult*time))
  .rotate(0.01, ({time}) => 0.001*Math.cos(0.05*mult*time))
  .kaleid()
  .modulatePixelate(noise(10,0.5),200)
  .out(o0)