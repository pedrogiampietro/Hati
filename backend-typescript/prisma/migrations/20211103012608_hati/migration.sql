-- CreateTable
CREATE TABLE `account_ban_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account_id` INTEGER NOT NULL,
    `reason` VARCHAR(191) NOT NULL,
    `banned_at` INTEGER NOT NULL,
    `expired_at` INTEGER NOT NULL,
    `banned_by` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account_bans` (
    `account_id` INTEGER NOT NULL,
    `reason` VARCHAR(191) NOT NULL,
    `banned_at` INTEGER NOT NULL,
    `expires_at` INTEGER NOT NULL,
    `banned_by` INTEGER NOT NULL,

    PRIMARY KEY (`account_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account_character_sale` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_account` INTEGER NOT NULL,
    `id_player` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL,
    `price_type` BOOLEAN NOT NULL,
    `price_coins` INTEGER NULL,
    `price_gold` INTEGER NULL,
    `dta_insert` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dta_valid` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dta_sale` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account_character_sale_history` (
    `id` INTEGER NOT NULL,
    `id_old_account` INTEGER NULL,
    `id_player` INTEGER NULL,
    `id_new_account` INTEGER NULL,
    `price_type` BOOLEAN NULL,
    `price` INTEGER NULL,
    `char_id` INTEGER NULL,
    `dta_insert` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dta_sale` DATETIME(3) NULL,
    `extornada` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account_viplist` (
    `account_id` INTEGER NOT NULL,
    `player_id` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `icon` BOOLEAN NOT NULL,
    `notify` BOOLEAN NOT NULL,

    PRIMARY KEY (`account_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `secret` VARCHAR(191) NULL,
    `type` INTEGER NOT NULL,
    `premdays` INTEGER NOT NULL,
    `coins` INTEGER NOT NULL,
    `lastday` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `creation` INTEGER NOT NULL,
    `jwtVersion` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `vote` INTEGER NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `email_new` VARCHAR(191) NOT NULL,
    `email_new_time` INTEGER NOT NULL,
    `rlname` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `page_access` INTEGER NOT NULL,
    `email_code` VARCHAR(191) NOT NULL,
    `next_email` INTEGER NOT NULL,
    `premium_points` INTEGER NOT NULL,
    `secret_status` BOOLEAN NOT NULL,
    `create_date` INTEGER NOT NULL,
    `create_ip` INTEGER NOT NULL,
    `last_post` INTEGER NOT NULL,
    `flag` VARCHAR(191) NOT NULL,
    `vip_time` INTEGER NOT NULL,
    `guild_points` INTEGER NOT NULL,
    `guild_points_stats` INTEGER NOT NULL,
    `passed` INTEGER NOT NULL,
    `block` INTEGER NOT NULL,
    `refresh` INTEGER NOT NULL,
    `birth_date` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `profileName` VARCHAR(191) NOT NULL,
    `passwordResetExpires` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `passwordResetToken` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `loyalty_points` INTEGER NOT NULL,
    `authToken` VARCHAR(191) NOT NULL,
    `player_sell_bank` INTEGER NULL,
    `tournamentBalance` INTEGER NOT NULL,
    `tokens` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accounts_options` (
    `account_id` INTEGER NOT NULL,
    `options` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`account_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `announcements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blessings_history` (
    `id` INTEGER NOT NULL,
    `player_id` INTEGER NOT NULL,
    `blessing` BOOLEAN NOT NULL,
    `loss` BOOLEAN NOT NULL,
    `timestamp` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `post_content` VARCHAR(191) NOT NULL,
    `character_name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `thread_id` INTEGER NOT NULL,
    `account_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daily_reward_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `daystreak` INTEGER NOT NULL,
    `player_id` INTEGER NOT NULL,
    `timestamp` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `forum_board` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `topics` INTEGER NOT NULL,
    `posts` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `global_misc` (
    `key` INTEGER NOT NULL,
    `world_id` INTEGER NOT NULL,

    PRIMARY KEY (`world_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `global_storage` (
    `key` INTEGER NULL,
    `world_id` INTEGER NOT NULL,
    `value` INTEGER NULL,

    PRIMARY KEY (`world_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guild_invites` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `guild_id` INTEGER NOT NULL,
    `date` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `player_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guild_membership` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rank` INTEGER NULL,
    `nick` VARCHAR(191) NULL,
    `player_id` INTEGER NOT NULL,
    `guild_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guild_ranks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,
    `guild_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guild_wars` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `guild1` INTEGER NOT NULL,
    `guild2` INTEGER NOT NULL,
    `name1` VARCHAR(191) NOT NULL,
    `name2` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `started` INTEGER NOT NULL,
    `ended` INTEGER NOT NULL,
    `toend` INTEGER NOT NULL,
    `buyin` INTEGER NOT NULL,
    `fraglimit` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guilds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `ownerid` INTEGER NOT NULL,
    `creationdata` INTEGER NOT NULL,
    `motd` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `create_ip` INTEGER NOT NULL,
    `balance` INTEGER NOT NULL,
    `last_execute_points` INTEGER NOT NULL,
    `logo_gfx_name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guildwar_deaths` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `player_id` INTEGER NOT NULL,
    `kills` INTEGER NOT NULL,
    `deaths` INTEGER NOT NULL,
    `warid` INTEGER NOT NULL,
    `time` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guildwar_kills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `killer` VARCHAR(191) NOT NULL,
    `target` VARCHAR(191) NOT NULL,
    `killerguild` INTEGER NOT NULL,
    `targetguild` INTEGER NOT NULL,
    `warid` INTEGER NOT NULL,
    `time` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `house_lists` (
    `house_id` INTEGER NOT NULL,
    `listid` INTEGER NOT NULL,
    `list` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`house_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `houses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `owner` INTEGER NOT NULL,
    `paid` INTEGER NOT NULL,
    `warnings` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `rent` INTEGER NOT NULL,
    `town_id` INTEGER NOT NULL,
    `bid` INTEGER NOT NULL,
    `bid_end` INTEGER NOT NULL,
    `last_bid` INTEGER NOT NULL,
    `highest_bidder` INTEGER NOT NULL,
    `size` INTEGER NOT NULL,
    `beds` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemid` INTEGER NOT NULL,
    `item_amount` INTEGER NULL,
    `item_title` VARCHAR(191) NOT NULL,
    `item_description` VARCHAR(191) NULL,
    `shop_image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `account_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ip_bans` (
    `ip` INTEGER NOT NULL,
    `reason` VARCHAR(191) NOT NULL,
    `banned_at` INTEGER NOT NULL,
    `expires_at` INTEGER NOT NULL,
    `banned_by` INTEGER NOT NULL,

    PRIMARY KEY (`ip`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `market_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `player_id` INTEGER NOT NULL,
    `sale` BOOLEAN NOT NULL,
    `itemtype` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `expires_at` INTEGER NOT NULL,
    `inserted` INTEGER NOT NULL,
    `state` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `market_offers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `player_id` INTEGER NOT NULL,
    `sale` BOOLEAN NOT NULL,
    `itemtype` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `created` INTEGER NOT NULL,
    `anonymous` BOOLEAN NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `newsticker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` INTEGER NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_autoloot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `player_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_autoloot_persist` (
    `player_guid` INTEGER NOT NULL,
    `cont_id` INTEGER NULL,
    `item_id` INTEGER NULL,

    PRIMARY KEY (`player_guid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_deaths` (
    `player_id` INTEGER NOT NULL,
    `time` INTEGER NOT NULL,
    `level` INTEGER NOT NULL,
    `killed_by` VARCHAR(191) NOT NULL,
    `is_player` BOOLEAN NOT NULL,
    `mostdamage_by` VARCHAR(191) NOT NULL,
    `mostdamage_is_player` BOOLEAN NOT NULL,
    `unjustified` BOOLEAN NOT NULL,
    `mostdamage_unjustified` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_depotitems` (
    `player_id` INTEGER NOT NULL,
    `sid` INTEGER NOT NULL,
    `pid` INTEGER NOT NULL,
    `itemtype` INTEGER NOT NULL,
    `count` INTEGER NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_former_names` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `player_id` INTEGER NOT NULL,
    `former_name` VARCHAR(191) NOT NULL,
    `date` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_inboxitems` (
    `player_id` INTEGER NOT NULL,
    `sid` INTEGER NOT NULL,
    `pid` INTEGER NOT NULL,
    `itemtype` INTEGER NOT NULL,
    `count` INTEGER NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_items` (
    `player_id` INTEGER NOT NULL,
    `pid` INTEGER NOT NULL,
    `sid` INTEGER NOT NULL,
    `itemtype` INTEGER NOT NULL,
    `count` INTEGER NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_killers` (
    `kill_id` INTEGER NOT NULL,
    `player_id` INTEGER NOT NULL,

    PRIMARY KEY (`kill_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_kills` (
    `player_id` INTEGER NOT NULL,
    `time` INTEGER NOT NULL,
    `target` INTEGER NOT NULL,
    `unavenged` BOOLEAN NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_misc` (
    `player_id` INTEGER NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_namelocks` (
    `player_id` INTEGER NOT NULL,
    `reason` VARCHAR(191) NOT NULL,
    `namelocked_at` INTEGER NOT NULL,
    `namelocked_by` INTEGER NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_preydata` (
    `player_id` INTEGER NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_rewards` (
    `player_id` INTEGER NOT NULL,
    `sid` INTEGER NOT NULL,
    `pid` INTEGER NOT NULL,
    `itemtype` INTEGER NOT NULL,
    `count` INTEGER NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_spells` (
    `player_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_storage` (
    `player_id` INTEGER NOT NULL,
    `key` INTEGER NOT NULL,
    `value` INTEGER NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `players` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `group_id` INTEGER NOT NULL,
    `account_id` INTEGER NOT NULL,
    `level` INTEGER NOT NULL,
    `vocation` INTEGER NOT NULL,
    `health` INTEGER NOT NULL,
    `healthmax` INTEGER NOT NULL,
    `experience` INTEGER NOT NULL,
    `lookbody` INTEGER NOT NULL,
    `lookfeet` INTEGER NOT NULL,
    `lookhead` INTEGER NOT NULL,
    `looklegs` INTEGER NOT NULL,
    `looktype` INTEGER NOT NULL,
    `lookaddons` INTEGER NOT NULL,
    `maglevel` INTEGER NOT NULL,
    `mana` INTEGER NOT NULL,
    `manamax` INTEGER NOT NULL,
    `manaspent` INTEGER NOT NULL,
    `soul` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `town_id` INTEGER NOT NULL,
    `posx` INTEGER NOT NULL,
    `posy` INTEGER NOT NULL,
    `posz` INTEGER NOT NULL,
    `cap` INTEGER NOT NULL,
    `sex` INTEGER NOT NULL,
    `lastlogin` INTEGER NOT NULL,
    `lastip` INTEGER NOT NULL,
    `save` BOOLEAN NOT NULL,
    `skull` BOOLEAN NOT NULL,
    `skulltime` INTEGER NOT NULL,
    `lastlogout` INTEGER NOT NULL,
    `blessings` BOOLEAN NOT NULL,
    `blessings1` BOOLEAN NOT NULL,
    `blessings2` BOOLEAN NOT NULL,
    `blessings3` BOOLEAN NOT NULL,
    `blessings4` BOOLEAN NOT NULL,
    `blessings5` BOOLEAN NOT NULL,
    `blessings6` BOOLEAN NOT NULL,
    `blessings7` BOOLEAN NOT NULL,
    `blessings8` BOOLEAN NOT NULL,
    `onlinetime` INTEGER NOT NULL,
    `deletion` INTEGER NOT NULL,
    `balance` INTEGER NOT NULL,
    `bonusrerollcount` INTEGER NULL,
    `quick_loot_fallback` BOOLEAN NULL,
    `offlinetraining_time` INTEGER NOT NULL,
    `offlinetraining_skill` INTEGER NOT NULL,
    `stamina` INTEGER NOT NULL,
    `skill_fist` INTEGER NOT NULL,
    `skill_fist_tries` INTEGER NOT NULL,
    `skill_club` INTEGER NOT NULL,
    `skill_club_tries` INTEGER NOT NULL,
    `skill_sword` INTEGER NOT NULL,
    `skill_sword_tries` INTEGER NOT NULL,
    `skill_axe` INTEGER NOT NULL,
    `skill_axe_tries` INTEGER NOT NULL,
    `skill_dist` INTEGER NOT NULL,
    `skill_dist_tries` INTEGER NOT NULL,
    `skill_shielding` INTEGER NOT NULL,
    `skill_shielding_tries` INTEGER NOT NULL,
    `skill_fishing` INTEGER NOT NULL,
    `skill_fishing_tries` INTEGER NOT NULL,
    `deleted` BOOLEAN NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `create_ip` INTEGER NOT NULL,
    `create_date` INTEGER NOT NULL,
    `hide_char` VARCHAR(191) NOT NULL,
    `cast` BOOLEAN NOT NULL,
    `skill_critical_hit_chance` INTEGER NOT NULL,
    `skill_critical_hit_chance_tries` INTEGER NOT NULL,
    `skill_critical_hit_damage` INTEGER NOT NULL,
    `skill_critical_hit_damage_tries` INTEGER NOT NULL,
    `skill_life_leech_chance` INTEGER NOT NULL,
    `skill_life_leech_chance_tries` INTEGER NOT NULL,
    `skill_life_leech_amount` INTEGER NOT NULL,
    `skill_life_leech_amount_tries` INTEGER NOT NULL,
    `skill_mana_leech_chance` INTEGER NOT NULL,
    `skill_mana_leech_chance_tries` INTEGER NOT NULL,
    `skill_mana_leech_amount` INTEGER NOT NULL,
    `skill_mana_leech_amount_tries` INTEGER NOT NULL,
    `skill_criticalhit_chance` INTEGER NOT NULL,
    `skill_criticalhit_damage` INTEGER NOT NULL,
    `skill_lifeleech_chance` INTEGER NOT NULL,
    `skill_lifeleech_amount` INTEGER NOT NULL,
    `skill_manaleech_chance` INTEGER NOT NULL,
    `skill_manaleech_amount` INTEGER NOT NULL,
    `xpboost_stamina` INTEGER NULL,
    `xpboost_value` BOOLEAN NULL,
    `marriage_status` INTEGER NOT NULL,
    `hide_skills` INTEGER NULL,
    `hide_set` INTEGER NULL,
    `former` VARCHAR(191) NOT NULL,
    `signature` VARCHAR(191) NOT NULL,
    `marriage_spouse` INTEGER NOT NULL,
    `loyalty_ranking` BOOLEAN NOT NULL,
    `madphp_signature` BOOLEAN NOT NULL,
    `madphp_signature_bg` VARCHAR(191) NOT NULL,
    `madphp_signature_eqs` BOOLEAN NOT NULL,
    `madphp_signature_bars` BOOLEAN NOT NULL,
    `madphp_signature_cache` INTEGER NOT NULL,
    `lookmount` INTEGER NOT NULL,
    `sbw_points` INTEGER NOT NULL,
    `InstantRewardTokens` INTEGER NULL,
    `bonus_rerolls` INTEGER NOT NULL,
    `onlinepoint` INTEGER NULL,
    `onlinepointtrie` INTEGER NULL,
    `hide_char_items` VARCHAR(191) NOT NULL,
    `tokens` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `players_online` (
    `player_id` INTEGER NOT NULL,

    PRIMARY KEY (`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sellchar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `vocation` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `oldid` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `server_config` (
    `config` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`config`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shop_inventories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemid` INTEGER NOT NULL,
    `item_amount` INTEGER NULL,
    `item_title` VARCHAR(191) NOT NULL,
    `item_description` VARCHAR(191) NULL,
    `item_image` VARCHAR(191) NULL,
    `sended_to` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `account_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shop_offers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coins` INTEGER NOT NULL,
    `itemid` INTEGER NOT NULL,
    `shop_amount` INTEGER NULL,
    `shop_type` INTEGER NOT NULL,
    `shop_title` VARCHAR(191) NOT NULL,
    `shop_description` VARCHAR(191) NULL,
    `shop_image` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shop_orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `transaction_id` INTEGER NOT NULL,
    `transaction_title` VARCHAR(191) NOT NULL,
    `payment_method` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `paid_value` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `account_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `store_history` (
    `accountid` INTEGER NOT NULL,
    `mode` BOOLEAN NOT NULL,
    `amount` INTEGER NOT NULL,
    `coinMode` BOOLEAN NOT NULL,
    `description` VARCHAR(191) NULL,
    `cust` INTEGER NOT NULL,
    `time` INTEGER NULL,

    PRIMARY KEY (`accountid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `threads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `character_name` VARCHAR(191) NOT NULL,
    `body_text` VARCHAR(191) NOT NULL,
    `views` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `board_id` INTEGER NOT NULL,
    `account_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tickets` (
    `ticket_id` INTEGER NOT NULL,
    `ticket_subject` VARCHAR(191) NOT NULL,
    `ticket_author` VARCHAR(191) NOT NULL,
    `ticket_author_acc_id` INTEGER NOT NULL,
    `ticket_last_reply` VARCHAR(191) NOT NULL,
    `ticket_admin_reply` INTEGER NOT NULL,
    `ticket_date` DATETIME(3) NOT NULL,
    `ticket_ended` VARCHAR(191) NOT NULL,
    `ticket_status` VARCHAR(191) NOT NULL,
    `ticket_category` VARCHAR(191) NOT NULL,
    `ticket_description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ticket_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tile_store` (
    `house_id` INTEGER NOT NULL,
    `data` LONGBLOB NOT NULL,

    PRIMARY KEY (`house_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_thread_id_fkey` FOREIGN KEY (`thread_id`) REFERENCES `threads`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `guild_invites` ADD CONSTRAINT `guild_invites_player_id_fkey` FOREIGN KEY (`player_id`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `guild_invites` ADD CONSTRAINT `guild_invites_guild_id_fkey` FOREIGN KEY (`guild_id`) REFERENCES `guilds`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `guild_membership` ADD CONSTRAINT `guild_membership_player_id_fkey` FOREIGN KEY (`player_id`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `guild_membership` ADD CONSTRAINT `guild_membership_guild_id_fkey` FOREIGN KEY (`guild_id`) REFERENCES `guilds`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `guild_ranks` ADD CONSTRAINT `guild_ranks_guild_id_fkey` FOREIGN KEY (`guild_id`) REFERENCES `guilds`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventories` ADD CONSTRAINT `inventories_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `player_preydata` ADD CONSTRAINT `player_preydata_player_id_fkey` FOREIGN KEY (`player_id`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shop_inventories` ADD CONSTRAINT `shop_inventories_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shop_orders` ADD CONSTRAINT `shop_orders_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `threads` ADD CONSTRAINT `threads_board_id_fkey` FOREIGN KEY (`board_id`) REFERENCES `forum_board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `threads` ADD CONSTRAINT `threads_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
