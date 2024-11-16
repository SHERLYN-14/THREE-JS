import * as three from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const canvas = document.querySelector('canvas.webber');

const scene = new three.Scene();

const sizes =
{
  width: 700,
  height: 700
};

const obj = new three.BoxGeometry(1,1,1);
const mat = new three.MeshBasicMaterial({color: 0xff3100});
const mesh = new three.Mesh(obj,mat);
scene.add(mesh);

const cam = new three.PerspectiveCamera(75, sizes.width / sizes.height, 2, 100);

cam.position.z = 3;

scene.add(cam);

// Controls
const controls = new OrbitControls(cam,canvas);
controls.target.y = 2;
controls.enableDamping = true;

const renderer = new three.WebGLRenderer
(
  {
    canvas: canvas
  }
);
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,cam);

// Cursor
const cursor = 
{
  x: 0,
  y: 0
}

// Cursor
window.addEventListener('mousemove', (event) =>
{
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = - (event.clientY / sizes.height - 0.5)
  console.log(cursor.x, cursor.y);
})

// animation --------------
// let time = Date.now();
// const clock = new three.Clock();
gsap.to(mesh.position, {duration: 1, delay: 1, x:2 });

const tick = () =>
{
  // console.log('tick');
  // const currTime = Date.now();
  // const deltaTime = currTime - time
  // time = currTime;
  // const elapsedTime = clock.getElapsedTime();

  // mesh.position.x = Math.cos(elapsedTime)
  // mesh.position.y = Math.sin(elapsedTime)
  // mesh.rotation.z = elapsedTime;
  // cam.lookAt(mesh.position);

  // cam.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  // cam.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  // cam.position.y = cursor.y * 2;
  // cam.lookAt(mesh.position);

  controls.update();
  renderer.render(scene,cam);

  window.requestAnimationFrame(tick);
}

tick();