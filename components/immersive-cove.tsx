'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, OrbitControls, RoundedBox, Sparkles, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import type { Group } from 'three'

const chapters = [
  { label: '08:15', title: 'Arrive & settle', copy: 'A gentle hello, a familiar face, and time to find your place.', color: '#ef8c67' },
  { label: '09:30', title: 'Make & wonder', copy: 'Loose parts, big ideas, and the freedom to follow a question.', color: '#f3c969' },
  { label: '11:15', title: 'Garden explorers', copy: 'Bare feet, green fingers, and a little more confidence outdoors.', color: '#77b79b' },
  { label: '15:30', title: 'Stories & goodbyes', copy: 'A calm close to a full day, with stories to take home.', color: '#7e9ac7' },
]

function Playroom() {
  const group = useRef<Group>(null)
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.08
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.05
    }
  })

  return (
    <group ref={group}>
      <RoundedBox args={[4.8, 0.18, 3.4]} radius={0.1} position={[0, -1.45, 0]}><meshStandardMaterial color="#e6b978" /></RoundedBox>
      <RoundedBox args={[3.5, 1.7, 0.18]} radius={0.08} position={[-1.65, -0.55, -1.4]}><meshStandardMaterial color="#f7eee0" /></RoundedBox>
      <RoundedBox args={[0.18, 1.7, 3.2]} radius={0.08} position={[-2.35, -0.55, 0]}><meshStandardMaterial color="#f7eee0" /></RoundedBox>
      <RoundedBox args={[1.1, 0.8, 0.9]} radius={0.18} position={[0.2, -0.65, 0.1]} rotation={[0, -0.25, 0]}><meshStandardMaterial color="#ef8c67" roughness={0.9} /></RoundedBox>
      <RoundedBox args={[1.1, 0.65, 0.8]} radius={0.16} position={[1.2, -0.92, 0.55]} rotation={[0, 0.22, 0]}><meshStandardMaterial color="#f3c969" roughness={0.9} /></RoundedBox>
      <RoundedBox args={[0.75, 0.55, 0.7]} radius={0.12} position={[-0.35, -1.0, 0.85]} rotation={[0, 0.4, 0]}><meshStandardMaterial color="#77b79b" roughness={0.9} /></RoundedBox>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.45}><Text fontSize={0.36} color="#14545c" anchorX="center" anchorY="middle" position={[0.2, 1.0, 0]}>KIDDIE COVE</Text></Float>
      <Sparkles count={35} scale={[5, 2.8, 3]} size={2.5} speed={0.25} color="#f3c969" />
    </group>
  )
}

export function ImmersiveCove() {
  const [active, setActive] = useState(0)
  const chapter = chapters[active]

  return (
    <section id="day-at-cove" className="immersive-cove relative overflow-hidden bg-[#123f43] text-[#fffaf0]">
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8 lg:gap-16">
        <div className="relative z-10 max-w-lg">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#f3c969]">A day at the cove</p>
          <h2 className="font-serif text-4xl font-bold leading-[1.05] md:text-6xl">Come in. Wander around. See them become.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#d8e7de]">Take a little tour through the spaces, rituals, and small moments that make a Kiddie Cove day feel wonderfully theirs.</p>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Chapters in a day at Kiddie Cove">
            {chapters.map((item, index) => (
              <button key={item.label} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${active === index ? 'border-[#f3c969] bg-[#f3c969] text-[#123f43]' : 'border-white/25 text-white/70 hover:border-white/60 hover:text-white'}`}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-8 border-l-2 pl-5" style={{ borderColor: chapter.color }}>
            <p className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: chapter.color }}>{chapter.label}</p>
            <h3 className="mt-2 font-serif text-3xl font-bold">{chapter.title}</h3>
            <p className="mt-2 text-[#d8e7de]">{chapter.copy}</p>
          </div>
        </div>
        <div className="relative h-[450px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#1d5554]/80 shadow-2xl md:h-[600px]">
          <div className="absolute left-6 top-6 z-10 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur">Interactive room 01</div>
          <Canvas camera={{ position: [5.6, 3.2, 6.4], fov: 38 }} dpr={[1, 1.5]}>
            <color attach="background" args={['#1d5554']} />
            <ambientLight intensity={1.6} />
            <directionalLight position={[4, 7, 5]} intensity={3.4} color="#fff4dc" />
            <pointLight position={[-3, 2, 2]} intensity={16} distance={10} color={chapter.color} />
            <Playroom />
            <Environment preset="studio" />
            <OrbitControls enablePan={false} minDistance={5} maxDistance={9} minPolarAngle={Math.PI / 3.1} maxPolarAngle={Math.PI / 2.05} />
          </Canvas>
          <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-white/60"><span>Drag to look around</span><span>Iskandar Puteri, Johor</span></div>
        </div>
      </div>
    </section>
  )
}
