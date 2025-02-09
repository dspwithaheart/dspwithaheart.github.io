/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'

import Stats from 'three/addons/libs/stats.module.js'

import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'
import { Wireframe } from 'three/addons/lines/Wireframe.js'
import { WireframeGeometry2 } from 'three/addons/lines/WireframeGeometry2.js'
import { setupThreeContainer } from './Init'

let wireframe: Wireframe,
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  camera2: THREE.PerspectiveCamera,
  controls
let wireframe1: THREE.Object3D<THREE.Object3DEventMap>
let matLine: LineMaterial,
  matLineBasic: THREE.LineBasicMaterial,
  matLineDashed: THREE.LineDashedMaterial
let stats: Stats
let gui

// viewport
let insetWidth: number
let insetHeight: number


export function init() {
  const containerElement = document.getElementById('three-container-wireframe')
  if (!containerElement) return

  const containerSetup = setupThreeContainer(containerElement)
  scene = containerSetup.scene
  camera = containerSetup.camera
  renderer = containerSetup.renderer
  const container = containerSetup.container
  // renderer = new THREE.WebGLRenderer( { antialias: true } );
  // renderer.setPixelRatio( window.devicePixelRatio );
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // renderer.setClearColor( 0x000000, 0.0 );
  renderer.setAnimationLoop( animate );
  container.appendChild( renderer.domElement );

  // scene = new THREE.Scene();

  // camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( -50, 0, 50 );

  camera2 = new THREE.PerspectiveCamera(40, 1, 1, 1000)
  camera2.position.copy(camera.position)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.minDistance = 10
  controls.maxDistance = 500

  // Wireframe ( WireframeGeometry2, LineMaterial )

  const geo = new THREE.IcosahedronGeometry(20, 1)

  const geometry = new WireframeGeometry2(geo)

  matLine = new LineMaterial({
    color: 0x4080ff,
    linewidth: 5, // in pixels
    dashed: false,
  })

  wireframe = new Wireframe(geometry, matLine) as Wireframe
  ;(wireframe as Wireframe).computeLineDistances()
  wireframe.scale.set(1, 1, 1)
  scene.add(wireframe)

  // Line ( THREE.WireframeGeometry, THREE.LineBasicMaterial ) - rendered with gl.LINE

  const geo_ = new THREE.WireframeGeometry(geo)

  matLineBasic = new THREE.LineBasicMaterial({ color: 0x4080ff })
  matLineDashed = new THREE.LineDashedMaterial({ scale: 2, dashSize: 1, gapSize: 1 })

  wireframe1 = new THREE.LineSegments(geo_, matLineBasic)
  ;(wireframe1 as Wireframe).computeLineDistances()
  // wireframe1.computeLineDistances();
  wireframe1.visible = false
  scene.add(wireframe1)

  //

  window.addEventListener('resize', () => onWindowResize(container))
  onWindowResize(container)

  stats = new Stats()
  container.appendChild(stats.dom)

  // initGui(container)
}

function onWindowResize(container: HTMLElement) {
  const x = container.offsetWidth
  const y = container.offsetWidth
  const aspect = x / y
  camera.aspect = aspect
  camera.updateProjectionMatrix()
  renderer.setSize(x, y)

  insetWidth = x / 4 // square
  insetHeight = y / 4

  camera2.aspect = insetWidth / insetHeight
  camera2.updateProjectionMatrix()
}

function animate() {
  // main scene

  renderer.setClearColor(0x000000, 0)

  renderer.setViewport(0, 0, window.innerWidth, window.innerHeight)

  renderer.render(scene, camera)

  // inset scene

  renderer.setClearColor(0x222222, 1)

  renderer.clearDepth() // important!

  renderer.setScissorTest(true)

  renderer.setScissor(20, 20, insetWidth, insetHeight)

  renderer.setViewport(20, 20, insetWidth, insetHeight)

  camera2.position.copy(camera.position)
  camera2.quaternion.copy(camera.quaternion)

  renderer.render(scene, camera2)

  renderer.setScissorTest(false)

  stats.update()
}

//

function initGui(container: HTMLElement) {
  gui = new GUI(container= container)

  const param = {
    'line type': 0,
    'width (px)': 5,
    dashed: false,
    'dash scale': 1,
    'dash / gap': 1,
  }

  gui.add(param, 'line type', { LineGeometry: 0, 'gl.LINE': 1 }).onChange(function (val: any) {
    switch (val) {
      case 0:
        wireframe.visible = true

        wireframe1.visible = false

        break

      case 1:
        wireframe.visible = false

        wireframe1.visible = true

        break
    }
  })

  gui.add(param, 'width (px)', 1, 10).onChange(function (val: any) {
    matLine.linewidth = val
  })

  gui.add(param, 'dashed').onChange(function (val: any) {
    matLine.dashed = val

    // dashed is implemented as a defines -- not as a uniform. this could be changed.
    // ... or THREE.LineDashedMaterial could be implemented as a separate material
    // temporary hack - renderer should do this eventually
    if (val) matLine.defines.USE_DASH = ''
    else delete matLine.defines.USE_DASH
    matLine.needsUpdate = true
    ;(wireframe1 as Wireframe).material = val ? matLineDashed : matLineBasic
  })

  gui.add(param, 'dash scale', 0.5, 1, 0.1).onChange(function (val: any) {
    matLine.dashScale = val
    matLineDashed.scale = val
  })

  gui.add(param, 'dash / gap', { '2 : 1': 0, '1 : 1': 1, '1 : 2': 2 }).onChange(function (val: any) {
    switch (val) {
      case 0:
        matLine.dashSize = 2
        matLine.gapSize = 1

        matLineDashed.dashSize = 2
        matLineDashed.gapSize = 1

        break

      case 1:
        matLine.dashSize = 1
        matLine.gapSize = 1

        matLineDashed.dashSize = 1
        matLineDashed.gapSize = 1

        break

      case 2:
        matLine.dashSize = 1
        matLine.gapSize = 2

        matLineDashed.dashSize = 1
        matLineDashed.gapSize = 2

        break
    }
  })
}
