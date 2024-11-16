import * as three from 'three'

const canvas = document.querySelector('canvas.webgl');

const scene = new three.Scene();

const group = new three.Group();
group.scale.y = 2;
group.rotation.y = 0.4;
scene.add(group);

const c1 = new three.Mesh(
  new three.BoxGeometry(1,1,1),
  new three.MeshBasicMaterial({color: 0xff4400})
)
c1.position.x = -1.5;
group.add(c1);

const c2 = new three.Mesh(
  new three.BoxGeometry(1,1,1),
  new three.MeshBasicMaterial({color: 0xff4400})
)
c2.position.x = 0;
group.add(c2);

const c3 = new three.Mesh(
  new three.BoxGeometry(1,1,1),
  new three.MeshBasicMaterial({color: 0xff4400})
)
c3.position.x = 1.5;
group.add(c3);

const sizes =
{
  width: 700,
  height: 700
};


const cam = new three.PerspectiveCamera(75, sizes.width / sizes.height);
cam.position.z = 6;
scene.add(cam);

const axHelper = new three.AxesHelper(2);
scene.add(axHelper);

const renderer = new three.WebGLRenderer
(
  {
    canvas: canvas
  }
);

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, cam);
