export interface TToken {
  exp: number;
}

export interface ActionType {
  type: string;
  payload: any;
}

const class_details = {
  index: "barbarian",
  name: "Barbarian",
  hit_die: 12,
  proficiency_choices: [
    {
      choose: 2,
      type: "proficiencies",
      from: [
        {
          index: "skill-animal-handling",
          name: "Skill: Animal Handling",
          url: "/api/proficiencies/skill-animal-handling",
        },
        {
          index: "skill-athletics",
          name: "Skill: Athletics",
          url: "/api/proficiencies/skill-athletics",
        },
        {
          index: "skill-intimidation",
          name: "Skill: Intimidation",
          url: "/api/proficiencies/skill-intimidation",
        },
        {
          index: "skill-nature",
          name: "Skill: Nature",
          url: "/api/proficiencies/skill-nature",
        },
        {
          index: "skill-perception",
          name: "Skill: Perception",
          url: "/api/proficiencies/skill-perception",
        },
        {
          index: "skill-survival",
          name: "Skill: Survival",
          url: "/api/proficiencies/skill-survival",
        },
      ],
    },
  ],
  proficiencies: [
    {
      index: "light-armor",
      name: "Light Armor",
      url: "/api/proficiencies/light-armor",
    },
    {
      index: "medium-armor",
      name: "Medium Armor",
      url: "/api/proficiencies/medium-armor",
    },
    {
      index: "shields",
      name: "Shields",
      url: "/api/proficiencies/shields",
    },
    {
      index: "simple-weapons",
      name: "Simple Weapons",
      url: "/api/proficiencies/simple-weapons",
    },
    {
      index: "martial-weapons",
      name: "Martial Weapons",
      url: "/api/proficiencies/martial-weapons",
    },
  ],
  saving_throws: [
    {
      index: "str",
      name: "STR",
      url: "/api/ability-scores/str",
    },
    {
      index: "con",
      name: "CON",
      url: "/api/ability-scores/con",
    },
  ],
  starting_equipment: [
    {
      equipment: {
        index: "explorers-pack",
        name: "Explorer's Pack",
        url: "/api/equipment/explorers-pack",
      },
      quantity: 1,
    },
    {
      equipment: {
        index: "javelin",
        name: "Javelin",
        url: "/api/equipment/javelin",
      },
      quantity: 4,
    },
  ],
  starting_equipment_options: [
    {
      choose: 1,
      type: "equipment",
      from: [
        {
          equipment: {
            index: "greataxe",
            name: "Greataxe",
            url: "/api/equipment/greataxe",
          },
          quantity: 1,
        },
        {
          equipment_option: {
            choose: 1,
            type: "equipment",
            from: {
              equipment_category: {
                index: "martial-melee-weapons",
                name: "Martial Melee Weapons",
                url: "/api/equipment-categories/martial-melee-weapons",
              },
            },
          },
        },
      ],
    },
    {
      choose: 1,
      type: "equipment",
      from: [
        {
          equipment: {
            index: "handaxe",
            name: "Handaxe",
            url: "/api/equipment/handaxe",
          },
          quantity: 2,
        },
        {
          equipment_option: {
            choose: 1,
            type: "equipment",
            from: {
              equipment_category: {
                index: "simple-weapons",
                name: "Simple Weapons",
                url: "/api/equipment-categories/simple-weapons",
              },
            },
          },
        },
      ],
    },
  ],
  class_levels: "/api/classes/barbarian/levels",
  multi_classing: {
    proficiency_choices: [],
    prerequisites: [
      {
        ability_score: {
          index: "str",
          name: "STR",
          url: "/api/ability-scores/str",
        },
        minimum_score: 13,
      },
    ],
    proficiencies: [
      {
        index: "shields",
        name: "Shields",
        url: "/api/proficiencies/shields",
      },
      {
        index: "simple-weapons",
        name: "Simple Weapons",
        url: "/api/proficiencies/simple-weapons",
      },
      {
        index: "martial-weapons",
        name: "Martial Weapons",
        url: "/api/proficiencies/martial-weapons",
      },
    ],
  },
  subclasses: [
    {
      index: "berserker",
      name: "Berserker",
      url: "/api/subclasses/berserker",
    },
  ],
  url: "/api/classes/barbarian",
};

export type ClassDetailsType = typeof class_details;

export interface ClassesListType {
  count: number;
  results: [{ index: number; name: string; url: string }];
}

const spell_details = {
  _id: "622f9af6e534bc53b31c7d97",
  index: "cure-wounds",
  name: "Cure Wounds",
  desc: [
    "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
  ],
  higher_level: [
    "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
  ],
  range: "Touch",
  components: ["V", "S"],
  ritual: false,
  duration: "Instantaneous",
  concentration: false,
  casting_time: "1 action",
  level: 1,
  heal_at_slot_level: {
    "1": "1d8 + MOD",
    "2": "2d8 + MOD",
    "3": "3d8 + MOD",
    "4": "4d8 + MOD",
    "5": "5d8 + MOD",
    "6": "6d8 + MOD",
    "7": "7d8 + MOD",
    "8": "8d8 + MOD",
    "9": "9d8 + MOD",
  },
  school: {
    index: "evocation",
    name: "Evocation",
    url: "/api/magic-schools/evocation",
  },
  classes: [
    {
      index: "bard",
      name: "Bard",
      url: "/api/classes/bard",
    },
    {
      index: "cleric",
      name: "Cleric",
      url: "/api/classes/cleric",
    },
    {
      index: "druid",
      name: "Druid",
      url: "/api/classes/druid",
    },
    {
      index: "paladin",
      name: "Paladin",
      url: "/api/classes/paladin",
    },
    {
      index: "ranger",
      name: "Ranger",
      url: "/api/classes/ranger",
    },
  ],
  subclasses: [
    {
      index: "lore",
      name: "Lore",
      url: "/api/subclasses/lore",
    },
    {
      index: "life",
      name: "Life",
      url: "/api/subclasses/life",
    },
  ],
  url: "/api/spells/cure-wounds",
};

export type spellDetailsType = typeof spell_details;
export interface LoadingType {
  spin: Boolean;
}
