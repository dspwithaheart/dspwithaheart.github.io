import * as THREE from 'three'

export function setupThreeContainer(containerElement: HTMLElement) {
  const container: HTMLElement = containerElement as HTMLElement

  const x = container.offsetWidth // width
  const y = container.offsetWidth // height

  const scene: THREE.Scene = new THREE.Scene()
  const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, x / y, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()

  renderer.setSize(x, y)
  return { camera, renderer, scene, container }
}
