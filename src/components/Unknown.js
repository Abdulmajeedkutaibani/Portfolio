/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Bartosz2005T (https://sketchfab.com/Bartosz2005T)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/unknown-object-in-space-dd2b505ec642481fac1b4c9b17362c1f
title: Unknown Object in Space
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/unknown.gltf');
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
    actions.Animation.play();
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={[1.14, 0.08, 1.14]}>
            <mesh
              geometry={nodes.mesh_2.geometry}
              material={nodes.mesh_2.material}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={[1.24, 0.08, 1.24]}>
            <mesh
              geometry={nodes.mesh_3.geometry}
              material={nodes.mesh_3.material}
            />
          </group>
          <group
            name='Cylinder002_3'
            rotation={[0.1, 0, 0]}
            scale={[1.47, 0.08, 1.47]}
          >
            <mesh
              geometry={nodes.mesh_4.geometry}
              material={nodes.mesh_4.material}
            />
          </group>
          <mesh
            geometry={nodes.mesh_0.geometry}
            material={nodes.mesh_0.material}
          />
          <mesh
            geometry={nodes.mesh_1.geometry}
            material={materials['Material.002']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/unknown.gltf');