const agents = {
  'JETT': {
  role: 'Duelist',
  description: 'Representing her home country of South Korea, Jett’s agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.',
  abilities: [
      {
          name: 'Updraft',
          img: '../AgentsContent/Duelist/Jett/1.avif',
          video: '../AgentsContent/Duelist/Jett/1.mp4',
          description: 'NSTANTLY propel Jett high into the air.'
      },
      {
          name: 'Tailwind',
          img: '../AgentsContent/Duelist/Jett/2.avif',
          video: '../AgentsContent/Duelist/Jett/2.mp4',
          description: 'ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.'
      },
      {
          name: 'Cloudburst',
          img: '../AgentsContent/Duelist/Jett/3.avif',
          video: '../AgentsContent/Duelist/Jett/3.mp4',
          description: 'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.'
      },
      {
          name: 'Blade Storm',
          img: '../AgentsContent/Duelist/Jett/ult.avif',
          video: '../AgentsContent/Duelist/Jett/ult.mp4',
          description: 'EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.'
      }
  ]
  },
  'SOVA': {
      role: 'Initiator',
      description: 'Born from the eternal winter of Russia\'s tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.',
      abilities: [
          {
              name: 'Owl Drone',
              img: '../AgentsContent/Iniciator/Sova/1.avif',
              video: '../AgentsContent/Iniciator/Sova/1.mp4',
              description: 'EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.'
          },
          {
              name: 'Shock Bolt',
              img: '../AgentsContent/Iniciator/Sova/2.avif',
              video: '../AgentsContent/Iniciator/Sova/2.mp4',
              description: 'EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.'
          },
          {
              name: 'Recon Bolt',
              img: '../AgentsContent/Iniciator/Sova/3.avif',
              video: '../AgentsContent/Iniciator/Sova/3.mp4',
              description: 'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone.'
          },
          {
              name: 'Hunter\'s Fury',
              img: '../AgentsContent/Iniciator/Sova/ult.avif',
              video: '../AgentsContent/Iniciator/Sova/ult.mp4',
              description: 'EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.'
          }
      ]
  },
  'SAGE': {
  role: 'Sentinel',
  description: 'The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.',
  abilities: [
      {
          name: 'Slow Orb',
          img: '../AgentsContent/Sentinel/Sage/1.avif',
          video: '../AgentsContent/Sentinel/Sage/1.mp4',
          description: 'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.'
      },
      {
          name: 'Barrier Orb',
          img: '../AgentsContent/Sentinel/Sage/2.avif',
          video: '../AgentsContent/Sentinel/Sage/2.mp4',
          description: 'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.'
      },
      {
          name: 'Healing Orb',
          img: '../AgentsContent/Sentinel/Sage/3.avif',
          video: '../AgentsContent/Sentinel/Sage/3.mp4',
          description: 'EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.'
      },
      {
          name: 'Resurrection',
          img: '../AgentsContent/Sentinel/Sage/ult.avif',
          video: '../AgentsContent/Sentinel/Sage/ult.mp4',
          description: 'EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.'
      }
  ]
},
  'BRIMSTONE': {
  role: 'Controller',
  description: 'Joining from the U.S.A., Brimstone’s orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.',
  abilities: [
      {
          name: 'Incendiary',
          img: '../AgentsContent/Controller/Brimstone/1.avif',
          video: '../AgentsContent/Controller/Brimstone/1.mp4',
          description: 'EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.'
      },
      {
          name: 'Sky Smoke',
          img: '../AgentsContent/Controller/Brimstone/2.avif',
          video: '../AgentsContent/Controller/Brimstone/2.mp4',
          description: 'EQUIP a tactical map. FIRE to set locations where Brimstone’s smoke clouds will land. ALT FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.'
      },
      {
          name: 'Stim Beacon',
          img: '../AgentsContent/Controller/Brimstone/3.avif',
          video: '../AgentsContent/Controller/Brimstone/3.mp4',
          description: 'EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.'
      },
      {
          name: 'Orbital Strike',
          img: '../AgentsContent/Controller/Brimstone/ult.avif',
          video: '../AgentsContent/Controller/Brimstone/ult.mp4',
          description: 'EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.'
      }
  ]
},
'RAZE': {
  role: 'Duelist',
  description: 'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of "boom."',
  abilities: [
      {
          name: 'Blast Pack',
          img: '../AgentsContent/Duelist/Raze/1.avif',
          video: '../AgentsContent/Duelist/Raze/1.mp4',
          description: 'INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn’t damaged by this ability, but will still take fall damage if launched up far enough.'
      },
      {
          name: 'Paint Shells',
          img: '../AgentsContent/Duelist/Raze/2.avif',
          video: '../AgentsContent/Duelist/Raze/2.mp4',
          description: 'EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob. Paint Shells charge resets every two kills.'
      },
      {
          name: 'Boom Bot',
          img: '../AgentsContent/Duelist/Raze/3.avif',
          video: '../AgentsContent/Duelist/Raze/3.mp4',
          description: 'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.'
      },
      {
          name: 'Showstopper',
          img: '../AgentsContent/Duelist/Raze/ult.avif',
          video: '../AgentsContent/Duelist/Raze/ult.mp4',
          description: 'EQUIP a rocket launcher. FIRE to shoot a rocket that does massive area damage on contact with anything.'
      }
  ]
},
'TEJO': {
  role: 'Initiator',
  description: 'A veteran intelligence consultant from Colombia, Tejo’s ballistic guidance system pressures the enemy to relinquish their ground - or their lives. His targeted strikes keep opponents off balance and under his heel.',
  abilities: [
      {
          name: 'Stealth Drone',
          img: '../AgentsContent/Iniciator/Tejo/1.avif',
          video: '../AgentsContent/Iniciator/Tejo/1.mp4',
          description: 'EQUIP a stealth drone. FIRE to throw the drone forward, assuming direct control of its movement. FIRE again to trigger a pulse that Suppresses and Reveals enemies hit.'
      },
      {
          name: 'Special Delivery',
          img: '../AgentsContent/Iniciator/Tejo/2.avif',
          video: '../AgentsContent/Iniciator/Tejo/2.mp4',
          description: 'EQUIP a sticky grenade. FIRE to launch. The grenade sticks to the first surface it hits and explodes, Concussing any targets caught in the blast. ALT FIRE to launch the grenade with a single bounce instead.'
      },
      {
          name: 'Guided Salvo',
          img: '../AgentsContent/Iniciator/Tejo/3.avif',
          video: '../AgentsContent/Iniciator/Tejo/3.mp4',
          description: 'EQUIP an AR targeting system. FIRE to select up to two target locations on the map. ALT FIRE to launch missiles that autonomously navigate to target locations, detonating on arrival.'
      },
      {
          name: 'Armagedon',
          img: '../AgentsContent/Iniciator/Tejo/ult.avif',
          video: '../AgentsContent/Iniciator/Tejo/ult.mp4',
          description: 'EQUIP a tactical strike targeting map. FIRE to select the origin point of the strike. FIRE again to set the end point and launch the attack, unleashing a wave of explosions along the strike path. ALT FIRE during map targeting to cancel the origin point.'
      }
  ]
},
'CHAMBER': {
  role: 'Sentinel',
  description: 'Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.',
  abilities: [
      {
          name: 'Headhunter',
          img: '../AgentsContent/Sentinel/Chamber/1.avif',
          video: '../AgentsContent/Sentinel/Chamber/1.mp4',
          description: 'ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.'
      },
      {
          name: 'Rendezvous',
          img: '../AgentsContent/Sentinel/Chamber/2.avif',
          video: '../AgentsContent/Sentinel/Chamber/2.mp4',
          description: 'EQUIP a teleport anchor. FIRE to place it on the ground. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor. The anchor can be picked up to be REDEPLOYED.'
      },
      {
          name: 'Trademark',
          img: '../AgentsContent/Sentinel/Chamber/3.avif',
          video: '../AgentsContent/Sentinel/Chamber/3.mp4',
          description: 'EQUIP a trap that scans for enemies. FIRE to place it on the ground. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that Slows players caught inside of it. The trap can be picked up to be REDEPLOYED.'
      },
      {
          name: 'Tour De Force',
          img: '../AgentsContent/Sentinel/Chamber/ult.avif',
          video: '../AgentsContent/Sentinel/Chamber/ult.mp4',
          description: 'ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit to the upper body. ALT FIRE to aim down sights. Killing an enemy creates a lingering field that Slows players caught inside of it.'
      }
  ]
},
'ASTRA': {
  role: 'Controller',
  description: 'Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she’s always eons ahead of her enemy’s next move.',
  abilities: [
      {
          name: 'Nova Pulse',
          img: '../AgentsContent/Controller/Astra/1.avif',
          video: '../AgentsContent/Controller/Astra/1.mp4',
          description: 'Place Stars in Astral Form. ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.'
      },
      {
          name: 'Nebula',
          img: '../AgentsContent/Controller/Astra/2.avif',
          video: '../AgentsContent/Controller/Astra/2.mp4',
          description: 'Place Stars in Astral Form. ACTIVATE a Star to transform it into a Nebula (smoke). USE a Star to Dissipate it, returning the Star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star’s location before returning.'
      },
      {
          name: 'Gravity Well',
          img: '../AgentsContent/Controller/Astra/3.avif',
          video: '../AgentsContent/Controller/Astra/3.mp4',
          description: 'Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside Vulnerable.'
      },
      {
          name: 'Astral Form / Cosmic Divide',
          img: '../AgentsContent/Controller/Astra/ult.avif',
          video: '../AgentsContent/Controller/Astra/ult.mp4',
          description: 'ACTIVATE to enter Astral Form where you can place Stars with FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use ALT FIRE in Astral Form to begin aiming it, then FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.'
      }
  ]
},
'OMEN': {
  role: 'Controller',
  description: 'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.',
  abilities: [
      {
          name: 'Paranoia',
          img: '../AgentsContent/Controller/Omen/1.avif',
          video: '../AgentsContent/Controller/Omen/1.mp4',
          description: 'INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.'
      },
      {
          name: 'Dark Cover',
          img: '../AgentsContent/Controller/Omen/2.avif',
          video: '../AgentsContent/Controller/Omen/2.mp4',
          description: 'EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD ALT FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.'
      },
      {
          name: 'Shrouded Step',
          img: '../AgentsContent/Controller/Omen/3.avif',
          video: '../AgentsContent/Controller/Omen/3.mp4',
          description: 'EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.'
      },
      {
          name: 'From the Shadows',
          img: '../AgentsContent/Controller/Omen/ult.avif',
          video: '../AgentsContent/Controller/Omen/ult.mp4',
          description: 'EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.'
      }
  ]
},
'KAY/O': {
  role: 'Initiator',
  description: 'KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to Suppress enemy abilities dismantles his opponents’ capacity to fight back, securing him and his allies the ultimate edge.',
  abilities: [
      {
          name: 'FRAG/drive',
          img: '../AgentsContent/Iniciator/Kayo/1.avif',
          video: '../AgentsContent/Iniciator/Kayo/1.mp4',
          description: 'EQUIP a flash grenade. FIRE to overhand throw. ALT FIRE to lob a weaker version that explodes quickly. The flash grenade explodes after a short fuse, Blinding anyone in line of sight.'
      },
      {
          name: 'FLASH/point',
          img: '../AgentsContent/Iniciator/Kayo/2.avif',
          video: '../AgentsContent/Iniciator/Kayo/2.mp4',
          description: 'EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and Suppresses anyone in the radius of the explosion. Enemies can destroy this blade.'
      },
      {
          name: 'ZERO/ment',
          img: '../AgentsContent/Iniciator/Kayo/3.avif',
          video: '../AgentsContent/Iniciator/Kayo/3.mp4',
          description: 'EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.'
      },
      {
          name: 'NULL/cmd',
          img: '../AgentsContent/Iniciator/Kayo/ult.avif',
          video: '../AgentsContent/Iniciator/Kayo/ult.mp4',
          description: 'INSTANTLY overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are Suppressed for a short duration. While overloaded, KAY/O gains Combat Stim and can be re-stabilized if downed.'
      }
  ]
},
'VYSE': {
  role: 'Sentinel',
  description: 'Metallic mastermind Vyse unleashes liquid metal to isolate, trap, and disarm her enemies. Through cunning and manipulation, she forces all who oppose her to fear the battlefield itself.',
  abilities: [
      {
          name: 'Shear',
          img: '../AgentsContent/Sentinel/Vyse/1.avif',
          video: '../AgentsContent/Sentinel/Vyse/1.mp4',
          description: 'EQUIP filaments of liquid metal. FIRE to place a hidden wall trap. When an enemy crosses, an indestructible wall bursts from the ground behind them. The wall lasts for a brief time before dissipating.'
      },
      {
          name: 'Arc Rose',
          img: '../AgentsContent/Sentinel/Vyse/2.avif',
          video: '../AgentsContent/Sentinel/Vyse/2.mp4',
          description: 'EQUIP an Arc Rose. Target a surface and FIRE to place a stealthed Arc Rose, or ALT Fire to place the Arc Rose through it. REUSE to blind all players looking at it. This ability can be picked up to be REDEPLOYED.'
      },
      {
          name: 'Razorvine',
          img: '../AgentsContent/Sentinel/Vyse/3.avif',
          video: '../AgentsContent/Sentinel/Vyse/3.mp4',
          description: 'EQUIP a nest of liquid metal. FIRE to launch. Upon landing, the nest becomes invisible. When ACTIVATED, it sprawls out into a large razorvine nest which slows and damages all players who move through it.'
      },
      {
          name: 'Steel Garden',
          img: '../AgentsContent/Sentinel/Vyse/ult.avif',
          video: '../AgentsContent/Sentinel/Vyse/ult.mp4',
          description: 'EQUIP a bramble of liquid metal. FIRE to send the metal erupting from you as a torrent of metal thorns, JAMMING enemy primary weapons after a brief windup.'
      }
  ]
},
'CLOVE': {
  role: 'Controller',
  description: 'Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave, their return to the living only ever a moment away.',
  abilities: [
      {
          name: 'Meddle',
          img: '../AgentsContent/Controller/Clove/1.avif',
          video: '../AgentsContent/Controller/Clove/1.mp4',
          description: 'EQUIP a fragment of immortality essence. FIRE to throw the fragment, which erupts after a short delay and temporarily decays all targets caught inside.'
      },
      {
          name: 'Ruse',
          img: '../AgentsContent/Controller/Clove/2.avif',
          video: '../AgentsContent/Controller/Clove/2.mp4',
          description: 'EQUIP to view the battlefield. FIRE to set the locations where Clove’s clouds will settle. ALT FIRE to confirm, launching clouds that block vision in the chosen areas. Clove can use this ability after death.'
      },
      {
          name: 'Pick-Me-Up',
          img: '../AgentsContent/Controller/Clove/3.avif',
          video: '../AgentsContent/Controller/Clove/3.mp4',
          description: 'INSTANTLY absorb the life force of a fallen enemy that Clove damaged or killed, gaining haste and temporary health.'
      },
      {
          name: 'Ghost Recall',
          img: '../AgentsContent/Controller/Clove/ult.avif',
          video: '../AgentsContent/Controller/Clove/ult.mp4',
          description: 'After dying, ACTIVATE to resurrect. Once resurrected, Clove must earn a kill or a damaging assist within a set time or they will die.'
      }
  ]
},
'ISO': {
  role: 'Duelist',
  description: 'Chinese fixer for hire, Iso falls into a flow state to dismantle the opposition. Reconfiguring ambient energy into bulletproof protection, he advances with focus towards his next duel to the death.',
  abilities: [
      {
          name: 'Undercut',
          img: '../AgentsContent/Duelist/Iso/1.avif',
          video: '../AgentsContent/Duelist/Iso/1.mp4',
          description: 'EQUIP a molecular bolt. Fire to throw it forward, applying a brief FRAGILE to all players it touches. The bolt can pass through solid objects, including walls.'
      },
      {
          name: 'Double Tap',
          img: '../AgentsContent/Duelist/Iso/2.avif',
          video: '../AgentsContent/Duelist/Iso/2.mp4',
          description: 'START a focus timer. Once completed, enter a flow state during which downed enemies you kill or damage generate an energy orb. Shooting this orb grants you a shield which absorbs one instance of damage from any source.'
      },
      {
          name: 'Contingency',
          img: '../AgentsContent/Duelist/Iso/3.avif',
          video: '../AgentsContent/Duelist/Iso/3.mp4',
          description: 'EQUIP to assemble prismatic energy. FIRE to push an indestructible wall of energy forward that blocks bullets.'
      },
      {
          name: 'Kill Contract',
          img: '../AgentsContent/Duelist/Iso/ult.avif',
          video: '../AgentsContent/Duelist/Iso/ult.mp4',
          description: 'EQUIP an interdimensional arena. FIRE to hurl a column of energy through the battlefield, pulling you and the first enemy hit into the arena. You and your opponent duel to the death.'
      }
  ]
},
'BREACH': {
  role: 'Initiator',
  description: 'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.',
  abilities: [
      {
          name: 'Flashpoint',
          img: '../AgentsContent/Iniciator/Breach/1.avif',
          video: '../AgentsContent/Iniciator/Breach/1.mp4',
          description: 'EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.'
      },
      {
          name: 'Fault Line',
          img: '../AgentsContent/Iniciator/Breach/2.avif',
          video: '../AgentsContent/Iniciator/Breach/2.mp4',
          description: 'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.'
      },
      {
          name: 'Aftershock',
          img: '../AgentsContent/Iniciator/Breach/3.avif',
          video: '../AgentsContent/Iniciator/Breach/3.mp4',
          description: 'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.'
      },
      {
          name: 'Rolling Thunder',
          img: '../AgentsContent/Iniciator/Breach/ult.avif',
          video: '../AgentsContent/Iniciator/Breach/ult.mp4',
          description: 'EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.'
      }
  ]
},
'CYPHER': {
  role: 'Sentinel',
  description: 'The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy’s every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.',
  abilities: [
      {
          name: 'Cyber Cage',
          img: '../AgentsContent/Sentinel/Cypher/1.avif',
          video: '../AgentsContent/Sentinel/Cypher/1.mp4',
          description: 'INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.'
      },
      {
          name: 'Spycam',
          img: '../AgentsContent/Sentinel/Cypher/2.avif',
          video: '../AgentsContent/Sentinel/Cypher/2.mp4',
          description: 'EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the cameras view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED.'
      },
      {
          name: 'Trapwire',
          img: '../AgentsContent/Sentinel/Cypher/3.avif',
          video: '../AgentsContent/Sentinel/Cypher/3.mp4',
          description: 'EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.'
      },
      {
          name: 'Neural Theft',
          img: '../AgentsContent/Sentinel/Cypher/ult.avif',
          video: '../AgentsContent/Sentinel/Cypher/ult.mp4',
          description: 'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.'
      }
  ]
},
'HARBOR': {
  role: 'Controller',
  description: 'Hailing from India’s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies, or pummel those that oppose him.',
  abilities: [
      {
          name: 'Cove',
          img: '../AgentsContent/Controller/Harbor/1.avif',
          video: '../AgentsContent/Controller/Harbor/1.mp4',
          description: 'EQUIP a sphere of shielding water. FIRE to throw. ALT FIRE to underhand throw. Upon impacting the ground, spawn a destructible water shield that blocks bullets.'
      },
      {
          name: 'High Tide',
          img: '../AgentsContent/Controller/Harbor/2.avif',
          video: '../AgentsContent/Controller/Harbor/2.mp4',
          description: 'EQUIP a wall of water. FIRE to send the water forward along the ground. HOLD FIRE to guide the water in the direction of your crosshair, passing through the world, spawning a wall along the water’s path. ALT FIRE while bending to stop the water early. Players hit are SLOWED'
      },
      {
          name: 'Cascade',
          img: '../AgentsContent/Controller/Harbor/3.avif',
          video: '../AgentsContent/Controller/Harbor/3.mp4',
          description: 'EQUIP a wave of water. FIRE to send the wave rolling forward and through walls. RE- USE to stop the wave. Players hit are SLOWED.'
      },
      {
          name: 'Reckoning',
          img: '../AgentsContent/Controller/Harbor/ult.avif',
          video: '../AgentsContent/Controller/Harbor/ult.mp4',
          description: 'EQUIP the full power of your Artifact. FIRE to summon a geyser pool on the ground. Enemy players in the area are targeted by successive geyser strikes. Players caught within a strike are CONCUSSED.'
      }
  ]
},
'NEON': {
  role: 'Duelist',
  description: 'Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.',
  abilities: [
      {
          name: 'Relay Bolt',
          img: '../AgentsContent/Duelist/Neon/1.avif',
          video: '../AgentsContent/Duelist/Neon/1.mp4',
          description: 'INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.'
      },
      {
          name: 'High Gear',
          img: '../AgentsContent/Duelist/Neon/2.avif',
          video: '../AgentsContent/Duelist/Neon/2.mp4',
          description: 'INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.'
      },
      {
          name: 'Fast Lane',
          img: '../AgentsContent/Duelist/Neon/3.avif',
          video: '../AgentsContent/Duelist/Neon/3.mp4',
          description: 'FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through them.'
      },
      {
          name: 'Overdrive',
          img: '../AgentsContent/Duelist/Neon/ult.avif',
          video: '../AgentsContent/Duelist/Neon/ult.mp4',
          description: 'Unleash Neon’s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy. The duration resets on each kill.'
      }
  ]
},
'FADE': {
  role: 'Initiator',
  description: 'Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.',
  abilities: [
      {
          name: 'Seize',
          img: '../AgentsContent/Iniciator/Fade/1.avif',
          video: '../AgentsContent/Iniciator/Fade/1.mp4',
          description: 'Equip an orb of nightmare ink. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the ink will explode and create a zone in which enemies who are caught in it cannot escape the zone by normal means. RE-USE the ability to drop the projectile early in-flight'
      },
      {
          name: 'Haunt',
          img: '../AgentsContent/Iniciator/Fade/2.avif',
          video: '../AgentsContent/Iniciator/Fade/2.mp4',
          description: 'Equip a nightmarish entity. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the orb will turn into a nightmarish entity that will reveal the location of enemies caught in its line of sight. Enemies can destroy this entity. RE-USE the ability to drop the projectile early in-flight.'
      },
      {
          name: 'Prowler',
          img: '../AgentsContent/Iniciator/Fade/3.avif',
          video: '../AgentsContent/Iniciator/Fade/3.mp4',
          description: 'EQUIP a Prowler. FIRE will send the Prowler out, causing it to travel in a straight line. The Prowler will lock onto any enemies or trails in their frontal vision cone and chase them, nearsighting them if it reaches them. HOLD the FIRE button to steer the Prowler in the direction of your crosshair.'
      },
      {
          name: 'Nightfall',
          img: '../AgentsContent/Iniciator/Fade/ult.avif',
          video: '../AgentsContent/Iniciator/Fade/ult.mp4',
          description: 'EQUIP the power of Fear. FIRE to send out a wave of nightmare energy that can traverse through walls. The energy creates a trail to the opponent as well as deafens and decays them.'
      }
  ]
},
'DEADLOCK': {
  role: 'Sentinel',
  description: 'Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives her unyielding ferocity.',
  abilities: [
      {
          name: 'Sonic Sensor',
          img: '../AgentsContent/Sentinel/Deadlock/1.avif',
          video: '../AgentsContent/Sentinel/Deadlock/1.mp4',
          description: 'EQUIP a Sonic Sensor. FIRE to deploy. The sensor monitors an area for enemies making sound. It concusses that area if footsteps, weapons fire, or significant noise are detected.'
      },
      {
          name: 'Barrier Mesh',
          img: '../AgentsContent/Sentinel/Deadlock/2.avif',
          video: '../AgentsContent/Sentinel/Deadlock/2.mp4',
          description: 'EQUIP a Barrier Mesh disc. FIRE to throw forward. Upon landing, the disc generates barriers from the origin point that block character movement.'
      },
      {
          name: 'GravNet',
          img: '../AgentsContent/Sentinel/Deadlock/3.avif',
          video: '../AgentsContent/Sentinel/Deadlock/3.mp4',
          description: 'EQUIP a GravNet grenade. FIRE to throw. ALT FIRE to lob the grenade underhand. The GravNet detonates upon landing, forcing any enemies caught within to crouch and move slowly.'
      },
      {
          name: 'Annihilation',
          img: '../AgentsContent/Sentinel/Deadlock/ult.avif',
          video: '../AgentsContent/Sentinel/Deadlock/ult.mp4',
          description: 'EQUIP a Nanowire Accelerator. FIRE to unleash a pulse of nanowires that captures the first enemy contacted. The cocooned enemy is pulled along a nanowire path and will die if they reach the end, unless they are freed. The nanowire cocoon is destructible'
      }
  ]
},
'VIPER': {
  role: 'Controller',
  description: 'The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy’s vision. If the toxins don’t kill her prey, her mindgames surely will.',
  abilities: [
      {
          name: 'Poison Cloud',
          img: '../AgentsContent/Controller/Viper/1.avif',
          video: '../AgentsContent/Controller/Viper/1.mp4',
          description: 'EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be picked up to be REDEPLOYED before the round starts and can be RE-USED more than once throughout the round.'
      },
      {
          name: 'Toxic Screen',
          img: '../AgentsContent/Controller/Viper/2.avif',
          video: '../AgentsContent/Controller/Viper/2.mp4',
          description: 'EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.'
      },
      {
          name: 'Snake Bite',
          img: '../AgentsContent/Controller/Viper/3.avif',
          video: '../AgentsContent/Controller/Viper/3.mp4',
          description: 'EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.'
      },
      {
          name: 'Viper’s Pit',
          img: '../AgentsContent/Controller/Viper/ult.avif',
          video: '../AgentsContent/Controller/Viper/ult.mp4',
          description: 'EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.'
      }
  ]
},
'PHOENIX': {
  role: 'Duelist',
  description: 'Hailing from the U.K., Phoenix’s star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he’s got backup or not, he’ll rush into a fight on his own terms.',
  abilities: [
      {
          name: 'Curveball',
          img: '../AgentsContent/Duelist/Phoenix/1.avif',
          video: '../AgentsContent/Duelist/Phoenix/1.mp4',
          description: 'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.'
      },
      {
          name: 'Hot Hands',
          img: '../AgentsContent/Duelist/Phoenix/2.avif',
          video: '../AgentsContent/Duelist/Phoenix/2.mp4',
          description: 'EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.'
      },
      {
          name: 'Blaze',
          img: '../AgentsContent/Duelist/Phoenix/3.avif',
          video: '../AgentsContent/Duelist/Phoenix/3.mp4',
          description: 'EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.'
      },
      {
          name: 'Run It Back',
          img: '../AgentsContent/Duelist/Phoenix/ult.avif',
          video: '../AgentsContent/Duelist/Phoenix/ult.mp4',
          description: 'INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.'
      }
  ]
},
'GEKKO': {
  role: 'Initiator',
  description: 'Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.',
  abilities: [
      {
          name: 'Wingman',
          img: '../AgentsContent/Iniciator/Gekko/1.avif',
          video: '../AgentsContent/Iniciator/Gekko/1.mp4',
          description: 'EQUIP Wingman FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown.'
      },
      {
          name: 'Dizzy',
          img: '../AgentsContent/Iniciator/Gekko/2.avif',
          video: '../AgentsContent/Iniciator/Gekko/2.mp4',
          description: 'EQUIP Dizzy FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are blinded. When Dizzy expires she reverts into a dormant globule INTERACT to reclaim the globule and gain another Dizzy charge after a short cooldown.'
      },
      {
          name: 'Mosh Pit',
          img: '../AgentsContent/Iniciator/Gekko/3.avif',
          video: '../AgentsContent/Iniciator/Gekko/3.mp4',
          description: 'EQUIP Mosh FIRE to throw Mosh like a grenade ALT FIRE to throw underhand. Upon landing Mosh duplicates across a large area then after a short delay explodes.'
      },
      {
          name: 'Thrash',
          img: '../AgentsContent/Iniciator/Gekko/ult.avif',
          video: '../AgentsContent/Iniciator/Gekko/ult.mp4',
          description: 'EQUIP Thrash FIRE to link with Thrash’s mind and steer her through enemy territory ACTIVATE to lunge forward and explode, detaining any enemies in a small radius. When Thrash expires she reverts into a dormant globule INTERACT to reclaim the globule and gain another Thrash charge after a short cooldown. Thrash can be reclaimed once.'
      }
  ]
},
'KILLJOY': {
  role: 'Sentinel',
  description: 'The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn’t stop her enemies, her robots’ debuff will help make short work of them.',
  abilities: [
      {
          name: 'Alarmbot',
          img: '../AgentsContent/Sentinel/Killjoy/1.avif',
          video: '../AgentsContent/Sentinel/Killjoy/1.mp4',
          description: 'EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.'
      },
      {
          name: 'Turret',
          img: '../AgentsContent/Sentinel/Killjoy/2.avif',
          video: '../AgentsContent/Sentinel/Killjoy/2.mp4',
          description: 'EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.'
      },
      {
          name: 'Nanoswarm',
          img: '../AgentsContent/Sentinel/Killjoy/3.avif',
          video: '../AgentsContent/Sentinel/Killjoy/3.mp4',
          description: 'EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.'
      },
      {
          name: 'Lockdown',
          img: '../AgentsContent/Sentinel/Killjoy/ult.avif',
          video: '../AgentsContent/Sentinel/Killjoy/ult.mp4',
          description: 'EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.'
      }
  ]
},
'REYNA': {
  role: 'Duelist',
  description: 'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.',
  abilities: [
      {
          name: 'Devour',
          img: '../AgentsContent/Duelist/Reyna/1.avif',
          video: '../AgentsContent/Duelist/Reyna/1.mp4',
          description: 'Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.'
      },
      {
          name: 'Dismiss',
          img: '../AgentsContent/Duelist/Reyna/2.avif',
          video: '../AgentsContent/Duelist/Reyna/2.mp4',
          description: 'Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.'
      },
      {
          name: 'Leer',
          img: '../AgentsContent/Duelist/Reyna/3.avif',
          video: '../AgentsContent/Duelist/Reyna/3.mp4',
          description: 'EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.'
      },
      {
          name: 'Empress',
          img: '../AgentsContent/Duelist/Reyna/ult.avif',
          video: '../AgentsContent/Duelist/Reyna/ult.mp4',
          description: 'INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.'
      }
  ]
},
'WAYLAY': {
  role: 'Duelist',
  description: 'Thailand’s prismatic radiant Waylay transforms into light itself as she darts across the battlefield, striking down her targets through shards of light before flitting back to safety, all in the blink of an eye.',
  abilities: [
      {
          name: 'Saturate',
          img: '../AgentsContent/Duelist/Waylay/1.avif',
          video: '../AgentsContent/Duelist/Waylay/1.mp4',
          description: 'INSTANTLY throw a cluster of light that explodes upon contact with the ground, Hindering nearby players with a powerful movement and weapon slow.'
      },
      {
          name: 'Lightspeed',
          img: '../AgentsContent/Duelist/Waylay/2.avif',
          video: '../AgentsContent/Duelist/Waylay/2.mp4',
          description: 'EQUIP to prepare for a burst of speed. FIRE to dash forward twice. ALT FIRE to dash once. Only your first dash can send you upward.'
      },
      {
          name: 'Refract',
          img: '../AgentsContent/Duelist/Waylay/3.avif',
          video: '../AgentsContent/Duelist/Waylay/3.mp4',
          description: 'INSTANTLY create a beacon of light on the floor. REACTIVATE to speed back to your beacon as a mote of pure light. You are invulnerable as you travel.'
      },
      {
          name: 'Convergent Paths',
          img: '../AgentsContent/Duelist/Waylay/ult.avif',
          video: '../AgentsContent/Duelist/Waylay/ult.mp4',
          description: 'EQUIP to focus your prismatic power. FIRE to create an afterimage of yourself that projects a beam of light. After a brief delay, you gain a powerful speed boost and the beam expands, Hindering other players in the area.'
      }
  ]
},
'SKYE': {
  role: 'Initiator',
  description: 'Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.',
  abilities: [
      {
          name: 'Trailblazer',
          img: '../AgentsContent/Iniciator/Skye/1.avif',
          video: '../AgentsContent/Iniciator/Skye/1.mp4',
          description: 'EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.'
      },
      {
          name: 'Guiding Light',
          img: '../AgentsContent/Iniciator/Skye/2.avif',
          video: '../AgentsContent/Iniciator/Skye/2.mp4',
          description: 'EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.'
      },
      {
          name: 'Regrowth',
          img: '../AgentsContent/Iniciator/Skye/3.avif',
          video: '../AgentsContent/Iniciator/Skye/3.mp4',
          description: 'EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.'
      },
      {
          name: 'Seekers',
          img: '../AgentsContent/Iniciator/Skye/ult.avif',
          video: '../AgentsContent/Iniciator/Skye/ult.mp4',
          description: 'EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it Nearsights them. Enemies can destroy the Seekers.'
      }
  ]
},
'YORU': {
  role: 'Duelist',
  description: 'Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.',
  abilities: [
      {
          name: 'Blindside',
          img: '../AgentsContent/Duelist/Yoru/1.avif',
          video: '../AgentsContent/Duelist/Yoru/1.mp4',
          description: 'EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.'
      },
      {
          name: 'Gatecrash',
          img: '../AgentsContent/Duelist/Yoru/2.avif',
          video: '../AgentsContent/Duelist/Yoru/2.mp4',
          description: 'EQUIP a rift tether FIRE to send the tether forward. ALT FIRE to place a stationary tether. ACTIVATE to teleport to the tether’s location. USE to trigger a fake teleport.'
      },
      {
          name: 'Fakeout',
          img: '../AgentsContent/Duelist/Yoru/3.avif',
          video: '../AgentsContent/Duelist/Yoru/3.mp4',
          description: 'EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.'
      },
      {
          name: 'Dimensional Drift',
          img: '../AgentsContent/Duelist/Yoru/ult.avif',
          video: '../AgentsContent/Duelist/Yoru/ult.mp4',
          description: 'EQUIP a mask that can see between dimensions. FIRE to drift into Yoru’s dimension, unable to be affected or seen by enemies from the outside. REACTIVATE to exit Yoru’s dimension early.'
      }
  ]
}
};
function showInfo(name) {
  const agent = agents[name];
  const panel = document.getElementById('infoPanel');

  const abilityButtonsHtml = agent.abilities.map((a, i) => `
      <button class="ability-btn" onclick="showAbilityVideo('${a.video}', '${a.name}', '${a.description}')">
          <img src="${a.img}" alt="${a.name}">
      </button>
  `).join('');

  panel.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Role:</strong> ${agent.role}</p>
      <p>${agent.description}</p>
      <div class="abilities">${abilityButtonsHtml}</div>
      <div id="videoContainer"></div>
  `;
}

function showAbilityVideo(videoUrl, abilityName, abilityDescription) {
  const container = document.getElementById('videoContainer');
  container.innerHTML = `
      <h3>${abilityName}</h3>
      <p>${abilityDescription}</p>
      <video autoplay loop muted playsinline width="360">
          <source src="${videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
      </video>
  `;
}