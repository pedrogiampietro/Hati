'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('players', {
        name: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        group_id: {
          allowNull: false,
          defaultValue: 1,
          type: Sequelize.INTEGER,
        },
        account_id: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'accounts',
            key: 'id',
          },
        },
        level: {
          allowNull: false,
          defaultValue: 1,
          type: Sequelize.INTEGER,
        },
        vocation: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        heath: {
          allowNull: false,
          defaultValue: 150,
          type: Sequelize.INTEGER,
        },
        healthmax: {
          allowNull: false,
          defaultValue: 150,
          type: Sequelize.INTEGER,
        },
        experience: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BIGINT,
        },
        lookbody: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        lookfeet: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        lookhead: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        looklegs: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        looktype: {
          allowNull: false,
          defaultValue: 136,
          type: Sequelize.INTEGER,
        },
        lookaddons: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        maglevel: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        mana: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        manamax: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        manaspent: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BIGINT,
        },
        soul: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        town_id: {
          allowNull: false,
          defaultValue: 1,
          type: Sequelize.INTEGER,
        },
        posx: {
          allowNull: false,
          defaultValue: 154,
          type: Sequelize.INTEGER,
        },
        posy: {
          allowNull: false,
          defaultValue: 60,
          type: Sequelize.INTEGER,
        },
        posz: {
          allowNull: false,
          defaultValue: 7,
          type: Sequelize.INTEGER,
        },
        conditions: {
          allowNull: false,
          type: Sequelize.BLOB,
        },
        cap: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        sex: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        lastlogin: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BIGINT,
        },
        lastip: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        save: {
          allowNull: false,
          defaultValue: 1,
          type: Sequelize.BOOLEAN,
        },
        skull: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BOOLEAN,
        },
        skulltime: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BIGINT,
        },
        lastlogout: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BIGINT,
        },
        blessings: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BOOLEAN,
        },
        blessings1: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BOOLEAN,
        },
        blessings2: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BOOLEAN,
        },
        blessings3: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BOOLEAN,
        },
        blessings4: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BOOLEAN,
        },
        blessings5: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BOOLEAN,
        },
        blessings6: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BOOLEAN,
        },
        blessings7: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BOOLEAN,
        },
        blessings8: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BOOLEAN,
        },
        onlinetime: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        deletion: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BIGINT,
        },
        balance: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.BIGINT,
        },
        offlinetraining_time: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        offlinetraining_skill: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        stamina: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_fist: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_fist_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_club: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_club_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_sword: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_sword_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_axe: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_axe_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_dist: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_dist_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_shielding: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_shielding_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_fishing: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_fishing_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_critical_hit_chance: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_critical_hit_chance_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_critical_hit_damage: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_critical_hit_damage_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_life_leech_chance: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_life_leech_chance_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_mana_leech_chance: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_mana_leech_chance_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_mana_leech_amount: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        skill_mana_leech_amount_tries: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_criticalhit_chance: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_criticalhit_damage: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_lifeleech_chance: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_lifeleech_amount: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_manaleech_chance: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        skill_manaleech_amount: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        manashield: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        max_manashield: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        prey_stamina_1: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        prey_stamina_2: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        prey_stamina_3: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        prey_column: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        xpboost_stamina: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        xpboost_value: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        marriage_status: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        marriage_spouse: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        bonus_rerolls: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        quickloot_fallback: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        lookmountbody: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        lookmountfeet: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        lookmounthead: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        lookfamiliarstype: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        isreward: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        istutorial: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        timestamp: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      })
      .then(() => queryInterface.addIndex('coins_transactions', ['vocation'])),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('players'),
};
