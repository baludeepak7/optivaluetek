import React, { useState } from 'react';
import { Radar, Zap, Shield, Radio, Leaf, Heart, ChevronRight, Mail, Calendar, Cpu, Wifi, Eye } from 'lucide-react';

const WingHover = () => {
  const [activeTab, setActiveTab] = useState('uav');

  const uavSystems = [
    {
      title: 'Tethered Surveillance UAV',
      subtitle: 'Persistent Overwatch',
      specs: [
        'Continuous flight: 12+ hours',
        'Operating height: ~150m',
        '360° coverage, live HD video',
        'Ideal for border posts, bases, events'
      ],
      icon: <Radio className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'VTOL Heavy-Lift UAV',
      subtitle: 'Tactical Transport',
      specs: [
        'Payload: up to 200kg',
        'Range: ~500km',
        'Endurance: ~8 hours',
        'For defense logistics, humanitarian & disaster response'
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-green-600 to-teal-500'
    },
    {
      title: 'Kamikaze Interceptor UAV',
      subtitle: 'Precision Strike',
      specs: [
        'Speed: >300 km/h',
        'Strike range: ~50km',
        'AI-based target guidance',
        'High-accuracy tactical interception'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-red-600 to-orange-500'
    },
    {
      title: 'Vimanetra ISR UAV',
      subtitle: 'Long-Endurance Surveillance',
      specs: [
        '20+ hours endurance',
        '8,000m altitude capability',
        'Thermal + multi-spectral sensors',
        'Secure encrypted communication'
      ],
      icon: <Radar className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-500'
    },
    {
      title: 'RUDRA Tactical Delivery UAV',
      subtitle: 'Precision Logistics',
      specs: [
        '5kg payload',
        '100km flying radius',
        'Automated drop systems',
        'Ideal for field resupply & medical delivery'
      ],
      icon: <Heart className="w-8 h-8" />,
      color: 'from-indigo-600 to-blue-500'
    },
    {
      title: 'AKZ Aerostat System',
      subtitle: 'High-Altitude Surveillance',
      specs: [
        '72+ hours continuous endurance',
        'Up to 1,000m altitude',
        '200kg sensor payload support',
        'Wide-area ISR coverage'
      ],
      icon: <Radio className="w-8 h-8" />,
      color: 'from-amber-600 to-orange-500'
    }
  ];

  const defenseDevices = [
    {
      title: 'CUAS Anti-Drone Defense System',
      specs: [
        '360° radar',
        '10km+ detection',
        'Multi-target tracking',
        'RF jamming + kinetic interception'
      ],
      color: 'from-red-600 to-rose-500'
    },
    {
      title: 'KTSK Underwater Detection System',
      specs: [
        'Sonar + radar fusion',
        'Detect divers & UUVs',
        'AI classification',
        'Coastal/port security integration'
      ],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'PRO-ACTIVE-8-VM – Vehicle-Mounted Interceptor',
      specs: [
        '8km intercept range',
        'Vehicle deployable',
        '< 5 mins activation',
        '8 onboard interceptors'
      ],
      color: 'from-slate-600 to-gray-500'
    },
    {
      title: 'PRO-ACTIVE-4-BP – Backpack Interceptor',
      specs: [
        'Man-portable system (~15kg)',
        '4km intercept range',
        '< 2 mins setup',
        '4-hour mission battery'
      ],
      color: 'from-green-600 to-emerald-500'
    },
    {
      title: 'Laser Acoustic Surveillance System',
      specs: [
        'Covert voice capture (up to 500m)',
        'Invisible laser line',
        'Real-time processing',
        'Ideal for intelligence operations'
      ],
      color: 'from-purple-600 to-violet-500'
    },
    {
      title: 'C4i Integrated Command Center',
      specs: [
        'Unified threat visualization',
        '360° situational awareness',
        'Real-time analytics & alerts',
        'Secure mesh network'
      ],
      color: 'from-orange-600 to-amber-500'
    }
  ];

  const strengths = [
    {
      title: 'UAV & Defense Engineering',
      description: 'Tactical drones, ISR systems, anti-drone platforms, field-ready hardware.',
      icon: <Drone className="w-12 h-12" />
    },
    {
      title: 'AI & Intelligence Systems',
      description: 'Surveillance analytics, threat detection, C4i decision systems.',
      icon: <Radar className="w-12 h-12" />
    },
    {
      title: 'Cloud-Native Engineering',
      description: 'Real-time data pipelines, microservices, observability, API-first architecture.',
      icon: <Zap className="w-12 h-12" />
    },
    {
      title: 'End-to-End Delivery',
      description: 'R&D, prototyping, manufacturing, testing, and deployment.',
      icon: <Shield className="w-12 h-12" />
    }
  ];

  const stats = [
    { label: '50+ UAV/Defense Systems', value: '50+' },
    { label: '10+ Years Digital Engineering', value: '10+' },
    { label: 'Multi-Domain Capabilities', value: 'Complete' },
    { label: 'Indigenous, India-First R&D', value: 'Yes' }
  ];

  return (
    <>
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, #0ea5e9 0%, transparent 50%),
                             radial-gradient(circle at 70% 30%, #ef4444 0%, transparent 50%)`
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-red-400">
                UAV & Defense Systems
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              OptiValueTek's multi-domain engineering platform for unmanned systems, defense technologies, and intelligent automation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                WingHover
              </span>
              – OptiValueTek's UAV, Defense & Intelligence Division
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-10 mb-12 backdrop-blur-sm">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              WingHover represents OptiValueTek's specialized engineering capability focused on UAVs, defense technologies, agricultural automation, and mission-critical intelligence systems. Built on a foundation of 10+ years of cloud, microservices, and AI expertise, WingHover combines digital engineering with indigenous hardware R&D to deliver reliable, high-precision, multi-domain solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {strengths.map((strength, idx) => (
              <div key={idx} className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl">
                <div className="mb-4 text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                  {strength.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                  {strength.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-400/30 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                Mission-Ready UAV Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Designed for surveillance, logistics, intelligence, and persistent overwatch, our UAV systems are built for accuracy, endurance, and field reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uavSystems.map((uav, idx) => (
              <div key={idx} className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${uav.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${uav.color} flex items-center justify-center shadow-lg mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {uav.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {uav.title}
                  </h3>
                  <p className="text-sm text-cyan-400 mb-6 font-semibold">
                    {uav.subtitle}
                  </p>

                  <div className="space-y-3">
                    {uav.specs.map((spec, specIdx) => (
                      <div key={specIdx} className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Integrated Defense Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Layered defense systems combining radar, RF sensing, AI analytics, and kinetic response — fully integrated with C4i.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defenseDevices.map((device, idx) => (
              <div key={idx} className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${device.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative p-8">
                  <div className={`w-2 h-12 bg-gradient-to-b ${device.color} rounded-full mb-6`} />

                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {device.title}
                  </h3>

                  <div className="space-y-3">
                    {device.specs.map((spec, specIdx) => (
                      <div key={specIdx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Precision Agriculture & Field Automation
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              <div className="relative p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center shadow-lg mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                  Krishi 3 Pro
                </h3>
                <p className="text-sm text-green-400 mb-6 font-semibold">
                  DGCA-Certified Agriculture UAV
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    '5 acres per flight',
                    '10L spray tank, 4m spray width',
                    '±10cm GPS precision',
                    '~25-minute flight time'
                  ].map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ChevronRight size={16} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500">
                <h4 className="text-xl font-bold text-white mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Agri-Intelligence Features
                </h4>
                <div className="space-y-3">
                  {[
                    'Crop health (NDVI/multispectral)',
                    'Irrigation intelligence via soil mapping',
                    'AI-driven yield forecasting',
                    'Terrain & boundary mapping'
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                      <span className="text-gray-300 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-400/30 rounded-3xl p-8">
                <h4 className="text-xl font-bold text-white mb-3">Complete Agriculture Package</h4>
                <p className="text-gray-300">
                  Drone + AI dashboard + training + support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Protection, Mobility & UAV Power Systems
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Tactical Protection Gear
              </h3>
              <div className="space-y-4">
                {[
                  'BR1–BR5 ballistic vests',
                  'Quick-release modular systems',
                  'MOLLE-compatible tactical gear',
                  'Field medical & evacuation kits'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Shield size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                High-Torque UAV Motors
              </h3>
              <div className="space-y-4">
                {[
                  'WH-17.5K – Light UAV motor',
                  'WH-35K – Medium class',
                  'WH-50K – Heavy UAV propulsion'
                ].map((motor, idx) => (
                  <div key={idx} className="p-4 bg-gray-700/20 rounded-lg border border-gray-600/30">
                    <p className="text-gray-300 font-semibold">{motor}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-6 italic">
                All optimized for torque, cooling, and rugged conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                System Intelligence & Engineering Services
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Sensor Payload Units
              </h3>
              <div className="space-y-3">
                {[
                  'EO/IR gimbals',
                  'Thermal + RGB fusion',
                  'Multispectral units'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                AI Surveillance Systems
              </h3>
              <div className="space-y-3">
                {[
                  'Object detection',
                  'Behavior analysis',
                  'Threat classification',
                  'Automated alerts'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                C4i & Mission Systems
              </h3>
              <div className="space-y-3">
                {[
                  'Multi-domain dashboard',
                  'Resource allocation',
                  'Mission planning',
                  'Secure communications'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                OEM Engineering Services
              </h3>
              <div className="space-y-3">
                {[
                  'Custom platform engineering',
                  'AI model development',
                  'Hardware/system integration',
                  'Defense-grade security implementation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, #3b82f6 0%, transparent 50%),
                             radial-gradient(circle at 70% 30%, #ef4444 0%, transparent 50%)`
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Discuss Your UAV or Defense Requirements
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our teams deliver multi-domain engineering solutions backed by OptiValueTek's digital excellence. Whether for defense, industry, or agriculture — we build systems aligned to your mission needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center justify-center gap-2 shadow-2xl">
                <Calendar size={20} />
                Schedule Consultation
              </button>

              <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center justify-center gap-2 shadow-2xl">
                <Mail size={20} />
                Request Technical Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WingHover;
