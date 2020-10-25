-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.21-0ubuntu0.20.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20200707212655-add_createdAt_toAccount.js'),('20200707212707-add_updatedAt_toAccount.js'),('20200710204610-add_createdAt_toPlayer.js'),('20200710204630-add_updatedAt_toPlayer.js'),('20200714200927-add_jwtVersion_to_account.js'),('20200908232834-add_createdAt_to_z_forum.js'),('20200908232915-add_updatedAt_to_z_forum.js'),('20200914024403-add_updatedAt_to_player_deaths.js'),('20200914024416-add_createdAt_to_player_deaths.js'),('20200916224120-add_likes_count_to_z_forum.js'),('20201024220250-add_avatar_to_account.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_ban_history`
--

DROP TABLE IF EXISTS `account_ban_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_ban_history` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int NOT NULL,
  `reason` varchar(255) NOT NULL,
  `banned_at` bigint NOT NULL,
  `expired_at` bigint NOT NULL,
  `banned_by` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  KEY `banned_by` (`banned_by`),
  KEY `account_id_2` (`account_id`),
  KEY `account_id_3` (`account_id`),
  KEY `account_id_4` (`account_id`),
  KEY `account_id_5` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_ban_history`
--

LOCK TABLES `account_ban_history` WRITE;
/*!40000 ALTER TABLE `account_ban_history` DISABLE KEYS */;
INSERT INTO `account_ban_history` VALUES (1,1570,'',1579230954,1579835754,4),(2,1926,'30',1579748869,1580353669,4),(3,1596,'',1580356465,1580961265,4);
/*!40000 ALTER TABLE `account_ban_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_bans`
--

DROP TABLE IF EXISTS `account_bans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_bans` (
  `account_id` int NOT NULL,
  `reason` varchar(255) NOT NULL,
  `banned_at` bigint NOT NULL,
  `expires_at` bigint NOT NULL,
  `banned_by` int NOT NULL,
  PRIMARY KEY (`account_id`),
  KEY `banned_by` (`banned_by`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_bans`
--

LOCK TABLES `account_bans` WRITE;
/*!40000 ALTER TABLE `account_bans` DISABLE KEYS */;
/*!40000 ALTER TABLE `account_bans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_character_sale`
--

DROP TABLE IF EXISTS `account_character_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_character_sale` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_account` int NOT NULL,
  `id_player` int NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `price_type` tinyint NOT NULL,
  `price_coins` int DEFAULT NULL,
  `price_gold` int DEFAULT NULL,
  `dta_insert` datetime NOT NULL,
  `dta_valid` datetime NOT NULL,
  `dta_sale` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_player_UNIQUE` (`id_player`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_character_sale`
--

LOCK TABLES `account_character_sale` WRITE;
/*!40000 ALTER TABLE `account_character_sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `account_character_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_character_sale_history`
--

DROP TABLE IF EXISTS `account_character_sale_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_character_sale_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_old_account` int DEFAULT NULL,
  `id_player` int DEFAULT NULL,
  `id_new_account` int DEFAULT NULL,
  `price_type` tinyint(1) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `char_id` int DEFAULT NULL,
  `dta_insert` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dta_sale` datetime DEFAULT NULL,
  `extornada` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `id_old_acc_idx` (`id_old_account`) USING BTREE,
  KEY `id_new_acc_idx` (`id_new_account`) USING BTREE,
  KEY `id_player_idx` (`id_player`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_character_sale_history`
--

LOCK TABLES `account_character_sale_history` WRITE;
/*!40000 ALTER TABLE `account_character_sale_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `account_character_sale_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_viplist`
--

DROP TABLE IF EXISTS `account_viplist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_viplist` (
  `account_id` int NOT NULL COMMENT 'id of account whose viplist entry it is',
  `player_id` int NOT NULL COMMENT 'id of target player of viplist entry',
  `description` varchar(128) NOT NULL DEFAULT '',
  `icon` tinyint unsigned NOT NULL DEFAULT '0',
  `notify` tinyint(1) NOT NULL DEFAULT '0',
  UNIQUE KEY `account_player_index` (`account_id`,`player_id`),
  KEY `account_id` (`account_id`),
  KEY `player_id` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_viplist`
--

LOCK TABLES `account_viplist` WRITE;
/*!40000 ALTER TABLE `account_viplist` DISABLE KEYS */;
INSERT INTO `account_viplist` VALUES (2,7,'',0,0),(3,5,'',2,0),(3,6,'',2,0),(3,9,'',2,0),(3,13,'',2,0),(3,14,'',0,0),(3,19,'',0,0),(3,28,'',0,0),(3,36,'',0,0),(3,44,'',0,0),(5,4,'',0,0),(5,6,'',0,0),(5,9,'',0,0),(5,42,'',0,0),(6,4,'',0,0),(6,5,'',0,0),(6,28,'',0,0),(8,4,'',0,0),(8,5,'',0,0),(8,6,'',0,0),(8,9,'',0,0),(8,13,'',0,0),(8,28,'',0,0),(9,4,'',0,0),(9,5,'',0,0),(9,8,'',0,0),(9,13,'',0,0),(9,15,'',0,0),(10,3,'',0,0),(12,14,'',0,0),(12,15,'',0,0),(13,12,'',0,0),(13,3479,'',0,0),(14,5,'',0,0),(14,9,'',0,0),(14,11,'',0,0),(14,12,'',0,0),(14,14,'',0,0),(17,20,'',0,0),(19,4,'',0,0),(19,14,'',0,0),(21,14,'',0,0),(22,28,'',0,0),(23,9,'',0,0),(23,28,'',0,0),(26,4,'',0,0),(26,23,'',0,0),(31,4,'',0,0),(35,4,'',0,0),(43,56,'',0,0),(52,56,'',0,0);
/*!40000 ALTER TABLE `account_viplist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `password` char(40) NOT NULL,
  `secret` char(16) DEFAULT NULL,
  `type` int NOT NULL DEFAULT '1',
  `premdays` int NOT NULL DEFAULT '0',
  `coins` int NOT NULL DEFAULT '0',
  `lastday` int unsigned NOT NULL DEFAULT '0',
  `email` varchar(255) NOT NULL DEFAULT '',
  `creation` int NOT NULL DEFAULT '0',
  `jwtVersion` int NOT NULL DEFAULT '0',
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `vote` int NOT NULL,
  `key` varchar(20) NOT NULL DEFAULT '0',
  `email_new` varchar(255) NOT NULL DEFAULT '',
  `email_new_time` int NOT NULL DEFAULT '0',
  `rlname` varchar(255) NOT NULL DEFAULT '',
  `location` varchar(255) NOT NULL DEFAULT '',
  `page_access` int NOT NULL DEFAULT '0',
  `email_code` varchar(255) NOT NULL DEFAULT '',
  `next_email` int NOT NULL DEFAULT '0',
  `premium_points` int NOT NULL DEFAULT '0',
  `secret_status` tinyint(1) NOT NULL DEFAULT '0',
  `create_date` int unsigned NOT NULL DEFAULT '0',
  `create_ip` bigint NOT NULL DEFAULT '0',
  `last_post` int NOT NULL DEFAULT '0',
  `flag` varchar(80) NOT NULL DEFAULT '',
  `vip_time` int NOT NULL DEFAULT '0',
  `guild_points` int NOT NULL DEFAULT '0',
  `guild_points_stats` int NOT NULL DEFAULT '0',
  `passed` int NOT NULL DEFAULT '0',
  `block` int NOT NULL DEFAULT '0',
  `refresh` int NOT NULL DEFAULT '0',
  `birth_date` varchar(50) NOT NULL DEFAULT '',
  `gender` varchar(20) NOT NULL DEFAULT '',
  `avatar` varchar(255) NOT NULL DEFAULT '',
  `loyalty_points` bigint NOT NULL DEFAULT '0',
  `authToken` varchar(100) NOT NULL DEFAULT '',
  `player_sell_bank` int DEFAULT NULL,
  `tournamentBalance` int NOT NULL DEFAULT '0',
  `tokens` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `name_2` (`name`),
  UNIQUE KEY `name_3` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,'ehuae8283@#1l','067d2a52b8a3ae6f465a4210a694e57be8e74307','',1,0,0,0,'',0,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'0','',0,'','',0,'',0,0,0,0,0,0,'unknown',0,0,0,0,0,0,'','','',0,'',0,0,0),(2,'899681','13684b0a5ab8fef1d747d1815a6a597628e24529','',5,500,21556,0,'pedrin.rlx@hotmail.com',1582573468,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'E1U6-IGOL-Y1EW-E0IL','',0,'Pedro Henrique','Rio de Janeiro',3,'',0,0,0,0,3014692860,1588797614,'unknown',0,0,0,0,0,0,'10/10/1994','male','',0,'',0,0,0),(7,'ADMIN','91fb36f870816ef23e5127c11585c60b7af2cbed','',5,500,7525,0,'yago_jovemfla@hotmail.com',1588794878,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'ABIX-EXUW-IDAV-Y3OX','',0,'Yago Neno','Rio de Janeiro',3,'',0,0,0,0,2982180554,0,'br',0,0,0,0,0,0,'6/5/1994','male','',0,'',0,0,0),(36,'048637','3c5f649ff3026812a9012ec7afdf8a38a954bf25','',1,500,0,0,'pedrin.rlxx@hotmail.com',1597619529,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'HO7O-QORE-7UQA-JU3Y','',0,'Pedro Henrique Giampietro','Rio de Janeiro',0,'',0,0,0,0,3206584976,1603562256,'unknown',0,0,0,0,0,0,'10/10/1994','male','',0,'',0,0,0),(37,'731290Y','c8fb2cc9dabc8f0c6be87cae39ae9cd38145dc48','',1,500,0,0,'yago_ubz@hotmail.com',1597621800,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'6YPY-7YWO-VA2E-MAZA','',0,'Yago Neno','Rio de Janeiro',0,'',0,0,0,0,2982180358,0,'br',0,0,0,0,0,0,'6/5/1994','male','',0,'',0,0,0),(38,'9475518','759118733ec55bb3d98627cfc72026daa968268b','',1,500,0,0,'email.edenfield@gmail.com',1597622997,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'PANE-LI1E-SUWI-8I6U','',0,'Murilo moreno Moreno','Araras',0,'',0,0,0,0,2826550320,0,'unknown',0,0,0,0,0,0,'29/12/1992','male','',0,'',0,0,0),(39,'MASTERINK','e105a6432dcf5fa2cc69595816bedc8bf00a073b','',1,500,0,0,'douglasimperial1@outlook.com',1597680167,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'0UJE-0I5Y-ZABA-TODO','',0,'Douglas Custodio','Sumare',0,'',0,0,0,0,3370968142,0,'br',0,0,0,0,0,0,'7/10/1980','male','',0,'',0,0,0),(40,'041093','c33175ba659d440c1fb00c5054b25218ec675d88','',1,500,0,0,'dumedeirosgames@gmail.com',1597684064,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'MY5U-RE4E-0UDU-QYLO','',0,'Eduardo Medeiros','Rio de Janeiro',0,'',0,0,0,0,3005404715,0,'unknown',0,0,0,0,0,0,'4/10/1993','male','',0,'',0,0,0),(41,'130395','c33175ba659d440c1fb00c5054b25218ec675d88','',1,500,0,0,'dudu_medeiros@terra.com.br',1597684124,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'Y4EX-ESIW-UHUT-UVID','',0,'Leonardo Medeiros','Rio de Janeiro',0,'',0,0,0,0,3005404715,0,'unknown',0,0,0,0,0,0,'8/3/1993','male','',0,'',0,0,0),(42,'KRANZIX1','c6e47b3e666e265f11bffb847361ad236bf2bb12','',1,500,0,0,'kranzixmagalhaes@gmail.com',1597714278,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'5OQY-RYLO-8YXA-VU6E','',0,'Kayky Silva','S√É¬£o Paulo',0,'',0,0,0,0,3381985192,0,'mx',0,0,0,0,0,0,'0/0/0','','',0,'',0,0,0),(43,'LUISDEAR','a3828b57af1ec21d70f5da1175cf2a5785e09b48','',1,500,0,0,'aldebaran_jester@outlook.es',1597812575,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'OPE1-UVU4-YLOD-IGIV','',0,'Luis Hgfgfgfgf','Mexico',0,'',0,0,0,0,3147087065,0,'mx',0,0,0,0,0,0,'13/4/1999','male','',0,'',0,0,0),(44,'227099','5d6ee2bc385a041e1498c9eb9b0b3959174a237f','',1,500,0,0,'k@gmail.com',1597844905,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'2OBA-LO1E-6AXO-PE1E','',0,'X X','X',0,'',0,0,0,0,1841590862,0,'unknown',0,0,0,0,0,0,'1/1/2009','female','',0,'',0,0,0),(45,'VOKAHUR','480079dc8b61724ac80d0d08988f6aaf53966750','',1,500,0,0,'voka123@gmail.com',1597873053,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'IWU3-EXIZ-I8O5-EMAQ','',0,'Lucas Corr√É¬™a','Angra dos reis',0,'',0,0,0,0,2974192961,0,'br',0,0,0,0,0,0,'29/4/2001','male','',0,'',0,0,0),(46,'PHILIPPSEN','f71ea96d4c3c2c1e2e78e1199e0091ad9ebb6c40','',1,500,0,0,'jonasphilippsen@gmail.com',1597885605,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'EJU0-INEJ-EJY8-YDA3','',0,'Jonas Philippsen','Santo Cristo',0,'',0,0,0,0,2973904301,0,'br',0,0,0,0,0,0,'6/3/1979','male','',0,'',0,0,0),(47,'THALISLIKAN','08e5c7b64b0f2042ea1b25a2fbe842517e1eb1e1','',1,500,0,0,'ledaivon@Hotmail.com',1597915663,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'ONIP-OBO5-UVO3-YNIS','',0,'Davyson Rocha','SP',0,'',0,0,0,0,3014529197,0,'unknown',0,0,0,0,0,0,'8/2/1992','male','',0,'',0,0,0),(48,'ADEILTON','d47a9c06e4fb75f6ccdf4e0bcda9bf5badc19535','',1,500,0,0,'adeilton.ata@gmail.com',1597920250,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'GU3E-ZE5O-ME1O-NA0E','',0,'Adeilton Pessini','Cariacica',0,'',0,0,0,0,3018520994,0,'unknown',0,0,0,0,0,0,'27/2/1996','male','',0,'',0,0,0),(49,'HJCOUTINHO000','d1820e9ca06e596fbb7cf68899fbfdfc044ef37d','',1,500,0,0,'hjrcoutinho@gmail.com',1597928438,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'EPUJ-A8OS-A0O1-AQEN','',0,'Hilton Junior','Piabeta',0,'',0,0,0,0,2327456745,0,'unknown',0,0,0,0,0,0,'17/4/1992','male','',0,'',0,0,0),(50,'LOCOMASTE1','3bfccc03236bc63aeda8b15932c139cfb5e3964f','',1,500,0,0,'Gisselgarcia6@outlook.es',1597951067,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'BIJE-6IGY-DUVE-5Y2U','',0,'Sofia Caste','Mexico',0,'',0,0,0,0,3147087065,0,'mx',0,0,0,0,0,0,'26/7/2000','female','',0,'',0,0,0),(51,'510510','f43c177af714f7cd4da75c7777c30698a3ee0ebb','',1,500,0,0,'kaikera92@gmail.com',1598049777,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'BYLY-RY4E-6U6U-BOSI','',0,'Kaique Sarmento de Oliveira','Montes Claros',0,'',0,0,0,0,2970261055,0,'br',0,0,0,0,0,0,'2/12/1992','male','',0,'',0,0,0),(52,'523523','b6d97e161fb218dbbcd7016745da2d39a1c4c8bd','',1,500,0,0,'Michel.ca.valheiro@yahoo.com.br',1598055031,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'ISOD-ISEN-EPEX-OTIV','',0,'Michel Cavalheiro','Rio Grande Rs',0,'',0,0,0,0,3051130848,0,'unknown',0,0,0,0,0,0,'17/2/1995','male','',0,'',0,0,0),(53,'FELIPEH44G','db07aec8e9aebfc1081a1f1bfbb6df66fb47fa84','',1,500,0,0,'felipeh44g@gmail.com',1598126284,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'9YXY-XARI-ZYXU-HO7O','',0,'Felipe Haag','Blumenau',0,'',0,0,0,0,2317668289,0,'unknown',0,0,0,0,0,0,'7/11/1997','male','',0,'',0,0,0),(54,'WEVERR123','9792e57a5c226b8976bc89c29ebe2e0106516214','',1,500,0,0,'weverodriguess@gmail.com',1598138103,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'1U6O-TY2O-6Y2Y-WULU','',0,'Swerd Outs','Barra do Pira√É¬≠',0,'',0,0,0,0,3010171871,0,'unknown',0,0,0,0,0,0,'29/10/1992','male','',0,'',0,0,0),(55,'JONEX15','a2c1b99740bff6e5c721612144c95813e95f3635','',1,500,0,0,'jonas-jcl@hotmail.com',1598195708,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'A2ES-ATA5-EXUJ-EZA1','',0,'Jonas ferreira Reis','Araguari',0,'',0,0,0,0,3149229908,0,'mx',0,0,0,0,0,0,'13/10/1994','male','',0,'',0,0,0),(56,'3236322','8dc26f96c3711f44d8af02edd8efff93194610dc','',1,500,0,0,'guga@lol.com',1598198382,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'RUZO-9IQI-2UJU-RO5O','',0,'Aquele Um','Logo ali',0,'',0,0,0,0,3138873259,0,'br',0,0,0,0,0,0,'1/12/1989','male','',0,'',0,0,0),(57,'MAHHCPS','172cfdad22934bc5d6a650685d5b3e210e958cf1','',1,500,0,0,'mama@hotmail.com',1598233163,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'0OPO-PU1A-4OHI-RYXU','',0,'23123 123213','12312312',0,'',0,0,0,0,3377607370,0,'br',0,0,0,0,0,0,'28/11/1991','male','',0,'',0,0,0),(58,'FELIPEGLIMA','ea0632ac98aa774d2a126683ded17fb9cc30c4d0','',1,500,0,0,'felipeglima2012@gmail.com',1598244301,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'1E2Y-2ILU-6OXI-8ASE','',0,'Felipe Lima','S√É¬£o Paulo',0,'',0,0,0,0,2974932289,0,'br',0,0,0,0,0,0,'21/1/1999','male','',0,'',0,0,0),(59,'3853855','c316eb726a40ab38c29b37e632da4bd66a8e4904','',1,500,0,0,'xd_gil@hotmail.com',1598315115,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'MY8I-ZY0U-5UTE-BAMY','',0,'Guillermo Ernesto','Mexico',0,'',0,0,0,0,3185237115,0,'mx',0,0,0,0,0,0,'10/10/1995','male','',0,'',0,0,0),(60,'JOSUEH','3bd13526c3b333d4c568e172d875f9ce267a1269','',1,500,0,0,'josue.ws@outlook.com',1598327671,0,'2020-10-24 18:45:37.966','2020-10-24 18:45:37.918',0,'Y1IT-ERY3-U5I9-IJYV','',0,'Aurora Polar','Candy',0,'',0,0,0,0,2979791997,0,'br',0,0,0,0,0,0,'25/12/1997','female','',0,'',0,0,0),(61,'154154','3c5f649ff3026812a9012ec7afdf8a38a954bf25','',1,500,0,0,'pedro@hotmail.com',1603561937,0,'2020-10-24 22:45:35.000','2020-10-24 18:45:37.918',0,'BOJA-POPI-MU1I-NODA','',0,'Asdas Asdasd','Sadsa',0,'',0,0,0,0,3014936805,1603562308,'unknown',0,0,0,0,0,0,'17/4/1991','female','uploads/7d895d6b-b177-5f0e-bf36-998da80d1d40Avatar.jpg',0,'',0,0,0);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `accounts_options`
--

DROP TABLE IF EXISTS `accounts_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts_options` (
  `account_id` int NOT NULL,
  `options` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts_options`
--

LOCK TABLES `accounts_options` WRITE;
/*!40000 ALTER TABLE `accounts_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `accounts_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `announcements`
--

DROP TABLE IF EXISTS `announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `text` varchar(255) NOT NULL,
  `date` varchar(20) NOT NULL,
  `author` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcements`
--

LOCK TABLES `announcements` WRITE;
/*!40000 ALTER TABLE `announcements` DISABLE KEYS */;
/*!40000 ALTER TABLE `announcements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atr_wiki_category`
--

DROP TABLE IF EXISTS `atr_wiki_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atr_wiki_category` (
  `id_atr_wiki_category` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `dta_insert` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dta_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `dta_deleted` datetime DEFAULT NULL,
  `is_active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_atr_wiki_category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atr_wiki_category`
--

LOCK TABLES `atr_wiki_category` WRITE;
/*!40000 ALTER TABLE `atr_wiki_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `atr_wiki_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atr_wiki_subcategory`
--

DROP TABLE IF EXISTS `atr_wiki_subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atr_wiki_subcategory` (
  `id_atr_wiki_subcategory` int NOT NULL AUTO_INCREMENT,
  `id_atr_wiki_category` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `text` text NOT NULL,
  `dta_insert` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dta_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `dta_deleted` datetime DEFAULT NULL,
  `is_active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_atr_wiki_subcategory`),
  KEY `FK_ID_wiki_CATEGORY_idx` (`id_atr_wiki_category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atr_wiki_subcategory`
--

LOCK TABLES `atr_wiki_subcategory` WRITE;
/*!40000 ALTER TABLE `atr_wiki_subcategory` DISABLE KEYS */;
/*!40000 ALTER TABLE `atr_wiki_subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blessings_history`
--

DROP TABLE IF EXISTS `blessings_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blessings_history` (
  `id` int NOT NULL,
  `player_id` int NOT NULL,
  `blessing` tinyint NOT NULL,
  `loss` tinyint(1) NOT NULL,
  `timestamp` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blessings_history`
--

LOCK TABLES `blessings_history` WRITE;
/*!40000 ALTER TABLE `blessings_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `blessings_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_reward_history`
--

DROP TABLE IF EXISTS `daily_reward_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_reward_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `daystreak` smallint NOT NULL DEFAULT '0',
  `player_id` int NOT NULL,
  `timestamp` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `player_id` (`player_id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_reward_history`
--

LOCK TABLES `daily_reward_history` WRITE;
/*!40000 ALTER TABLE `daily_reward_history` DISABLE KEYS */;
INSERT INTO `daily_reward_history` VALUES (1,0,3479,1587249495,'Claimed reward no. 1. Picked items: 10x mana potion.'),(2,0,14,1588807027,'Claimed reward no. 1. Picked items: 10x health potion.'),(3,0,11,1588814225,'Claimed reward no. 1. Picked items: 10x mana potion.'),(4,0,21,1588817377,'Claimed reward no. 1. Picked items: 10x health potion.'),(5,0,5,1588823346,'Claimed reward no. 1. Picked items: 10x strong health potion.'),(6,0,3,1588859897,'Claimed reward no. 1. Picked items: 10x mana potion.'),(7,0,12,1588860253,'Claimed reward no. 1. Picked items: 10x mana potion.'),(8,1,11,1588882478,'Claimed reward no. 2. Picked items: 10x mana potion.'),(9,1,5,1588910028,'Claimed reward no. 2. Picked items: 10x mana potion.'),(10,1,14,1588910088,'Claimed reward no. 2. Picked items: 10x mana potion.'),(11,1,21,1588915764,'Claimed reward no. 2. Picked items: 10x health potion.'),(12,2,11,1588951183,'Claimed reward no. 3. Picked items: 10x strong mana potion.'),(13,0,36,1588976486,'Claimed reward no. 1. Picked items: 10x mana potion.'),(14,2,14,1589036682,'Claimed reward no. 3. Picked items: 10x mana potion.'),(15,0,9,1589055515,'Claimed reward no. 1. Picked items: 10x strong mana potion.'),(16,2,5,1589070081,'Claimed reward no. 3. Picked items: 10x mana potion.'),(17,0,52,1597867519,'Claimed reward no. 1. Picked items: 10x mana potion.'),(18,0,53,1597867556,'Claimed reward no. 1. Picked items: 10x health potion.'),(19,0,55,1597867852,'Claimed reward no. 1. Picked items: 10x mana potion.'),(20,0,56,1597878827,'Claimed reward no. 1. Picked items: 10x strong mana potion.'),(21,1,52,1597950882,'Claimed reward no. 2. Picked items: 10x great spirit potion.'),(22,1,55,1597950927,'Claimed reward no. 2. Picked items: 10x mana potion.'),(23,1,53,1597950962,'Claimed reward no. 2. Picked items: 10x great spirit potion.'),(24,0,67,1597951664,'Claimed reward no. 1. Picked items: 10x great spirit potion.'),(25,0,68,1597951847,'Claimed reward no. 1. Picked items: 10x great spirit potion.'),(26,0,66,1597952178,'Claimed reward no. 1. Picked items: 10x great spirit potion.'),(27,0,62,1597952336,'Claimed reward no. 1. Picked items: 10x great spirit potion.'),(28,1,56,1597956401,'Claimed reward no. 2. Picked items: 10x strong mana potion.'),(29,0,65,1597961447,'Claimed reward no. 1. Picked items: 10x great spirit potion.'),(30,0,64,1597961676,'Claimed reward no. 1. Picked items: 10x great spirit potion.'),(31,0,63,1597961925,'Claimed reward no. 1. Picked items: 10x great spirit potion.'),(32,2,56,1598021194,'Claimed reward no. 3. Picked items: 10x strong mana potion.'),(33,2,55,1598045492,'Claimed reward no. 3. Picked items: 10x great spirit potion.'),(34,2,53,1598045523,'Claimed reward no. 3. Picked items: 10x great spirit potion.'),(35,1,67,1598045570,'Claimed reward no. 2. Picked items: 10x great spirit potion.'),(36,1,68,1598045602,'Claimed reward no. 2. Picked items: 10x great spirit potion.'),(37,1,66,1598045630,'Claimed reward no. 2. Picked items: 10x great spirit potion.'),(38,1,62,1598045659,'Claimed reward no. 2. Picked items: 10x great spirit potion.'),(39,1,65,1598045685,'Claimed reward no. 2. Picked items: 10x great spirit potion.'),(40,1,64,1598045713,'Claimed reward no. 2. Picked items: 10x great spirit potion.'),(41,1,63,1598045749,'Claimed reward no. 2. Picked items: 10x great spirit potion.'),(42,2,52,1598045799,'Claimed reward no. 3. Picked items: 10x great spirit potion.'),(43,3,52,1598107512,'Claimed reward no. 4. Picked items: 20x great spirit potion.'),(44,3,55,1598107536,'Claimed reward no. 4. Picked items: 20x great spirit potion.'),(45,3,53,1598107566,'Claimed reward no. 4. Picked items: 20x great spirit potion.'),(46,2,63,1598107640,'Claimed reward no. 3. Picked items: 10x great spirit potion.'),(47,2,64,1598107672,'Claimed reward no. 3. Picked items: 10x great spirit potion.'),(48,2,65,1598107724,'Claimed reward no. 3. Picked items: 10x great spirit potion.'),(49,2,62,1598107752,'Claimed reward no. 3. Picked items: 10x great spirit potion.'),(50,2,66,1598107783,'Claimed reward no. 3. Picked items: 10x great spirit potion.'),(51,2,68,1598107808,'Claimed reward no. 3. Picked items: 10x great spirit potion.'),(52,2,67,1598107834,'Claimed reward no. 3. Picked items: 10x great spirit potion.'),(53,3,56,1598114958,'Claimed reward no. 4. Picked items: 20x strong mana potion.'),(54,4,52,1598190213,'Claimed reward no. 5. Picked items: 10x great spirit potion.'),(55,4,55,1598190235,'Claimed reward no. 5. Picked items: 10x great spirit potion.'),(56,4,53,1598190264,'Claimed reward no. 5. Picked items: 10x great spirit potion.'),(57,3,67,1598190326,'Claimed reward no. 4. Picked items: 20x great spirit potion.'),(58,3,68,1598190351,'Claimed reward no. 4. Picked items: 20x great spirit potion.'),(59,3,66,1598190377,'Claimed reward no. 4. Picked items: 20x great spirit potion.'),(60,3,62,1598190404,'Claimed reward no. 4. Picked items: 20x great spirit potion.'),(61,3,65,1598190450,'Claimed reward no. 4. Picked items: 20x great spirit potion.'),(62,3,64,1598190480,'Claimed reward no. 4. Picked items: 20x great spirit potion.'),(63,3,63,1598190508,'Claimed reward no. 4. Picked items: 20x great spirit potion.'),(64,4,56,1598211631,'Claimed reward no. 5. Picked items: 10x strong mana potion.'),(65,5,52,1598275241,'Claimed reward no. 6. Picked items: 2x training rod.'),(66,5,55,1598275265,'Claimed reward no. 6. Picked items: 2x training rod.'),(67,5,53,1598275339,'Claimed reward no. 6. Picked items: 2x training rod.'),(68,4,67,1598275481,'Claimed reward no. 5. Picked items: 10x great spirit potion.'),(69,4,68,1598275506,'Claimed reward no. 5. Picked items: 10x great spirit potion.'),(70,4,66,1598275530,'Claimed reward no. 5. Picked items: 10x great spirit potion.'),(71,4,62,1598275562,'Claimed reward no. 5. Picked items: 10x great spirit potion.'),(72,4,65,1598275590,'Claimed reward no. 5. Picked items: 10x great spirit potion.'),(73,4,64,1598275617,'Claimed reward no. 5. Picked items: 10x great spirit potion.'),(74,4,63,1598275645,'Claimed reward no. 5. Picked items: 10x great spirit potion.'),(75,6,52,1598395947,'Claimed reward no. 7. Picked reward: XP Bonus for 30 minutes.');
/*!40000 ALTER TABLE `daily_reward_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dtt_results`
--

DROP TABLE IF EXISTS `dtt_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dtt_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `frags_blue` int NOT NULL,
  `frags_red` int NOT NULL,
  `towers_blue` int NOT NULL,
  `towers_red` int NOT NULL,
  `data` varchar(255) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  `hora` varchar(255) CHARACTER SET utf8 COLLATE utf8_swedish_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dtt_results`
--

LOCK TABLES `dtt_results` WRITE;
/*!40000 ALTER TABLE `dtt_results` DISABLE KEYS */;
/*!40000 ALTER TABLE `dtt_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_misc`
--

DROP TABLE IF EXISTS `global_misc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `global_misc` (
  `key` int NOT NULL,
  `world_id` tinyint unsigned NOT NULL DEFAULT '0',
  `info` blob NOT NULL,
  UNIQUE KEY `key` (`key`,`world_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_misc`
--

LOCK TABLES `global_misc` WRITE;
/*!40000 ALTER TABLE `global_misc` DISABLE KEYS */;
/*!40000 ALTER TABLE `global_misc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_storage`
--

DROP TABLE IF EXISTS `global_storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `global_storage` (
  `key` int DEFAULT NULL,
  `world_id` tinyint unsigned NOT NULL DEFAULT '0',
  `value` int DEFAULT NULL,
  UNIQUE KEY `key` (`key`,`world_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_storage`
--

LOCK TABLES `global_storage` WRITE;
/*!40000 ALTER TABLE `global_storage` DISABLE KEYS */;
INSERT INTO `global_storage` VALUES (14110,0,1598518800),(3306,0,1598518877);
/*!40000 ALTER TABLE `global_storage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guild_invites`
--

DROP TABLE IF EXISTS `guild_invites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guild_invites` (
  `player_id` int NOT NULL DEFAULT '0',
  `guild_id` int NOT NULL DEFAULT '0',
  `date` int NOT NULL,
  PRIMARY KEY (`player_id`,`guild_id`),
  KEY `guild_id` (`guild_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guild_invites`
--

LOCK TABLES `guild_invites` WRITE;
/*!40000 ALTER TABLE `guild_invites` DISABLE KEYS */;
INSERT INTO `guild_invites` VALUES (135,1,1579186358),(337,19,1580651957),(580,3,1578006487),(590,3,1578006475),(592,1,1579121390),(643,3,1578006675),(705,3,1578006515),(706,3,1578006688),(833,1,1577657159),(835,1,1577656859),(877,12,1579193826),(945,10,1579021619),(974,20,1580842778),(1099,10,1579021614),(1099,12,1579110259),(1111,5,1578923586),(1143,9,1579026253),(1143,19,1580859014),(1236,6,1578442451),(1237,6,1578442466),(1333,8,1578597243),(1404,12,1579464054),(1434,12,1579059532),(1510,1,1579214887),(1516,1,1579216192),(1543,5,1578925768),(1621,12,1579464942),(1726,9,1579052019),(1768,11,1579044111),(1802,11,1579050843),(1806,9,1579059335),(1837,20,1580842725),(1909,20,1580853695),(1990,20,1580842769),(2012,17,1579384123),(2155,1,1579818221),(2160,22,1580413341),(2231,20,1580228778),(2231,22,1580413389),(2238,12,1579476957),(2261,15,1579384687),(2262,15,1579384649),(2503,22,1581348471),(2831,20,1580842385),(3271,19,1581093531),(3275,19,1581095380);
/*!40000 ALTER TABLE `guild_invites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guild_membership`
--

DROP TABLE IF EXISTS `guild_membership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guild_membership` (
  `player_id` int NOT NULL,
  `guild_id` int NOT NULL,
  `rank_id` int NOT NULL,
  `nick` varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY (`player_id`),
  KEY `guild_id` (`guild_id`),
  KEY `rank_id` (`rank_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guild_membership`
--

LOCK TABLES `guild_membership` WRITE;
/*!40000 ALTER TABLE `guild_membership` DISABLE KEYS */;
INSERT INTO `guild_membership` VALUES (142,19,80,''),(193,2,22,''),(215,19,81,''),(240,19,80,''),(301,19,80,''),(370,19,80,''),(424,19,80,''),(437,19,80,''),(439,19,80,''),(478,19,80,''),(539,19,80,''),(551,19,80,''),(576,19,78,''),(595,9,43,''),(619,9,45,''),(637,23,93,''),(640,3,27,'Nosso Gordinho '),(644,9,45,''),(679,2,24,''),(882,19,80,''),(889,19,80,''),(911,19,80,''),(1036,19,80,''),(1092,19,80,''),(1106,19,78,''),(1117,19,80,''),(1140,19,80,''),(1145,19,80,''),(1146,19,80,''),(1148,19,80,''),(1149,19,80,''),(1151,19,80,''),(1181,19,79,''),(1230,6,34,''),(1232,6,36,''),(1258,9,45,''),(1314,12,54,'4i20~'),(1316,8,42,''),(1332,8,40,''),(1334,19,80,''),(1335,19,80,''),(1339,12,56,''),(1340,8,42,''),(1341,9,45,''),(1365,12,56,''),(1379,12,65,''),(1382,19,80,''),(1396,9,45,''),(1415,12,55,''),(1420,19,80,''),(1445,19,80,''),(1448,9,45,''),(1491,9,45,''),(1509,18,75,''),(1519,12,64,''),(1550,12,65,''),(1557,12,63,''),(1600,9,45,''),(1609,19,80,''),(1612,9,45,''),(1646,17,74,''),(1647,9,45,''),(1651,17,72,''),(1656,9,45,''),(1657,20,83,''),(1697,9,45,''),(1702,19,80,''),(1705,11,51,''),(1724,11,53,''),(1748,9,45,''),(1749,9,45,''),(1750,12,63,''),(1771,17,72,''),(1794,9,45,''),(1809,11,53,''),(1865,22,92,''),(1892,9,45,''),(1894,9,45,''),(1905,16,69,''),(1911,16,71,''),(1912,16,71,''),(1913,16,71,''),(1914,16,71,''),(1915,16,71,''),(1918,16,71,''),(1919,16,71,''),(1924,17,72,''),(1935,16,71,''),(1973,16,71,''),(1987,16,71,''),(1989,19,80,''),(2003,22,92,''),(2031,15,66,''),(2035,15,68,''),(2050,17,73,''),(2149,1,21,''),(2159,22,92,''),(2258,15,68,''),(2354,20,84,''),(2357,22,92,''),(2548,19,79,''),(2578,19,80,''),(2592,20,82,''),(2599,19,80,''),(2660,19,80,''),(2681,17,74,''),(2697,17,74,''),(2713,19,80,''),(2724,19,80,''),(2772,22,92,''),(2776,20,83,''),(2792,19,80,''),(2800,19,80,''),(2864,19,80,''),(2924,19,80,''),(2950,22,92,''),(3106,22,92,''),(3120,23,95,'');
/*!40000 ALTER TABLE `guild_membership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guild_ranks`
--

DROP TABLE IF EXISTS `guild_ranks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guild_ranks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `guild_id` int NOT NULL COMMENT 'guild',
  `name` varchar(255) NOT NULL COMMENT 'rank name',
  `level` int NOT NULL COMMENT 'rank level - leader, vice, member, maybe something else',
  PRIMARY KEY (`id`),
  KEY `guild_id` (`guild_id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guild_ranks`
--

LOCK TABLES `guild_ranks` WRITE;
/*!40000 ALTER TABLE `guild_ranks` DISABLE KEYS */;
INSERT INTO `guild_ranks` VALUES (22,2,'the Leader',3),(23,2,'a Vice-Leader',2),(24,2,'a Member',1),(25,3,'the Leader',3),(26,3,'a Vice-Leader',2),(27,3,'a Member',1),(34,6,'the Leader',3),(35,6,'a Vice-Leader',2),(36,6,'a Member',1),(40,8,'the Leader',3),(41,8,'a Vice-Leader',2),(42,8,'a Member',1),(43,9,'the Leader',3),(44,9,'vice leader',2),(45,9,'a Member',1),(50,9,'ze cuervo',1),(51,11,'the Leader',3),(52,11,'a Vice-Leader',2),(53,11,'a Member',1),(54,12,'Leader',3),(55,12,'Vice-Leader',2),(56,12,'Tank',1),(63,12,'Shooter',1),(64,12,'Killer',1),(65,12,'Support',1),(66,15,'the Leader',3),(67,15,'a Vice-Leader',2),(68,15,'a Member',1),(69,16,'the Leader',3),(70,16,'a Vice-Leader',2),(71,16,'a Member',1),(72,17,'the Leader',3),(73,17,'a Vice-Leader',2),(74,17,'a Member',1),(75,18,'the Leader',3),(76,18,'a Vice-Leader',2),(77,18,'a Member',1),(78,19,'Lider',3),(79,19,'Vice Lider',2),(80,19,'Membro',1),(81,19,'The Golden',1),(82,20,'the Leader',3),(83,20,'a Vice-Leader',2),(84,20,'a Member',1),(85,20,'vice',1),(90,22,'one',3),(91,22,'one',2),(92,22,'one',1),(93,23,'Command Major',3),(94,23,'a Vice-Leader',2),(95,23,'Soldier',1);
/*!40000 ALTER TABLE `guild_ranks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guild_wars`
--

DROP TABLE IF EXISTS `guild_wars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guild_wars` (
  `id` int NOT NULL AUTO_INCREMENT,
  `guild1` int NOT NULL DEFAULT '0',
  `guild2` int NOT NULL DEFAULT '0',
  `name1` varchar(255) NOT NULL,
  `name2` varchar(255) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  `started` bigint NOT NULL DEFAULT '0',
  `ended` bigint NOT NULL DEFAULT '0',
  `toend` bigint NOT NULL DEFAULT '0',
  `buyin` bigint NOT NULL DEFAULT '0',
  `fraglimit` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `guild1` (`guild1`),
  KEY `guild2` (`guild2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guild_wars`
--

LOCK TABLES `guild_wars` WRITE;
/*!40000 ALTER TABLE `guild_wars` DISABLE KEYS */;
/*!40000 ALTER TABLE `guild_wars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guilds`
--

DROP TABLE IF EXISTS `guilds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guilds` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `ownerid` int NOT NULL,
  `creationdata` int NOT NULL,
  `motd` varchar(255) NOT NULL DEFAULT '',
  `description` text NOT NULL,
  `guild_logo` mediumblob,
  `create_ip` int NOT NULL DEFAULT '0',
  `balance` bigint unsigned NOT NULL DEFAULT '0',
  `last_execute_points` int NOT NULL DEFAULT '0',
  `logo_gfx_name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `ownerid` (`ownerid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guilds`
--

LOCK TABLES `guilds` WRITE;
/*!40000 ALTER TABLE `guilds` DISABLE KEYS */;
/*!40000 ALTER TABLE `guilds` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `oncreate_guilds` AFTER INSERT ON `guilds` FOR EACH ROW BEGIN
    INSERT INTO `guild_ranks` (`name`, `level`, `guild_id`) VALUES ('the Leader', 3, NEW.`id`);
    INSERT INTO `guild_ranks` (`name`, `level`, `guild_id`) VALUES ('a Vice-Leader', 2, NEW.`id`);
    INSERT INTO `guild_ranks` (`name`, `level`, `guild_id`) VALUES ('a Member', 1, NEW.`id`);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `guildwar_deaths`
--

DROP TABLE IF EXISTS `guildwar_deaths`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guildwar_deaths` (
  `id` int NOT NULL AUTO_INCREMENT,
  `player_id` int NOT NULL,
  `kills` int NOT NULL,
  `deaths` int NOT NULL,
  `warid` int NOT NULL DEFAULT '0',
  `time` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `player_id` (`player_id`),
  KEY `warid` (`warid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guildwar_deaths`
--

LOCK TABLES `guildwar_deaths` WRITE;
/*!40000 ALTER TABLE `guildwar_deaths` DISABLE KEYS */;
/*!40000 ALTER TABLE `guildwar_deaths` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guildwar_kills`
--

DROP TABLE IF EXISTS `guildwar_kills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guildwar_kills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `killer` varchar(50) NOT NULL,
  `target` varchar(50) NOT NULL,
  `killerguild` int NOT NULL DEFAULT '0',
  `targetguild` int NOT NULL DEFAULT '0',
  `warid` int NOT NULL DEFAULT '0',
  `time` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `warid` (`warid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guildwar_kills`
--

LOCK TABLES `guildwar_kills` WRITE;
/*!40000 ALTER TABLE `guildwar_kills` DISABLE KEYS */;
/*!40000 ALTER TABLE `guildwar_kills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `house_lists`
--

DROP TABLE IF EXISTS `house_lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `house_lists` (
  `house_id` int NOT NULL,
  `listid` int NOT NULL,
  `list` text NOT NULL,
  KEY `house_id` (`house_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `house_lists`
--

LOCK TABLES `house_lists` WRITE;
/*!40000 ALTER TABLE `house_lists` DISABLE KEYS */;
INSERT INTO `house_lists` VALUES (2,257,'Yanmi\nMecha'),(3,257,'Mecha');
/*!40000 ALTER TABLE `house_lists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `houses`
--

DROP TABLE IF EXISTS `houses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `houses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner` int NOT NULL,
  `paid` int unsigned NOT NULL DEFAULT '0',
  `warnings` int NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL,
  `rent` int NOT NULL DEFAULT '0',
  `town_id` int NOT NULL DEFAULT '0',
  `bid` int NOT NULL DEFAULT '0',
  `bid_end` int NOT NULL DEFAULT '0',
  `last_bid` int NOT NULL DEFAULT '0',
  `highest_bidder` int NOT NULL DEFAULT '0',
  `size` int NOT NULL DEFAULT '0',
  `beds` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `owner` (`owner`),
  KEY `town_id` (`town_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3171 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `houses`
--

LOCK TABLES `houses` WRITE;
/*!40000 ALTER TABLE `houses` DISABLE KEYS */;
INSERT INTO `houses` VALUES (1,0,0,0,'Verona Temple Lane III',0,2,0,0,0,0,51,1),(2,52,0,0,'Verona Temple Lane I',0,2,0,0,0,0,33,1),(3,53,0,0,'Verona Temple Lane II',0,2,0,0,0,0,27,1),(4,0,0,0,'Verona Shop Flats Ia',0,2,0,0,0,0,17,0),(5,0,0,0,'Verona Shop Flats Ib',0,2,0,0,0,0,17,1),(6,0,0,0,'Verona Shop Flats Ic',0,2,0,0,0,0,13,2),(7,0,0,0,'Verona Temple Lane II (higher floor)',0,2,0,0,0,0,25,1),(8,0,0,0,'Verona Temple Lane III (higher floor)',0,2,0,0,0,0,21,1),(9,0,0,0,'Verona Hotel Apartments I',0,2,0,0,0,0,21,2),(10,0,0,0,'Verona Hotel Apartments II',0,2,0,0,0,0,11,0),(11,0,0,0,'Verona Hotel Apartments III',0,2,0,0,0,0,38,2),(12,0,0,0,'Verona Hotel Apartments IV',0,2,0,0,0,0,22,2),(13,0,0,0,'Verona Hotel Apartments V',0,2,0,0,0,0,14,0),(14,0,0,0,'Verona Hotel Apartments VI',0,2,0,0,0,0,12,0),(15,0,0,0,'Verona Hotel Apartments VII',0,2,0,0,0,0,29,1),(16,0,0,0,'Verona Hotel Apartments VIII',0,2,0,0,0,0,21,2),(17,0,0,0,'Verona Hotel Apartments IX',0,2,0,0,0,0,11,0),(18,0,0,0,'Verona Hotel Apartments X',0,2,0,0,0,0,34,0),(19,0,0,0,'Verona Ship Lane I',0,2,0,0,0,0,16,1),(20,0,0,0,'Verona Ship Lane II',0,2,0,0,0,0,17,1),(21,0,0,0,'Verona Ship Lane III',0,2,0,0,0,0,17,1),(22,0,0,0,'Verona Ship Lane IV (second floor)',0,2,0,0,0,0,17,2),(23,0,0,0,'Verona Ship Lane V (second floor)',0,2,0,0,0,0,13,0),(24,0,0,0,'Verona Ship Lane VI (second floor)',0,2,0,0,0,0,17,1),(25,0,0,0,'Verona Ship Lane III (ground floor)',0,2,0,0,0,0,17,1),(26,0,0,0,'Verona Ship Lane IV (ground floor)',0,2,0,0,0,0,13,0),(27,0,0,0,'Verona Ship Lane V (ground floor)',0,2,0,0,0,0,17,2),(28,0,0,0,'Verona Shop Flats IIa',0,2,0,0,0,0,21,1),(29,0,0,0,'Verona Shop Flats IIb',0,2,0,0,0,0,13,1),(30,0,0,0,'Verona Shop Flats IIc',0,2,0,0,0,0,10,1),(31,0,0,0,'Verona Shop Flats IId',0,2,0,0,0,0,13,1),(32,0,0,0,'Verona Depot Apartments I',0,2,0,0,0,0,22,2),(33,0,0,0,'Verona Depot Apartments II',0,2,0,0,0,0,25,1),(34,0,0,0,'Verona Depot Apartments I (first floor)',0,2,0,0,0,0,22,2),(35,0,0,0,'Verona Depot Apartments II (first floor)',0,2,0,0,0,0,28,1),(36,0,0,0,'Verona Depot Apartments III',0,2,0,0,0,0,24,0),(37,0,0,0,'Verona Depot Apartments IV',0,2,0,0,0,0,19,2),(38,0,0,0,'Verona Depot Apartments III (higher floor)',0,2,0,0,0,0,22,1),(39,0,0,0,'Verona Depot Apartments IV (higher floor)',0,2,0,0,0,0,13,0),(40,0,0,0,'Verona Shop Flats Id',0,2,0,0,0,0,11,0),(41,0,0,0,'Paupers Palace, Flat 27',685,1,0,0,0,0,24,2),(42,0,0,0,'Paupers Palace, Flat 25',585,1,0,0,0,0,24,1),(43,0,0,0,'Paupers Palace, Flat 31',855,1,0,0,0,0,28,1),(44,0,0,0,'Paupers Palace, Flat 32',1135,1,0,0,0,0,32,2),(45,0,0,0,'Paupers Palace, Flat 33',765,1,0,0,0,0,31,1),(46,0,0,0,'Paupers Palace, Flat 34',1675,1,0,0,0,0,51,2),(47,0,0,0,'Salvation Street 1 (Shop)',6240,1,0,0,0,0,200,4),(49,0,0,0,'Dream Street 1 (Shop)',4330,1,0,0,0,0,147,2),(50,0,0,0,'Blessed Shield Guildhall',8090,1,0,0,0,0,274,9),(51,0,0,0,'Dagger Alley 1',2665,1,0,0,0,0,93,2),(52,0,0,0,'Steel Home',13845,1,0,0,0,0,384,13),(53,0,0,0,'Iron Alley 1',3450,1,0,0,0,0,111,4),(54,0,0,0,'Iron Alley 2',3450,1,0,0,0,0,108,4),(55,0,0,0,'Swamp Watch',11090,1,0,0,0,0,347,12),(57,0,0,0,'Salvation Street 2',3790,1,0,0,0,0,123,2),(60,0,0,0,'Salvation Street 3',3790,1,0,0,0,0,129,2),(61,0,0,0,'Silver Street 3',1980,1,0,0,0,0,61,1),(62,0,0,0,'Golden Axe Guildhall',10485,1,0,0,0,0,381,10),(63,0,0,0,'Silver Street 1',2565,1,0,0,0,0,120,1),(64,0,0,0,'Silver Street 2',1980,1,0,0,0,0,66,1),(66,0,0,0,'Silver Street 4',3295,1,0,0,0,0,136,2),(67,0,0,0,'Mystic Lane 2',2980,1,0,0,0,0,99,2),(69,0,0,0,'Mystic Lane 1',2945,1,0,0,0,0,115,3),(70,0,0,0,'Loot Lane 1 (Shop)',4565,1,0,0,0,0,194,3),(71,0,0,0,'Market Street 6',5485,1,0,0,0,0,212,5),(72,0,0,0,'Market Street 7',2305,1,0,0,0,0,110,2),(73,0,0,0,'Market Street 5 (Shop)',6375,1,0,0,0,0,214,4),(194,0,0,0,'Lucky Lane 1 (Shop)',6960,1,0,0,0,0,211,4),(208,0,0,0,'Underwood 1',1495,5,0,0,0,0,41,2),(209,0,0,0,'Underwood 2',1495,5,0,0,0,0,41,2),(210,0,0,0,'Underwood 5',1370,5,0,0,0,0,35,3),(211,0,0,0,'Underwood 3',1685,5,0,0,0,0,44,3),(212,0,0,0,'Underwood 4',2235,5,0,0,0,0,56,4),(213,0,0,0,'Underwood 10',585,5,0,0,0,0,20,1),(214,0,0,0,'Underwood 6',1595,5,0,0,0,0,42,3),(215,0,0,0,'Great Willow 1a',500,5,0,0,0,0,16,1),(216,0,0,0,'Great Willow 1b',650,5,0,0,0,0,22,1),(217,0,0,0,'Great Willow 1c',650,5,0,0,0,0,22,1),(218,0,0,0,'Great Willow 2d',450,5,0,0,0,0,10,1),(219,0,0,0,'Great Willow 2c',650,5,0,0,0,0,21,1),(220,0,0,0,'Great Willow 2b',450,5,0,0,0,0,16,1),(221,0,0,0,'Great Willow 2a',650,5,0,0,0,0,17,1),(222,0,0,0,'Great Willow 3d',450,5,0,0,0,0,17,1),(223,0,0,0,'Great Willow 3c',650,5,0,0,0,0,21,1),(224,0,0,0,'Great Willow 3b',450,5,0,0,0,0,16,1),(225,0,0,0,'Great Willow 3a',650,5,0,0,0,0,20,1),(226,0,0,0,'Great Willow 4b',950,5,0,0,0,0,25,2),(227,0,0,0,'Great Willow 4c',950,5,0,0,0,0,25,2),(228,0,0,0,'Great Willow 4d',750,5,0,0,0,0,26,1),(229,0,0,0,'Great Willow 4a',950,5,0,0,0,0,25,2),(230,0,0,0,'Underwood 7',1460,5,0,0,0,0,39,2),(231,0,0,0,'Shadow Caves 3',300,5,0,0,0,0,16,1),(232,0,0,0,'Shadow Caves 4',300,5,0,0,0,0,18,1),(233,0,0,0,'Shadow Caves 2',300,5,0,0,0,0,18,1),(234,0,0,0,'Shadow Caves 1',300,5,0,0,0,0,16,1),(235,0,0,0,'Shadow Caves 17',300,5,0,0,0,0,16,1),(236,0,0,0,'Shadow Caves 18',300,5,0,0,0,0,17,1),(237,0,0,0,'Shadow Caves 15',300,5,0,0,0,0,16,1),(238,0,0,0,'Shadow Caves 16',300,5,0,0,0,0,17,1),(239,0,0,0,'Shadow Caves 13',300,5,0,0,0,0,16,1),(240,0,0,0,'Shadow Caves 14',300,5,0,0,0,0,19,1),(241,0,0,0,'Shadow Caves 11',300,5,0,0,0,0,16,1),(242,0,0,0,'Shadow Caves 12',300,5,0,0,0,0,18,1),(243,0,0,0,'Shadow Caves 27',300,5,0,0,0,0,14,1),(244,0,0,0,'Shadow Caves 28',300,5,0,0,0,0,17,1),(245,0,0,0,'Shadow Caves 25',300,5,0,0,0,0,16,1),(246,0,0,0,'Shadow Caves 26',300,5,0,0,0,0,17,1),(247,0,0,0,'Shadow Caves 23',300,5,0,0,0,0,16,1),(248,0,0,0,'Shadow Caves 24',300,5,0,0,0,0,19,1),(249,0,0,0,'Shadow Caves 21',300,5,0,0,0,0,16,1),(250,0,0,0,'Shadow Caves 22',300,5,0,0,0,0,17,1),(251,0,0,0,'Underwood 9',585,5,0,0,0,0,17,1),(252,0,0,0,'Treetop 13',1400,5,0,0,0,0,33,2),(254,0,0,0,'Underwood 8',865,5,0,0,0,0,25,2),(255,0,0,0,'Mangrove 4',950,5,0,0,0,0,25,2),(256,0,0,0,'Coastwood 10',1630,5,0,0,0,0,36,3),(257,0,0,0,'Mangrove 1',1750,5,0,0,0,0,42,3),(258,0,0,0,'Coastwood 1',980,5,0,0,0,0,24,2),(259,0,0,0,'Coastwood 2',980,5,0,0,0,0,24,2),(260,0,0,0,'Mangrove 2',1350,5,0,0,0,0,33,2),(262,0,0,0,'Mangrove 3',1150,5,0,0,0,0,29,2),(263,0,0,0,'Coastwood 9',935,5,0,0,0,0,22,1),(264,0,0,0,'Coastwood 8',1255,5,0,0,0,0,31,2),(265,0,0,0,'Coastwood 6 (Shop)',1595,5,0,0,0,0,44,1),(266,0,0,0,'Coastwood 7',660,5,0,0,0,0,19,1),(267,0,0,0,'Coastwood 5',1530,5,0,0,0,0,35,2),(268,0,0,0,'Coastwood 4',1145,5,0,0,0,0,30,2),(269,0,0,0,'Coastwood 3',1310,5,0,0,0,0,34,2),(270,0,0,0,'Treetop 11',900,5,0,0,0,0,26,2),(271,0,0,0,'Treetop 5 (Shop)',1350,5,0,0,0,0,40,1),(272,0,0,0,'Treetop 7',800,5,0,0,0,0,24,1),(273,0,0,0,'Treetop 6',450,5,0,0,0,0,15,1),(274,0,0,0,'Treetop 8',800,5,0,0,0,0,23,1),(275,0,0,0,'Treetop 9',1150,5,0,0,0,0,30,2),(276,0,0,0,'Treetop 10',1150,5,0,0,0,0,34,2),(277,0,0,0,'Treetop 4 (Shop)',1250,5,0,0,0,0,40,1),(278,0,0,0,'Treetop 3 (Shop)',1250,5,0,0,0,0,38,1),(279,0,0,0,'Treetop 2',650,5,0,0,0,0,21,1),(280,0,0,0,'Treetop 1',650,5,0,0,0,0,19,1),(281,0,0,0,'Treetop 12 (Shop)',1350,5,0,0,0,0,40,1),(469,0,0,0,'Darashia 2, Flat 07',1000,10,0,0,0,0,48,1),(470,0,0,0,'Darashia 2, Flat 01',1000,10,0,0,0,0,48,1),(471,0,0,0,'Darashia 2, Flat 02',1000,10,0,0,0,0,42,1),(472,0,0,0,'Darashia 2, Flat 06',520,10,0,0,0,0,24,1),(473,0,0,0,'Darashia 2, Flat 05',1260,10,0,0,0,0,48,2),(474,0,0,0,'Darashia 2, Flat 04',520,10,0,0,0,0,24,1),(475,0,0,0,'Darashia 2, Flat 03',1160,10,0,0,0,0,42,1),(476,0,0,0,'Darashia 2, Flat 13',1160,10,0,0,0,0,42,1),(477,0,0,0,'Darashia 2, Flat 12',520,10,0,0,0,0,24,1),(478,0,0,0,'Darashia 2, Flat 11',1000,10,0,0,0,0,42,1),(479,0,0,0,'Darashia 2, Flat 14',520,10,0,0,0,0,24,1),(480,0,0,0,'Darashia 2, Flat 15',1260,10,0,0,0,0,47,2),(481,0,0,0,'Darashia 2, Flat 16',680,10,0,0,0,0,30,1),(482,0,0,0,'Darashia 2, Flat 17',1000,10,0,0,0,0,48,1),(483,0,0,0,'Darashia 2, Flat 18',680,10,0,0,0,0,30,1),(484,0,0,0,'Darashia 1, Flat 05',1100,10,0,0,0,0,48,2),(485,0,0,0,'Darashia 1, Flat 01',1100,10,0,0,0,0,48,2),(486,0,0,0,'Darashia 1, Flat 04',1000,10,0,0,0,0,42,1),(487,0,0,0,'Darashia 1, Flat 03',2660,10,0,0,0,0,96,4),(488,0,0,0,'Darashia 1, Flat 02',1000,10,0,0,0,0,41,1),(490,0,0,0,'Darashia 1, Flat 12',1780,10,0,0,0,0,66,2),(491,0,0,0,'Darashia 1, Flat 11',1100,10,0,0,0,0,41,2),(492,0,0,0,'Darashia 1, Flat 13',1780,10,0,0,0,0,72,2),(493,0,0,0,'Darashia 1, Flat 14',2760,10,0,0,0,0,108,5),(494,0,0,0,'Darashia 4, Flat 01',1000,10,0,0,0,0,48,1),(495,0,0,0,'Darashia 4, Flat 05',1100,10,0,0,0,0,48,2),(496,0,0,0,'Darashia 4, Flat 04',1780,10,0,0,0,0,72,2),(497,0,0,0,'Darashia 4, Flat 03',1000,10,0,0,0,0,42,1),(498,0,0,0,'Darashia 4, Flat 02',1780,10,0,0,0,0,66,2),(499,0,0,0,'Darashia 4, Flat 13',1780,10,0,0,0,0,78,2),(500,0,0,0,'Darashia 4, Flat 14',1780,10,0,0,0,0,72,2),(501,0,0,0,'Darashia 4, Flat 11',1000,10,0,0,0,0,41,1),(502,0,0,0,'Darashia 4, Flat 12',2560,10,0,0,0,0,96,3),(503,0,0,0,'Darashia 7, Flat 05',1225,10,0,0,0,0,40,2),(504,0,0,0,'Darashia 7, Flat 01',1125,10,0,0,0,0,40,1),(505,0,0,0,'Darashia 7, Flat 02',1125,10,0,0,0,0,41,1),(506,0,0,0,'Darashia 7, Flat 03',2955,10,0,0,0,0,108,4),(507,0,0,0,'Darashia 7, Flat 04',1125,10,0,0,0,0,42,1),(508,0,0,0,'Darashia 7, Flat 14',2955,10,0,0,0,0,108,4),(509,0,0,0,'Darashia 7, Flat 13',1125,10,0,0,0,0,42,1),(510,0,0,0,'Darashia 7, Flat 11',1125,10,0,0,0,0,41,1),(511,0,0,0,'Darashia 7, Flat 12',2955,10,0,0,0,0,95,4),(512,0,0,0,'Darashia 5, Flat 01',1000,10,0,0,0,0,38,1),(513,0,0,0,'Darashia 5, Flat 05',1000,10,0,0,0,0,48,1),(514,0,0,0,'Darashia 5, Flat 02',1620,10,0,0,0,0,57,2),(515,0,0,0,'Darashia 5, Flat 03',1000,10,0,0,0,0,41,1),(516,0,0,0,'Darashia 5, Flat 04',1620,10,0,0,0,0,66,2),(517,0,0,0,'Darashia 5, Flat 11',1780,10,0,0,0,0,66,2),(518,0,0,0,'Darashia 5, Flat 12',1620,10,0,0,0,0,65,2),(519,0,0,0,'Darashia 5, Flat 13',1780,10,0,0,0,0,78,2),(520,0,0,0,'Darashia 5, Flat 14',1620,10,0,0,0,0,66,2),(521,0,0,0,'Darashia 6a',3115,10,0,0,0,0,117,2),(522,0,0,0,'Darashia 6b',3430,10,0,0,0,0,139,2),(523,0,0,0,'Darashia, Villa',5385,10,0,0,0,0,233,4),(525,0,0,0,'Darashia, Western Guildhall',10435,10,0,0,0,0,376,14),(526,0,0,0,'Darashia 3, Flat 01',1100,10,0,0,0,0,40,2),(527,0,0,0,'Darashia 3, Flat 05',1000,10,0,0,0,0,40,1),(529,0,0,0,'Darashia 3, Flat 02',1620,10,0,0,0,0,65,2),(530,0,0,0,'Darashia 3, Flat 03',1100,10,0,0,0,0,42,2),(531,0,0,0,'Darashia 3, Flat 04',1620,10,0,0,0,0,72,2),(532,0,0,0,'Darashia 3, Flat 13',1100,10,0,0,0,0,42,2),(533,0,0,0,'Darashia 3, Flat 14',2400,10,0,0,0,0,102,3),(534,0,0,0,'Darashia 3, Flat 11',1000,10,0,0,0,0,41,1),(535,0,0,0,'Darashia 3, Flat 12',2600,10,0,0,0,0,90,5),(541,0,0,0,'Darashia 8, Flat 11',1990,10,0,0,0,0,66,2),(542,0,0,0,'Darashia 8, Flat 12',1810,10,0,0,0,0,65,2),(544,0,0,0,'Darashia 8, Flat 14',1810,10,0,0,0,0,66,2),(545,0,0,0,'Darashia 8, Flat 13',1990,10,0,0,0,0,78,2),(574,0,0,0,'Oskahl I j',680,9,0,0,0,0,25,1),(575,0,0,0,'Oskahl I f',840,9,0,0,0,0,34,1),(576,0,0,0,'Oskahl I i',840,9,0,0,0,0,30,1),(577,0,0,0,'Oskahl I g',1140,9,0,0,0,0,42,2),(578,0,0,0,'Oskahl I h',1760,9,0,0,0,0,63,3),(579,0,0,0,'Oskahl I d',1140,9,0,0,0,0,36,2),(580,0,0,0,'Oskahl I b',840,9,0,0,0,0,30,1),(581,0,0,0,'Oskahl I c',680,9,0,0,0,0,29,1),(582,0,0,0,'Oskahl I e',840,9,0,0,0,0,33,1),(583,0,0,0,'Oskahl I a',1580,9,0,0,0,0,52,2),(584,0,0,0,'Chameken I',850,9,0,0,0,0,30,1),(585,0,0,0,'Charsirakh III',680,9,0,0,0,0,30,1),(586,0,0,0,'Murkhol I d',440,9,0,0,0,0,21,1),(587,0,0,0,'Murkhol I c',440,9,0,0,0,0,18,1),(588,0,0,0,'Murkhol I b',440,9,0,0,0,0,18,1),(589,0,0,0,'Murkhol I a',440,9,0,0,0,0,20,1),(590,0,0,0,'Charsirakh II',1140,9,0,0,0,0,39,2),(591,0,0,0,'Thanah II h',1400,9,0,0,0,0,40,2),(592,0,0,0,'Thanah II g',1650,9,0,0,0,0,45,2),(593,0,0,0,'Thanah II f',2850,9,0,0,0,0,80,3),(594,0,0,0,'Thanah II b',450,9,0,0,0,0,20,1),(595,0,0,0,'Thanah II c',450,9,0,0,0,0,15,1),(596,0,0,0,'Thanah II d',350,9,0,0,0,0,16,1),(597,0,0,0,'Thanah II e',350,9,0,0,0,0,12,1),(599,0,0,0,'Thanah II a',850,9,0,0,0,0,37,1),(600,0,0,0,'Thrarhor I c (Shop)',1050,9,0,0,0,0,28,1),(601,0,0,0,'Thrarhor I d (Shop)',1050,9,0,0,0,0,21,1),(602,0,0,0,'Thrarhor I a (Shop)',1050,9,0,0,0,0,32,1),(603,0,0,0,'Thrarhor I b (Shop)',1050,9,0,0,0,0,24,1),(604,0,0,0,'Thanah I c',3250,9,0,0,0,0,91,3),(605,0,0,0,'Thanah I d',2900,9,0,0,0,0,80,4),(606,0,0,0,'Thanah I b',3000,9,0,0,0,0,84,3),(607,0,0,0,'Thanah I a',850,9,0,0,0,0,27,1),(608,0,0,0,'Harrah I',5740,9,0,0,0,0,190,10),(609,0,0,0,'Charsirakh I b',1580,9,0,0,0,0,51,2),(610,0,0,0,'Charsirakh I a',280,9,0,0,0,0,15,1),(611,0,0,0,'Othehothep I d',2020,9,0,0,0,0,68,4),(612,0,0,0,'Othehothep I c',1720,9,0,0,0,0,58,3),(613,0,0,0,'Othehothep I b',1380,9,0,0,0,0,49,2),(614,0,0,0,'Othehothep I a',280,9,0,0,0,0,14,1),(615,0,0,0,'Othehothep II e',1340,9,0,0,0,0,44,2),(616,0,0,0,'Othehothep II f',1340,9,0,0,0,0,44,2),(617,0,0,0,'Othehothep II d',840,9,0,0,0,0,32,1),(618,0,0,0,'Othehothep II c',840,9,0,0,0,0,30,1),(619,0,0,0,'Othehothep II b',1920,9,0,0,0,0,67,3),(620,0,0,0,'Othehothep II a',400,9,0,0,0,0,18,1),(621,0,0,0,'Mothrem I',1140,9,0,0,0,0,38,2),(622,0,0,0,'Arakmehn I',1320,9,0,0,0,0,41,3),(623,0,0,0,'Othehothep III d',1040,9,0,0,0,0,36,1),(624,0,0,0,'Othehothep III c',940,9,0,0,0,0,30,2),(625,0,0,0,'Othehothep III e',840,9,0,0,0,0,32,1),(626,0,0,0,'Othehothep III f',680,9,0,0,0,0,27,1),(627,0,0,0,'Othehothep III b',1340,9,0,0,0,0,49,2),(628,0,0,0,'Othehothep III a',280,9,0,0,0,0,14,1),(629,0,0,0,'Unklath I d',1680,9,0,0,0,0,49,3),(630,0,0,0,'Unklath I e',1580,9,0,0,0,0,51,2),(631,0,0,0,'Unklath I g',1480,9,0,0,0,0,51,1),(632,0,0,0,'Unklath I f',1580,9,0,0,0,0,51,2),(633,0,0,0,'Unklath I c',1460,9,0,0,0,0,50,2),(634,0,0,0,'Unklath I b',1460,9,0,0,0,0,50,2),(635,0,0,0,'Unklath I a',1140,9,0,0,0,0,38,2),(636,0,0,0,'Arakmehn II',1040,9,0,0,0,0,38,1),(637,0,0,0,'Arakmehn III',1140,9,0,0,0,0,38,2),(638,0,0,0,'Unklath II b',680,9,0,0,0,0,25,1),(639,0,0,0,'Unklath II c',680,9,0,0,0,0,27,1),(640,0,0,0,'Unklath II d',1580,9,0,0,0,0,52,2),(641,0,0,0,'Unklath II a',1040,9,0,0,0,0,36,1),(642,0,0,0,'Arakmehn IV',1220,9,0,0,0,0,41,2),(643,0,0,0,'Rathal I b',680,9,0,0,0,0,25,1),(644,0,0,0,'Rathal I c',680,9,0,0,0,0,27,1),(645,0,0,0,'Rathal I e',780,9,0,0,0,0,27,2),(646,0,0,0,'Rathal I d',780,9,0,0,0,0,27,2),(647,0,0,0,'Rathal I a',1140,9,0,0,0,0,36,2),(648,0,0,0,'Rathal II b',680,9,0,0,0,0,25,1),(649,0,0,0,'Rathal II c',680,9,0,0,0,0,27,1),(650,0,0,0,'Rathal II d',1460,9,0,0,0,0,52,2),(651,0,0,0,'Rathal II a',1040,9,0,0,0,0,38,1),(653,0,0,0,'Esuph II a',280,9,0,0,0,0,14,1),(654,0,0,0,'Uthemath II',4460,9,0,0,0,0,137,8),(655,0,0,0,'Uthemath I e',940,9,0,0,0,0,32,2),(656,0,0,0,'Uthemath I d',840,9,0,0,0,0,30,1),(657,0,0,0,'Uthemath I f',2440,9,0,0,0,0,86,3),(658,0,0,0,'Uthemath I b',800,9,0,0,0,0,32,1),(659,0,0,0,'Uthemath I c',900,9,0,0,0,0,34,2),(660,0,0,0,'Uthemath I a',400,9,0,0,0,0,18,1),(661,0,0,0,'Botham I c',1700,9,0,0,0,0,49,2),(662,0,0,0,'Botham I e',1650,9,0,0,0,0,44,2),(663,0,0,0,'Botham I d',3050,9,0,0,0,0,80,3),(664,0,0,0,'Botham I b',3000,9,0,0,0,0,83,3),(666,0,0,0,'Horakhal',9420,9,0,0,0,0,277,14),(667,0,0,0,'Esuph III b',1340,9,0,0,0,0,49,2),(668,0,0,0,'Esuph III a',280,9,0,0,0,0,14,1),(669,0,0,0,'Esuph IV b',400,9,0,0,0,0,16,1),(670,0,0,0,'Esuph IV c',400,9,0,0,0,0,18,1),(671,0,0,0,'Esuph IV d',800,9,0,0,0,0,34,1),(672,0,0,0,'Esuph IV a',400,9,0,0,0,0,16,1),(673,0,0,0,'Botham II e',1650,9,0,0,0,0,42,2),(674,0,0,0,'Botham II g',1400,9,0,0,0,0,38,2),(675,0,0,0,'Botham II f',1650,9,0,0,0,0,44,2),(676,0,0,0,'Botham II d',1950,9,0,0,0,0,49,2),(677,0,0,0,'Botham II c',1250,9,0,0,0,0,38,2),(678,0,0,0,'Botham II b',1600,9,0,0,0,0,47,2),(679,0,0,0,'Botham II a',850,9,0,0,0,0,25,1),(680,0,0,0,'Botham III g',1650,9,0,0,0,0,42,2),(681,0,0,0,'Botham III f',2350,9,0,0,0,0,56,3),(682,0,0,0,'Botham III h',3750,9,0,0,0,0,98,3),(683,0,0,0,'Botham III d',850,9,0,0,0,0,27,1),(684,0,0,0,'Botham III e',850,9,0,0,0,0,27,1),(685,0,0,0,'Botham III b',950,9,0,0,0,0,25,2),(686,0,0,0,'Botham III c',850,9,0,0,0,0,27,1),(687,0,0,0,'Botham III a',1400,9,0,0,0,0,36,2),(688,0,0,0,'Botham IV i',1800,9,0,0,0,0,51,3),(689,0,0,0,'Botham IV h',1850,9,0,0,0,0,49,1),(690,0,0,0,'Botham IV f',1700,9,0,0,0,0,49,2),(691,0,0,0,'Botham IV g',1650,9,0,0,0,0,49,2),(692,0,0,0,'Botham IV c',850,9,0,0,0,0,27,1),(693,0,0,0,'Botham IV e',850,9,0,0,0,0,27,1),(694,0,0,0,'Botham IV d',850,9,0,0,0,0,27,1),(695,0,0,0,'Botham IV b',850,9,0,0,0,0,25,1),(696,0,0,0,'Botham IV a',1400,9,0,0,0,0,36,2),(697,0,0,0,'Ramen Tah',7650,9,0,0,0,0,184,16),(698,0,0,0,'Banana Bay 1',450,8,0,0,0,0,25,1),(699,0,0,0,'Banana Bay 2',765,8,0,0,0,0,36,1),(700,0,0,0,'Banana Bay 3',450,8,0,0,0,0,25,1),(701,0,0,0,'Banana Bay 4',450,8,0,0,0,0,25,1),(702,0,0,0,'Shark Manor',8780,8,0,0,0,0,286,15),(703,0,0,0,'Coconut Quay 1',1765,8,0,0,0,0,64,2),(704,0,0,0,'Coconut Quay 2',1045,8,0,0,0,0,42,2),(705,0,0,0,'Coconut Quay 3',2145,8,0,0,0,0,70,4),(706,0,0,0,'Coconut Quay 4',2135,8,0,0,0,0,72,3),(707,0,0,0,'Crocodile Bridge 3',1270,8,0,0,0,0,49,2),(708,0,0,0,'Crocodile Bridge 2',865,8,0,0,0,0,36,2),(709,0,0,0,'Crocodile Bridge 1',1045,8,0,0,0,0,42,2),(710,0,0,0,'Bamboo Garden 1',1640,8,0,0,0,0,63,3),(711,0,0,0,'Crocodile Bridge 4',4755,8,0,0,0,0,176,4),(712,0,0,0,'Crocodile Bridge 5',3970,8,0,0,0,0,157,2),(713,0,0,0,'Woodway 1',765,8,0,0,0,0,36,1),(714,0,0,0,'Woodway 2',585,8,0,0,0,0,30,1),(715,0,0,0,'Woodway 3',1540,8,0,0,0,0,65,2),(716,0,0,0,'Woodway 4',405,8,0,0,0,0,24,1),(717,0,0,0,'Flamingo Flats 5',1845,8,0,0,0,0,84,1),(718,0,0,0,'Bamboo Fortress',21970,8,0,0,0,0,848,20),(719,0,0,0,'Bamboo Garden 3',1540,8,0,0,0,0,63,2),(720,0,0,0,'Bamboo Garden 2',1045,8,0,0,0,0,42,2),(721,0,0,0,'Flamingo Flats 4',865,8,0,0,0,0,36,2),(722,0,0,0,'Flamingo Flats 2',1045,8,0,0,0,0,42,2),(723,0,0,0,'Flamingo Flats 3',685,8,0,0,0,0,30,2),(724,0,0,0,'Flamingo Flats 1',685,8,0,0,0,0,30,2),(725,0,0,0,'Jungle Edge 4',865,8,0,0,0,0,36,2),(726,0,0,0,'Jungle Edge 5',865,8,0,0,0,0,36,2),(727,0,0,0,'Jungle Edge 6',450,8,0,0,0,0,25,1),(728,0,0,0,'Jungle Edge 2',3170,8,0,0,0,0,128,3),(729,0,0,0,'Jungle Edge 3',865,8,0,0,0,0,36,2),(730,0,0,0,'Jungle Edge 1',2495,8,0,0,0,0,98,3),(731,0,0,0,'Haggler\'s Hangout 6',6450,8,0,0,0,0,208,4),(732,0,0,0,'Haggler\'s Hangout 5 (Shop)',1550,8,0,0,0,0,56,1),(733,0,0,0,'Haggler\'s Hangout 4a (Shop)',1850,8,0,0,0,0,56,1),(734,0,0,0,'Haggler\'s Hangout 4b (Shop)',1550,8,0,0,0,0,56,1),(735,0,0,0,'Haggler\'s Hangout 3',7550,8,0,0,0,0,256,4),(736,0,0,0,'Haggler\'s Hangout 2',1300,8,0,0,0,0,49,1),(737,0,0,0,'Haggler\'s Hangout 1',1400,8,0,0,0,0,49,2),(738,0,0,0,'River Homes 1',3485,8,0,0,0,0,128,3),(739,0,0,0,'River Homes 2a',1270,8,0,0,0,0,42,2),(740,0,0,0,'River Homes 2b',1595,8,0,0,0,0,56,3),(741,0,0,0,'River Homes 3',5055,8,0,0,0,0,176,7),(742,0,0,0,'The Treehouse',24120,8,0,0,0,0,897,23),(743,0,0,0,'Corner Shop (Shop)',2215,12,0,0,0,0,96,2),(744,0,0,0,'Tusk Flats 1',765,12,0,0,0,0,40,2),(745,0,0,0,'Tusk Flats 2',835,12,0,0,0,0,42,2),(746,0,0,0,'Tusk Flats 3',660,12,0,0,0,0,34,2),(747,0,0,0,'Tusk Flats 4',315,12,0,0,0,0,24,1),(748,0,0,0,'Tusk Flats 6',660,12,0,0,0,0,35,2),(749,0,0,0,'Tusk Flats 5',455,12,0,0,0,0,30,1),(750,0,0,0,'Shady Rocks 5',2890,12,0,0,0,0,110,2),(751,0,0,0,'Shady Rocks 4 (Shop)',2710,12,0,0,0,0,110,2),(752,0,0,0,'Shady Rocks 3',4115,12,0,0,0,0,154,3),(753,0,0,0,'Shady Rocks 2',2010,12,0,0,0,0,77,4),(754,0,0,0,'Shady Rocks 1',3630,12,0,0,0,0,132,4),(755,0,0,0,'Crystal Glance',19625,12,0,0,0,0,569,24),(756,0,0,0,'Arena Walk 3',3550,12,0,0,0,0,126,3),(757,0,0,0,'Arena Walk 2',1400,12,0,0,0,0,54,2),(758,0,0,0,'Arena Walk 1',3250,12,0,0,0,0,128,3),(759,0,0,0,'Bears Paw 2',2305,12,0,0,0,0,100,2),(760,0,0,0,'Bears Paw 1',1810,12,0,0,0,0,72,2),(761,0,0,0,'Spirit Homes 5',1450,12,0,0,0,0,56,2),(762,0,0,0,'Glacier Side 3',1950,12,0,0,0,0,75,2),(763,0,0,0,'Glacier Side 2',4750,12,0,0,0,0,154,3),(764,0,0,0,'Glacier Side 1',1600,12,0,0,0,0,65,2),(765,0,0,0,'Spirit Homes 1',1700,12,0,0,0,0,56,2),(766,0,0,0,'Spirit Homes 2',1900,12,0,0,0,0,72,2),(767,0,0,0,'Spirit Homes 3',4250,12,0,0,0,0,128,3),(768,0,0,0,'Spirit Homes 4',1100,12,0,0,0,0,49,1),(770,0,0,0,'Glacier Side 4',2050,12,0,0,0,0,75,1),(771,0,0,0,'Shelf Site',4800,12,0,0,0,0,160,3),(772,0,0,0,'Raven Corner 1',855,12,0,0,0,0,45,1),(773,0,0,0,'Raven Corner 2',1685,12,0,0,0,0,60,3),(774,0,0,0,'Raven Corner 3',855,12,0,0,0,0,45,1),(775,0,0,0,'Bears Paw 3',2090,12,0,0,0,0,82,3),(776,0,0,0,'Bears Paw 4',5205,12,0,0,0,0,189,4),(778,0,0,0,'Bears Paw 5',2045,12,0,0,0,0,81,3),(779,0,0,0,'Trout Plaza 5 (Shop)',3880,12,0,0,0,0,144,2),(780,0,0,0,'Pilchard Bin 1',685,12,0,0,0,0,30,2),(781,0,0,0,'Pilchard Bin 2',685,12,0,0,0,0,24,2),(782,0,0,0,'Pilchard Bin 3',585,12,0,0,0,0,24,1),(783,0,0,0,'Pilchard Bin 4',585,12,0,0,0,0,24,1),(784,0,0,0,'Pilchard Bin 5',685,12,0,0,0,0,24,2),(785,0,0,0,'Pilchard Bin 10',450,12,0,0,0,0,20,1),(786,0,0,0,'Pilchard Bin 9',450,12,0,0,0,0,20,1),(787,0,0,0,'Pilchard Bin 8',450,12,0,0,0,0,20,2),(789,0,0,0,'Pilchard Bin 7',450,12,0,0,0,0,20,1),(790,0,0,0,'Pilchard Bin 6',450,12,0,0,0,0,25,1),(791,0,0,0,'Trout Plaza 1',2395,12,0,0,0,0,112,2),(792,0,0,0,'Trout Plaza 2',1540,12,0,0,0,0,64,2),(793,0,0,0,'Trout Plaza 3',900,12,0,0,0,0,36,1),(794,0,0,0,'Trout Plaza 4',900,12,0,0,0,0,45,1),(795,0,0,0,'Skiffs End 1',1540,12,0,0,0,0,70,2),(796,0,0,0,'Skiffs End 2',910,12,0,0,0,0,42,2),(797,0,0,0,'Furrier Quarter 3',1010,12,0,0,0,0,54,2),(798,0,0,0,'Mammoth Belly',22810,12,0,0,0,0,634,30),(799,0,0,0,'Furrier Quarter 2',1045,12,0,0,0,0,56,2),(800,0,0,0,'Furrier Quarter 1',1635,12,0,0,0,0,84,3),(801,0,0,0,'Fimbul Shelf 3',1255,12,0,0,0,0,66,2),(802,0,0,0,'Fimbul Shelf 4',1045,12,0,0,0,0,56,2),(803,0,0,0,'Fimbul Shelf 2',1045,12,0,0,0,0,56,2),(804,0,0,0,'Fimbul Shelf 1',975,12,0,0,0,0,48,2),(805,0,0,0,'Frost Manor',26370,12,0,0,0,0,806,24),(831,0,0,0,'Marble Guildhall',16810,3,0,0,0,0,530,17),(832,0,0,0,'Iron Guildhall',15560,3,0,0,0,0,464,17),(833,0,0,0,'The Market 1 (Shop)',650,3,0,0,0,0,25,1),(834,0,0,0,'The Market 3 (Shop)',1450,3,0,0,0,0,40,1),(835,0,0,0,'The Market 2 (Shop)',1100,3,0,0,0,0,40,1),(836,0,0,0,'The Market 4 (Shop)',1800,3,0,0,0,0,48,1),(837,0,0,0,'Granite Guildhall',17845,3,0,0,0,0,530,17),(838,0,0,0,'Upper Barracks 1',210,3,0,0,0,0,14,1),(850,0,0,0,'Upper Barracks 13',580,3,0,0,0,0,24,2),(851,0,0,0,'Nobility Quarter 4',765,3,0,0,0,0,25,1),(852,0,0,0,'Nobility Quarter 5',765,3,0,0,0,0,25,1),(853,0,0,0,'Nobility Quarter 7',765,3,0,0,0,0,25,1),(854,0,0,0,'Nobility Quarter 6',765,3,0,0,0,0,26,1),(855,0,0,0,'Nobility Quarter 8',765,3,0,0,0,0,26,1),(856,0,0,0,'Nobility Quarter 9',765,3,0,0,0,0,26,1),(857,0,0,0,'Nobility Quarter 2',1865,3,0,0,0,0,50,3),(858,0,0,0,'Nobility Quarter 3',1865,3,0,0,0,0,50,3),(859,0,0,0,'Nobility Quarter 1',1865,3,0,0,0,0,50,3),(863,0,0,0,'The Farms 6, Fishing Hut',1255,3,0,0,0,0,32,2),(864,0,0,0,'The Farms 5',1530,3,0,0,0,0,36,2),(866,0,0,0,'The Farms 3',1530,3,0,0,0,0,36,2),(867,0,0,0,'The Farms 2',1530,3,0,0,0,0,37,2),(868,0,0,0,'The Farms 1',2510,3,0,0,0,0,60,3),(886,0,0,0,'Outlaw Castle',8000,3,0,0,0,0,307,9),(889,0,0,0,'Tunnel Gardens 3',2000,3,0,0,0,0,43,3),(890,0,0,0,'Tunnel Gardens 4',2000,3,0,0,0,0,42,3),(892,0,0,0,'Tunnel Gardens 5',1360,3,0,0,0,0,35,2),(893,0,0,0,'Tunnel Gardens 6',1360,3,0,0,0,0,38,2),(894,0,0,0,'Tunnel Gardens 8',1360,3,0,0,0,0,35,2),(895,0,0,0,'Tunnel Gardens 7',1360,3,0,0,0,0,35,2),(900,0,0,0,'Wolftower',21550,3,0,0,0,0,636,23),(901,0,0,0,'Paupers Palace, Flat 11',315,1,0,0,0,0,12,1),(905,0,0,0,'Botham I a',950,9,0,0,0,0,36,1),(906,0,0,0,'Esuph I',680,9,0,0,0,0,39,1),(907,0,0,0,'Esuph II b',1380,9,0,0,0,0,51,2),(1883,0,0,0,'Aureate Court 1',5240,13,0,0,0,0,276,3),(1884,0,0,0,'Aureate Court 2',4860,13,0,0,0,0,198,2),(1885,0,0,0,'Aureate Court 3',4300,13,0,0,0,0,226,2),(1886,0,0,0,'Aureate Court 4',3980,13,0,0,0,0,208,4),(1887,0,0,0,'Fortune Wing 1',10180,13,0,0,0,0,420,4),(1888,0,0,0,'Fortune Wing 2',5580,13,0,0,0,0,260,2),(1889,0,0,0,'Fortune Wing 3',5740,13,0,0,0,0,258,2),(1890,0,0,0,'Fortune Wing 4',5740,13,0,0,0,0,305,4),(1891,0,0,0,'Luminous Arc 1',6460,13,0,0,0,0,344,2),(1892,0,0,0,'Luminous Arc 2',6460,13,0,0,0,0,301,4),(1893,0,0,0,'Luminous Arc 3',5400,13,0,0,0,0,249,3),(1894,0,0,0,'Luminous Arc 4',8000,13,0,0,0,0,343,5),(1895,0,0,0,'Radiant Plaza 1',5620,13,0,0,0,0,276,4),(1896,0,0,0,'Radiant Plaza 2',3820,13,0,0,0,0,179,2),(1897,0,0,0,'Radiant Plaza 3',4900,13,0,0,0,0,256,2),(1898,0,0,0,'Radiant Plaza 4',7460,13,0,0,0,0,367,3),(1899,0,0,0,'Sun Palace',23120,13,0,0,0,0,974,27),(1900,0,0,0,'Halls of Serenity',23360,13,0,0,0,0,1090,33),(1901,0,0,0,'Cascade Towers',19500,13,0,0,0,0,810,33),(1902,0,0,0,'Sorcerer\'s Avenue 5',2695,2,0,0,0,0,96,1),(1903,0,0,0,'Sorcerer\'s Avenue 1a',1255,2,0,0,0,0,42,2),(1904,0,0,0,'Sorcerer\'s Avenue 1b',1035,2,0,0,0,0,36,2),(1905,0,0,0,'Sorcerer\'s Avenue 1c',1255,2,0,0,0,0,36,2),(1906,0,0,0,'Beach Home Apartments, Flat 06',1145,2,0,0,0,0,40,2),(1907,0,0,0,'Beach Home Apartments, Flat 01',715,2,0,0,0,0,30,1),(1908,0,0,0,'Beach Home Apartments, Flat 02',715,2,0,0,0,0,25,1),(1909,0,0,0,'Beach Home Apartments, Flat 03',715,2,0,0,0,0,30,1),(1910,0,0,0,'Beach Home Apartments, Flat 04',715,2,0,0,0,0,24,1),(1911,0,0,0,'Beach Home Apartments, Flat 05',715,2,0,0,0,0,24,1),(1912,0,0,0,'Beach Home Apartments, Flat 16',1145,2,0,0,0,0,40,2),(1913,0,0,0,'Beach Home Apartments, Flat 11',715,2,0,0,0,0,30,1),(1914,0,0,0,'Beach Home Apartments, Flat 12',880,2,0,0,0,0,30,1),(1915,0,0,0,'Beach Home Apartments, Flat 13',880,2,0,0,0,0,29,1),(1916,0,0,0,'Beach Home Apartments, Flat 14',385,2,0,0,0,0,15,1),(1917,0,0,0,'Beach Home Apartments, Flat 15',385,2,0,0,0,0,15,1),(1918,0,0,0,'Thais Clanhall',8420,2,0,0,0,0,370,10),(1919,0,0,0,'Harbour Street 4',935,2,0,0,0,0,30,1),(1920,0,0,0,'Thais Hostel',6980,2,0,0,0,0,171,24),(1921,0,0,0,'Lower Swamp Lane 1',4740,2,0,0,0,0,166,4),(1923,0,0,0,'Lower Swamp Lane 3',4740,2,0,0,0,0,161,4),(1924,0,0,0,'Sunset Homes, Flat 01',520,2,0,0,0,0,25,1),(1925,0,0,0,'Sunset Homes, Flat 02',520,2,0,0,0,0,30,1),(1926,0,0,0,'Sunset Homes, Flat 03',520,2,0,0,0,0,30,1),(1927,0,0,0,'Sunset Homes, Flat 14',520,2,0,0,0,0,30,1),(1929,0,0,0,'Sunset Homes, Flat 13',860,2,0,0,0,0,35,2),(1930,0,0,0,'Sunset Homes, Flat 12',520,2,0,0,0,0,25,1),(1932,0,0,0,'Sunset Homes, Flat 11',520,2,0,0,0,0,25,1),(1935,0,0,0,'Sunset Homes, Flat 24',520,2,0,0,0,0,30,1),(1936,0,0,0,'Sunset Homes, Flat 23',860,2,0,0,0,0,35,2),(1937,0,0,0,'Sunset Homes, Flat 22',520,2,0,0,0,0,25,1),(1938,0,0,0,'Sunset Homes, Flat 21',520,2,0,0,0,0,25,1),(1939,0,0,0,'Harbour Place 1 (Shop)',1100,2,0,0,0,0,37,1),(1940,0,0,0,'Harbour Place 2 (Shop)',1300,2,0,0,0,0,48,1),(1941,0,0,0,'Warriors Guildhall',14725,2,0,0,0,0,522,11),(1942,0,0,0,'Farm Lane, 1st floor (Shop)',945,2,0,0,0,0,42,0),(1943,0,0,0,'Farm Lane, Basement (Shop)',945,2,0,0,0,0,36,0),(1944,0,0,0,'Main Street 9, 1st floor (Shop)',1440,2,0,0,0,0,47,0),(1945,0,0,0,'Main Street 9a, 2nd floor (Shop)',765,2,0,0,0,0,30,0),(1946,0,0,0,'Main Street 9b, 2nd floor (Shop)',1260,2,0,0,0,0,48,0),(1947,0,0,0,'Farm Lane, 2nd Floor (Shop)',945,2,0,0,0,0,42,0),(1948,0,0,0,'The City Wall 5a',585,2,0,0,0,0,24,1),(1949,0,0,0,'The City Wall 5c',585,2,0,0,0,0,24,1),(1950,0,0,0,'The City Wall 5e',585,2,0,0,0,0,30,1),(1951,0,0,0,'The City Wall 5b',585,2,0,0,0,0,24,1),(1952,0,0,0,'The City Wall 5d',585,2,0,0,0,0,24,1),(1953,0,0,0,'The City Wall 5f',585,2,0,0,0,0,30,1),(1954,0,0,0,'The City Wall 3a',1045,2,0,0,0,0,42,2),(1955,0,0,0,'The City Wall 3b',1045,2,0,0,0,0,35,2),(1956,0,0,0,'The City Wall 3c',1045,2,0,0,0,0,35,2),(1957,0,0,0,'The City Wall 3d',1045,2,0,0,0,0,41,2),(1958,0,0,0,'The City Wall 3e',1045,2,0,0,0,0,30,2),(1959,0,0,0,'The City Wall 3f',1045,2,0,0,0,0,31,2),(1960,0,0,0,'The City Wall 1a',1270,2,0,0,0,0,49,2),(1961,0,0,0,'Mill Avenue 3',1400,2,0,0,0,0,49,2),(1962,0,0,0,'The City Wall 1b',1270,2,0,0,0,0,49,2),(1963,0,0,0,'Mill Avenue 4',1400,2,0,0,0,0,49,2),(1964,0,0,0,'Mill Avenue 5',3250,2,0,0,0,0,128,4),(1965,0,0,0,'Mill Avenue 1 (Shop)',1300,2,0,0,0,0,54,1),(1966,0,0,0,'Mill Avenue 2 (Shop)',2350,2,0,0,0,0,80,2),(1967,0,0,0,'The City Wall 7c',865,2,0,0,0,0,36,2),(1968,0,0,0,'The City Wall 7a',585,2,0,0,0,0,30,1),(1969,0,0,0,'The City Wall 7e',865,2,0,0,0,0,36,2),(1970,0,0,0,'The City Wall 7g',585,2,0,0,0,0,30,1),(1971,0,0,0,'The City Wall 7d',865,2,0,0,0,0,36,2),(1972,0,0,0,'The City Wall 7b',585,2,0,0,0,0,30,1),(1973,0,0,0,'The City Wall 7f',865,2,0,0,0,0,35,2),(1974,0,0,0,'The City Wall 7h',585,2,0,0,0,0,30,1),(1975,0,0,0,'The City Wall 9',955,2,0,0,0,0,50,2),(1976,0,0,0,'Upper Swamp Lane 12',3800,2,0,0,0,0,116,3),(1977,0,0,0,'Upper Swamp Lane 10',2060,2,0,0,0,0,70,3),(1978,0,0,0,'Upper Swamp Lane 8',8120,2,0,0,0,0,216,3),(1979,0,0,0,'Southern Thais Guildhall',22440,2,0,0,0,0,596,16),(1980,0,0,0,'Alai Flats, Flat 04',765,2,0,0,0,0,30,1),(1981,0,0,0,'Alai Flats, Flat 05',1225,2,0,0,0,0,38,2),(1982,0,0,0,'Alai Flats, Flat 06',1225,2,0,0,0,0,48,2),(1983,0,0,0,'Alai Flats, Flat 07',765,2,0,0,0,0,30,1),(1984,0,0,0,'Alai Flats, Flat 08',765,2,0,0,0,0,30,1),(1985,0,0,0,'Alai Flats, Flat 03',765,2,0,0,0,0,36,1),(1986,0,0,0,'Alai Flats, Flat 01',765,2,0,0,0,0,26,1),(1987,0,0,0,'Alai Flats, Flat 02',765,2,0,0,0,0,34,1),(1988,0,0,0,'Alai Flats, Flat 14',900,2,0,0,0,0,33,1),(1989,0,0,0,'Alai Flats, Flat 15',1450,2,0,0,0,0,48,2),(1990,0,0,0,'Alai Flats, Flat 16',1450,2,0,0,0,0,54,2),(1991,0,0,0,'Alai Flats, Flat 17',900,2,0,0,0,0,38,1),(1992,0,0,0,'Alai Flats, Flat 18',900,2,0,0,0,0,38,1),(1993,0,0,0,'Alai Flats, Flat 13',765,2,0,0,0,0,36,1),(1994,0,0,0,'Alai Flats, Flat 12',765,2,0,0,0,0,25,1),(1995,0,0,0,'Alai Flats, Flat 11',765,2,0,0,0,0,35,1),(1996,0,0,0,'Alai Flats, Flat 24',900,2,0,0,0,0,36,1),(1997,0,0,0,'Alai Flats, Flat 25',1450,2,0,0,0,0,52,2),(1998,0,0,0,'Alai Flats, Flat 26',1450,2,0,0,0,0,60,2),(1999,0,0,0,'Alai Flats, Flat 27',900,2,0,0,0,0,38,1),(2000,0,0,0,'Alai Flats, Flat 28',900,2,0,0,0,0,38,1),(2001,0,0,0,'Alai Flats, Flat 23',765,2,0,0,0,0,35,1),(2002,0,0,0,'Alai Flats, Flat 22',765,2,0,0,0,0,25,1),(2003,0,0,0,'Alai Flats, Flat 21',765,2,0,0,0,0,36,1),(2004,0,0,0,'Upper Swamp Lane 4',4740,2,0,0,0,0,165,4),(2005,0,0,0,'Upper Swamp Lane 2',4740,2,0,0,0,0,159,4),(2006,0,0,0,'Sorcerer\'s Avenue Labs 2c',715,2,0,0,0,0,20,1),(2007,0,0,0,'Sorcerer\'s Avenue Labs 2d',715,2,0,0,0,0,20,1),(2008,0,0,0,'Sorcerer\'s Avenue Labs 2e',715,2,0,0,0,0,20,1),(2009,0,0,0,'Sorcerer\'s Avenue Labs 2f',715,2,0,0,0,0,20,1),(2010,0,0,0,'Sorcerer\'s Avenue Labs 2b',715,2,0,0,0,0,24,1),(2011,0,0,0,'Sorcerer\'s Avenue Labs 2a',715,2,0,0,0,0,24,1),(2012,0,0,0,'Ivory Circle 1',4280,7,0,0,0,0,160,2),(2013,0,0,0,'Admiral\'s Avenue 3',4115,7,0,0,0,0,142,2),(2014,0,0,0,'Admiral\'s Avenue 2',5470,7,0,0,0,0,176,4),(2015,0,0,0,'Admiral\'s Avenue 1',5105,7,0,0,0,0,168,2),(2016,0,0,0,'Sugar Street 5',1350,7,0,0,0,0,48,2),(2017,0,0,0,'Freedom Street 1',2450,7,0,0,0,0,84,2),(2018,0,0,0,'Freedom Street 2',6050,7,0,0,0,0,208,4),(2019,0,0,0,'Trader\'s Point 2 (Shop)',5350,7,0,0,0,0,198,2),(2020,0,0,0,'Trader\'s Point 3 (Shop)',5950,7,0,0,0,0,195,2),(2021,0,0,0,'Ivory Circle 2',7030,7,0,0,0,0,214,2),(2022,0,0,0,'The Tavern 1a',2750,7,0,0,0,0,72,4),(2023,0,0,0,'The Tavern 1b',1900,7,0,0,0,0,54,2),(2024,0,0,0,'The Tavern 1c',4150,7,0,0,0,0,132,3),(2025,0,0,0,'The Tavern 1d',1550,7,0,0,0,0,48,2),(2026,0,0,0,'The Tavern 2d',1350,7,0,0,0,0,40,2),(2027,0,0,0,'The Tavern 2c',950,7,0,0,0,0,32,1),(2028,0,0,0,'The Tavern 2b',1700,7,0,0,0,0,62,2),(2029,0,0,0,'The Tavern 2a',5550,7,0,0,0,0,163,5),(2030,0,0,0,'Straycat\'s Corner 4',210,7,0,0,0,0,20,1),(2031,0,0,0,'Straycat\'s Corner 3',210,7,0,0,0,0,20,1),(2032,0,0,0,'Straycat\'s Corner 2',660,7,0,0,0,0,49,1),(2033,0,0,0,'Litter Promenade 5',580,7,0,0,0,0,35,2),(2034,0,0,0,'Litter Promenade 4',390,7,0,0,0,0,30,1),(2035,0,0,0,'Litter Promenade 3',450,7,0,0,0,0,36,1),(2036,0,0,0,'Litter Promenade 2',300,7,0,0,0,0,25,1),(2037,0,0,0,'Litter Promenade 1',400,7,0,0,0,0,25,2),(2038,0,0,0,'The Shelter',13590,7,0,0,0,0,560,31),(2039,0,0,0,'Straycat\'s Corner 6',300,7,0,0,0,0,25,1),(2040,0,0,0,'Straycat\'s Corner 5',760,7,0,0,0,0,48,2),(2042,0,0,0,'Rum Alley 3',330,7,0,0,0,0,28,1),(2043,0,0,0,'Straycat\'s Corner 1',300,7,0,0,0,0,25,1),(2044,0,0,0,'Rum Alley 2',300,7,0,0,0,0,25,1),(2045,0,0,0,'Rum Alley 1',510,7,0,0,0,0,36,1),(2046,0,0,0,'Smuggler Backyard 3',700,7,0,0,0,0,40,2),(2048,0,0,0,'Shady Trail 3',300,7,0,0,0,0,25,1),(2049,0,0,0,'Shady Trail 1',1150,7,0,0,0,0,48,5),(2050,0,0,0,'Shady Trail 2',490,7,0,0,0,0,30,2),(2051,0,0,0,'Smuggler Backyard 5',610,7,0,0,0,0,35,2),(2052,0,0,0,'Smuggler Backyard 4',390,7,0,0,0,0,30,1),(2053,0,0,0,'Smuggler Backyard 2',670,7,0,0,0,0,40,2),(2054,0,0,0,'Smuggler Backyard 1',670,7,0,0,0,0,40,2),(2055,0,0,0,'Sugar Street 2',2550,7,0,0,0,0,84,3),(2056,0,0,0,'Sugar Street 1',3000,7,0,0,0,0,84,3),(2057,0,0,0,'Sugar Street 3a',1650,7,0,0,0,0,54,3),(2058,0,0,0,'Sugar Street 3b',2050,7,0,0,0,0,60,3),(2059,0,0,0,'Harvester\'s Haven, Flat 01',950,7,0,0,0,0,36,2),(2060,0,0,0,'Harvester\'s Haven, Flat 03',950,7,0,0,0,0,30,2),(2061,0,0,0,'Harvester\'s Haven, Flat 05',950,7,0,0,0,0,30,2),(2062,0,0,0,'Harvester\'s Haven, Flat 02',950,7,0,0,0,0,36,2),(2063,0,0,0,'Harvester\'s Haven, Flat 04',950,7,0,0,0,0,30,2),(2064,0,0,0,'Harvester\'s Haven, Flat 06',950,7,0,0,0,0,30,2),(2065,0,0,0,'Harvester\'s Haven, Flat 07',950,7,0,0,0,0,30,2),(2066,0,0,0,'Harvester\'s Haven, Flat 09',950,7,0,0,0,0,30,2),(2067,0,0,0,'Harvester\'s Haven, Flat 11',950,7,0,0,0,0,36,2),(2068,0,0,0,'Harvester\'s Haven, Flat 12',950,7,0,0,0,0,36,2),(2069,0,0,0,'Harvester\'s Haven, Flat 10',950,7,0,0,0,0,30,2),(2070,0,0,0,'Harvester\'s Haven, Flat 08',950,7,0,0,0,0,30,2),(2071,0,0,0,'Marble Lane 4',6350,7,0,0,0,0,192,4),(2072,0,0,0,'Marble Lane 2',6415,7,0,0,0,0,200,3),(2073,0,0,0,'Marble Lane 3',8055,7,0,0,0,0,240,4),(2074,0,0,0,'Marble Lane 1',11060,7,0,0,0,0,320,6),(2075,0,0,0,'Ivy Cottage',30650,7,0,0,0,0,856,26),(2076,0,0,0,'Sugar Street 4d',750,7,0,0,0,0,24,2),(2077,0,0,0,'Sugar Street 4c',650,7,0,0,0,0,24,1),(2078,0,0,0,'Sugar Street 4b',950,7,0,0,0,0,36,2),(2079,0,0,0,'Sugar Street 4a',950,7,0,0,0,0,30,2),(2080,0,0,0,'Trader\'s Point 1',2200,7,0,0,0,0,77,2),(2081,0,0,0,'Mountain Hideout',15550,7,0,0,0,0,486,17),(2082,0,0,0,'Dark Mansion',17845,2,0,0,0,0,569,17),(2083,0,0,0,'Halls of the Adventurers',15380,2,0,0,0,0,518,18),(2084,0,0,0,'Castle of Greenshore',18860,2,0,0,0,0,600,12),(2085,0,0,0,'Greenshore Clanhall',10800,2,0,0,0,0,308,10),(2086,0,0,0,'Greenshore Village 1',2420,2,0,0,0,0,64,3),(2087,0,0,0,'Greenshore Village, Shop',1800,2,0,0,0,0,56,1),(2088,0,0,0,'Greenshore Village, Villa',8700,2,0,0,0,0,263,4),(2089,0,0,0,'Greenshore Village 2',780,2,0,0,0,0,30,1),(2090,0,0,0,'Greenshore Village 3',780,2,0,0,0,0,25,1),(2091,0,0,0,'Greenshore Village 5',780,2,0,0,0,0,30,1),(2092,0,0,0,'Greenshore Village 4',780,2,0,0,0,0,25,1),(2093,0,0,0,'Greenshore Village 6',4360,2,0,0,0,0,118,2),(2094,0,0,0,'Greenshore Village 7',1260,2,0,0,0,0,42,1),(2095,0,0,0,'The Tibianic',34500,2,0,0,0,0,862,22),(2097,0,0,0,'Fibula Village 5',1790,2,0,0,0,0,42,2),(2098,0,0,0,'Fibula Village 4',1790,2,0,0,0,0,42,2),(2099,0,0,0,'Fibula Village, Tower Flat',5105,2,0,0,0,0,161,2),(2100,0,0,0,'Fibula Village 1',845,2,0,0,0,0,30,1),(2101,0,0,0,'Fibula Village 2',845,2,0,0,0,0,30,1),(2102,0,0,0,'Fibula Village 3',3810,2,0,0,0,0,110,4),(2103,0,0,0,'Mercenary Tower',41955,2,0,0,0,0,996,26),(2104,0,0,0,'Guildhall of the Red Rose',27725,2,0,0,0,0,567,15),(2105,0,0,0,'Fibula Village, Bar',5235,2,0,0,0,0,122,2),(2106,0,0,0,'Fibula Village, Villa',11490,2,0,0,0,0,402,5),(2107,0,0,0,'Fibula Clanhall',11430,2,0,0,0,0,290,10),(2108,0,0,0,'Spiritkeep',19210,2,0,0,0,0,783,23),(2109,0,0,0,'Snake Tower',29720,2,0,0,0,0,1064,21),(2110,0,0,0,'Bloodhall',15270,2,0,0,0,0,565,15),(2111,0,0,0,'Senja Clanhall',10575,4,0,0,0,0,396,9),(2112,0,0,0,'Senja Village 2',765,4,0,0,0,0,36,1),(2113,0,0,0,'Senja Village 1a',765,4,0,0,0,0,36,1),(2114,0,0,0,'Senja Village 1b',1630,4,0,0,0,0,66,2),(2115,0,0,0,'Senja Village 4',765,4,0,0,0,0,30,1),(2116,0,0,0,'Senja Village 3',1765,4,0,0,0,0,72,2),(2117,0,0,0,'Senja Village 6b',765,4,0,0,0,0,30,1),(2118,0,0,0,'Senja Village 6a',765,4,0,0,0,0,30,1),(2119,0,0,0,'Senja Village 5',1225,4,0,0,0,0,48,2),(2120,0,0,0,'Senja Village 10',1485,4,0,0,0,0,72,1),(2121,0,0,0,'Senja Village 11',2620,4,0,0,0,0,96,2),(2122,0,0,0,'Senja Village 9',2575,4,0,0,0,0,103,2),(2123,0,0,0,'Senja Village 8',1675,4,0,0,0,0,57,2),(2124,0,0,0,'Senja Village 7',865,4,0,0,0,0,37,2),(2125,0,0,0,'Rosebud C',1340,4,0,0,0,0,70,0),(2127,0,0,0,'Rosebud A',1000,4,0,0,0,0,60,1),(2128,0,0,0,'Rosebud B',1000,4,0,0,0,0,60,1),(2129,0,0,0,'Nordic Stronghold',18400,4,0,0,0,0,718,21),(2130,0,0,0,'Northport Village 2',1475,4,0,0,0,0,40,2),(2131,0,0,0,'Northport Village 1',1475,4,0,0,0,0,48,2),(2132,0,0,0,'Northport Village 3',5435,4,0,0,0,0,178,2),(2133,0,0,0,'Northport Village 4',2630,4,0,0,0,0,81,2),(2134,0,0,0,'Northport Village 5',1805,4,0,0,0,0,56,2),(2135,0,0,0,'Northport Village 6',2135,4,0,0,0,0,64,2),(2136,0,0,0,'Seawatch',25010,4,0,0,0,0,745,19),(2137,0,0,0,'Northport Clanhall',9810,4,0,0,0,0,288,10),(2138,0,0,0,'Druids Retreat D',1180,4,0,0,0,0,54,2),(2139,0,0,0,'Druids Retreat A',1340,4,0,0,0,0,60,2),(2140,0,0,0,'Druids Retreat C',980,4,0,0,0,0,45,2),(2141,0,0,0,'Druids Retreat B',980,4,0,0,0,0,55,2),(2142,0,0,0,'Theater Avenue 14 (Shop)',2115,4,0,0,0,0,83,1),(2143,0,0,0,'Theater Avenue 12',955,4,0,0,0,0,28,2),(2144,0,0,0,'Theater Avenue 10',1090,4,0,0,0,0,45,2),(2145,0,0,0,'Theater Avenue 11c',585,4,0,0,0,0,24,1),(2146,0,0,0,'Theater Avenue 11b',585,4,0,0,0,0,24,1),(2147,0,0,0,'Theater Avenue 11a',1405,4,0,0,0,0,54,2),(2148,0,0,0,'Magician\'s Alley 1',1050,4,0,0,0,0,35,2),(2149,0,0,0,'Magician\'s Alley 1a',700,4,0,0,0,0,29,2),(2150,0,0,0,'Magician\'s Alley 1d',450,4,0,0,0,0,24,1),(2151,0,0,0,'Magician\'s Alley 1b',750,4,0,0,0,0,24,2),(2152,0,0,0,'',0,0,0,0,0,0,16,0),(2153,0,0,0,'Magician\'s Alley 5a',350,4,0,0,0,0,14,1),(2154,0,0,0,'Magician\'s Alley 5b',500,4,0,0,0,0,25,1),(2155,0,0,0,'Magician\'s Alley 5d',500,4,0,0,0,0,20,1),(2156,0,0,0,'Magician\'s Alley 5e',500,4,0,0,0,0,25,1),(2157,0,0,0,'Magician\'s Alley 5c',1150,4,0,0,0,0,35,2),(2158,0,0,0,'Magician\'s Alley 5f',1150,4,0,0,0,0,42,2),(2159,0,0,0,'',0,0,0,0,0,0,51,2),(2160,0,0,0,'',0,0,0,0,0,0,58,2),(2161,0,0,0,'',0,0,0,0,0,0,69,2),(2162,0,0,0,'',0,0,0,0,0,0,63,1),(2163,0,0,0,'',0,0,0,0,0,0,125,3),(2164,0,0,0,'',0,0,0,0,0,0,35,1),(2165,0,0,0,'',0,0,0,0,0,0,49,1),(2166,0,0,0,'',0,0,0,0,0,0,79,2),(2167,0,0,0,'',0,0,0,0,0,0,24,1),(2168,0,0,0,'',0,0,0,0,0,0,44,1),(2169,0,0,0,'',0,0,0,0,0,0,34,2),(2170,0,0,0,'',0,0,0,0,0,0,71,2),(2171,0,0,0,'',0,0,0,0,0,0,25,1),(2172,0,0,0,'',0,0,0,0,0,0,27,1),(2173,0,0,0,'',0,0,0,0,0,0,27,1),(2174,0,0,0,'',0,0,0,0,0,0,30,1),(2175,0,0,0,'',0,0,0,0,0,0,30,1),(2176,0,0,0,'',0,0,0,0,0,0,24,1),(2177,0,0,0,'',0,0,0,0,0,0,49,1),(2178,0,0,0,'',0,0,0,0,0,0,35,1),(2179,0,0,0,'',0,0,0,0,0,0,23,2),(2180,0,0,0,'',0,0,0,0,0,0,139,2),(2181,0,0,0,'',0,0,0,0,0,0,130,2),(2182,0,0,0,'',0,0,0,0,0,0,51,1),(2183,0,0,0,'',0,0,0,0,0,0,41,1),(2184,0,0,0,'',0,0,0,0,0,0,36,1),(2185,0,0,0,'',0,0,0,0,0,0,41,1),(2186,0,0,0,'',0,0,0,0,0,0,33,2),(2187,0,0,0,'',0,0,0,0,0,0,42,1),(2188,0,0,0,'',0,0,0,0,0,0,21,1),(2189,0,0,0,'',0,0,0,0,0,0,12,1),(2190,0,0,0,'',0,0,0,0,0,0,25,1),(2191,0,0,0,'',0,0,0,0,0,0,25,2),(2192,0,0,0,'',0,0,0,0,0,0,33,2),(2193,0,0,0,'',0,0,0,0,0,0,27,1),(2194,0,0,0,'',0,0,0,0,0,0,20,1),(2195,0,0,0,'',0,0,0,0,0,0,24,1),(2196,0,0,0,'',0,0,0,0,0,0,37,1),(2197,0,0,0,'',0,0,0,0,0,0,266,4),(2198,0,0,0,'',0,0,0,0,0,0,63,2),(2199,0,0,0,'Theater Avenue 7, Flat 01',315,4,0,0,0,0,15,1),(2200,0,0,0,'',0,0,0,0,0,0,32,1),(2201,0,0,0,'',0,0,0,0,0,0,79,2),(2202,0,0,0,'',0,0,0,0,0,0,153,0),(2203,0,0,0,'',0,0,0,0,0,0,459,11),(2204,0,0,0,'',0,0,0,0,0,0,24,1),(2205,0,0,0,'Theater Avenue 7, Flat 13',405,4,0,0,0,0,17,1),(2206,0,0,0,'Theater Avenue 7, Flat 15',405,4,0,0,0,0,19,1),(2207,0,0,0,'',0,0,0,0,0,0,143,2),(2208,0,0,0,'',0,0,0,0,0,0,38,2),(2209,0,0,0,'',0,0,0,0,0,0,79,0),(2210,0,0,0,'',0,0,0,0,0,0,25,1),(2211,0,0,0,'',0,0,0,0,0,0,14,1),(2212,0,0,0,'Central Plaza 3',600,4,0,0,0,0,20,0),(2213,0,0,0,'Central Plaza 2',600,4,0,0,0,0,20,0),(2214,0,0,0,'Central Plaza 1',600,4,0,0,0,0,20,0),(2215,0,0,0,'Park Lane 1a',1220,4,0,0,0,0,53,2),(2216,0,0,0,'Park Lane 3a',1220,4,0,0,0,0,48,2),(2217,0,0,0,'Park Lane 1b',1380,4,0,0,0,0,64,2),(2218,0,0,0,'Park Lane 3b',1100,4,0,0,0,0,48,2),(2219,0,0,0,'Park Lane 4',980,4,0,0,0,0,42,2),(2220,0,0,0,'Park Lane 2',980,4,0,0,0,0,42,2),(2221,0,0,0,'Magician\'s Alley 8',1400,4,0,0,0,0,42,2),(2222,0,0,0,'Moonkeep',13020,4,0,0,0,0,522,16),(2225,0,0,0,'Castle, Basement, Flat 01',585,11,0,0,0,0,30,1),(2226,0,0,0,'Castle, Basement, Flat 02',585,11,0,0,0,0,20,1),(2227,0,0,0,'Castle, Basement, Flat 03',585,11,0,0,0,0,20,1),(2228,0,0,0,'Castle, Basement, Flat 04',585,11,0,0,0,0,20,1),(2229,0,0,0,'Castle, Basement, Flat 07',585,11,0,0,0,0,20,1),(2230,0,0,0,'Castle, Basement, Flat 08',585,11,0,0,0,0,20,1),(2231,0,0,0,'Castle, Basement, Flat 09',585,11,0,0,0,0,24,1),(2232,0,0,0,'Castle, Basement, Flat 06',585,11,0,0,0,0,24,1),(2233,0,0,0,'Castle, Basement, Flat 05',585,11,0,0,0,0,24,1),(2234,0,0,0,'Castle Shop 1',1890,11,0,0,0,0,67,1),(2235,0,0,0,'Castle Shop 2',1890,11,0,0,0,0,70,1),(2236,0,0,0,'Castle Shop 3',1890,11,0,0,0,0,67,1),(2237,0,0,0,'Castle, 4th Floor, Flat 09',720,11,0,0,0,0,28,1),(2238,0,0,0,'Castle, 4th Floor, Flat 08',945,11,0,0,0,0,42,1),(2239,0,0,0,'Castle, 4th Floor, Flat 06',945,11,0,0,0,0,36,1),(2240,0,0,0,'Castle, 4th Floor, Flat 07',720,11,0,0,0,0,30,1),(2241,0,0,0,'Castle, 4th Floor, Flat 05',765,11,0,0,0,0,30,1),(2242,0,0,0,'Castle, 4th Floor, Flat 04',585,11,0,0,0,0,25,1),(2243,0,0,0,'Castle, 4th Floor, Flat 03',585,11,0,0,0,0,30,1),(2244,0,0,0,'Castle, 4th Floor, Flat 02',765,11,0,0,0,0,30,1),(2245,0,0,0,'Castle, 4th Floor, Flat 01',585,11,0,0,0,0,30,1),(2246,0,0,0,'Castle, 3rd Floor, Flat 01',585,11,0,0,0,0,30,1),(2247,0,0,0,'Castle, 3rd Floor, Flat 02',765,11,0,0,0,0,30,1),(2248,0,0,0,'Castle, 3rd Floor, Flat 03',585,11,0,0,0,0,25,1),(2249,0,0,0,'Castle, 3rd Floor, Flat 05',765,11,0,0,0,0,30,1),(2250,0,0,0,'Castle, 3rd Floor, Flat 04',585,11,0,0,0,0,25,1),(2251,0,0,0,'Castle, 3rd Floor, Flat 06',1045,11,0,0,0,0,33,2),(2252,0,0,0,'Castle, 3rd Floor, Flat 07',720,11,0,0,0,0,26,1),(2253,0,0,0,'Castle Street 1',2900,11,0,0,0,0,112,3),(2254,0,0,0,'Castle Street 2',1495,11,0,0,0,0,56,2),(2255,0,0,0,'Castle Street 3',1765,11,0,0,0,0,56,2),(2256,0,0,0,'Castle Street 4',1765,11,0,0,0,0,64,2),(2257,0,0,0,'Castle Street 5',1765,11,0,0,0,0,61,2),(2258,0,0,0,'Edron Flats, Basement Flat 2',1540,11,0,0,0,0,48,2),(2259,0,0,0,'Edron Flats, Basement Flat 1',1540,11,0,0,0,0,48,2),(2260,0,0,0,'Edron Flats, Flat 01',400,11,0,0,0,0,20,1),(2261,0,0,0,'Edron Flats, Flat 02',860,11,0,0,0,0,28,2),(2262,0,0,0,'Edron Flats, Flat 03',400,11,0,0,0,0,20,1),(2263,0,0,0,'Edron Flats, Flat 04',400,11,0,0,0,0,20,1),(2264,0,0,0,'Edron Flats, Flat 06',400,11,0,0,0,0,20,1),(2265,0,0,0,'Edron Flats, Flat 05',400,11,0,0,0,0,20,1),(2266,0,0,0,'Edron Flats, Flat 07',400,11,0,0,0,0,20,1),(2267,0,0,0,'Edron Flats, Flat 08',400,11,0,0,0,0,20,1),(2268,0,0,0,'Edron Flats, Flat 11',400,11,0,0,0,0,25,1),(2269,0,0,0,'Edron Flats, Flat 12',400,11,0,0,0,0,25,1),(2270,0,0,0,'Edron Flats, Flat 14',400,11,0,0,0,0,25,1),(2271,0,0,0,'Edron Flats, Flat 13',400,11,0,0,0,0,25,1),(2272,0,0,0,'Edron Flats, Flat 16',400,11,0,0,0,0,20,1),(2273,0,0,0,'Edron Flats, Flat 15',400,11,0,0,0,0,20,1),(2274,0,0,0,'Edron Flats, Flat 18',400,11,0,0,0,0,20,1),(2275,0,0,0,'Edron Flats, Flat 17',400,11,0,0,0,0,20,1),(2276,0,0,0,'Edron Flats, Flat 22',400,11,0,0,0,0,25,1),(2277,0,0,0,'Edron Flats, Flat 21',860,11,0,0,0,0,40,2),(2278,0,0,0,'Edron Flats, Flat 24',400,11,0,0,0,0,20,1),(2279,0,0,0,'Edron Flats, Flat 23',400,11,0,0,0,0,25,1),(2280,0,0,0,'Edron Flats, Flat 26',400,11,0,0,0,0,20,1),(2281,0,0,0,'Edron Flats, Flat 27',400,11,0,0,0,0,20,1),(2282,0,0,0,'Edron Flats, Flat 28',400,11,0,0,0,0,20,1),(2283,0,0,0,'Edron Flats, Flat 25',400,11,0,0,0,0,20,1),(2284,0,0,0,'Central Circle 1',3020,11,0,0,0,0,119,2),(2285,0,0,0,'Central Circle 2',3300,11,0,0,0,0,108,2),(2286,0,0,0,'Central Circle 3',4160,11,0,0,0,0,147,5),(2287,0,0,0,'Central Circle 4',4160,11,0,0,0,0,147,5),(2288,0,0,0,'Central Circle 5',4160,11,0,0,0,0,161,5),(2289,0,0,0,'Central Circle 6 (Shop)',3980,11,0,0,0,0,182,2),(2290,0,0,0,'Central Circle 7 (Shop)',3980,11,0,0,0,0,161,2),(2291,0,0,0,'Central Circle 8 (Shop)',3980,11,0,0,0,0,166,2),(2292,0,0,0,'Central Circle 9a',940,11,0,0,0,0,42,2),(2293,0,0,0,'Central Circle 9b',940,11,0,0,0,0,44,2),(2294,0,0,0,'Sky Lane, Guild 1',21145,11,0,0,0,0,666,23),(2295,0,0,0,'Sky Lane, Guild 2',19300,11,0,0,0,0,672,14),(2296,0,0,0,'Sky Lane, Guild 3',17315,11,0,0,0,0,564,18),(2297,0,0,0,'Sky Lane, Sea Tower',4775,11,0,0,0,0,196,6),(2298,0,0,0,'Wood Avenue 6a',1450,11,0,0,0,0,56,2),(2299,0,0,0,'Wood Avenue 9a',1540,11,0,0,0,0,56,2),(2300,0,0,0,'Wood Avenue 10a',1540,11,0,0,0,0,64,2),(2301,0,0,0,'Wood Avenue 11',7205,11,0,0,0,0,253,6),(2302,0,0,0,'Wood Avenue 8',5960,11,0,0,0,0,198,3),(2303,0,0,0,'Wood Avenue 7',5960,11,0,0,0,0,191,3),(2304,0,0,0,'Wood Avenue 6b',1450,11,0,0,0,0,56,2),(2305,0,0,0,'Wood Avenue 9b',1495,11,0,0,0,0,56,2),(2306,0,0,0,'Wood Avenue 10b',1595,11,0,0,0,0,64,3),(2307,0,0,0,'Wood Avenue 5',1765,11,0,0,0,0,64,2),(2308,0,0,0,'Wood Avenue 4a',1495,11,0,0,0,0,56,2),(2309,0,0,0,'Wood Avenue 4b',1495,11,0,0,0,0,56,2),(2310,0,0,0,'Wood Avenue 4c',1765,11,0,0,0,0,56,2),(2311,0,0,0,'Wood Avenue 4',1765,11,0,0,0,0,64,2),(2312,0,0,0,'Wood Avenue 3',1765,11,0,0,0,0,56,2),(2313,0,0,0,'Wood Avenue 2',1765,11,0,0,0,0,49,2),(2314,0,0,0,'Wood Avenue 1',1765,11,0,0,0,0,64,2),(2315,0,0,0,'Magic Academy, Guild',12025,11,0,0,0,0,412,14),(2316,0,0,0,'Magic Academy, Flat 1',1465,11,0,0,0,0,57,3),(2317,0,0,0,'Magic Academy, Flat 2',1530,11,0,0,0,0,55,2),(2318,0,0,0,'Magic Academy, Flat 3',1430,11,0,0,0,0,55,1),(2319,0,0,0,'Magic Academy, Flat 4',1530,11,0,0,0,0,55,2),(2320,0,0,0,'Magic Academy, Flat 5',1430,11,0,0,0,0,55,1),(2321,0,0,0,'Magic Academy, Shop',1595,11,0,0,0,0,48,1),(2322,0,0,0,'Stonehome Village 1',1780,11,0,0,0,0,74,2),(2323,0,0,0,'Stonehome Flats, Flat 05',400,11,0,0,0,0,20,1),(2324,0,0,0,'Stonehome Flats, Flat 04',400,11,0,0,0,0,25,1),(2325,0,0,0,'Stonehome Flats, Flat 06',400,11,0,0,0,0,20,1),(2326,0,0,0,'Stonehome Flats, Flat 03',400,11,0,0,0,0,20,1),(2327,0,0,0,'Stonehome Flats, Flat 01',400,11,0,0,0,0,20,1),(2328,0,0,0,'Stonehome Flats, Flat 02',740,11,0,0,0,0,30,2),(2329,0,0,0,'Stonehome Flats, Flat 11',740,11,0,0,0,0,35,2),(2330,0,0,0,'Stonehome Flats, Flat 12',740,11,0,0,0,0,35,2),(2331,0,0,0,'Stonehome Flats, Flat 13',400,11,0,0,0,0,20,1),(2332,0,0,0,'Stonehome Flats, Flat 14',400,11,0,0,0,0,20,1),(2333,0,0,0,'Stonehome Flats, Flat 16',400,11,0,0,0,0,20,1),(2334,0,0,0,'Stonehome Flats, Flat 15',400,11,0,0,0,0,20,1),(2335,0,0,0,'Stonehome Village 2',640,11,0,0,0,0,35,1),(2336,0,0,0,'Stonehome Village 3',680,11,0,0,0,0,36,1),(2337,0,0,0,'',0,0,0,0,0,0,7,0),(2338,0,0,0,'',0,0,0,0,0,0,7,0),(2339,0,0,0,'',0,0,0,0,0,0,70,1),(2340,0,0,0,'',0,0,0,0,0,0,31,2),(2341,0,0,0,'',0,0,0,0,0,0,25,2),(2342,0,0,0,'',0,0,0,0,0,0,32,2),(2343,0,0,0,'',0,0,0,0,0,0,10,0),(2344,0,0,0,'',0,0,0,0,0,0,14,0),(2345,0,0,0,'',0,0,0,0,0,0,10,0),(2346,0,0,0,'',0,0,0,0,0,0,13,0),(2347,0,0,0,'',0,0,0,0,0,0,27,2),(2348,0,0,0,'',0,0,0,0,0,0,18,1),(2349,0,0,0,'',0,0,0,0,0,0,11,1),(2350,0,0,0,'',0,0,0,0,0,0,21,1),(2351,0,0,0,'',0,0,0,0,0,0,20,0),(2352,0,0,0,'',0,0,0,0,0,0,13,1),(2353,0,0,0,'',0,0,0,0,0,0,13,1),(2354,0,0,0,'',0,0,0,0,0,0,21,1),(2355,0,0,0,'',0,0,0,0,0,0,21,1),(2356,0,0,0,'Cormaya Flats, Flat 11',450,11,0,0,0,0,20,1),(2357,0,0,0,'',0,0,0,0,0,0,13,0),(2358,0,0,0,'',0,0,0,0,0,0,9,0),(2359,0,0,0,'',0,0,0,0,0,0,13,0),(2360,0,0,0,'',0,0,0,0,0,0,17,0),(2361,0,0,0,'Cormaya 5',4250,11,0,0,0,0,167,3),(2362,0,0,0,'',0,0,0,0,0,0,21,1),(2363,0,0,0,'Cormaya 7',2395,11,0,0,0,0,84,2),(2364,0,0,0,'',0,0,0,0,0,0,28,1),(2365,0,0,0,'',0,0,0,0,0,0,13,0),(2366,0,0,0,'',0,0,0,0,0,0,5,0),(2367,0,0,0,'',0,0,0,0,0,0,7,1),(2368,0,0,0,'',0,0,0,0,0,0,7,0),(2369,0,0,0,'',0,0,0,0,0,0,14,1),(2370,0,0,0,'',0,0,0,0,0,0,7,1),(2371,0,0,0,'',0,0,0,0,0,0,7,1),(2372,0,0,0,'',0,0,0,0,0,0,5,0),(2373,0,0,0,'',0,0,0,0,0,0,7,0),(2374,0,0,0,'',0,0,0,0,0,0,20,1),(2375,0,0,0,'',0,0,0,0,0,0,20,1),(2376,0,0,0,'',0,0,0,0,0,0,27,1),(2377,0,0,0,'',0,0,0,0,0,0,10,0),(2378,0,0,0,'',0,0,0,0,0,0,19,1),(2379,0,0,0,'',0,0,0,0,0,0,19,1),(2380,0,0,0,'Hill Hideout',13950,3,0,0,0,0,346,15),(2381,0,0,0,'Meriana Beach',8230,7,0,0,0,0,184,3),(2382,0,0,0,'',0,0,0,0,0,0,28,1),(2383,0,0,0,'',0,0,0,0,0,0,28,1),(2384,0,0,0,'',0,0,0,0,0,0,25,0),(2385,0,0,0,'',0,0,0,0,0,0,28,2),(2386,0,0,0,'Darashia 8, Flat 05',2665,10,0,0,0,0,85,2),(2387,0,0,0,'Darashia, Eastern Guildhall',12660,10,0,0,0,0,442,16),(2388,0,0,0,'',0,0,0,0,0,0,35,1),(2389,0,0,0,'',0,0,0,0,0,0,15,0),(2390,0,0,0,'',0,0,0,0,0,0,12,0),(2391,0,0,0,'',0,0,0,0,0,0,12,0),(2392,0,0,0,'',0,0,0,0,0,0,12,0),(2393,0,0,0,'',0,0,0,0,0,0,12,0),(2394,0,0,0,'',0,0,0,0,0,0,12,0),(2395,0,0,0,'Outlaw Camp 4',200,3,0,0,0,0,9,1),(2396,0,0,0,'',0,0,0,0,0,0,15,0),(2397,0,0,0,'',0,0,0,0,0,0,12,0),(2398,0,0,0,'',0,0,0,0,0,0,12,0),(2399,0,0,0,'',0,0,0,0,0,0,12,0),(2400,0,0,0,'',0,0,0,0,0,0,12,0),(2401,0,0,0,'',0,0,0,0,0,0,12,0),(2402,0,0,0,'',0,0,0,0,0,0,27,1),(2403,0,0,0,'',0,0,0,0,0,0,12,0),(2404,0,0,0,'',0,0,0,0,0,0,12,0),(2405,0,0,0,'',0,0,0,0,0,0,24,1),(2406,0,0,0,'',0,0,0,0,0,0,36,1),(2407,0,0,0,'Open-Air Theatre',2700,2,0,0,0,0,60,1),(2408,0,0,0,'',0,0,0,0,0,0,40,0),(2409,0,0,0,'',0,0,0,0,0,0,36,0),(2410,0,0,0,'Upper Barracks 3',210,3,0,0,0,0,13,1),(2411,0,0,0,'',0,0,0,0,0,0,48,1),(2412,0,0,0,'',0,0,0,0,0,0,52,1),(2413,0,0,0,'',0,0,0,0,0,0,85,4),(2414,0,0,0,'Upper Barracks 7',210,3,0,0,0,0,12,1),(2415,0,0,0,'',0,0,0,0,0,0,80,2),(2416,0,0,0,'',0,0,0,0,0,0,17,1),(2417,0,0,0,'',0,0,0,0,0,0,15,1),(2418,0,0,0,'',0,0,0,0,0,0,15,1),(2419,0,0,0,'',0,0,0,0,0,0,15,1),(2420,0,0,0,'',0,0,0,0,0,0,15,1),(2421,0,0,0,'',0,0,0,0,0,0,20,1),(2422,0,0,0,'Mammoth House',9300,12,0,0,0,0,218,6),(2423,0,0,0,'',0,0,0,0,0,0,50,1),(2424,0,0,0,'',0,0,0,0,0,0,50,1),(2425,0,0,0,'',0,0,0,0,0,0,35,1),(2426,0,0,0,'',0,0,0,0,0,0,94,2),(2427,0,0,0,'',0,0,0,0,0,0,104,2),(2428,0,0,0,'',0,0,0,0,0,0,120,2),(2429,0,0,0,'',0,0,0,0,0,0,56,1),(2430,0,0,0,'',0,0,0,0,0,0,98,1),(2431,0,0,0,'',0,0,0,0,0,0,98,1),(2432,0,0,0,'',0,0,0,0,0,0,20,1),(2433,0,0,0,'',0,0,0,0,0,0,20,1),(2434,0,0,0,'',0,0,0,0,0,0,29,1),(2435,0,0,0,'',0,0,0,0,0,0,104,2),(2436,0,0,0,'',0,0,0,0,0,0,18,1),(2437,0,0,0,'',0,0,0,0,0,0,24,1),(2438,0,0,0,'',0,0,0,0,0,0,115,3),(2439,0,0,0,'',0,0,0,0,0,0,183,4),(2440,0,0,0,'',0,0,0,0,0,0,20,1),(2441,0,0,0,'',0,0,0,0,0,0,140,3),(2442,0,0,0,'',0,0,0,0,0,0,40,1),(2443,0,0,0,'',0,0,0,0,0,0,20,1),(2444,0,0,0,'',0,0,0,0,0,0,20,1),(2445,0,0,0,'',0,0,0,0,0,0,36,2),(2446,0,0,0,'',0,0,0,0,0,0,184,5),(2447,0,0,0,'Lower Barracks 21',300,3,0,0,0,0,17,1),(2448,0,0,0,'',0,0,0,0,0,0,30,1),(2449,0,0,0,'',0,0,0,0,0,0,35,1),(2450,0,0,0,'',0,0,0,0,0,0,38,1),(2451,0,0,0,'',0,0,0,0,0,0,36,1),(2452,0,0,0,'',0,0,0,0,0,0,36,2),(2453,0,0,0,'',0,0,0,0,0,0,50,1),(2454,0,0,0,'',0,0,0,0,0,0,72,1),(2455,0,0,0,'',0,0,0,0,0,0,210,4),(2456,0,0,0,'The Yeah Beach Project',6525,7,0,0,0,0,183,3),(2460,0,0,0,'Hare\'s Den',7500,3,0,0,0,0,233,4),(2461,0,0,0,'Lost Cavern',14730,3,0,0,0,0,621,7),(2462,0,0,0,'Caveman Shelter',3780,14,0,0,0,0,92,4),(2463,0,0,0,'Old Sanctuary of God King Qjell',21940,28,0,0,0,0,854,6),(2464,0,0,0,'Wallside Lane 1',7590,33,0,0,0,0,295,4),(2465,0,0,0,'Wallside Residence',6680,33,0,0,0,0,223,4),(2466,0,0,0,'Wallside Lane 2',8445,33,0,0,0,0,294,4),(2467,0,0,0,'Antimony Lane 3',3665,33,0,0,0,0,126,3),(2468,0,0,0,'Antimony Lane 2',4745,33,0,0,0,0,159,3),(2469,0,0,0,'Vanward Flats B',7410,33,0,0,0,0,245,4),(2470,0,0,0,'Vanward Flats A',7410,33,0,0,0,0,222,4),(2471,0,0,0,'Bronze Brothers Bastion',35205,33,0,0,0,0,1233,15),(2472,0,0,0,'Antimony Lane 1',7105,33,0,0,0,0,242,5),(2473,0,0,0,'Rathleton Hills Estate',20685,33,0,0,0,0,646,13),(2474,0,0,0,'Rathleton Hills Residence',7085,33,0,0,0,0,228,3),(2475,0,0,0,'Rathleton Plaza 1',2890,33,0,0,0,0,95,2),(2476,0,0,0,'Rathleton Plaza 2',2620,33,0,0,0,0,99,2),(2478,0,0,0,'Antimony Lane 4',5150,33,0,0,0,0,176,3),(2480,0,0,0,'Old Heritage Estate',12075,33,0,0,0,0,422,7),(2481,0,0,0,'Cistern Ave',3745,33,0,0,0,0,173,2),(2482,0,0,0,'Rathleton Plaza 4',5005,33,0,0,0,0,193,2),(2483,0,0,0,'Rathleton Plaza 3',5735,33,0,0,0,0,193,3),(2488,0,0,0,'Thrarhor V e (Shop)',3000,9,0,0,0,0,36,1),(2491,0,0,0,'Isle of Solitude House',3000,31,0,0,0,0,529,14),(2492,0,0,0,'Tunnel Gardens 9',0,3,0,0,0,0,15,2),(2493,0,0,0,'Tunnel Gardens 10',0,3,0,0,0,0,16,2),(2494,0,0,0,'Tunnel Gardens 11',0,3,0,0,0,0,16,2),(2495,0,0,0,'Tunnel Gardens 12',0,3,0,0,0,0,16,2),(2496,0,0,0,'Marketplace 1',0,53,0,0,0,0,111,1),(2497,0,0,0,'Marketplace 2',0,53,0,0,0,0,125,2),(2498,0,0,0,'Palace Vicinity',0,53,0,0,0,0,155,2),(2499,0,0,0,'Quay 1',0,53,0,0,0,0,159,5),(2500,0,0,0,'Quay 2',0,53,0,0,0,0,95,2),(2501,0,0,0,'Wave Tower',0,53,0,0,0,0,274,4),(2502,0,0,0,'Halls of Sun and Sea',0,53,0,0,0,0,473,9),(2503,0,0,0,'Pirate Shipwreck 1',5385,10,0,0,0,0,239,0),(2504,0,0,0,'Pirate Shipwreck 2',5385,10,0,0,0,0,286,0),(2505,0,0,0,'Theater Avenue, Tower',0,4,0,0,0,0,118,3),(2506,0,0,0,'Caretakers Residence',0,1,0,0,0,0,361,7),(2507,0,0,0,'Harbour Place 3',0,1,0,0,0,0,152,2),(2508,0,0,0,'Smugglers Den',0,1,0,0,0,0,334,0),(2509,0,0,0,'Prima Arbor',0,1,0,0,0,0,325,0),(2510,0,0,0,'Iron Alley Watch, Upper',0,1,0,0,0,0,251,0),(2511,0,0,0,'Iron Alley Watch, Lower',0,1,0,0,0,0,251,0),(2512,0,0,0,'Lucky Lane 2 (Tower)',0,1,0,0,0,0,252,0),(2513,0,0,0,'Lucky Lane 3 (Tower)',0,1,0,0,0,0,252,0),(2514,0,0,0,'Mystic Lane 3 (Tower)',0,1,0,0,0,0,252,0),(2515,0,0,0,'Castle, Residence',0,1,0,0,0,0,157,0),(2516,0,0,0,'Harbour Promenade 1',0,1,0,0,0,0,233,0),(2517,0,0,0,'Luminous Arc 5',0,1,0,0,0,0,210,0),(2518,0,0,0,'Stronghold',0,1,0,0,0,0,374,0),(2519,0,0,0,'Lakeside Mansion',0,1,0,0,0,0,222,0),(2520,0,0,0,'Ivory Mansion',0,1,0,0,0,0,414,0),(2521,0,0,0,'Aureate Court 5',0,1,0,0,0,0,225,0),(2522,0,0,0,'Hagglers Hangout 7',0,1,0,0,0,0,216,0),(2523,0,0,0,'Dwarven Magnates Estate',0,3,0,0,0,0,387,0),(2524,0,0,0,'Forge Masters Quarters',0,1,0,0,0,0,480,0),(2525,0,0,0,'Big Game Hunters Lodge',0,1,0,0,0,0,298,0),(2526,0,0,0,'Mad Scientists Lab',0,1,0,0,0,0,289,0),(2555,0,0,0,'',0,0,0,0,0,0,66,2),(2556,0,0,0,'',0,0,0,0,0,0,75,2),(2557,0,0,0,'',0,0,0,0,0,0,77,1),(2558,0,0,0,'',0,0,0,0,0,0,51,1),(2559,0,0,0,'',0,0,0,0,0,0,98,2),(2560,0,0,0,'',0,0,0,0,0,0,104,2),(2561,0,0,0,'',0,0,0,0,0,0,63,1),(2562,0,0,0,'',0,0,0,0,0,0,80,1),(2563,0,0,0,'',0,0,0,0,0,0,97,2),(2564,0,0,0,'',0,0,0,0,0,0,75,2),(2565,0,0,0,'',0,0,0,0,0,0,61,1),(2566,0,0,0,'',0,0,0,0,0,0,64,1),(2567,0,0,0,'',0,0,0,0,0,0,65,1),(2568,0,0,0,'',0,0,0,0,0,0,103,2),(2569,0,0,0,'',0,0,0,0,0,0,71,2),(2570,0,0,0,'',0,0,0,0,0,0,123,2),(2571,0,0,0,'',0,0,0,0,0,0,76,1),(2572,0,0,0,'',0,0,0,0,0,0,84,2),(2573,0,0,0,'',0,0,0,0,0,0,268,6),(2574,0,0,0,'',0,0,0,0,0,0,81,1),(2856,0,0,0,'',0,0,0,0,0,0,42,1),(2859,0,0,0,'',0,0,0,0,0,0,53,1),(2860,0,0,0,'',0,0,0,0,0,0,66,1),(2861,0,0,0,'',0,0,0,0,0,0,72,1),(2862,0,0,0,'',0,0,0,0,0,0,72,1),(2863,0,0,0,'',0,0,0,0,0,0,106,2),(2864,0,0,0,'',0,0,0,0,0,0,94,1),(2865,0,0,0,'',0,0,0,0,0,0,90,1),(2866,0,0,0,'',0,0,0,0,0,0,138,2),(2867,0,0,0,'',0,0,0,0,0,0,36,1),(2868,0,0,0,'',0,0,0,0,0,0,42,1),(2869,0,0,0,'',0,0,0,0,0,0,30,1),(2870,0,0,0,'',0,0,0,0,0,0,35,1),(2872,0,0,0,'Waterside District 1',0,8,0,0,0,0,45,1),(2873,0,0,0,'Extremity 1',0,8,0,0,0,0,36,2),(2874,0,0,0,'East Lane 1',0,8,0,0,0,0,56,2),(2875,0,0,0,'Park Lane 1',0,8,0,0,0,0,25,1),(2876,0,0,0,'Park Lane 2',0,8,0,0,0,0,80,2),(2877,0,0,0,'Park Lane 4',0,8,0,0,0,0,108,3),(2878,0,0,0,'Park Lane 3',0,8,0,0,0,0,70,1),(2879,0,0,0,'Theater Avenue 2',0,8,0,0,0,0,49,1),(2880,0,0,0,'Theater Avenue 1',0,8,0,0,0,0,35,1),(2881,0,0,0,'Theater Avenue 3, 2a',0,8,0,0,0,0,84,2),(2882,0,0,0,'Central Street 4',0,8,0,0,0,0,138,2),(2883,0,0,0,'Central Street 3',0,8,0,0,0,0,146,2),(2884,0,0,0,'Central Street 1',0,8,0,0,0,0,48,1),(2885,0,0,0,'Central Street 2',0,8,0,0,0,0,48,1),(2886,0,0,0,'Magician\'s Alley 1',0,8,0,0,0,0,36,2),(2887,0,0,0,'Magician\'s Alley 2',0,8,0,0,0,0,36,1),(2888,0,0,0,'Magician\'s Alley 3',0,8,0,0,0,0,47,1),(2889,0,0,0,'Magician\'s Alley 5, 2a',0,8,0,0,0,0,31,1),(2890,0,0,0,'Magician\'s Alley 4, 2a',0,8,0,0,0,0,18,1),(2891,0,0,0,'Magician\'s Alley 3, 2a',0,8,0,0,0,0,15,1),(2892,0,0,0,'Western Side 1',0,8,0,0,0,0,25,1),(2893,0,0,0,'Western Side 2',0,8,0,0,0,0,25,2),(2894,0,0,0,'Western Side 3',0,8,0,0,0,0,25,1),(2895,0,0,0,'Western Side 4',0,8,0,0,0,0,30,1),(2896,0,0,0,'Western Side 5',0,8,0,0,0,0,30,2),(2897,0,0,0,'Western Side 5, 2a',0,8,0,0,0,0,30,1),(2898,0,0,0,'Western Side 6, 2a',0,8,0,0,0,0,37,1),(2899,0,0,0,'Central Plaza 1',0,8,0,0,0,0,28,2),(2900,0,0,0,'Central Plaza 2',0,8,0,0,0,0,35,1),(2901,0,0,0,'Central Plaza 3',0,8,0,0,0,0,49,1),(2902,0,0,0,'Northern Street I a',0,8,0,0,0,0,207,4),(2903,0,0,0,'Northern Street I b',0,8,0,0,0,0,63,2),(2904,0,0,0,'Northern Street II',0,8,0,0,0,0,35,1),(2905,0,0,0,'Northern Street 1',0,8,0,0,0,0,30,1),(2906,0,0,0,'Northern Street 2',0,8,0,0,0,0,30,1),(2907,0,0,0,'Northern Street 3',0,8,0,0,0,0,36,1),(2908,0,0,0,'Northern Street 6, 2a',0,8,0,0,0,0,36,1),(2909,0,0,0,'Northern Street 5, 2a',0,8,0,0,0,0,30,1),(2910,0,0,0,'Northern Street 4, 2a',0,8,0,0,0,0,30,1),(2911,0,0,0,'Lonely Sea Side Hostel',0,8,0,0,0,0,96,2),(2912,0,0,0,'The Bath 6',0,4,0,0,0,0,20,0),(2913,0,0,0,'Magic Academy, Flat 2',0,3,0,0,0,0,16,0),(2914,0,0,0,'Central Circle 6 (Shop)',0,3,0,0,0,0,77,1),(2915,0,0,0,'Central Circle 5 (Shop)',0,3,0,0,0,0,56,2),(2916,0,0,0,'Central Circle 7 (Shop)',0,3,0,0,0,0,49,2),(2917,0,0,0,'Central Circle 8 (Shop)',0,3,0,0,0,0,49,2),(2918,0,0,0,'Waterside Flats 1',0,3,0,0,0,0,36,2),(2919,0,0,0,'Waterside Flats 2',0,3,0,0,0,0,33,1),(2920,0,0,0,'Waterside Flats 3',0,3,0,0,0,0,28,1),(2921,0,0,0,'Waterside Street',0,3,0,0,0,0,32,1),(2922,0,0,0,'Central Circle 3',0,3,0,0,0,0,25,1),(2923,0,0,0,'Central Circle 4',0,3,0,0,0,0,20,1),(2924,0,0,0,'Central Circle 2',0,3,0,0,0,0,42,1),(2925,0,0,0,'Central Circle 1',0,3,0,0,0,0,42,1),(2926,0,0,0,'Stonehome Flats, Flat 01',0,3,0,0,0,0,28,0),(2927,0,0,0,'Stonehome Flats, Flat 02',0,3,0,0,0,0,20,0),(2928,0,0,0,'Stonehome Flats, Flat 03',0,3,0,0,0,0,25,0),(2929,0,0,0,'Stonehome Flats, Flat 04',0,3,0,0,0,0,20,0),(2930,0,0,0,'Stonehome Flats, Flat 05',0,3,0,0,0,0,25,0),(2931,0,0,0,'Stonehome Flats, Flat 06',0,3,0,0,0,0,20,0),(2933,0,0,0,'Central Square 10',0,9,0,0,0,0,36,1),(2934,0,0,0,'Central Square 11',0,9,0,0,0,0,42,1),(2935,0,0,0,'Central Square 12',0,9,0,0,0,0,42,1),(2936,0,0,0,'Central Square 13',0,9,0,0,0,0,38,1),(2937,0,0,0,'Central Square 14',0,9,0,0,0,0,20,1),(2938,0,0,0,'Paladin Store',0,9,0,0,0,0,13,0),(2939,0,0,0,'Boatyard 1',0,9,0,0,0,0,15,0),(2940,0,0,0,'Boatyard 2',0,9,0,0,0,0,30,0),(2941,0,0,0,'Boatyard 3',0,9,0,0,0,0,16,0),(2942,0,0,0,'Boatyard 4',0,9,0,0,0,0,16,1),(2943,0,0,0,'Boatyard 5',0,9,0,0,0,0,12,0),(2944,0,0,0,'Boatyard 6',0,9,0,0,0,0,32,1),(2945,0,0,0,'Fishing Hut 1',0,9,0,0,0,0,20,1),(2946,0,0,0,'Fishing Hut 2',0,9,0,0,0,0,35,1),(2947,0,0,0,'Fishing Hut 6',0,9,0,0,0,0,35,1),(2948,0,0,0,'Bothfar Plaza 1',0,9,0,0,0,0,25,0),(2949,0,0,0,'Bothfar Plaza 3',0,9,0,0,0,0,49,1),(2950,0,0,0,'Bothfar Plaza 4',0,9,0,0,0,0,36,1),(2951,0,0,0,'Bothfar Plaza 5',0,9,0,0,0,0,36,1),(2952,0,0,0,'Gunbjorn Valley 1',0,9,0,0,0,0,72,1),(2953,0,0,0,'Gunbjorn Valley 2',0,9,0,0,0,0,50,1),(2954,0,0,0,'Gunbjorn Valley 3',0,9,0,0,0,0,205,4),(2955,0,0,0,'Gunbjorn Valley 4',0,9,0,0,0,0,36,1),(2956,0,0,0,'Helkarakse 1',0,9,0,0,0,0,36,2),(2957,0,0,0,'Helkarakse 2',0,9,0,0,0,0,40,1),(2959,0,0,0,'Helkarakse 3',0,4,0,0,0,0,12,0),(2960,0,0,0,'Helkarakse 4',0,4,0,0,0,0,12,0),(2961,0,0,0,'Helkarakse 5',0,4,0,0,0,0,16,0),(2962,0,0,0,'Mountain Quarters 1',0,4,0,0,0,0,12,0),(2963,0,0,0,'Mountain Quarters 2',0,4,0,0,0,0,12,0),(2964,0,0,0,'Mountain Quarters 3',0,4,0,0,0,0,9,0),(2965,0,0,0,'Mountain Quarters 4',0,4,0,0,0,0,12,0),(2966,0,0,0,'Mountain Quarters 5',0,4,0,0,0,0,9,0),(2967,0,0,0,'Mountain Quarters 6',0,4,0,0,0,0,28,1),(2968,0,0,0,'Mountain Quarters 7',0,4,0,0,0,0,18,1),(2969,0,0,0,'Temple Square 1',0,4,0,0,0,0,12,0),(2970,0,0,0,'Temple Square 2',0,4,0,0,0,0,12,0),(2971,0,0,0,'Temple Square 3',0,4,0,0,0,0,12,0),(2972,0,0,0,'Temple Square 4',0,4,0,0,0,0,9,0),(2973,0,0,0,'Temple Square 5',0,4,0,0,0,0,9,0),(2974,0,0,0,'Temple Square 6',0,4,0,0,0,0,12,0),(2975,0,0,0,'Temple Square 7',0,4,0,0,0,0,24,1),(2976,0,0,0,'Temple Square 8',0,4,0,0,0,0,28,2),(2977,0,0,0,'Temple Square 9',0,4,0,0,0,0,16,0),(2978,0,0,0,'Temple Square 10',0,4,0,0,0,0,28,1),(2979,0,0,0,'Temple Square 11',0,4,0,0,0,0,28,1),(2980,0,0,0,'Village\'s Suburb 1',0,4,0,0,0,0,36,0),(2981,0,0,0,'Village\'s Suburb 2',0,4,0,0,0,0,31,1),(2982,0,0,0,'Village\'s Suburb 3',0,4,0,0,0,0,36,0),(2984,0,0,0,'Othehothep I b',0,7,0,0,0,0,20,1),(2985,0,0,0,'Othehothep I a',0,7,0,0,0,0,25,1),(2986,0,0,0,'Othehothep II a',0,7,0,0,0,0,35,2),(2987,0,0,0,'Othehothep II b',0,7,0,0,0,0,191,5),(2988,0,0,0,'Oskahl I',0,7,0,0,0,0,20,0),(2989,0,0,0,'Unklath I a',0,7,0,0,0,0,20,1),(2990,0,0,0,'Unklath II a',0,7,0,0,0,0,149,3),(2991,0,0,0,'Unklath II b',0,7,0,0,0,0,48,1),(2992,0,0,0,'Thanah I a',0,7,0,0,0,0,206,4),(2993,0,0,0,'Rathal, Flat 1',0,7,0,0,0,0,18,1),(2994,0,0,0,'Rathal, Flat 2',0,7,0,0,0,0,24,1),(2995,0,0,0,'Rathal Tower I a',0,7,0,0,0,0,115,3),(2996,0,0,0,'Botham II',0,7,0,0,0,0,98,1),(2997,0,0,0,'Botham I',0,7,0,0,0,0,98,1),(2998,0,0,0,'Charsirakh I a',0,7,0,0,0,0,64,1),(2999,0,0,0,'Salazart, Flat 2',0,7,0,0,0,0,20,1),(3000,0,0,0,'Salazart, Flat 4',0,7,0,0,0,0,15,1),(3001,0,0,0,'Salazart, Flat 6',0,7,0,0,0,0,15,1),(3002,0,0,0,'Salazart, Flat 5',0,7,0,0,0,0,15,1),(3003,0,0,0,'Salazart, Flat 3',0,7,0,0,0,0,15,1),(3004,0,0,0,'Salazart, Flat 1',0,7,0,0,0,0,20,1),(3005,0,0,0,'Salazart, Flat 7, 2a',0,7,0,0,0,0,50,1),(3006,0,0,0,'Salazart, Flat 8, 2a',0,7,0,0,0,0,50,1),(3007,0,0,0,'Salazart Flat 10, 3a',0,7,0,0,0,0,35,1),(3008,0,0,0,'Salazart Flat 9, 3a',0,7,0,0,0,0,42,0),(3009,0,0,0,'Green Embankment',0,7,0,0,0,0,97,2),(3010,0,0,0,'Esuph II',0,7,0,0,0,0,108,2),(3011,0,0,0,'Esuph I',0,7,0,0,0,0,96,2),(3012,0,0,0,'Quay 1',0,7,0,0,0,0,85,4),(3013,0,0,0,'Quay 2',0,7,0,0,0,0,101,2),(3014,0,0,0,'Stonehome Flats, Flat 07',0,3,0,0,0,0,30,0),(3015,0,0,0,'Magic Academy, Flat 1',0,3,0,0,0,0,20,0),(3016,0,0,0,'Stable Road 1',0,12,0,0,0,0,85,2),(3017,0,0,0,'Stable Road 2',0,12,0,0,0,0,80,1),(3018,0,0,0,'Stable Road 3',0,12,0,0,0,0,53,1),(3019,0,0,0,'Stable Road 4',0,12,0,0,0,0,100,2),(3020,0,0,0,'Stable Road 5',0,12,0,0,0,0,69,1),(3021,0,0,0,'Outcasts Place',0,12,0,0,0,0,109,2),(3022,0,0,0,'Boat Yard 1',0,12,0,0,0,0,120,2),(3023,0,0,0,'Boat Yard 2',0,12,0,0,0,0,75,2),(3024,0,0,0,'Depot Boulevard 1',0,12,0,0,0,0,88,1),(3025,0,0,0,'Depot Boulevard 2',0,12,0,0,0,0,102,2),(3026,0,0,0,'Depot Boulevard 3',0,12,0,0,0,0,82,2),(3027,0,0,0,'Depot Boulevard 4',0,12,0,0,0,0,62,1),(3028,0,0,0,'Corn Farm',0,12,0,0,0,0,72,1),(3029,0,0,0,'Fishermans Hut',0,12,0,0,0,0,25,1),(3030,0,0,0,'Embankment 1',0,12,0,0,0,0,60,1),(3031,0,0,0,'Embankment 2',0,12,0,0,0,0,84,1),(3032,0,0,0,'Embankment 3',0,12,0,0,0,0,132,2),(3033,0,0,0,'Embankment 4',0,12,0,0,0,0,76,1),(3034,0,0,0,'Green Square 1',0,12,0,0,0,0,83,2),(3035,0,0,0,'Main Street 1',0,12,0,0,0,0,300,6),(3036,0,0,0,'Main Street 2',0,12,0,0,0,0,82,1),(3038,0,0,0,'Main Street 3',0,13,0,0,0,0,74,1),(3039,0,0,0,'Main Street 4',0,13,0,0,0,0,74,1),(3040,0,0,0,'Main Street 5',0,13,0,0,0,0,72,1),(3041,0,0,0,'Shelf Site',0,13,0,0,0,0,94,1),(3042,0,0,0,'Trout Plaza 1',0,13,0,0,0,0,106,2),(3043,0,0,0,'Trout Plaza 3',0,13,0,0,0,0,90,1),(3044,0,0,0,'Dwarven Magnate\'s Estate',0,4,0,0,0,0,40,0),(3045,0,0,0,'Nobility Quarter 1',0,4,0,0,0,0,36,0),(3046,0,0,0,'Nobility Quarter 2',0,4,0,0,0,0,36,1),(3047,0,0,0,'The Farms 1',0,4,0,0,0,0,12,0),(3048,0,0,0,'The Farms 2',0,4,0,0,0,0,12,0),(3049,0,0,0,'The Farms 3',0,4,0,0,0,0,28,1),(3050,0,0,0,'The Farms 4',0,4,0,0,0,0,28,1),(3051,0,0,0,'The Farms 5',0,4,0,0,0,0,12,0),(3052,0,0,0,'The Farms 6',0,4,0,0,0,0,9,0),(3053,0,0,0,'The Farms 7',0,4,0,0,0,0,12,0),(3054,0,0,0,'The Farms 8',0,4,0,0,0,0,9,0),(3055,0,0,0,'The Farms 9',0,4,0,0,0,0,12,0),(3056,0,0,0,'The Farms 10',0,4,0,0,0,0,9,0),(3057,0,0,0,'The Farms, Fishing Hut',0,4,0,0,0,0,24,1),(3058,0,0,0,'The Farms 12',0,4,0,0,0,0,9,0),(3059,0,0,0,'The Farms 11',0,4,0,0,0,0,12,0),(3060,0,0,0,'The Farms 14',0,4,0,0,0,0,9,0),(3061,0,0,0,'The Farms 13',0,4,0,0,0,0,12,0),(3062,0,0,0,'The Farms 16',0,4,0,0,0,0,9,0),(3063,0,0,0,'The Farms 15',0,4,0,0,0,0,12,0),(3064,0,0,0,'Hares Den 3',0,4,0,0,0,0,28,2),(3065,0,0,0,'Hares Den 4',0,4,0,0,0,0,16,0),(3066,0,0,0,'Hares Den 1',0,4,0,0,0,0,28,1),(3067,0,0,0,'Hares Den 2',0,4,0,0,0,0,28,1),(3068,0,0,0,'Arakmehn I',0,7,0,0,0,0,49,1),(3069,0,0,0,'Arakmehn II',0,7,0,0,0,0,42,1),(3070,0,0,0,'Charsirakh, Flat 3',0,7,0,0,0,0,30,1),(3071,0,0,0,'Charsirakh, Flat 1',0,7,0,0,0,0,20,1),(3072,0,0,0,'Charsirakh, Flat 2',0,7,0,0,0,0,15,1),(3073,0,0,0,'Charsirakh I b',0,7,0,0,0,0,99,2),(3074,0,0,0,'Old Lighthouse',0,5,0,0,0,0,84,2),(3075,0,0,0,'Seagull Walk 1',0,5,0,0,0,0,85,2),(3076,0,0,0,'Seagull Walk 2',0,5,0,0,0,0,80,1),(3077,0,0,0,'Market Street 1',0,5,0,0,0,0,102,2),(3078,0,0,0,'Market Street2',0,5,0,0,0,0,78,2),(3079,0,0,0,'Market Street3',0,5,0,0,0,0,63,1),(3080,0,0,0,'Iron Alley 1',0,5,0,0,0,0,71,1),(3081,0,0,0,'Iron Alley 2',0,5,0,0,0,0,20,1),(3082,0,0,0,'Iron Alley 3, 2a',0,5,0,0,0,0,52,1),(3083,0,0,0,'Dream Street 1 (Shop)',0,5,0,0,0,0,130,2),(3084,0,0,0,'Dream Street 1, 2a',0,5,0,0,0,0,76,1),(3085,0,0,0,'Mystic Lane 1',0,5,0,0,0,0,75,2),(3086,0,0,0,'Mystic Lane 2',0,5,0,0,0,0,128,2),(3087,0,0,0,'Mystic Lane (Tower)',0,5,0,0,0,0,84,1),(3088,0,0,0,'Mystic Lane (Depot)',0,5,0,0,0,0,60,1),(3089,0,0,0,'Mystic Lane 3',0,5,0,0,0,0,80,1),(3090,0,0,0,'Mystic Lane 5',0,5,0,0,0,0,111,2),(3091,0,0,0,'Mystic Lane 4',0,5,0,0,0,0,107,2),(3092,0,0,0,'Mystic Lane 6',0,5,0,0,0,0,88,1),(3093,0,0,0,'Elm Watch',0,5,0,0,0,0,84,1),(3094,0,0,0,'Paupers Salvation',0,5,0,0,0,0,84,2),(3095,0,0,0,'Lucky Lane',0,5,0,0,0,0,299,6),(3096,0,0,0,'Glacier Side 1',0,9,0,0,0,0,72,1),(3097,0,0,0,'Glacier Side 2',0,9,0,0,0,0,72,1),(3098,0,0,0,'Glacier Side 3',0,9,0,0,0,0,72,1),(3099,0,0,0,'Glacier Side 4',0,9,0,0,0,0,42,1),(3100,0,0,0,'Glacier Side 6, 2a',0,9,0,0,0,0,35,1),(3101,0,0,0,'Glacier Side 5',0,9,0,0,0,0,36,1),(3102,0,0,0,'Glacier Side 7, 2a',0,9,0,0,0,0,30,1),(3103,0,0,0,'Glacier Side 8',0,9,0,0,0,0,87,1),(3104,0,0,0,'Bears Paw 1',0,9,0,0,0,0,106,2),(3105,0,0,0,'Bears Paw 2',0,9,0,0,0,0,90,1),(3106,0,0,0,'The Big Bears Paw',0,9,0,0,0,0,137,2),(3107,0,0,0,'Mammoth House',0,9,0,0,0,0,54,1),(3108,0,0,0,'Sky Lane',0,3,0,0,0,0,42,0),(3114,0,0,0,'Verona Harbour Lane',0,2,0,0,0,0,24,0),(3115,0,0,0,'Stone Guild Hall',0,2,0,0,0,0,193,0),(3137,0,0,0,'Ivory Circle 1',0,6,0,0,0,0,36,1),(3138,0,0,0,'Marble Lane 1',0,6,0,0,0,0,36,1),(3139,0,0,0,'Gunbjorn Valley 1',0,6,0,0,0,0,35,1),(3140,0,0,0,'Boatyard, Flat 1',0,6,0,0,0,0,30,0),(3141,0,0,0,'Boatyard, Flat 2',0,6,0,0,0,0,16,0),(3142,0,0,0,'Boatyard, Flat 3',0,6,0,0,0,0,16,1),(3143,0,0,0,'Boatyard, Flat 4',0,6,0,0,0,0,12,0),(3144,0,0,0,'Boatyard 3',0,6,0,0,0,0,48,1),(3145,0,0,0,'Boatyard 2',0,6,0,0,0,0,25,0),(3146,0,0,0,'Boatyard 1',0,6,0,0,0,0,36,1),(3147,0,0,0,'Ivory Circle 2',0,6,0,0,0,0,42,1),(3148,0,0,0,'Marble Lane 2',0,6,0,0,0,0,42,1),(3149,0,0,0,'Gunbjorn Valley 2',0,6,0,0,0,0,36,1),(3150,0,0,0,'Boatyard, Flat 6',0,6,0,0,0,0,20,1),(3151,0,0,0,'Boatyard, Flat 5',0,6,0,0,0,0,32,1),(3152,0,0,0,'Boatyard 5, 2a',0,6,0,0,0,0,35,1),(3153,0,0,0,'Boatyard 4, 2a',0,6,0,0,0,0,36,1),(3154,0,0,0,'Boatyard 6, 3a',0,6,0,0,0,0,35,1),(3155,0,0,0,'Boatyard, Flat 9',0,6,0,0,0,0,15,0),(3156,0,0,0,'Boatyard, Flat 10',0,6,0,0,0,0,12,0),(3157,0,0,0,'Boatyard, Flat 8',0,6,0,0,0,0,20,1),(3158,0,0,0,'Harvester\'s Haven',0,6,0,0,0,0,37,1),(3159,0,0,0,'Gunbjorn Valley 3',0,6,0,0,0,0,36,2),(3160,0,0,0,'Shady Trail 3',0,6,0,0,0,0,50,1),(3161,0,0,0,'Shady Trail 2',0,6,0,0,0,0,72,1),(3162,0,0,0,'Shady Trail 1',0,6,0,0,0,0,183,4),(3163,0,0,0,'East Lane 2, 2a',0,8,0,0,0,0,56,2),(3164,0,0,0,'Extremity 2',0,8,0,0,0,0,45,1),(3165,0,0,0,'Extremity 3, 2a',0,8,0,0,0,0,78,2),(3166,0,0,0,'Tasheath, Flaroh',0,8,0,0,0,0,20,1),(3167,0,0,0,'Green Village, Residence 1',0,8,0,0,0,0,45,2),(3168,0,0,0,'Green Village, Residence 2',0,8,0,0,0,0,154,2),(3169,0,0,0,'Warriors\' Guildhall',0,8,0,0,0,0,506,11),(3170,0,0,0,'Verona Depot Apartments V',0,2,0,0,0,0,14,1);
/*!40000 ALTER TABLE `houses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ioe`
--

DROP TABLE IF EXISTS `ioe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ioe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hora` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemid` int NOT NULL,
  `boss` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ioe`
--

LOCK TABLES `ioe` WRITE;
/*!40000 ALTER TABLE `ioe` DISABLE KEYS */;
/*!40000 ALTER TABLE `ioe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ip_bans`
--

DROP TABLE IF EXISTS `ip_bans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ip_bans` (
  `ip` int unsigned NOT NULL,
  `reason` varchar(255) NOT NULL,
  `banned_at` bigint NOT NULL,
  `expires_at` bigint NOT NULL,
  `banned_by` int NOT NULL,
  PRIMARY KEY (`ip`),
  KEY `banned_by` (`banned_by`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ip_bans`
--

LOCK TABLES `ip_bans` WRITE;
/*!40000 ALTER TABLE `ip_bans` DISABLE KEYS */;
/*!40000 ALTER TABLE `ip_bans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `links` (
  `account_id` int NOT NULL,
  `code` varchar(50) NOT NULL,
  `code_date` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `links`
--

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;
/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `market_history`
--

DROP TABLE IF EXISTS `market_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `market_history` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `player_id` int NOT NULL,
  `sale` tinyint(1) NOT NULL DEFAULT '0',
  `itemtype` int unsigned NOT NULL,
  `amount` smallint unsigned NOT NULL,
  `price` int unsigned NOT NULL DEFAULT '0',
  `expires_at` bigint unsigned NOT NULL,
  `inserted` bigint unsigned NOT NULL,
  `state` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `player_id` (`player_id`,`sale`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `market_history`
--

LOCK TABLES `market_history` WRITE;
/*!40000 ALTER TABLE `market_history` DISABLE KEYS */;
INSERT INTO `market_history` VALUES (1,5,1,2323,1,30000,1591481724,1597530488,2);
/*!40000 ALTER TABLE `market_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `market_offers`
--

DROP TABLE IF EXISTS `market_offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `market_offers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `player_id` int NOT NULL,
  `sale` tinyint(1) NOT NULL DEFAULT '0',
  `itemtype` int unsigned NOT NULL,
  `amount` smallint unsigned NOT NULL,
  `created` bigint unsigned NOT NULL,
  `anonymous` tinyint(1) NOT NULL DEFAULT '0',
  `price` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `sale` (`sale`,`itemtype`),
  KEY `created` (`created`),
  KEY `player_id` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `market_offers`
--

LOCK TABLES `market_offers` WRITE;
/*!40000 ALTER TABLE `market_offers` DISABLE KEYS */;
/*!40000 ALTER TABLE `market_offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newsticker`
--

DROP TABLE IF EXISTS `newsticker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newsticker` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` int NOT NULL,
  `text` varchar(255) NOT NULL,
  `icon` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsticker`
--

LOCK TABLES `newsticker` WRITE;
/*!40000 ALTER TABLE `newsticker` DISABLE KEYS */;
INSERT INTO `newsticker` VALUES (7,1597621117,'<p><strong>[Inaugura&ccedil;&atilde;o]</strong>&nbsp;A cria&ccedil;&atilde;o de accounts e o Download do Cliente j&aacute; est&atilde;o dispon&iacute;veis em nosso site, a abertura est&aacute; programada para Domingo, dia 16/08.</p>','newsicon_community');
/*!40000 ALTER TABLE `newsticker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagseguro_transactions`
--

DROP TABLE IF EXISTS `pagseguro_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagseguro_transactions` (
  `transaction_code` varchar(36) NOT NULL DEFAULT '',
  `name` varchar(200) DEFAULT NULL,
  `payment_method` varchar(50) NOT NULL DEFAULT '',
  `status` varchar(50) NOT NULL DEFAULT '',
  `item_count` int NOT NULL,
  `data` datetime NOT NULL,
  `payment_amount` float DEFAULT '0',
  UNIQUE KEY `transaction_code` (`transaction_code`,`status`) USING BTREE,
  KEY `name` (`name`) USING BTREE,
  KEY `status` (`status`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagseguro_transactions`
--

LOCK TABLES `pagseguro_transactions` WRITE;
/*!40000 ALTER TABLE `pagseguro_transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagseguro_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paypal_transactions`
--

DROP TABLE IF EXISTS `paypal_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paypal_transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_status` varchar(70) NOT NULL DEFAULT '',
  `date` datetime NOT NULL,
  `payer_email` varchar(255) NOT NULL DEFAULT '',
  `payer_id` varchar(255) NOT NULL DEFAULT '',
  `item_number1` varchar(255) NOT NULL DEFAULT '',
  `mc_gross` float NOT NULL,
  `mc_currency` varchar(5) NOT NULL DEFAULT '',
  `txn_id` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paypal_transactions`
--

LOCK TABLES `paypal_transactions` WRITE;
/*!40000 ALTER TABLE `paypal_transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `paypal_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_autoloot`
--

DROP TABLE IF EXISTS `player_autoloot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_autoloot` (
  `id` int NOT NULL AUTO_INCREMENT,
  `player_id` int NOT NULL,
  `autoloot_list` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=825 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_autoloot`
--

LOCK TABLES `player_autoloot` WRITE;
/*!40000 ALTER TABLE `player_autoloot` DISABLE KEYS */;
INSERT INTO `player_autoloot` VALUES (30,47,''),(32,48,''),(210,7,''),(297,59,''),(298,61,''),(305,60,''),(306,57,''),(386,58,''),(453,49,''),(454,50,''),(487,69,''),(643,46,''),(648,71,''),(652,72,''),(697,73,''),(698,74,''),(711,56,''),(726,76,''),(739,67,''),(740,68,''),(741,66,''),(742,62,''),(743,65,''),(744,64,''),(745,63,''),(776,77,''),(787,78,''),(788,70,''),(819,52,''),(820,53,''),(824,55,'');
/*!40000 ALTER TABLE `player_autoloot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_autoloot_persist`
--

DROP TABLE IF EXISTS `player_autoloot_persist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_autoloot_persist` (
  `player_guid` mediumint DEFAULT NULL,
  `cont_id` mediumint DEFAULT NULL,
  `item_id` mediumint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_autoloot_persist`
--

LOCK TABLES `player_autoloot_persist` WRITE;
/*!40000 ALTER TABLE `player_autoloot_persist` DISABLE KEYS */;
/*!40000 ALTER TABLE `player_autoloot_persist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_deaths`
--

DROP TABLE IF EXISTS `player_deaths`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_deaths` (
  `player_id` int NOT NULL,
  `time` bigint unsigned NOT NULL DEFAULT '0',
  `level` int NOT NULL DEFAULT '1',
  `killed_by` varchar(255) NOT NULL,
  `is_player` tinyint(1) NOT NULL DEFAULT '1',
  `mostdamage_by` varchar(100) NOT NULL,
  `mostdamage_is_player` tinyint(1) NOT NULL DEFAULT '0',
  `unjustified` tinyint(1) NOT NULL DEFAULT '0',
  `mostdamage_unjustified` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  KEY `player_id` (`player_id`),
  KEY `killed_by` (`killed_by`),
  KEY `mostdamage_by` (`mostdamage_by`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_deaths`
--

LOCK TABLES `player_deaths` WRITE;
/*!40000 ALTER TABLE `player_deaths` DISABLE KEYS */;
INSERT INTO `player_deaths` VALUES (3481,1582680130,21,'a rotworm',0,'a rotworm',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(3491,1586817916,114,'a demon',0,'a demon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(14,1588806126,9,'an orc warrior',0,'an orc warrior',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588806956,30,'a cyclops',0,'a cyclops',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(4,1588808882,29,'a giant spider',0,'a giant spider',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(4,1588809629,35,'a giant spider',0,'a giant spider',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588809642,50,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(17,1588810161,7,'a rat',0,'a rat',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(14,1588810574,42,'a dwarf guard',0,'a dwarf guard',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(5,1588811141,43,'a cyclops smith',0,'a cyclops drone',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(16,1588811304,38,'a tomb servant',0,'a crypt shambler',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(16,1588812254,41,'a ghost',0,'a tomb servant',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(16,1588812402,41,'a ghoul',0,'a crypt shambler',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(14,1588813807,56,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(16,1588813989,51,'a marid',0,'a marid',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588814900,70,'an orc warlord',0,'an orc leader',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(4,1588814901,62,'an orc warlord',0,'an orc warlord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588814989,70,'an orc warlord',0,'an orc warlord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(16,1588815340,56,'an orc warrior',0,'an orc leader',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(20,1588815981,35,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(5,1588816768,67,'a black knight',0,'a black knight',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(19,1588817110,48,'a dragon lord',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(12,1588819361,9,'a wolf',0,'a wolf',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588819923,82,'a crawler',0,'a crawler',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(4,1588819975,79,'a crawler',0,'Waspoid',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(5,1588819980,79,'Waspoid',0,'Waspoid',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(21,1588832264,54,'a warlock',0,'a warlock',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(27,1588858154,5,'a rat',0,'a rat',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(12,1588859827,30,'an orc',0,'an orc warrior',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1588862993,39,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(17,1588865353,37,'a cyclops',0,'a cyclops',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(12,1588865982,33,'a cyclops',0,'a cyclops',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(17,1588866314,43,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(17,1588866567,44,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(17,1588867211,50,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(28,1588868137,15,'a rotworm',0,'a rotworm',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(12,1588868600,40,'a dwarf guard',0,'a dwarf geomancer',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(21,1588872626,59,'a dragon hatchling',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588873316,97,'a hero',0,'a hero',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(12,1588873838,57,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(12,1588874943,60,'a wyrm',0,'a wyrm',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588882532,107,'a black knight',0,'a black knight',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588892987,116,'a hero',0,'a vile grandmaster',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1588897310,41,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(35,1588903985,4,'a snake',0,'a snake',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(13,1588905977,21,'a giant spider',0,'a giant spider',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(21,1588916290,65,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(4,1588918837,139,'a midnight asura',0,'a midnight asura',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588928004,137,'a shock head',0,'a frazzlemaw',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1588950307,44,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(28,1588952808,26,'a cyclops',0,'a cyclops drone',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(28,1588952953,26,'a cyclops',0,'a cyclops',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(28,1588953394,28,'a cyclops',0,'a cyclops',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(12,1588962126,77,'a black knight',0,'a black knight',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(14,1588969819,100,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1588973839,44,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1588974240,45,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(16,1588975231,58,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(36,1588975794,33,'a minotaur mage',0,'a minotaur mage',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(36,1588976164,35,'General Murius',0,'General Murius',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1588976337,52,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(28,1588977542,30,'a cyclops',0,'a cyclops',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(28,1588978804,33,'a cyclops',0,'a cyclops',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1588991220,54,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1588992505,58,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588995555,140,'a guzzlemaw',0,'a frazzlemaw',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1588996666,140,'a frazzlemaw',0,'a frazzlemaw',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(5,1588996681,142,'a frazzlemaw',0,'a guzzlemaw',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(6,1588998014,41,'an orc warlord',0,'an orc warlord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(42,1589066877,33,'a tomb servant',0,'a tomb servant',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(42,1589071373,42,'a water elemental',0,'a water elemental',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(4,1589073885,152,'a hellspawn',0,'a hellspawn',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(9,1589080203,151,'a dawnfire asura',0,'a hellspawn',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(42,1589092265,44,'a marid',0,'a blue djinn',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(42,1589092369,44,'a ghoul',0,'a crypt shambler',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(8,1589112376,56,'a water elemental',0,'a water elemental',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(28,1589121259,47,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(28,1589121553,47,'a minotaur',0,'a cyclops',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1589125883,78,'a sandstone scorpion',0,'a sandstone scorpion',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1589208371,78,'a black knight',0,'a black knight',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(23,1589208702,78,'a black knight',0,'a black knight',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(4,1589235226,159,'a black knight',0,'a black knight',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1597866496,43,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(56,1597876900,34,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(56,1597877133,34,'a wild warrior',0,'a giant spider',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1597879351,59,'a wyvern',0,'a wyvern',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1597883354,59,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(56,1597955242,48,'a vampire',0,'a banshee',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(56,1597956681,52,'a giant spider',0,'a giant spider',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(56,1597957348,55,'a demon skeleton',0,'a demon skeleton',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1597972398,79,'a hydra',0,'a hydra',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1597985696,83,'a hydra',0,'a hydra',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1598046576,83,'a haunted treeling',0,'a haunted treeling',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(70,1598056959,28,'a giant spider',0,'a giant spider',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(70,1598057315,31,'a cyclops',0,'a cyclops',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(56,1598059432,87,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(70,1598059480,41,'a dragon lord',0,'a dragon lord',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(70,1598060502,48,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(70,1598060995,48,'a dragon',0,'a dragon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1598074174,104,'The Welter',0,'The Welter',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1598075929,104,'a demon',0,'a demon',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1598161311,127,'a grim reaper',0,'a grim reaper',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1598161682,127,'a grim reaper',0,'a grim reaper',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1598225569,139,'a grim reaper',0,'a grim reaper',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(52,1598249488,143,'a frazzlemaw',0,'a frazzlemaw',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(77,1598316527,9,'a troll',0,'a troll',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242'),(55,1598417180,33,'an orc berserker',0,'an orc berserker',0,0,0,'2020-10-24 18:45:38.264','2020-10-24 18:45:38.242');
/*!40000 ALTER TABLE `player_deaths` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_depotitems`
--

DROP TABLE IF EXISTS `player_depotitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_depotitems` (
  `player_id` int NOT NULL,
  `sid` int NOT NULL COMMENT 'any given range eg 0-100 will be reserved for depot lockers and all > 100 will be then normal items inside depots',
  `pid` int NOT NULL DEFAULT '0',
  `itemtype` int NOT NULL DEFAULT '0',
  `count` int NOT NULL DEFAULT '0',
  `attributes` blob NOT NULL,
  UNIQUE KEY `player_id_2` (`player_id`,`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_depotitems`
--

LOCK TABLES `player_depotitems` WRITE;
/*!40000 ALTER TABLE `player_depotitems` DISABLE KEYS */;
INSERT INTO `player_depotitems` VALUES (49,101,1,26654,1,_binary ''),(49,102,1,2455,1,''),(49,103,5,8849,1,''),(50,101,1,2389,26,_binary '\Z'),(52,101,1,10577,1,_binary ''),(52,102,1,6558,6,_binary ''),(52,103,1,12448,24,_binary ''),(52,104,1,2475,1,''),(52,105,1,8849,1,''),(52,106,1,2145,8,_binary ''),(52,107,1,5944,3,_binary ''),(52,108,1,5878,5,_binary ''),(52,109,1,2268,3,_binary ''),(52,110,1,18417,1,_binary ''),(52,111,1,2434,1,''),(52,112,1,2189,1,''),(52,113,1,2197,5,_binary '\0'),(52,114,1,5880,2,_binary ''),(52,115,1,1996,1,_binary '%&\0\0\0'),(52,116,1,2197,1,_binary '\0'),(52,117,1,5941,1,''),(52,118,1,2154,3,_binary ''),(52,119,1,2268,3,_binary ''),(52,120,1,2268,3,_binary ''),(52,121,1,11228,6,_binary ''),(52,122,1,7590,59,_binary ';'),(52,123,1,6500,52,_binary '4'),(52,124,1,7367,3,_binary ''),(52,125,1,7618,7,_binary ''),(52,126,1,7588,92,_binary '\\'),(52,127,1,2545,15,_binary ''),(52,128,1,2532,1,''),(52,129,1,12400,2,_binary ''),(52,130,1,2546,60,_binary '<'),(52,131,1,10602,8,_binary ''),(52,132,1,10582,51,_binary '3'),(52,133,1,2167,1,''),(52,134,1,7591,53,_binary '5'),(52,135,1,8473,47,_binary '/'),(52,136,1,10584,6,_binary ''),(52,137,1,6107,1,''),(52,138,1,5022,4,_binary ''),(52,139,1,12449,1,_binary ''),(52,140,1,2193,1,_binary ''),(52,141,1,7378,9,_binary '	'),(52,142,1,2033,1,_binary ''),(52,143,1,2399,2,_binary ''),(52,144,1,2161,200,_binary '\»\0'),(52,145,1,2172,200,_binary '\»\0'),(52,146,1,2170,200,_binary '\»\0'),(52,147,1,2389,20,_binary ''),(52,148,1,13506,2,_binary ''),(52,149,2,2149,20,_binary ''),(52,150,2,11245,3,_binary ''),(52,151,2,2124,1,''),(52,152,2,7590,1,_binary ''),(52,153,2,2425,1,''),(52,154,2,2425,1,''),(52,155,2,2425,1,''),(52,156,115,7591,8,_binary ''),(52,157,115,13296,1,_binary ''),(56,101,1,7399,1,''),(56,102,1,8849,1,''),(56,103,2,5879,1,_binary ''),(56,104,2,12413,4,_binary ''),(56,105,2,5920,1,_binary '');
/*!40000 ALTER TABLE `player_depotitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_former_names`
--

DROP TABLE IF EXISTS `player_former_names`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_former_names` (
  `id` int NOT NULL AUTO_INCREMENT,
  `player_id` int NOT NULL,
  `former_name` varchar(35) NOT NULL,
  `date` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `player_id` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_former_names`
--

LOCK TABLES `player_former_names` WRITE;
/*!40000 ALTER TABLE `player_former_names` DISABLE KEYS */;
/*!40000 ALTER TABLE `player_former_names` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_inboxitems`
--

DROP TABLE IF EXISTS `player_inboxitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_inboxitems` (
  `player_id` int NOT NULL,
  `sid` int NOT NULL,
  `pid` int NOT NULL DEFAULT '0',
  `itemtype` int NOT NULL DEFAULT '0',
  `count` int NOT NULL DEFAULT '0',
  `attributes` blob NOT NULL,
  UNIQUE KEY `player_id_2` (`player_id`,`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_inboxitems`
--

LOCK TABLES `player_inboxitems` WRITE;
/*!40000 ALTER TABLE `player_inboxitems` DISABLE KEYS */;
/*!40000 ALTER TABLE `player_inboxitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_items`
--

DROP TABLE IF EXISTS `player_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_items` (
  `player_id` int NOT NULL DEFAULT '0',
  `pid` int NOT NULL DEFAULT '0',
  `sid` int NOT NULL DEFAULT '0',
  `itemtype` int NOT NULL DEFAULT '0',
  `count` int NOT NULL DEFAULT '0',
  `attributes` blob NOT NULL,
  KEY `player_id` (`player_id`),
  KEY `sid` (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_items`
--

LOCK TABLES `player_items` WRITE;
/*!40000 ALTER TABLE `player_items` DISABLE KEYS */;
INSERT INTO `player_items` VALUES (3481,1,101,2461,1,''),(3481,3,102,1987,1,_binary '%\0&\0\0\0\0'),(3481,4,103,2467,1,''),(3481,6,104,2398,1,''),(3481,7,105,2649,1,''),(3481,11,106,26052,1,''),(3481,102,107,2674,2,_binary ''),(3481,102,108,2554,1,''),(3481,102,109,2120,1,''),(3485,1,101,2461,1,''),(3485,3,102,1987,1,_binary '%\0&\0\0\0\0'),(3485,4,103,2467,1,''),(3485,6,104,2398,1,''),(3485,7,105,2649,1,''),(3485,11,106,26052,1,''),(3485,102,107,2554,1,''),(3485,102,108,2120,1,''),(3492,11,101,26052,1,''),(3489,1,101,2480,1,''),(3489,2,102,2661,1,''),(3489,3,103,1987,1,_binary '%&\0\0\0'),(3489,4,104,2650,1,''),(3489,5,105,2525,1,''),(3489,6,106,2398,1,''),(3489,7,107,8923,1,''),(3489,8,108,2643,1,''),(3489,11,109,26052,1,''),(3489,103,110,1988,1,_binary '%\0&\0\0\0\0'),(3489,103,111,2660,1,''),(3489,103,112,2389,1,_binary ''),(3489,103,113,2674,2,_binary ''),(3489,103,114,2554,1,''),(3489,103,115,2120,1,''),(3489,110,116,18559,1,''),(3489,110,117,2544,50,_binary '2'),(3489,110,118,2456,1,''),(3489,110,119,7618,1,_binary ''),(3489,110,120,2789,20,_binary ''),(3488,1,101,2461,1,''),(3488,2,102,2661,1,''),(3488,3,103,1987,1,_binary '%\0&\0\0\0\0'),(3488,4,104,2467,1,''),(3488,6,105,2400,1,''),(3488,7,106,2649,1,''),(3488,11,107,26052,1,''),(3488,103,108,7620,86,_binary 'V'),(3488,103,109,2789,2,_binary ''),(3488,103,110,7591,90,_binary 'Z'),(3491,1,101,9778,1,''),(3491,2,102,2661,1,''),(3491,3,103,1988,1,_binary '%\0&\0\0\0\0'),(3491,4,104,8819,1,''),(3491,5,105,2175,1,''),(3491,6,106,2183,1,''),(3491,7,107,2504,1,''),(3491,8,108,2358,1,''),(3491,11,109,26052,1,_binary '%&\0\0\0'),(3491,103,110,9933,1,_binary '\Ë\—1\0'),(3491,103,111,12630,1,''),(3491,103,112,2006,0,_binary '\0'),(3491,103,113,7730,1,''),(3491,103,114,2554,1,''),(3491,103,115,2553,1,''),(3491,103,116,2177,1,_binary ''),(3491,103,117,2468,1,''),(3491,103,118,8266,1,''),(3491,103,119,8265,1,''),(3491,103,120,8264,1,''),(3491,103,121,8262,1,''),(3491,103,122,2789,87,_binary 'W'),(3491,103,123,2152,79,_binary 'O'),(3491,103,124,2185,1,''),(3491,103,125,2268,53,_binary '5'),(3491,103,126,2268,100,_binary 'd'),(3491,103,127,2160,4,_binary ''),(3491,103,128,7590,74,_binary 'J'),(3479,1,101,3972,1,''),(3479,3,102,1988,1,_binary '%&\0\0\0'),(3479,5,103,2528,1,''),(3479,6,104,7404,1,''),(3479,8,105,11303,1,''),(3479,11,106,26052,1,''),(3479,102,107,9078,1,''),(3479,102,108,7636,1,_binary ''),(3479,102,109,28584,496,_binary '\\Ù\0\0'),(3479,102,110,2148,14,_binary ''),(3479,102,111,2152,38,_binary '&'),(3479,102,112,1988,1,_binary '%\0&\0\0\0\0'),(3479,102,113,8264,1,''),(3479,102,114,8265,1,''),(3479,102,115,8263,1,''),(3479,102,116,8262,1,''),(3479,102,117,2554,1,''),(3479,102,118,5947,1,''),(3479,102,119,2261,2,_binary ''),(3479,102,120,7886,1,''),(3479,102,121,18559,1,''),(3479,102,122,2656,1,''),(3479,102,123,2656,1,''),(3479,102,124,2656,1,''),(3479,102,125,2160,97,_binary 'a'),(3479,102,126,2656,1,''),(3479,106,127,7620,10,_binary '\n'),(3479,112,128,8266,1,''),(3479,112,129,2006,0,_binary '\0'),(3479,112,130,12630,1,''),(3479,112,131,2160,100,_binary 'd'),(3479,112,132,9933,1,''),(3479,112,133,12656,1,''),(3479,112,134,12657,1,''),(3487,1,101,2461,1,''),(3487,2,102,2173,1,_binary '\0'),(3487,3,103,1988,1,_binary '%\0&\0\0\0\0'),(3487,4,104,2467,1,''),(3487,7,105,2649,1,''),(3487,8,106,10022,1,''),(3487,11,107,26052,1,''),(3487,103,108,18559,1,''),(3487,103,109,2504,1,''),(3487,103,110,2152,32,_binary ' '),(3487,103,111,2006,0,_binary '\0'),(3487,103,112,2006,0,_binary '\0'),(3487,103,113,2006,0,_binary '\0'),(3487,103,114,12630,1,''),(18,1,101,2460,1,''),(18,2,102,2661,1,''),(18,3,103,1987,1,_binary '%\0&\0\0\0\0'),(18,4,104,2650,1,''),(18,5,105,2525,1,''),(18,6,106,8602,1,''),(18,7,107,2478,1,''),(18,8,108,2643,1,''),(18,11,109,26052,1,''),(18,103,110,1988,1,_binary '%\0&\0\0\0\0'),(18,103,111,2465,1,''),(18,103,112,8601,1,''),(18,103,113,2554,1,''),(18,103,114,2120,1,''),(18,110,115,18559,1,''),(18,110,116,7618,1,_binary ''),(18,110,117,2789,20,_binary ''),(20,1,101,2457,1,''),(20,2,102,2661,1,''),(20,3,103,1988,1,_binary '%\0&\0\0\0\0'),(20,4,104,2660,1,''),(20,6,105,8849,1,''),(20,7,106,2647,1,''),(20,8,107,2643,1,''),(20,10,108,15649,69,_binary 'E'),(20,11,109,26052,1,''),(20,103,110,5875,1,_binary ''),(20,103,111,2148,91,_binary '['),(20,103,112,5880,1,_binary ''),(20,103,113,2146,1,_binary ''),(20,103,114,2152,26,_binary '\Z'),(20,103,115,2145,1,_binary ''),(20,103,116,5920,1,_binary ''),(20,103,117,2525,1,''),(20,103,118,2420,1,''),(20,103,119,5949,1,_binary '%\0&\0\0\0\0'),(20,103,120,12468,3,_binary ''),(20,103,121,12413,16,_binary ''),(20,103,122,26654,4,_binary ''),(20,103,123,2120,1,''),(20,103,124,2554,1,''),(20,103,125,18559,1,''),(20,103,126,2789,8,_binary ''),(20,119,127,2456,1,''),(20,119,128,2456,1,''),(20,119,129,2456,1,''),(20,119,130,2381,1,''),(20,119,131,7588,11,_binary ''),(20,119,132,7589,49,_binary '1'),(20,119,133,15649,100,_binary 'd'),(20,119,134,15649,100,_binary 'd'),(27,1,101,8820,1,''),(27,2,102,2661,1,''),(27,3,103,1988,1,''),(27,4,104,8819,1,''),(27,5,105,2175,1,''),(27,6,106,2182,1,''),(27,7,107,2468,1,''),(27,8,108,2643,1,''),(27,11,109,26052,1,''),(27,103,110,5890,3,_binary ''),(27,103,111,2120,1,''),(27,103,112,2554,1,''),(27,103,113,18559,1,''),(27,103,114,7620,1,_binary ''),(27,103,115,2789,20,_binary ''),(3,1,101,7903,1,''),(3,2,102,2661,1,''),(3,3,103,1988,1,_binary '%&\0\0Ä'),(3,4,104,2463,1,''),(3,5,105,2516,1,''),(3,6,106,2185,1,''),(3,8,107,2643,1,''),(3,11,108,26052,1,''),(3,103,109,2540,1,''),(3,103,110,2149,3,_binary ''),(3,103,111,10548,2,_binary ''),(3,103,112,2148,57,_binary '9'),(3,103,113,2150,7,_binary ''),(3,103,114,2159,7,_binary ''),(3,103,115,2304,14,_binary ''),(3,103,116,2152,30,_binary ''),(3,103,117,2304,100,_binary 'd'),(3,103,118,2789,8,_binary ''),(3,103,119,2420,1,''),(3,103,120,7620,59,_binary ';'),(3,103,121,2120,1,''),(3,103,122,2554,1,''),(3,103,123,18559,1,''),(3,103,124,7620,100,_binary 'd'),(2,3,101,1988,1,_binary '%&\0\0\0'),(2,6,102,29060,1,''),(2,11,103,26052,1,''),(2,101,104,2004,1,_binary '%&\0\0\0'),(2,101,105,2002,1,_binary '%\0&\0\0\0\0'),(17,1,101,2457,1,''),(17,2,102,2661,1,''),(17,3,103,1988,1,_binary '%\0&\0\0\0\0'),(17,4,104,2660,1,''),(17,5,105,2525,1,''),(17,6,106,2389,30,_binary ''),(17,7,107,2647,1,''),(17,8,108,2643,1,''),(17,10,109,2547,67,_binary 'C'),(17,11,110,26052,1,''),(17,103,111,7378,8,_binary ''),(17,103,112,2672,5,_binary ''),(17,103,113,2148,22,_binary ''),(17,103,114,7620,37,_binary '%'),(17,103,115,8849,1,''),(17,103,116,2547,100,_binary 'd'),(17,103,117,2547,100,_binary 'd'),(17,103,118,2167,1,''),(17,103,119,2120,1,''),(17,103,120,2554,1,''),(17,103,121,18559,1,''),(29,3,101,1987,1,_binary '%\0&\0\0\0\0'),(29,4,102,2650,1,''),(29,6,103,2398,1,''),(29,11,104,26052,1,''),(29,101,105,2674,2,_binary ''),(29,101,106,2554,1,''),(29,101,107,2120,1,''),(33,3,101,1987,1,_binary '%\0&\0\0\0\0'),(33,4,102,2650,1,''),(33,6,103,2398,1,''),(33,11,104,26052,1,''),(33,101,105,2148,29,_binary ''),(33,101,106,2666,3,_binary ''),(33,101,107,2554,1,''),(33,101,108,2120,1,''),(34,1,101,8820,1,''),(34,2,102,2661,1,''),(34,3,103,1988,1,_binary '%&\0\0\0'),(34,4,104,8819,1,''),(34,5,105,2175,1,''),(34,6,106,2190,1,''),(34,7,107,2468,1,''),(34,8,108,2643,1,''),(34,11,109,26052,1,''),(34,103,110,1987,1,_binary '%&\0\0\0'),(34,103,111,18559,1,''),(34,103,112,7620,1,_binary ''),(34,103,113,2789,20,_binary ''),(34,110,114,2650,1,''),(34,110,115,2398,1,''),(34,110,116,2148,29,_binary ''),(34,110,117,2674,2,_binary ''),(34,110,118,2554,1,''),(34,110,119,2120,1,''),(35,3,101,1987,1,_binary '%\0&\0\0\0\0'),(35,4,102,2650,1,''),(35,6,103,2398,1,''),(35,11,104,26052,1,''),(35,101,105,5890,2,_binary ''),(35,101,106,2674,2,_binary ''),(35,101,107,2554,1,''),(35,101,108,2120,1,''),(37,3,101,1987,1,''),(37,4,102,2650,1,''),(37,6,103,2398,1,''),(37,11,104,26052,1,''),(37,101,105,2674,2,_binary ''),(37,101,106,2554,1,''),(37,101,107,2120,1,''),(11,1,101,2502,1,''),(11,2,102,2661,1,''),(11,3,103,1988,1,_binary '%&\0\0\0'),(11,4,104,8819,1,''),(11,5,105,2520,1,''),(11,6,106,2185,1,''),(11,7,107,7895,1,''),(11,8,108,2643,1,''),(11,11,109,26052,1,''),(11,103,110,1988,1,_binary '%\0&\0\0\0\0'),(11,103,111,2167,1,_binary '`¿\0'),(11,103,112,2323,1,''),(11,103,113,2420,1,''),(11,103,114,2269,33,_binary '!'),(11,103,115,7589,91,_binary '['),(11,103,116,2120,1,''),(11,103,117,18559,1,''),(11,109,118,7589,10,_binary '\n'),(15,2,101,2661,1,''),(15,3,102,1988,1,_binary '%\0&\0\0\0\0'),(15,4,103,11301,1,''),(15,5,104,2520,1,''),(15,6,105,2389,61,_binary '='),(15,7,106,11304,1,''),(15,8,107,11303,1,''),(15,10,108,18435,5,_binary ''),(15,11,109,26052,1,''),(15,102,110,2148,33,_binary '!'),(15,102,111,2152,65,_binary 'A'),(15,102,112,2502,1,_binary '$\0\0\0\0\0\0\0\0501\0\0\0\0\0\0\0\0\0500\ \0\0\0\0'),(15,102,113,8849,1,_binary '$\0\0\0\0\0\0\0\0502\0\0\0\0\0\0\0\0\0501\0\0\0\0\0\0\0\0\0500\»\0\0\0\0'),(15,102,114,7378,3,_binary ''),(15,102,115,8472,50,_binary '2'),(15,102,116,2293,35,_binary '#'),(15,102,117,2167,1,_binary '¯˙\0'),(15,102,118,5949,1,''),(15,102,119,2004,1,_binary '%&\0\0\0'),(15,102,120,3940,1,_binary '%ä&ä!?\0'),(15,102,121,9774,1,''),(15,102,122,2120,1,''),(15,102,123,2554,1,''),(15,102,124,18559,1,''),(15,102,125,2789,93,_binary ']'),(15,118,126,18435,56,_binary '8'),(15,120,127,3940,1,''),(38,3,101,1987,1,''),(38,4,102,2650,1,''),(38,6,103,2398,1,''),(38,11,104,26052,1,''),(38,101,105,2674,2,_binary ''),(38,101,106,2554,1,''),(38,101,107,2120,1,''),(13,1,101,2457,1,''),(13,2,102,2661,1,''),(13,3,103,1988,1,_binary '%&\0\0\0'),(13,4,104,2660,1,''),(13,5,105,2534,1,''),(13,6,106,2389,30,_binary ''),(13,7,107,8923,1,''),(13,8,108,2643,1,''),(13,11,109,26052,1,''),(13,103,110,2148,93,_binary ']'),(13,103,111,2396,1,_binary '\0'),(13,103,112,10602,1,_binary ''),(13,103,113,7618,4,_binary ''),(13,103,114,12448,2,_binary ''),(13,103,115,12428,1,_binary ''),(13,103,116,5896,6,_binary ''),(13,103,117,2152,46,_binary '.'),(13,103,118,8856,1,''),(13,103,119,2554,1,''),(13,103,120,2120,1,''),(13,103,121,18559,1,''),(16,1,101,2490,1,''),(16,2,102,2661,1,''),(16,3,103,1988,1,_binary '%&\0\0\0'),(16,4,104,2465,1,''),(16,5,105,2175,1,''),(16,6,106,29060,1,''),(16,7,107,2647,1,''),(16,8,108,2643,1,''),(16,11,109,26052,1,''),(16,103,110,2148,79,_binary 'O'),(16,103,111,2188,1,''),(16,103,112,29060,1,''),(16,103,113,2152,17,_binary ''),(16,103,114,2165,1,_binary 'ò\0'),(16,103,115,5913,1,_binary ''),(16,103,116,2230,1,_binary ''),(16,103,117,2145,2,_binary ''),(16,103,118,11200,5,_binary ''),(16,103,119,10558,1,_binary ''),(16,103,120,11208,5,_binary ''),(16,103,121,2261,10,_binary '\n'),(16,103,122,2159,7,_binary ''),(16,103,123,2120,1,''),(16,103,124,2554,1,''),(16,103,125,18559,1,''),(16,103,126,2789,3,_binary ''),(19,1,101,2475,1,''),(19,2,102,2133,1,''),(19,3,103,5949,1,_binary '%\0&\0\0\0\0'),(19,4,104,2476,1,''),(19,5,105,2525,1,''),(19,6,106,2389,74,_binary 'J'),(19,7,107,2477,1,''),(19,8,108,2195,1,''),(19,11,109,26052,1,''),(19,103,110,2789,94,_binary '^'),(39,1,101,2460,1,''),(39,2,102,2661,1,''),(39,3,103,1987,1,''),(39,4,104,2650,1,''),(39,5,105,2525,1,''),(39,6,106,2398,1,''),(39,7,107,2478,1,''),(39,8,108,2643,1,''),(39,11,109,26052,1,''),(39,103,110,1988,1,_binary '%\0&\0\0\0\0'),(39,103,111,2465,1,''),(39,103,112,8601,1,''),(39,103,113,5890,3,_binary ''),(39,103,114,2554,1,''),(39,103,115,2120,1,''),(39,110,116,18559,1,''),(39,110,117,7618,1,_binary ''),(39,110,118,2789,20,_binary ''),(39,110,119,8602,1,''),(36,1,101,2460,1,''),(36,2,102,2661,1,''),(36,3,103,1988,1,_binary '%&\0\0\0'),(36,4,104,2464,1,''),(36,5,105,2510,1,''),(36,7,106,2468,1,''),(36,8,107,2643,1,''),(36,11,108,26052,1,''),(36,103,109,2185,1,''),(36,103,110,2148,51,_binary '3'),(36,103,111,12429,5,_binary ''),(36,103,112,5908,1,''),(36,103,113,12428,24,_binary ''),(36,103,114,1987,1,''),(36,103,115,2152,13,_binary '\r'),(36,103,116,10609,2,_binary ''),(36,103,117,18559,1,''),(36,114,118,12428,2,_binary ''),(36,114,119,2554,1,''),(36,114,120,2120,1,''),(21,1,101,2457,1,''),(21,2,102,2170,34,_binary '\"\0'),(21,3,103,1988,1,_binary '%\0&\0\0\0@'),(21,4,104,2463,1,''),(21,5,105,2525,1,''),(21,6,106,2430,1,''),(21,7,107,2647,1,''),(21,8,108,2643,1,''),(21,11,109,26052,1,''),(21,103,110,2148,6,_binary ''),(21,103,111,7620,35,_binary '#'),(21,103,112,5877,1,_binary ''),(21,103,113,12413,9,_binary '	'),(21,103,114,18559,1,''),(21,103,115,2672,2,_binary ''),(21,103,116,2554,1,''),(21,103,117,2120,1,''),(43,3,101,1987,1,''),(43,4,102,2650,1,''),(43,6,103,2398,1,''),(43,11,104,26052,1,''),(43,101,105,2674,2,_binary ''),(43,101,106,2554,1,''),(43,101,107,2120,1,''),(14,1,101,2493,1,''),(14,2,102,2171,1,''),(14,3,103,1988,1,_binary '%\0&\0\0\0\0'),(14,4,104,2494,1,''),(14,5,105,2520,1,''),(14,6,106,7415,1,''),(14,7,107,2477,1,''),(14,8,108,2195,1,''),(14,9,109,2124,1,''),(14,11,110,26052,1,''),(14,103,111,2152,2,_binary ''),(14,103,112,2160,4,_binary ''),(14,103,113,2148,70,_binary 'F'),(14,103,114,2145,1,_binary ''),(14,103,115,2146,5,_binary ''),(14,103,116,5890,2,_binary ''),(14,103,117,2789,68,_binary 'D'),(14,103,118,9970,3,_binary ''),(14,103,119,1999,1,_binary '%&\0\0\0'),(14,103,120,2789,100,_binary 'd'),(14,103,121,2420,1,''),(14,103,122,2554,1,''),(14,103,123,18559,1,''),(14,103,124,2120,1,''),(14,103,125,5949,1,_binary '%&\0\0\0'),(14,119,126,2152,3,_binary ''),(14,119,127,2152,100,_binary 'd'),(14,119,128,2167,1,''),(14,119,129,2167,1,''),(14,119,130,2167,1,''),(14,119,131,2167,1,_binary '8	\0'),(14,119,132,2165,1,''),(14,119,133,2167,1,_binary 'ò4\0'),(14,119,134,2197,5,_binary '\0'),(14,119,135,2197,5,_binary '\0'),(14,119,136,2197,5,_binary '\0'),(14,119,137,2197,5,_binary '\0'),(14,119,138,2197,5,_binary '\0'),(14,119,139,2197,5,_binary '\0'),(14,119,140,2197,1,_binary '\0'),(14,119,141,2197,5,_binary '\0'),(14,125,142,2177,1,_binary ''),(14,125,143,5920,3,_binary ''),(14,125,144,10582,12,_binary ''),(14,125,145,5877,1,_binary ''),(14,125,146,12413,10,_binary '\n'),(14,125,147,5954,8,_binary ''),(14,125,148,7620,67,_binary 'C'),(14,125,149,7591,60,_binary '<'),(14,125,150,7591,100,_binary 'd'),(14,125,151,5882,1,_binary ''),(14,125,152,1988,1,_binary '%&\0\0\0'),(14,125,153,7342,1,_binary '%&\0\0\0'),(14,153,154,2167,1,''),(14,153,155,7589,8,_binary ''),(6,1,101,2497,1,''),(6,2,102,2661,1,''),(6,3,103,1988,1,_binary '%\0&\0\0\0\0'),(6,4,104,2476,1,''),(6,5,105,2520,1,''),(6,6,106,2392,1,''),(6,7,107,2478,1,''),(6,8,108,2643,1,''),(6,11,109,26052,1,''),(6,103,110,2148,50,_binary '2'),(6,103,111,2691,40,_binary '('),(6,103,112,2687,47,_binary '/'),(6,103,113,2666,24,_binary ''),(6,103,114,2152,64,_binary '@'),(6,103,115,2160,3,_binary ''),(6,103,116,2120,1,''),(6,103,117,23782,1,_binary '%&\0\0\0'),(6,103,118,2554,1,''),(6,103,119,18559,1,''),(6,117,120,2200,250,_binary '˙\0'),(6,117,121,2199,150,_binary 'ñ\0'),(6,117,122,2200,250,_binary '˙\0'),(6,117,123,2129,1,''),(6,117,124,2409,1,''),(6,117,125,2185,1,''),(6,117,126,7618,17,_binary ''),(6,117,127,7620,88,_binary 'X'),(44,1,101,2480,1,''),(44,2,102,2661,1,''),(44,3,103,1988,1,_binary '%\0&\0\0\0\0'),(44,4,104,2660,1,''),(44,5,105,2525,1,''),(44,6,106,7378,2,_binary ''),(44,7,107,8923,1,''),(44,8,108,2643,1,''),(44,11,109,26052,1,''),(44,103,110,18559,1,''),(44,103,111,2148,51,_binary '3'),(44,103,112,5896,1,_binary ''),(44,103,113,1294,15,_binary ''),(44,103,114,2152,7,_binary ''),(44,103,115,5890,5,_binary ''),(44,103,116,5878,1,_binary ''),(44,103,117,1988,1,_binary '%&\0\0\0'),(44,103,118,2120,1,''),(44,103,119,2674,2,_binary ''),(44,103,120,2554,1,''),(44,117,121,2456,1,''),(44,117,122,2789,15,_binary ''),(8,1,101,7902,1,''),(8,2,102,2661,1,''),(8,3,103,1988,1,_binary '%\0&\0\0\0\0'),(8,4,104,2463,1,''),(8,5,105,2535,1,''),(8,6,106,8920,1,''),(8,7,107,2468,1,''),(8,8,108,2643,1,''),(8,9,109,2124,1,''),(8,11,110,26052,1,''),(8,103,111,2148,51,_binary '3'),(8,103,112,3976,60,_binary '<'),(8,103,113,2554,1,''),(8,103,114,2120,1,''),(8,103,115,2580,1,''),(8,103,116,2152,1,_binary ''),(8,103,117,9774,1,_binary '%&\0\0\0'),(8,103,118,5949,1,_binary '%&\0\0\0'),(8,103,119,2160,3,_binary ''),(8,103,120,18559,1,''),(8,118,121,2169,1,''),(8,118,122,2169,1,''),(8,118,123,2169,1,''),(8,118,124,2169,1,''),(8,118,125,2169,1,''),(8,118,126,2188,1,''),(8,118,127,2169,1,''),(8,118,128,2198,38,_binary '&\0'),(8,118,129,7589,52,_binary '4'),(42,1,101,2502,1,''),(42,2,102,2161,115,_binary 's\0'),(42,3,103,1988,1,_binary '%\0&\0\0\0\0'),(42,4,104,2483,1,''),(42,5,105,2525,1,''),(42,7,106,2468,1,''),(42,8,107,2643,1,''),(42,9,108,2124,1,''),(42,10,109,2162,1,_binary ' d&\0'),(42,11,110,26052,1,''),(42,103,111,2148,74,_binary 'J'),(42,103,112,5880,1,_binary ''),(42,103,113,2787,81,_binary 'Q'),(42,103,114,2553,1,''),(42,103,115,2152,91,_binary '['),(42,103,116,2146,4,_binary ''),(42,103,117,10561,10,_binary '\n'),(42,103,118,2420,1,''),(42,103,119,7731,1,''),(42,103,120,1988,1,_binary '%&\0\0\0'),(42,103,121,2554,1,''),(42,103,122,18559,1,''),(42,120,123,2187,1,''),(42,120,124,2175,1,''),(42,120,125,2597,1,''),(42,120,126,2304,23,_binary ''),(42,120,127,2303,8,_binary ''),(42,120,128,7620,8,_binary ''),(42,120,129,7618,1,_binary ''),(42,120,130,2260,55,_binary '7'),(26,1,101,8820,1,''),(26,2,102,2661,1,''),(26,3,103,1988,1,_binary '%&\0\0\0'),(26,4,104,8819,1,''),(26,5,105,2175,1,''),(26,6,106,2182,1,''),(26,7,107,2468,1,''),(26,8,108,2643,1,''),(26,11,109,26052,1,''),(26,103,110,2120,1,''),(26,103,111,2554,1,''),(26,103,112,2148,63,_binary '?'),(26,103,113,18559,1,''),(26,103,114,7620,1,_binary ''),(26,103,115,2789,20,_binary ''),(25,1,101,2460,1,''),(25,2,102,2661,1,''),(25,3,103,1988,1,_binary '%\0&\0\0\0\0'),(25,4,104,2465,1,''),(25,5,105,2525,1,''),(25,6,106,8601,1,''),(25,7,107,2478,1,''),(25,8,108,2643,1,''),(25,11,109,26052,1,''),(25,103,110,2554,1,''),(25,103,111,2120,1,''),(25,103,112,2674,1,_binary ''),(25,103,113,2398,1,''),(25,103,114,2398,1,''),(25,103,115,2398,1,''),(25,103,116,2148,7,_binary ''),(25,103,117,18559,1,''),(25,103,118,7618,1,_binary ''),(25,103,119,2789,20,_binary ''),(9,1,101,2323,1,''),(9,2,102,2173,1,_binary '\0'),(9,3,103,1988,1,_binary '%&\0\0\0'),(9,4,104,15489,1,''),(9,5,105,8902,1,''),(9,7,106,7895,1,''),(9,8,107,2195,1,''),(9,11,108,26052,1,''),(9,103,109,29060,1,''),(9,103,110,2148,65,_binary 'A'),(9,103,111,2789,26,_binary '\Z'),(9,103,112,2152,47,_binary '/'),(9,103,113,2268,11,_binary ''),(9,103,114,2274,100,_binary 'd'),(9,103,115,7590,52,_binary '4'),(9,103,116,2274,100,_binary 'd'),(9,103,117,1988,1,_binary '%\0&\0\0\0\0'),(9,103,118,2268,100,_binary 'd'),(9,103,119,2420,1,''),(9,103,120,7590,100,_binary 'd'),(9,103,121,2120,1,''),(9,103,122,2554,1,''),(9,108,123,7589,10,_binary '\n'),(9,117,124,12448,1,_binary ''),(9,117,125,26029,67,_binary 'C'),(9,117,126,2274,12,_binary ''),(9,117,127,18559,1,''),(12,1,101,2475,1,''),(12,2,102,2661,1,''),(12,3,103,1988,1,_binary '%&\0\0\0'),(12,4,104,2476,1,''),(12,5,105,2525,1,''),(12,6,106,7389,1,''),(12,7,107,2477,1,''),(12,8,108,2643,1,''),(12,11,109,26052,1,''),(12,103,110,2148,50,_binary '2'),(12,103,111,2165,1,_binary 'ÄØ\0'),(12,103,112,2407,1,''),(12,103,113,2152,40,_binary '('),(12,103,114,7591,100,_binary 'd'),(12,103,115,7620,35,_binary '#'),(12,103,116,18559,1,''),(12,103,117,3940,1,_binary '%&\0\0\0'),(12,103,118,9774,1,_binary '%\0&\0\0\0\0'),(12,103,119,2004,1,_binary '%&\0\0\0'),(12,103,120,1996,1,''),(12,103,121,2789,32,_binary ' '),(12,103,122,2120,1,''),(12,103,123,2554,1,''),(12,117,124,2383,1,''),(12,117,125,7386,1,''),(12,117,126,2430,1,''),(12,117,127,2381,1,''),(12,117,128,2430,1,''),(12,117,129,1985,1,''),(12,117,130,2381,1,''),(12,117,131,2381,1,''),(12,117,132,2475,1,''),(12,117,133,3940,1,''),(12,118,134,11222,4,_binary ''),(12,118,135,21241,2,_binary ''),(12,118,136,9809,1,''),(12,118,137,5894,1,_binary ''),(12,118,138,10579,2,_binary ''),(12,118,139,10602,8,_binary ''),(12,118,140,21244,2,_binary ''),(12,118,141,2147,2,_binary ''),(12,118,142,12405,5,_binary ''),(12,118,143,7589,6,_binary ''),(12,118,144,7588,2,_binary ''),(12,118,145,2672,5,_binary ''),(12,120,146,5941,1,''),(12,120,147,2420,1,''),(12,120,148,2553,1,''),(12,120,149,2197,1,_binary '\0'),(12,120,150,2214,1,''),(40,2,101,2661,1,''),(40,3,102,1987,1,''),(40,4,103,2650,1,''),(40,5,104,2525,1,''),(40,7,105,8923,1,''),(40,8,106,2643,1,''),(40,11,107,26052,1,''),(40,102,108,1988,1,''),(40,102,109,2660,1,''),(40,102,110,2389,2,_binary ''),(40,102,111,2554,1,''),(40,102,112,2120,1,''),(40,108,113,18559,1,''),(40,108,114,2544,50,_binary '2'),(40,108,115,2456,1,''),(40,108,116,7618,1,_binary ''),(40,108,117,2789,20,_binary ''),(23,1,101,2457,1,''),(23,2,102,2173,1,_binary '\0'),(23,3,103,1988,1,_binary '%\0&\0\0\0\0'),(23,4,104,2463,1,''),(23,5,105,2513,1,''),(23,6,106,2185,1,''),(23,7,107,7895,1,''),(23,8,108,2643,1,''),(23,11,109,26052,1,''),(23,103,110,2152,1,_binary ''),(23,103,111,2148,2,_binary ''),(23,103,112,2149,2,_binary ''),(23,103,113,2274,66,_binary 'B'),(23,103,114,2274,100,_binary 'd'),(23,103,115,2160,3,_binary ''),(23,103,116,18559,1,''),(23,103,117,1988,1,''),(23,103,118,13739,1,''),(23,103,119,2420,1,''),(23,103,120,2268,62,_binary '>'),(23,103,121,2167,1,_binary '	\0'),(23,103,122,2789,8,_binary ''),(23,103,123,2167,1,''),(23,103,124,2554,1,''),(10,1,101,2457,1,''),(10,2,102,2661,1,''),(10,3,103,5949,1,_binary '%\0&\0\0\0\0'),(10,4,104,2463,1,''),(10,5,105,2516,1,''),(10,6,106,7378,17,_binary ''),(10,7,107,2647,1,''),(10,8,108,2643,1,''),(10,11,109,26052,1,''),(10,103,110,2160,2,_binary ''),(10,103,111,7589,12,_binary ''),(10,103,112,2167,1,_binary '\–\—\0'),(10,103,113,2033,1,_binary ''),(10,103,114,2167,1,''),(10,103,115,8849,1,''),(10,103,116,2004,1,''),(10,103,117,2420,1,''),(10,103,118,5710,1,''),(10,103,119,2120,1,''),(10,103,120,18559,1,''),(10,103,121,2789,57,_binary '9'),(41,3,101,1987,1,_binary '%\0&\0\0\0\0'),(41,4,102,2650,1,''),(41,6,103,2398,1,''),(41,11,104,26052,1,''),(41,101,105,2696,13,_binary '\r'),(41,101,106,2148,61,_binary '='),(41,101,107,2554,1,''),(41,101,108,2120,1,''),(22,1,101,2460,1,''),(22,2,102,2661,1,''),(22,3,103,1987,1,_binary '%\0&\0\0\0\0'),(22,4,104,2465,1,''),(22,5,105,2525,1,''),(22,6,106,8601,1,''),(22,7,107,2478,1,''),(22,8,108,2643,1,''),(22,11,109,26052,1,''),(22,103,110,2398,1,''),(22,103,111,1988,1,''),(22,103,112,2674,2,_binary ''),(22,103,113,2554,1,''),(22,103,114,2120,1,''),(22,111,115,18559,1,''),(22,111,116,7618,1,_binary ''),(22,111,117,2789,20,_binary ''),(22,111,118,8602,1,''),(28,1,101,2502,1,''),(28,2,102,2661,1,''),(28,3,103,1988,1,_binary '%\0&\0\0\0\0'),(28,4,104,2487,1,''),(28,5,105,2519,1,''),(28,6,106,7367,46,_binary '.'),(28,7,107,2647,1,''),(28,8,108,2195,1,''),(28,11,109,26052,1,''),(28,103,110,2148,32,_binary ' '),(28,103,111,2389,4,_binary ''),(28,103,112,7588,1,_binary ''),(28,103,113,1988,1,_binary '%\0&\0\0\0\0'),(28,103,114,2420,1,''),(28,103,115,2554,1,''),(28,103,116,18559,1,''),(28,103,117,2789,78,_binary 'N'),(28,113,118,2167,1,_binary '(\Û\0'),(4,1,101,2502,1,''),(4,3,102,1988,1,_binary '%&\0\0\0'),(4,4,103,8871,1,''),(4,5,104,2520,1,''),(4,6,105,8910,1,''),(4,7,106,15490,1,''),(4,8,107,2195,1,''),(4,11,108,26052,1,''),(4,102,109,2133,1,''),(4,102,110,2195,1,''),(4,102,111,2133,1,''),(4,102,112,2133,1,''),(4,102,113,2152,11,_binary ''),(4,102,114,5949,1,_binary '%&\0\0\0'),(4,102,115,2789,68,_binary 'D'),(4,102,116,2789,98,_binary 'b'),(4,102,117,2002,1,_binary '%Ä&Ä\0'),(4,102,118,2167,1,_binary '®1\0'),(4,102,119,5890,2,_binary ''),(4,102,120,7731,1,''),(4,102,121,2554,1,''),(4,114,122,1988,1,_binary '%&\0\0\0'),(4,117,123,7895,1,''),(4,117,124,2475,1,''),(4,117,125,7895,1,''),(4,117,126,2475,1,''),(4,117,127,2430,1,''),(4,117,128,2475,1,''),(4,117,129,2430,1,''),(4,122,130,2268,82,_binary 'R'),(4,122,131,2268,100,_binary 'd'),(4,122,132,2268,100,_binary 'd'),(4,122,133,2268,100,_binary 'd'),(4,122,134,2268,100,_binary 'd'),(4,122,135,2268,100,_binary 'd'),(4,122,136,2268,100,_binary 'd'),(4,122,137,2268,100,_binary 'd'),(4,122,138,26029,100,_binary 'd'),(4,122,139,2268,100,_binary 'd'),(4,122,140,2268,100,_binary 'd'),(4,122,141,8902,1,''),(4,122,142,2303,1,_binary ''),(4,122,143,2197,5,_binary '\0'),(4,122,144,2268,100,_binary 'd'),(4,122,145,2167,1,''),(4,122,146,2167,1,''),(4,122,147,2167,1,''),(4,122,148,2167,1,''),(5,1,101,2493,1,''),(5,2,102,2171,1,''),(5,3,103,15646,1,_binary '%&\0\0\0'),(5,4,104,2494,1,''),(5,5,105,2514,1,''),(5,6,106,2400,1,''),(5,7,107,2470,1,''),(5,8,108,2195,1,''),(5,11,109,26052,1,''),(5,103,110,2148,91,_binary '['),(5,103,111,2152,3,_binary ''),(5,103,112,2430,1,''),(5,103,113,2430,1,''),(5,103,114,2430,1,''),(5,103,115,7620,66,_binary 'B'),(5,103,116,7620,100,_binary 'd'),(5,103,117,7591,2,_binary ''),(5,103,118,11221,94,_binary '^'),(5,103,119,2158,10,_binary '\n'),(5,103,120,1988,1,_binary '%&\0\0\0'),(5,120,121,8871,1,''),(5,120,122,2165,1,_binary 'H\ƒ\0'),(5,120,123,2158,1,_binary ''),(5,120,124,2789,98,_binary 'b'),(5,120,125,7590,1,_binary ''),(5,120,126,9774,1,''),(5,120,127,1993,1,_binary '%&\0\0\0'),(5,120,128,2002,1,_binary '%&\0\0\0'),(5,120,129,1999,1,_binary '%&\0\0\0'),(5,120,130,18559,1,''),(5,126,131,2002,1,_binary '%&\0\0\0'),(5,126,132,2789,94,_binary '^'),(5,127,133,1991,1,_binary '%&\0\0\0'),(5,127,134,2207,1,''),(5,128,135,7591,92,_binary '\\'),(5,128,136,7590,4,_binary ''),(5,128,137,7590,100,_binary 'd'),(5,128,138,8473,37,_binary '%'),(5,128,139,5911,1,_binary ''),(5,128,140,2008,0,_binary '\0'),(5,128,141,7591,99,_binary 'c'),(5,128,142,2002,1,_binary '%&\0\0\0'),(5,129,143,2207,1,_binary '∏|\0'),(5,129,144,2160,43,_binary '+'),(5,131,145,2207,1,_binary '¿-\0'),(5,131,146,2197,5,_binary '\0'),(5,131,147,5954,1,_binary ''),(5,131,148,2197,5,_binary '\0'),(5,131,149,2197,5,_binary '\0'),(5,131,150,2197,5,_binary '\0'),(5,131,151,2197,5,_binary '\0'),(5,131,152,2197,5,_binary '\0'),(5,131,153,2197,5,_binary '\0'),(5,131,154,2197,5,_binary '\0'),(5,142,155,7591,7,_binary ''),(5,142,156,7590,18,_binary ''),(5,142,157,2789,42,_binary '*'),(47,1,101,2460,1,''),(47,2,102,2661,1,''),(47,3,103,1987,1,_binary '%\0&\0\0\0\0'),(47,4,104,2465,1,''),(47,5,105,2525,1,''),(47,6,106,2398,1,''),(47,7,107,2478,1,''),(47,8,108,2643,1,''),(47,11,109,26052,1,''),(47,103,110,2148,22,_binary ''),(47,103,111,12435,1,_binary ''),(47,103,112,2152,4,_binary ''),(47,103,113,1988,1,''),(47,103,114,2554,1,''),(47,103,115,2120,1,''),(47,113,116,18559,1,''),(47,113,117,7618,1,_binary ''),(47,113,118,2789,20,_binary ''),(47,113,119,8602,1,''),(48,3,101,1987,1,''),(48,4,102,2650,1,''),(48,6,103,2398,1,''),(48,11,104,26052,1,''),(48,101,105,2674,2,_binary ''),(48,101,106,2554,1,''),(48,101,107,2120,1,''),(7,3,101,1987,1,_binary '%\0&\0\0\0\0'),(7,4,102,2650,1,''),(7,6,103,2398,1,''),(7,11,104,26052,1,''),(7,101,105,1988,1,''),(7,101,106,2674,2,_binary ''),(7,101,107,2554,1,''),(7,101,108,2120,1,''),(59,3,101,1987,1,_binary '%\0&\0\0\0\0'),(59,4,102,2650,1,''),(59,6,103,2398,1,''),(59,11,104,26052,1,''),(59,101,105,2666,3,_binary ''),(59,101,106,2674,1,_binary ''),(59,101,107,2554,1,''),(59,101,108,2120,1,''),(61,3,101,1987,1,''),(61,4,102,2650,1,''),(61,6,103,2398,1,''),(61,11,104,26052,1,''),(61,101,105,2674,2,_binary ''),(61,101,106,2554,1,''),(61,101,107,2120,1,''),(60,1,101,2460,1,''),(60,2,102,2661,1,''),(60,3,103,1987,1,_binary '%\0&\0\0\0\0'),(60,4,104,2465,1,''),(60,5,105,2525,1,''),(60,6,106,8601,1,''),(60,7,107,2478,1,''),(60,8,108,2643,1,''),(60,11,109,26052,1,''),(60,103,110,1988,1,_binary '%\0&\0\0\0\0'),(60,103,111,2554,1,''),(60,103,112,2120,1,''),(60,110,113,18559,1,''),(60,110,114,7618,1,_binary ''),(60,110,115,2789,20,_binary ''),(60,110,116,8602,1,''),(57,3,101,1987,1,''),(57,4,102,2650,1,''),(57,6,103,2398,1,''),(57,11,104,26052,1,''),(57,101,105,2674,2,_binary ''),(57,101,106,2554,1,''),(57,101,107,2120,1,''),(58,1,101,8820,1,''),(58,2,102,2661,1,''),(58,3,103,1988,1,_binary '%\0&\0\0\0\0'),(58,4,104,8819,1,''),(58,5,105,2175,1,''),(58,6,106,2188,1,''),(58,7,107,2468,1,''),(58,8,108,2643,1,''),(58,11,109,26052,1,''),(58,103,110,5880,1,_binary ''),(58,103,111,2148,24,_binary ''),(58,103,112,2120,1,''),(58,103,113,2554,1,''),(58,103,114,5890,1,_binary ''),(58,103,115,18559,1,''),(58,103,116,7620,1,_binary ''),(58,103,117,2789,17,_binary ''),(49,1,101,2457,1,''),(49,2,102,2661,1,''),(49,3,103,1988,1,_binary '%\0&\0\0\0\0'),(49,4,104,2463,1,''),(49,5,105,2509,1,''),(49,6,106,29060,1,''),(49,7,107,2647,1,''),(49,8,108,2643,1,''),(49,11,109,26052,1,''),(49,103,110,5878,5,_binary ''),(49,103,111,5908,1,''),(49,103,112,7401,1,''),(49,103,113,7620,75,_binary 'K'),(49,103,114,2268,38,_binary '&'),(49,103,115,2274,37,_binary '%'),(49,103,116,2187,1,''),(49,103,117,2672,3,_binary ''),(49,103,118,7618,1,_binary ''),(49,103,119,2679,12,_binary ''),(49,103,120,2120,1,''),(49,103,121,2554,1,''),(49,103,122,18559,1,''),(49,103,123,2789,7,_binary ''),(50,1,101,2480,1,''),(50,2,102,2661,1,''),(50,3,103,1988,1,_binary '%&\0\0\0'),(50,4,104,2660,1,''),(50,5,105,2525,1,''),(50,6,106,2389,7,_binary ''),(50,7,107,8923,1,''),(50,8,108,2643,1,''),(50,10,109,2544,50,_binary '2'),(50,11,110,26052,1,''),(50,103,111,18559,1,''),(50,103,112,2685,24,_binary ''),(50,103,113,26654,1,_binary ''),(50,103,114,7618,1,_binary ''),(50,103,115,2120,1,''),(50,103,116,2554,1,''),(50,103,117,2456,1,''),(50,103,118,2789,6,_binary ''),(69,3,101,1987,1,''),(69,4,102,2650,1,''),(69,6,103,2398,1,''),(69,11,104,26052,1,''),(69,101,105,2674,2,_binary ''),(69,101,106,2554,1,''),(69,101,107,2120,1,''),(46,1,101,2480,1,''),(46,2,102,2661,1,''),(46,3,103,1988,1,''),(46,4,104,2660,1,''),(46,5,105,2525,1,''),(46,6,106,2389,2,_binary ''),(46,7,107,8923,1,''),(46,8,108,2643,1,''),(46,11,109,26052,1,''),(46,103,110,2554,1,''),(46,103,111,2120,1,''),(46,103,112,18559,1,''),(46,103,113,2544,50,_binary '2'),(46,103,114,2456,1,''),(46,103,115,7618,1,_binary ''),(46,103,116,2789,20,_binary ''),(71,3,101,1987,1,_binary '%\0&\0\0\0\0'),(71,4,102,2650,1,''),(71,6,103,2398,1,''),(71,11,104,26052,1,''),(71,101,105,2674,2,_binary ''),(71,101,106,2554,1,''),(71,101,107,2120,1,''),(72,3,101,1987,1,''),(72,4,102,2650,1,''),(72,6,103,2398,1,''),(72,11,104,26052,1,''),(72,101,105,2674,2,_binary ''),(72,101,106,2554,1,''),(72,101,107,2120,1,''),(73,2,101,2661,1,''),(73,3,102,1987,1,_binary '%\0&\0\0\0\0'),(73,4,103,2465,1,''),(73,5,104,2525,1,''),(73,6,105,8601,1,''),(73,7,106,2478,1,''),(73,8,107,2643,1,''),(73,11,108,26052,1,''),(73,102,109,2398,1,''),(73,102,110,1988,1,_binary '%\0&\0\0\0\0'),(73,102,111,2674,2,_binary ''),(73,102,112,2554,1,''),(73,102,113,2120,1,''),(73,110,114,18559,1,''),(73,110,115,7618,1,_binary ''),(73,110,116,2789,20,_binary ''),(73,110,117,8602,1,''),(74,3,101,1987,1,''),(74,4,102,2650,1,''),(74,6,103,2398,1,''),(74,11,104,26052,1,''),(74,101,105,2674,2,_binary ''),(74,101,106,2554,1,''),(74,101,107,2120,1,''),(56,1,101,2457,1,''),(56,2,102,2661,1,''),(56,3,103,1988,1,_binary '%&\0\0\0'),(56,4,104,2463,1,''),(56,5,105,2516,1,''),(56,6,106,2183,1,''),(56,7,107,2647,1,''),(56,8,108,2643,1,''),(56,11,109,26052,1,''),(56,103,110,2004,1,_binary '%\0&\0\0\0\0'),(56,103,111,2146,1,_binary ''),(56,103,112,2148,31,_binary ''),(56,103,113,2152,7,_binary ''),(56,103,114,2268,39,_binary '\''),(56,103,115,2160,3,_binary ''),(56,103,116,2305,14,_binary ''),(56,103,117,7589,49,_binary '1'),(56,103,118,2260,5,_binary ''),(56,103,119,2182,1,''),(56,103,120,2274,88,_binary 'X'),(56,103,121,2120,1,''),(56,103,122,2554,1,''),(56,103,123,18559,1,''),(56,109,124,7589,30,_binary ''),(56,110,125,2167,1,_binary '0\¬\0'),(56,110,126,2185,1,''),(56,110,127,2197,5,_binary '\0'),(56,110,128,2164,20,_binary '\0'),(56,110,129,2167,1,_binary '∏\’\0'),(76,3,101,1987,1,_binary '%\0&\0\0\0\0'),(76,4,102,2650,1,''),(76,6,103,2398,1,''),(76,11,104,26052,1,''),(76,101,105,2674,2,_binary ''),(76,101,106,2554,1,''),(76,101,107,2120,1,''),(67,1,101,8820,1,''),(67,2,102,2661,1,''),(67,3,103,1987,1,_binary '%\0&\0\0\0\0'),(67,4,104,2485,1,''),(67,5,105,2175,1,''),(67,7,106,2468,1,''),(67,8,107,2643,1,''),(67,11,108,26052,1,_binary '%&\0\0\0'),(67,103,109,1988,1,_binary '%\0&\0\0\0\0'),(67,103,110,8819,1,''),(67,103,111,2182,1,''),(67,103,112,2650,1,''),(67,103,113,2674,2,_binary ''),(67,103,114,2554,1,''),(67,103,115,2120,1,''),(67,109,116,18559,1,''),(67,109,117,7620,1,_binary ''),(67,109,118,2789,19,_binary ''),(68,1,101,2480,1,''),(68,2,102,2661,1,''),(68,3,103,1988,1,_binary '%\0&\0\0\0\0'),(68,4,104,2660,1,''),(68,5,105,2525,1,''),(68,6,106,2389,2,_binary ''),(68,7,107,8923,1,''),(68,8,108,2643,1,''),(68,11,109,26052,1,_binary '%&\0\0\0'),(68,103,110,2120,1,''),(68,103,111,2554,1,''),(68,103,112,18559,1,''),(68,103,113,2789,15,_binary ''),(66,1,101,2460,1,''),(66,2,102,2661,1,''),(66,3,103,1988,1,_binary '%&\0\0\0'),(66,4,104,2465,1,''),(66,5,105,2525,1,''),(66,6,106,8601,1,''),(66,7,107,2478,1,''),(66,8,108,2643,1,''),(66,11,109,26052,1,_binary '%\0&\0\0\0\0'),(66,103,110,2120,1,''),(66,103,111,2554,1,''),(66,103,112,18559,1,''),(66,103,113,7618,1,_binary ''),(66,103,114,2789,20,_binary ''),(62,1,101,8820,1,''),(62,2,102,2661,1,''),(62,3,103,1988,1,_binary '%\0&\0\0\0\0'),(62,4,104,8819,1,''),(62,5,105,2175,1,''),(62,6,106,2190,1,''),(62,7,107,2468,1,''),(62,8,108,2643,1,''),(62,11,109,26052,1,_binary '%&\0\0\0'),(62,103,110,2120,1,''),(62,103,111,2554,1,''),(62,103,112,18559,1,''),(62,103,113,7620,1,_binary ''),(62,103,114,2789,20,_binary ''),(65,1,101,2480,1,''),(65,2,102,2661,1,''),(65,3,103,1988,1,_binary '%&\0\0\0'),(65,4,104,2660,1,''),(65,5,105,2525,1,''),(65,6,106,2389,2,_binary ''),(65,7,107,8923,1,''),(65,8,108,2643,1,''),(65,11,109,26052,1,_binary '%\0&\0\0\0\0'),(65,103,110,2120,1,''),(65,103,111,2554,1,''),(65,103,112,18559,1,''),(65,103,113,7618,1,_binary ''),(65,103,114,2789,20,_binary ''),(64,1,101,8820,1,''),(64,2,102,2661,1,''),(64,3,103,1988,1,_binary '%&\0\0\0'),(64,4,104,8819,1,''),(64,5,105,2175,1,''),(64,6,106,2182,1,''),(64,7,107,2468,1,''),(64,8,108,2643,1,''),(64,11,109,26052,1,_binary '%\0&\0\0\0\0'),(64,103,110,2120,1,''),(64,103,111,2554,1,''),(64,103,112,18559,1,''),(64,103,113,7620,1,_binary ''),(64,103,114,2789,17,_binary ''),(63,1,101,8820,1,''),(63,2,102,2661,1,''),(63,3,103,1988,1,_binary '%&\0\0\0'),(63,4,104,8819,1,''),(63,5,105,2175,1,''),(63,6,106,2190,1,''),(63,7,107,2468,1,''),(63,8,108,2643,1,''),(63,11,109,26052,1,_binary '%\0&\0\0\0\0'),(63,103,110,2120,1,''),(63,103,111,2554,1,''),(63,103,112,18559,1,''),(63,103,113,7620,1,_binary ''),(63,103,114,2789,17,_binary ''),(77,3,101,1987,1,_binary '%\0&\0\0\0\0'),(77,4,102,2650,1,''),(77,6,103,2398,1,''),(77,11,104,26052,1,''),(77,101,105,2148,18,_binary ''),(77,101,106,2554,1,''),(77,101,107,2120,1,''),(78,3,101,1987,1,_binary '%\0&\0\0\0\0'),(78,4,102,2650,1,''),(78,6,103,2398,1,''),(78,11,104,26052,1,''),(78,101,105,2148,4,_binary ''),(78,101,106,2674,2,_binary ''),(78,101,107,2554,1,''),(78,101,108,2120,1,''),(70,1,101,2457,1,''),(70,2,102,2661,1,''),(70,3,103,1988,1,_binary '%&\0\0\0'),(70,4,104,8819,1,''),(70,5,105,2513,1,''),(70,6,106,29060,1,''),(70,7,107,2647,1,''),(70,8,108,2643,1,''),(70,11,109,26052,1,''),(70,103,110,2146,2,_binary ''),(70,103,111,1988,1,_binary '%&\0\0\0'),(70,103,112,2152,70,_binary 'F'),(70,103,113,12413,1,_binary ''),(70,103,114,10574,14,_binary ''),(70,103,115,2201,200,_binary '\»\0'),(70,103,116,5875,1,_binary ''),(70,103,117,2175,1,''),(70,103,118,2120,1,''),(70,103,119,2554,1,''),(70,103,120,18559,1,''),(70,103,121,2789,12,_binary ''),(70,111,122,2457,1,''),(70,111,123,2148,49,_binary '1'),(70,111,124,1988,1,''),(52,1,101,2502,1,''),(52,2,102,2661,1,''),(52,3,103,1988,1,_binary '%&\0\0\0'),(52,4,104,8891,1,''),(52,6,105,8855,1,''),(52,7,106,11304,1,''),(52,8,107,2195,1,''),(52,9,108,2124,1,''),(52,10,109,18304,86,_binary 'V'),(52,11,110,26052,1,''),(52,103,111,2148,23,_binary ''),(52,103,112,29057,37,_binary '%'),(52,103,113,2152,12,_binary ''),(52,103,114,9774,1,''),(52,103,115,2167,1,''),(52,103,116,2120,1,''),(52,103,117,2000,1,_binary '%&\0\0\0'),(52,103,118,2002,1,_binary '%&\0\0\0'),(52,110,119,32128,50,_binary '2\0'),(52,110,120,32128,50,_binary '2\0'),(52,114,121,18304,88,_binary 'X'),(52,114,122,7589,22,_binary ''),(52,114,123,18304,100,_binary 'd'),(52,114,124,18304,100,_binary 'd'),(52,114,125,18304,100,_binary 'd'),(52,114,126,18304,100,_binary 'd'),(52,114,127,18304,100,_binary 'd'),(52,114,128,7589,100,_binary 'd'),(52,114,129,7589,100,_binary 'd'),(52,114,130,8472,19,_binary ''),(52,114,131,7589,100,_binary 'd'),(52,114,132,7589,100,_binary 'd'),(52,114,133,2165,1,''),(52,117,134,5908,1,''),(52,118,135,2214,1,''),(52,118,136,2214,1,''),(52,118,137,2165,1,_binary 'p\0\0'),(52,118,138,2303,25,_binary ''),(52,118,139,2553,1,''),(52,118,140,2301,27,_binary ''),(52,118,141,2305,7,_binary ''),(52,118,142,2303,92,_binary '\\'),(52,118,143,2289,44,_binary ','),(52,118,144,2279,48,_binary '0'),(52,118,145,18559,1,''),(52,118,146,2554,1,''),(52,118,147,2420,1,''),(53,1,101,2460,1,''),(53,2,102,2661,1,''),(53,3,103,1988,1,_binary '%\0&\0\0\0\0'),(53,4,104,2465,1,''),(53,6,105,8602,1,''),(53,11,106,26052,1,_binary '%&\0\0\0'),(53,103,107,2152,76,_binary 'L'),(53,103,108,12428,2,_binary ''),(53,103,109,12438,2,_binary ''),(53,103,110,5890,2,_binary ''),(53,103,111,11192,1,_binary ''),(53,103,112,2120,1,''),(53,103,113,2554,1,''),(53,103,114,18559,1,''),(53,103,115,7618,1,_binary ''),(53,103,116,2789,8,_binary ''),(53,106,117,32128,50,_binary '2\0'),(53,106,118,32128,50,_binary '2\0'),(53,106,119,7618,10,_binary '\n'),(55,1,101,2502,1,''),(55,2,102,2661,1,''),(55,3,103,1988,1,_binary '%&\0\0\0'),(55,4,104,8819,1,''),(55,5,105,2534,1,''),(55,6,106,2189,1,''),(55,7,107,11304,1,''),(55,8,108,2195,1,''),(55,11,109,26052,1,''),(55,103,110,2148,9,_binary '	'),(55,103,111,12408,1,_binary ''),(55,103,112,12435,1,_binary ''),(55,103,113,2188,1,''),(55,103,114,2274,36,_binary '$'),(55,103,115,12414,1,_binary ''),(55,103,116,5880,1,_binary ''),(55,103,117,2120,1,''),(55,103,118,2554,1,''),(55,103,119,18559,1,''),(55,103,120,7620,14,_binary ''),(55,103,121,2789,12,_binary ''),(55,109,122,32128,50,_binary '2\0'),(55,109,123,32128,50,_binary '2\0');
/*!40000 ALTER TABLE `player_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_killers`
--

DROP TABLE IF EXISTS `player_killers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_killers` (
  `kill_id` int NOT NULL,
  `player_id` int NOT NULL,
  KEY `kill_id` (`kill_id`),
  KEY `player_id` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_killers`
--

LOCK TABLES `player_killers` WRITE;
/*!40000 ALTER TABLE `player_killers` DISABLE KEYS */;
/*!40000 ALTER TABLE `player_killers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_kills`
--

DROP TABLE IF EXISTS `player_kills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_kills` (
  `player_id` int NOT NULL,
  `time` bigint unsigned NOT NULL DEFAULT '0',
  `target` int NOT NULL,
  `unavenged` tinyint(1) NOT NULL DEFAULT '0',
  KEY `player_id` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_kills`
--

LOCK TABLES `player_kills` WRITE;
/*!40000 ALTER TABLE `player_kills` DISABLE KEYS */;
/*!40000 ALTER TABLE `player_kills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_misc`
--

DROP TABLE IF EXISTS `player_misc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_misc` (
  `player_id` int NOT NULL,
  `info` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_misc`
--

LOCK TABLES `player_misc` WRITE;
/*!40000 ALTER TABLE `player_misc` DISABLE KEYS */;
INSERT INTO `player_misc` VALUES (3481,_binary '{}'),(3485,_binary '{}'),(3492,_binary '{}'),(3489,_binary '{}'),(3488,_binary '{}'),(3491,_binary '{}'),(3479,_binary '{}'),(3487,_binary '{}'),(18,_binary '{}'),(20,_binary '{}'),(27,_binary '{}'),(3,_binary '{}'),(2,_binary '{}'),(17,_binary '{}'),(29,_binary '{}'),(26,_binary '{}'),(25,_binary '{}'),(33,_binary '{}'),(34,_binary '{}'),(37,_binary '{}'),(11,_binary '{}'),(15,_binary '{}'),(38,_binary '{}'),(13,_binary '{}'),(16,_binary '{}'),(19,_binary '{}'),(39,_binary '{}'),(36,_binary '{}'),(21,_binary '{}'),(43,_binary '{}'),(14,_binary '{}'),(5,_binary '{}'),(10,_binary '{}'),(6,_binary '{}'),(44,_binary '{}'),(8,_binary '{}'),(42,_binary '{}'),(9,_binary '{}'),(12,_binary '{}'),(40,_binary '{}'),(23,_binary '{}'),(41,_binary '{}'),(4,_binary '{}'),(22,_binary '{}'),(28,_binary '{}'),(47,_binary '{}'),(48,_binary '{}'),(50,_binary '{}'),(7,_binary '{}'),(59,_binary '{}'),(61,_binary '{}'),(60,_binary '{}'),(57,_binary '{}'),(58,_binary '{}'),(49,_binary '{}'),(69,_binary '{}'),(46,_binary '{}'),(71,_binary '{}'),(72,_binary '{}'),(73,_binary '{}'),(74,_binary '{}'),(56,_binary '{}'),(76,_binary '{}'),(67,_binary '{}'),(68,_binary '{}'),(66,_binary '{}'),(62,_binary '{}'),(65,_binary '{}'),(64,_binary '{}'),(63,_binary '{}'),(77,_binary '{}'),(78,_binary '{}'),(70,_binary '{}'),(52,_binary '{}'),(53,_binary '{}'),(55,_binary '{}');
/*!40000 ALTER TABLE `player_misc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_namelocks`
--

DROP TABLE IF EXISTS `player_namelocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_namelocks` (
  `player_id` int NOT NULL,
  `reason` varchar(255) NOT NULL,
  `namelocked_at` bigint NOT NULL,
  `namelocked_by` int NOT NULL,
  PRIMARY KEY (`player_id`),
  KEY `namelocked_by` (`namelocked_by`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_namelocks`
--

LOCK TABLES `player_namelocks` WRITE;
/*!40000 ALTER TABLE `player_namelocks` DISABLE KEYS */;
/*!40000 ALTER TABLE `player_namelocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_preydata`
--

DROP TABLE IF EXISTS `player_preydata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_preydata` (
  `player_id` int NOT NULL,
  `data` blob NOT NULL,
  PRIMARY KEY (`player_id`),
  CONSTRAINT `player_preydata_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `players` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_preydata`
--

LOCK TABLES `player_preydata` WRITE;
/*!40000 ALTER TABLE `player_preydata` DISABLE KEYS */;
INSERT INTO `player_preydata` VALUES (2,_binary '\0\0\0\0\0\0\0\0\0	\0Burning Gladiator\0Cursed Book\0Defiler\0Guardian of Tales	\0Guzzlemaw\n\0Juggernaut\0Midnight Asura\0Sight of Surrender\0Squid Warden\0\0\0\0\0\0\0\0	\0Biting Book\r\0Dark Torturer\0Demon\0Draken Elite\0Draken Warmaster\0Frost Flower Asura\0Hand of Cursed Fate\n\0Ogre Rowdy\0Shiversleep\0\0\0\0\0\0\0\0\0\0'),(7,_binary '\0\0\0\0\0\0\0\0\0	\0Blightwalker\0Cobra Assassin\0Deathling Spellsinger\0Diamond Servant\n\0Juggernaut\0Knowledge Elemental\n\0Ogre Rowdy\0Skeleton Elite Warrior\0True Dawnfire Asura\0\0\0\0\0\0\0\0	\0Brain Squid\0Choking Fear\0Crypt Warden\0Dawnfire Asura\0Energuardian of Tales	\0Guzzlemaw\0Hand of Cursed Fate\0Terrorsleep\r\0Undead Dragon\0\0\0\0\0\0\0\0\0\0'),(46,_binary '\0\0\0\0\0\0\0\0\0	\0Brain Squid\0Cobra Assassin\0Diamond Servant\0Draptor\0Energuardian of Tales\0Hellfire Fighter\0Lamassu\0Shiversleep\0Vexclaw\0\0\0\0\0\0\0\0	\0Blightwalker\0Burning Gladiator\0Cursed Book\0Dawnfire Asura	\0Destroyer\0Draken Elite	\0Hellhound\0Squid Warden\0Undead Elite Gladiator\0\0\0\0\0\0\0\0\0\0'),(47,_binary '\0\0\0\0\0\0\0\0\0	\0Choking Fear\r\0Demon Outcast	\0Destroyer\0Frost Flower Asura\0Hand of Cursed Fate\0Ink Blob\0Knowledge Elemental	\0Ogre Sage\0Shiversleep\0\0\0\0\0\0\0\0	\r\0Dark Torturer\0Deathling Spellsinger\0Grim Reaper\n\0Grimeleech	\0Guzzlemaw	\0Hellhound\n\0Juggernaut\0Ogre Ruffian\0Sphinx\0\0\0\0\0\0\0\0\0\0'),(48,_binary '\0\0\0\0\0\0\0\0\0	\0Biting Book\0Diamond Servant\0Draptor\0Grim Reaper	\0Guzzlemaw\0Hand of Cursed Fate\0Knowledge Elemental\0Ogre Ruffian\0Vexclaw\0\0\0\0\0\0\0\0	\0Crypt Warden\0Deathling Spellsinger\0Defiler\n\0Feversleep\0Guardian of Tales\0Hellfire Fighter\0Icecold Book\0Midnight Asura\0True Midnight Asura\0\0\0\0\0\0\0\0\0\0'),(49,_binary '\0≤π˛s\0\0	\0Cobra Assassin\0Crypt Warden\0Draptor	\0Hellhound\0Ink Blob\n\0Ogre Rowdy\0Ogre Ruffian\0Sparkion\0Vexclaw\0\0\0\0\0\0\0\0	\0Deathling Scout\0Diamond Servant\0Draken Warmaster\0Feral Sphinx\0Guardian of Tales\0Hand of Cursed Fate\0Hellfire Fighter\n\0Rage Squid\0Terrorsleep\0\0\0\0\0\0\0\0\0\0'),(50,_binary '\0pG˛s\0\0	\0Cursed Book\0Demon\0Draken Spellweaver\0Draken Warmaster\0Gryphon\0Knowledge Elemental\0Lamassu\0Retching Horror\0True Frost Flower Asura`ÇG˛s\0\0	\0Biting Book\0Blightwalker\0Choking Fear\0Cobra Vizier\0Draken Elite\r\0Falcon Knight\n\0Rage Squid\0Sight of Surrender\0Sparkion\0\0\0\0\0\0\0\0\0\0'),(52,_binary '\0™¿)t\0\0\0Undead Elite Gladiator %\0		\0Cobra Scout\r\0Dark Torturer\0Draptor\0Energetic Book	\0Guzzlemaw\0Hand of Cursed Fate\0Midnight Asura\0Skeleton Elite Warrior\0Undead Elite Gladiator(∫)t\0\0\0Draken Warmaster \0	\0	\0Biting Book\0Black Sphinx Acolyte\0Burning Gladiator\0Deathling Spellsinger\0Diamond Servant\0Draken Warmaster\0Guardian of Tales\0Knowledge Elemental\0True Frost Flower Asura\0\0\0\0\0\0\0\0\0\0'),(53,_binary '\0\0\0\0\0\0\0\0\0	\0Dawnfire Asura\0Demon\0Draken Spellweaver\0Grim Reaper	\0Guzzlemaw\0Midnight Asura\n\0Ogre Rowdy\0Skeleton Elite Warrior\0Squid Warden\0\0\0\0\0\0\0\0	\0Animated Feather	\0Destroyer\0Frost Flower Asura\n\0Grimeleech	\0Ogre Sage\0Retching Horror\0Sparkion\0True Dawnfire Asura\0Vexclaw\0\0\0\0\0\0\0\0\0\0'),(55,_binary '\03x)t\0\0	\0Black Sphinx Acolyte\0Brain Squid\0Diamond Servant	\0Hellhound\0Lamassu\n\0Ogre Rowdy\0Retching Horror\0True Frost Flower Asura\0Undead Elite Gladiatorf~)t\0\0	\0Biting Book\0Draken Warmaster\0Energuardian of Tales\n\0Grimeleech\0Icecold Book\n\0Juggernaut\0Plaguesmith\0Sight of Surrender\0True Midnight Asura\0\0\0\0\0\0\0\0\0\0'),(56,_binary '\0\ÓÑ\’t\0\0\0	\0Blightwalker\r\0Demon Outcast\0Diamond Servant\0Draken Abomination\0Feral Sphinx\n\0Feversleep\n\0Juggernaut	\0Manticore\0True Frost Flower AsuraNj\’t\0\0\0\0	\0Black Sphinx Acolyte\0Burning Book\0Burning Gladiator\0Crypt Warden\0Draken Warmaster\0Falcon Paladin\0Gryphon	\0Guzzlemaw\0Hellfire Fighter\0\0\0\0\0\0\0\0\0\0'),(57,_binary '\0\0\0\0\0\0\0\0\0	\0Animated Feather\0Burning Gladiator\0Cobra Assassin	\0Destroyer\0Diamond Servant\0Draken Abomination\0Falcon Paladin\n\0Feversleep\0Undead Elite Gladiator\0\0\0\0\0\0\0\0	\0Choking Fear\0Deathling Spellsinger\0Draken Warmaster	\0Guzzlemaw	\0Hellhound\0Ink Blob	\0Ogre Sage\0Sparkion\0True Dawnfire Asura\0\0\0\0\0\0\0\0\0\0'),(58,_binary '\0\0\0\0\0\0\0\0\0	\0Animated Feather\0Burning Gladiator\0Cobra Assassin	\0Guzzlemaw\0Hellfire Fighter\0Midnight Asura\0Retching Horror\0Shiversleep\0Squid Warden\0\0\0\0\0\0\0\0	\0Burning Book\0Choking Fear\0Cobra Vizier\0Crystal Spider\0Deathling Spellsinger\0Gryphon\0Ink Blob\0Plaguesmith\n\0Rage Squid\0\0\0\0\0\0\0\0\0\0'),(59,_binary '\0\0\0\0\0\0\0\0\0	\0Brain Squid	\0Destroyer\0Draken Spellweaver\r\0Falcon Knight\0Grim Reaper	\0Guzzlemaw\n\0Juggernaut	\0Ogre Sage\0Shiversleep\0\0\0\0\0\0\0\0	\0Animated Feather\0Demon\0Draken Warmaster\0Draptor\0Lamassu\n\0Ogre Rowdy\0Ogre Ruffian\0Sphinx\0Squid Warden\0\0\0\0\0\0\0\0\0\0'),(60,_binary '\0\0\0\0\0\0\0\0\0	\0Biting Book\0Cobra Scout\0Crystal Spider\0Cursed Book\n\0Feversleep\0Frost Flower Asura\0Hellfire Fighter\n\0Ogre Rowdy\n\0Rage Squid\0\0\0\0\0\0\0\0	\0Blightwalker\0Cobra Assassin\0Crypt Warden\r\0Demon Outcast\0Grim Reaper\0Hand of Cursed Fate\0Midnight Asura\0Priestess of the Wild Sun\0Sphinx\0\0\0\0\0\0\0\0\0\0'),(61,_binary '\0\0\0\0\0\0\0\0\0	\0Blightwalker\0Cobra Vizier\0Guardian of Tales\0Ink Blob\0Knowledge Elemental\n\0Ogre Rowdy\n\0Rage Squid\0Shiversleep\r\0Undead Dragon\0\0\0\0\0\0\0\0	\0Burning Book\0Crypt Warden\0Deathling Spellsinger\0Draptor\0Energetic Book\0Frost Flower Asura\0Grim Reaper	\0Hellhound\0Skeleton Elite Warrior\0\0\0\0\0\0\0\0\0\0'),(62,_binary '\0\0\0\0\0\0\0\0\0	\0Draken Warmaster\0Energuardian of Tales\0Feral Sphinx\0Grim Reaper\0Gryphon\0Plaguesmith\n\0Rage Squid\0Sight of Surrender\r\0Undead Dragon\0\0\0\0\0\0\0\0	\0Burning Gladiator\0Choking Fear\0Cursed Book\r\0Demon Outcast\0Draken Elite\0Falcon Paladin\0Ink Blob\n\0Ogre Rowdy\0True Midnight Asura\0\0\0\0\0\0\0\0\0\0'),(63,_binary '\0\0\0\0\0\0\0\0\0	\0Biting Book\0Crystal Spider\0Deathling Spellsinger\0Feral Sphinx\0Guardian of Tales\0Knowledge Elemental\0Ogre Ruffian\0Plaguesmith\0Skeleton Elite Warrior\0\0\0\0\0\0\0\0	\0Cobra Scout\0Cobra Vizier\0Deathling Scout\0Draken Abomination\0Draken Spellweaver\0Hand of Cursed Fate\0Icecold Book\0Midnight Asura\n\0Ogre Rowdy\0\0\0\0\0\0\0\0\0\0'),(64,_binary '\0\0\0\0\0\0\0\0\0	\0Biting Book\0Blightwalker\0Brain Squid\0Choking Fear\0Demon\0Draken Spellweaver\0Grim Reaper\0Skeleton Elite Warrior\0Sphinx\0\0\0\0\0\0\0\0	\r\0Dark Torturer\0Energuardian of Tales\0Falcon Paladin\0Lamassu\0Midnight Asura\0Retching Horror\0Sight of Surrender\0True Dawnfire Asura\0True Frost Flower Asura\0\0\0\0\0\0\0\0\0\0'),(65,_binary '\0\0\0\0\0\0\0\0\0		\0Destroyer\0Draptor\0Feral Sphinx\0Gryphon\0Hand of Cursed Fate\n\0Ogre Rowdy\0Plaguesmith\0Skeleton Elite Warrior\0Vexclaw\0\0\0\0\0\0\0\0	\0Crystal Spider\0Defiler\0Draken Abomination\0Draken Spellweaver\0Hellfire Fighter\0Ogre Ruffian\0Retching Horror\0Sparkion\0Sphinx\0\0\0\0\0\0\0\0\0\0'),(66,_binary '\0\0\0\0\0\0\0\0\0	\0Choking Fear\0Cobra Assassin\0Crystal Spider\0Draken Abomination\0Grim Reaper\0Gryphon\0Plaguesmith\0Priestess of the Wild Sun\0True Midnight Asura\0\0\0\0\0\0\0\0	\0Biting Book\0Burning Gladiator\0Dawnfire Asura\0Deathling Scout\0Draken Elite\n\0Grimeleech\0Icecold Book\0Midnight Asura\0Sparkion\0\0\0\0\0\0\0\0\0\0'),(67,_binary '\0\0\0\0\0\0\0\0\0	\0Blightwalker\0Crypt Warden\0Draken Abomination\r\0Falcon Knight\0Falcon Paladin\0Frost Flower Asura\0Ink Blob\0Sight of Surrender\0Terrorsleep\0\0\0\0\0\0\0\0	\0Burning Gladiator\0Cobra Vizier	\0Destroyer\0Energuardian of Tales\0Midnight Asura	\0Ogre Sage\0Priestess of the Wild Sun\0Retching Horror\0True Dawnfire Asura\0\0\0\0\0\0\0\0\0\0'),(68,_binary '\0\0\0\0\0\0\0\0\0		\0Destroyer\0Draken Elite\0Draken Spellweaver\0Energuardian of Tales\0Hand of Cursed Fate\0Lamassu\0Shiversleep\0True Dawnfire Asura\0Undead Elite Gladiator\0\0\0\0\0\0\0\0	\0Burning Gladiator\0Choking Fear\0Cobra Vizier\r\0Dark Torturer\0Defiler\0Diamond Servant\0Energetic Book\0Gryphon	\0Manticore\0\0\0\0\0\0\0\0\0\0'),(69,_binary '\0\0\0\0\0\0\0\0\0	\0Cobra Assassin\0Cursed Book\0Deathling Spellsinger\0Draken Spellweaver\0Feral Sphinx\0Hand of Cursed Fate	\0Hellhound\0Ogre Ruffian\0Sphinx\0\0\0\0\0\0\0\0	\0Blightwalker\r\0Dark Torturer\0Defiler\0Diamond Servant\0Draken Elite\0Energuardian of Tales\0Gryphon\0Lamassu\0True Frost Flower Asura\0\0\0\0\0\0\0\0\0\0'),(70,_binary '\0≈≠òt\0\0	\0Cobra Vizier\0Deathling Spellsinger\0Diamond Servant\0Feral Sphinx\0Guardian of Tales\0Icecold Book\0Ink Blob	\0Ogre Sage\0VexclawÖ∂òt\0\0	\0Crystal Spider\r\0Dark Torturer\0Demon	\0Destroyer\r\0Falcon Knight\0Frost Flower Asura\0Hand of Cursed Fate\n\0Ogre Rowdy\0Sight of Surrender\0\0\0\0\0\0\0\0\0\0'),(71,_binary '\0\0\0\0\0\0\0\0\0	\0Brain Squid\0Crystal Spider\r\0Falcon Knight\n\0Grimeleech\0Gryphon\0Hellfire Fighter\n\0Juggernaut\0Terrorsleep\0True Dawnfire Asura\0\0\0\0\0\0\0\0	\0Burning Gladiator\0Cobra Scout\0Defiler\r\0Demon Outcast\0Diamond Servant\0Falcon Paladin\0Grim Reaper\0Squid Warden\0Vexclaw\0\0\0\0\0\0\0\0\0\0'),(72,_binary '\0\0\0\0\0\0\0\0\0	\0Black Sphinx Acolyte\0Burning Book\0Crypt Warden\0Deathling Spellsinger\r\0Demon Outcast\0Diamond Servant\0Ogre Ruffian\0Sparkion\0True Midnight Asura\0\0\0\0\0\0\0\0	\r\0Dark Torturer\0Draken Warmaster\n\0Feversleep\n\0Grimeleech\0Icecold Book\n\0Juggernaut\0Midnight Asura\0Sphinx\0Terrorsleep\0\0\0\0\0\0\0\0\0\0'),(73,_binary '\0\0\0\0\0\0\0\0\0	\0Animated Feather\0Brain Squid\0Draken Abomination\r\0Falcon Knight\0Guardian of Tales\n\0Juggernaut\0Plaguesmith\0Sight of Surrender\0Sparkion\0\0\0\0\0\0\0\0	\0Biting Book\0Choking Fear\0Cursed Book\0Draken Spellweaver\0Energetic Book\0Falcon Paladin\0Feral Sphinx\0Hand of Cursed Fate\0Shiversleep\0\0\0\0\0\0\0\0\0\0'),(74,_binary '\0\0\0\0\0\0\0\0\0	\0Burning Book\0Deathling Spellsinger\r\0Demon Outcast\0Diamond Servant\n\0Grimeleech\0Guardian of Tales	\0Manticore\0Terrorsleep\0True Dawnfire Asura\0\0\0\0\0\0\0\0	\0Animated Feather\0Defiler\0Draken Spellweaver\0Draptor\0Energuardian of Tales\0Falcon Paladin\0Feral Sphinx	\0Guzzlemaw\0Retching Horror\0\0\0\0\0\0\0\0\0\0'),(76,_binary '\0\0\0\0\0\0\0\0\0	\0Biting Book\0Blightwalker\0Burning Gladiator\0Choking Fear\0Cobra Vizier\0Energuardian of Tales\0Guardian of Tales\0Priestess of the Wild Sun\0Vexclaw\0\0\0\0\0\0\0\0	\0Cobra Assassin\0Crystal Spider\0Cursed Book\r\0Dark Torturer\0Demon\0Energetic Book\0Frost Flower Asura\0Squid Warden\0True Midnight Asura\0\0\0\0\0\0\0\0\0\0'),(77,_binary '\0\0\0\0\0\0\0\0\0	\0Brain Squid\0Crypt Warden\0Defiler	\0Destroyer	\0Ogre Sage\0Priestess of the Wild Sun\0Shiversleep\0Undead Elite Gladiator\0Vexclaw\0\0\0\0\0\0\0\0	\0Black Sphinx Acolyte\0Cobra Assassin\0Cobra Scout\0Dawnfire Asura\0Draken Abomination\0Draken Spellweaver\0Falcon Paladin\n\0Grimeleech\r\0Undead Dragon\0\0\0\0\0\0\0\0\0\0'),(78,_binary '\0\0\0\0\0\0\0\0\0	\0Cobra Vizier\0Energetic Book\r\0Falcon Knight\n\0Feversleep\0Ink Blob\n\0Juggernaut\0Ogre Ruffian\0True Midnight Asura\0Vexclaw\0\0\0\0\0\0\0\0	\0Animated Feather\0Biting Book\0Crystal Spider\0Cursed Book\0Draken Abomination\0Hand of Cursed Fate\0Retching Horror\0Skeleton Elite Warrior\0Squid Warden\0\0\0\0\0\0\0\0\0\0');
/*!40000 ALTER TABLE `player_preydata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_rewards`
--

DROP TABLE IF EXISTS `player_rewards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_rewards` (
  `player_id` int NOT NULL,
  `sid` int NOT NULL,
  `pid` int NOT NULL DEFAULT '0',
  `itemtype` int NOT NULL DEFAULT '0',
  `count` int NOT NULL DEFAULT '0',
  `attributes` blob NOT NULL,
  UNIQUE KEY `player_id_2` (`player_id`,`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_rewards`
--

LOCK TABLES `player_rewards` WRITE;
/*!40000 ALTER TABLE `player_rewards` DISABLE KEYS */;
/*!40000 ALTER TABLE `player_rewards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_spells`
--

DROP TABLE IF EXISTS `player_spells`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_spells` (
  `player_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  KEY `player_id` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_spells`
--

LOCK TABLES `player_spells` WRITE;
/*!40000 ALTER TABLE `player_spells` DISABLE KEYS */;
INSERT INTO `player_spells` VALUES (783,'Haste'),(783,'Find Person'),(537,'Light'),(537,'Find Person');
/*!40000 ALTER TABLE `player_spells` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player_storage`
--

DROP TABLE IF EXISTS `player_storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_storage` (
  `player_id` int NOT NULL DEFAULT '0',
  `key` int unsigned NOT NULL DEFAULT '0',
  `value` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`player_id`,`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player_storage`
--

LOCK TABLES `player_storage` WRITE;
/*!40000 ALTER TABLE `player_storage` DISABLE KEYS */;
INSERT INTO `player_storage` VALUES (2,3310,1588875118),(2,13413,1588842001),(2,14898,0),(2,50722,1),(2,98231521,0),(3,1,1588868836),(3,3251,0),(3,3252,1588868869),(3,3310,1588867694),(3,10148,1),(3,10150,1),(3,10152,1),(3,10154,1),(3,10156,1),(3,10158,1),(3,10160,1),(3,10162,1),(3,10167,1),(3,12349,52),(3,12461,1),(3,13412,1588842001),(3,13413,1588842001),(3,14897,1),(3,14898,1),(3,14899,1588928401),(3,14901,0),(3,20279,7),(3,30018,1),(3,38412,5),(3,50702,7),(3,50722,1),(3,99963,1),(3,99965,1),(3,99966,1),(3,10001001,63439048),(3,10001002,63504584),(3,98231521,0),(4,1,1589235463),(4,1534,0),(4,2500,3),(4,3250,1),(4,3251,0),(4,3252,1589235549),(4,3310,1589310253),(4,10148,1),(4,10150,1),(4,10152,1),(4,10154,1),(4,10156,1),(4,10158,1),(4,10160,1),(4,10162,1),(4,10167,1),(4,12349,158),(4,12461,1),(4,13413,1589014800),(4,14898,0),(4,20003,2),(4,20024,5),(4,20279,6543),(4,22019,1),(4,22020,1),(4,30018,1),(4,34118,1),(4,38412,6541),(4,48984,1),(4,50722,1),(4,55018,1),(4,60086,1),(4,60087,1),(4,70001,1),(4,70014,1),(4,70020,1),(4,70023,1),(4,70025,1),(4,70026,1),(4,70029,1),(4,70030,1),(4,70032,1),(4,70033,1),(4,70034,1),(4,70037,1),(4,70038,1),(4,70042,1),(4,70044,1),(4,70055,1),(4,70059,1),(4,70062,1),(4,70063,1),(4,70064,1),(4,70074,1),(4,70075,1),(4,70079,1),(4,70081,1),(4,70082,1),(4,99963,1),(4,99965,1),(4,99966,1),(4,99967,1),(4,99968,1),(4,100157,1),(4,300147,1),(4,10001001,9502723),(4,10001002,9764867),(4,10002004,32),(4,10002011,99),(4,98231521,0),(5,1,1589090037),(5,3250,1),(5,3251,0),(5,3252,1589090068),(5,3310,1589088129),(5,10148,1),(5,10150,1),(5,10152,1),(5,10154,1),(5,10156,1),(5,10158,1),(5,10160,1),(5,10162,1),(5,10167,1),(5,12349,153),(5,12461,1),(5,13412,1589014800),(5,13413,1589014800),(5,14897,3),(5,14898,1),(5,14899,1589101200),(5,20024,11),(5,20261,9),(5,20279,5245),(5,22001,1),(5,22002,1),(5,30018,1),(5,38412,5243),(5,50702,2),(5,50722,0),(5,55018,1),(5,60086,1),(5,60087,1),(5,70001,1),(5,70014,1),(5,70020,1),(5,70023,1),(5,70025,1),(5,70026,1),(5,70029,1),(5,70030,1),(5,70032,1),(5,70033,1),(5,70034,1),(5,70037,1),(5,70038,1),(5,70042,1),(5,70044,1),(5,70055,1),(5,70059,1),(5,70062,1),(5,70063,1),(5,70064,1),(5,99965,1),(5,99966,1),(5,99967,1),(5,99968,1),(5,300137,1),(5,10001001,8388611),(5,10001002,8912899),(5,10002001,0),(5,10002002,2),(5,10002004,32),(5,10002011,33),(5,98231521,0),(6,1,1588999095),(6,3251,0),(6,3252,1589004289),(6,3310,1589146006),(6,10148,1),(6,10150,1),(6,10152,1),(6,10154,1),(6,10156,1),(6,10158,1),(6,10160,1),(6,10162,1),(6,10167,1),(6,12349,58),(6,12461,1),(6,13413,1589014800),(6,14898,0),(6,20279,254),(6,38412,252),(6,50561,1589086511),(6,50722,2),(6,70014,1),(6,70062,1),(6,70063,1),(6,70064,1),(6,70068,1),(6,70069,1),(6,70070,1),(6,70073,1),(6,99965,1),(6,99966,1),(6,300137,1),(6,10002001,16777216),(6,10002011,25),(6,98231521,0),(7,3251,0),(7,3310,1597869961),(7,13413,1597827601),(7,14898,0),(7,50722,1),(7,98231521,0),(8,1,1589126687),(8,1518,1),(8,1523,0),(8,2500,3),(8,3251,0),(8,3252,1589142642),(8,3310,1589161855),(8,10148,1),(8,10150,1),(8,10152,1),(8,10154,1),(8,10156,1),(8,10158,1),(8,10160,1),(8,10162,1),(8,10167,1),(8,12349,77),(8,12461,1),(8,13413,1589014800),(8,14898,0),(8,20024,4),(8,20162,6),(8,20279,148),(8,30018,1),(8,34108,1),(8,38412,146),(8,48973,1),(8,50702,2),(8,50722,1),(8,65018,0),(8,70068,1),(8,70069,1),(8,70070,1),(8,70073,1),(8,99963,1),(8,99965,1),(8,99966,1),(8,99967,1),(8,100157,1),(8,300006,1),(8,98231521,0),(9,1,1589082308),(9,3250,1),(9,3251,0),(9,3252,1589085098),(9,3310,1589178457),(9,10148,1),(9,10150,1),(9,10152,1),(9,10154,1),(9,10156,1),(9,10158,1),(9,10160,1),(9,10162,1),(9,10167,1),(9,12349,151),(9,12461,1),(9,13412,1589014800),(9,13413,1589014800),(9,14897,1),(9,14898,1),(9,14899,1589101200),(9,20279,3299),(9,30018,1),(9,38412,3296),(9,50722,1),(9,55018,1),(9,60086,1),(9,60087,1),(9,70001,1),(9,70020,1),(9,70023,1),(9,70025,1),(9,70026,1),(9,70029,1),(9,70030,1),(9,70032,1),(9,70033,1),(9,70034,1),(9,70037,1),(9,70038,1),(9,70042,1),(9,70044,1),(9,70055,1),(9,70059,1),(9,70062,1),(9,70063,1),(9,70064,1),(9,99963,1),(9,99965,1),(9,99966,1),(9,99967,1),(9,99968,1),(9,10001001,49807363),(9,10001002,49741827),(9,10002001,8388608),(9,10002004,32),(9,10002011,99),(9,98231521,0),(10,1,1589000989),(10,3251,0),(10,3252,1588944409),(10,3310,1589305321),(10,10148,1),(10,10150,1),(10,10152,1),(10,10154,1),(10,10156,1),(10,10158,1),(10,10160,1),(10,10162,1),(10,10167,1),(10,12010,1),(10,12062,1),(10,12349,73),(10,12461,1),(10,13413,1589014800),(10,14898,0),(10,20279,981),(10,30018,1),(10,38412,479),(10,50702,2),(10,50722,1),(10,70014,1),(10,70062,1),(10,70063,1),(10,70064,1),(10,99965,1),(10,99966,1),(10,99967,1),(10,10001001,81461467),(10,10001002,81527003),(10,98231521,0),(11,1,1588948314),(11,3251,0),(11,3252,1588951907),(11,3310,1588947084),(11,10148,1),(11,10150,1),(11,10152,1),(11,10154,1),(11,10156,1),(11,10158,1),(11,10160,1),(11,10162,1),(11,10167,1),(11,12349,98),(11,12461,1),(11,13412,1588928400),(11,13413,1588842001),(11,14897,3),(11,14898,2),(11,14899,1589014800),(11,14901,0),(11,20003,2),(11,20024,5),(11,20279,235),(11,30018,1),(11,38412,233),(11,50702,2),(11,50722,1),(11,60087,1),(11,70023,1),(11,70029,1),(11,70030,1),(11,70038,1),(11,70042,1),(11,70044,1),(11,99963,1),(11,99965,1),(11,99966,1),(11,99967,1),(11,203500,1),(11,98231521,0),(12,1,1588959881),(12,3251,0),(12,3252,1589200679),(12,3310,1589204731),(12,10148,1),(12,10150,1),(12,10152,1),(12,10154,1),(12,10156,1),(12,10158,1),(12,10160,1),(12,10162,1),(12,10167,1),(12,12349,79),(12,12461,1),(12,13412,1588842001),(12,13413,1589014800),(12,14897,1),(12,14898,0),(12,14899,1588928401),(12,14901,0),(12,20279,596),(12,30018,1),(12,38412,594),(12,50722,1),(12,70014,1),(12,70039,1),(12,70042,1),(12,70059,1),(12,70062,1),(12,70063,1),(12,70064,1),(12,99965,1),(12,99966,1),(12,99967,1),(12,203500,1),(12,98231521,0),(13,1,1588967770),(13,3251,0),(13,3252,1588973344),(13,3310,1588974562),(13,10148,1),(13,10150,1),(13,10152,1),(13,10154,1),(13,10156,1),(13,10158,1),(13,10160,1),(13,10162,1),(13,10167,1),(13,12349,38),(13,12461,1),(13,13413,1588928400),(13,14898,0),(13,20279,2),(13,38412,0),(13,50561,1588991236),(13,50702,2),(13,50722,1),(13,99965,1),(13,300137,1),(13,10002001,2097152),(13,10002011,22),(13,98231521,0),(14,1,1589006519),(14,1100,3),(14,1103,1),(14,1105,1),(14,3251,0),(14,3252,1588994577),(14,3310,1589076688),(14,10148,1),(14,10150,1),(14,10152,1),(14,10154,1),(14,10156,1),(14,10158,1),(14,10160,1),(14,10162,1),(14,10167,1),(14,12349,103),(14,12461,1),(14,13100,0),(14,13412,1589014800),(14,13413,1589014800),(14,14897,3),(14,14898,1),(14,14899,1589101200),(14,14901,0),(14,20279,1114),(14,26100,1),(14,27100,1),(14,30018,1),(14,38412,1112),(14,50140,2),(14,50141,2),(14,50142,1),(14,50722,0),(14,60087,1),(14,70013,1),(14,70014,1),(14,70020,1),(14,70023,1),(14,70025,1),(14,70026,1),(14,70029,1),(14,70030,1),(14,70038,1),(14,70042,1),(14,70044,1),(14,70052,1),(14,70053,1),(14,70062,1),(14,70063,1),(14,70064,1),(14,99965,1),(14,99966,1),(14,99967,1),(14,99968,1),(14,203500,1),(14,300084,1),(14,300137,1),(14,300168,1),(14,10001001,28180483),(14,10001002,28246019),(14,10002001,0),(14,10002004,32),(14,10002011,99),(14,98231521,0),(15,1,1588958827),(15,1100,3),(15,1103,1),(15,1105,1),(15,3251,0),(15,3252,1588907267),(15,3310,1588958730),(15,10148,1),(15,10150,1),(15,10152,1),(15,10154,1),(15,10156,1),(15,10158,1),(15,10160,1),(15,10162,1),(15,10167,1),(15,12349,119),(15,12461,1),(15,13100,0),(15,13413,1588928400),(15,14898,0),(15,20279,122),(15,26100,1),(15,27100,1),(15,30018,1),(15,38412,120),(15,50140,2),(15,50141,2),(15,50702,2),(15,50722,0),(15,60087,1),(15,70013,1),(15,70014,1),(15,70023,1),(15,70029,1),(15,70030,1),(15,70042,1),(15,70044,1),(15,70052,1),(15,70053,1),(15,70059,1),(15,70062,1),(15,70063,1),(15,70064,1),(15,99965,1),(15,99966,1),(15,99967,1),(15,99968,1),(15,203500,1),(15,300084,1),(15,300137,1),(15,300168,1),(15,10002001,0),(15,10002004,32),(15,10002011,99),(15,98231521,0),(16,1,1588814396),(16,3251,0),(16,3252,1588974445),(16,3310,1588975245),(16,10148,1),(16,10150,1),(16,10152,1),(16,10154,1),(16,10156,1),(16,10158,1),(16,10160,1),(16,10162,1),(16,10167,1),(16,12349,57),(16,12461,1),(16,13413,1588928400),(16,14898,0),(16,20279,25),(16,38412,23),(16,50722,0),(16,99963,1),(16,99965,1),(16,99966,1),(16,100157,1),(16,98231521,0),(17,1,1588876226),(17,3251,0),(17,3310,1588868621),(17,10148,1),(17,10150,1),(17,10152,1),(17,10154,1),(17,10156,1),(17,10158,1),(17,10160,1),(17,10162,1),(17,10167,1),(17,12349,65),(17,12461,1),(17,13413,1588842001),(17,14898,0),(17,20279,205),(17,38412,203),(17,50722,0),(17,70014,1),(17,99965,1),(17,99966,1),(17,100157,1),(17,98231521,0),(18,3251,0),(18,3310,1588820592),(18,10148,1),(18,10150,1),(18,10152,1),(18,10154,1),(18,10156,1),(18,10158,1),(18,10160,1),(18,10162,1),(18,10167,1),(18,12461,1),(18,13413,1587967201),(18,14898,0),(18,50702,2),(18,50722,1),(18,98231521,0),(19,1,1588972038),(19,3251,0),(19,3252,1588972640),(19,3310,1588971658),(19,10148,1),(19,10150,1),(19,10152,1),(19,10154,1),(19,10156,1),(19,10158,1),(19,10160,1),(19,10162,1),(19,10167,1),(19,12349,95),(19,12461,1),(19,13413,1588928400),(19,14898,0),(19,20279,224),(19,30018,1),(19,38412,222),(19,50722,0),(19,70014,1),(19,99965,1),(19,99966,1),(19,99967,1),(19,10002004,32),(19,10002011,99),(19,98231521,0),(20,1,1588823652),(20,1501,0),(20,3251,0),(20,3252,1588822626),(20,3310,1588821964),(20,10148,1),(20,10150,1),(20,10152,1),(20,10154,1),(20,10156,1),(20,10158,1),(20,10160,1),(20,10162,1),(20,10167,1),(20,12349,51),(20,12461,1),(20,13413,1587967201),(20,14898,0),(20,20279,18),(20,38412,16),(20,48951,1),(20,50722,0),(20,70014,1),(20,99965,1),(20,99966,1),(20,100157,1),(20,98231521,0),(21,1,1589039118),(21,3251,0),(21,3310,1589038015),(21,10148,1),(21,10150,1),(21,10152,1),(21,10154,1),(21,10156,1),(21,10158,1),(21,10160,1),(21,10162,1),(21,10167,1),(21,12349,68),(21,12461,1),(21,13412,1588842001),(21,13413,1589014800),(21,14897,2),(21,14898,0),(21,14899,1588928401),(21,14901,0),(21,20279,502),(21,38412,500),(21,50702,3),(21,50722,1),(21,55018,1),(21,70014,1),(21,99965,1),(21,99966,1),(21,100157,1),(21,300137,1),(21,10002001,0),(21,10002004,32),(21,10002011,99),(21,98231521,0),(22,3251,0),(22,3310,1589316821),(22,10148,1),(22,10150,1),(22,10152,1),(22,10154,1),(22,10156,1),(22,10158,1),(22,10160,1),(22,10162,1),(22,10167,1),(22,12461,1),(22,13413,1589014800),(22,14898,0),(22,50702,2),(22,50722,1),(22,98231521,0),(23,1,1589294708),(23,3251,0),(23,3252,1589230499),(23,3310,1589294590),(23,10148,1),(23,10150,1),(23,10152,1),(23,10154,1),(23,10156,1),(23,10158,1),(23,10160,1),(23,10162,1),(23,10167,1),(23,12349,87),(23,12461,1),(23,13413,1589014800),(23,14898,0),(23,20279,8),(23,30018,1),(23,38412,6),(23,50722,1),(23,99963,1),(23,99965,1),(23,99966,1),(23,99967,1),(23,300137,1),(23,10002001,0),(23,10002011,0),(23,98231521,0),(25,3251,0),(25,3310,1589174778),(25,10148,1),(25,10150,1),(25,10152,1),(25,10154,1),(25,10156,1),(25,10158,1),(25,10160,1),(25,10162,1),(25,10167,1),(25,12461,1),(25,13413,1589014800),(25,14898,0),(25,50702,2),(25,50722,1),(25,70028,1),(25,98231521,0),(26,3251,0),(26,3310,1589174773),(26,10148,1),(26,10150,1),(26,10152,1),(26,10154,1),(26,10156,1),(26,10158,1),(26,10160,1),(26,10162,1),(26,10167,1),(26,12461,1),(26,13413,1589014800),(26,14898,0),(26,50702,2),(26,50722,1),(26,70028,1),(26,98231521,0),(27,3251,0),(27,3310,1588868875),(27,10148,1),(27,10150,1),(27,10152,1),(27,10154,1),(27,10156,1),(27,10158,1),(27,10160,1),(27,10162,1),(27,10167,1),(27,12461,1),(27,13413,1588842001),(27,14898,0),(27,50722,1),(27,98231521,0),(28,1,1589316837),(28,3251,0),(28,3252,1589230286),(28,3310,1589314555),(28,10148,1),(28,10150,1),(28,10152,1),(28,10154,1),(28,10156,1),(28,10158,1),(28,10160,1),(28,10162,1),(28,10167,1),(28,12349,63),(28,12461,1),(28,13413,1589014800),(28,14898,0),(28,20279,9),(28,30018,1),(28,38412,7),(28,50561,1589243756),(28,50703,1),(28,50722,1),(28,70042,1),(28,70059,1),(28,70062,1),(28,70063,1),(28,70064,1),(28,70074,1),(28,70075,1),(28,70081,1),(28,70082,1),(28,99965,1),(28,99966,1),(28,300137,1),(28,10002001,16777216),(28,10002011,25),(28,98231521,0),(29,3251,0),(29,3310,1588883441),(29,13413,1588842001),(29,14898,0),(29,50722,0),(29,98231521,0),(33,3251,0),(33,3310,1588901239),(33,13413,1588842001),(33,14898,0),(33,50722,0),(33,98231521,0),(34,3251,0),(34,3310,1588901790),(34,10148,1),(34,10150,1),(34,10152,1),(34,10154,1),(34,10156,1),(34,10158,1),(34,10160,1),(34,10162,1),(34,10167,1),(34,12461,1),(34,13413,1588842001),(34,14898,0),(34,50722,0),(34,98231521,0),(35,3251,0),(35,3310,1588903165),(35,13413,1588842001),(35,14898,0),(35,50722,2),(36,1,1588974482),(36,3251,0),(36,3252,1588981040),(36,3310,1588996341),(36,10148,1),(36,10150,1),(36,10152,1),(36,10154,1),(36,10156,1),(36,10158,1),(36,10160,1),(36,10162,1),(36,10167,1),(36,12349,43),(36,12461,1),(36,13412,1588928400),(36,13413,1588928400),(36,14897,1),(36,14898,1),(36,14899,1589014800),(36,20024,2),(36,20279,104),(36,38412,102),(36,50703,1),(36,50722,1),(36,70003,1),(36,99963,1),(36,99965,1),(36,99966,1),(36,98231521,0),(37,3251,0),(37,3310,1588944779),(37,13413,1588928400),(37,14898,0),(37,50722,1),(37,98231521,0),(38,3251,0),(38,3310,1588963606),(38,13413,1588928400),(38,14898,0),(38,50722,1),(38,98231521,0),(39,3251,0),(39,3310,1588981596),(39,10148,1),(39,10150,1),(39,10152,1),(39,10154,1),(39,10156,1),(39,10158,1),(39,10160,1),(39,10162,1),(39,10167,1),(39,12461,1),(39,13413,1588928400),(39,14898,0),(39,50722,0),(39,98231521,0),(40,3251,0),(40,3310,1589235401),(40,10148,1),(40,10150,1),(40,10152,1),(40,10154,1),(40,10156,1),(40,10158,1),(40,10160,1),(40,10162,1),(40,10167,1),(40,12461,1),(40,13413,1589014800),(40,14898,0),(40,50722,1),(40,98231521,0),(41,3251,0),(41,3310,1589313451),(41,10148,1),(41,10150,1),(41,10152,1),(41,10154,1),(41,10156,1),(41,10158,1),(41,10160,1),(41,10162,1),(41,10167,1),(41,12461,1),(41,13413,1589014800),(41,14898,0),(41,50722,1),(41,98231521,0),(42,1,1589098265),(42,1518,1),(42,3251,0),(42,3252,1589145091),(42,3310,1589161978),(42,10148,1),(42,10150,1),(42,10152,1),(42,10154,1),(42,10156,1),(42,10158,1),(42,10160,1),(42,10162,1),(42,10167,1),(42,12349,58),(42,12461,1),(42,13413,1589014800),(42,14898,0),(42,20024,3),(42,20279,312),(42,38412,310),(42,50722,0),(42,65018,95),(42,70014,1),(42,70042,1),(42,70068,1),(42,70069,1),(42,70070,1),(42,99963,1),(42,99965,1),(42,99966,1),(42,100157,1),(42,98231521,0),(43,3251,0),(43,3310,1589063151),(43,13413,1589014800),(43,14898,0),(43,50722,1),(43,98231521,0),(44,1,1589150389),(44,3251,0),(44,3310,1589160772),(44,10148,1),(44,10150,1),(44,10152,1),(44,10154,1),(44,10156,1),(44,10158,1),(44,10160,1),(44,10162,1),(44,10167,1),(44,12349,22),(44,12461,1),(44,13413,1589014800),(44,14898,0),(44,20279,2),(44,38412,0),(44,50702,2),(44,50722,1),(44,99965,1),(44,98231521,0),(46,3251,0),(46,3310,1598121288),(46,10148,1),(46,10150,1),(46,10152,1),(46,10154,1),(46,10156,1),(46,10158,1),(46,10160,1),(46,10162,1),(46,10167,1),(46,12461,1),(46,13413,1598086800),(46,14898,0),(46,50702,2),(46,50722,1),(46,70028,1),(46,98231521,0),(47,3251,0),(47,3310,1597623941),(47,10148,1),(47,10150,1),(47,10152,1),(47,10154,1),(47,10156,1),(47,10158,1),(47,10160,1),(47,10162,1),(47,10167,1),(47,12349,20),(47,12461,1),(47,13413,1597568400),(47,14898,0),(47,50722,0),(47,70028,1),(47,99965,1),(47,98231521,0),(48,3251,0),(48,3310,1597680724),(48,13413,1597654800),(48,14898,0),(48,50722,1),(48,98231521,0),(49,1,1598026945),(49,3251,0),(49,3252,1597707377),(49,3310,1598026907),(49,10148,1),(49,10150,1),(49,10152,1),(49,10154,1),(49,10156,1),(49,10158,1),(49,10160,1),(49,10162,1),(49,10167,1),(49,12349,46),(49,12461,1),(49,13413,1598000400),(49,14898,0),(49,20024,3),(49,20279,72),(49,38412,70),(49,50702,7),(49,50722,1),(49,70003,1),(49,70014,1),(49,99963,1),(49,99965,1),(49,99966,1),(49,300137,1),(49,10002001,0),(49,10002011,0),(49,98231521,0),(50,3251,0),(50,3310,1598027132),(50,10148,1),(50,10150,1),(50,10152,1),(50,10154,1),(50,10156,1),(50,10158,1),(50,10160,1),(50,10162,1),(50,10167,1),(50,12349,29),(50,12461,1),(50,13413,1598000400),(50,14898,0),(50,20279,2),(50,38412,0),(50,50702,2),(50,50722,1),(50,99965,1),(50,98231521,0),(52,1,1598414638),(52,1526,1),(52,1530,1),(52,1534,1),(52,3250,1),(52,3251,0),(52,3252,1598416838),(52,3310,1598416818),(52,6670,1),(52,10148,1),(52,10150,1),(52,10152,1),(52,10154,1),(52,10156,1),(52,10158,1),(52,10160,1),(52,10162,1),(52,10167,1),(52,12349,149),(52,12461,1),(52,13412,1598346000),(52,13413,1597827601),(52,14897,0),(52,14898,7),(52,14899,1598432400),(52,20003,3),(52,20024,6),(52,20279,6088),(52,30018,1),(52,38412,6086),(52,50703,1),(52,50712,1),(52,50722,1),(52,55018,1),(52,65026,3),(52,65030,231),(52,65034,8),(52,70003,1),(52,70014,1),(52,70027,1),(52,70039,1),(52,70042,1),(52,70059,1),(52,70068,1),(52,70069,1),(52,70070,1),(52,70079,1),(52,99965,1),(52,99966,1),(52,99967,1),(52,99968,1),(52,100157,1),(52,300137,1),(52,10002001,2048),(52,10002002,257),(52,10002011,12),(52,98231521,0),(53,3251,0),(53,3310,1598416964),(53,10148,1),(53,10150,1),(53,10152,1),(53,10154,1),(53,10156,1),(53,10158,1),(53,10160,1),(53,10162,1),(53,10167,1),(53,12349,25),(53,12461,1),(53,13412,1598259600),(53,13413,1597827601),(53,14897,6),(53,14898,6),(53,14899,1598346000),(53,50722,1),(53,99965,1),(53,98231521,0),(55,1,1598416796),(55,3251,0),(55,3310,1598417216),(55,10148,1),(55,10150,1),(55,10152,1),(55,10154,1),(55,10156,1),(55,10158,1),(55,10160,1),(55,10162,1),(55,10167,1),(55,12349,32),(55,12461,1),(55,13412,1598259600),(55,13413,1597827601),(55,14897,6),(55,14898,6),(55,14899,1598346000),(55,20279,8),(55,38412,6),(55,50702,2),(55,50722,1),(55,70042,1),(55,99963,1),(55,99965,1),(55,98231521,0),(56,1,1598058652),(56,3251,0),(56,3252,1598059125),(56,3310,1598218354),(56,10148,1),(56,10150,1),(56,10152,1),(56,10154,1),(56,10156,1),(56,10158,1),(56,10160,1),(56,10162,1),(56,10167,1),(56,12349,88),(56,12461,1),(56,13412,1598173200),(56,13413,1597827601),(56,14897,5),(56,14898,5),(56,14899,1598259600),(56,20162,6),(56,20279,298),(56,30018,1),(56,38412,296),(56,50702,2),(56,50722,1),(56,70014,1),(56,99963,1),(56,99965,1),(56,99966,1),(56,99967,1),(56,10002002,256),(56,10002011,40),(56,98231521,0),(57,3251,0),(57,3310,1597943067),(57,13413,1597914000),(57,14898,0),(57,50722,1),(57,98231521,0),(58,3251,0),(58,3310,1597955139),(58,10148,1),(58,10150,1),(58,10152,1),(58,10154,1),(58,10156,1),(58,10158,1),(58,10160,1),(58,10162,1),(58,10167,1),(58,12349,20),(58,12461,1),(58,13413,1597914000),(58,14898,0),(58,50722,1),(58,99963,1),(58,99965,1),(58,98231521,0),(59,3251,0),(59,3310,1597921812),(59,13413,1597914000),(59,14898,0),(59,50722,1),(59,98231521,0),(60,3251,0),(60,3310,1597931127),(60,10148,1),(60,10150,1),(60,10152,1),(60,10154,1),(60,10156,1),(60,10158,1),(60,10160,1),(60,10162,1),(60,10167,1),(60,12461,1),(60,13413,1597914000),(60,14898,0),(60,50722,0),(60,98231521,0),(61,3251,0),(61,3310,1597931111),(61,13413,1597914000),(61,14898,0),(61,50722,1),(61,98231521,0),(62,3251,0),(62,3310,1598275559),(62,10148,1),(62,10150,1),(62,10152,1),(62,10154,1),(62,10156,1),(62,10158,1),(62,10160,1),(62,10162,1),(62,10167,1),(62,12461,1),(62,13412,1598259600),(62,13413,1597914000),(62,14897,5),(62,14898,5),(62,14899,1598346000),(62,50702,2),(62,50722,0),(62,98231521,0),(63,3251,0),(63,3310,1598275641),(63,10148,1),(63,10150,1),(63,10152,1),(63,10154,1),(63,10156,1),(63,10158,1),(63,10160,1),(63,10162,1),(63,10167,1),(63,12461,1),(63,13412,1598259600),(63,13413,1597914000),(63,14897,5),(63,14898,5),(63,14899,1598346000),(63,50702,2),(63,50722,1),(63,98231521,0),(64,3251,0),(64,3310,1598275614),(64,10148,1),(64,10150,1),(64,10152,1),(64,10154,1),(64,10156,1),(64,10158,1),(64,10160,1),(64,10162,1),(64,10167,1),(64,12461,1),(64,13412,1598259600),(64,13413,1597914000),(64,14897,5),(64,14898,5),(64,14899,1598346000),(64,50702,2),(64,50722,0),(64,98231521,0),(65,3251,0),(65,3310,1598275588),(65,10148,1),(65,10150,1),(65,10152,1),(65,10154,1),(65,10156,1),(65,10158,1),(65,10160,1),(65,10162,1),(65,10167,1),(65,12461,1),(65,13412,1598259600),(65,13413,1597914000),(65,14897,5),(65,14898,5),(65,14899,1598346000),(65,50702,2),(65,50722,0),(65,98231521,0),(66,3251,0),(66,3310,1598275528),(66,10148,1),(66,10150,1),(66,10152,1),(66,10154,1),(66,10156,1),(66,10158,1),(66,10160,1),(66,10162,1),(66,10167,1),(66,12461,1),(66,13412,1598259600),(66,13413,1597914000),(66,14897,5),(66,14898,5),(66,14899,1598346000),(66,50702,2),(66,50722,0),(66,98231521,0),(67,3251,0),(67,3310,1598275478),(67,10148,1),(67,10150,1),(67,10152,1),(67,10154,1),(67,10156,1),(67,10158,1),(67,10160,1),(67,10162,1),(67,10167,1),(67,12461,1),(67,13412,1598259600),(67,13413,1597914000),(67,14897,5),(67,14898,5),(67,14899,1598346000),(67,50702,2),(67,50722,0),(67,70028,1),(67,98231521,0),(68,3251,0),(68,3310,1598275503),(68,10148,1),(68,10150,1),(68,10152,1),(68,10154,1),(68,10156,1),(68,10158,1),(68,10160,1),(68,10162,1),(68,10167,1),(68,12461,1),(68,13412,1598259600),(68,13413,1597914000),(68,14897,5),(68,14898,5),(68,14899,1598346000),(68,20279,2),(68,38412,0),(68,50702,2),(68,50722,0),(68,98231521,0),(69,3251,0),(69,3310,1598050979),(69,13413,1598000400),(69,14898,0),(69,50722,1),(69,98231521,0),(70,1,1598060760),(70,3251,0),(70,3310,1598383484),(70,10148,1),(70,10150,1),(70,10152,1),(70,10154,1),(70,10156,1),(70,10158,1),(70,10160,1),(70,10162,1),(70,10167,1),(70,12349,51),(70,12461,1),(70,13413,1598346000),(70,14898,0),(70,20279,2),(70,30018,1),(70,38412,0),(70,50702,2),(70,50722,1),(70,70014,1),(70,99963,1),(70,99965,1),(70,99966,1),(70,100157,1),(70,98231521,0),(71,3251,0),(71,3310,1598126610),(71,13413,1598086800),(71,14898,0),(71,50722,0),(71,98231521,0),(72,3251,0),(72,3310,1598138825),(72,13413,1598086800),(72,14898,0),(72,50722,1),(72,98231521,0),(73,3251,0),(73,3310,1598195769),(73,10148,1),(73,10150,1),(73,10152,1),(73,10154,1),(73,10156,1),(73,10158,1),(73,10160,1),(73,10162,1),(73,10167,1),(73,12461,1),(73,13413,1598173200),(73,14898,0),(73,50722,0),(73,98231521,0),(74,3251,0),(74,3310,1598198694),(74,13413,1598173200),(74,14898,0),(74,50722,1),(74,98231521,0),(76,3251,0),(76,3310,1598245582),(76,13413,1598173200),(76,14898,0),(76,50722,0),(76,98231521,0),(77,3251,0),(77,3310,1598316542),(77,10148,1),(77,10150,1),(77,10152,1),(77,10154,1),(77,10156,1),(77,10158,1),(77,10160,1),(77,10162,1),(77,10167,1),(77,12461,1),(77,13413,1598259600),(77,14898,0),(77,50722,1),(77,98231521,0),(78,3251,0),(78,3310,1598328028),(78,13413,1598259600),(78,14898,0),(78,50700,1),(78,50722,0),(78,98231521,0),(3479,1,1587507668),(3479,3251,1),(3479,3252,1587247546),(3479,3310,1587932238),(3479,6651,1),(3479,6652,1),(3479,6670,1),(3479,6680,1),(3479,6681,1),(3479,6690,1),(3479,6691,1),(3479,12010,1),(3479,12062,1),(3479,13015,1),(3479,13016,1),(3479,13017,1),(3479,13018,1),(3479,13019,1),(3479,13412,1587189600),(3479,13413,1587880800),(3479,14897,1),(3479,14898,0),(3479,14899,1587276000),(3479,17128,41),(3479,20279,125),(3479,38412,-77),(3479,50702,2),(3479,50712,1),(3479,50722,1),(3479,51052,0),(3479,51053,1587248491),(3479,70022,1),(3479,70038,1),(3479,70045,1),(3479,70057,1),(3479,70076,1),(3479,70078,1),(3479,70089,1),(3479,70090,1),(3479,70091,1),(3479,70092,1),(3479,70093,1),(3479,70094,1),(3479,70095,1),(3479,70096,1),(3479,70097,1),(3479,99963,1),(3479,99964,1),(3479,100157,1),(3479,10002011,8),(3479,98231521,0),(3480,3310,1582597561),(3480,12349,34),(3480,13413,1581843602),(3480,14898,0),(3480,17128,32),(3480,50722,0),(3480,99963,1),(3480,98231521,0),(3481,3310,1582681110),(3481,12349,23),(3481,13413,1581843602),(3481,14898,0),(3481,50722,0),(3481,99963,1),(3481,98231521,0),(3485,3310,1582761282),(3485,12349,22),(3485,13413,1581843602),(3485,14898,0),(3485,50722,0),(3485,99963,1),(3485,98231521,0),(3487,1,1587773971),(3487,3251,1),(3487,3252,1587850360),(3487,3310,1587932231),(3487,6651,1),(3487,6652,1),(3487,6662,1),(3487,6670,1),(3487,6680,1),(3487,6681,1),(3487,6690,1),(3487,6691,1),(3487,7010,1),(3487,12010,1),(3487,12062,1),(3487,13015,1),(3487,13016,1),(3487,13017,1),(3487,13018,1),(3487,13019,1),(3487,13413,1587880800),(3487,14898,0),(3487,20279,18),(3487,38412,16),(3487,50702,13),(3487,50712,1),(3487,50722,1),(3487,70014,1),(3487,70045,1),(3487,70051,1),(3487,70057,1),(3487,70061,1),(3487,70097,1),(3487,10002011,155),(3487,98231521,0),(3488,3251,0),(3488,3310,1587249024),(3488,12349,107),(3488,13413,1587189600),(3488,14898,0),(3488,20279,25),(3488,38412,23),(3488,50722,0),(3488,99964,1),(3488,99965,1),(3488,99966,1),(3488,99967,1),(3488,98231521,0),(3489,3251,0),(3489,3310,1586819104),(3489,13413,1586757600),(3489,14898,0),(3489,50722,0),(3489,98231521,0),(3491,1,1587775689),(3491,3251,0),(3491,3310,1587781863),(3491,6662,1),(3491,6680,1),(3491,6681,1),(3491,6690,1),(3491,6691,1),(3491,7010,1),(3491,12349,963),(3491,13015,1),(3491,13016,1),(3491,13017,1),(3491,13018,1),(3491,13019,1),(3491,13413,1587621600),(3491,14898,0),(3491,20279,28),(3491,30018,1),(3491,38412,26),(3491,50722,0),(3491,70041,1),(3491,70043,1),(3491,70045,1),(3491,70061,1),(3491,70084,1),(3491,70085,1),(3491,70093,1),(3491,70095,1),(3491,70096,1),(3491,70097,1),(3491,99963,1),(3491,99964,1),(3491,99965,1),(3491,99966,1),(3491,99967,1),(3491,98231521,0),(3492,3251,0),(3492,3310,1586817042),(3492,13413,1586757600),(3492,14898,0),(3492,50722,1),(3492,98231521,0);
/*!40000 ALTER TABLE `player_storage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `group_id` int NOT NULL DEFAULT '1',
  `account_id` int NOT NULL DEFAULT '0',
  `level` int NOT NULL DEFAULT '1',
  `vocation` int NOT NULL DEFAULT '0',
  `health` int NOT NULL DEFAULT '150',
  `healthmax` int NOT NULL DEFAULT '150',
  `experience` bigint NOT NULL DEFAULT '0',
  `lookbody` int NOT NULL DEFAULT '0',
  `lookfeet` int NOT NULL DEFAULT '0',
  `lookhead` int NOT NULL DEFAULT '0',
  `looklegs` int NOT NULL DEFAULT '0',
  `looktype` int unsigned NOT NULL DEFAULT '136',
  `lookaddons` int NOT NULL DEFAULT '0',
  `maglevel` int NOT NULL DEFAULT '0',
  `mana` int NOT NULL DEFAULT '0',
  `manamax` int NOT NULL DEFAULT '0',
  `manaspent` int unsigned NOT NULL DEFAULT '0',
  `soul` int unsigned NOT NULL DEFAULT '0',
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `town_id` int unsigned NOT NULL DEFAULT '0',
  `posx` int NOT NULL DEFAULT '0',
  `posy` int NOT NULL DEFAULT '0',
  `posz` int NOT NULL DEFAULT '0',
  `conditions` blob NOT NULL,
  `cap` int NOT NULL DEFAULT '0',
  `sex` int NOT NULL DEFAULT '0',
  `lastlogin` bigint unsigned NOT NULL DEFAULT '0',
  `lastip` int unsigned NOT NULL DEFAULT '0',
  `save` tinyint(1) NOT NULL DEFAULT '1',
  `skull` tinyint(1) NOT NULL DEFAULT '0',
  `skulltime` int NOT NULL DEFAULT '0',
  `lastlogout` bigint unsigned NOT NULL DEFAULT '0',
  `blessings` tinyint NOT NULL DEFAULT '0',
  `blessings1` tinyint NOT NULL DEFAULT '0',
  `blessings2` tinyint NOT NULL DEFAULT '0',
  `blessings3` tinyint NOT NULL DEFAULT '0',
  `blessings4` tinyint NOT NULL DEFAULT '0',
  `blessings5` tinyint NOT NULL DEFAULT '0',
  `blessings6` tinyint NOT NULL DEFAULT '0',
  `blessings7` tinyint NOT NULL DEFAULT '0',
  `blessings8` tinyint NOT NULL DEFAULT '0',
  `onlinetime` int NOT NULL DEFAULT '0',
  `deletion` bigint NOT NULL DEFAULT '0',
  `balance` bigint unsigned NOT NULL DEFAULT '0',
  `bonusrerollcount` bigint DEFAULT '0',
  `quick_loot_fallback` tinyint(1) DEFAULT '0',
  `offlinetraining_time` smallint unsigned NOT NULL DEFAULT '43200',
  `offlinetraining_skill` int NOT NULL DEFAULT '-1',
  `stamina` smallint unsigned NOT NULL DEFAULT '2520',
  `skill_fist` int unsigned NOT NULL DEFAULT '10',
  `skill_fist_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_club` int unsigned NOT NULL DEFAULT '10',
  `skill_club_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_sword` int unsigned NOT NULL DEFAULT '10',
  `skill_sword_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_axe` int unsigned NOT NULL DEFAULT '10',
  `skill_axe_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_dist` int unsigned NOT NULL DEFAULT '10',
  `skill_dist_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_shielding` int unsigned NOT NULL DEFAULT '10',
  `skill_shielding_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_fishing` int unsigned NOT NULL DEFAULT '10',
  `skill_fishing_tries` bigint unsigned NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `description` varchar(255) NOT NULL DEFAULT '',
  `comment` text NOT NULL,
  `create_ip` int unsigned NOT NULL DEFAULT '0',
  `create_date` int unsigned NOT NULL DEFAULT '0',
  `hide_char` int NOT NULL DEFAULT '0',
  `cast` tinyint(1) NOT NULL DEFAULT '0',
  `skill_critical_hit_chance` int unsigned NOT NULL DEFAULT '0',
  `skill_critical_hit_chance_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_critical_hit_damage` int unsigned NOT NULL DEFAULT '0',
  `skill_critical_hit_damage_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_life_leech_chance` int unsigned NOT NULL DEFAULT '0',
  `skill_life_leech_chance_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_life_leech_amount` int unsigned NOT NULL DEFAULT '0',
  `skill_life_leech_amount_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_mana_leech_chance` int unsigned NOT NULL DEFAULT '0',
  `skill_mana_leech_chance_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_mana_leech_amount` int unsigned NOT NULL DEFAULT '0',
  `skill_mana_leech_amount_tries` bigint unsigned NOT NULL DEFAULT '0',
  `skill_criticalhit_chance` bigint unsigned NOT NULL DEFAULT '0',
  `skill_criticalhit_damage` bigint unsigned NOT NULL DEFAULT '0',
  `skill_lifeleech_chance` bigint unsigned NOT NULL DEFAULT '0',
  `skill_lifeleech_amount` bigint unsigned NOT NULL DEFAULT '0',
  `skill_manaleech_chance` bigint unsigned NOT NULL DEFAULT '0',
  `skill_manaleech_amount` bigint unsigned NOT NULL DEFAULT '0',
  `xpboost_stamina` smallint DEFAULT NULL,
  `xpboost_value` tinyint DEFAULT NULL,
  `marriage_status` bigint unsigned NOT NULL DEFAULT '0',
  `hide_skills` int DEFAULT NULL,
  `hide_set` int DEFAULT NULL,
  `former` varchar(255) NOT NULL DEFAULT '-',
  `signature` varchar(255) NOT NULL,
  `marriage_spouse` int NOT NULL DEFAULT '-1',
  `loyalty_ranking` tinyint(1) NOT NULL DEFAULT '0',
  `madphp_signature` tinyint NOT NULL DEFAULT '1' COMMENT 'Absolute Mango ¬© MadPHP.org',
  `madphp_signature_bg` varchar(50) NOT NULL COMMENT 'Absolute Mango ¬© MadPHP.org',
  `madphp_signature_eqs` tinyint NOT NULL DEFAULT '0' COMMENT 'Absolute Mango ¬© MadPHP.org',
  `madphp_signature_bars` tinyint NOT NULL DEFAULT '1' COMMENT 'Absolute Mango ¬© MadPHP.org',
  `madphp_signature_cache` int NOT NULL COMMENT 'Absolute Mango ¬© MadPHP.org',
  `lookmount` int NOT NULL DEFAULT '0',
  `sbw_points` int NOT NULL DEFAULT '0',
  `InstantRewardTokens` int DEFAULT NULL,
  `bonus_rerolls` bigint NOT NULL DEFAULT '0',
  `onlinepoint` int DEFAULT '0',
  `onlinepointtrie` int DEFAULT '0',
  `hide_char_items` tinyint NOT NULL DEFAULT '0',
  `tokens` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `account_id` (`account_id`),
  KEY `vocation` (`vocation`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,'Rook Sample',1,1,1,0,150,150,0,106,95,78,116,128,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',6,32369,32241,7,'',400,0,1523386590,2429100989,1,0,0,1523386591,0,1,1,1,1,1,1,1,1,210,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,0,0,0,0,0,0),(2,'CM Pearlz',5,2,2,0,350,350,100,106,95,78,116,266,0,0,205,205,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,569,929,7,'',800,1,1588875108,2280805299,1,0,0,1588875349,0,1,1,1,1,1,1,1,1,81547,0,12000,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',3014692860,1582575134,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3600,50,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,13,1515,0,0),(7,'CM Norwulf',5,7,2,0,150,150,100,106,95,78,116,1243,3,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,566,926,7,_binary '\0\0\0ˇˇˇˇ\Ë\0\0\Z\0\0\0\0\0˛',400,1,1597869951,108445873,1,0,0,1597869968,0,1,1,1,1,1,1,1,1,154764,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',2982180554,1588794925,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,12,2967,0,0),(45,'Mabbaz',1,36,37,0,150,150,0,106,95,78,116,128,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,0,0,0,'',400,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',3206584976,1597619611,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,0,0,0),(46,'Axel Marston',1,37,8,3,185,185,4420,106,95,78,116,128,0,0,40,40,0,1,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,513,1107,7,_binary '\0 \0\0ˇˇˇˇ†\Ò\0\Z\0\0\0\0\0\'\0\0\0\0\0∏\0\0\0\0\0˛',470,1,1598121278,108445873,1,0,0,1598121296,0,1,1,1,1,1,1,1,1,592,0,0,0,0,43200,4,2520,10,0,12,42,10,0,10,0,67,2093,60,10344,10,0,0,'','',2982180358,1597621835,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,346,0,0),(47,'Psilocybe',1,38,21,4,380,380,127037,106,95,78,116,128,0,2,105,105,12240,18,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,439,624,7,_binary '\0 \0\0ˇˇˇˇ∞\÷\0\Z\0\0\0\0\0@\0\0\0\0\0∏\0\0\0\0\0˛\0@\0\0ˇˇˇˇx]\0\Z\0\0\0\0\0\0\0\0¿\‘\0˛',795,1,1597623932,817658280,1,0,0,1597626810,0,1,1,1,1,1,1,1,1,21130,0,2000,0,0,43200,-1,2495,10,0,35,43,10,0,10,0,10,0,33,127,10,0,0,'','',2826550320,1597623039,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,2875,0,10),(48,'Makonheiro',1,39,1,0,150,150,0,106,95,78,116,128,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,461,1021,7,'',400,1,1597680714,1323625672,1,0,0,1597680775,0,1,1,1,1,1,1,1,1,121,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',3370968142,1597680241,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,119,0,0),(49,'Chucky',1,40,47,1,380,380,1544907,114,114,116,114,152,0,45,1142,1210,95912,39,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,515,1107,7,_binary '\0@\0\0ˇˇˇˇ\\0\Z\0\0\0\0\0\0\0\0¿\‘\0˛\0 \0\0ˇˇˇˇhè\0\Z\0\0\0\0\0\‡.\0\0\0\0\0∏\0\0\0\0\0˛\0\0\0\0\0\0\0\0\0\0\0\Z\0\0\0\0\0¢\0\0\0333?\r\0\0`\¬333?\0\0`\¬˛',860,1,1598026897,3955237555,1,0,0,1598027116,0,1,1,1,1,1,1,1,1,39330,0,5,0,0,43200,13,2518,10,0,13,42,10,0,10,0,10,0,25,10484,10,0,0,'','',3005404715,1597684101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,1,2677,0,140),(50,'Vagabs',1,41,30,3,405,405,405374,114,95,116,114,129,0,5,13,370,6280,10,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,513,1107,7,_binary '\0\0\0\0\0\0\0\U\0\0\Z\0\0\0\0\0;\0\0\0öôô>\r\0\0¿¡öôô>\0\0¿¡˛\0 \0\0ˇˇˇˇ\Ë©\0\Z\0\0\0\0\0\'\0\0\0\0\0∏\0\0\0\0\0˛',910,1,1598027122,3955237555,1,0,0,1598027129,0,1,1,1,1,1,1,1,1,54925,0,2000,0,0,43200,4,2520,14,44,12,50,10,0,10,0,72,10973,63,1464,10,0,0,'','',3005404715,1597684153,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,2,3194,0,55),(51,'Kranzix',1,42,1,0,150,150,0,106,95,78,116,128,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,0,0,0,'',400,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',3381985192,1597714339,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,0,0,0),(52,'Dogto',1,43,150,7,1605,1605,54938619,114,116,114,95,134,0,21,2170,2170,1088392,200,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,554,929,7,_binary '\0 \0\0ˇˇˇˇXb	\0\Z\0\0\0\0\0@\0\0\0\0\0\–\0\0\0\0\0˛',3310,1,1598416808,361010363,1,0,0,1598416951,0,4,1,1,1,1,1,1,1,789470,0,328925,0,1,25100,4,2512,23,43,11,49,10,0,10,0,89,37683,75,32316,10,0,0,'','',3147087065,1597812629,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1200,50,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,36,1378,0,155),(53,'Yanmi',1,43,26,4,455,455,246910,106,95,78,116,142,0,2,130,130,5680,100,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,554,918,7,'',920,0,1598416954,361010363,1,0,0,1598416983,0,1,1,1,1,1,1,1,1,12907,0,2000,0,1,41956,2,2520,10,0,12,0,83,4430,10,0,10,0,74,41148,10,0,0,'','',3147087065,1597812647,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,1,503,0,35),(54,'Xavae',1,44,1,0,150,150,0,106,95,78,116,128,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,0,0,0,'',400,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',1841590862,1597844930,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,0,0,0),(55,'Mecha',1,43,32,1,305,305,492733,114,114,114,114,130,0,60,660,760,257971,10,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,515,1107,7,_binary '\0\0\0\0\0\0\0∞6\0\0\Z\0\0\0\0\0ç\0\0\0333?\r\0\0`\¬333?\0\0`\¬˛',710,1,1598417206,361010363,1,0,0,1598417208,0,1,1,1,1,1,1,1,1,12312,0,20,0,0,43200,13,2506,10,24,12,79,10,0,10,0,10,0,29,19372,10,0,0,'','',3147087065,1597867621,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,1906,0,70),(56,'Vokaa',1,45,89,6,521,590,11090435,114,114,114,97,158,0,56,1975,2470,326001,200,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,515,1107,7,_binary '\0 \0\0ˇˇˇˇ\0\‹\0\Z\0\0\0\0\0@\0\0\0\0\0\–\0\0\0\0\0˛\0\0\0ˇˇˇˇ®\ﬁ\0\0\Z\0\0\0\0\0˛\0\0\0\0\0\0\0\ÿ\ƒ\0\Z\0\0\0\0\0\0\0\0\0\n\–\0\0˘ˇˇˇà\0\0\nà\0\0˙ˇˇˇà\0\0\nà\0\0˙ˇˇˇà\0\0\nà\0\0˙ˇˇˇà\0\0\nà\0\0˚ˇˇˇà\0\0\nà\0\0˚ˇˇˇà\0\0\nà\0\0˚ˇˇˇà\0\0\nà\0\0˚ˇˇˇà\0\0\nà\0\0¸ˇˇˇà\0\0\nà\0\0¸ˇˇˇà\0\0\nà\0\0¸ˇˇˇà\0\0\nà\0\0¸ˇˇˇà\0\0\nà\0\0¸ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0˛',1280,0,1598218344,1519470257,1,0,0,1598218469,0,1,0,0,0,0,0,0,0,233873,0,15524,0,1,43200,13,2518,12,62,12,72,16,1464,10,0,10,0,27,48576,10,0,0,'','',2974192961,1597873184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,6,2240,0,125),(57,'Canifre',1,46,1,0,150,150,0,106,95,78,116,128,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,461,1021,7,'',400,1,1597943057,2905424561,1,0,0,1597943118,0,1,1,1,1,1,1,1,1,89,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',2973904301,1597885740,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,119,0,0),(58,'Thalis Likan',1,47,21,1,250,250,129586,106,95,78,116,136,0,9,345,405,3456,10,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,539,923,7,_binary '\0 \0\0ˇˇˇˇñ\0\Z\0\0\0\0\0\‡.\0\0\0\0\0∏\0\0\0\0\0˛\0@\0\0ˇˇˇˇ∏ˇ\0\Z\0\0\0\0\0\0\0\0¿\‘\0˛',600,0,1597955129,2903551667,1,0,0,1597956582,0,1,1,1,1,1,1,1,1,12038,0,2000,0,0,43200,-1,2504,10,0,12,130,10,0,10,0,10,0,15,690,10,0,0,'','',3014529197,1597915718,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,1509,0,10),(59,'Stwozin',1,48,9,0,190,190,9108,106,95,78,116,128,0,0,45,45,0,4,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,469,1048,7,_binary '\0@\0\0ˇˇˇˇ\ÿY\0\0\Z\0\0\0\0\0\0\0\0¿\‘\0˛\0 \0\0ˇˇˇˇ∏ˇ\0\Z\0\0\0\0\0\‡.\0\0\0\0\0p\0\0\0\0\0˛',480,1,1597921802,2734287539,1,0,0,1597922453,0,1,1,1,1,1,1,1,1,1307,0,0,0,0,43200,-1,2515,10,0,12,130,10,0,10,0,10,0,10,0,10,0,0,'','',3018520994,1597920356,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,710,0,0),(60,'Faziny',1,49,9,4,190,190,7956,106,95,78,116,128,0,0,45,45,0,4,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,542,928,7,_binary '\0 \0\0ˇˇˇˇhÉ\n\0\Z\0\0\0\0\0@\0\0\0\0\0∏\0\0\0\0\0˛\0\0\0ˇˇˇˇ\0\0\0\0\Z\0\0\0\0\0˛\0@\0\0ˇˇˇˇx\Ê\0\0\Z\0\0\0\0\0\0\0\0¿\‘\0˛',480,1,1597931679,2510586801,1,0,0,1597931779,0,1,1,1,1,1,1,1,1,466,0,0,0,0,43200,-1,2514,10,0,12,194,10,0,11,46,10,0,11,60,10,0,0,'','',2327456745,1597928483,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,660,0,0),(61,'Drakar',1,49,1,0,150,150,0,106,95,78,116,128,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,461,1021,7,'',400,1,1597931101,2510586801,1,0,0,1597931116,0,1,1,1,1,1,1,1,1,15,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',2327456745,1597928497,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,14,0,0),(62,'Fenry',1,50,8,1,185,185,4420,106,95,78,116,136,0,55,40,40,259328,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,514,1107,7,_binary '\0@\0\0ˇˇˇˇ8J\0\0\Z\0\0\0\0\0\0\0\0¿\‘\0˛',470,0,1598275549,3653014715,1,0,0,1598275572,0,1,1,1,1,1,1,1,1,460,0,0,0,0,41955,13,2520,10,0,12,34,10,0,10,0,10,0,28,1653,10,0,0,'','',3147087065,1597951153,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,275,0,0),(63,'Pupet',1,50,8,1,183,185,4420,106,95,78,116,128,0,55,40,40,254312,1,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,514,1107,7,_binary '\0 \0\0ˇˇˇˇ∞w\n\0\Z\0\0\0\0\0\‡.\0\0\0\0\0∏\0\0\0\0\0˛',470,1,1598275631,3653014715,1,0,0,1598275654,0,1,1,1,1,1,1,1,1,684,0,0,0,0,41937,13,2520,10,0,12,58,10,0,10,0,10,0,28,1197,10,0,0,'','',3147087065,1597951201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,367,0,0),(64,'Man Only',1,50,9,2,179,190,6454,106,95,78,116,128,0,55,45,45,255896,1,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,514,1107,7,_binary '\0 \0\0ˇˇˇˇ\0\Z\0\0\0\0\0\'\0\0\0\0\0∏\0\0\0\0\0˛',480,1,1598275604,3653014715,1,0,0,1598275627,0,1,1,1,1,1,1,1,1,750,0,0,0,0,41935,13,2520,10,0,12,82,10,0,10,0,10,0,28,1341,10,0,0,'','',3147087065,1597951244,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,387,0,0),(65,'Locked',1,50,8,3,185,185,4420,106,95,78,116,128,0,0,40,40,0,1,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,513,1107,7,_binary '\0 \0\0ˇˇˇˇ(†\0\0\Z\0\0\0\0\0\'\0\0\0\0\0∏\0\0\0\0\0˛',470,1,1598275578,3653014715,1,0,0,1598275600,0,1,1,1,1,1,1,1,1,621,0,0,0,0,41939,4,2520,10,0,12,0,10,0,10,0,76,3360,69,20961,10,0,0,'','',3147087065,1597951276,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,343,0,0),(66,'Dragon Claw',1,50,8,4,185,185,4420,106,95,78,116,128,0,0,40,40,0,1,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,509,1107,7,'',470,1,1598275518,3653014715,1,0,0,1598275540,0,1,1,1,1,1,1,1,1,886,0,0,0,0,41953,3,2520,10,0,12,58,10,0,78,4335,10,0,69,21353,10,0,0,'','',3147087065,1597951302,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,403,0,0),(67,'Cadastre',1,50,8,2,185,185,4420,106,95,78,116,128,0,55,40,40,263224,1,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,514,1107,7,_binary '\0 \0\0ˇˇˇˇà\0\Z\0\0\0\0\0\'\0\0\0\0\0∏\0\0\0\0\0˛',470,1,1598275468,3653014715,1,0,0,1598275491,0,1,1,1,1,1,1,1,1,623,0,0,0,0,41954,13,2520,10,0,12,66,10,0,10,0,10,0,28,2005,10,0,0,'','',3147087065,1597951338,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,338,0,0),(68,'Chens',1,50,8,3,185,185,4420,106,95,78,116,128,0,0,40,40,0,1,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,512,1107,7,_binary '\0 \0\0ˇˇˇˇ®\ı\0\Z\0\0\0\0\0\'\0\0\0\0\0∏\0\0\0\0\0˛',470,1,1598275493,3653014715,1,0,0,1598275515,0,1,1,1,1,1,1,1,1,556,0,0,0,0,41954,4,2520,10,0,12,66,10,0,10,0,76,3632,69,21457,10,0,0,'','',3147087065,1597951368,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,329,0,0),(69,'Racha Cuca',1,51,1,0,150,150,0,106,95,78,116,136,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,460,1020,7,'',400,0,1598050969,1066797745,1,0,0,1598051030,0,1,1,1,1,1,1,1,1,199,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',2970261055,1598049850,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,180,0,0),(70,'Arkow Goteph',1,52,52,5,311,405,2095265,106,95,78,116,128,0,51,1360,1360,126756,64,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,514,1107,7,_binary '\0 \0\0ˇˇˇˇPc\0\Z\0\0\0\0\0\'\0\0\0\0\0\–\0\0\0\0\0˛\0\0\0ˇˇˇˇ`\Í\0\0\Z\0\0\0\0\0˛\0@\0\0ˇˇˇˇ`m\0\0\Z\0\0\0\0\0\0\0\0ò:\0\0˛\0\0\0\0\0\0\0ò(\0\Z\0\0\0\0\0\0\0\0\0\nà\0\0¸ˇˇˇà\0\0\nà\0\0¸ˇˇˇà\0\0\nà\0\0¸ˇˇˇà\0\0\nà\0\0¸ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˝ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0˛ˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0\nà\0\0ˇˇˇˇà\0\0˛',910,1,1598383474,3767524533,1,0,0,1598383487,0,1,1,1,1,1,1,1,1,34631,0,1426,0,0,43200,13,2520,10,0,12,56,10,0,10,0,10,0,26,44615,10,0,0,'','',3051130848,1598055090,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,1,2716,0,165),(71,'Bruxo Mau',1,53,6,0,175,175,1768,106,95,78,116,128,0,0,30,30,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,463,1030,7,_binary '\0@\0\0ˇˇˇˇÄØ\0\Z\0\0\0\0\0\0\0\0¿\‘\0˛',450,1,1598126600,3251577994,1,0,0,1598126986,0,1,1,1,1,1,1,1,1,1328,0,0,0,0,43200,-1,2518,10,0,11,62,10,0,10,0,10,0,10,0,10,0,0,'','',2317668289,1598126328,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,385,0,0),(72,'Maha Dima',1,54,1,0,150,150,0,106,95,78,116,136,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,461,1021,7,'',400,0,1598138815,3750980531,1,0,0,1598138876,0,1,1,1,1,1,1,1,1,84,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',3010171871,1598138141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,120,0,0),(73,'Cp Yamato',1,55,8,4,185,185,6367,118,132,85,114,134,0,0,40,40,0,2,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',2,556,932,10,_binary '\0\0\0ˇˇˇˇ`\Í\0\0\Z\0\0\0\0\0˛',470,1,1598195759,1416607163,1,0,0,1598196583,0,1,1,1,1,1,1,1,1,985,0,0,0,0,43200,-1,2519,10,0,12,10,10,0,28,106,10,0,27,456,10,0,0,'','',3149229908,1598195751,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,823,0,0),(74,'Idntknw',1,56,1,0,150,150,0,106,95,78,116,128,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,461,1021,7,'',400,1,1598198715,2875660219,1,0,0,1598198744,0,1,1,1,1,1,1,1,1,29,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',3138873259,1598198421,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,60,0,0),(75,'Lady Tanka',1,57,1,0,150,150,0,106,95,78,116,136,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,0,0,0,'',400,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',3377607370,1598233196,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,0,0,0),(76,'Kina De Bigode',1,58,4,0,165,165,442,126,114,114,126,131,0,0,20,20,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,472,1038,7,_binary '\0@\0\0ˇˇˇˇXå\0\Z\0\0\0\0\0\0\0\0¿\‘\0˛',430,1,1598245572,1105023409,1,0,0,1598245724,0,1,1,1,1,1,1,1,1,230,0,0,0,0,43200,-1,2518,10,0,11,14,10,0,10,0,10,0,10,0,10,0,0,'','',2974932289,1598244395,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,151,0,0),(77,'Commander Giil',1,59,9,0,190,190,7009,106,95,78,116,128,0,0,45,45,0,3,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,461,1019,7,'',480,1,1598316532,2078071485,1,0,0,1598317746,0,1,1,1,1,1,1,1,1,3062,0,0,0,0,43200,-1,2514,10,0,13,39,10,0,10,0,10,0,10,0,10,0,0,'','',3185237115,1598315146,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,1885,0,0),(78,'Bruxinha',1,60,7,0,173,180,3978,106,95,0,116,137,0,0,35,35,0,2,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,451,1047,6,_binary '\0\0\0ˇˇˇˇ\0\0\0\0\Z\0\0\0\0\0˛',460,0,1598328018,2097454257,1,0,0,1598328729,0,1,1,1,1,1,1,1,1,1099,0,0,0,0,43200,-1,2518,10,0,12,58,10,0,10,0,10,0,10,0,10,0,0,'','',2979791997,1598327906,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,711,0,0),(79,'Test Forum',1,61,15,0,150,150,0,106,95,78,116,128,0,0,5,5,0,0,'2020-10-24 18:45:38.075','2020-10-24 18:45:38.013',1,0,0,0,'',400,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43200,-1,2520,10,0,10,0,10,0,10,0,10,0,10,0,10,0,0,'','',3014936805,1603562011,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0,NULL,NULL,'-','',-1,0,1,'',0,1,0,0,0,NULL,0,0,0,0,0);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players_online`
--

DROP TABLE IF EXISTS `players_online`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players_online` (
  `player_id` int NOT NULL,
  PRIMARY KEY (`player_id`)
) ENGINE=MEMORY DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players_online`
--

LOCK TABLES `players_online` WRITE;
/*!40000 ALTER TABLE `players_online` DISABLE KEYS */;
/*!40000 ALTER TABLE `players_online` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sellchar`
--

DROP TABLE IF EXISTS `sellchar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sellchar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `vocation` int NOT NULL,
  `price` int NOT NULL,
  `status` varchar(40) NOT NULL,
  `oldid` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sellchar`
--

LOCK TABLES `sellchar` WRITE;
/*!40000 ALTER TABLE `sellchar` DISABLE KEYS */;
/*!40000 ALTER TABLE `sellchar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_config`
--

DROP TABLE IF EXISTS `server_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `server_config` (
  `config` varchar(50) NOT NULL,
  `value` varchar(256) NOT NULL DEFAULT '',
  PRIMARY KEY (`config`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_config`
--

LOCK TABLES `server_config` WRITE;
/*!40000 ALTER TABLE `server_config` DISABLE KEYS */;
INSERT INTO `server_config` VALUES ('boost_monster','1671'),('boost_monster_name','animated feather'),('boost_monster_url','https://outfits.riansofi.com.br/outfit.php?id=1058&addons=0&head=0&body=0&legs=0&feet=0&mount=0'),('db_version','1'),('double','active'),('motd_hash','a35d8eae88e06c26512d132a0a953ca424c38446'),('motd_num','33'),('players_record','14');
/*!40000 ALTER TABLE `server_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_history`
--

DROP TABLE IF EXISTS `store_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store_history` (
  `accountid` int NOT NULL,
  `mode` tinyint(1) NOT NULL DEFAULT '0',
  `amount` int NOT NULL,
  `coinMode` tinyint NOT NULL DEFAULT '0',
  `description` varchar(255) DEFAULT NULL,
  `cust` int NOT NULL,
  `time` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_history`
--

LOCK TABLES `store_history` WRITE;
/*!40000 ALTER TABLE `store_history` DISABLE KEYS */;
INSERT INTO `store_history` VALUES (2,0,1,0,'XP Boost 50%',-30,1587248491),(2,0,500,0,'Great Mana Keg',-66,1587248557),(2,0,500,0,'Mana Keg',-26,1587248612),(2,0,1,0,'Great Health Cask',-22,1587249079),(2,0,7775,0,'CM Pearlz transferred to CM Norwulf',-7775,1588809002),(7,0,7775,0,'CM Pearlz transferred to CM Norwulf',7775,1588809002),(7,0,250,0,'CM Norwulf transferred to Axel Marston',-250,1588809034),(10,0,250,0,'CM Norwulf transferred to Axel Marston',250,1588809034),(10,0,1,0,'Full Hand of The Inquisition Outfit',-240,1588809050),(2,0,525,0,'CM Pearlz transferred to Imilz',-525,1588860342),(4,0,525,0,'CM Pearlz transferred to Imilz',525,1588860342),(4,0,1,0,'Retro Wizard',-280,1588860414);
/*!40000 ALTER TABLE `store_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `ticket_id` int NOT NULL AUTO_INCREMENT,
  `ticket_subject` varchar(45) NOT NULL DEFAULT '',
  `ticket_author` varchar(255) NOT NULL DEFAULT '',
  `ticket_author_acc_id` int NOT NULL,
  `ticket_last_reply` varchar(45) NOT NULL DEFAULT '',
  `ticket_admin_reply` int NOT NULL,
  `ticket_date` datetime NOT NULL,
  `ticket_ended` varchar(45) NOT NULL DEFAULT '',
  `ticket_status` varchar(45) NOT NULL DEFAULT '',
  `ticket_category` varchar(45) NOT NULL DEFAULT '',
  `ticket_description` text NOT NULL,
  PRIMARY KEY (`ticket_id`) USING BTREE,
  KEY `tickets_ibfk_1_idx` (`ticket_author_acc_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,'Save Server bug','Wake Up',3,'You',0,'2020-05-08 09:08:13','Aug 08 2020','Closed','Report Bug','<p>Aconteceu ontem. e aconteceu hoje, que, deu save server das 6horas da manh&atilde; por&eacute;m o Thoria n&atilde;o voltou a ficar online novamente... meio que ele cai depois do SS.</p>'),(2,'House Clean','Wake Up',3,'You',0,'2020-05-09 09:34:04','Aug 08 2020','Closed','Report Bug','<p>Porfavor ADM, CM algu&eacute;m, os itens da minha house n&atilde;o salvou, deu SaveServer mas n&atilde;o salvou os itens eu perdi muita coisa, perdi os itens do wizard full faltava s&oacute; 9 holy orchids, tinha uma bp de runass, tinha 100k em crystal no ch&atilde;o, tinha 4 golden armor, 2 demon helmet, tinha um lightning robe, boh, uma skulls staff poxa me diz que os itens v&atilde;o ser reposto no meu char porfavor... a bp de runas com potions eu at&eacute; n&atilde;o ligo maiss todo o resto levei horas pra pegar :/<span class=\"descr\" style=\"color: green; font-weight: bold;\"><br /></span></p>');
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets_reply`
--

DROP TABLE IF EXISTS `tickets_reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets_reply` (
  `ticket_replyid` int NOT NULL AUTO_INCREMENT,
  `ticket_id` int NOT NULL,
  `reply_author` varchar(255) DEFAULT NULL,
  `reply_message` text,
  `reply_date` datetime DEFAULT NULL,
  PRIMARY KEY (`ticket_replyid`) USING BTREE,
  KEY `ticket_id_idx` (`ticket_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets_reply`
--

LOCK TABLES `tickets_reply` WRITE;
/*!40000 ALTER TABLE `tickets_reply` DISABLE KEYS */;
/*!40000 ALTER TABLE `tickets_reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tile_store`
--

DROP TABLE IF EXISTS `tile_store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tile_store` (
  `house_id` int NOT NULL,
  `data` longblob NOT NULL,
  KEY `house_id` (`house_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tile_store`
--

LOCK TABLES `tile_store` WRITE;
/*!40000 ALTER TABLE `tile_store` DISABLE KEYS */;
INSERT INTO `tile_store` VALUES (1,_binary '5ñ\0\0\0∫\0'),(1,_binary '7ñ\0\0\0b\0'),(1,_binary ':ñ\0\0\0\⁄\0'),(1,_binary ':ó\0\0\0\€\0'),(1,_binary '7ò\0\0\0*\0'),(1,_binary ':ò\0\0\0*\0'),(2,_binary '*ü\0\0\0S\0'),(2,_binary '+û\0\0\0\„2\0'),(2,_binary '+ü\0\0\0B)\0'),(2,_binary ',ú\0\0\0\Á	\0'),(2,_binary '-ù\0\0\0h,\0'),(2,_binary '-û\0\0\0g	\0'),(2,_binary '.ú\0\0\0\ƒ\"\0'),(2,_binary '.ù\0\0\0ã\0'),(2,_binary '.û\0\0\0\’\0'),(2,_binary '.ü\0\0\0\·+\0'),(2,_binary '/ú\0\0\0\≈\"\0'),(2,_binary '/û\0\0\0Ñ	\0'),(2,_binary '0û\0\0\0\0'),(2,_binary '*†\0\0\03\0'),(2,_binary '*°\0\0\0\‰4\0\0\07\ËE_\0'),(2,_binary '+†\0\0\0#\0'),(2,_binary '+°\0\0\0\Â4\0\0\07\ËE_\0'),(2,_binary ',†\0\0\0ª\0'),(2,_binary '-†\0\0\0˙\0'),(2,_binary '-°\0\0\0\Û\0'),(2,_binary '.†\0\0\0l\0'),(2,_binary '.°\0\0\0h\0'),(2,_binary '/†\0\0\0\Ú\0'),(2,_binary '/°\0\0\0¸R\0'),(3,_binary '*ñ\0\0\0c5\0\0\0W\ËE_\0'),(3,_binary '+ñ\0\0\0d5\0\0\0W\ËE_\0'),(3,_binary ',î\0\0\0ª\0'),(3,_binary '.ï\0\0\0e\0'),(3,_binary '0ñ\0\0\0∫\0'),(4,_binary '5™\0\0\0∫\0'),(5,_binary '1®\0\0\0\⁄\0'),(5,_binary '1©\0\0\0\€\0'),(5,_binary '5™\0\0\0∫\0'),(6,_binary '7™\0\0\0∫\0'),(6,_binary '9™\0\0\0\‡\0'),(6,_binary '9´\0\0\0\‡\0'),(6,_binary ':™\0\0\0\·\0'),(6,_binary ':´\0\0\0\·\0'),(7,_binary ',ú\0\0\0\⁄\0'),(7,_binary ',ù\0\0\0\€\0'),(7,_binary '.û\0\0\0º\0'),(7,_binary '+†\0\0\0∫\0'),(8,_binary '+ñ\0\0\0∫\0'),(8,_binary '/ó\0\0\0\⁄\0'),(8,_binary '-ò\0\0\0∫\0'),(8,_binary '/ò\0\0\0\€\0'),(9,_binary '7Ü\0\0\0º\0'),(9,_binary '9â\0\0\0\⁄\0'),(9,_binary '9ä\0\0\0\€\0'),(9,_binary ':â\0\0\0\⁄\0'),(9,_binary ':ä\0\0\0\€\0'),(10,_binary '7Ñ\0\0\0º\0'),(11,_binary ',Ç\0\0\0\⁄\0'),(11,_binary ',É\0\0\0\€\0'),(11,_binary '.Ç\0\0\0\⁄\0'),(11,_binary '.É\0\0\0\€\0'),(11,_binary '.á\0\0\0º\0'),(11,_binary '0Ñ\0\0\0∫\0'),(12,_binary '9Ü\0\0\0º\0'),(12,_binary '9â\0\0\0\⁄\0'),(12,_binary '9ä\0\0\0\€\0'),(12,_binary ':â\0\0\0\⁄\0'),(12,_binary ':ä\0\0\0\€\0'),(13,_binary '9Ñ\0\0\0º\0'),(14,_binary '-Ñ\0\0\0º\0'),(15,_binary '-Ü\0\0\0º\0'),(15,_binary '.à\0\0\0d\0'),(15,_binary '.ã\0\0\0\‡\0'),(15,_binary '/ã\0\0\0\·\0'),(15,_binary '.å\0\0\0.\0'),(15,_binary '0â\0\0\0/\0'),(15,_binary '0ä\0\0\0/\0'),(16,_binary '9Ü\0\0\0º\0'),(16,_binary '9â\0\0\0\⁄\0'),(16,_binary '9ä\0\0\0\€\0'),(16,_binary ':â\0\0\0\⁄\0'),(16,_binary ':ä\0\0\0\€\0'),(17,_binary '9Ñ\0\0\0º\0'),(18,_binary '.É\0\0\0b\0'),(18,_binary '-Ö\0\0\0º\0'),(18,_binary '.â\0\0\0º\0'),(18,_binary '0Ñ\0\0\0∫\0'),(19,_binary '&â\0\0\0\⁄\0'),(19,_binary '&ä\0\0\0\€\0'),(19,_binary '(å\0\0\0º\0'),(20,_binary 'É\0\0\0\‡\0'),(20,_binary 'É\0\0\0\·\0'),(20,_binary 'á\0\0\0º\0'),(21,_binary '\rÉ\0\0\0\‡\0'),(21,_binary 'É\0\0\0\·\0'),(21,_binary 'á\0\0\0º\0'),(22,_binary '\rÉ\0\0\0\⁄\0'),(22,_binary 'É\0\0\0\⁄\0'),(22,_binary '\rÑ\0\0\0\€\0'),(22,_binary 'Ñ\0\0\0\€\0'),(22,_binary 'á\0\0\0º\0'),(23,_binary 'á\0\0\0º\0'),(24,_binary 'É\0\0\0\⁄\0'),(24,_binary 'Ñ\0\0\0\€\0'),(24,_binary 'á\0\0\0º\0'),(25,_binary 'Ñ\0\0\0\‡\0'),(25,_binary 'Ñ\0\0\0\·\0'),(25,_binary 'á\0\0\0º\0'),(26,_binary 'á\0\0\0º\0'),(27,_binary 'É\0\0\0\‡\0'),(27,_binary 'É\0\0\0\·\0'),(27,_binary 'Ñ\0\0\0\‡\0'),(27,_binary 'á\0\0\0º\0'),(27,_binary 'Ñ\0\0\0\·\0'),(28,_binary '´\0\0\0\‡\0'),(28,_binary '´\0\0\0\·\0'),(28,_binary '\r©\0\0\0∫\0'),(29,_binary '\nß\0\0\0º\0'),(29,_binary '	™\0\0\0\⁄\0'),(29,_binary '	´\0\0\0\€\0'),(30,_binary '\r™\0\0\0\⁄\0'),(30,_binary '\r´\0\0\0\€\0'),(30,_binary '®\0\0\0º\0'),(31,_binary '™\0\0\0\⁄\0'),(31,_binary '´\0\0\0\€\0'),(31,_binary '®\0\0\0º\0'),(32,_binary 'î\0\0\0∫\0'),(32,_binary ' ì\0\0\0∫\0'),(32,_binary '\"í\0\0\0\‡\0'),(32,_binary '\"ì\0\0\0\‡\0'),(32,_binary '#í\0\0\0\·\0'),(32,_binary '#ì\0\0\0\·\0'),(33,_binary 'õ\0\0\0º\0'),(33,_binary 'ü\0\0\0º\0'),(33,_binary '†\0\0\0\⁄\0'),(33,_binary '°\0\0\0\€\0'),(34,_binary 'ì\0\0\0∫\0'),(34,_binary '\"í\0\0\0\‡\0'),(34,_binary '\"ì\0\0\0\‡\0'),(34,_binary '#í\0\0\0\·\0'),(34,_binary '#ì\0\0\0\·\0'),(34,_binary ' î\0\0\0∫\0'),(35,_binary 'õ\0\0\0º\0'),(35,_binary '°\0\0\0\‡\0'),(35,_binary '°\0\0\0\·\0'),(35,_binary '†\0\0\0∫\0'),(36,_binary 'ë\0\0\0º\0'),(36,_binary 'ì\0\0\0d\0'),(37,_binary 'õ\0\0\0\⁄\0'),(37,_binary 'õ\0\0\0\⁄\0'),(37,_binary 'ú\0\0\0\€\0'),(37,_binary 'ú\0\0\0\€\0'),(37,_binary 'û\0\0\0∫\0'),(38,_binary 'ë\0\0\0∫\0'),(38,_binary '\nï\0\0\0\⁄\0'),(38,_binary '\nñ\0\0\0\€\0'),(38,_binary 'î\0\0\0d\0'),(39,_binary 'ú\0\0\0º\0'),(2873,_binary 'û\¬\0\0\0\‡\0'),(2873,_binary 'ü\¬\0\0\0\·\0'),(2873,_binary 'ù\ƒ\0\0\0˚(\0'),(2873,_binary '°¡\0\0\0\Á(\0'),(2873,_binary '§\¬\0\0\0\⁄\0'),(2873,_binary '§\√\0\0\0\€\0'),(2873,_binary '•\√\0\0\0˚(\0'),(2874,_binary '†\œ\0\0\0˙(\0'),(2874,_binary 'ù\”\0\0\0\(\0'),(2874,_binary 'û\–\0\0\0\⁄\0'),(2874,_binary 'û\—\0\0\0\€\0'),(2874,_binary 'ü\–\0\0\0\⁄\0'),(2874,_binary 'ü\—\0\0\0\€\0'),(2874,_binary 'ù\‘\0\0\0˚(\0'),(2874,_binary '£\”\0\0\0˚(\0'),(2874,_binary '†\÷\0\0\0˙(\0'),(2875,_binary 'û\€\0\0\0˙(\0'),(2875,_binary 'ù\›\0\0\0˚(\0'),(2875,_binary 'û\‹\0\0\0\⁄\0'),(2875,_binary 'û\›\0\0\0\€\0'),(2875,_binary '†\€\0\0\0\Á(\0'),(2876,_binary '•\€\0\0\0˙(\0'),(2876,_binary '•\€\0\0\0\Á(\0'),(2876,_binary 'ß\€\0\0\0˙(\0'),(2876,_binary 'ß\‹\0\0\0\⁄\0'),(2876,_binary 'ß\›\0\0\0\€\0'),(2876,_binary '®\‹\0\0\0\⁄\0'),(2876,_binary '®\›\0\0\0\€\0'),(2876,_binary '©\ﬁ\0\0\0˚(\0'),(2877,_binary 'ß\·\0\0\0\⁄\0'),(2877,_binary 'ß\‚\0\0\0\€\0'),(2877,_binary '®\·\0\0\0\⁄\0'),(2877,_binary '®\‚\0\0\0\€\0'),(2877,_binary '©\„\0\0\0˚(\0'),(2877,_binary '®\·\0\0\0\⁄\0'),(2877,_binary '®\‚\0\0\0\€\0'),(2877,_binary '©\‚\0\0\0˚(\0'),(2877,_binary '•\Ê\0\0\0˙(\0'),(2877,_binary '•\Ê\0\0\0\Á(\0'),(2877,_binary '¶\Ê\0\0\0˙(\0'),(2878,_binary 'ù\„\0\0\0˚(\0'),(2878,_binary 'û\·\0\0\0\⁄\0'),(2878,_binary 'û\‚\0\0\0\€\0'),(2878,_binary 'ù\„\0\0\0˚(\0'),(2878,_binary 'ü\Ê\0\0\0˙(\0'),(2878,_binary 'ü\Ê\0\0\0˙(\0'),(2878,_binary '†\Ê\0\0\0\Á(\0'),(2879,_binary 'û\Î\0\0\0˙(\0'),(2879,_binary 'ü\Î\0\0\0\Á(\0'),(2879,_binary '¢\Ó\0\0\0˚(\0'),(2879,_binary 'ù\\0\0\0\‡\0'),(2879,_binary 'û\\0\0\0\·\0'),(2879,_binary '†\Ò\0\0\0˙(\0'),(2880,_binary 'ö\Î\0\0\0\Á(\0'),(2880,_binary 'ó\Ó\0\0\0˚(\0'),(2880,_binary 'ò\Ï\0\0\0\⁄\0'),(2880,_binary 'ò\Ì\0\0\0\€\0'),(2880,_binary 'õ\Ò\0\0\0˙(\0'),(2881,_binary 'ô\Î\0\0\0˙(\0'),(2881,_binary 'ü\Î\0\0\0˙(\0'),(2881,_binary 'ò\Ï\0\0\0\⁄\0'),(2881,_binary 'ò\Ì\0\0\0\€\0'),(2881,_binary 'ö\Ï\0\0\0\⁄\0'),(2881,_binary 'ö\Ì\0\0\0\€\0'),(2881,_binary 'ù\Ó\0\0\0\(\0'),(2881,_binary '¢\Ó\0\0\0\(\0'),(2881,_binary 'ô\Ò\0\0\0˙(\0'),(2881,_binary 'ú\Ò\0\0\0˙(\0'),(2881,_binary '°\Ò\0\0\0˙(\0'),(2882,_binary '}\’\0\0\0\⁄\0'),(2882,_binary '}\÷\0\0\0\€\0'),(2882,_binary '~\’\0\0\0\⁄\0'),(2882,_binary '~\÷\0\0\0\€\0'),(2882,_binary '|\Ÿ\0\0\0q\0'),(2882,_binary '~\Ÿ\0\0\0˙(\0'),(2883,_binary 'o\◊\0\0\0˚(\0'),(2883,_binary 'p\’\0\0\0\⁄\0'),(2883,_binary 'p\÷\0\0\0\€\0'),(2883,_binary 'v\’\0\0\0\⁄\0'),(2883,_binary 'v\÷\0\0\0\€\0'),(2883,_binary 's\Ÿ\0\0\0\Á(\0'),(2883,_binary 'u\Ÿ\0\0\0˙(\0'),(2884,_binary 's\Œ\0\0\0\Á(\0'),(2884,_binary 'u\Œ\0\0\0˙(\0'),(2884,_binary 'o\–\0\0\0˚(\0'),(2884,_binary 'p\”\0\0\0\‡\0'),(2884,_binary 'q\”\0\0\0\·\0'),(2884,_binary 's\—\0\0\0d\0'),(2885,_binary 'z\Œ\0\0\0˙(\0'),(2885,_binary '|\Œ\0\0\0\Á(\0'),(2885,_binary 'y\”\0\0\0\‡\0'),(2885,_binary 'z\”\0\0\0\·\0'),(2885,_binary '|\—\0\0\0d\0'),(2886,_binary 'a\Œ\0\0\0¯(\0'),(2886,_binary 'a\œ\0\0\0\⁄\0'),(2886,_binary 'c\œ\0\0\0\⁄\0'),(2886,_binary '^\—\0\0\0\(\0'),(2886,_binary 'a\–\0\0\0\€\0'),(2886,_binary 'c\–\0\0\0\€\0'),(2887,_binary '^\◊\0\0\0˘(\0'),(2887,_binary 'c\’\0\0\0\⁄\0'),(2887,_binary 'c\÷\0\0\0\€\0'),(2887,_binary '`\Ÿ\0\0\0\Á(\0'),(2887,_binary 'b\Ÿ\0\0\0¯(\0'),(2888,_binary 'e\’\0\0\0\⁄\0'),(2888,_binary 'e\÷\0\0\0\€\0'),(2888,_binary 'k\÷\0\0\0\(\0'),(2888,_binary 'k\◊\0\0\0˘(\0'),(2888,_binary 'f\Ÿ\0\0\0¯(\0'),(2888,_binary 'j\Ÿ\0\0\0¯(\0'),(2889,_binary 'e\’\0\0\0\⁄\0'),(2889,_binary 'e\÷\0\0\0\€\0'),(2889,_binary 'g\◊\0\0\0\Á(\0'),(2889,_binary 'i\◊\0\0\0¯(\0'),(2890,_binary 'c\”\0\0\0\⁄\0'),(2890,_binary 'a\‘\0\0\0˘(\0'),(2890,_binary 'a\’\0\0\0\(\0'),(2890,_binary 'c\‘\0\0\0\€\0'),(2891,_binary 'c\Œ\0\0\0¯(\0'),(2891,_binary 'c\œ\0\0\0\⁄\0'),(2891,_binary 'a\–\0\0\0\(\0'),(2891,_binary 'c\–\0\0\0\€\0'),(2892,_binary 'e\«\0\0\0\⁄\0'),(2892,_binary 'c\ \0\0\0¯(\0'),(2892,_binary 'd\ \0\0\0\Á(\0'),(2892,_binary 'e\»\0\0\0\€\0'),(2893,_binary 'd\¬\0\0\0\‡\0'),(2893,_binary 'd\√\0\0\0\‡\0'),(2893,_binary 'e\¬\0\0\0\·\0'),(2893,_binary 'e\√\0\0\0\·\0'),(2893,_binary 'a\ƒ\0\0\0\(\0'),(2893,_binary 'a\≈\0\0\0˘(\0'),(2894,_binary 'aø\0\0\0˘(\0'),(2894,_binary 'cº\0\0\0\Á(\0'),(2894,_binary 'eø\0\0\0\⁄\0'),(2894,_binary 'e¿\0\0\0\€\0'),(2895,_binary 'gø\0\0\0\⁄\0'),(2895,_binary 'iº\0\0\0¯(\0'),(2895,_binary 'kø\0\0\0\Ó(\0'),(2895,_binary 'g¿\0\0\0\€\0'),(2896,_binary 'g\¬\0\0\0\‡\0'),(2896,_binary 'g\√\0\0\0\‡\0'),(2896,_binary 'h\¬\0\0\0\·\0'),(2896,_binary 'h\√\0\0\0\·\0'),(2896,_binary 'k\√\0\0\0˘(\0'),(2896,_binary 'k\ƒ\0\0\0\(\0'),(2896,_binary 'k\≈\0\0\0˘(\0'),(2897,_binary 'aø\0\0\0˘(\0'),(2897,_binary 'dº\0\0\0¯(\0'),(2897,_binary 'eΩ\0\0\0\⁄\0'),(2897,_binary 'eæ\0\0\0\€\0'),(2897,_binary 'c¡\0\0\0¯(\0'),(2897,_binary 'd¡\0\0\0\Á(\0'),(2898,_binary 'gΩ\0\0\0\⁄\0'),(2898,_binary 'gæ\0\0\0\€\0'),(2898,_binary 'hº\0\0\0¯(\0'),(2898,_binary 'kæ\0\0\0˘(\0'),(2898,_binary 'i¡\0\0\0\Á(\0'),(2898,_binary 'j¡\0\0\0¯(\0'),(2898,_binary 'k¿\0\0\0˘(\0'),(2899,_binary 'qΩ\0\0\0\⁄\0'),(2899,_binary 'qæ\0\0\0\€\0'),(2899,_binary 'sΩ\0\0\0\⁄\0'),(2899,_binary 'sæ\0\0\0\€\0'),(2899,_binary 'r\¬\0\0\0\Á(\0'),(2900,_binary 'xΩ\0\0\0\⁄\0'),(2900,_binary 'xæ\0\0\0\€\0'),(2900,_binary 'v\¬\0\0\0\Á(\0'),(2901,_binary 'zΩ\0\0\0\⁄\0'),(2901,_binary 'zæ\0\0\0\€\0'),(2901,_binary '|æ\0\0\0\(\0'),(2901,_binary '|\¬\0\0\0\Á(\0'),(2902,_binary '`≠\0\0\0\⁄\0'),(2902,_binary '`Æ\0\0\0\€\0'),(2902,_binary 'a≠\0\0\0\⁄\0'),(2902,_binary 'aÆ\0\0\0\€\0'),(2902,_binary '`≠\0\0\0\⁄\0'),(2902,_binary '`Æ\0\0\0\€\0'),(2902,_binary 'b¨\0\0\0¯(\0'),(2902,_binary 'd¨\0\0\0¯(\0'),(2902,_binary 'f≠\0\0\0\⁄\0'),(2902,_binary 'fÆ\0\0\0\€\0'),(2902,_binary 'mØ\0\0\0˘(\0'),(2902,_binary 'm≤\0\0\0˘(\0'),(2902,_binary 'a¥\0\0\0¯(\0'),(2902,_binary 'a¥\0\0\0¯(\0'),(2902,_binary 'b¥\0\0\0\Á(\0'),(2902,_binary 'c¥\0\0\0\Á(\0'),(2902,_binary 'd¥\0\0\0¯(\0'),(2902,_binary 'd¥\0\0\0¯(\0'),(2902,_binary 'i¥\0\0\0¯(\0'),(2902,_binary 'l¥\0\0\0¯(\0'),(2903,_binary 'i¨\0\0\0¯(\0'),(2903,_binary 'k¨\0\0\0¯(\0'),(2903,_binary 'mÆ\0\0\0\(\0'),(2903,_binary 'mØ\0\0\0˘(\0'),(2903,_binary 'h±\0\0\0\⁄\0'),(2903,_binary 'h≤\0\0\0\€\0'),(2903,_binary 'i±\0\0\0\⁄\0'),(2903,_binary 'i≤\0\0\0\€\0'),(2903,_binary 'j∞\0\0\0\Á(\0'),(2903,_binary 'm≤\0\0\0˘(\0'),(2903,_binary 'i¥\0\0\0¯(\0'),(2903,_binary 'l¥\0\0\0¯(\0'),(2904,_binary 't´\0\0\0\(\0'),(2904,_binary 'x™\0\0\0\‡\0'),(2904,_binary 'y™\0\0\0\·\0'),(2905,_binary 'ãØ\0\0\0\⁄\0'),(2905,_binary 'åÆ\0\0\0˙(\0'),(2905,_binary 'ä±\0\0\0˚(\0'),(2905,_binary 'ã∞\0\0\0\€\0'),(2905,_binary 'ç≥\0\0\0\Á(\0'),(2906,_binary 'íÆ\0\0\0˙(\0'),(2906,_binary 'ìØ\0\0\0\⁄\0'),(2906,_binary 'ë≥\0\0\0˙(\0'),(2906,_binary 'í≥\0\0\0\Á(\0'),(2906,_binary 'ì∞\0\0\0\€\0'),(2907,_binary 'óÆ\0\0\0˙(\0'),(2907,_binary 'òØ\0\0\0\⁄\0'),(2907,_binary 'ñ≥\0\0\0\Á(\0'),(2907,_binary 'ó≥\0\0\0˙(\0'),(2907,_binary 'ò∞\0\0\0\€\0'),(2907,_binary 'ô±\0\0\0˚(\0'),(2908,_binary 'ñÆ\0\0\0˙(\0'),(2908,_binary 'òØ\0\0\0\⁄\0'),(2908,_binary 'ó≥\0\0\0\Á(\0'),(2908,_binary 'ò∞\0\0\0\€\0'),(2908,_binary 'ò≥\0\0\0˙(\0'),(2908,_binary 'ô±\0\0\0˚(\0'),(2909,_binary 'êØ\0\0\0\⁄\0'),(2909,_binary 'íÆ\0\0\0˙(\0'),(2909,_binary 'ê∞\0\0\0\€\0'),(2909,_binary 'ë≥\0\0\0˙(\0'),(2909,_binary 'í≥\0\0\0\Á(\0'),(2910,_binary 'ãØ\0\0\0\⁄\0'),(2910,_binary 'åÆ\0\0\0˙(\0'),(2910,_binary 'ä±\0\0\0˚(\0'),(2910,_binary 'ã∞\0\0\0\€\0'),(2910,_binary 'å≥\0\0\0˙(\0'),(2910,_binary 'ç≥\0\0\0\Á(\0'),(2911,_binary 'ü∂\0\0\0˙(\0'),(2911,_binary 'ùπ\0\0\0˚(\0'),(2911,_binary 'üª\0\0\0˙(\0'),(2911,_binary '†∂\0\0\0\Á(\0'),(2911,_binary '°∑\0\0\0\⁄\0'),(2911,_binary '¢∑\0\0\0\⁄\0'),(2911,_binary '°∏\0\0\0\€\0'),(2911,_binary '¢∏\0\0\0\€\0'),(2913,_binary '\"c\0\0\0∫\0'),(2914,_binary '-b\0\0\0l\0'),(2914,_binary '(d\0\0\0\⁄\0'),(2914,_binary '(e\0\0\0\€\0'),(2914,_binary ',e\0\0\0º\0'),(2914,_binary ')h\0\0\0&\0'),(2914,_binary '+h\0\0\0º\0'),(2915,_binary '/c\0\0\0\‡\0'),(2915,_binary '/d\0\0\0\‡\0'),(2915,_binary '0c\0\0\0\·\0'),(2915,_binary '0d\0\0\0\·\0'),(2915,_binary '2d\0\0\0∫\0'),(2915,_binary '5e\0\0\0\'\0'),(2915,_binary '5g\0\0\0\'\0'),(2915,_binary '1h\0\0\0&\0'),(2915,_binary '3h\0\0\0º\0'),(2916,_binary '/f\0\0\0∫\0'),(2916,_binary '3c\0\0\0\⁄\0'),(2916,_binary '4c\0\0\0\⁄\0'),(2916,_binary '3d\0\0\0\€\0'),(2916,_binary '4d\0\0\0\€\0'),(2916,_binary '4f\0\0\0º\0'),(2916,_binary '5e\0\0\0\'\0'),(2916,_binary '5g\0\0\0\'\0'),(2916,_binary '1h\0\0\0&\0'),(2916,_binary '4h\0\0\0&\0'),(2917,_binary '+c\0\0\0\⁄\0'),(2917,_binary ',c\0\0\0\⁄\0'),(2917,_binary '*f\0\0\0b\0'),(2917,_binary '+d\0\0\0\€\0'),(2917,_binary ',d\0\0\0\€\0'),(2917,_binary '-f\0\0\0∫\0'),(2917,_binary ')h\0\0\0D\0'),(2917,_binary ',h\0\0\0&\0'),(2918,_binary 'En\0\0\0\‡\0'),(2918,_binary 'Eo\0\0\0\‡\0'),(2918,_binary 'Fn\0\0\0\·\0'),(2918,_binary 'Fo\0\0\0\·\0'),(2918,_binary 'Go\0\0\0+\0'),(2918,_binary 'Dr\0\0\0\Í\0'),(2918,_binary 'Gp\0\0\0+\0'),(2919,_binary 'Fn\0\0\0\⁄\0'),(2919,_binary 'Fo\0\0\0\€\0'),(2919,_binary 'Go\0\0\0+\0'),(2919,_binary 'Dp\0\0\0d\0'),(2919,_binary 'Fr\0\0\0\Í\0'),(2919,_binary 'Gp\0\0\0+\0'),(2920,_binary 'As\0\0\0\‡\0'),(2920,_binary 'Bs\0\0\0\·\0'),(2920,_binary 'Dt\0\0\0\Û\0'),(2921,_binary '@y\0\0\0∫\0'),(2921,_binary 'By\0\0\0b\0'),(2921,_binary 'Ey\0\0\0∫\0'),(2921,_binary 'Fz\0\0\0\‡\0'),(2921,_binary 'Gz\0\0\0\·\0'),(2922,_binary '0Ä\0\0\0º\0'),(2922,_binary '1Ç\0\0\0\⁄\0'),(2922,_binary '1É\0\0\0\€\0'),(2923,_binary '+Ä\0\0\0º\0'),(2923,_binary ',Ç\0\0\0\⁄\0'),(2923,_binary ',É\0\0\0\€\0'),(2924,_binary '#v\0\0\0\‡\0'),(2924,_binary '$v\0\0\0\·\0'),(2924,_binary '(w\0\0\0\'\0'),(2924,_binary '$z\0\0\0&\0'),(2924,_binary '&z\0\0\0º\0'),(2924,_binary '(y\0\0\0\'\0'),(2925,_binary '.v\0\0\0\‡\0'),(2925,_binary '/v\0\0\0\·\0'),(2925,_binary ',z\0\0\0&\0'),(2925,_binary '.z\0\0\0º\0'),(2925,_binary '0w\0\0\0\'\0'),(2925,_binary '0y\0\0\0\'\0'),(2926,_binary '/p\0\0\0l\0'),(2927,_binary '*p\0\0\0l\0'),(2927,_binary '*t\0\0\0.\0'),(2927,_binary '+t\0\0\0.\0'),(2928,_binary '&p\0\0\0l\0'),(2929,_binary '/p\0\0\0l\0'),(2929,_binary '/t\0\0\0.\0'),(2929,_binary '0t\0\0\0.\0'),(2930,_binary '&p\0\0\0l\0'),(2930,_binary '%t\0\0\0.\0'),(2930,_binary '&t\0\0\0.\0'),(2931,_binary '*p\0\0\0l\0'),(2931,_binary '*t\0\0\0.\0'),(2931,_binary '+t\0\0\0.\0'),(2984,_binary 'î)\0\0\0\⁄\0'),(2984,_binary 'î*\0\0\0\€\0'),(2984,_binary 'ï,\0\0\0ÉM\0'),(2985,_binary 'õ)\0\0\0\⁄\0'),(2985,_binary 'õ*\0\0\0\€\0'),(2985,_binary 'ö,\0\0\0ÉM\0'),(2986,_binary 'ó/\0\0\0åM\0'),(2986,_binary 'ö/\0\0\0\⁄\0'),(2986,_binary 'õ/\0\0\0\⁄\0'),(2986,_binary 'ö0\0\0\0\€\0'),(2986,_binary 'õ0\0\0\0\€\0'),(2987,_binary 'ó*\0\0\0çM\0'),(2987,_binary 'ó+\0\0\0çM\0'),(2987,_binary 'î)\0\0\0\⁄\0'),(2987,_binary 'î*\0\0\0\€\0'),(2987,_binary 'ò*\0\0\0çM\0'),(2987,_binary 'ò+\0\0\0çM\0'),(2987,_binary 'ï,\0\0\0ÉM\0'),(2987,_binary 'ö,\0\0\0\⁄\0'),(2987,_binary 'ö-\0\0\0\€\0'),(2987,_binary 'õ,\0\0\0\⁄\0'),(2987,_binary 'õ-\0\0\0\€\0'),(2987,_binary 'ö,\0\0\0\⁄\0'),(2987,_binary 'ö-\0\0\0\€\0'),(2987,_binary 'õ,\0\0\0\⁄\0'),(2987,_binary 'õ-\0\0\0\€\0'),(2988,_binary 'ï,\0\0\0ÉM\0'),(2989,_binary '§+\0\0\0\‡\0'),(2989,_binary '•+\0\0\0\·\0'),(2989,_binary 'ß*\0\0\0åM\0'),(2990,_binary 'ß/\0\0\0åM\0'),(2990,_binary 'ß/\0\0\0åM\0'),(2990,_binary '®/\0\0\0åM\0'),(2990,_binary '´/\0\0\0\⁄\0'),(2990,_binary '™/\0\0\0\⁄\0'),(2990,_binary '´/\0\0\0\⁄\0'),(2990,_binary '™-\0\0\0ÉM\0'),(2990,_binary '´0\0\0\0\€\0'),(2990,_binary '™0\0\0\0\€\0'),(2990,_binary '´0\0\0\0\€\0'),(2991,_binary '§*\0\0\0\⁄\0'),(2991,_binary '§+\0\0\0\€\0'),(2991,_binary 'ß+\0\0\0åM\0'),(2992,_binary '≥+\0\0\0\⁄\0'),(2992,_binary '≤+\0\0\0ÉM\0'),(2992,_binary 'µ*\0\0\0åM\0'),(2992,_binary 'µ+\0\0\0åM\0'),(2992,_binary '¥+\0\0\0\⁄\0'),(2992,_binary '∞-\0\0\0\‡\0'),(2992,_binary '±-\0\0\0\·\0'),(2992,_binary '≤,\0\0\0åM\0'),(2992,_binary '±.\0\0\0ÇM\0'),(2992,_binary '≥,\0\0\0\€\0'),(2992,_binary '±.\0\0\0ÉM\0'),(2992,_binary '¥,\0\0\0\€\0'),(2992,_binary '¥.\0\0\0ÉM\0'),(2992,_binary '≥0\0\0\0\‡\0'),(2992,_binary '¥0\0\0\0\·\0'),(2993,_binary 'æ,\0\0\0åM\0'),(2993,_binary '\¬+\0\0\0\⁄\0'),(2993,_binary '\¬,\0\0\0\€\0'),(2994,_binary 'æ0\0\0\0åM\0'),(2994,_binary '\¬/\0\0\0\⁄\0'),(2994,_binary '\¬0\0\0\0\€\0'),(2995,_binary 'ø.\0\0\0\⁄\0'),(2995,_binary 'ø/\0\0\0\€\0'),(2995,_binary 'æ0\0\0\0åM\0'),(2995,_binary '¿.\0\0\0\⁄\0'),(2995,_binary '¿/\0\0\0\€\0'),(2995,_binary '¡-\0\0\0ÉM\0'),(2995,_binary '\¬/\0\0\0\⁄\0'),(2995,_binary '\¬0\0\0\0\€\0'),(2996,_binary '¡ \0\0\0åM\0'),(2996,_binary '\ƒ \0\0\0ÉM\0'),(2996,_binary '\∆!\0\0\0\⁄\0'),(2996,_binary '\∆\"\0\0\0\€\0'),(2997,_binary '\ƒ\0\0\0åM\0'),(2997,_binary '\∆\0\0\0\⁄\0'),(2997,_binary '\∆\0\0\0\€\0'),(2997,_binary '¡\0\0\0åM\0'),(2997,_binary '\ƒ\0\0\0ÉM\0'),(2998,_binary '∂\0\0\0åM\0'),(2998,_binary 'ª\0\0\0ÉM\0'),(2998,_binary 'º\0\0\0\⁄\0'),(2998,_binary 'º\0\0\0\€\0'),(2999,_binary '≠\0\0\0åM\0'),(2999,_binary '∞\0\0\0\⁄\0'),(2999,_binary '∞\0\0\0\€\0'),(3000,_binary '≠\0\0\0åM\0'),(3000,_binary '∞\0\0\0\⁄\0'),(3000,_binary '∞\0\0\0\€\0'),(3001,_binary '≠\0\0\0åM\0'),(3001,_binary '∞\0\0\0\⁄\0'),(3001,_binary '∞\0\0\0\€\0'),(3002,_binary '¶\0\0\0\⁄\0'),(3002,_binary '¶\0\0\0\€\0'),(3002,_binary '©\0\0\0åM\0'),(3003,_binary '¶\0\0\0\⁄\0'),(3003,_binary '¶\0\0\0\€\0'),(3003,_binary '©\0\0\0åM\0'),(3004,_binary '¶\0\0\0\⁄\0'),(3004,_binary '¶\0\0\0\€\0'),(3004,_binary '©\0\0\0åM\0'),(3005,_binary 'ß\r\0\0\0ÉM\0'),(3005,_binary '®\0\0\0\⁄\0'),(3005,_binary '®\0\0\0\€\0'),(3005,_binary '©\0\0\0åM\0'),(3005,_binary 'ß\0\0\0ÉM\0'),(3006,_binary '≠\0\0\0åM\0'),(3006,_binary 'Ø\r\0\0\0ÉM\0'),(3006,_binary '∞\0\0\0\⁄\0'),(3006,_binary '∞\0\0\0\€\0'),(3006,_binary 'Ø\0\0\0ÉM\0'),(3007,_binary '≠\0\0\0åM\0'),(3007,_binary 'Ø\r\0\0\0ÉM\0'),(3007,_binary '∞\0\0\0\⁄\0'),(3007,_binary '∞\0\0\0\€\0'),(3008,_binary '™\r\0\0\0åM\0'),(3008,_binary '™\0\0\0åM\0'),(3009,_binary 'Æ\0\0\0\⁄\0'),(3009,_binary '©\0\0\0åM\0'),(3009,_binary '´\r\0\0\0ÉM\0'),(3009,_binary '≠\0\0\0åM\0'),(3009,_binary 'Æ\0\0\0\€\0'),(3009,_binary '∞\0\0\0\⁄\0'),(3009,_binary '∞\0\0\0\€\0'),(3009,_binary '´\0\0\0ÉM\0'),(3010,_binary '\√\0\0\0åM\0'),(3010,_binary '\√\0\0\0åM\0'),(3010,_binary '\√\0\0\0åM\0'),(3010,_binary '\≈\0\0\0\⁄\0'),(3010,_binary '\≈\0\0\0\€\0'),(3010,_binary '\∆\0\0\0\⁄\0'),(3010,_binary '\∆\0\0\0\€\0'),(3010,_binary '\≈\0\0\0\œL\0'),(3011,_binary '¡\0\0\0\‡\0'),(3011,_binary '¡\r\0\0\0\‡\0'),(3011,_binary '\¬\0\0\0\·\0'),(3011,_binary '\¬\r\0\0\0\·\0'),(3011,_binary '\¬\r\0\0\0\œL\0'),(3011,_binary '\ƒ\0\0\0åM\0'),(3011,_binary '\ƒ\0\0\0åM\0'),(3011,_binary '\ƒ\0\0\0åM\0'),(3012,_binary '†˛\0\0\0\‡\0'),(3012,_binary '†ˇ\0\0\0\‡\0'),(3012,_binary '°˛\0\0\0\·\0'),(3012,_binary '°ˇ\0\0\0\·\0'),(3012,_binary '§ˇ\0\0\0åM\0'),(3012,_binary '¢\0\0\0ÉM\0'),(3012,_binary '•\0\0\0\0ÉM\0'),(3012,_binary '•\0\0\0\⁄\0'),(3012,_binary '•\0\0\0\€\0'),(3012,_binary '¶\0\0\0\⁄\0'),(3012,_binary '¶\0\0\0\€\0'),(3013,_binary '§˛\0\0\0\⁄\0'),(3013,_binary '§ˇ\0\0\0\€\0'),(3013,_binary '°\0\0\0\0ÉM\0'),(3013,_binary '£\0\0\0åM\0'),(3013,_binary '•\0\0\0ÉM\0'),(3013,_binary '•\0\0\0\0ÉM\0'),(3013,_binary '•\0\0\0\‡\0'),(3013,_binary '¶\0\0\0\·\0'),(3014,_binary '/p\0\0\0l\0'),(3014,_binary '/t\0\0\0.\0'),(3014,_binary '1r\0\0\0/\0'),(3014,_binary '0t\0\0\0.\0'),(3015,_binary '\"g\0\0\0∫\0'),(3015,_binary '!h\0\0\0&\0'),(3044,_binary 'ô\Z\0\0\0Ω\0'),(3045,_binary 'ñ\0\0\0`!\0'),(3046,_binary 'ú\0\0\0`!\0'),(3046,_binary 'û\0\0\0\0'),(3046,_binary 'û\0\0\0\⁄\0'),(3046,_binary 'û\0\0\0\€\0'),(3047,_binary 'ó&\0\0\0∫\0'),(3048,_binary 'ö&\0\0\0∫\0'),(3049,_binary 'ñ(\0\0\0\⁄\0'),(3049,_binary 'ñ)\0\0\0\€\0'),(3049,_binary 'ó*\0\0\0∫\0'),(3050,_binary 'ö*\0\0\0∫\0'),(3050,_binary 'ú(\0\0\0\⁄\0'),(3050,_binary 'ú)\0\0\0\€\0'),(3051,_binary 'ó,\0\0\0∫\0'),(3052,_binary 'ö,\0\0\0∫\0'),(3053,_binary 'ó)\0\0\0∫\0'),(3054,_binary 'ö)\0\0\0∫\0'),(3055,_binary 'ó&\0\0\0∫\0'),(3056,_binary 'ö&\0\0\0∫\0'),(3057,_binary 'ò2	\0\0\0]!\0'),(3057,_binary 'ô0	\0\0\0\0'),(3057,_binary 'ö0	\0\0\0\0'),(3057,_binary 'õ2	\0\0\0\⁄\0'),(3057,_binary 'õ3	\0\0\0\€\0'),(3058,_binary 'ö,	\0\0\0∫\0'),(3059,_binary 'ó,	\0\0\0∫\0'),(3060,_binary 'ö)	\0\0\0∫\0'),(3061,_binary 'ó)	\0\0\0∫\0'),(3062,_binary 'ö&	\0\0\0∫\0'),(3063,_binary 'ó&	\0\0\0∫\0'),(3064,_binary '•%	\0\0\0\Z\0'),(3064,_binary '•&	\0\0\0\Z\0'),(3064,_binary 'ß$	\0\0\0`!\0'),(3064,_binary '¶)	\0\0\0\⁄\0'),(3064,_binary '¶*	\0\0\0\€\0'),(3064,_binary 'ß(	\0\0\0`!\0'),(3064,_binary '®)	\0\0\0\⁄\0'),(3064,_binary '®*	\0\0\0\€\0'),(3065,_binary '´$	\0\0\0`!\0'),(3065,_binary '¨$	\0\0\0\0'),(3066,_binary '¶	\0\0\0\0'),(3066,_binary 'ß	\0\0\0`!\0'),(3066,_binary '®	\0\0\0\0'),(3066,_binary '¶	\0\0\0\⁄\0'),(3066,_binary 'ß	\0\0\0d\0'),(3066,_binary '¶ 	\0\0\0\€\0'),(3067,_binary '™	\0\0\0\0'),(3067,_binary '´	\0\0\0`!\0'),(3067,_binary '¨	\0\0\0\0'),(3067,_binary '™	\0\0\0\⁄\0'),(3067,_binary '´	\0\0\0d\0'),(3067,_binary '™ 	\0\0\0\€\0'),(3068,_binary 'ê\ı\0\0\0\⁄\0'),(3068,_binary 'ê\ˆ\0\0\0\€\0'),(3068,_binary 'í\ˆ\0\0\0åM\0'),(3068,_binary 'í˙\0\0\0ÉM\0'),(3069,_binary 'û\ˆ\0\0\0åM\0'),(3069,_binary 'û˙\0\0\0ÉM\0'),(3069,_binary '†\ı\0\0\0\⁄\0'),(3069,_binary '†\ˆ\0\0\0\€\0'),(3070,_binary '∑\0\0\0\‡\0'),(3070,_binary '∏\0\0\0\·\0'),(3070,_binary '∫!\0\0\0åM\0'),(3071,_binary 'º\0\0\0\⁄\0'),(3071,_binary 'º\0\0\0\€\0'),(3071,_binary 'º\0\0\0ÉM\0'),(3072,_binary '∑\0\0\0\⁄\0'),(3072,_binary '∑\0\0\0\€\0'),(3072,_binary '∏\0\0\0ÉM\0'),(3073,_binary 'ª\Z\0\0\0ÉM\0'),(3073,_binary 'π\0\0\0åM\0'),(3073,_binary 'ª\0\0\0ÉM\0'),(3073,_binary 'º\0\0\0\⁄\0'),(3073,_binary 'º\0\0\0\€\0'),(3073,_binary 'º\0\0\0\⁄\0'),(3073,_binary 'º\0\0\0\€\0'),(3074,_binary '\√\‰\0\0\0åM\0'),(3074,_binary '\ƒ\‰\0\0\0\‡\0'),(3074,_binary '\≈\‰\0\0\0\·\0'),(3074,_binary '\«\Ê\0\0\0\⁄\0'),(3074,_binary '\«\Á\0\0\0\€\0'),(3074,_binary '\≈\Ë\0\0\0ÉM\0'),(3075,_binary '\∆\⁄\0\0\0\⁄\0'),(3075,_binary '\∆\€\0\0\0\€\0'),(3075,_binary '\«\ÿ\0\0\0ÉM\0'),(3075,_binary '\∆\›\0\0\0\‡\0'),(3075,_binary '\«\›\0\0\0\·\0'),(3075,_binary '\«\ﬁ\0\0\0ÉM\0'),(3075,_binary '\»\‹\0\0\0ÉM\0'),(3076,_binary '\ \”\0\0\0\‡\0'),(3076,_binary '\À\”\0\0\0\·\0'),(3076,_binary '\Õ\“\0\0\0åM\0'),(3076,_binary '\Ã\“\0\0\0N\0'),(3076,_binary '\–\”\0\0\0N\0'),(3077,_binary '¥\…\0\0\0\⁄\0'),(3077,_binary '¥\ \0\0\0\€\0'),(3077,_binary '¥\…\0\0\0\‡\0'),(3077,_binary 'µ\…\0\0\0\·\0'),(3077,_binary '∏\ \0\0\0åM\0'),(3077,_binary '∏\ \0\0\0N\0'),(3077,_binary '∑\Õ\0\0\0N\0'),(3078,_binary 'π\¬\0\0\0åM\0'),(3078,_binary '∏¡\0\0\0N\0'),(3078,_binary 'π\√\0\0\0N\0'),(3078,_binary 'ª\¬\0\0\0N\0'),(3078,_binary '∑\≈\0\0\0\‡\0'),(3078,_binary '∑\≈\0\0\0\‡\0'),(3078,_binary '∏\≈\0\0\0\·\0'),(3078,_binary '∏\≈\0\0\0\·\0'),(3079,_binary 'ª∏\0\0\0\⁄\0'),(3079,_binary 'ªπ\0\0\0\€\0'),(3079,_binary 'π∏\0\0\0N\0'),(3079,_binary 'º∫\0\0\0N\0'),(3080,_binary '\ ∫\0\0\0N\0'),(3080,_binary '\»Ω\0\0\0N\0'),(3080,_binary '\…º\0\0\0N\0'),(3080,_binary '\ Ω\0\0\0\‡\0'),(3080,_binary '\ÀΩ\0\0\0\·\0'),(3081,_binary '\ÕØ\0\0\0\⁄\0'),(3081,_binary '\Õ∞\0\0\0\€\0'),(3081,_binary '\œ≤\0\0\0N\0'),(3082,_binary '\ÕØ\0\0\0\⁄\0'),(3082,_binary '\Õ∞\0\0\0\€\0'),(3082,_binary '\œ±\0\0\0ÉM\0'),(3083,_binary '\Ôæ\0\0\0ÉM\0'),(3083,_binary '\Óø\0\0\0N\0'),(3083,_binary '\ø\0\0\0\‡\0'),(3083,_binary '\Òø\0\0\0\·\0'),(3083,_binary '\Î¿\0\0\0N\0'),(3083,_binary '\Ï¿\0\0\0\‡\0'),(3083,_binary '\Ì¿\0\0\0\·\0'),(3083,_binary '\Ú¿\0\0\0åM\0'),(3084,_binary '˘ø\0\0\0ÉM\0'),(3084,_binary '˘¡\0\0\0ÉM\0'),(3084,_binary '¯\¬\0\0\0\‡\0'),(3084,_binary '˘\¬\0\0\0\·\0'),(3084,_binary '˚¡\0\0\0åM\0'),(3085,_binary '¸\À\0\0\0åM\0'),(3085,_binary 'ˇ\…\0\0\0\⁄\0'),(3085,_binary 'ˇ\ \0\0\0\€\0'),(3085,_binary '˝\Ã\0\0\0\‡\0'),(3085,_binary '˛\Ã\0\0\0\·\0'),(3085,_binary '˛\Õ\0\0\0ÉM\0'),(3086,_binary '\Û\œ\0\0\0åM\0'),(3086,_binary '\ˆ\Œ\0\0\0\‡\0'),(3086,_binary '\˜\Œ\0\0\0\·\0'),(3086,_binary '\˜\“\0\0\0ÉM\0'),(3086,_binary '\˜\“\0\0\0ÉM\0'),(3086,_binary '¯\–\0\0\0\⁄\0'),(3086,_binary '¯\—\0\0\0\€\0'),(3086,_binary '\ı\‘\0\0\0åM\0'),(3087,_binary '\Ó\«\0\0\0ÉM\0'),(3087,_binary '\Î\…\0\0\0\⁄\0'),(3087,_binary '\Î\ \0\0\0\€\0'),(3087,_binary '\Ï\…\0\0\0ÉM\0'),(3087,_binary '\Ô\»\0\0\0åM\0'),(3088,_binary '\€\“\0\0\0\⁄\0'),(3088,_binary '\€\”\0\0\0\€\0'),(3088,_binary '\ﬂ\–\0\0\0ÉM\0'),(3088,_binary '\ﬂ\“\0\0\0ÉM\0'),(3088,_binary '\‡\‘\0\0\0åM\0'),(3089,_binary '\Ò\ﬂ\0\0\0åM\0'),(3089,_binary '\Ú\ﬁ\0\0\0\‡\0'),(3089,_binary '\Û\ﬁ\0\0\0\·\0'),(3089,_binary '\Û\·\0\0\0ÉM\0'),(3090,_binary '\Ï\Ê\0\0\0\‡\0'),(3090,_binary '\Ì\Ê\0\0\0\·\0'),(3090,_binary '\Ï\Ê\0\0\0\‡\0'),(3090,_binary '\Ì\Ê\0\0\0\·\0'),(3090,_binary '\Ì\Í\0\0\0åM\0'),(3090,_binary '\Ò\Á\0\0\0åM\0'),(3090,_binary '\\È\0\0\0ÉM\0'),(3091,_binary '\‰\‚\0\0\0ÉM\0'),(3091,_binary '\„\Â\0\0\0\⁄\0'),(3091,_binary '\„\Ê\0\0\0\€\0'),(3091,_binary '\„\Ê\0\0\0\‡\0'),(3091,_binary '\Ê\‰\0\0\0åM\0'),(3091,_binary '\‰\Ê\0\0\0\·\0'),(3091,_binary '\Ê\‰\0\0\0åM\0'),(3091,_binary '\È\‰\0\0\0åM\0'),(3092,_binary '\ÿ\Í\0\0\0\‡\0'),(3092,_binary '\Ÿ\Í\0\0\0\·\0'),(3092,_binary '\ﬁ\Î\0\0\0åM\0'),(3092,_binary '\Ÿ\Ì\0\0\0ÉM\0'),(3093,_binary 'ß≤\0\0\0\⁄\0'),(3093,_binary 'ß≥\0\0\0\€\0'),(3093,_binary '®∞\0\0\0ÉM\0'),(3093,_binary '®≤\0\0\0ÉM\0'),(3093,_binary '©µ\0\0\0ÉM\0'),(3094,_binary '\Ÿ¶\0\0\0\‡\0'),(3094,_binary '\⁄¶\0\0\0\·\0'),(3094,_binary '\⁄¶\0\0\0åM\0'),(3094,_binary '\Ÿ®\0\0\0ÉM\0'),(3094,_binary '\ÿ®\0\0\0\⁄\0'),(3094,_binary '\ÿ©\0\0\0\€\0'),(3094,_binary '\›®\0\0\0åM\0'),(3095,_binary '\«í\0\0\0\‹\0'),(3095,_binary '\«í\0\0\0\‹\0'),(3095,_binary '\»í\0\0\0\›\0'),(3095,_binary '\ ì\0\0\0π\0'),(3095,_binary '\…ì\0\0\0π\0'),(3095,_binary '\»í\0\0\0\›\0'),(3095,_binary '\Àí\0\0\0\ﬁ\0'),(3095,_binary '\Àì\0\0\0\ﬂ\0'),(3095,_binary '\Ãí\0\0\0\ﬁ\0'),(3095,_binary '\Ãì\0\0\0\ﬂ\0'),(3095,_binary '\«ï\0\0\0\ﬁ\0'),(3095,_binary '\«ñ\0\0\0\ﬂ\0'),(3095,_binary '\«î\0\0\0\‹\0'),(3095,_binary '\ ñ\0\0\0π\0'),(3095,_binary '\»î\0\0\0\›\0'),(3095,_binary '\…ó\0\0\0\≈\0'),(3095,_binary '\»î\0\0\0º\0'),(3095,_binary '\Õî\0\0\0º\0'),(3095,_binary '\Õî\0\0\0º\0'),(3095,_binary '\œñ\0\0\0π\0'),(3096,_binary 'å+\0\0\0r\0'),(3096,_binary 'ç)\0\0\0É\0'),(3096,_binary 'ç*\0\0\0Ñ\0'),(3096,_binary 'è(\0\0\0s\0'),(3096,_binary 'å+\0\0\0\"(\0'),(3096,_binary 'é(\0\0\0(\0'),(3096,_binary 'è-\0\0\0q\0'),(3096,_binary 'å,\0\0\0(\0'),(3096,_binary 'è-\0\0\0\Z(\0'),(3096,_binary 'ë+\0\0\0r\0'),(3096,_binary 'ë+\0\0\0(\0'),(3097,_binary 'Ä+\0\0\0r\0'),(3097,_binary 'É(\0\0\0s\0'),(3097,_binary 'Ä+\0\0\0(\0'),(3097,_binary 'Ñ)\0\0\0É\0'),(3097,_binary 'Ñ*\0\0\0Ñ\0'),(3097,_binary 'Ö+\0\0\0r\0'),(3097,_binary 'Ö*\0\0\0(\0'),(3097,_binary 'Ö+\0\0\0\"(\0'),(3097,_binary 'É-\0\0\0q\0'),(3097,_binary 'É-\0\0\0\Z(\0'),(3098,_binary 'É\"\0\0\0s\0'),(3098,_binary 'É\"\0\0\0\Z(\0'),(3098,_binary 'Ñ#\0\0\0É\0'),(3098,_binary 'Ä%\0\0\0r\0'),(3098,_binary 'É\'\0\0\0q\0'),(3098,_binary 'Ä%\0\0\0(\0'),(3098,_binary 'Ñ$\0\0\0Ñ\0'),(3098,_binary 'Ö%\0\0\0r\0'),(3098,_binary 'Ö$\0\0\0(\0'),(3098,_binary 'Ö%\0\0\0\"(\0'),(3099,_binary 'à\0\0\0(\0'),(3099,_binary 'ä\0\0\0É\0'),(3099,_binary 'ä\0\0\0Ñ\0'),(3099,_binary 'ã\0\0\0(\0'),(3099,_binary 'à\0\0\0$(\0'),(3099,_binary 'ã\0\0\0(\0'),(3100,_binary 'Ü\0\0\0É\0'),(3100,_binary 'Ü\0\0\0Ñ\0'),(3100,_binary 'â\0\0\0\Ó\Z\0'),(3101,_binary '\0\0\0(\0'),(3101,_binary 'Ç\0\0\0(\0'),(3101,_binary 'É\0\0\0É\0'),(3101,_binary 'Å\0\0\0\Z(\0'),(3101,_binary 'Ç\0\0\0$(\0'),(3101,_binary 'É\0\0\0Ñ\0'),(3102,_binary 'Ä\0\0\0É\0'),(3102,_binary 'Ä\0\0\0Ñ\0'),(3102,_binary 'Ç\Z\0\0\0\Ó\Z\0'),(3103,_binary 'v#\0\0\0â\0'),(3103,_binary 'w#\0\0\0ä\0'),(3103,_binary 'x\"\0\0\0s\0'),(3103,_binary 'x\"\0\0\0\Z(\0'),(3103,_binary 'u%\0\0\0\ı\Z\0'),(3103,_binary 'u&\0\0\0r\0'),(3103,_binary 'u$\0\0\0(\0'),(3103,_binary 'u%\0\0\0\"(\0'),(3103,_binary 'x\'\0\0\0q\0'),(3103,_binary '{%\0\0\0r\0'),(3103,_binary 'x\'\0\0\0(\0'),(3103,_binary '{%\0\0\0(\0'),(3104,_binary 'v*\0\0\0É\0'),(3104,_binary 'v+\0\0\0Ñ\0'),(3104,_binary 'u+\0\0\0r\0'),(3104,_binary 'x)\0\0\0,\0'),(3104,_binary 'u,\0\0\0r\0'),(3104,_binary 'u,\0\0\0\˜\Z\0'),(3104,_binary 'v/\0\0\0ã\0'),(3104,_binary '{,\0\0\0r\0'),(3104,_binary 'x.\0\0\0\Ï\Z\0'),(3104,_binary '{,\0\0\0t\0'),(3104,_binary 'v0\0\0\0å\0'),(3104,_binary 'x1\0\0\0q\0'),(3105,_binary 'k\'\0\0\0q\0'),(3105,_binary 'k\'\0\0\0q\0'),(3105,_binary 'h+\0\0\0t\0'),(3105,_binary 'k)\0\0\0\Ï\Z\0'),(3105,_binary 'i,\0\0\0â\0'),(3105,_binary 'j,\0\0\0ä\0'),(3105,_binary 'k.\0\0\0q\0'),(3105,_binary 'h,\0\0\0r\0'),(3105,_binary 'j.\0\0\0q\0'),(3105,_binary 'm,\0\0\0r\0'),(3105,_binary 'l.\0\0\0s\0'),(3105,_binary 'm,\0\0\0\˜\Z\0'),(3106,_binary 'b\0\0\0\Î\Z\0'),(3106,_binary 'c\0\0\0\Ù\Z\0'),(3106,_binary 'd\0\0\0s\0'),(3106,_binary 'g\0\0\0\Ù\Z\0'),(3106,_binary 'e\0\0\0\Î\Z\0'),(3106,_binary 'd!\0\0\0ã\0'),(3106,_binary 'd\"\0\0\0å\0'),(3106,_binary 'e#\0\0\0s\0'),(3106,_binary 'f!\0\0\0É\0'),(3106,_binary 'f\"\0\0\0Ñ\0'),(3106,_binary 'f#\0\0\0q\0'),(3106,_binary 'g \0\0\0r\0'),(3106,_binary 'g!\0\0\0\˜\Z\0'),(3107,_binary 'ë;\0\0\0t\0'),(3107,_binary 'ì:\0\0\0É\0'),(3107,_binary 'ì;\0\0\0Ñ\0'),(3107,_binary 'î9\0\0\0q\0'),(3107,_binary 'ë?\0\0\0r\0'),(3107,_binary 'ñ<\0\0\0r\0'),(3107,_binary 'ñ=\0\0\0\˜\Z\0'),(3107,_binary 'î@\0\0\0q\0'),(3108,_binary '3É\0\0\0º\0'),(3108,_binary '6Ç\0\0\0b\0'),(3108,_binary '8Å\0\0\0π\0'),(3114,_binary 'b\0\0\0\0'),(3114,_binary '\Zb\0\0\0¸\0'),(3114,_binary 'b\0\0\0\0'),(3114,_binary '\Ze\0\0\0¸\0'),(3115,_binary '/\0\0\0π\0'),(3115,_binary '/\r\0\0\0π\0'),(3115,_binary '.\0\0\0.\0'),(3115,_binary '0\0\0\0º\0'),(3115,_binary '0\0\0\0º\0'),(3115,_binary '1\0\0\0ª\0'),(3115,_binary '1	\0\0\0ª\0'),(3137,_binary '\Òv\0\0\0û\0'),(3137,_binary '\Ùw\0\0\0\⁄\0'),(3137,_binary '\Ò{\0\0\0H\0'),(3137,_binary '\Úx\0\0\0°\0'),(3137,_binary '\Û{\0\0\0H\0'),(3137,_binary '\Ùx\0\0\0\€\0'),(3137,_binary '\Ù{\0\0\0H\0'),(3138,_binary '˛Ç\0\0\0\‡\0'),(3138,_binary 'ˇÇ\0\0\0\·\0'),(3138,_binary '˙Ñ\0\0\0°\0'),(3138,_binary '¸Ü\0\0\0H\0'),(3138,_binary '˛Ñ\0\0\0û\0'),(3139,_binary '\ﬂä\0\0\0I\0'),(3139,_binary '\‚Ü\0\0\0û\0'),(3139,_binary '\‡â\0\0\0\⁄\0'),(3139,_binary '\‡ä\0\0\0\€\0'),(3139,_binary '\‚ä\0\0\0°\0'),(3139,_binary '\‰à\0\0\0I\0'),(3139,_binary '\‰â\0\0\0I\0'),(3140,_binary '\Ôî\0\0\0I\0'),(3140,_binary '\Òî\0\0\0d\0'),(3140,_binary '\Òñ\0\0\0û\0'),(3140,_binary '\Ùî\0\0\0I\0'),(3140,_binary '\Ùï\0\0\0I\0'),(3141,_binary '\Úô\0\0\0û\0'),(3141,_binary '\Ûõ\0\0\0I\0'),(3141,_binary '\Òú\0\0\0H\0'),(3142,_binary '\Ìõ\0\0\0\‡\0'),(3142,_binary '\Óõ\0\0\0\·\0'),(3142,_binary '\Ôô\0\0\0û\0'),(3142,_binary '\Óú\0\0\0H\0'),(3143,_binary '\Îô\0\0\0û\0'),(3143,_binary '\Îú\0\0\0H\0'),(3144,_binary '\°\0\0\0\⁄\0'),(3144,_binary '\¢\0\0\0\€\0'),(3144,_binary '\£\0\0\0û\0'),(3144,_binary '\Ù£\0\0\0°\0'),(3144,_binary '\Ò•\0\0\0°\0'),(3144,_binary '\Ú¶\0\0\0H\0'),(3144,_binary '\Û¶\0\0\0H\0'),(3145,_binary '£\0\0\0û\0'),(3145,_binary '¢\0\0\0I\0'),(3146,_binary 'ß\0\0\0I\0'),(3146,_binary '®\0\0\0°\0'),(3146,_binary '®\0\0\0b\0'),(3146,_binary '	©\0\0\0\‡\0'),(3146,_binary '	™\0\0\0H\0'),(3146,_binary '\n©\0\0\0\·\0'),(3146,_binary '\n™\0\0\0H\0'),(3146,_binary '®\0\0\0I\0'),(3147,_binary '\Ôy\0\0\0°\0'),(3147,_binary '\Úw\0\0\0\⁄\0'),(3147,_binary '\Ò{\0\0\0H\0'),(3147,_binary '\Úx\0\0\0\€\0'),(3147,_binary '\Úz\0\0\0°\0'),(3147,_binary '\Û{\0\0\0H\0'),(3147,_binary '\Ù{\0\0\0H\0'),(3148,_binary '˝É\0\0\0°\0'),(3148,_binary '˛Ç\0\0\0\‡\0'),(3148,_binary 'ˇÇ\0\0\0\·\0'),(3148,_binary '˚Ü\0\0\0û\0'),(3148,_binary '\0Ñ\0\0\0I\0'),(3149,_binary '\ﬂä\0\0\0I\0'),(3149,_binary '\‚Ü\0\0\0û\0'),(3149,_binary '\·ä\0\0\0°\0'),(3149,_binary '\„â\0\0\0\⁄\0'),(3149,_binary '\„ä\0\0\0\€\0'),(3149,_binary '\„ã\0\0\0H\0'),(3149,_binary '\‰à\0\0\0I\0'),(3149,_binary '\‰â\0\0\0I\0'),(3150,_binary '\Úì\0\0\0\⁄\0'),(3150,_binary '\Úî\0\0\0\€\0'),(3150,_binary '\Úñ\0\0\0û\0'),(3150,_binary '\Ùî\0\0\0I\0'),(3150,_binary '\Ùï\0\0\0I\0'),(3151,_binary '\Óô\0\0\0û\0'),(3151,_binary '\Óú\0\0\0H\0'),(3151,_binary '\Òô\0\0\0û\0'),(3151,_binary '\Úö\0\0\0\⁄\0'),(3151,_binary '\Úõ\0\0\0\€\0'),(3151,_binary '\Ûõ\0\0\0I\0'),(3151,_binary '\Òú\0\0\0H\0'),(3152,_binary '\Ú£\0\0\0û\0'),(3152,_binary '\Ù¢\0\0\0I\0'),(3152,_binary '\•\0\0\0°\0'),(3152,_binary '\Ú¶\0\0\0H\0'),(3152,_binary '\Û§\0\0\0\⁄\0'),(3152,_binary '\Û•\0\0\0\€\0'),(3152,_binary '\Û¶\0\0\0H\0'),(3152,_binary '\Ù§\0\0\0I\0'),(3152,_binary '\Ù•\0\0\0I\0'),(3153,_binary 'ß\0\0\0°\0'),(3153,_binary 'ß\0\0\0I\0'),(3153,_binary '®\0\0\0b\0'),(3153,_binary '	©\0\0\0\‡\0'),(3153,_binary '	™\0\0\0H\0'),(3153,_binary '\n©\0\0\0\·\0'),(3153,_binary '\n™\0\0\0H\0'),(3153,_binary '®\0\0\0I\0'),(3154,_binary '\Ô£\0\0\0\⁄\0'),(3154,_binary '\Ô§\0\0\0\€\0'),(3154,_binary '\Û¢\0\0\0û\0'),(3154,_binary '\Ò§\0\0\0°\0'),(3154,_binary '\Ú¶\0\0\0H\0'),(3154,_binary '\Û¶\0\0\0H\0'),(3154,_binary '\Ù§\0\0\0I\0'),(3154,_binary '\Ù•\0\0\0I\0'),(3155,_binary '\Óô\0\0\0û\0'),(3155,_binary '\Óú\0\0\0H\0'),(3156,_binary '\Îô\0\0\0û\0'),(3156,_binary '\Îú\0\0\0H\0'),(3157,_binary '\Úì\0\0\0\‡\0'),(3157,_binary '\Ûì\0\0\0\·\0'),(3157,_binary '\Úñ\0\0\0û\0'),(3157,_binary '\Ùî\0\0\0I\0'),(3157,_binary '\Ùï\0\0\0I\0'),(3158,_binary '˝ë\0\0\0°\0'),(3158,_binary '\0ë\0\0\0°\0'),(3158,_binary 'ì\0\0\0H\0'),(3158,_binary 'ë\0\0\0\⁄\0'),(3158,_binary 'í\0\0\0\€\0'),(3158,_binary 'ì\0\0\0H\0'),(3159,_binary '\‡á\0\0\0\⁄\0'),(3159,_binary '\·á\0\0\0\⁄\0'),(3159,_binary '\‡à\0\0\0\€\0'),(3159,_binary '\·à\0\0\0\€\0'),(3159,_binary '\·ã\0\0\0H\0'),(3159,_binary '\‚â\0\0\0°\0'),(3159,_binary '\‰à\0\0\0°\0'),(3160,_binary '\ﬂó\0\0\0I\0'),(3160,_binary '\ﬂó\0\0\0I\0'),(3160,_binary '\ﬁô\0\0\0û\0'),(3160,_binary '\ﬂò\0\0\0I\0'),(3160,_binary '\‹ò\0\0\0\‡\0'),(3160,_binary '\›ò\0\0\0\·\0'),(3160,_binary '\›ô\0\0\0H\0'),(3160,_binary '\ﬁô\0\0\0H\0'),(3160,_binary '\ﬂò\0\0\0I\0'),(3161,_binary '\◊ó\0\0\0°\0'),(3161,_binary '\÷ò\0\0\0°\0'),(3161,_binary '\◊ô\0\0\0\‡\0'),(3161,_binary '\◊ö\0\0\0H\0'),(3161,_binary '\◊ö\0\0\0H\0'),(3161,_binary '\ÿô\0\0\0\·\0'),(3161,_binary '\ÿö\0\0\0H\0'),(3161,_binary '\Ÿò\0\0\0°\0'),(3161,_binary '\ÿö\0\0\0H\0'),(3162,_binary '\⁄è\0\0\0û\0'),(3162,_binary '\⁄è\0\0\0û\0'),(3162,_binary '\◊ê\0\0\0û\0'),(3162,_binary '\÷í\0\0\0\‡\0'),(3162,_binary '\◊í\0\0\0\·\0'),(3162,_binary '\◊ì\0\0\0H\0'),(3162,_binary '\÷í\0\0\0\‡\0'),(3162,_binary '\◊í\0\0\0\·\0'),(3162,_binary '\◊ì\0\0\0H\0'),(3162,_binary '\ÿë\0\0\0°\0'),(3162,_binary '\⁄ì\0\0\0û\0'),(3162,_binary '\€ë\0\0\0°\0'),(3162,_binary '\ÿë\0\0\0°\0'),(3162,_binary '\€ë\0\0\0°\0'),(3162,_binary '\›ê\0\0\0û\0'),(3162,_binary '\›ê\0\0\0\⁄\0'),(3162,_binary '\›ë\0\0\0\€\0'),(3162,_binary '\›ì\0\0\0H\0'),(3162,_binary '\ﬁê\0\0\0I\0'),(3162,_binary '\‹í\0\0\0\‡\0'),(3162,_binary '\›í\0\0\0\·\0'),(3162,_binary '\›ì\0\0\0H\0'),(3162,_binary '\ﬁê\0\0\0I\0'),(3162,_binary '\ﬁë\0\0\0I\0'),(3163,_binary 'ü\œ\0\0\0˙(\0'),(3163,_binary 'ù\”\0\0\0\(\0'),(3163,_binary 'ù\‘\0\0\0˚(\0'),(3163,_binary '£\“\0\0\0˚(\0'),(3163,_binary '°\‘\0\0\0\⁄\0'),(3163,_binary '°\’\0\0\0\€\0'),(3163,_binary '°\÷\0\0\0˙(\0'),(3163,_binary '¢\‘\0\0\0\⁄\0'),(3163,_binary '¢\’\0\0\0\€\0'),(3164,_binary 'ü\…\0\0\0˙(\0'),(3164,_binary '£\∆\0\0\0\‡\0'),(3164,_binary '§\∆\0\0\0\·\0'),(3164,_binary '°\…\0\0\0\Á(\0'),(3165,_binary 'ü\¬\0\0\0\⁄\0'),(3165,_binary 'ü\√\0\0\0\€\0'),(3165,_binary 'ù\≈\0\0\0\(\0'),(3165,_binary '†\¬\0\0\0\⁄\0'),(3165,_binary '†\√\0\0\0\€\0'),(3165,_binary '¢\∆\0\0\0\(\0'),(3166,_binary 'Nn\0\0\0\‹\0'),(3166,_binary 'On\0\0\0\›\0'),(3166,_binary 'Oq\0\0\0\◊\0'),(3167,_binary 't\—\0\0\0\⁄\0'),(3167,_binary 't\“\0\0\0\€\0'),(3167,_binary 'w\–\0\0\0.\0'),(3167,_binary '{\”\0\0\0o\0'),(3167,_binary 't\‘\0\0\0\‡\0'),(3167,_binary 'u\‘\0\0\0\·\0'),(3167,_binary '{\‘\0\0\0/\0'),(3168,_binary 'y\÷\0\0\0\‡\0'),(3168,_binary 'z\÷\0\0\0\·\0'),(3168,_binary '{\◊\0\0\0o\0'),(3168,_binary 'w\€\0\0\0.\0'),(3168,_binary 'y\ÿ\0\0\0\‡\0'),(3168,_binary 'z\ÿ\0\0\0\·\0'),(3168,_binary '{\ÿ\0\0\0/\0'),(3169,_binary '%\0\0\0-\0'),(3169,_binary '&\r\0\0\0\⁄\0'),(3169,_binary '&\0\0\0\€\0'),(3169,_binary '\'\0\0\0,\0'),(3169,_binary '%\0\0\0-\0'),(3169,_binary '\'\0\0\0,\0'),(3169,_binary '&\r\0\0\0\⁄\0'),(3169,_binary '&\0\0\0\€\0'),(3169,_binary '\'\0\0\0,\0'),(3169,_binary '*\r\0\0\0\⁄\0'),(3169,_binary '*\0\0\0\€\0'),(3169,_binary '+\0\0\0,\0'),(3169,_binary ')\0\0\0,\0'),(3169,_binary ')\0\0\0,\0'),(3169,_binary '*\r\0\0\0\⁄\0'),(3169,_binary '*\0\0\0\€\0'),(3169,_binary ',\0\0\0,\0'),(3169,_binary '-\0\0\0,\0'),(3169,_binary '\'\0\0\0q\0'),(3169,_binary '\'\0\0\0q\0'),(3169,_binary '&\0\0\0\⁄\0'),(3169,_binary '&\0\0\0\€\0'),(3169,_binary '+\0\0\0q\0'),(3169,_binary '+\0\0\0q\0'),(3169,_binary '*\0\0\0o\0'),(3169,_binary '(\0\0\0q\0'),(3169,_binary '.\0\0\0q\0'),(3169,_binary '-\0\0\0q\0'),(3169,_binary '%\0\0\0-\0'),(3169,_binary '&\0\0\0\⁄\0'),(3169,_binary '&\0\0\0\€\0'),(3169,_binary '\'\0\0\0,\0'),(3169,_binary '%\0\0\0-\0'),(3169,_binary '&\0\0\0\‡\0'),(3169,_binary '\'\0\0\0\·\0'),(3169,_binary '\'\0\0\0,\0'),(3169,_binary '*\0\0\0\⁄\0'),(3169,_binary '*\0\0\0\€\0'),(3169,_binary '+\0\0\0,\0'),(3169,_binary '(\0\0\0,\0'),(3169,_binary '+\0\0\0\⁄\0'),(3169,_binary '+\0\0\0\€\0'),(3169,_binary ')\0\0\0,\0'),(3169,_binary '*\0\0\0q\0'),(3169,_binary '+\0\0\0q\0'),(3169,_binary '-\0\0\0\⁄\0'),(3169,_binary '-\0\0\0\€\0'),(3169,_binary '-\0\0\0,\0'),(3169,_binary '/\0\0\0\⁄\0'),(3169,_binary '/\0\0\0\€\0'),(3169,_binary ',\0\0\0,\0'),(3169,_binary '.\0\0\0,\0'),(3169,_binary '0\0\0\0o\0'),(3170,_binary 'é\0\0\0∫\0'),(3170,_binary 'å\0\0\0\‡\0'),(3170,_binary '\rå\0\0\0\·\0');
/*!40000 ALTER TABLE `tile_store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `z_forum`
--

DROP TABLE IF EXISTS `z_forum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `z_forum` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_post` int NOT NULL DEFAULT '0',
  `last_post` int NOT NULL DEFAULT '0',
  `section` int NOT NULL DEFAULT '0',
  `replies` int NOT NULL DEFAULT '0',
  `views` int NOT NULL DEFAULT '0',
  `likes_count` int NOT NULL DEFAULT '0',
  `author_aid` int NOT NULL DEFAULT '0',
  `author_guid` int NOT NULL DEFAULT '0',
  `post_text` text NOT NULL,
  `post_topic` varchar(255) NOT NULL,
  `post_smile` tinyint(1) NOT NULL DEFAULT '0',
  `post_date` int NOT NULL DEFAULT '0',
  `last_edit_aid` int NOT NULL DEFAULT '0',
  `edit_date` int NOT NULL DEFAULT '0',
  `post_ip` varchar(15) NOT NULL DEFAULT '0.0.0.0',
  `icon_id` int NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `news_icon` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `section` (`section`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `z_forum`
--

LOCK TABLES `z_forum` WRITE;
/*!40000 ALTER TABLE `z_forum` DISABLE KEYS */;
INSERT INTO `z_forum` VALUES (2,2,1603562308,1,2,43,0,2,2,'<div class=\"kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q\">\r\n<h2 style=\"text-align: center;\"><strong>Thoria Alternative Server</strong></h2>\r\n<div style=\"text-align: justify;\" dir=\"auto\">&nbsp;</div>\r\n<div style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\"><span style=\"font-size: medium;\"><strong>S</strong></span>eja bem vindo ao Thoria, um servidor personalizado com sistemas &uacute;nicos, cooldown de magias ajustadas, e mapa 100% custom com v&aacute;rias quests diferentes, todos os respawns grandes, NPCs diversificados aos arredores do mapa. Um servidor totalmente com RPG, sem lag, seguran&ccedil;a total e prote&ccedil;&atilde;o contra DDoS. Temos uma &oacute;tima equipe trabalhando em corre&ccedil;&otilde;es de bugs e melhorias para o game. Tudo que voc&ecirc; precisa para ter divers&atilde;o garantida.</span></div>\r\n<div style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">J&aacute; faz um tempo desde que anunciamos que estamos trabalhando em um novo servidor e, como prometido, notificaremos voc&ecirc; &agrave; medida que nos aproximamos e agora podemos finalmente dizer que estamos nesse ponto.</span></div>\r\n<div style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Nas &uacute;ltimas semanas, estivemos ocupados criando o Thoria, n&atilde;o &eacute; nosso primeiro servidor e esperamos que seja o &uacute;ltimo, e tamb&eacute;m n&atilde;o &eacute; nossa primeira vez administrando um servidor capaz de crescer, iremos da nosso melhor, e n&atilde;o &eacute; t&atilde;o f&aacute;cil como se pode pensar em come&ccedil;ar. N&atilde;o estamos apenas iniciando o servidor para fech&aacute;-lo no pr&oacute;ximo m&ecirc;s. Isso tamb&eacute;m significa que estamos mudando as doa&ccedil;&otilde;es para as compras, mas isso n&atilde;o altera o processo de pagamento, e ainda estaremos usando dinheiro para melhorar os servidores e fornecer a melhor experi&ecirc;ncia.</span></div>\r\n<div dir=\"auto\">&nbsp;</div>\r\n<div dir=\"auto\">&nbsp;</div>\r\n<h3 style=\"text-align: center;\" dir=\"auto\">Thoria Main Continent</h3>\r\n<div dir=\"auto\">&nbsp;</div>\r\n<div dir=\"auto\"><img style=\"border: 1px solid black; display: block; margin-left: auto; margin-right: auto;\" title=\"Thoria Main Continent\" src=\"images/library/respaw%20main%20continent.jpg\" alt=\"Thoria Main Continent\" width=\"528\" height=\"484\" /></div>\r\n<div dir=\"auto\">&nbsp;</div>\r\n<div dir=\"auto\">&nbsp;</div>\r\n<div dir=\"auto\">&nbsp;</div>\r\n</div>\r\n<div class=\"o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q\">\r\n<div style=\"text-align: center;\" dir=\"auto\"><span style=\"font-size: small;\">Website: <a class=\"oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl py34i1dx gpro0wi8\" tabindex=\"0\" href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fthoria.online%2F%3Ffbclid%3DIwAR1bN9cDAgaEaTBowgVAdMeoJ4Vyu0xFi_jyFpHRgvFajvVhCzvrH42vEAQ&amp;h=AT2kETJKatTSe3oqMI_phWaHHI7AiB6PeH_ETFOrTbQGAlB98JkbyYMf-aPGch-0zTa6-v_zYQaPgIhKPMd5gJz6F-FHJrgWFB00bayt1mB7dWReXR2ZB-rLC8_pZoqp3IyMjL1qyNCRnuL2eCrQ&amp;__tn__=-UK-R&amp;c[0]=AT3vp4AB26XbRN1KhP9AH9t3g7Rog6N0_TCgt0LfqypKRQsK6kS0qXHYgH0BExxEHJTHOzsiwTbm-RCFjBkTXrff9-cJMvuURdrB0PcAChy86VOxs09tYLYXRNuCngBoyKbR1wRBXrJ5uX2qIQfbOTj4Zb2EZpMewmzsOtFQWEL74hx5zAkH51xEi-UgnjFT-CV4gC4\" rel=\"nofollow noopener\" target=\"_blank\">https://thoria.online</a></span></div>\r\n<div style=\"text-align: center;\" dir=\"auto\"><span style=\"font-size: small;\">Protocolo de jogo: 12x</span></div>\r\n<div style=\"text-align: center;\" dir=\"auto\">&nbsp;</div>\r\n</div>\r\n<div class=\"o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q\">\r\n<div style=\"text-align: center;\" dir=\"auto\"><span style=\"font-size: small;\">Rates:</span></div>\r\n<div style=\"text-align: center;\" dir=\"auto\"><span style=\"font-size: small;\">Experience rate: average 14x (starts at 56x, ends at 1x, see website for details).</span></div>\r\n<div style=\"text-align: center;\" dir=\"auto\"><span style=\"font-size: small;\">Skill rate: 8x.</span></div>\r\n<div style=\"text-align: center;\" dir=\"auto\"><span style=\"font-size: small;\">Magic rate: 4x.</span></div>\r\n<div style=\"text-align: center;\" dir=\"auto\"><span style=\"font-size: small;\">Loot rate: 2x.</span></div>\r\n<div style=\"text-align: center;\" dir=\"auto\">&nbsp;</div>\r\n</div>\r\n<div class=\"o9v6fnle cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q\">\r\n<ul>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Cont&eacute;m mais de 100 Quests, incluindo as principais como Annhilator, Demon Oak, Demon Helmet, Pits of Inferno, Yalaharian, Inquisition entre outras.</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Simplificado NPCs de loot. Um NPC para todos items de Rashid &amp; Djinn e outro para noob items.</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">War System</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Addons com 50% dos items necess&aacute;rios.</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Runas e muni&ccedil;&otilde;es acabam.</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Sistema de Crown Token &amp; Online Points.</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Pequenas modifica&ccedil;&otilde;es em loots de monstros, como golds, loots.</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">NPCs de Runas de todas as cidades agora compram todas as Wands &amp; Rods.</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Bastante RPG no mapa em Quests e outros.</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Voca&ccedil;&otilde;es 100% balanceadas.</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Cooldown de magias reduzido em 50%.</span></li>\r\n<li style=\"text-align: justify;\" dir=\"auto\"><span style=\"font-size: small;\">Nova Adventurer\'s Guild, voc&ecirc; pode conseguir o Adventurer Stone no npc no templo.</span></li>\r\n</ul>\r\n</div>\r\n<p style=\"font-size: 10px;\">&nbsp;</p>\r\n<p style=\"font-size: 10px; text-align: justify;\"><span style=\"font-size: small;\">Att,</span></p>\r\n<p style=\"font-size: 10px; text-align: justify;\"><span style=\"font-size: small;\">Thoria Team.</span></p>','Server Online',1,1588797614,7,1597620556,'179.182.120.13',0,'2020-10-24 18:45:38.209','2020-10-24 18:45:38.174','newsicon_community_big'),(3,3,1603562234,5,1,4,0,61,79,'<p>tinha que ser servidor do yinz mesmo jajajaja</p>','Servidor brabo sem bug nenhum!',0,1603562160,0,0,'179.180.72.229',0,'2020-10-24 18:45:38.209','2020-10-24 18:45:38.174',''),(4,4,1603562285,5,1,3,0,36,45,'<p>xd</p>','ficou padr√É¬£o isso ai',0,1603562209,0,0,'179.180.72.229',0,'2020-10-24 18:45:38.209','2020-10-24 18:45:38.174',''),(5,3,0,5,0,0,0,36,45,'<p>cara, ficou muito bom isso a&iacute; xd</p>','',0,1603562234,0,0,'179.180.72.229',0,'2020-10-24 18:45:38.209','2020-10-24 18:45:38.174',''),(6,2,0,1,0,0,0,36,45,'<p>servidor good! teste forum xd</p>','',0,1603562256,0,0,'179.180.72.229',0,'2020-10-24 18:45:38.209','2020-10-24 18:45:38.174',''),(7,4,0,5,0,0,0,61,79,'<p>somente para d&aacute; reply, abra&ccedil;os!</p>','',0,1603562285,0,0,'179.180.72.229',0,'2020-10-24 18:45:38.209','2020-10-24 18:45:38.174',''),(8,2,0,1,0,0,0,61,79,'<p>sdds jogar um rpgzinho brabo!&nbsp;</p>','',0,1603562308,0,0,'179.180.72.229',0,'2020-10-24 18:45:38.209','2020-10-24 18:45:38.174','');
/*!40000 ALTER TABLE `z_forum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `z_polls`
--

DROP TABLE IF EXISTS `z_polls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `z_polls` (
  `id` int NOT NULL,
  `question` varchar(255) NOT NULL,
  `end` int NOT NULL,
  `start` int NOT NULL,
  `answers` int NOT NULL,
  `votes_all` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `z_polls`
--

LOCK TABLES `z_polls` WRITE;
/*!40000 ALTER TABLE `z_polls` DISABLE KEYS */;
/*!40000 ALTER TABLE `z_polls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `z_polls_answers`
--

DROP TABLE IF EXISTS `z_polls_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `z_polls_answers` (
  `poll_id` int NOT NULL,
  `answer_id` int NOT NULL,
  `answer` varchar(255) NOT NULL,
  `votes` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `z_polls_answers`
--

LOCK TABLES `z_polls_answers` WRITE;
/*!40000 ALTER TABLE `z_polls_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `z_polls_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `z_shop_category`
--

DROP TABLE IF EXISTS `z_shop_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `z_shop_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `button` varchar(50) NOT NULL,
  `hide` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `z_shop_category`
--

LOCK TABLES `z_shop_category` WRITE;
/*!40000 ALTER TABLE `z_shop_category` DISABLE KEYS */;
INSERT INTO `z_shop_category` VALUES (2,'Extras','Compre extras para seu personagem.','_sbutton_getextraservice.gif',1),(3,'Montarias','Buy your characters one or more of the fabulous mounts offered here.','_sbutton_getmount.gif',1),(4,'Outfits','Buy your characters one or more of the fancy outfits offered here.','_sbutton_getoutfit.gif',1),(5,'Vantagens','Tenha diversas vantagens e se torne mais poderoso.','_sbutton_getextraservice.gif',1);
/*!40000 ALTER TABLE `z_shop_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `z_shop_donate_confirm`
--

DROP TABLE IF EXISTS `z_shop_donate_confirm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `z_shop_donate_confirm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` int NOT NULL,
  `account_name` varchar(50) NOT NULL,
  `donate_id` int NOT NULL,
  `msg` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `z_shop_donate_confirm`
--

LOCK TABLES `z_shop_donate_confirm` WRITE;
/*!40000 ALTER TABLE `z_shop_donate_confirm` DISABLE KEYS */;
/*!40000 ALTER TABLE `z_shop_donate_confirm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `z_shop_donates`
--

DROP TABLE IF EXISTS `z_shop_donates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `z_shop_donates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` int NOT NULL,
  `reference` varchar(50) NOT NULL,
  `account_name` varchar(50) NOT NULL,
  `method` varchar(50) NOT NULL,
  `price` varchar(20) NOT NULL,
  `points` int NOT NULL,
  `coins` int NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `z_shop_donates`
--

LOCK TABLES `z_shop_donates` WRITE;
/*!40000 ALTER TABLE `z_shop_donates` DISABLE KEYS */;
INSERT INTO `z_shop_donates` VALUES (1,1597845239,'227099-picpay','227099','picpay','5',50,0,'Pending');
/*!40000 ALTER TABLE `z_shop_donates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `z_shop_history_item`
--

DROP TABLE IF EXISTS `z_shop_history_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `z_shop_history_item` (
  `id` int NOT NULL,
  `to_name` varchar(255) NOT NULL DEFAULT '0',
  `to_account` int NOT NULL DEFAULT '0',
  `from_nick` varchar(255) NOT NULL,
  `from_account` int NOT NULL DEFAULT '0',
  `price` int NOT NULL DEFAULT '0',
  `offer_id` varchar(255) NOT NULL DEFAULT '',
  `trans_state` varchar(255) NOT NULL,
  `trans_start` int NOT NULL DEFAULT '0',
  `trans_real` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `z_shop_history_item`
--

LOCK TABLES `z_shop_history_item` WRITE;
/*!40000 ALTER TABLE `z_shop_history_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `z_shop_history_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `z_shop_offer`
--

DROP TABLE IF EXISTS `z_shop_offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `z_shop_offer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` int NOT NULL,
  `points` int NOT NULL DEFAULT '0',
  `coins` int NOT NULL DEFAULT '0',
  `price` varchar(50) NOT NULL DEFAULT '',
  `itemid` int NOT NULL DEFAULT '0',
  `mount_id` varchar(100) NOT NULL DEFAULT '',
  `addon_name` varchar(100) NOT NULL DEFAULT '',
  `count` int NOT NULL DEFAULT '0',
  `offer_type` varchar(255) DEFAULT NULL,
  `offer_description` text NOT NULL,
  `offer_name` varchar(255) NOT NULL DEFAULT '',
  `offer_date` int NOT NULL,
  `default_image` varchar(50) NOT NULL DEFAULT '',
  `hide` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `z_shop_offer`
--

LOCK TABLES `z_shop_offer` WRITE;
/*!40000 ALTER TABLE `z_shop_offer` DISABLE KEYS */;
/*!40000 ALTER TABLE `z_shop_offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `z_shop_payment`
--

DROP TABLE IF EXISTS `z_shop_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `z_shop_payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ref` varchar(10) NOT NULL,
  `account_name` varchar(50) NOT NULL,
  `service_id` int NOT NULL,
  `service_category_id` int NOT NULL,
  `payment_method_id` int NOT NULL,
  `price` varchar(50) NOT NULL,
  `points` int unsigned NOT NULL,
  `coins` int unsigned NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'waiting',
  `date` int NOT NULL,
  `gift` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `z_shop_payment`
--

LOCK TABLES `z_shop_payment` WRITE;
/*!40000 ALTER TABLE `z_shop_payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `z_shop_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `z_shopguild_offer`
--

DROP TABLE IF EXISTS `z_shopguild_offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `z_shopguild_offer` (
  `id` int NOT NULL,
  `points` int NOT NULL DEFAULT '0',
  `itemid1` int NOT NULL DEFAULT '0',
  `count1` int NOT NULL DEFAULT '0',
  `itemid2` int NOT NULL DEFAULT '0',
  `count2` int NOT NULL DEFAULT '0',
  `offer_type` varchar(255) DEFAULT NULL,
  `offer_description` text NOT NULL,
  `offer_name` varchar(255) NOT NULL,
  `pid` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `z_shopguild_offer`
--

LOCK TABLES `z_shopguild_offer` WRITE;
/*!40000 ALTER TABLE `z_shopguild_offer` DISABLE KEYS */;
/*!40000 ALTER TABLE `z_shopguild_offer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-25 12:46:49
