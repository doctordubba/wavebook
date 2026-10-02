/* Research snapshot and roster presets. See each profile for source links. */
const DATA={
  "version": 2,
  "snapshot": "2 Oct 2026",
  "guideVersion": "3.7",
  "characters": [
    {
      "id": "iuno",
      "name": "Iuno",
      "short": "Iuno",
      "element": "Aero",
      "weapon": "Gauntlets",
      "role": "Hybrid",
      "subtitle": "Support / sub-DPS · optional carry",
      "tagline": "Build her damage without losing Jingran’s buff handoff.",
      "page": 5,
      "talents": [
        "Forte Circuit",
        "Resonance Liberation",
        "Intro Skill",
        "Resonance Skill",
        "Basic Attack"
      ],
      "scaling": "ATK",
      "damage": "Liberation",
      "signature": "Moongazer’s Sigil",
      "alternatives": [
        "Verity’s Handle",
        "Abyss Surges"
      ],
      "er": [
        120,
        130
      ],
      "aliases": [],
      "rotation": "Intro → Closing Refrain Skill → Bell-Borne if using the Jingran preset → Liberation → Jump into Moonbow → Moonbow Basics 1–2 → bow Skill → Moonbow Basics 1–2 → bow Skill → Absolute Fullness at full Concerto → Outro directly into Jingran. The carry route is longer and is not this short hybrid loop.",
      "must": "Absolute Fullness creates the Full Moon Domain. Receiving shields inside it builds Blessing stacks; merely keeping one shield is not enough. S2 adds amplification only at 10 stacks. Switching the carry out loses key buffs.",
      "roster": "Moonlit and Crown can be close in total team output. Use the better complete set rather than treating either as universally superior.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 01\nAERO  /  GAUNTLETS\nIuno\nSupport / sub-DPS • optional on-field carry\nBuild her damage without losing Jingran’s buff handoff.\nRECOMMENDED TEAMS\nYour main use\nJingran + Iuno + Shorekeeper\nCarry alternative\nIuno + Lynae + Mornye; Shorekeeper can replace Mornye\nECHO BUILD\nHybrid: 5-piece Moonlit Clouds + Impermanence Heron.\nDamage/carry: 3-piece Crown of Valor + 2-piece Sierra Gale, with\nLady of the Sea active.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG\n3-costs\nAero DMG + Aero DMG\n1-costs\nATK% + ATK%\nER target\n120–130% for hybrid play. Carry rotations may\nneed less; test your team.\nSubstats\nEnergy Regen to target → Crit → Liberation DMG /\nATK%\nTALENT LEVEL-UP ORDER\n01\nForte Circuit\n02\nResonance Liberation\n03\nIntro Skill\n04\nResonance Skill\n05\nBasic Attack\nCarry order: Forte → Liberation → Basic → Skill →\nIntro. Unlock Waxing Ascent and Derivation first.\nWEAPONS\nSignature: Moongazer’s Sigil. Alternatives: Verity’s\nHandle; Abyss Surges.\nPLAY PATTERN\nIntro → Closing Refrain → Liberation → switch to Moonbow → bow attacks and Skills → Absolute Fullness at full\nConcerto → Outro directly to Jingran.\nMust know. Absolute Fullness creates the Full Moon Domain. Receiving shields inside it builds Blessing stacks; merely\nkeeping one shield is not enough. S2 adds amplification only at 10 stacks. Switching the carry out loses key buffs.\nFor your roster: Moonlit and Crown can be close in total team output. Use the better complete set rather than treating either as\nuniversally superior.\nBuild, priorities and kit references: [01P] [01W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nIUNO\n05 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/iuno/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/iuno-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        },
        {
          "id": "domain",
          "label": "Full Moon created before the carry handoff"
        }
      ],
      "presets": [
        {
          "id": "hybrid",
          "label": "Jingran support",
          "sets": [
            {
              "name": "Moonlit Clouds",
              "pieces": 5
            }
          ],
          "echo": "Bell-Borne Geochelone",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Aero DMG",
            "Aero DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            120,
            130
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Intro Skill",
            "Resonance Skill",
            "Basic Attack"
          ],
          "note": "Short hybrid route for Jingran. Moonlit buffs the handoff, and Bell-Borne supplies a shield. Cast the Echo before leaving and preserve the direct Outro.",
          "role": "Hybrid",
          "activeCost": 4
        },
        {
          "id": "hybrid-damage",
          "label": "Damage-focused hybrid",
          "sets": [
            {
              "name": "Crown of Valor",
              "pieces": 3
            },
            {
              "name": "Sierra Gale",
              "pieces": 2
            }
          ],
          "echo": "Lady of the Sea",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Aero DMG",
            "Aero DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            120,
            130
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Intro Skill",
            "Resonance Skill",
            "Basic Attack"
          ],
          "note": "Preserves Iuno’s personal damage while keeping her kit buffs. The two-piece Aero bonus can come from an equivalent compatible set.",
          "role": "Hybrid",
          "activeCost": 4
        },
        {
          "id": "carry",
          "label": "On-field carry",
          "sets": [
            {
              "name": "Crown of Valor",
              "pieces": 3
            },
            {
              "name": "Sierra Gale",
              "pieces": 2
            }
          ],
          "echo": "Lady of the Sea",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Aero DMG",
            "Aero DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            100,
            120
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Resonance Skill",
            "Intro Skill"
          ],
          "note": "The published 100% estimate assumes Lynae + Shorekeeper and a longer carry route. Test your own second rotation; this is not a universal threshold.",
          "role": "Carry",
          "activeCost": 4
        }
      ],
      "talentNote": "Unlock Waxing Ascent and Derivation. Raise Forte, then Liberation; the hybrid route can leave lower talents modest.",
      "investment": "S2 is a target, not confirmed owned. Its extra amplification needs ten Blessing stacks; repeated shield gains matter.",
      "substats": "ER to rotation needs → Crit Rate / Crit DMG → Liberation DMG ≈ ATK%",
      "guide": {
        "focus": "Choose her job first: a short Heavy-support handoff or a longer carry window. Finish Absolute Fullness with full Concerto and send the Outro directly to its beneficiary.",
        "weapon": "Moongazer’s Sigil supports her personal damage. For Jingran, Bell-Borne on Moonlit also supplies the shield his setup wants.",
        "note": "Carry ER can be lower with Lynae / Shorekeeper; the hybrid range remains a conservative starting point. S2 is a target, not assumed ownership.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/iuno/"
      },
      "benchmarks": {
        "atk": {
          "min": 1800,
          "max": 2400
        },
        "crit": {
          "min": 65,
          "max": 80
        },
        "critDmg": {
          "min": 215,
          "max": 260
        }
      },
      "routes": {
        "carry": {
          "loop": [
            "Intro → Closing Refrain → Flux into Moonbow",
            "Moonbow Basics 1–3 → bow Skill",
            "Liberation → Moonbow Basics 1–3 → bow Skill",
            "Full Concerto → Absolute Fullness → Outro"
          ]
        }
      }
    },
    {
      "id": "lynae",
      "name": "Lynae",
      "short": "Lynae",
      "element": "Spectro",
      "weapon": "Pistols",
      "role": "Hybrid",
      "subtitle": "Flexible hybrid buffer",
      "tagline": "Keep the direct Outro for the intended damage dealer.",
      "page": 6,
      "talents": [
        "Forte Circuit",
        "Resonance Liberation",
        "Basic Attack",
        "Resonance Skill",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Basic Attack",
      "signature": "Spectrum Blaster",
      "alternatives": [
        "Static Mist"
      ],
      "er": [
        115,
        130
      ],
      "aliases": [],
      "rotation": "Intro → Skill → Liberation → charged Spark Collision → three Polychrome Leaps → Visual Impact → Outro to the intended carry. Fit Hyvatia into setup.",
      "must": "Her Outro benefits the incoming character, so do not insert another teammate before the carry. S2 strengthens both Lynae and that recipient; it does not require changing her main Echo set.",
      "roster": "Keep her available as a flexible substitute rather than forcing her into teams already built around Rebecca, Denia or Iuno.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 02\nSPECTRO  /  PISTOLS\nLynae\nGeneral-purpose hybrid buffer\nA flexible partner when the carry benefits from Liberation amplification.\nRECOMMENDED TEAMS\nCarry Iuno\nIuno + Lynae + Mornye\nGlacio option\nHiyuki + Lynae + Suisui\nTune alternative\nQingxiao + Lynae + Mornye; Denia is the specialist alternative\nECHO BUILD\n5-piece Pact of Neonlight Leap. Active Echo: Hyvatia.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG\n3-costs\nSpectro DMG + Spectro DMG\n1-costs\nATK% + ATK%\nER target\n115–130%; around 125% is a practical starting\npoint.\nSubstats\nEnergy Regen to target → Crit → ATK% → Basic\nAttack DMG\nTALENT LEVEL-UP ORDER\n01\nForte Circuit\n02\nResonance Liberation\n03\nBasic Attack\n04\nResonance Skill\n05\nIntro Skill\nStart with Forte and Liberation at 8, then 10 as\nresources allow. The remaining levels are secondary.\nWEAPONS\nSignature: Spectrum Blaster. Accessible\nalternative: Static Mist.\nPLAY PATTERN\nIntro → Skill → Liberation → charged Spark Collision → three Polychrome Leaps → Visual Impact → Outro to the\nintended carry. Fit Hyvatia into setup.\nMust know. Her Outro benefits the incoming character, so do not insert another teammate before the carry. S2\nstrengthens both Lynae and that recipient; it does not require changing her main Echo set.\nFor your roster: Keep her available as a flexible substitute rather than forcing her into teams already built around Rebecca, Denia\nor Iuno.\nBuild, priorities and kit references: [02P] [02W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nLYNAE\n06 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/lynae/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/lynae-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "hybrid",
          "label": "General hybrid",
          "sets": [
            {
              "name": "Pact of Neonlight Leap",
              "pieces": 5
            }
          ],
          "echo": "Hyvatia",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Spectro DMG",
            "Spectro DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            115,
            130
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Resonance Skill",
            "Intro Skill"
          ],
          "note": "",
          "role": "Hybrid",
          "activeCost": 4
        }
      ],
      "talentNote": "Forte and Liberation to 8, then 10 as materials allow.",
      "investment": "S2 enhances Lynae and the Outro recipient. It does not require a different Echo set.",
      "substats": "ER to target → Crit → ATK% → Basic Attack DMG",
      "guide": {
        "focus": "Build her charge, complete the three leaps, and give the intended carry her Outro. For touch controls, charge Spark Collision before Liberation to simplify the transition.",
        "weapon": "Spectrum Blaster is her signature; Static Mist is a practical alternative. Recheck ER when switching teams.",
        "note": "Do not swap-cancel the action immediately before her Outro: its animation can cancel that action. Targets exclude temporary team buffs.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/lynae/"
      },
      "benchmarks": {
        "atk": {
          "min": 2000,
          "max": 2200
        },
        "crit": {
          "min": 50,
          "max": 80
        },
        "critDmg": {
          "min": 250,
          "max": 280
        }
      },
      "routes": {
        "hybrid": {
          "loop": [
            "Intro → Skill → prepare Hyvatia",
            "Hold Spark Collision until charged → Liberation",
            "Three Polychrome Leaps → Visual Impact",
            "Outro directly to the intended carry"
          ]
        }
      }
    },
    {
      "id": "mornye",
      "name": "Mornye",
      "short": "Mornye",
      "element": "Fusion",
      "weapon": "Broadblade",
      "role": "Sustain",
      "subtitle": "DEF-scaling healer · Tune support",
      "tagline": "Meet her effective ER threshold before polishing damage.",
      "page": 7,
      "talents": [
        "Resonance Liberation",
        "Forte Circuit",
        "Basic Attack",
        "Intro Skill",
        "Resonance Skill"
      ],
      "scaling": "DEF",
      "damage": "Liberation",
      "signature": "Starfield Calibrator",
      "alternatives": [
        "Discord"
      ],
      "er": [
        260,
        260
      ],
      "aliases": [],
      "rotation": "Intro into Wide Field Observation → Skill → enhanced Basics → Inversion Heavy → Liberation to upgrade the field → Echo → Outro.",
      "must": "At S0, the full Interfered Marker package needs Tune Rupture or Tune Strain. S1 removes that restriction. Do not assume S0 Mornye gives her complete package to Lucy or every negative-status team. Do not double-count the always-on Blueprint or Reactor Husk bonuses in a displayed ER total.",
      "roster": "Reach the ER threshold and reliable Concerto first. Her Liberation gains substantial Crit Rate from ER, so ordinary Crit-stacking rules do not apply.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 03\nFUSION  /  BROADBLADE\nMornye\nDEF-scaling healer / Tune support\nHer Energy Regen threshold matters more than conventional DPS stats.\nRECOMMENDED TEAMS\nTune Strain\nQingxiao + Denia + Mornye; Luuk can replace Qingxiao\nCarry Iuno\nIuno + Lynae + Mornye\nTune Rupture\nAemeath + Lynae + Mornye\nECHO BUILD\n5-piece Halo of Starry Radiance. Active Echo: Reactor Husk.\nRejuvenating Glow is a reusable fallback, not the default.\nCosts\n4–3–3–1–1\n4-cost\nDEF% (Healing Bonus for extra sustain)\n3-costs\nEnergy Regen + Energy Regen\n1-costs\nDEF% + DEF%\nER target\n260% effective; about 240% before the passive and\nReactor Husk bonuses.\nSubstats\nEnergy Regen first → DEF% for healing; Crit DMG /\nLiberation DMG for damage\nTALENT LEVEL-UP ORDER\n01\nResonance Liberation\n02\nForte Circuit\n03\nBasic Attack\n04\nIntro Skill\n05\nResonance Skill\nThis is damage order. For healing, prioritize Forte and\nSkill. Most personal damage is in Liberation; other\ndamage levels are optional.\nWEAPONS\nSignature: Starfield Calibrator. Excellent practical\nalternative: Discord.\nPLAY PATTERN\nIntro into Wide Field Observation → Skill → enhanced Basics → Inversion Heavy → Liberation to upgrade the field →\nEcho → Outro.\nMust know. At S0, the full Interfered Marker package needs Tune Rupture or Tune Strain. S1 removes that\nrestriction. Do not assume S0 Mornye gives her complete package to Lucy or every negative-status team.\nFor your roster: Reach the ER threshold and reliable Concerto first. Her Liberation gains substantial Crit Rate from ER, so\nordinary Crit-stacking rules do not apply.\nBuild, priorities and kit references: [03P] [03W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nMORNYE\n07 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/mornye/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/mornye-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Healing and buff conditions are reliable"
        }
      ],
      "presets": [
        {
          "id": "healer",
          "label": "Tune support / healing",
          "sets": [
            {
              "name": "Halo of Starry Radiance",
              "pieces": 5
            }
          ],
          "echo": "Reactor Husk",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "DEF% / Healing Bonus",
            "Energy Regen",
            "Energy Regen",
            "DEF%",
            "DEF%"
          ],
          "er": [
            260,
            260
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Skill",
            "Resonance Liberation",
            "Basic Attack",
            "Intro Skill"
          ],
          "note": "Healing-first editorial order: Forte and Skill improve sustain; Liberation is still worth raising for damage. 260% is effective TOTAL ER. Do not add the permanent passive or main-Echo bonus again if your stat panel already includes them.",
          "role": "Sustain",
          "activeCost": 4
        },
        {
          "id": "damage",
          "label": "Damage polish",
          "sets": [
            {
              "name": "Halo of Starry Radiance",
              "pieces": 5
            }
          ],
          "echo": "Reactor Husk",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "DEF%",
            "Energy Regen",
            "Energy Regen",
            "DEF%",
            "DEF%"
          ],
          "er": [
            260,
            260
          ],
          "talents": [
            "Resonance Liberation",
            "Forte Circuit",
            "Basic Attack",
            "Intro Skill",
            "Resonance Skill"
          ],
          "note": "Published damage order. Prioritize 260% effective ER, then Liberation damage / Crit DMG. Do not apply a conventional 70% Crit Rate target.",
          "role": "Sustain",
          "activeCost": 4
        }
      ],
      "talentNote": "Use the healing preset for sustain; switch the priority order only when polishing personal damage.",
      "investment": "S1 removes the Tune restriction from Interfered Marker. S0 outside that condition remains usable, but does not give the complete package.",
      "substats": "260% effective ER → DEF% for healing; Liberation DMG / Crit DMG for optional damage",
      "guide": {
        "focus": "Secure 260% ER for her buff condition, then DEF for reliable healing. Crit DMG is optional personal-damage polish; Crit Rate beyond her modest baseline is a lower priority.",
        "weapon": "Starfield Calibrator or Discord affects Concerto generation. Keep the full route until your actual weapon rank supports a tested shortcut.",
        "note": "Use Reactor Husk after Liberation; Fallacy belongs before it. Her Intro skips the opener’s resource-building setup.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/mornye/"
      },
      "benchmarks": {
        "def": {
          "min": 3000,
          "max": null
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Intro → Wide Field Basics 1–3",
            "Distributed Array → Inversion Heavy",
            "Liberation → Reactor Husk",
            "Full Concerto → Outro"
          ],
          "opener": [
            "Basics 1–3 → Geopotential Shift Heavy",
            "Wide Field Basics 1–3 → Distributed Array",
            "Inversion Heavy → Liberation → Reactor Husk",
            "Full Concerto → Outro"
          ]
        }
      }
    },
    {
      "id": "denia",
      "name": "Denia",
      "short": "Denia",
      "element": "Fusion",
      "weapon": "Rectifier",
      "role": "Hybrid",
      "subtitle": "Two-mode specialist buffer",
      "tagline": "Choose her mode and Echo set together.",
      "page": 8,
      "talents": [
        "Resonance Liberation",
        "Forte Circuit",
        "Resonance Skill",
        "Basic Attack",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Liberation",
      "signature": "Forged Dwarf Star",
      "alternatives": [
        "Cosmic Ripples"
      ],
      "er": [
        125,
        125
      ],
      "aliases": [],
      "rotation": "Intro and resource-building attacks → reach 100 Void Particles → first Liberation → empowered attacks and Skills → second Liberation → Outro to the carry.",
      "must": "Voidwing Moth is a 3-cost active Echo; the 4-cost Crit piece remains elsewhere in the loadout. Casting the first Liberation before the resource condition can undermine the intended enhanced sequence.",
      "roster": "Do not copy the Fusion Burst set onto a Qingxiao or Luuk team. Keep separate saved presets when alternating between these roles.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 04\nFUSION  /  RECTIFIER\nDenia\nTwo-mode hybrid / specialist buffer\nChoose her mode and set together before spending tuners.\nRECOMMENDED TEAMS\nTune Strain\nQingxiao + Denia + Mornye; Luuk + Denia + Mornye\nFusion Burst\nAemeath + Denia + Chisa\nECHO BUILD\nTune Strain: 5-piece Reel of Spliced Memories + Voidwing Moth.\nFusion Burst: 5-piece Chromatic Foam + Reminiscence: Denia.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG\n3-costs\nFusion DMG + Fusion DMG; one ATK% is viable\n1-costs\nATK% + ATK%\nER target\nStart near 120% in Fusion Burst or 125% in Tune\nStrain; refine after two loops.\nSubstats\nEnergy Regen to target → Crit → ATK% / Liberation\nDMG\nTALENT LEVEL-UP ORDER\n01\nResonance Liberation\n02\nForte Circuit\n03\nResonance Skill\n04\nBasic Attack\n05\nIntro Skill\nLiberation is the first major investment. Upgrade\nForte next; small differences among the lower\npriorities matter much less.\nWEAPONS\nSignature: Forged Dwarf Star. Permanent\nalternative: Cosmic Ripples.\nPLAY PATTERN\nIntro and resource-building attacks → reach 100 Void Particles → first Liberation → empowered attacks and Skills →\nsecond Liberation → Outro to the carry.\nMust know. Voidwing Moth is a 3-cost active Echo; the 4-cost Crit piece remains elsewhere in the loadout. Casting\nthe first Liberation before the resource condition can undermine the intended enhanced sequence.\nFor your roster: Do not copy the Fusion Burst set onto a Qingxiao or Luuk team. Keep separate saved presets when alternating\nbetween these roles.\nBuild, priorities and kit references: [04P] [04W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nDENIA\n08 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/denia/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/denia-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        },
        {
          "id": "mode",
          "label": "Mode matches the carry and Echo set"
        }
      ],
      "presets": [
        {
          "id": "tune",
          "label": "Tune Strain",
          "sets": [
            {
              "name": "Reel of Spliced Memories",
              "pieces": 5
            }
          ],
          "echo": "Voidwing Moth",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Fusion DMG",
            "Fusion DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            125,
            125
          ],
          "talents": [
            "Resonance Liberation",
            "Forte Circuit",
            "Resonance Skill",
            "Basic Attack",
            "Intro Skill"
          ],
          "note": "For Qingxiao or Luuk. The active Echo costs 3; keep a separate 4-cost Crit piece. Around 125% is a conservative report starting point, not a proven universal minimum.",
          "role": "Hybrid",
          "activeCost": 3
        },
        {
          "id": "fusion",
          "label": "Fusion Burst",
          "sets": [
            {
              "name": "Chromatic Foam",
              "pieces": 5
            }
          ],
          "echo": "Reminiscence: Denia",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Fusion DMG",
            "Fusion DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            120,
            125
          ],
          "talents": [
            "Resonance Liberation",
            "Forte Circuit",
            "Resonance Skill",
            "Basic Attack",
            "Intro Skill"
          ],
          "note": "For Fusion Burst Aemeath. Match both characters’ modes. Published ER estimates vary with the third teammate; 120–125% is a practical initial test range.",
          "role": "Hybrid",
          "activeCost": 4
        }
      ],
      "talentNote": "Liberation first, Forte next. Do not overvalue small differences among the remaining nodes.",
      "investment": "Track the mode before spending on upgrades; two Echo presets serve different teams.",
      "substats": "ER to target → Crit → ATK% / Liberation DMG",
      "guide": {
        "focus": "Choose Tune Strain for Tune carries, Fusion Burst for Fusion Aemeath. Finish both Liberations and hand off directly; her Tune amplification depends on the recipient applying Strain.",
        "weapon": "Weapon changes affect her ER budget. Her set and mode should follow the team rather than a generic personal-damage ranking.",
        "note": "Use four grounded Breakdown Basics while learning; the faster aerial route is optional. The listed ER is conservative and team-dependent.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/denia/"
      },
      "benchmarks": {
        "atk": {
          "min": 2100,
          "max": 2300
        },
        "crit": {
          "min": 70,
          "max": 85
        },
        "critDmg": {
          "min": 270,
          "max": null
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Intro → Stagecraft Basic 4 → Phantom Bubble",
            "First Liberation → Breakdown Basics 1–4",
            "Banish Skills 1–2 → second Liberation",
            "Outro to the selected-mode carry"
          ]
        }
      }
    },
    {
      "id": "qingxiao",
      "name": "Qingxiao",
      "short": "Qingxiao",
      "element": "Aero",
      "weapon": "Sword",
      "role": "Carry",
      "subtitle": "Tune Strain carry",
      "tagline": "Build a complete Tune Strain core, not three isolated characters.",
      "page": 9,
      "talents": [
        "Forte Circuit",
        "Resonance Liberation",
        "Basic Attack",
        "Resonance Skill",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Mixed",
      "signature": "Glint of Clouds",
      "alternatives": [
        "Emerald of Genesis"
      ],
      "er": [
        115,
        120
      ],
      "aliases": [],
      "rotation": "Support setup → Denia or Lynae Outro → Qingxiao Intro → enhanced attack sequence → Judgement Skill → Heaven’s Reckoning → Liberation → Echo and handoff.",
      "must": "His set and weapon are built around Tune Strain interactions. A well-built specialist hybrid is part of the damage engine, not merely an optional ATK buffer.",
      "roster": "Denia and Mornye are also contested by Luuk. Finish one of those teams first instead of trying to build both around the same supports for simultaneous use.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 05\nAERO  /  SWORD\nQingxiao\nOn-field Tune Strain carry\nBuild the Tune Strain core, not just three individually strong characters.\nRECOMMENDED TEAMS\nSpecialist core\nQingxiao + Denia + Mornye\nFlexible alternative\nQingxiao + Lynae + Mornye\nSupport substitution\nShorekeeper can replace Mornye, with different buff coverage\nECHO BUILD\n5-piece Heart of Evil’s Purge. Active Echo: Calamity Effigy.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG, based on final combat stats\n3-costs\nAero DMG + ATK%; double Aero also works\n1-costs\nATK% + ATK%\nER target\nApproximately 115–120% as a conservative starting\nrange.\nSubstats\nEnergy Regen to target → Crit → ATK% → useful\ndamage bonuses\nTALENT LEVEL-UP ORDER\n01\nForte Circuit\n02\nResonance Liberation\n03\nBasic Attack\n04\nResonance Skill\n05\nIntro Skill\nForte and Liberation first. Add Basic levels before\npolishing low-impact Skill and Intro damage.\nWEAPONS\nSignature: Glint of Clouds. Permanent alternative:\nEmerald of Genesis.\nPLAY PATTERN\nSupport setup → Denia or Lynae Outro → Qingxiao Intro → enhanced attack sequence → Judgement Skill → Heaven’s\nReckoning → Liberation → Echo and handoff.\nMust know. His set and weapon are built around Tune Strain interactions. A well-built specialist hybrid is part of the\ndamage engine, not merely an optional ATK buffer.\nFor your roster: Denia and Mornye are also contested by Luuk. Finish one of those teams first instead of trying to build both\naround the same supports for simultaneous use.\nBuild, priorities and kit references: [05P] [05W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nQINGXIAO\n09 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/qingxiao/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/qingxiao-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "carry",
          "label": "Tune Strain carry",
          "sets": [
            {
              "name": "Heart of Evil’s Purge",
              "pieces": 5
            }
          ],
          "echo": "Calamity Effigy",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Aero DMG",
            "ATK% / Aero DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            115,
            120
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Resonance Skill",
            "Intro Skill"
          ],
          "note": "",
          "role": "Carry",
          "activeCost": 4
        }
      ],
      "talentNote": "Forte and Liberation, then Basic; reserve lower-impact nodes for later.",
      "investment": "Upgrade a functioning Denia / Mornye core before another partially built Tune carry.",
      "substats": "ER to target → Crit → ATK% → relevant damage bonuses",
      "guide": {
        "focus": "Use a Tune Strain setup and complete the judgement / reckoning sequence. Denia and Mornye support that job; changing either support changes the energy and damage assumptions.",
        "weapon": "Prefer useful substats when choosing ATK% versus a second Aero three-cost. A signature-based recommendation does not prove ownership.",
        "note": "His Crit target excludes temporary Echo bonuses. Test ER across repeated rotations, especially after changing the hybrid.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/qingxiao/"
      },
      "benchmarks": {
        "atk": {
          "min": 2100,
          "max": 2400
        },
        "crit": {
          "min": 55,
          "max": 80
        },
        "critDmg": {
          "min": 255,
          "max": 275
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Support setup → Denia or Lynae Outro",
            "Qingxiao Intro → enhanced attack sequence",
            "Judgement Skill → Heaven’s Reckoning",
            "Liberation → Echo and handoff"
          ]
        }
      }
    },
    {
      "id": "xuanling",
      "name": "Yangyang: Xuanling",
      "short": "Xuanling",
      "element": "Havoc",
      "weapon": "Sword",
      "role": "Carry",
      "subtitle": "Heavy Attack carry · Yangyang:SP",
      "tagline": "The five-star Havoc version, not original Aero Yangyang.",
      "page": 10,
      "talents": [
        "Forte Circuit",
        "Resonance Liberation",
        "Basic Attack",
        "Intro Skill",
        "Resonance Skill"
      ],
      "scaling": "ATK",
      "damage": "Heavy Attack",
      "signature": "Azure Oath",
      "alternatives": [
        "Emerald of Genesis"
      ],
      "er": [
        110,
        120
      ],
      "aliases": [
        "Yangyang SP",
        "Yangyang:SP",
        "Yangyang: Xuanling"
      ],
      "rotation": "Intro → Azure Basics → switch to Feather → Feather Heavy and plunge → Havoc in Bloom sequence → Liberation → switch back → Azure Heavy → Outro.",
      "must": "The set gives 20% Crit Rate during its active effect: count that before choosing a Crit main stat. Her enhanced attacks use Heavy Attack scaling even when the input looks like an ordinary attack chain.",
      "roster": "Use the normal stance cycle before learning double-Feather quickswap routes. Chisa and Suisui are your straightforward specialist support pairing.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 06\nHAVOC  /  SWORD\nYangyang: Xuanling\nHeavy Attack carry • Yangyang:SP\nThis is the five-star Havoc version, not the original Aero Yangyang.\nRECOMMENDED TEAMS\nPrimary recommendation\nXuanling + Chisa + Suisui\nListed-roster alternative\nXuanling + Rebecca + Chisa; competes with Lucy for Rebecca\nECHO BUILD\n5-piece Song of Feathered Trace. Active Echo: Thousand-Puppet\nPavilion.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG; account for the set’s Crit\nRate\n3-costs\nHavoc DMG + ATK% or Havoc DMG\n1-costs\nATK% + ATK%\nER target\nStart around 110–120%; increase if Liberation is\nlate in your actual loop.\nSubstats\nEnergy Regen to target → Crit → ATK% / Heavy\nAttack DMG\nTALENT LEVEL-UP ORDER\n01\nForte Circuit\n02\nResonance Liberation\n03\nBasic Attack\n04\nIntro Skill\n05\nResonance Skill\nSkill inputs remain essential for stance changes even\nthough leveling the Skill node is low priority.\nWEAPONS\nSignature: Azure Oath. Permanent alternative:\nEmerald of Genesis.\nPLAY PATTERN\nIntro → Azure Basics → switch to Feather → Feather Heavy and plunge → Havoc in Bloom sequence → Liberation →\nswitch back → Azure Heavy → Outro.\nMust know. The set gives 20% Crit Rate during its active effect: count that before choosing a Crit main stat. Her\nenhanced attacks use Heavy Attack scaling even when the input looks like an ordinary attack chain.\nFor your roster: Use the normal stance cycle before learning double-Feather quickswap routes. Chisa and Suisui are your\nstraightforward specialist support pairing.\nBuild, priorities and kit references: [06P] [06W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nYANGYANG: XUANLING\n10 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/yangyang-xuanling/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/yangyang-xuanling-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "carry",
          "label": "Heavy Attack carry",
          "sets": [
            {
              "name": "Song of Feathered Trace",
              "pieces": 5
            }
          ],
          "echo": "Thousand-Puppet Pavilion",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Havoc DMG",
            "ATK% / Havoc DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            110,
            120
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Intro Skill",
            "Resonance Skill"
          ],
          "note": "Count the set’s 20% in-combat Crit Rate before choosing your four-cost main stat.",
          "role": "Carry",
          "activeCost": 4
        }
      ],
      "talentNote": "Skill is low priority to level, but its input is essential for stance switching.",
      "investment": "Keep Rebecca available to Lucy when possible. No sequence ownership is assumed.",
      "substats": "ER to target → Crit → ATK% / Heavy Attack DMG",
      "guide": {
        "focus": "Learn both forms as one Heavy-focused window. Carry buffs must cover the Feather and Azure finishers; a quick mid-window swap can break the intended handoff.",
        "weapon": "Use the selected Havoc / ATK main stats, then compare real substats. Keep the team’s negative-status support and healing role explicit.",
        "note": "The ER benchmark varies from about 107% to 119% between source teams. Keep the conservative preset until the second loop is stable.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/yangyang-xuanling/"
      },
      "benchmarks": {
        "atk": {
          "min": 2100,
          "max": 2300
        },
        "crit": {
          "min": 65,
          "max": 80
        },
        "critDmg": {
          "min": 255,
          "max": 300
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Intro → Azure Basics → switch to Feather",
            "Feather Heavy and plunge → Havoc in Bloom sequence → Liberation",
            "switch back → Azure Heavy → Outro"
          ]
        }
      }
    },
    {
      "id": "hiyuki",
      "name": "Hiyuki",
      "short": "Hiyuki",
      "element": "Glacio",
      "weapon": "Sword",
      "role": "Carry",
      "subtitle": "Liberation / Glacio Chafe carry",
      "tagline": "Liberation and Basic come before Forte here.",
      "page": 11,
      "talents": [
        "Resonance Liberation",
        "Basic Attack",
        "Forte Circuit",
        "Resonance Skill",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Liberation",
      "signature": "Frostburn",
      "alternatives": [
        "Blazing Brilliance",
        "Emerald of Genesis"
      ],
      "er": [
        120,
        120
      ],
      "aliases": [],
      "rotation": "Intro → complete Dedication → special Heavy → first Liberation → build Frostheart → three Iai attacks → Bitterfrost Heavy → finishing Liberation.",
      "must": "At S0, getting at least two Snow Rust stacks is important. Her own application plus a Glacio Chafe or Havoc Bane teammate supplies the key synergy; Suisui and Chisa are useful for more than healing.",
      "roster": "Lucilla is listed as an outside-roster premium option, not assumed owned. Lynae + Suisui is the practical team to build from your list.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 07\nGLACIO  /  SWORD\nHiyuki\nLiberation / Glacio Chafe carry\nHer talent order is not the usual “Forte first” pattern.\nRECOMMENDED TEAMS\nFrom your requested roster\nHiyuki + Lynae + Suisui\nAlternative sustain\nHiyuki + Lynae + Chisa\nSpecialist outside your list\nHiyuki + Lucilla + Suisui\nECHO BUILD\n5-piece Wishes of Quiet Snowfall. Active Echo: Reminiscence:\nThrenodian – Voidborne Construct.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG; include the set’s 25% Crit\nRate\n3-costs\nGlacio DMG + Glacio DMG; one ATK% is close with\nsignature\n1-costs\nATK% + ATK%\nER target\nAbout 120%, then test repeat rotations.\nSubstats\nEnergy Regen to target → Crit → ATK% →\nLiberation DMG\nTALENT LEVEL-UP ORDER\n01\nResonance Liberation\n02\nBasic Attack\n03\nForte Circuit\n04\nResonance Skill\n05\nIntro Skill\nPrioritize Liberation and Basic. Intro is an inexpensive\nplace to save resources; Skill is secondary.\nWEAPONS\nSignature: Frostburn. Alternatives: Blazing\nBrilliance or Emerald of Genesis.\nPLAY PATTERN\nIntro → complete Dedication → special Heavy → first Liberation → build Frostheart → three Iai attacks → Bitterfrost\nHeavy → finishing Liberation.\nMust know. At S0, getting at least two Snow Rust stacks is important. Her own application plus a Glacio Chafe or\nHavoc Bane teammate supplies the key synergy; Suisui and Chisa are useful for more than healing.\nFor your roster: Lucilla is listed as an outside-roster premium option, not assumed owned. Lynae + Suisui is the practical team to\nbuild from your list.\nBuild, priorities and kit references: [07P] [07W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nHIYUKI\n11 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/hiyuki/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/hiyuki-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "carry",
          "label": "Glacio Chafe carry",
          "sets": [
            {
              "name": "Wishes of Quiet Snowfall",
              "pieces": 5
            }
          ],
          "echo": "Reminiscence: Threnodian – Voidborne Construct",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Glacio DMG",
            "Glacio DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            120,
            120
          ],
          "talents": [
            "Resonance Liberation",
            "Basic Attack",
            "Forte Circuit",
            "Resonance Skill",
            "Intro Skill"
          ],
          "note": "Count the set’s 25% Crit Rate. One ATK% three-cost is viable, particularly with the signature; compare complete sets.",
          "role": "Carry",
          "activeCost": 4
        }
      ],
      "talentNote": "Liberation, then Basic, then Forte. Do not follow a generic Forte-first rule.",
      "investment": "Lucilla is an outside-list specialist, not an assumed purchase or ownership.",
      "substats": "ER to target → Crit → ATK% → Liberation DMG",
      "guide": {
        "focus": "Complete Dedication before entering the first Liberation. Build Frostheart for all three Iai attacks, then finish with the Bitterfrost Heavy and final Liberation.",
        "weapon": "With her signature, Glacio plus ATK% can be competitive with two Glacio three-costs. Good substats should decide a close choice.",
        "note": "The Crit benchmark excludes conditional set bonuses. Keep 120% ER as a practical starting point.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/hiyuki/"
      },
      "benchmarks": {
        "atk": {
          "min": 1800,
          "max": 2200
        },
        "crit": {
          "min": 65,
          "max": 80
        },
        "critDmg": {
          "min": 210,
          "max": 260
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Intro → complete Dedication",
            "special Heavy → first Liberation",
            "build Frostheart → three Iai attacks",
            "Bitterfrost Heavy → finishing Liberation"
          ]
        }
      }
    },
    {
      "id": "jingran",
      "name": "Jingran",
      "short": "Jingran",
      "element": "Fusion",
      "weapon": "Broadblade",
      "role": "Carry",
      "subtitle": "HP-oriented Heavy Attack carry",
      "tagline": "Secure 50,000 HP and a repeatable four-Heavy window.",
      "page": 12,
      "talents": [
        "Forte Circuit",
        "Resonance Liberation",
        "Resonance Skill",
        "Basic Attack",
        "Intro Skill"
      ],
      "scaling": "HP → ATK",
      "damage": "Heavy Attack",
      "signature": "Thousandfold Deliverance",
      "alternatives": [
        "Radiance Cleaver"
      ],
      "er": [
        120,
        120
      ],
      "aliases": [],
      "rotation": "Intro → Liberation → Stardome Meander Heavy → Yin Basics 2–4 → Soul Raid Heavy → Scorching Yang Skill → Afterlife’s Guide Basic → Stardome Meander Heavy → Encroaching Yin Skill → Netherworld Traverse Basic → Soul Raid Heavy → Outro. Summon the main Echo at a convenient point.",
      "must": "The 50,000-HP threshold feeds several offensive conversions. The signature’s large HP stat changes which 4-cost main stats work. Count the set’s Crit Rate, weapon effects and Shorekeeper before adding more Crit Rate.",
      "roster": "Do not swap out halfway through his buffed window. The detailed S0 teaching rotation is on page 23; higher sequences can change the opener.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 08\nFUSION  /  BROADBLADE\nJingran\nHP-oriented Heavy Attack carry\nBuild toward 50,000 HP before copying a generic ATK carry setup.\nRECOMMENDED TEAMS\nYour primary team\nJingran + Iuno + Shorekeeper\nAllocation fallback\nJingran + Iuno + Verina; lower buff ceiling, frees Shorekeeper\nECHO BUILD\n5-piece Lamp of Nether Road. Active Echo: Myriad Snare: Rustfire\nChassis.\nCosts\n4–4–1–1–1\n4-cost\nTwo Crit pieces when HP allows; replace one or\nboth with HP% if needed\n3-costs\nNone in the recommended 4–4–1–1–1 layout\n1-costs\nHP% + HP% + HP%\nER target\nAbout 120% for the Iuno / Shorekeeper team.\nSubstats\nEnergy Regen → HP toward 50,000 → Crit →\nHeavy Attack DMG\nTALENT LEVEL-UP ORDER\n01\nForte Circuit\n02\nResonance Liberation\n03\nResonance Skill\n04\nBasic Attack\n05\nIntro Skill\nUnlock Hark the Dust and Trace the Vestige. Target\nForte 10, Liberation 10, then Skill 8–10.\nWEAPONS\nSignature: Thousandfold Deliverance. Radiance\nCleaver is an alternative, but requires rebuilding\nthe HP balance.\nPLAY PATTERN\nIuno Outro → Jingran Intro → Liberation before empowered Heavies → four Heavy finishers, rebuilding Qi between\nthem → Outro back to support.\nMust know. The 50,000-HP threshold feeds several offensive conversions. The signature’s large HP stat changes\nwhich 4-cost main stats work. Count the set’s Crit Rate, weapon effects and Shorekeeper before adding more Crit\nRate.\nFor your roster: Do not swap out halfway through his buffed window. The detailed S0 teaching rotation is on page 23; higher\nsequences can change the opener.\nBuild, priorities and kit references: [08P] [08W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nJINGRAN\n12 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/jingran/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/jingran-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "hp",
          "label": "HP checked toward 50,000 with intended loadout"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "carry",
          "label": "Signature / 50k HP carry",
          "sets": [
            {
              "name": "Lamp of Nether Road",
              "pieces": 5
            }
          ],
          "echo": "Myriad Snare: Rustfire Chassis",
          "costs": [
            4,
            4,
            1,
            1,
            1
          ],
          "mains": [
            "Crit DMG",
            "Crit DMG",
            "HP%",
            "HP%",
            "HP%"
          ],
          "er": [
            120,
            120
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Resonance Skill",
            "Basic Attack",
            "Intro Skill"
          ],
          "note": "Use after reaching 50,000 HP with the signature and intended buffs. Check the HP checkpoint before replacing HP main stats with Crit DMG.",
          "role": "Carry",
          "activeCost": 4
        },
        {
          "id": "hp-first",
          "label": "HP-first / alternative weapon",
          "sets": [
            {
              "name": "Lamp of Nether Road",
              "pieces": 5
            }
          ],
          "echo": "Myriad Snare: Rustfire Chassis",
          "costs": [
            4,
            4,
            1,
            1,
            1
          ],
          "mains": [
            "HP% / Crit DMG",
            "HP% / Crit DMG",
            "HP%",
            "HP%",
            "HP%"
          ],
          "er": [
            120,
            120
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Resonance Skill",
            "Basic Attack",
            "Intro Skill"
          ],
          "note": "A transitional loadout for an alternative weapon or unfinished HP checkpoint. Choose HP four-costs only as needed to reach 50,000, then rebalance into Crit.",
          "role": "Carry",
          "activeCost": 4
        }
      ],
      "talentNote": "Unlock Hark the Dust and Trace the Vestige. Forte 10 → Liberation 10 → Skill 8–10.",
      "investment": "The default action route is S0. S2 changes the opener; do not silently copy that route into an S0 build.",
      "substats": "ER to target → HP toward 50,000 → Crit → Heavy Attack DMG",
      "guide": {
        "focus": "Build around the HP-to-ATK conversion and Heavy window. Reach 50,000 HP in the intended loadout, then improve Crit and Heavy damage. A shield-producing support Echo helps maintain his weapon condition.",
        "weapon": "Thousandfold Deliverance supplies substantial HP, enabling double Crit DMG four-costs. Without it, use HP main stats until the conversion checkpoint is met.",
        "note": "The Crit benchmark excludes conditional Echo and signature bonuses. A 120% ER starting point suits Iuno / Shorekeeper.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/jingran/"
      },
      "benchmarks": {
        "hp": {
          "min": 50000,
          "max": 50000
        },
        "crit": {
          "min": 50,
          "max": 80
        },
        "critDmg": {
          "min": 260,
          "max": 340
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Intro → Liberation → Stardome Meander Heavy",
            "Yin Basics 2–4 → Soul Raid Heavy → Scorching Yang Skill",
            "Afterlife’s Guide Basic → Stardome Meander Heavy → Encroaching Yin Skill",
            "Netherworld Traverse Basic → Soul Raid Heavy → Outro. Summon the main Echo at a convenient point"
          ]
        }
      }
    },
    {
      "id": "lucy",
      "name": "Lucy",
      "short": "Lucy",
      "element": "Spectro",
      "weapon": "Pistols",
      "role": "Carry",
      "subtitle": "Heavy Attack / Hack carry",
      "tagline": "Your confirmed S2. Finish the Lucy–Rebecca core.",
      "page": 13,
      "talents": [
        "Resonance Liberation",
        "Basic Attack",
        "Forte Circuit",
        "Resonance Skill",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Heavy Attack",
      "signature": "Spectral Trigger",
      "alternatives": [
        "Lux & Umbra"
      ],
      "er": [
        125,
        125
      ],
      "aliases": [],
      "rotation": "Open once with Liberation’s first five programs, then set up healer and Rebecca. Loop: Intro → Payload → Pulse Interference → Basics 2–4 → Deadlock → Thread 1–4 → Dual-threading → Multi-threading → enhanced Liberation (first five programs) → Outro.",
      "must": "Rebecca gives Lucy the fully ramped Heavy Attack amplification immediately. S2 adds a follow-up after Pulse Interference and strengthens SQL-related output. Keep the same core synergy rather than replacing Rebecca with a generic buffer.",
      "roster": "The one-piece Adam Smasher set is intentional. Do not replace it with a generic five-piece Spectro set merely to make the loadout look conventional.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 09\nSPECTRO  /  PISTOLS\nLucy\nHeavy Attack / Hack carry • your S2\nFinish the Lucy–Rebecca core before treating another carry as mandatory.\nRECOMMENDED TEAMS\nPremium default\nLucy + Rebecca + Shorekeeper\nNo-overlap allocation\nLucy + Rebecca + Verina\nConditional alternative\nLucy + Rebecca + Mornye at S1 or higher\nECHO BUILD\n1-piece Shadow of Shattered Dreams + 2-piece Celestial Light +\n2-piece Eternal Radiance. Active Echo: Reminiscence – Nightmare:\nAdam Smasher.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG\n3-costs\nSpectro DMG + Spectro DMG\n1-costs\nATK% + ATK%\nER target\nAround 125%; do not sacrifice repeatable Liberation\nfor a prettier Crit ratio.\nSubstats\nEnergy Regen to target → Crit → ATK% → Heavy\nAttack DMG\nTALENT LEVEL-UP ORDER\n01\nResonance Liberation\n02\nBasic Attack\n03\nForte Circuit\n04\nResonance Skill\n05\nIntro Skill\nLiberation and Basic are the first major levels. S2\ndoes not require a different main-stat template.\nWEAPONS\nSignature: Spectral Trigger. Lux & Umbra is a\nstrong existing-weapon alternative.\nPLAY PATTERN\nHealer setup → Rebecca’s complete resource / Outro sequence → Lucy’s Hack and enhanced Heavy window → finisher\n→ return to support.\nMust know. Rebecca gives Lucy the fully ramped Heavy Attack amplification immediately. S2 adds a follow-up after\nPulse Interference and strengthens SQL-related output. Keep the same core synergy rather than replacing Rebecca\nwith a generic buffer.\nFor your roster: The one-piece Adam Smasher set is intentional. Do not replace it with a generic five-piece Spectro set merely to\nmake the loadout look conventional.\nBuild, priorities and kit references: [09P] [09W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nLUCY\n13 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/lucy/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/lucy-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "carry",
          "label": "S2 Lucy carry",
          "sets": [
            {
              "name": "Shadow of Shattered Dreams",
              "pieces": 1
            },
            {
              "name": "Celestial Light",
              "pieces": 2
            },
            {
              "name": "Eternal Radiance",
              "pieces": 2
            }
          ],
          "echo": "Reminiscence – Nightmare: Adam Smasher",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Spectro DMG",
            "Spectro DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            125,
            125
          ],
          "talents": [
            "Resonance Liberation",
            "Basic Attack",
            "Forte Circuit",
            "Resonance Skill",
            "Intro Skill"
          ],
          "note": "The 1 + 2 + 2 set split is intentional. S2 does not require different main stats.",
          "role": "Carry",
          "activeCost": 4
        }
      ],
      "talentNote": "Liberation and Basic first. Finish her weapon and carry build before marginal healer damage.",
      "investment": "S2 is confirmed. Rebecca’s fixed buff percentages do not increase just by leveling Rebecca to 90.",
      "substats": "ER to target → Crit → ATK% → Heavy Attack DMG",
      "guide": {
        "focus": "Open with Liberation’s first five programs before the supports rotate. On the return, build TCP / Root Access, complete both enhanced Heavies, and finish with enhanced Liberation.",
        "weapon": "Rebecca is the core partner for this Hack setup. An alternative weapon should preserve the full rotation and energy budget.",
        "note": "S2 unlocks seven programs, but the extra two add utility rather than replacing the first-five damage plan. Targets exclude Adam Smasher’s active Crit.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/lucy/"
      },
      "benchmarks": {
        "atk": {
          "min": 2100,
          "max": 2200
        },
        "crit": {
          "min": 65,
          "max": 80
        },
        "critDmg": {
          "min": 210,
          "max": null
        }
      },
      "routes": {
        "carry": {
          "loop": [
            "Intro → Payload → Pulse Interference",
            "Basics 2–4 → Deadlock",
            "Thread Basics 1–4 → Dual-threading → Multi-threading",
            "Enhanced Liberation: first five programs → Outro"
          ],
          "opener": [
            "Liberation: first five programs → swap to support",
            "Healer setup → Rebecca setup → direct Lucy Intro",
            "Payload → Pulse Interference → Basics 2–4 → Deadlock",
            "Thread 1–4 → Dual-threading → Multi-threading",
            "Enhanced Liberation: first five programs → Outro"
          ]
        }
      }
    },
    {
      "id": "rebecca",
      "name": "Rebecca",
      "short": "Rebecca",
      "element": "Electro",
      "weapon": "Pistols",
      "role": "Hybrid",
      "subtitle": "Lucy specialist · damaging hybrid",
      "tagline": "Use an offensive build even while supporting Lucy.",
      "page": 14,
      "talents": [
        "Forte Circuit",
        "Resonance Liberation",
        "Basic Attack",
        "Intro Skill",
        "Resonance Skill"
      ],
      "scaling": "ATK",
      "damage": "Basic Attack",
      "signature": "Skull Thrasher",
      "alternatives": [
        "Static Mist"
      ],
      "er": [
        120,
        130
      ],
      "aliases": [],
      "rotation": "Intro → build and spend Fervor through enhanced attacks → final Heavy → Bell → Liberation → Outro directly to Lucy.",
      "must": "Bell’s team damage buff can disappear after taking three hits. Cast it late. Her own damage favors Basic Attack bonuses even though the recipient wants Heavy Attack amplification.",
      "roster": "Use Moonlit for a straightforward Lucy support build. A strong offensive mixed set remains viable; compare complete team runs, not just Rebecca’s damage number.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 10\nELECTRO  /  PISTOLS\nRebecca\nLucy specialist / damaging hybrid\nFor your S2 Lucy, she deserves real offensive investment.\nRECOMMENDED TEAMS\nPrimary assignment\nLucy + Rebecca + Shorekeeper or Verina\nAlternate assignment\nXuanling + Rebecca + Chisa\nECHO BUILD\nTeam support: 5-piece Moonlit Clouds + Bell-Borne Geochelone.\nPersonal damage: 1-piece Shadow of Shattered Dreams + 2-piece\nVoid Thunder + 2-piece Lingering Tunes, with Adam Smasher\nactive.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG\n3-costs\nElectro DMG + Electro DMG\n1-costs\nATK% + ATK%\nER target\nRoughly 120–130%; weapon and shortened loops\nchange the requirement.\nSubstats\nEnergy Regen to target → Crit → Basic Attack DMG\n/ ATK%\nTALENT LEVEL-UP ORDER\n01\nForte Circuit\n02\nResonance Liberation\n03\nBasic Attack\n04\nIntro Skill\n05\nResonance Skill\nForte and Liberation first. Leveling her does not\nincrease the fixed percentages of her Outro buff.\nWEAPONS\nSignature: Skull Thrasher. Permanent alternative:\nStatic Mist.\nPLAY PATTERN\nIntro → build and spend Fervor through enhanced attacks → final Heavy → Bell → Liberation → Outro directly to Lucy.\nMust know. Bell’s team damage buff can disappear after taking three hits. Cast it late. Her own damage favors Basic\nAttack bonuses even though the recipient wants Heavy Attack amplification.\nFor your roster: Use Moonlit for a straightforward Lucy support build. A strong offensive mixed set remains viable; compare\ncomplete team runs, not just Rebecca’s damage number.\nBuild, priorities and kit references: [10P] [10W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nREBECCA\n14 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/rebecca/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/rebecca-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "support",
          "label": "Lucy support",
          "sets": [
            {
              "name": "Moonlit Clouds",
              "pieces": 5
            }
          ],
          "echo": "Bell-Borne Geochelone",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Electro DMG",
            "Electro DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            120,
            130
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Intro Skill",
            "Resonance Skill"
          ],
          "note": "Cast Bell late; the buff ends after taking three hits. Rebecca herself favors Basic Attack damage, although her Outro supports Heavy damage.",
          "role": "Hybrid",
          "activeCost": 4
        },
        {
          "id": "damage",
          "label": "Personal damage",
          "sets": [
            {
              "name": "Shadow of Shattered Dreams",
              "pieces": 1
            },
            {
              "name": "Void Thunder",
              "pieces": 2
            },
            {
              "name": "Lingering Tunes",
              "pieces": 2
            }
          ],
          "echo": "Reminiscence – Nightmare: Adam Smasher",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Electro DMG",
            "Electro DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            120,
            130
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Intro Skill",
            "Resonance Skill"
          ],
          "note": "Compare full-team clears against Moonlit, not only Rebecca’s own damage.",
          "role": "Hybrid",
          "activeCost": 4
        }
      ],
      "talentNote": "Forte and Liberation deserve real investment in your S2 Lucy team.",
      "investment": "Her level improves her own damage, not the fixed percentage on her Outro.",
      "substats": "ER to target → Crit → Basic Attack DMG / ATK%",
      "guide": {
        "focus": "Separate her opener from later loops. Extra Guts Basics in the opener establish a ten-Concerto carryover, allowing the Fireworks finisher to be swap-cancelled on subsequent rotations.",
        "weapon": "Bell-Borne helps the support setup; cancel it with Liberation after the final Heavy. The damage preset trades team utility for personal damage.",
        "note": "Deliver her Outro directly to Lucy. Her Crit target excludes Huntress bonuses; source-team ER is around 118%, while the preset retains more headroom.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/rebecca/"
      },
      "benchmarks": {
        "atk": {
          "min": 2000,
          "max": 2300
        },
        "crit": {
          "min": 65,
          "max": 80
        },
        "critDmg": {
          "min": 210,
          "max": 280
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Intro → plunge → Skill → Tactical Dodge",
            "Guts Basic 2 → Forte Guts Heavy → Guts Heavy",
            "Bell-Borne → Liberation",
            "Boom! Fireworks → swap / Outro directly to carry"
          ],
          "opener": [
            "Intro → Guts Basic 1 → Tactical Dodge",
            "Guts Basics 2–3 → Guts Heavy → Forte Guts Heavy → Guts Heavy",
            "Bell-Borne → Liberation",
            "Boom! Fireworks → swap / Outro directly to carry"
          ]
        }
      }
    },
    {
      "id": "shorekeeper",
      "name": "Shorekeeper",
      "short": "Shorekeeper",
      "element": "Spectro",
      "weapon": "Rectifier",
      "role": "Sustain",
      "subtitle": "HP healer · Crit buffer",
      "tagline": "Reach 250% effective ER, then choose comfort or damage.",
      "page": 15,
      "talents": [
        "Resonance Liberation",
        "Resonance Skill",
        "Intro Skill",
        "Forte Circuit",
        "Basic Attack"
      ],
      "scaling": "HP",
      "damage": "Intro",
      "signature": "Stellar Symphony",
      "alternatives": [
        "Variation"
      ],
      "er": [
        250,
        250
      ],
      "aliases": [
        "The Shorekeeper"
      ],
      "rotation": "Build Concerto → Liberation → Fallacy near the handoff → Outro to hybrid → hybrid Outro to carry → return with enhanced Intro after the carry’s window.",
      "must": "Two team Intros upgrade the field to its full Crit-buff stage. At S0, her enhanced Intro ends that field; S1 prevents this. S2’s ATK buff is not a 40% increase to final team damage.",
      "roster": "Build a reliable healing set before pursuing Crit DMG. You listed Shorekeeper twice; this single profile covers both uses.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 11\nSPECTRO  /  RECTIFIER\nShorekeeper\nHP healer / Crit and damage buffer\nReach effective ER, then choose healing comfort or personal damage.\nRECOMMENDED TEAMS\nFirst assignment\nJingran + Iuno + Shorekeeper\nOther strong uses\nLucy + Rebecca + Shorekeeper; Iuno + Lynae + Shorekeeper\nECHO BUILD\n5-piece Rejuvenating Glow. Active Echo: Fallacy of No Return.\nCosts\n4–3–3–1–1\n4-cost\nHealing Bonus for comfort; Crit DMG for enhanced\nIntro damage\n3-costs\nEnergy Regen + Energy Regen; Spectro only after\nmeeting the target\n1-costs\nHP% + HP%\nER target\n250% effective: usually 230% before Fallacy and\nSelf Gravitation, each adding 10%.\nSubstats\nEnergy Regen first → HP% for healing or Crit DMG\nfor damage\nTALENT LEVEL-UP ORDER\n01\nResonance Liberation\n02\nResonance Skill\n03\nIntro Skill\n04\nForte Circuit\n05\nBasic Attack\nPractical healing-first order. Once healing is\nadequate, prioritize Intro for damage. Crit buff\nstrength comes from ER, not talent level.\nWEAPONS\nSignature: Stellar Symphony. Excellent practical\nalternative: Variation.\nPLAY PATTERN\nBuild Concerto → Liberation → Fallacy near the handoff → Outro to hybrid → hybrid Outro to carry → return with\nenhanced Intro after the carry’s window.\nMust know. Two team Intros upgrade the field to its full Crit-buff stage. At S0, her enhanced Intro ends that field; S1\nprevents this. S2’s ATK buff is not a 40% increase to final team damage.\nFor your roster: Build a reliable healing set before pursuing Crit DMG. You listed Shorekeeper twice; this single profile covers\nboth uses.\nBuild, priorities and kit references: [11P] [11W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nSHOREKEEPER\n15 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/the-shorekeeper/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/shorekeeper-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Healing and buff conditions are reliable"
        }
      ],
      "presets": [
        {
          "id": "comfort",
          "label": "Healing / comfort",
          "sets": [
            {
              "name": "Rejuvenating Glow",
              "pieces": 5
            }
          ],
          "echo": "Fallacy of No Return",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Healing Bonus",
            "Energy Regen",
            "Energy Regen",
            "HP%",
            "HP%"
          ],
          "er": [
            250,
            250
          ],
          "talents": [
            "Resonance Liberation",
            "Resonance Skill",
            "Intro Skill",
            "Forte Circuit",
            "Basic Attack"
          ],
          "note": "250% effective ER is the buff cap. Around 230% before two separate active 10% bonuses works only when those bonuses are not already included. This is a healing-first editorial talent order.",
          "role": "Sustain",
          "activeCost": 4
        },
        {
          "id": "damage",
          "label": "Enhanced Intro damage",
          "sets": [
            {
              "name": "Rejuvenating Glow",
              "pieces": 5
            }
          ],
          "echo": "Fallacy of No Return",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit DMG",
            "Energy Regen",
            "Energy Regen / Spectro DMG",
            "HP%",
            "HP%"
          ],
          "er": [
            250,
            250
          ],
          "talents": [
            "Intro Skill",
            "Resonance Skill",
            "Basic Attack",
            "Forte Circuit",
            "Resonance Liberation"
          ],
          "note": "Published damage-oriented talent order. Only replace ER after the effective threshold and sustain are covered. Do not sacrifice healing you need for a higher Intro number.",
          "role": "Sustain",
          "activeCost": 4
        }
      ],
      "talentNote": "Healing-first: Liberation and Skill. Damage polish: Intro. Her Crit buff scales with effective ER, not talent level.",
      "investment": "S1 is primarily field comfort / uptime. S2 adds ATK; it is not a flat 40% final team-damage increase.",
      "substats": "ER to effective 250% → HP% for sustain or Crit DMG for Intro",
      "guide": {
        "focus": "Reach 250% effective ER for the full buff condition. Keep displayed ER separate from active bonuses, then improve HP for healing and Crit DMG for her enhanced Intro.",
        "weapon": "Fallacy and her passive can supply twenty ER points not shown in an idle panel. A 230% display plus those confirmed bonuses reaches 250%.",
        "note": "Her enhanced Intro is guaranteed to Crit; ordinary Crit Rate is a low priority for that hit. Only add bonuses not already displayed.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/the-shorekeeper/"
      },
      "benchmarks": {
        "hp": {
          "min": 20000,
          "max": 35000
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Build Concerto → Liberation",
            "Fallacy near the handoff → Outro to hybrid",
            "hybrid Outro to carry → return with enhanced Intro after the carry’s window"
          ]
        }
      }
    },
    {
      "id": "luuk",
      "name": "Luuk Herssen",
      "short": "Luuk",
      "element": "Spectro",
      "weapon": "Gauntlets",
      "role": "Carry",
      "subtitle": "Basic Attack / Tune Strain carry",
      "tagline": "His Liberation button deals Basic Attack-tagged damage.",
      "page": 16,
      "talents": [
        "Resonance Skill",
        "Resonance Liberation",
        "Basic Attack",
        "Forte Circuit",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Basic Attack",
      "signature": "Daybreaker’s Spine",
      "alternatives": [
        "Pulsation Bracer"
      ],
      "er": [
        125,
        130
      ],
      "aliases": [
        "Luuk Herssen"
      ],
      "rotation": "Support Outro → Luuk Intro with Ichor Flow → enhanced Skill and aerial attack sequence → finishing Ichor plunge → Liberation → Outro.",
      "must": "Finish the Ichor sequence before the Liberation. Do not interrupt the carry window with an unnecessary swap. A 3-cost active Echo does not mean dropping the separate 4-cost Crit piece.",
      "roster": "Do not farm Liberation DMG substats just because the finishing button is Liberation. This team competes directly with Qingxiao for Denia and Mornye.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 12\nSPECTRO  /  GAUNTLETS\nLuuk Herssen\nBasic Attack / Tune Strain carry\nHis Liberation is leveled as Liberation but deals Basic Attack damage.\nRECOMMENDED TEAMS\nSpecialist core\nLuuk + Denia + Mornye\nFlexible alternative\nLuuk + Lynae + Mornye\nECHO BUILD\n5-piece Rite of Gilded Revelation. Active Echo: Twin Nova:\nNebulous Cannon, a 3-cost Echo.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG\n3-costs\nSpectro DMG + ATK%; double Spectro also viable\n1-costs\nATK% + ATK%\nER target\nStart at 125–130%; tighter tested rotations may use\nless.\nSubstats\nEnergy Regen to target → Crit → ATK% / Basic\nAttack DMG\nTALENT LEVEL-UP ORDER\n01\nResonance Skill\n02\nResonance Liberation\n03\nBasic Attack\n04\nForte Circuit\n05\nIntro Skill\nSkill and Liberation are the important first pair. Basic\nAttack damage bonuses apply to his Liberation\ndamage.\nWEAPONS\nSignature: Daybreaker’s Spine. Strong permanent\nalternative: Pulsation Bracer.\nPLAY PATTERN\nSupport Outro → Luuk Intro with Ichor Flow → enhanced Skill and aerial attack sequence → finishing Ichor plunge →\nLiberation → Outro.\nMust know. Finish the Ichor sequence before the Liberation. Do not interrupt the carry window with an unnecessary\nswap. A 3-cost active Echo does not mean dropping the separate 4-cost Crit piece.\nFor your roster: Do not farm Liberation DMG substats just because the finishing button is Liberation. This team competes\ndirectly with Qingxiao for Denia and Mornye.\nBuild, priorities and kit references: [12P] [12W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nLUUK HERSSEN\n16 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/luuk-herssen/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/luuk-herssen-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "carry",
          "label": "Tune Strain carry",
          "sets": [
            {
              "name": "Rite of Gilded Revelation",
              "pieces": 5
            }
          ],
          "echo": "Twin Nova: Nebulous Cannon",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Spectro DMG",
            "ATK% / Spectro DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            125,
            130
          ],
          "talents": [
            "Resonance Skill",
            "Resonance Liberation",
            "Basic Attack",
            "Forte Circuit",
            "Intro Skill"
          ],
          "note": "The active Echo is 3-cost. The finishing Liberation deals Basic Attack-tagged damage; do not farm Liberation DMG substats just because of the input name.",
          "role": "Carry",
          "activeCost": 3
        }
      ],
      "talentNote": "Skill and Liberation are the first pair. Distinguish the leveled node from its damage tag.",
      "investment": "Choose Luuk or Qingxiao for the same Denia / Mornye core when both teams must be usable simultaneously.",
      "substats": "ER to target → Crit → ATK% / Basic Attack DMG",
      "guide": {
        "focus": "Build around his enhanced aerial / Basic window and complete the Ichor finisher. Tune support should set him up before his Intro instead of interrupting that window.",
        "weapon": "Spectro plus ATK% versus double Spectro is a substat-sensitive choice. Keep the complete Echo effect and weapon passive in the comparison.",
        "note": "Source-team ER varies around 118–125%. The preset keeps a small buffer; test with the teammates you actually use.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/luuk-herssen/"
      },
      "benchmarks": {
        "atk": {
          "min": 2100,
          "max": 3000
        },
        "crit": {
          "min": 65,
          "max": 80
        },
        "critDmg": {
          "min": 210,
          "max": 260
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Support Outro → Luuk Intro with Ichor Flow",
            "enhanced Skill and aerial attack sequence → finishing Ichor plunge",
            "Liberation → Outro"
          ]
        }
      }
    },
    {
      "id": "chisa",
      "name": "Chisa",
      "short": "Chisa",
      "element": "Havoc",
      "weapon": "Broadblade",
      "role": "Hybrid",
      "subtitle": "Negative-status hybrid / healer",
      "tagline": "Her Echo set changes with her place in the team.",
      "page": 17,
      "talents": [
        "Forte Circuit",
        "Resonance Liberation",
        "Basic Attack",
        "Resonance Skill",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Liberation",
      "signature": "Kumokiri",
      "alternatives": [
        "Radiance Cleaver",
        "Lustrous Razor"
      ],
      "er": [
        125,
        125
      ],
      "aliases": [],
      "rotation": "Apply Unseen Snare → build Forte → Liberation → enhanced Skill / chainsaw sequence → Eradication → Outro to the damage dealer.",
      "must": "Her S2’s 50% All-Attribute DMG Bonus requires Thread of Bane on the recipient. This is a negative-status condition, not a universal buff for arbitrary teams.",
      "roster": "Keep the full offensive stat template while supporting. Farm the personal-damage set only after the team’s buffing and healing roles are covered.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 13\nHAVOC  /  BROADBLADE\nChisa\nNegative-status hybrid / healer\nHer set follows her team slot: hybrid buffer or sole healer.\nRECOMMENDED TEAMS\nHybrid with another healer\nXuanling + Chisa + Suisui\nSole healer\nAemeath + Denia + Chisa\nHsin alternative\nHsin + Electro Rover + Chisa; Rover is outside the requested list\nECHO BUILD\nWith Suisui: 5-piece Moonlit Clouds + Impermanence Heron. As\nsole healer: 5-piece Rejuvenating Glow + Fallacy. Personal\ndamage: 3-piece Thread of Severed Fate + 2-piece Havoc Eclipse,\nwith Reminiscence: Threnodian – Leviathan.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG\n3-costs\nHavoc DMG + Havoc DMG\n1-costs\nATK% + ATK%\nER target\nAround 125% or enough to Liberation every\nrotation.\nSubstats\nEnergy Regen to target → Crit → ATK% →\nLiberation DMG\nTALENT LEVEL-UP ORDER\n01\nForte Circuit\n02\nResonance Liberation\n03\nBasic Attack\n04\nResonance Skill\n05\nIntro Skill\nForte and Liberation first. Rejuvenating Glow does\nnot automatically mean using an HP or Healing main\nstat.\nWEAPONS\nSignature: Kumokiri. Alternatives: Radiance\nCleaver or Lustrous Razor.\nPLAY PATTERN\nApply Unseen Snare → build Forte → Liberation → enhanced Skill / chainsaw sequence → Eradication → Outro to the\ndamage dealer.\nMust know. Her S2’s 50% All-Attribute DMG Bonus requires Thread of Bane on the recipient. This is a\nnegative-status condition, not a universal buff for arbitrary teams.\nFor your roster: Keep the full offensive stat template while supporting. Farm the personal-damage set only after the team’s\nbuffing and healing roles are covered.\nBuild, priorities and kit references: [13P] [13W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nCHISA\n17 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/chisa/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/chisa-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "hybrid",
          "label": "With Suisui / hybrid",
          "sets": [
            {
              "name": "Moonlit Clouds",
              "pieces": 5
            }
          ],
          "echo": "Impermanence Heron",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Havoc DMG",
            "Havoc DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            125,
            125
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Resonance Skill",
            "Intro Skill"
          ],
          "note": "For Xuanling + Chisa + Suisui. Another teammate covers healing / support effects.",
          "role": "Hybrid",
          "activeCost": 4
        },
        {
          "id": "healer",
          "label": "Sole-healer slot",
          "sets": [
            {
              "name": "Rejuvenating Glow",
              "pieces": 5
            }
          ],
          "echo": "Fallacy of No Return",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Havoc DMG",
            "Havoc DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            125,
            125
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Resonance Skill",
            "Intro Skill"
          ],
          "note": "For Aemeath + Denia + Chisa. Keep an offensive stat template; the support set does not imply an HP build.",
          "role": "Sustain",
          "activeCost": 4
        },
        {
          "id": "damage",
          "label": "Personal damage",
          "sets": [
            {
              "name": "Thread of Severed Fate",
              "pieces": 3
            },
            {
              "name": "Havoc Eclipse",
              "pieces": 2
            }
          ],
          "echo": "Reminiscence: Threnodian – Leviathan",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Havoc DMG",
            "Havoc DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            125,
            125
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Resonance Skill",
            "Intro Skill"
          ],
          "note": "Only after the team’s healing and buff-set roles are covered.",
          "role": "Hybrid",
          "activeCost": 4
        }
      ],
      "talentNote": "Forte and Liberation first. Support sets still use offensive main stats.",
      "investment": "S2 gives its bonus only to recipients with Thread of Bane. It does not universally buff arbitrary teams.",
      "substats": "ER to target → Crit → ATK% → Liberation DMG",
      "guide": {
        "focus": "Choose hybrid or sole-healer deliberately. The healing preset must cover the team’s survival; the damage preset does not automatically replace a dedicated support.",
        "weapon": "Trailblazing Star suits HP-based carry support; Moonlit or a healing set can suit ATK carries. Pick the recipient before optimizing personal damage.",
        "note": "Use 125% ER as a starting point and test both healing uptime and the second Liberation loop.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/chisa/"
      },
      "benchmarks": {
        "atk": {
          "min": 2000,
          "max": 2500
        },
        "crit": {
          "min": 65,
          "max": 80
        },
        "critDmg": {
          "min": 210,
          "max": 255
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Apply Unseen Snare → build Forte",
            "Liberation → enhanced Skill / chainsaw sequence",
            "Eradication → Outro to the damage dealer"
          ]
        }
      }
    },
    {
      "id": "hsin",
      "name": "Hsin",
      "short": "Hsin",
      "element": "Electro",
      "weapon": "Rectifier",
      "role": "Carry",
      "subtitle": "Skill-damage carry · Flare / Unison",
      "tagline": "Select a mode before following a rotation.",
      "page": 18,
      "talents": [
        "Forte Circuit",
        "Resonance Liberation",
        "Basic Attack",
        "Resonance Skill",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Skill",
      "signature": "Blooming Jadehaven",
      "alternatives": [
        "Lethean Elegy",
        "Stringmaster"
      ],
      "er": [
        115,
        120
      ],
      "aliases": [],
      "rotation": "Build Forte → Realm Protector Heavy → Formshift / enhanced state → complete the enhanced attacks and four Pillars → Stilling All Horizons → final Liberation. Use the selected mode’s full source route; Flare and Unison do not share identical Intro / swap logic.",
      "must": "Heart of Sworn Vigil supplies 15% Crit Rate. Unison uses different entry and swap logic; a Flare rotation should not be copied unchanged into that mode.",
      "roster": "Build the Electro Rover support core first. Do not justify investment solely using projected Suoming teams or old beta damage-per-rotation comparisons.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 14\nELECTRO  /  RECTIFIER\nHsin\nSkill-damage carry • Flare / Unison modes\nUse the live 3.7 build; old prerelease assumptions are not the baseline.\nRECOMMENDED TEAMS\nCurrent Flare core\nHsin + Electro Rover + Suisui\nAlternative healer\nHsin + Electro Rover + Chisa\nRoster limitation\nElectro Rover is outside your requested list; do not replace this role at random\nECHO BUILD\n5-piece Heart of Sworn Vigil. Active Echo: Reminiscence: Suhsin\nthe Inevitable.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG\n3-costs\nElectro DMG + Electro DMG; one ATK% is viable\n1-costs\nATK% + ATK%\nER target\nStart at 115–120%; optimized Flare loops may work\naround 110%.\nSubstats\nEnergy Regen to target → Crit → ATK% / Skill DMG\nTALENT LEVEL-UP ORDER\n01\nForte Circuit\n02\nResonance Liberation\n03\nBasic Attack\n04\nResonance Skill\n05\nIntro Skill\nThis is Flare order. Unison: Forte → Liberation →\nIntro → Basic → Skill.\nWEAPONS\nSignature: Blooming Jadehaven. Alternative:\nLethean Elegy; Stringmaster is a stat-stick option.\nPLAY PATTERN\nBuild Forte → Realm Protector Heavy → Formshift → enhanced combo and four Pillars → Stilling All Horizons → final\nLiberation. Use the route for your selected mode.\nMust know. Heart of Sworn Vigil supplies 15% Crit Rate. Unison uses different entry and swap logic; a Flare rotation\nshould not be copied unchanged into that mode.\nFor your roster: Build the Electro Rover support core first. Do not justify investment solely using projected Suoming teams or\nold beta damage-per-rotation comparisons.\nBuild, priorities and kit references: [14P] [14W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nHSIN\n18 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/hsin/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/hsin-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "flare",
          "label": "Electro Flare",
          "sets": [
            {
              "name": "Heart of Sworn Vigil",
              "pieces": 5
            }
          ],
          "echo": "Reminiscence: Suhsin the Inevitable",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Electro DMG",
            "Electro DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            115,
            120
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Resonance Skill",
            "Intro Skill"
          ],
          "note": "Current published Flare build, not the early beta DPR ranking. The guide estimates roughly 110% ER in its Electro Rover / Suisui test; the report keeps a margin. Count the set’s 15% Crit Rate.",
          "role": "Carry",
          "activeCost": 4
        },
        {
          "id": "unison",
          "label": "Unison",
          "sets": [
            {
              "name": "Heart of Sworn Vigil",
              "pieces": 5
            }
          ],
          "echo": "Reminiscence: Suhsin the Inevitable",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Electro DMG",
            "Electro DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            115,
            120
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Intro Skill",
            "Basic Attack",
            "Resonance Skill"
          ],
          "note": "Different Intro/swap logic and talent order. No matched live whole-team DPS claim is provided. Suoming remains an external planning option, not assumed owned.",
          "role": "Carry",
          "activeCost": 4
        }
      ],
      "talentNote": "Forte and Liberation first. Flare places Basic ahead of Intro; Unison does the opposite.",
      "investment": "No beta-only percentage or speculative whole-team damage ranking is used to justify spending.",
      "substats": "ER to target → Crit → ATK% / Skill DMG",
      "guide": {
        "focus": "Flare and Unison require different handoffs. Flare fits a normal support → hybrid → carry loop. Unison needs a compatible secondary and two Intros per full cycle.",
        "weapon": "Electro Rover is the practical Flare partner. Jinhsi is the source guide’s Unison partner and is outside this profile list.",
        "note": "Do not use the Flare practice route for Unison. Crit benchmarks exclude conditional Echo bonuses; use 115–120% ER until tested.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/hsin/"
      },
      "benchmarks": {
        "atk": {
          "min": 2100,
          "max": 2500
        },
        "crit": {
          "min": 65,
          "max": 80
        },
        "critDmg": {
          "min": 230,
          "max": 270
        }
      },
      "routes": {
        "flare": {
          "loop": [
            "Intro → Basic 4 → Realm Protector Heavy",
            "Formshift → Illumining Skill → Illumining Basics 1–2",
            "Pillars Skill → Pillars Basics 1–4",
            "Stilling All Horizons → Pillars Across Heaven → Skill / Outro"
          ]
        },
        "unison": {
          "loop": [
            "First Unison Intro → Basics 3–4 → Realm Protector",
            "Formshift → Unison Outro to secondary",
            "Secondary builds a second Outro → Hsin’s second Unison Intro",
            "Pillars Basics 1–4 → Stilling All Horizons",
            "Pillars Across Heaven → Skill / Outro"
          ]
        }
      }
    },
    {
      "id": "aemeath",
      "name": "Aemeath",
      "short": "Aemeath",
      "element": "Fusion",
      "weapon": "Sword",
      "role": "Carry",
      "subtitle": "Liberation carry · two modes",
      "tagline": "The support package must match the selected mode.",
      "page": 19,
      "talents": [
        "Resonance Liberation",
        "Forte Circuit",
        "Resonance Skill",
        "Basic Attack",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Liberation",
      "signature": "Everbright Polestar",
      "alternatives": [
        "Existing suitable five-star Sword; passives may not transfer"
      ],
      "er": [
        115,
        125
      ],
      "aliases": [],
      "rotation": "Set the correct mode → support handoffs → open Liberation / enhanced state → alternate the required form attacks and build Duet → complete the finisher → Outro.",
      "must": "Match Denia’s Fusion Burst mode and Chromatic Foam set to the Fusion Burst team. The Lynae / Mornye team instead exploits Tune mechanics. These are separate plans, not interchangeable rotations.",
      "roster": "Your Denia and Mornye assignments decide which version is available alongside Qingxiao or Luuk. Choose the full team before farming marginal upgrades.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 15\nFUSION  /  SWORD\nAemeath\nLiberation carry • two team modes\nThe damage build stays similar; the mode and support package change.\nRECOMMENDED TEAMS\nTune Rupture\nAemeath + Lynae + Mornye\nFusion Burst\nAemeath + Denia + Chisa\nAdvanced fallback\nAemeath + Changli + Verina; not the specialist default\nECHO BUILD\n5-piece Trailblazing Star. Active Echo: Sigillum.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG; count the set’s Crit Rate\n3-costs\nFusion DMG + ATK% or Fusion DMG\n1-costs\nATK% + ATK%\nER target\nApproximately 115–125%; about 120% is a useful\nstarting point.\nSubstats\nEnergy Regen to target → Crit → ATK% →\nLiberation DMG\nTALENT LEVEL-UP ORDER\n01\nResonance Liberation\n02\nForte Circuit\n03\nResonance Skill\n04\nBasic Attack\n05\nIntro Skill\nLiberation and Forte first. Treat the other three as\nlater damage refinements.\nWEAPONS\nSignature: Everbright Polestar. Use an existing\nsuitable five-star Sword rather than assuming\nevery signature passive transfers.\nPLAY PATTERN\nSet the correct mode → support handoffs → open Liberation / enhanced state → alternate the required form attacks\nand build Duet → complete the finisher → Outro.\nMust know. Match Denia’s Fusion Burst mode and Chromatic Foam set to the Fusion Burst team. The Lynae /\nMornye team instead exploits Tune mechanics. These are separate plans, not interchangeable rotations.\nFor your roster: Your Denia and Mornye assignments decide which version is available alongside Qingxiao or Luuk. Choose the\nfull team before farming marginal upgrades.\nBuild, priorities and kit references: [15P] [15W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nAEMEATH\n19 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/aemeath/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/aemeath-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "tune",
          "label": "Tune Rupture",
          "sets": [
            {
              "name": "Trailblazing Star",
              "pieces": 5
            }
          ],
          "echo": "Sigillum",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Fusion DMG",
            "ATK% / Fusion DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            115,
            125
          ],
          "talents": [
            "Resonance Liberation",
            "Forte Circuit",
            "Resonance Skill",
            "Basic Attack",
            "Intro Skill"
          ],
          "note": "Pair with Lynae + Mornye; count the set’s temporary Crit Rate.",
          "role": "Carry",
          "activeCost": 4
        },
        {
          "id": "fusion",
          "label": "Fusion Burst",
          "sets": [
            {
              "name": "Trailblazing Star",
              "pieces": 5
            }
          ],
          "echo": "Sigillum",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Fusion DMG",
            "ATK% / Fusion DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            115,
            125
          ],
          "talents": [
            "Resonance Liberation",
            "Forte Circuit",
            "Resonance Skill",
            "Basic Attack",
            "Intro Skill"
          ],
          "note": "Pair with Fusion Burst Denia + Chisa. Do not reuse the Tune support plan unchanged.",
          "role": "Carry",
          "activeCost": 4
        }
      ],
      "talentNote": "Liberation and Forte before lower-impact refinements.",
      "investment": "Changing mode is a team decision, not just an Echo-stat change.",
      "substats": "ER to target → Crit → ATK% → Liberation DMG",
      "guide": {
        "focus": "Align the mode with the hybrid: Tune Rupture with the Tune setup, Fusion Burst with Fusion Denia. Complete Duet and the finisher before handing back to support.",
        "weapon": "Fusion plus ATK% and double Fusion three-costs are close enough for actual substats to matter. Recheck the weapon’s passive requirements.",
        "note": "A mode change is a team change. The same main-stat template does not mean the two teams use interchangeable mechanics.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/aemeath/"
      },
      "benchmarks": {
        "atk": {
          "min": 2000,
          "max": 2400
        },
        "crit": {
          "min": 65,
          "max": 80
        },
        "critDmg": {
          "min": 210,
          "max": 260
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Set the correct mode → support handoffs",
            "open Liberation / enhanced state → alternate the required form attacks and build Duet",
            "complete the finisher → Outro"
          ]
        }
      }
    },
    {
      "id": "suisui",
      "name": "Suisui",
      "short": "Suisui",
      "element": "Glacio",
      "weapon": "Rectifier",
      "role": "Sustain",
      "subtitle": "HP healer · negative-status support",
      "tagline": "260% ER and the relay matter more than personal damage.",
      "page": 20,
      "talents": [
        "Intro Skill",
        "Forte Circuit",
        "Resonance Skill",
        "Resonance Liberation",
        "Basic Attack"
      ],
      "scaling": "HP",
      "damage": "Intro",
      "signature": "Firstlight’s Herald",
      "alternatives": [
        "Variation"
      ],
      "er": [
        260,
        260
      ],
      "aliases": [],
      "rotation": "Intro → Drizzle Skill / attacks → build Floral Epistle → Liberation → Outro to hybrid → hybrid Outro to the carry after the relay becomes available.",
      "must": "At 600 Floral Epistle, the first Plume Step enables her relay to the next carry. An excessively early second handoff can miss it. The carry must meet the negative-status consumption condition for the associated ATK effect.",
      "roster": "Suisui and Xuanling can use the same set family with completely different main stats. Do not put Xuanling’s ATK pieces on your HP healer.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 16\nGLACIO  /  RECTIFIER\nSuisui\nHP healer / negative-status support\nHer 260% ER threshold and relay timing are the essential investments.\nRECOMMENDED TEAMS\nHavoc core\nXuanling + Chisa + Suisui\nGlacio core\nHiyuki + Lynae + Suisui\nFlare core\nHsin + Electro Rover + Suisui; Rover is outside your list\nECHO BUILD\n5-piece Song of Feathered Trace + Forbidden Bastion.\nRejuvenating Glow + Fallacy is a practical existing-set alternative.\nCosts\n4–3–3–1–1\n4-cost\nHP% or Healing Bonus for comfort; Crit DMG for\npersonal damage\n3-costs\nEnergy Regen + Energy Regen\n1-costs\nHP% + HP%\nER target\n260% total for her buff scaling. Do not chase Crit\nbefore this.\nSubstats\nEnergy Regen → HP% for sustain; Crit DMG is\noptional damage polish\nTALENT LEVEL-UP ORDER\n01\nIntro Skill\n02\nForte Circuit\n03\nResonance Skill\n04\nResonance Liberation\n05\nBasic Attack\nThis is damage order. For practical healing, invest in\nSkill and the healing portions of her kit first; her\npersonal damage is low.\nWEAPONS\nSignature: Firstlight’s Herald. Practical alternative:\nVariation.\nPLAY PATTERN\nIntro → Drizzle Skill / attacks → build Floral Epistle → Liberation → Outro to hybrid → hybrid Outro to the carry after\nthe relay becomes available.\nMust know. At 600 Floral Epistle, the first Plume Step enables her relay to the next carry. An excessively early second\nhandoff can miss it. The carry must meet the negative-status consumption condition for the associated ATK effect.\nFor your roster: Suisui and Xuanling can use the same set family with completely different main stats. Do not put Xuanling’s ATK\npieces on your HP healer.\nBuild, priorities and kit references: [16P] [16W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nSUISUI\n20 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/suisui/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/suisui-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Healing and buff conditions are reliable"
        },
        {
          "id": "relay",
          "label": "Floral Epistle relay reaches the intended carry"
        }
      ],
      "presets": [
        {
          "id": "healer",
          "label": "Negative-status healing",
          "sets": [
            {
              "name": "Song of Feathered Trace",
              "pieces": 5
            }
          ],
          "echo": "Forbidden Bastion",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "HP% / Healing Bonus",
            "Energy Regen",
            "Energy Regen",
            "HP%",
            "HP%"
          ],
          "er": [
            260,
            260
          ],
          "talents": [
            "Resonance Skill",
            "Forte Circuit",
            "Intro Skill",
            "Resonance Liberation",
            "Basic Attack"
          ],
          "note": "Sustain-first editorial order; the source report’s damage order is Intro → Forte → Skill → Liberation → Basic. Meet 260% ER and relay conditions before Crit.",
          "role": "Sustain",
          "activeCost": 4
        },
        {
          "id": "fallback",
          "label": "Existing healer set",
          "sets": [
            {
              "name": "Rejuvenating Glow",
              "pieces": 5
            }
          ],
          "echo": "Fallacy of No Return",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "HP% / Healing Bonus",
            "Energy Regen",
            "Energy Regen",
            "HP%",
            "HP%"
          ],
          "er": [
            260,
            260
          ],
          "talents": [
            "Resonance Skill",
            "Forte Circuit",
            "Intro Skill",
            "Resonance Liberation",
            "Basic Attack"
          ],
          "note": "Practical reuse option rather than the dedicated default.",
          "role": "Sustain",
          "activeCost": 4
        }
      ],
      "talentNote": "For practical healing, Skill and the healing parts of Forte come before damage polish.",
      "investment": "Your carry must satisfy the relevant negative-status consumption / relay condition.",
      "substats": "ER to 260% → HP% for sustain → optional Crit DMG",
      "guide": {
        "focus": "Reach 260% ER for the buff condition before chasing damage. HP improves healing; Crit DMG is optional Intro polish, not a prerequisite for the support job.",
        "weapon": "Keep two ER three-costs while building. An HP three-cost needs enough weapon and substat ER to preserve the 260% condition.",
        "note": "Use Drizzle Basics while learning: the Heavy shortcut is sensitive to full hits and enemy height. S3 shortens her post-Intro setup.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/suisui/"
      },
      "benchmarks": {
        "hp": {
          "min": 35000,
          "max": 40000
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Intro → Drizzle Skill",
            "Drizzle Basics 1–4 → Liberation",
            "Forbidden Bastion → full Concerto Outro",
            "Hybrid hands off to carry once its relay is ready"
          ],
          "opener": [
            "Zephyr Basics 1–3 → Awakening Spring",
            "Swallow’s Cut → Drizzle Basics 1–4",
            "Liberation → Forbidden Bastion → full Concerto Outro",
            "Hybrid completes setup → carry handoff"
          ]
        }
      }
    },
    {
      "id": "changli",
      "name": "Changli",
      "short": "Changli",
      "element": "Fusion",
      "weapon": "Sword",
      "role": "Carry",
      "subtitle": "Skill-damage quickswap hybrid",
      "tagline": "An advanced option, not a compulsory Fusion teammate.",
      "page": 21,
      "talents": [
        "Resonance Skill",
        "Forte Circuit",
        "Resonance Liberation",
        "Basic Attack",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Skill",
      "signature": "Blazing Brilliance",
      "alternatives": [
        "Emerald of Genesis"
      ],
      "er": [
        110,
        120
      ],
      "aliases": [],
      "rotation": "Use True Sight follow-ups to reach four Enflamement → Flaming Sacrifice Heavy → Liberation to refill four stacks → another Flaming Sacrifice → appropriate Outro.",
      "must": "Spend existing Enflamement before Liberation when the route allows, rather than wasting its refill. Quickswapping can reduce animation time, but careless swaps lose the recipient’s short Outro window.",
      "roster": "Keep her as an enjoyable advanced option. Your specialist Aemeath teams are the easier baseline to finish before optimizing a Changli quickswap rotation.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 17\nFUSION  /  SWORD\nChangli\nSkill-damage quickswap DPS / hybrid\nA technical option, not the automatic best teammate for every Fusion carry.\nRECOMMENDED TEAMS\nFrom your requested roster\nChangli + Aemeath + Verina; advanced quickswap option\nOutside-roster premium core\nChangli + Brant + Lupa, or Aemeath + Changli + Lupa\nECHO BUILD\n5-piece Molten Rift. Active Echo: Nightmare: Inferno Rider, not\nthe ordinary version.\nCosts\n4–3–3–1–1\n4-cost\nCrit Rate or Crit DMG\n3-costs\nFusion DMG + ATK%; double Fusion also viable\n1-costs\nATK% + ATK%\nER target\nRoughly 110–120%; rotation length changes the\nrequirement.\nSubstats\nEnergy Regen to target → Crit → ATK% → Skill\nDMG\nTALENT LEVEL-UP ORDER\n01\nResonance Skill\n02\nForte Circuit\n03\nResonance Liberation\n04\nBasic Attack\n05\nIntro Skill\nSkill and Forte first, then Liberation. “Heavy” input\ndoes not make Heavy Attack bonuses her default\ndamage stat.\nWEAPONS\nSignature: Blazing Brilliance. Strong permanent\nalternative: Emerald of Genesis.\nPLAY PATTERN\nUse True Sight follow-ups to reach four Enflamement → Flaming Sacrifice Heavy → Liberation to refill four stacks →\nanother Flaming Sacrifice → appropriate Outro.\nMust know. Spend existing Enflamement before Liberation when the route allows, rather than wasting its refill.\nQuickswapping can reduce animation time, but careless swaps lose the recipient’s short Outro window.\nFor your roster: Keep her as an enjoyable advanced option. Your specialist Aemeath teams are the easier baseline to finish\nbefore optimizing a Changli quickswap rotation.\nBuild, priorities and kit references: [17P] [17W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nCHANGLI\n21 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/changli/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/changli-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Buff handoff / mode condition tested"
        }
      ],
      "presets": [
        {
          "id": "quickswap",
          "label": "Skill / quickswap",
          "sets": [
            {
              "name": "Molten Rift",
              "pieces": 5
            }
          ],
          "echo": "Nightmare: Inferno Rider",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Crit Rate / Crit DMG",
            "Fusion DMG",
            "ATK% / Fusion DMG",
            "ATK%",
            "ATK%"
          ],
          "er": [
            110,
            120
          ],
          "talents": [
            "Resonance Skill",
            "Forte Circuit",
            "Resonance Liberation",
            "Basic Attack",
            "Intro Skill"
          ],
          "note": "Use the Nightmare version. Heavy input does not mean her damage wants Heavy Attack bonuses.",
          "role": "Carry",
          "activeCost": 4
        }
      ],
      "talentNote": "Skill and Forte, then Liberation. Spend existing Enflamement before a refill when the route allows.",
      "investment": "Advanced quickswap alternatives are not labeled as universal best teams.",
      "substats": "ER to target → Crit → ATK% → Skill DMG",
      "guide": {
        "focus": "Use True Sight attacks to build four Enflamement, spend them with Flaming Sacrifice, then use Liberation to refill for the second Heavy. Keep the swap plan deliberate.",
        "weapon": "Skill damage is the main emphasis. A Fusion / ATK split can be competitive with double Fusion; compare complete pieces rather than a single roll.",
        "note": "Casting Liberation at full Forte can waste its stack refill. ER varies with the team; 110–120% is the saved starting range.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/changli/"
      },
      "benchmarks": {
        "atk": {
          "min": 2000,
          "max": 2200
        },
        "crit": {
          "min": 65,
          "max": 80
        },
        "critDmg": {
          "min": 210,
          "max": 260
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Use True Sight follow-ups to reach four Enflamement → Flaming Sacrifice Heavy",
            "Liberation to refill four stacks → another Flaming Sacrifice",
            "appropriate Outro"
          ]
        }
      }
    },
    {
      "id": "verina",
      "name": "Verina",
      "short": "Verina",
      "element": "Spectro",
      "weapon": "Rectifier",
      "role": "Sustain",
      "subtitle": "ATK-scaling healer · flexible buffer",
      "tagline": "Fast handoffs and enough healing; no limited weapon required.",
      "page": 22,
      "talents": [
        "Forte Circuit",
        "Resonance Liberation",
        "Resonance Skill",
        "Basic Attack",
        "Intro Skill"
      ],
      "scaling": "ATK",
      "damage": "Healing",
      "signature": null,
      "alternatives": [
        "Variation"
      ],
      "er": [
        220,
        230
      ],
      "aliases": [],
      "rotation": "Skill and Liberation → jump and spend Forte stacks through aerial attacks → Echo → Outro. Add attacks if your weapon rank leaves Concerto short.",
      "must": "Her healing scales with ATK, unlike Shorekeeper and Suisui. A high-HP healer loadout is therefore the wrong template. She also does not require Shorekeeper’s two-Intro field upgrade sequence.",
      "roster": "Do not overinvest in her personal damage while your carry’s key talents or weapon are unfinished. Reliable healing and fast handoffs are the goal.",
      "sourceText": "WUTHERING WAVES  /  3.7\nRESONATOR 18\nSPECTRO  /  RECTIFIER\nVerina\nATK-scaling healer / flexible team buffer\nA low-cost way to keep a fourth team functional without sharing Shorekeeper.\nRECOMMENDED TEAMS\nYour no-overlap option\nLucy + Rebecca + Verina\nQuickswap option\nAemeath + Changli + Verina\nGeneral fallback\nUse when the preferred healer is assigned elsewhere; expect different buff coverage\nECHO BUILD\n5-piece Rejuvenating Glow + Fallacy of No Return. Bell-Borne\nGeochelone is a defensive alternative.\nCosts\n4–3–3–1–1\n4-cost\nHealing Bonus; ATK% is a healing alternative\n3-costs\nEnergy Regen + Energy Regen\n1-costs\nATK% + ATK%\nER target\nAbout 220–230% for short loops; longer rotations\ncan need less.\nSubstats\nEnergy Regen → ATK% → flat ATK; damage stats\nare optional\nTALENT LEVEL-UP ORDER\n01\nForte Circuit\n02\nResonance Liberation\n03\nResonance Skill\n04\nBasic Attack\n05\nIntro Skill\nUnlock both Inherent Skills. Level Forte and\nLiberation for useful healing, then stop when sustain\nis sufficient.\nWEAPONS\nVariation is the practical go-to. A dedicated limited\nweapon is not required for this role.\nPLAY PATTERN\nSkill and Liberation → jump and spend Forte stacks through aerial attacks → Echo → Outro. Add attacks if your weapon\nrank leaves Concerto short.\nMust know. Her healing scales with ATK, unlike Shorekeeper and Suisui. A high-HP healer loadout is therefore the\nwrong template. She also does not require Shorekeeper’s two-Intro field upgrade sequence.\nFor your roster: Do not overinvest in her personal damage while your carry’s key talents or weapon are unfinished. Reliable\nhealing and fast handoffs are the goal.\nBuild, priorities and kit references: [18P] [18W] • Sourcebook\nRESEARCH SNAPSHOT  •  01 OCT 2026\nVERINA\n22 / 26\n",
      "sources": [
        {
          "label": "Prydwen · build & kit",
          "url": "https://www.prydwen.gg/wuthering-waves/characters/verina/"
        },
        {
          "label": "Wutheringlab · kit reference",
          "url": "https://wutheringlab.com/character/verina-build/"
        }
      ],
      "reviewed": true,
      "checks": [
        {
          "id": "inherents",
          "label": "Both Inherent Skills unlocked"
        },
        {
          "id": "weapon",
          "label": "Chosen weapon leveled for this role"
        },
        {
          "id": "talents",
          "label": "Top-priority talents built"
        },
        {
          "id": "echoes",
          "label": "Correct set, main Echo and main stats"
        },
        {
          "id": "energy",
          "label": "Liberation ready in two consecutive rotations"
        },
        {
          "id": "handoff",
          "label": "Healing and buff conditions are reliable"
        }
      ],
      "presets": [
        {
          "id": "healer",
          "label": "Fast-healing support",
          "sets": [
            {
              "name": "Rejuvenating Glow",
              "pieces": 5
            }
          ],
          "echo": "Fallacy of No Return",
          "costs": [
            4,
            3,
            3,
            1,
            1
          ],
          "mains": [
            "Healing Bonus / ATK%",
            "Energy Regen",
            "Energy Regen",
            "ATK%",
            "ATK%"
          ],
          "er": [
            220,
            230
          ],
          "talents": [
            "Forte Circuit",
            "Resonance Liberation",
            "Resonance Skill",
            "Basic Attack",
            "Intro Skill"
          ],
          "note": "Bell-Borne Geochelone is a defensive active-Echo alternative. Healing scales with ATK, not HP.",
          "role": "Sustain",
          "activeCost": 4
        }
      ],
      "talentNote": "Both Inherent Skills, then Forte / Liberation until healing is adequate.",
      "investment": "A limited signature is not necessary for her job. Keep investment proportional to team needs.",
      "substats": "ER for loop → ATK% → flat ATK",
      "guide": {
        "focus": "Prioritize reliable Concerto, healing and support buffs. Spend Forte through aerial attacks and finish the Outro; add attacks when your weapon rank leaves the gauge short.",
        "weapon": "Variation is a practical Concerto weapon. ATK main stats improve healing; damage Crit rolls are optional and should not crowd out ER.",
        "note": "Start around 220–230% ER. Learn the no-Intro opener separately from the faster return route, then test with actual teammates.",
        "checked": "2 Oct 2026",
        "source": "https://www.prydwen.gg/wuthering-waves/characters/verina/"
      },
      "benchmarks": {
        "atk": {
          "min": 1500,
          "max": null
        }
      },
      "routes": {
        "*": {
          "loop": [
            "Skill and Liberation",
            "jump and spend Forte stacks through aerial attacks",
            "Echo",
            "Outro. Add attacks if your weapon rank leaves Concerto short"
          ]
        }
      }
    }
  ],
  "teams": [
    {
      "id": "jingran-core",
      "name": "Jingran · Heavy Attack",
      "members": [
        "jingran",
        "iuno",
        "shorekeeper"
      ],
      "tag": "Your focus",
      "note": "Iuno must Outro directly to Jingran. Shield gains inside Full Moon build Blessing.",
      "modes": {
        "iuno": "hybrid",
        "jingran": "carry",
        "shorekeeper": "comfort"
      },
      "external": false
    },
    {
      "id": "jingran-verina",
      "name": "Jingran · allocation fallback",
      "members": [
        "jingran",
        "iuno",
        "verina"
      ],
      "tag": "Alternative",
      "note": "Frees Shorekeeper; buff coverage and damage ceiling differ.",
      "modes": {
        "iuno": "hybrid"
      },
      "external": false
    },
    {
      "id": "lucy-core",
      "name": "Lucy S2 · premium core",
      "members": [
        "lucy",
        "rebecca",
        "shorekeeper"
      ],
      "tag": "Your focus",
      "note": "Keep Rebecca’s direct Outro for Lucy. Shorekeeper conflicts with Jingran’s main core.",
      "modes": {
        "rebecca": "support"
      },
      "external": false
    },
    {
      "id": "lucy-verina",
      "name": "Lucy S2 · no-overlap core",
      "members": [
        "lucy",
        "rebecca",
        "verina"
      ],
      "tag": "Allocation",
      "note": "Practical fourth team without sharing Shorekeeper.",
      "modes": {
        "rebecca": "support"
      },
      "external": false
    },
    {
      "id": "qingxiao-core",
      "name": "Qingxiao · Tune Strain",
      "members": [
        "qingxiao",
        "denia",
        "mornye"
      ],
      "tag": "Specialist",
      "note": "Denia uses Tune Strain and Reel of Spliced Memories.",
      "modes": {
        "denia": "tune",
        "mornye": "healer"
      },
      "external": false
    },
    {
      "id": "qingxiao-alt",
      "name": "Qingxiao · flexible hybrid",
      "members": [
        "qingxiao",
        "lynae",
        "mornye"
      ],
      "tag": "Alternative",
      "note": "Use when Denia is committed to another carry.",
      "modes": {},
      "external": false
    },
    {
      "id": "xuanling-core",
      "name": "Xuanling · negative status",
      "members": [
        "xuanling",
        "chisa",
        "suisui"
      ],
      "tag": "Specialist",
      "note": "Chisa uses Moonlit while Suisui covers the healer role.",
      "modes": {
        "chisa": "hybrid",
        "suisui": "healer"
      },
      "external": false
    },
    {
      "id": "xuanling-rebecca",
      "name": "Xuanling · Rebecca alternative",
      "members": [
        "xuanling",
        "rebecca",
        "chisa"
      ],
      "tag": "Alternative",
      "note": "Competes with Lucy for Rebecca. Chisa handles the sole-healer slot.",
      "modes": {
        "chisa": "healer",
        "rebecca": "support"
      },
      "external": false
    },
    {
      "id": "hiyuki-core",
      "name": "Hiyuki · listed-roster core",
      "members": [
        "hiyuki",
        "lynae",
        "suisui"
      ],
      "tag": "Specialist",
      "note": "Suisui helps satisfy the negative-status synergy.",
      "modes": {},
      "external": false
    },
    {
      "id": "hiyuki-chisa",
      "name": "Hiyuki · alternate sustain",
      "members": [
        "hiyuki",
        "lynae",
        "chisa"
      ],
      "tag": "Alternative",
      "note": "Chisa occupies the sole-healer slot.",
      "modes": {
        "chisa": "healer"
      },
      "external": false
    },
    {
      "id": "hiyuki-external",
      "name": "Hiyuki · external specialist",
      "members": [
        "hiyuki",
        "lucilla",
        "suisui"
      ],
      "tag": "Outside list",
      "note": "Lucilla is not in the 18-profile roster; ownership is not assumed.",
      "modes": {},
      "external": true
    },
    {
      "id": "luuk-core",
      "name": "Luuk · Tune Strain",
      "members": [
        "luuk",
        "denia",
        "mornye"
      ],
      "tag": "Specialist",
      "note": "Competes with Qingxiao for both Denia and Mornye.",
      "modes": {
        "denia": "tune",
        "mornye": "healer"
      },
      "external": false
    },
    {
      "id": "luuk-alt",
      "name": "Luuk · flexible hybrid",
      "members": [
        "luuk",
        "lynae",
        "mornye"
      ],
      "tag": "Alternative",
      "note": "A flexible replacement for the Denia slot.",
      "modes": {},
      "external": false
    },
    {
      "id": "aemeath-fusion",
      "name": "Aemeath · Fusion Burst",
      "members": [
        "aemeath",
        "denia",
        "chisa"
      ],
      "tag": "Specialist",
      "note": "Both Aemeath and Denia must use Fusion Burst; Chisa is the sole healer.",
      "modes": {
        "aemeath": "fusion",
        "denia": "fusion",
        "chisa": "healer"
      },
      "external": false
    },
    {
      "id": "aemeath-tune",
      "name": "Aemeath · Tune Rupture",
      "members": [
        "aemeath",
        "lynae",
        "mornye"
      ],
      "tag": "Specialist",
      "note": "Uses the Tune support package instead of Fusion Burst Denia.",
      "modes": {
        "aemeath": "tune",
        "mornye": "healer"
      },
      "external": false
    },
    {
      "id": "iuno-carry",
      "name": "Iuno · on-field carry",
      "members": [
        "iuno",
        "lynae",
        "mornye"
      ],
      "tag": "Carry alternative",
      "note": "Cannot simultaneously supply Iuno to the Jingran core.",
      "modes": {
        "iuno": "carry",
        "mornye": "healer"
      },
      "external": false
    },
    {
      "id": "iuno-sk",
      "name": "Iuno · carry / Shorekeeper",
      "members": [
        "iuno",
        "lynae",
        "shorekeeper"
      ],
      "tag": "Carry alternative",
      "note": "Longer carry route; do not substitute the short support loop.",
      "modes": {
        "iuno": "carry",
        "shorekeeper": "comfort"
      },
      "external": false
    },
    {
      "id": "hsin-flare",
      "name": "Hsin · Electro Flare",
      "members": [
        "hsin",
        "electro-rover",
        "suisui"
      ],
      "tag": "Outside list",
      "note": "Electro Rover is outside the requested profiles, but fills a specific role.",
      "modes": {
        "hsin": "flare"
      },
      "external": true
    },
    {
      "id": "hsin-chisa",
      "name": "Hsin · alternate healer",
      "members": [
        "hsin",
        "electro-rover",
        "chisa"
      ],
      "tag": "Outside list",
      "note": "Chisa covers the sole-healer slot.",
      "modes": {
        "hsin": "flare",
        "chisa": "healer"
      },
      "external": true
    },
    {
      "id": "changli-aemeath",
      "name": "Changli · advanced quickswap",
      "members": [
        "aemeath",
        "changli",
        "verina"
      ],
      "tag": "Advanced",
      "note": "Execution-dependent fallback, not the specialist baseline. Consult the full source route.",
      "modes": {},
      "external": false
    }
  ],
  "rotation": [
    {
      "character": "shorekeeper",
      "title": "Prepare Concerto",
      "action": "Basic / Heavy / Skill",
      "why": "Build enough Concerto for an Intro handoff. The opening loop may need more attacks than repeat loops.",
      "warning": "Do not swap early with an empty Concerto gauge."
    },
    {
      "character": "shorekeeper",
      "title": "Establish Stellarealm",
      "action": "Liberation → Fallacy",
      "why": "Create the field, then place the Echo near the handoff.",
      "warning": "The field must be up before the two team Intros."
    },
    {
      "character": "shorekeeper",
      "title": "First handoff",
      "action": "Outro → Iuno Intro",
      "why": "Iuno’s Intro advances Shorekeeper’s field stage.",
      "warning": "Go to Iuno, not directly to Jingran."
    },
    {
      "character": "iuno",
      "title": "Set up the short hybrid route",
      "action": "Closing Refrain → Bell-Borne → Liberation",
      "why": "For Moonlit, cast Bell-Borne near the start and cancel into Liberation. Lady of the Sea is freer to time on Crown.",
      "warning": "The active Echo must match the selected build."
    },
    {
      "character": "iuno",
      "title": "Enter Moonbow",
      "action": "Jump / Flux → bow Basics 1–2",
      "why": "Enter the bow state and build the resources for the finisher.",
      "warning": "Use a dash cancel only once the uncancelled route works."
    },
    {
      "character": "iuno",
      "title": "Finish the bow cycle",
      "action": "Bow Skill → Basics 1–2 → bow Skill",
      "why": "Complete the second bow Skill and ensure Concerto is full.",
      "warning": "A low Concerto bar means you are missing resource-generating actions."
    },
    {
      "character": "iuno",
      "title": "Create Full Moon",
      "action": "Heavy: Absolute Fullness",
      "why": "This finisher creates the domain needed for shield-triggered Blessing.",
      "warning": "A regular Heavy is not a substitute for Absolute Fullness."
    },
    {
      "character": "iuno",
      "title": "Direct carry handoff",
      "action": "Outro → Jingran Intro",
      "why": "Give Jingran the Heavy Attack amplification and advance Shorekeeper’s field.",
      "warning": "Do not insert another character between Iuno and Jingran."
    },
    {
      "character": "jingran",
      "title": "Enable the damage window",
      "action": "Liberation → Stardome Meander Heavy",
      "why": "Liberation enables Fire of Life before the enhanced Heavy sequence. Main Echo can be summoned at a convenient point.",
      "warning": "Do not spend the Heavy window before the important Liberation buff."
    },
    {
      "character": "jingran",
      "title": "Second empowered Heavy",
      "action": "Yin Basics 2–4 → Soul Raid",
      "why": "Build and spend Qi for the next finisher.",
      "warning": "Remain within Iuno’s domain while repeatedly gaining shields."
    },
    {
      "character": "jingran",
      "title": "Third empowered Heavy",
      "action": "Scorching Yang → Afterlife’s Guide → Stardome Meander",
      "why": "Skill and follow-up rebuild resources for another finisher.",
      "warning": "Do not interrupt the carry window with an unnecessary swap."
    },
    {
      "character": "jingran",
      "title": "Fourth empowered Heavy",
      "action": "Encroaching Yin → Netherworld Traverse → Soul Raid",
      "why": "Finish the four-Heavy sequence before leaving.",
      "warning": "Count actual finishers, not ordinary held attacks."
    },
    {
      "character": "jingran",
      "title": "Reset the loop",
      "action": "Outro → Shorekeeper",
      "why": "Return to support after the carry window. At Shorekeeper S0, her enhanced Intro ends the old field.",
      "warning": "Judge ER by the next full loop, not only the opener."
    }
  ],
  "updates": [
    {
      "title": "All 18 profiles reviewed · 2 October",
      "body": "Added role-specific build notes, contextual stat benchmarks and practice cards. Corrected Iuno’s shield Echo for the Jingran setup and separated signature / HP-first Jingran loadouts. Energy targets remain team-dependent estimates.",
      "url": "",
      "source": "Current character guides linked in each profile"
    },
    {
      "title": "Planning that checks the whole team",
      "body": "Edit individual team members, inspect mode and sustain issues, compare recorded stats, and see the next useful upgrade. Existing version-2 backups and browser saves remain supported.",
      "url": "",
      "source": "Wavebook 3.0"
    },
    {
      "title": "Build modes are separate, not cosmetic",
      "body": "Changing Iuno’s role changes her talent order. Denia’s mode changes her set and active Echo. Chisa’s healer slot changes the support set. Each preset now has its own checklist.",
      "source": "Original report, pp. 5, 8, 17"
    },
    {
      "title": "Jingran’s four-cost main stats are more specific",
      "body": "The current guide favors Crit DMG / HP% for both four-cost slots. Work toward 50,000 HP first; do not copy a generic double-Crit-Rate template.",
      "source": "Jingran guide, rechecked 1 Oct 2026",
      "url": "https://www.prydwen.gg/wuthering-waves/characters/jingran/"
    },
    {
      "title": "Named rotation, with its assumptions visible",
      "body": "The Jingran lab uses the current guide’s S0 named Heavy sequence. The old report’s simplified action ordering is retained only inside the original PDF. No exact timing or DPS guarantee is inferred.",
      "source": "Jingran + Iuno guides, rechecked 1 Oct 2026",
      "url": "https://www.prydwen.gg/wuthering-waves/characters/jingran/"
    },
    {
      "title": "ER calculations do not double-count permanent bonuses",
      "body": "Use effective totals. An already-displayed passive or main-Echo bonus must not be added again. The checker uses only the extra points you explicitly enter; 240/230 shorthand is not universally a naked stat-panel target.",
      "source": "Mornye + Shorekeeper guides, rechecked 1 Oct 2026",
      "url": "https://www.prydwen.gg/wuthering-waves/characters/mornye/"
    },
    {
      "title": "No unsupported universal set winner",
      "body": "Moonlit and Crown on Iuno can be close in whole-team output. A preset is a role choice, not a promise of a fixed DPS gain.",
      "source": "Iuno guide, rechecked 1 Oct 2026",
      "url": "https://www.prydwen.gg/wuthering-waves/characters/iuno/"
    },
    {
      "title": "Spending plans are not owned upgrades",
      "body": "Lucy starts at your confirmed S2. Other sequences and signatures are unspecified. The planner does not assign future S2 benefits to an S0 build or rank teams from unmatched damage-per-rotation tests.",
      "source": "Your conversation and report, pp. 1–2"
    }
  ],
  "glossary": [
    [
      "Forte Circuit",
      "A character-specific resource and enhanced-action system. Its talent node may scale attacks triggered by several different buttons."
    ],
    [
      "Concerto / Outro / Intro",
      "Concerto enables the outgoing character’s Outro and the next character’s Intro. A normal swap without sufficient Concerto is not the same handoff."
    ],
    [
      "Resonance Liberation",
      "The ultimate ability. The button name does not always determine the damage tag; Luuk is an important example."
    ],
    [
      "4–3–3–1–1",
      "Five Echo costs, not a mandatory slot order. A three-cost Echo can be active while the four-cost Crit piece is in another slot."
    ],
    [
      "4–4–1–1–1",
      "Jingran’s recommended exception: two four-cost pieces and three HP% one-cost pieces. Still five Echoes, costing 12 in total."
    ],
    [
      "Energy Regen / ER",
      "A total percentage, not a percentage added above the 100% baseline. Most listed ranges are starting estimates for repeatable rotations."
    ],
    [
      "Damage Bonus versus Amplification",
      "Different buff terms. Neither a headline bonus nor a personal-damage improvement is automatically the same percentage of final whole-team damage."
    ],
    [
      "In-combat Crit Rate",
      "Include applicable set, weapon and teammate effects in the actual damage window. Crit Rate above 100% does not create additional critical hits."
    ],
    [
      "Tune versus negative status",
      "Distinct kit/team conditions. Do not assume a negative-status setup activates a Tune-dependent support bonus."
    ],
    [
      "S0 / S2 / R1",
      "S denotes activated Resonance Chain nodes; S2 requires two sequence upgrades from S0. R1 denotes the weapon’s first rank. Unknown ownership is not S0 ownership."
    ]
  ],
  "defaultSquads": [
    "jingran-core",
    "qingxiao-core",
    "xuanling-core",
    "lucy-verina"
  ],
  "focus": [
    "jingran",
    "iuno",
    "lucy",
    "rebecca",
    "shorekeeper"
  ],
  "outside": {
    "lucilla": "Lucilla",
    "electro-rover": "Electro Rover",
    "jinhsi": "Jinhsi"
  },
  "reviews": [
    "iuno",
    "lynae",
    "mornye",
    "denia",
    "qingxiao",
    "xuanling",
    "hiyuki",
    "jingran",
    "lucy",
    "rebecca",
    "shorekeeper",
    "luuk",
    "chisa",
    "hsin",
    "aemeath",
    "suisui",
    "changli",
    "verina"
  ],
  "reportSnapshot": "1 Oct 2026",
  "appVersion": "3.0"
};
