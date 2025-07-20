import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import Stats from 'three/addons/libs/stats.module.js'

import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import { Water } from 'three/addons/objects/Water.js'
import { Sky } from 'three/addons/objects/Sky.js'
import * as TSL from 'three/tsl'

import Transpiler from 'three/addons/transpiler/Transpiler.js'
import ShaderToyDecoder from 'three/addons/transpiler/ShaderToyDecoder.js'
import TSLEncoder from 'three/addons/transpiler/TSLEncoder.js'

// import * as THREE from 'three';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { BloomPass } from 'three/addons/postprocessing/BloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'

import { setupThreeContainer } from './Init'

export function renderThree() {
  const containerElement = document.getElementById('three-container-background')
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

  // ##############################

  const vertexshader = `attribute float scale;

  void main() {

    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

    gl_PointSize = scale * ( 300.0 / - mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

  }`

  const fragmentshader = `uniform vec3 color;

  void main() {

    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;

    gl_FragColor = vec4( color, 1.0 );

  }`

  let particles: any,
    count = 0
  // let posDeltaX = 0
  const posDeltaY = -350
  const SEPARATION = 100,
    AMOUNTX = 50,
    AMOUNTY = 50

  init()

  function init() {
    // container = document.getElementById( 'container4' );
    // document.body.appendChild( container );

    // camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    // camera.position.set(-200,-200,-3000);

    // scene = new THREE.Scene();

    //

    const numParticles = AMOUNTX * AMOUNTY

    const positions = new Float32Array(numParticles * 3)
    const scales = new Float32Array(numParticles)

    let i = 0,
      j = 0

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2 // x
        positions[i + 1] = 0 // y
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2 // z

        scales[j] = 1

        i += 3
        j++
      }
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xfffff0) },
      },
      vertexShader: vertexshader, // document.getElementById( 'vertexshader' ).textContent,
      fragmentShader: fragmentshader, // document.getElementById( 'fragmentshader' ).textContent
    })

    //

    // return new THREE.Points(geometry, material)

    particles = new THREE.Points(geometry, material)
    scene.add(particles)

    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setAnimationLoop(animate)
    renderer.autoClear = false
    container.appendChild(renderer.domElement)

    // //

    // renderer = new THREE.WebGLRenderer( { antialias: true } );
    // renderer.setPixelRatio( window.devicePixelRatio );
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // container.appendChild( renderer.domElement );

    // stats = new Stats();
    // container.appendChild( stats.dom );

    // // document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    // // document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    // // document.addEventListener( 'touchmove', onDocumentTouchMove, false );

    // //

    // window.addEventListener( 'resize', this.onWindowResize, false );
  }

  function onWindowResize() {
    // windowHalfX = window.innerWidth / 2;
    // windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function animate() {
    requestAnimationFrame(animate)

    render()
    // stats.update();
  }

  function render() {
    // camera.position.x += ( mouseX - camera.position.x ) * .05;
    // camera.position.y += ( - mouseY - camera.position.y ) * .05;
    // camera.lookAt( scene.position );

    const positions = particles.geometry.attributes.position.array
    const scales = particles.geometry.attributes.scale.array

    let i = 0,
      j = 0

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i + 1] =
          Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50 + posDeltaY

        scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 8 + (Math.sin((iy + count) * 0.5) + 1) * 8

        i += 3
        j++
      }
    }

    particles.geometry.attributes.position.needsUpdate = true
    particles.geometry.attributes.scale.needsUpdate = true

    // renderer.render( scene, camera );

    count += 0.1
  }
}
