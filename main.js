// Stupid fix because github pages is dumb and won't serve index.html to /penrose
// (only to /penrose/). Eventually I'll move away from github pages but for now
// a stupid hack will suffice
if (document.location.href.match(/penrose$/)) {
  document.location.href = "/penrose/";
}
