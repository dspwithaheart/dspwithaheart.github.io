import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export function renderEarth() {
  const params = new URLSearchParams(new URL(window.location.href).search.slice(1))
  // const relative = !!Number(params.get("relative"));
  const coordinateSystem = params.get('coord')

  const container = document.getElementById('three-container-earth')
  if (!container) {
    alert('F')
    return
  }

  const containerElement: HTMLElement = container as HTMLElement
  const x = containerElement.offsetWidth // width
  const y = containerElement.offsetWidth // height

  const scene: THREE.Scene = new THREE.Scene()
  const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(7, window.innerWidth / window.innerHeight, 1, 100)

  const renderer = new THREE.WebGLRenderer()
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

  function calcPosFromLatLonRad(lat: number, lon: number, radius: number) {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180) * (Math.PI / 180)

    const x = -(radius * Math.sin(phi) * Math.cos(theta))
    const z = radius * Math.sin(phi) * Math.sin(theta)
    const y = radius * Math.cos(phi)

    console.log([x, y, z])
    return [x, y, z]
  }

  function createRandomPoints() {
    const meshes = []
    for (let i = 0; i < 10; i++) {
      const geometry = new THREE.SphereGeometry(0.025, 20, 20)
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color('white'),
      })
      const mesh = new THREE.Mesh(geometry, material)
      meshes.push(mesh)
    }
    return meshes
  }

  function initScene() {
    camera.position.z = 10

    scene.background = new THREE.Color(0x00f0ff)

    // let ambientLight = new THREE.AmbientLight(0x404040, 10);
    // scene.add(ambientLight);
    // camera.position.set( 0, 250, 1000 );
    scene.add(camera)

    scene.add(new THREE.AmbientLight(0xf0f0f0))
    const light = new THREE.SpotLight(0xffffff, 1.5)
    light.position.set(0, 10, 0)
    light.angle = Math.PI * 0.2
    light.castShadow = true
    light.shadow.camera.near = 20
    light.shadow.camera.far = 50
    light.shadow.bias = -0.222
    light.shadow.mapSize.width = 10
    light.shadow.mapSize.height = 10
    scene.add(light)

    let helper = new THREE.GridHelper(2000, 1000)
    helper.position.y = -20
    helper.material.opacity = 0.7
    helper.material.transparent = false
    // helper.material.color = 0x0f00f0
    scene.add(helper)

    helper = new THREE.GridHelper(2000, 500)
    helper.position.y = 20
    helper.material.opacity = 1
    helper.material.transparent = true
    scene.add(helper)

    // renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8)
    renderer.shadowMap.enabled = true

    controls.target.set(0, 0, 0)
    controls.update()

    // container.appendChild(renderer.domElement)

    const geometry = new THREE.SphereGeometry(0.5, 32, 32)
    const textureLoader = new THREE.TextureLoader()
    const material = new THREE.MeshPhongMaterial({
      map: textureLoader.load('./img/map/night.jpg'),
      bumpMap: textureLoader.load('./img/map/bump.jpg'),
      specularMap: textureLoader.load('./img/map/spekular.jpg'),
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const latlons = [
      [40.71427, -74.00597],
      [52.52437, 13.41053],
    ]

    const meshes = createRandomPoints()
    for (let i = 0; i < meshes.length; i++) {
      scene.add(meshes[i])

      const latlon = latlons[Math.floor(Math.random() * latlons.length)]

      const latlonpoint = calcPosFromLatLonRad(latlon[0], latlon[1], 0.5)
      meshes[i].position.set(latlonpoint[0], latlonpoint[1], latlonpoint[2])
    }

    if (containerElement) {
      containerElement.appendChild(renderer.domElement)
    } else {
      confirm('No container found')
      document.body.appendChild(renderer.domElement)
    }
  }

  function render() {
    renderer.render(scene, camera)
  }

  function animate() {
    requestAnimationFrame(animate)

    controls.update()

    render()
  }

  initScene()
  animate()
}
