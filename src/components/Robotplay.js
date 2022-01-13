import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/robotplay.gltf');
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.Animation?.play();
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null} scale={0.035}>
      <group name='OSG_Scene'>
        <group
          name='RootNode_(gltf_orientation_matrix)'
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: 'RootNode (gltf orientation matrix)' }}
        >
          <group
            name='RootNode_(model_correction_matrix)'
            userData={{ name: 'RootNode (model correction matrix)' }}
          >
            <group
              name='000846fff9e546569ee038af7e24655afbx'
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: '000846fff9e546569ee038af7e24655a.fbx' }}
            >
              <group>
                <group name='RootNode' userData={{ name: 'RootNode' }}>
                  <group
                    name='holo'
                    scale={[1.877, 1.877, 1.877]}
                    userData={{ name: 'holo' }}
                  >
                    <group
                      name='group36'
                      position={[0.33, 0, -0.099]}
                      rotation={[-Math.PI, -0.142, -Math.PI]}
                      scale={[0.989, 0.989, 0.989]}
                      userData={{ name: 'group36' }}
                    >
                      <group
                        name='group39'
                        rotation={[0, 0.877, 0]}
                        userData={{ name: 'group39' }}
                      >
                        <group
                          name='group37'
                          position={[-4.63, 14.294, 1.994]}
                          rotation={[0, 0, 0]}
                          userData={{ name: 'group37' }}
                        >
                          <group
                            name='group31'
                            position={[4.63, -4.887, -1.994]}
                            rotation={[0.006, 0, 0.01]}
                            scale={[1.182, 1.182, 1.182]}
                            userData={{ name: 'group31' }}
                          >
                            <group
                              name='pPlatonic3'
                              position={[-0.348, -0.124, -0.324]}
                              rotation={[0, 0, 0]}
                              scale={[0.001, 0.001, 0.001]}
                              userData={{ name: 'pPlatonic3' }}
                            >
                              <mesh
                                name='pPlatonic3_holo1_0'
                                castShadow
                                receiveShadow
                                geometry={nodes.pPlatonic3_holo1_0.geometry}
                                material={nodes.pPlatonic3_holo1_0.material}
                                userData={{ name: 'pPlatonic3_holo1_0' }}
                              />
                            </group>
                            <group
                              name='group35'
                              position={[0.225, 0.107, 0.003]}
                              rotation={[-Math.PI, -1.463, Math.PI]}
                              userData={{ name: 'group35' }}
                            >
                              <group
                                name='group38'
                                position={[0.039, 0.755, 0.248]}
                                rotation={[0, 0, 0]}
                                userData={{ name: 'group38' }}
                              >
                                <group
                                  name='group29'
                                  position={[-0.027, -10.245, -0.036]}
                                  rotation={[0, Math.PI / 4, 0]}
                                  userData={{ name: 'group29' }}
                                >
                                  <group
                                    name='group21'
                                    position={[-12.687, 10.697, 0]}
                                    rotation={[0, 0, 0]}
                                    scale={[0.245, 0.245, 0.245]}
                                    userData={{ name: 'group21' }}
                                  >
                                    <group
                                      name='MASH1_ReproMesh12'
                                      position={[0, 0.239, 0]}
                                      rotation={[-1.132, 0, Math.PI / 2]}
                                      userData={{ name: 'MASH1_ReproMesh12' }}
                                    >
                                      <mesh
                                        name='MASH1_ReproMesh12_holo1_0'
                                        castShadow
                                        receiveShadow
                                        geometry={
                                          nodes.MASH1_ReproMesh12_holo1_0
                                            .geometry
                                        }
                                        material={
                                          nodes.MASH1_ReproMesh12_holo1_0
                                            .material
                                        }
                                        userData={{
                                          name: 'MASH1_ReproMesh12_holo1_0',
                                        }}
                                      />
                                    </group>
                                    <group
                                      name='group14'
                                      rotation={[0, 1.132, 0]}
                                      userData={{ name: 'group14' }}
                                    >
                                      <group
                                        name='group30'
                                        rotation={[0.492, 0, 0]}
                                        scale={[3.169, 3.169, 3.169]}
                                        userData={{ name: 'group30' }}
                                      >
                                        <group
                                          name='pSuperShape2'
                                          rotation={[0, 0, 0]}
                                          scale={[2.076, 2.076, 2.076]}
                                          userData={{ name: 'pSuperShape2' }}
                                        >
                                          <mesh
                                            name='pSuperShape2_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pSuperShape2_holo1_0
                                                .geometry
                                            }
                                            material={
                                              nodes.pSuperShape2_holo1_0
                                                .material
                                            }
                                            userData={{
                                              name: 'pSuperShape2_holo1_0',
                                            }}
                                          />
                                        </group>
                                        <group
                                          name='pSuperShape3'
                                          rotation={[0, 0, 0]}
                                          scale={[2.076, 2.076, 2.076]}
                                          userData={{ name: 'pSuperShape3' }}
                                        >
                                          <mesh
                                            name='pSuperShape3_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pSuperShape3_holo1_0
                                                .geometry
                                            }
                                            material={
                                              nodes.pSuperShape3_holo1_0
                                                .material
                                            }
                                            userData={{
                                              name: 'pSuperShape3_holo1_0',
                                            }}
                                          />
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name='group28'
                                  position={[-0.027, -10.245, -0.036]}
                                  rotation={[0, Math.PI / 2, 0]}
                                  userData={{ name: 'group28' }}
                                >
                                  <group
                                    name='group21_1'
                                    position={[-12.687, 10.697, 0]}
                                    rotation={[0, 0, 0]}
                                    scale={[0.245, 0.245, 0.245]}
                                    userData={{ name: 'group21' }}
                                  >
                                    <group
                                      name='MASH1_ReproMesh12_1'
                                      position={[0, 0.239, 0]}
                                      rotation={[-1.132, 0, Math.PI / 2]}
                                      userData={{ name: 'MASH1_ReproMesh12' }}
                                    >
                                      <group
                                        name='MASH1_ReproMesh19'
                                        rotation={[0, 0, 0]}
                                        userData={{ name: 'MASH1_ReproMesh19' }}
                                      >
                                        <mesh
                                          name='MASH1_ReproMesh19_holo1_0'
                                          castShadow
                                          receiveShadow
                                          geometry={
                                            nodes.MASH1_ReproMesh19_holo1_0
                                              .geometry
                                          }
                                          material={
                                            nodes.MASH1_ReproMesh19_holo1_0
                                              .material
                                          }
                                          userData={{
                                            name: 'MASH1_ReproMesh19_holo1_0',
                                          }}
                                        />
                                      </group>
                                    </group>
                                    <group
                                      name='group14_1'
                                      rotation={[0, 1.132, 0]}
                                      userData={{ name: 'group14' }}
                                    >
                                      <group
                                        name='group7'
                                        rotation={[0.317, -0.659, 1.521]}
                                        scale={[2.048, 2.048, 2.048]}
                                        userData={{ name: 'group7' }}
                                      >
                                        <group
                                          name='pGear1'
                                          rotation={[0, 0, 0]}
                                          userData={{ name: 'pGear1' }}
                                        >
                                          <mesh
                                            name='pGear1_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pGear1_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pGear1_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pGear1_holo1_0',
                                            }}
                                          />
                                        </group>
                                        <group
                                          name='pGear2'
                                          rotation={[0, 0, 0]}
                                          userData={{ name: 'pGear2' }}
                                        >
                                          <mesh
                                            name='pGear2_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pGear2_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pGear2_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pGear2_holo1_0',
                                            }}
                                          />
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name='group27'
                                  position={[-0.027, -10.245, -0.036]}
                                  rotation={[-Math.PI, Math.PI / 4, Math.PI]}
                                  userData={{ name: 'group27' }}
                                >
                                  <group
                                    name='group20'
                                    position={[-12.687, 10.697, 0]}
                                    rotation={[0, 0, 0]}
                                    scale={[0.245, 0.245, 0.245]}
                                    userData={{ name: 'group20' }}
                                  >
                                    <group
                                      name='MASH1_ReproMesh11'
                                      position={[0, 0.239, 0]}
                                      rotation={[-1.132, 0, Math.PI / 2]}
                                      userData={{ name: 'MASH1_ReproMesh11' }}
                                    >
                                      <group
                                        name='MASH1_ReproMesh18'
                                        rotation={[0, 0, 0]}
                                        userData={{ name: 'MASH1_ReproMesh18' }}
                                      >
                                        <mesh
                                          name='MASH1_ReproMesh18_holo1_0'
                                          castShadow
                                          receiveShadow
                                          geometry={
                                            nodes.MASH1_ReproMesh18_holo1_0
                                              .geometry
                                          }
                                          material={
                                            nodes.MASH1_ReproMesh18_holo1_0
                                              .material
                                          }
                                          userData={{
                                            name: 'MASH1_ReproMesh18_holo1_0',
                                          }}
                                        />
                                      </group>
                                    </group>
                                    <group
                                      name='group13'
                                      rotation={[0, 1.132, 0]}
                                      userData={{ name: 'group13' }}
                                    >
                                      <group
                                        name='group6'
                                        position={[0, 0.028, 0]}
                                        rotation={[0.479, 0.1, -0.002]}
                                        scale={[2.37, 2.37, 2.37]}
                                        userData={{ name: 'group6' }}
                                      >
                                        <group
                                          name='pHelix1'
                                          rotation={[0, 0, 0]}
                                          userData={{ name: 'pHelix1' }}
                                        >
                                          <mesh
                                            name='pHelix1_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pHelix1_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pHelix1_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pHelix1_holo1_0',
                                            }}
                                          />
                                        </group>
                                        <group
                                          name='pHelix2'
                                          rotation={[0, 0, 0]}
                                          userData={{ name: 'pHelix2' }}
                                        >
                                          <mesh
                                            name='pHelix2_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pHelix2_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pHelix2_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pHelix2_holo1_0',
                                            }}
                                          />
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name='group26'
                                  position={[-0.027, -10.245, -0.036]}
                                  rotation={[-Math.PI, 0, -Math.PI]}
                                  userData={{ name: 'group26' }}
                                >
                                  <group
                                    name='group19'
                                    position={[-12.687, 10.697, 0]}
                                    rotation={[0, 0, 0]}
                                    scale={[0.245, 0.245, 0.245]}
                                    userData={{ name: 'group19' }}
                                  >
                                    <group
                                      name='MASH1_ReproMesh10'
                                      position={[0, 0.239, 0]}
                                      rotation={[-1.132, 0, Math.PI / 2]}
                                      userData={{ name: 'MASH1_ReproMesh10' }}
                                    >
                                      <group
                                        name='MASH1_ReproMesh17'
                                        rotation={[0, 0, 0]}
                                        userData={{ name: 'MASH1_ReproMesh17' }}
                                      >
                                        <mesh
                                          name='MASH1_ReproMesh17_holo1_0'
                                          castShadow
                                          receiveShadow
                                          geometry={
                                            nodes.MASH1_ReproMesh17_holo1_0
                                              .geometry
                                          }
                                          material={
                                            nodes.MASH1_ReproMesh17_holo1_0
                                              .material
                                          }
                                          userData={{
                                            name: 'MASH1_ReproMesh17_holo1_0',
                                          }}
                                        />
                                      </group>
                                    </group>
                                    <group
                                      name='group12'
                                      rotation={[0, 1.132, 0]}
                                      userData={{ name: 'group12' }}
                                    >
                                      <group
                                        name='group4'
                                        position={[-0.254, 1.103, -0.402]}
                                        rotation={[-0.176, -0.673, 0.273]}
                                        scale={[1.554, 1.554, 1.554]}
                                        userData={{ name: 'group4' }}
                                      >
                                        <group
                                          name='pPyramid1'
                                          rotation={[0, 0, 0]}
                                          scale={[5.263, 7.637, 5.263]}
                                          userData={{ name: 'pPyramid1' }}
                                        >
                                          <mesh
                                            name='pPyramid1_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pPyramid1_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pPyramid1_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pPyramid1_holo1_0',
                                            }}
                                          />
                                        </group>
                                        <group
                                          name='pPyramid2'
                                          rotation={[0, 0, 0]}
                                          scale={[5.572, 8.085, 5.572]}
                                          userData={{ name: 'pPyramid2' }}
                                        >
                                          <mesh
                                            name='pPyramid2_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pPyramid2_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pPyramid2_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pPyramid2_holo1_0',
                                            }}
                                          />
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name='group25'
                                  position={[-0.027, -10.245, -0.036]}
                                  rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
                                  userData={{ name: 'group25' }}
                                >
                                  <group
                                    name='group18'
                                    position={[-12.692, 10.697, 0]}
                                    rotation={[0, 0, 0]}
                                    scale={[0.245, 0.245, 0.245]}
                                    userData={{ name: 'group18' }}
                                  >
                                    <group
                                      name='MASH1_ReproMesh9'
                                      position={[0, 0.239, 0]}
                                      rotation={[-1.132, 0, Math.PI / 2]}
                                      userData={{ name: 'MASH1_ReproMesh9' }}
                                    >
                                      <group
                                        name='MASH1_ReproMesh16'
                                        rotation={[0, 0, 0]}
                                        userData={{ name: 'MASH1_ReproMesh16' }}
                                      >
                                        <mesh
                                          name='MASH1_ReproMesh16_holo1_0'
                                          castShadow
                                          receiveShadow
                                          geometry={
                                            nodes.MASH1_ReproMesh16_holo1_0
                                              .geometry
                                          }
                                          material={
                                            nodes.MASH1_ReproMesh16_holo1_0
                                              .material
                                          }
                                          userData={{
                                            name: 'MASH1_ReproMesh16_holo1_0',
                                          }}
                                        />
                                      </group>
                                    </group>
                                    <group
                                      name='group11'
                                      rotation={[0, 1.132, 0]}
                                      userData={{ name: 'group11' }}
                                    >
                                      <group
                                        name='group5'
                                        rotation={[0.222, 0.16, 0.928]}
                                        scale={[1.89, 1.89, 1.89]}
                                        userData={{ name: 'group5' }}
                                      >
                                        <group
                                          name='pTorus2'
                                          rotation={[0, 0, 0]}
                                          userData={{ name: 'pTorus2' }}
                                        >
                                          <mesh
                                            name='pTorus2_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pTorus2_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pTorus2_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pTorus2_holo1_0',
                                            }}
                                          />
                                        </group>
                                        <group
                                          name='pTorus1'
                                          rotation={[0, 0, 0]}
                                          userData={{ name: 'pTorus1' }}
                                        >
                                          <mesh
                                            name='pTorus1_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pTorus1_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pTorus1_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pTorus1_holo1_0',
                                            }}
                                          />
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name='group23'
                                  position={[-0.027, -10.245, -0.036]}
                                  rotation={[0, -Math.PI / 4, 0]}
                                  userData={{ name: 'group23' }}
                                >
                                  <group
                                    name='group16'
                                    position={[-12.687, 10.697, 0]}
                                    rotation={[0, 0, 0]}
                                    scale={[0.245, 0.245, 0.245]}
                                    userData={{ name: 'group16' }}
                                  >
                                    <group
                                      name='MASH1_ReproMesh7'
                                      position={[0, 0.239, 0]}
                                      rotation={[-1.132, 0, Math.PI / 2]}
                                      userData={{ name: 'MASH1_ReproMesh7' }}
                                    >
                                      <group
                                        name='MASH1_ReproMesh14'
                                        rotation={[0, 0, 0]}
                                        userData={{ name: 'MASH1_ReproMesh14' }}
                                      >
                                        <mesh
                                          name='MASH1_ReproMesh14_holo1_0'
                                          castShadow
                                          receiveShadow
                                          geometry={
                                            nodes.MASH1_ReproMesh14_holo1_0
                                              .geometry
                                          }
                                          material={
                                            nodes.MASH1_ReproMesh14_holo1_0
                                              .material
                                          }
                                          userData={{
                                            name: 'MASH1_ReproMesh14_holo1_0',
                                          }}
                                        />
                                      </group>
                                    </group>
                                    <group
                                      name='group9'
                                      rotation={[0, 1.132, 0]}
                                      scale={[1.303, 1.303, 1.303]}
                                      userData={{ name: 'group9' }}
                                    >
                                      <group
                                        name='group2'
                                        rotation={[-0.623, -0.617, 0.102]}
                                        userData={{ name: 'group2' }}
                                      >
                                        <group
                                          name='pCube1'
                                          rotation={[0, 0, 0]}
                                          scale={[4.808, 4.808, 4.808]}
                                          userData={{ name: 'pCube1' }}
                                        >
                                          <mesh
                                            name='pCube1_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pCube1_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pCube1_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pCube1_holo1_0',
                                            }}
                                          />
                                        </group>
                                        <group
                                          name='pCube2'
                                          rotation={[0, 0, 0]}
                                          scale={[4.918, 4.918, 4.918]}
                                          userData={{ name: 'pCube2' }}
                                        >
                                          <mesh
                                            name='pCube2_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pCube2_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pCube2_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pCube2_holo1_0',
                                            }}
                                          />
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name='group22'
                                  position={[-0.027, -10.245, -0.036]}
                                  rotation={[0, 0, 0]}
                                  userData={{ name: 'group22' }}
                                >
                                  <group
                                    name='group15'
                                    position={[-12.687, 10.697, 0]}
                                    rotation={[0, 0, 0]}
                                    scale={[0.245, 0.245, 0.245]}
                                    userData={{ name: 'group15' }}
                                  >
                                    <group
                                      name='MASH1_ReproMesh6'
                                      position={[0, 0.239, 0]}
                                      rotation={[-1.132, 0, Math.PI / 2]}
                                      userData={{ name: 'MASH1_ReproMesh6' }}
                                    >
                                      <group
                                        name='MASH1_ReproMesh13'
                                        position={[0, 0, 0]}
                                        rotation={[0, 0, 0]}
                                        userData={{ name: 'MASH1_ReproMesh13' }}
                                      >
                                        <mesh
                                          name='MASH1_ReproMesh13_holo1_0'
                                          castShadow
                                          receiveShadow
                                          geometry={
                                            nodes.MASH1_ReproMesh13_holo1_0
                                              .geometry
                                          }
                                          material={
                                            nodes.MASH1_ReproMesh13_holo1_0
                                              .material
                                          }
                                          userData={{
                                            name: 'MASH1_ReproMesh13_holo1_0',
                                          }}
                                        />
                                      </group>
                                    </group>
                                    <group
                                      name='group8'
                                      rotation={[0, 1.132, 0]}
                                      userData={{ name: 'group8' }}
                                    >
                                      <group
                                        name='group1'
                                        rotation={[-0.513, 0, 0]}
                                        scale={[1.223, 0.98, 1.223]}
                                        userData={{ name: 'group1' }}
                                      >
                                        <group
                                          name='pCylinder2'
                                          rotation={[0, 0, 0]}
                                          scale={[3.569, 3.569, 3.569]}
                                          userData={{ name: 'pCylinder2' }}
                                        >
                                          <mesh
                                            name='pCylinder2_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pCylinder2_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pCylinder2_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pCylinder2_holo1_0',
                                            }}
                                          />
                                        </group>
                                        <group
                                          name='pCylinder3'
                                          rotation={[0, 0, 0]}
                                          scale={[3.665, 3.665, 3.665]}
                                          userData={{ name: 'pCylinder3' }}
                                        >
                                          <mesh
                                            name='pCylinder3_holo1_0'
                                            castShadow
                                            receiveShadow
                                            geometry={
                                              nodes.pCylinder3_holo1_0.geometry
                                            }
                                            material={
                                              nodes.pCylinder3_holo1_0.material
                                            }
                                            userData={{
                                              name: 'pCylinder3_holo1_0',
                                            }}
                                          />
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name='pCylinder4'
                                  position={[-0.027, 0.458, -0.036]}
                                  rotation={[0, 0, 0]}
                                  scale={[0.818, 0.439, 0.818]}
                                  userData={{ name: 'pCylinder4' }}
                                >
                                  <mesh
                                    name='pCylinder4_holo1_0'
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.pCylinder4_holo1_0.geometry}
                                    material={nodes.pCylinder4_holo1_0.material}
                                    userData={{ name: 'pCylinder4_holo1_0' }}
                                  />
                                </group>
                              </group>
                              <group
                                name='group24'
                                position={[0.021, -10.723, 0.224]}
                                rotation={[0, -Math.PI / 2, 0]}
                                userData={{ name: 'group24' }}
                              >
                                <group
                                  name='group17'
                                  position={[-12.356, 11.797, 0.231]}
                                  rotation={[0, 0, 0]}
                                  scale={[0.295, 0.295, 0.295]}
                                  userData={{ name: 'group17' }}
                                >
                                  <group
                                    name='group10'
                                    rotation={[Math.PI, -1.163, Math.PI]}
                                    userData={{ name: 'group10' }}
                                  >
                                    <group
                                      name='group3'
                                      rotation={[0, 0, 0]}
                                      scale={[1.445, 1.445, 1.445]}
                                      userData={{ name: 'group3' }}
                                    >
                                      <group
                                        name='pPlatonic1'
                                        rotation={[0, 0, 0]}
                                        scale={[3.239, 3.239, 3.239]}
                                        userData={{ name: 'pPlatonic1' }}
                                      >
                                        <mesh
                                          name='pPlatonic1_holo1_0'
                                          castShadow
                                          receiveShadow
                                          geometry={
                                            nodes.pPlatonic1_holo1_0.geometry
                                          }
                                          material={
                                            nodes.pPlatonic1_holo1_0.material
                                          }
                                          userData={{
                                            name: 'pPlatonic1_holo1_0',
                                          }}
                                        />
                                      </group>
                                      <group
                                        name='pPlatonic2'
                                        rotation={[0, 0, 0]}
                                        scale={[3.414, 3.414, 3.414]}
                                        userData={{ name: 'pPlatonic2' }}
                                      >
                                        <mesh
                                          name='pPlatonic2_holo1_0'
                                          castShadow
                                          receiveShadow
                                          geometry={
                                            nodes.pPlatonic2_holo1_0.geometry
                                          }
                                          material={
                                            nodes.pPlatonic2_holo1_0.material
                                          }
                                          userData={{
                                            name: 'pPlatonic2_holo1_0',
                                          }}
                                        />
                                      </group>
                                    </group>
                                  </group>
                                  <group
                                    name='MASH1_ReproMesh8'
                                    position={[0.227, 0.006, -0.549]}
                                    rotation={[-1.132, 0, Math.PI / 2]}
                                    scale={[0.818, 0.792, 0.818]}
                                    userData={{ name: 'MASH1_ReproMesh8' }}
                                  >
                                    <group
                                      name='MASH1_ReproMesh15'
                                      rotation={[0, 0, 0]}
                                      userData={{ name: 'MASH1_ReproMesh15' }}
                                    >
                                      <mesh
                                        name='MASH1_ReproMesh15_holo1_0'
                                        castShadow
                                        receiveShadow
                                        geometry={
                                          nodes.MASH1_ReproMesh15_holo1_0
                                            .geometry
                                        }
                                        material={
                                          nodes.MASH1_ReproMesh15_holo1_0
                                            .material
                                        }
                                        userData={{
                                          name: 'MASH1_ReproMesh15_holo1_0',
                                        }}
                                      />
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                    <group
                      name='ground'
                      position={[0, 0.39, 0]}
                      userData={{ name: 'ground' }}
                    >
                      <group
                        name='pPipe4'
                        position={[0, -0.429, 0]}
                        rotation={[0, -0.311, 0]}
                        userData={{ name: 'pPipe4' }}
                      >
                        <group
                          name='MASH1_ReproMesh2'
                          position={[0, 0.429, 0]}
                          rotation={[0, 0, 0]}
                          userData={{ name: 'MASH1_ReproMesh2' }}
                        >
                          <mesh
                            name='MASH1_ReproMesh2_holo1_0'
                            castShadow
                            receiveShadow
                            geometry={nodes.MASH1_ReproMesh2_holo1_0.geometry}
                            material={nodes.MASH1_ReproMesh2_holo1_0.material}
                            userData={{ name: 'MASH1_ReproMesh2_holo1_0' }}
                          />
                        </group>
                        <mesh
                          name='pPipe4_holo1_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.pPipe4_holo1_0.geometry}
                          material={nodes.pPipe4_holo1_0.material}
                          userData={{ name: 'pPipe4_holo1_0' }}
                        />
                      </group>
                      <group
                        name='pPipe2'
                        position={[0, -0.576, 0]}
                        rotation={[0, 0.311, 0]}
                        userData={{ name: 'pPipe2' }}
                      >
                        <group
                          name='MASH1_ReproMesh3'
                          position={[0, 0.576, 0]}
                          rotation={[0, 0, 0]}
                          scale={[0.819, 0.804, 0.819]}
                          userData={{ name: 'MASH1_ReproMesh3' }}
                        >
                          <mesh
                            name='MASH1_ReproMesh3_holo1_0'
                            castShadow
                            receiveShadow
                            geometry={nodes.MASH1_ReproMesh3_holo1_0.geometry}
                            material={nodes.MASH1_ReproMesh3_holo1_0.material}
                            userData={{ name: 'MASH1_ReproMesh3_holo1_0' }}
                          />
                        </group>
                        <group
                          name='pPipe3'
                          rotation={[0, 0.684, 0]}
                          scale={[0.856, 0.856, 0.856]}
                          userData={{ name: 'pPipe3' }}
                        >
                          <mesh
                            name='pPipe3_holo1_0'
                            castShadow
                            receiveShadow
                            geometry={nodes.pPipe3_holo1_0.geometry}
                            material={nodes.pPipe3_holo1_0.material}
                            userData={{ name: 'pPipe3_holo1_0' }}
                          />
                        </group>
                        <mesh
                          name='pPipe2_holo1_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.pPipe2_holo1_0.geometry}
                          material={nodes.pPipe2_holo1_0.material}
                          userData={{ name: 'pPipe2_holo1_0' }}
                        />
                      </group>
                      <group
                        name='pPipe1'
                        rotation={[0, -0.311, 0]}
                        userData={{ name: 'pPipe1' }}
                      >
                        <group
                          name='MASH1_ReproMesh1'
                          rotation={[0, 0, 0]}
                          userData={{ name: 'MASH1_ReproMesh1' }}
                        >
                          <mesh
                            name='MASH1_ReproMesh1_holo1_0'
                            castShadow
                            receiveShadow
                            geometry={nodes.MASH1_ReproMesh1_holo1_0.geometry}
                            material={nodes.MASH1_ReproMesh1_holo1_0.material}
                            userData={{ name: 'MASH1_ReproMesh1_holo1_0' }}
                          />
                        </group>
                        <mesh
                          name='pPipe1_holo1_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.pPipe1_holo1_0.geometry}
                          material={nodes.pPipe1_holo1_0.material}
                          userData={{ name: 'pPipe1_holo1_0' }}
                        />
                      </group>
                      <group
                        name='pDisc1'
                        position={[0, -0.388, 0]}
                        scale={[11.114, 11.114, 11.114]}
                        userData={{ name: 'pDisc1' }}
                      >
                        <mesh
                          name='pDisc1_holo1_0'
                          castShadow
                          receiveShadow
                          geometry={nodes.pDisc1_holo1_0.geometry}
                          material={nodes.pDisc1_holo1_0.material}
                          userData={{ name: 'pDisc1_holo1_0' }}
                        />
                      </group>
                    </group>
                  </group>
                  <group name='Group' userData={{ name: 'Group' }}>
                    <group name='Main' userData={{ name: 'Main' }}>
                      <group
                        name='DeformationSystem'
                        userData={{ name: 'DeformationSystem' }}
                      >
                        <group>
                          <primitive object={nodes._rootJoint} />
                          <skinnedMesh
                            name='knee_bot_0'
                            geometry={nodes.knee_bot_0.geometry}
                            material={nodes.knee_bot_0.material}
                            skeleton={nodes.knee_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='foot_bot_0'
                            geometry={nodes.foot_bot_0.geometry}
                            material={nodes.foot_bot_0.material}
                            skeleton={nodes.foot_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='hand_bot_0'
                            geometry={nodes.hand_bot_0.geometry}
                            material={nodes.hand_bot_0.material}
                            skeleton={nodes.hand_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='upperLeg_bot_0'
                            geometry={nodes.upperLeg_bot_0.geometry}
                            material={nodes.upperLeg_bot_0.material}
                            skeleton={nodes.upperLeg_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='body_bot_0'
                            geometry={nodes.body_bot_0.geometry}
                            material={nodes.body_bot_0.material}
                            skeleton={nodes.body_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='index_bot_0'
                            geometry={nodes.index_bot_0.geometry}
                            material={nodes.index_bot_0.material}
                            skeleton={nodes.index_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='pinky_bot_0'
                            geometry={nodes.pinky_bot_0.geometry}
                            material={nodes.pinky_bot_0.material}
                            skeleton={nodes.pinky_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='thumb_bot_0'
                            geometry={nodes.thumb_bot_0.geometry}
                            material={nodes.thumb_bot_0.material}
                            skeleton={nodes.thumb_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='earBall_bot_0'
                            geometry={nodes.earBall_bot_0.geometry}
                            material={nodes.earBall_bot_0.material}
                            skeleton={nodes.earBall_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='topHeadBall_bot_0'
                            geometry={nodes.topHeadBall_bot_0.geometry}
                            material={nodes.topHeadBall_bot_0.material}
                            skeleton={nodes.topHeadBall_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='topHeadTube_bot_0'
                            geometry={nodes.topHeadTube_bot_0.geometry}
                            material={nodes.topHeadTube_bot_0.material}
                            skeleton={nodes.topHeadTube_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='shoulder_bot_0'
                            geometry={nodes.shoulder_bot_0.geometry}
                            material={nodes.shoulder_bot_0.material}
                            skeleton={nodes.shoulder_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='midfinger_bot_0'
                            geometry={nodes.midfinger_bot_0.geometry}
                            material={nodes.midfinger_bot_0.material}
                            skeleton={nodes.midfinger_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='neckTop_bot_0'
                            geometry={nodes.neckTop_bot_0.geometry}
                            material={nodes.neckTop_bot_0.material}
                            skeleton={nodes.neckTop_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='neck_bot_0'
                            geometry={nodes.neck_bot_0.geometry}
                            material={nodes.neck_bot_0.material}
                            skeleton={nodes.neck_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='head_bot_0'
                            geometry={nodes.head_bot_0.geometry}
                            material={nodes.head_bot_0.material}
                            skeleton={nodes.head_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='topHead_bot_0'
                            geometry={nodes.topHead_bot_0.geometry}
                            material={nodes.topHead_bot_0.material}
                            skeleton={nodes.topHead_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='hip_bot_0'
                            geometry={nodes.hip_bot_0.geometry}
                            material={nodes.hip_bot_0.material}
                            skeleton={nodes.hip_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='earTube_bot_0'
                            geometry={nodes.earTube_bot_0.geometry}
                            material={nodes.earTube_bot_0.material}
                            skeleton={nodes.earTube_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='ear_bot_0'
                            geometry={nodes.ear_bot_0.geometry}
                            material={nodes.ear_bot_0.material}
                            skeleton={nodes.ear_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='neckBase_bot_0'
                            geometry={nodes.neckBase_bot_0.geometry}
                            material={nodes.neckBase_bot_0.material}
                            skeleton={nodes.neckBase_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='eyeCloseKawaii_bot_0'
                            geometry={nodes.eyeCloseKawaii_bot_0.geometry}
                            material={nodes.eyeCloseKawaii_bot_0.material}
                            skeleton={nodes.eyeCloseKawaii_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='eye_bot_0'
                            geometry={nodes.eye_bot_0.geometry}
                            material={nodes.eye_bot_0.material}
                            skeleton={nodes.eye_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='eyeSmile_bot_0'
                            geometry={nodes.eyeSmile_bot_0.geometry}
                            material={nodes.eyeSmile_bot_0.material}
                            skeleton={nodes.eyeSmile_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='eyeClose_bot_0'
                            geometry={nodes.eyeClose_bot_0.geometry}
                            material={nodes.eyeClose_bot_0.material}
                            skeleton={nodes.eyeClose_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='happy_bot_0'
                            geometry={nodes.happy_bot_0.geometry}
                            material={nodes.happy_bot_0.material}
                            skeleton={nodes.happy_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='smile_bot_0'
                            geometry={nodes.smile_bot_0.geometry}
                            material={nodes.smile_bot_0.material}
                            skeleton={nodes.smile_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='o_bot_0'
                            geometry={nodes.o_bot_0.geometry}
                            material={nodes.o_bot_0.material}
                            skeleton={nodes.o_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='close_bot_0'
                            geometry={nodes.close_bot_0.geometry}
                            material={nodes.close_bot_0.material}
                            skeleton={nodes.close_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='eyeCloseKawaii1_bot_0'
                            geometry={nodes.eyeCloseKawaii1_bot_0.geometry}
                            material={nodes.eyeCloseKawaii1_bot_0.material}
                            skeleton={nodes.eyeCloseKawaii1_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='eye1_bot_0'
                            geometry={nodes.eye1_bot_0.geometry}
                            material={nodes.eye1_bot_0.material}
                            skeleton={nodes.eye1_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='eyeSmile1_bot_0'
                            geometry={nodes.eyeSmile1_bot_0.geometry}
                            material={nodes.eyeSmile1_bot_0.material}
                            skeleton={nodes.eyeSmile1_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='eyeClose1_bot_0'
                            geometry={nodes.eyeClose1_bot_0.geometry}
                            material={nodes.eyeClose1_bot_0.material}
                            skeleton={nodes.eyeClose1_bot_0.skeleton}
                          />
                          <skinnedMesh
                            name='arm2_bot_0'
                            geometry={nodes.arm2_bot_0.geometry}
                            material={nodes.arm2_bot_0.material}
                            skeleton={nodes.arm2_bot_0.skeleton}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/robotplay.gltf');
