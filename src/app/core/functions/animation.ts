export function animate(
  options: {
    duration: number,
    timing: (timeFraction: number) => number,
    draw: (progress: number) => void
  }
) {

  const start = performance.now();

  const requestId = requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = options.timing(timeFraction)

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestId)
    }

  });
}

export function linearAnimation(timeFraction: number) {
  return timeFraction;
}
