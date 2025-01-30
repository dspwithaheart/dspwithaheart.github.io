import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { setupThreeContainer } from './Init'

export function renderThree() {
  const containerElement = document.getElementById('three-container')
  if (!containerElement) return
  const {
    camera,
    renderer,
    scene,
    container,
  }: {
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    scene: THREE.Scene
    container: HTMLElement
  } = setupThreeContainer(containerElement)

  camera.position.z = 2

  const controls = new OrbitControls(camera, renderer.domElement)

  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
  })

  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  if (container) {
    container.appendChild(renderer.domElement)
  } else {
    confirm('No container found')
    document.body.appendChild(renderer.domElement)
  }

  window.addEventListener('resize', onWindowResize, false)
  function onWindowResize() {
    const x = container.offsetWidth
    const y = container.offsetWidth
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
