import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export function renderThree() {
  const container = document.getElementById('three-container')
  if (!container) return
  const containerElement: HTMLElement = container as HTMLElement
  const x = containerElement.offsetWidth  // width
  const y = containerElement.offsetWidth // height

  const scene: THREE.Scene = new THREE.Scene()
  const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    75,
    x / y,
    0.1,
    1000,
  )
  const renderer = new THREE.WebGLRenderer()

  camera.position.z = 2

  renderer.setSize(x, y)


  const controls = new OrbitControls(camera, renderer.domElement)

  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
  })

  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  if (containerElement) {
    containerElement.appendChild(renderer.domElement)
  } else {
    confirm('No container found')
    document.body.appendChild(renderer.domElement)
  }

  window.addEventListener('resize', onWindowResize, false)
  function onWindowResize() {
    const x = containerElement.offsetWidth
    const y = containerElement.offsetWidth
    const aspect = x / y
    camera.aspect = aspect
    camera.updateProjectionMatrix()
    renderer.setSize(x, y)
    render()
  }

  function render() {
    renderer.render(scene, camera)
  }

  function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    controls.update()

    render()
  }

  animate()
}
