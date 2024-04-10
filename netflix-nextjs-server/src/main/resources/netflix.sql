/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 80300 (8.3.0)
 Source Host           : localhost:3306
 Source Schema         : netflix

 Target Server Type    : MySQL
 Target Server Version : 80300 (8.3.0)
 File Encoding         : 65001

 Date: 10/04/2024 12:28:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for _prisma_migrations
-- ----------------------------
DROP TABLE IF EXISTS `_prisma_migrations`;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of _prisma_migrations
-- ----------------------------
BEGIN;
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('4805229b-e174-406d-94b6-2a27183e8b5f', '198b05b68e776d34fc968786d148179138dc633d04dbc6ea9093ed12752db345', '2024-03-21 15:10:55.929', '20240320133929_init', NULL, NULL, '2024-03-21 15:10:55.920', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('52a5fd17-8e2b-4504-b64c-537ddc25022e', 'b5f862776e45c1007f5cecbca16bfdd38a40ee61adb55a3a6b28aeec309b627a', '2024-03-21 15:14:29.205', '20240321151429_init', NULL, NULL, '2024-03-21 15:14:29.194', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('547b4b45-fd7c-48aa-9fe4-42cdac0f126a', 'e42f26ba00145cbb4a6b478e17f2413ef4c08cda1df7d6940cd9ef6ca233519e', '2024-03-21 15:10:55.876', '20240316115716_init', NULL, NULL, '2024-03-21 15:10:55.863', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('5c60617e-a9c5-4309-8a86-071fff9ab362', '4e183bd269bbc6a92a54a9bb4266c712570223c7172162d2df9b7292f1f8b174', '2024-03-21 15:10:55.943', '20240321145647_init', NULL, NULL, '2024-03-21 15:10:55.940', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('6861743d-8829-4f30-b427-c12acec11258', 'a5c42f3ddb58936ac7f32b31d19544f7f2f18cc42d2bafe19d3ace8bf2898cb1', '2024-03-21 15:10:55.897', '20240316120103_init', NULL, NULL, '2024-03-21 15:10:55.880', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('863a953b-75b8-4530-8a99-7a45f675c23c', '88a3257297c882bd11efe5c8aa3a6a4a1bb046ef3654fdef6954eb60d3ff2610', '2024-03-21 15:10:56.314', '20240321151056_init', NULL, NULL, '2024-03-21 15:10:56.308', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('87b1efaf-70dc-41c1-bbfa-8e4cb88859e9', '646ba7172cb90e8c558fdd27b0ef2a77836d826b8f4fca2040c54555f0ed78eb', '2024-03-21 15:10:55.914', '20240316121053_init', NULL, NULL, '2024-03-21 15:10:55.911', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('9f026944-0b61-4747-ad17-ba2c88b274d1', '40797ca011a5384092518ff995b13f86f206d969278a83e9f3db40f00de8799f', '2024-03-21 15:10:55.952', '20240321145852_init', NULL, NULL, '2024-03-21 15:10:55.943', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('ab49d407-3622-4bdc-a303-44d4f07b1ea8', 'aae3352d7f8417bb5f348314960d46c5a8b691ceb449cd445b73472ced835652', '2024-03-21 15:10:55.880', '20240316115947_init', NULL, NULL, '2024-03-21 15:10:55.876', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('b06e39ae-4262-480c-b030-7c6c5e9fb664', 'ba35d1714999d2a0cd7a907ed6afd0aef5b1a267cc9aedf8e58735ae1c2bc83b', '2024-03-21 15:10:55.793', '20240314143457_init', NULL, NULL, '2024-03-21 15:10:55.778', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('be2144c4-6d96-45df-837e-92be75c5bbd6', 'e13d54fd4eb5658e741e8c1c5e85ee46cdc4be78f5a41f22ce0851cb4a97398b', '2024-03-21 15:10:55.939', '20240321145048_init', NULL, NULL, '2024-03-21 15:10:55.929', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('c754e6d4-e66d-4955-a867-eaf74e844169', '2d6e05d592f90fd0f383ef0518054a47e207f127771963d143ad4ee0d7cd6121', '2024-03-21 15:10:55.840', '20240316113337_init', NULL, NULL, '2024-03-21 15:10:55.805', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('df02d710-935f-4c25-b671-651198685f48', '8c1cabbfe35ed96997f12b3622e369706e3ace34329a1d4accbdd50d31e1d9a8', '2024-03-21 15:10:55.920', '20240316144241_init', NULL, NULL, '2024-03-21 15:10:55.915', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('e8fc758d-5197-4c55-a754-4f89e7e678f5', '0f69e7804a07d1e429c95e3badfe6abbb4df44b89fbb185dcae9cc0e31a743a0', '2024-03-21 15:10:55.804', '20240314143841_init', NULL, NULL, '2024-03-21 15:10:55.793', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('e9f4579d-8d75-46ef-815d-dd5521607f35', '9e13c8e5d423894bb0cb46d6f580ff1e49a42f95223b841c7fa39410e4da41ad', '2024-03-21 15:10:55.844', '20240316115149_init', NULL, NULL, '2024-03-21 15:10:55.840', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('f14759fb-7788-4813-9547-3eb57ef2812b', '1a203e782fc0c0e43945a540062a9ed9208039380281cb5ecee21bec97fe2bc4', '2024-03-21 15:10:55.911', '20240316120547_init', NULL, NULL, '2024-03-21 15:10:55.897', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('f8e36c71-3aa0-4d1d-8c6f-e97547ee66fe', '740c2c632954b6656c949ca677eaea1eb8f93c9a6c117a5a0d1b54b501329aec', '2024-03-21 15:10:55.863', '20240316115439_init', NULL, NULL, '2024-03-21 15:10:55.844', 1);
COMMIT;

-- ----------------------------
-- Table structure for mac_vod
-- ----------------------------
DROP TABLE IF EXISTS `mac_vod`;
CREATE TABLE `mac_vod` (
  `vod_id` int unsigned NOT NULL AUTO_INCREMENT,
  `type_id` smallint NOT NULL DEFAULT '0',
  `type_id_1` smallint unsigned NOT NULL DEFAULT '0',
  `group_id` smallint unsigned NOT NULL DEFAULT '0',
  `vod_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_sub` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_en` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_status` tinyint unsigned NOT NULL DEFAULT '0',
  `vod_letter` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_color` varchar(6) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_tag` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_class` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pic` varchar(1024) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pic_thumb` varchar(1024) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pic_slide` varchar(1024) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pic_screenshot` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci,
  `vod_actor` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_director` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_writer` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_behind` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_blurb` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_remarks` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pubdate` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_total` mediumint unsigned NOT NULL DEFAULT '0',
  `vod_serial` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '0',
  `vod_tv` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_weekday` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_area` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_lang` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_year` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_version` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_state` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_author` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_jumpurl` varchar(150) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_tpl` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_tpl_play` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_tpl_down` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_isend` tinyint unsigned NOT NULL DEFAULT '0',
  `vod_lock` tinyint unsigned NOT NULL DEFAULT '0',
  `vod_level` tinyint unsigned NOT NULL DEFAULT '0',
  `vod_copyright` tinyint unsigned NOT NULL DEFAULT '0',
  `vod_points` smallint unsigned NOT NULL DEFAULT '0',
  `vod_points_play` smallint unsigned NOT NULL DEFAULT '0',
  `vod_points_down` smallint unsigned NOT NULL DEFAULT '0',
  `vod_hits` mediumint unsigned NOT NULL DEFAULT '0',
  `vod_hits_day` mediumint unsigned NOT NULL DEFAULT '0',
  `vod_hits_week` mediumint unsigned NOT NULL DEFAULT '0',
  `vod_hits_month` mediumint unsigned NOT NULL DEFAULT '0',
  `vod_duration` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_up` mediumint unsigned NOT NULL DEFAULT '0',
  `vod_down` mediumint unsigned NOT NULL DEFAULT '0',
  `vod_score` decimal(3,1) unsigned NOT NULL DEFAULT '0.0',
  `vod_score_all` mediumint unsigned NOT NULL DEFAULT '0',
  `vod_score_num` mediumint unsigned NOT NULL DEFAULT '0',
  `vod_time` int unsigned NOT NULL DEFAULT '0',
  `vod_time_add` int unsigned NOT NULL DEFAULT '0',
  `vod_time_hits` int unsigned NOT NULL DEFAULT '0',
  `vod_time_make` int unsigned NOT NULL DEFAULT '0',
  `vod_trysee` smallint unsigned NOT NULL DEFAULT '0',
  `vod_douban_id` int unsigned NOT NULL DEFAULT '0',
  `vod_douban_score` decimal(3,1) unsigned NOT NULL DEFAULT '0.0',
  `vod_reurl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_rel_vod` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_rel_art` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pwd` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pwd_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pwd_play` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pwd_play_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pwd_down` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_pwd_down_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_content` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `vod_play_from` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_play_server` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_play_note` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_play_url` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `vod_down_from` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_down_server` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_down_note` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '',
  `vod_down_url` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `vod_plot` tinyint unsigned NOT NULL DEFAULT '0',
  `vod_plot_name` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `vod_plot_detail` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`vod_id`) USING BTREE,
  KEY `type_id` (`type_id`) USING BTREE,
  KEY `type_id_1` (`type_id_1`) USING BTREE,
  KEY `vod_level` (`vod_level`) USING BTREE,
  KEY `vod_hits` (`vod_hits`) USING BTREE,
  KEY `vod_letter` (`vod_letter`) USING BTREE,
  KEY `vod_name` (`vod_name`) USING BTREE,
  KEY `vod_year` (`vod_year`) USING BTREE,
  KEY `vod_area` (`vod_area`) USING BTREE,
  KEY `vod_lang` (`vod_lang`) USING BTREE,
  KEY `vod_tag` (`vod_tag`) USING BTREE,
  KEY `vod_class` (`vod_class`) USING BTREE,
  KEY `vod_lock` (`vod_lock`) USING BTREE,
  KEY `vod_up` (`vod_up`) USING BTREE,
  KEY `vod_down` (`vod_down`) USING BTREE,
  KEY `vod_en` (`vod_en`) USING BTREE,
  KEY `vod_hits_day` (`vod_hits_day`) USING BTREE,
  KEY `vod_hits_week` (`vod_hits_week`) USING BTREE,
  KEY `vod_hits_month` (`vod_hits_month`) USING BTREE,
  KEY `vod_plot` (`vod_plot`) USING BTREE,
  KEY `vod_points_play` (`vod_points_play`) USING BTREE,
  KEY `vod_points_down` (`vod_points_down`) USING BTREE,
  KEY `group_id` (`group_id`) USING BTREE,
  KEY `vod_time_add` (`vod_time_add`) USING BTREE,
  KEY `vod_time` (`vod_time`) USING BTREE,
  KEY `vod_time_make` (`vod_time_make`) USING BTREE,
  KEY `vod_actor` (`vod_actor`) USING BTREE,
  KEY `vod_director` (`vod_director`) USING BTREE,
  KEY `vod_score_all` (`vod_score_all`) USING BTREE,
  KEY `vod_score_num` (`vod_score_num`) USING BTREE,
  KEY `vod_total` (`vod_total`) USING BTREE,
  KEY `vod_score` (`vod_score`) USING BTREE,
  KEY `vod_version` (`vod_version`) USING BTREE,
  KEY `vod_state` (`vod_state`) USING BTREE,
  KEY `vod_isend` (`vod_isend`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of mac_vod
-- ----------------------------
BEGIN;
INSERT INTO `mac_vod` (`vod_id`, `type_id`, `type_id_1`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_letter`, `vod_color`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_pic_screenshot`, `vod_actor`, `vod_director`, `vod_writer`, `vod_behind`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_total`, `vod_serial`, `vod_tv`, `vod_weekday`, `vod_area`, `vod_lang`, `vod_year`, `vod_version`, `vod_state`, `vod_author`, `vod_jumpurl`, `vod_tpl`, `vod_tpl_play`, `vod_tpl_down`, `vod_isend`, `vod_lock`, `vod_level`, `vod_copyright`, `vod_points`, `vod_points_play`, `vod_points_down`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_up`, `vod_down`, `vod_score`, `vod_score_all`, `vod_score_num`, `vod_time`, `vod_time_add`, `vod_time_hits`, `vod_time_make`, `vod_trysee`, `vod_douban_id`, `vod_douban_score`, `vod_reurl`, `vod_rel_vod`, `vod_rel_art`, `vod_pwd`, `vod_pwd_url`, `vod_pwd_play`, `vod_pwd_play_url`, `vod_pwd_down`, `vod_pwd_down_url`, `vod_content`, `vod_play_from`, `vod_play_server`, `vod_play_note`, `vod_play_url`, `vod_down_from`, `vod_down_server`, `vod_down_note`, `vod_down_url`, `vod_plot`, `vod_plot_name`, `vod_plot_detail`) VALUES (2, 6, 1, 0, '夺命狙击3破晓', '', 'duomingjuji3poxiao', 1, 'D', '', '', '战争', 'https://pic1.bdzyimg.com/upload/vod/20240319-1/7a0a9750aea8a2dafc0365f129b8bcdb.jpg', '', '海报图', '', '张钧涵,张冬,常海波,毕瀚文,毕雪', '赵勇', '', '', '1949年1月，北平在三次和谈之后宣告和平解放。本片以此为背景，讲述了北平城内的共产党地下工作者为执行一项必须完成的使命，与反派斗智斗勇，游走在生死边缘，最终力挽狂澜、扭转局势的故事。', '更新1080P', '', 0, '0', '', '', '大陆', '国语', '2023', '', '', '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 250, 270, 743, 938, '', 670, 197, 6.0, 42, 7, 1711195234, 1710858090, 0, 0, 0, 0, 0.0, '', '', '', '', '', '', '', '', '', '<p>1949年1月，北平在三次和谈之后宣告和平解放。本片以此为背景，讲述了北平城内的共产党地下工作者为执行一项必须完成的使命，与反派斗智斗勇，游走在生死边缘，最终力挽狂澜、扭转局势的故事。</p>', 'dbm3u8', 'no', '', '1080P$https://vod6.bdzybf7.com/20231122/YBpX6ZjZ/index.m3u8#1440P$https://vod6.bdzybf7.com/20231122/YBpX6ZjZ/index.m3u8', '', '', '', '', 0, '', '');
COMMIT;

-- ----------------------------
-- Table structure for options
-- ----------------------------
DROP TABLE IF EXISTS `options`;
CREATE TABLE `options` (
  `option_id` int NOT NULL AUTO_INCREMENT,
  `option_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `option_key` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`option_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of options
-- ----------------------------
BEGIN;
INSERT INTO `options` (`option_id`, `option_name`, `option_key`) VALUES (1, 'siteurl', 'http://127.0.0.1');
INSERT INTO `options` (`option_id`, `option_name`, `option_key`) VALUES (2, 'sitename', 'Netflix');
COMMIT;

-- ----------------------------
-- Table structure for payments
-- ----------------------------
DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `payment_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `pay_method` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `pid` int NOT NULL,
  `epay_key` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `payment_status` int NOT NULL,
  `payment_platform` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`payment_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of payments
-- ----------------------------
BEGIN;
INSERT INTO `payments` (`payment_id`, `name`, `payment_url`, `pay_method`, `pid`, `epay_key`, `payment_status`, `payment_platform`) VALUES (1, '支付宝', 'http://huohuafu.com/', 'alipay', 1094, 'FiwB5pYi5QFbhMfrf9IqeGF91rwKKQwM', 0, '火花支付');
INSERT INTO `payments` (`payment_id`, `name`, `payment_url`, `pay_method`, `pid`, `epay_key`, `payment_status`, `payment_platform`) VALUES (2, '微信', 'http://huohuafu.com/', 'wxpay', 1094, 'FiwB5pYi5QFbhMfrf9IqeGF91rwKKQwM', 0, '火花支付');
COMMIT;

-- ----------------------------
-- Table structure for plans
-- ----------------------------
DROP TABLE IF EXISTS `plans`;
CREATE TABLE `plans` (
  `plan_id` int unsigned NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `plan_duration_days` int unsigned NOT NULL,
  `plan_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `plan_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `plan_status` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`plan_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of plans
-- ----------------------------
BEGIN;
INSERT INTO `plans` (`plan_id`, `plan_name`, `plan_duration_days`, `plan_description`, `plan_price`, `plan_status`) VALUES (1, '基本123', 30, '快速,高清,无广告', 9.90, 0);
INSERT INTO `plans` (`plan_id`, `plan_name`, `plan_duration_days`, `plan_description`, `plan_price`, `plan_status`) VALUES (2, '标准', 90, '描述,3,4', 28.88, 0);
INSERT INTO `plans` (`plan_id`, `plan_name`, `plan_duration_days`, `plan_description`, `plan_price`, `plan_status`) VALUES (3, '高级', 372, '描述2', 88.88, 0);
COMMIT;

-- ----------------------------
-- Table structure for trade
-- ----------------------------
DROP TABLE IF EXISTS `trade`;
CREATE TABLE `trade` (
  `trade_id` int NOT NULL AUTO_INCREMENT,
  `trade_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `trade_money` decimal(10,2) DEFAULT NULL,
  `user_id` int NOT NULL,
  `trade_no` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `out_trade_no` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `pay_time` datetime DEFAULT NULL,
  `trade_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `pay_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `request_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `payment_platform` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`trade_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of trade
-- ----------------------------
BEGIN;
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (11, '标准', 28.88, 1, '202404071306510', NULL, '2024-04-07 13:08:14', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (12, '标准', 28.88, 1, '202404071306510', NULL, '2024-04-07 13:08:56', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (13, '高级', 88.88, 1, '202404071309109', NULL, '2024-04-07 13:09:14', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (14, '标准', 28.88, 1, '202404071309363', NULL, '2024-04-07 13:09:39', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (15, '标准', 28.88, 1, '202404071309363', NULL, '2024-04-07 13:10:28', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (16, '标准', 28.88, 1, '202404071309363', NULL, '2024-04-07 13:10:45', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (17, '基本', 9.99, 1, '202404071311469', NULL, '2024-04-07 13:11:47', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (18, '基本', 9.99, 1, '202404071313333', NULL, '2024-04-07 13:13:34', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (19, '基本', 1.00, 24, '202404071315494', NULL, '2024-04-07 13:15:50', NULL, 'TRADE_SUCCESS', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (20, '基本', 1.00, 24, '202404071319044', NULL, '2024-04-07 13:19:06', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (21, '基本', 1.00, 25, '202404072208341', NULL, '2024-04-07 22:08:37', NULL, 'TRADE_TIMEOUT', 'alipay', '::1', '火花支付');
INSERT INTO `trade` (`trade_id`, `trade_name`, `trade_money`, `user_id`, `trade_no`, `out_trade_no`, `create_time`, `pay_time`, `trade_status`, `pay_method`, `request_ip`, `payment_platform`) VALUES (22, '基本', 1.00, 26, '202404081624273', NULL, '2024-04-08 16:24:30', NULL, 'TRADE_TIMEOUT', 'alipay', '::1', '火花支付');
COMMIT;

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_status` int NOT NULL DEFAULT '0',
  `type_rank` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`type_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of type
-- ----------------------------
BEGIN;
INSERT INTO `type` (`type_id`, `type_name`, `type_slug`, `type_status`, `type_rank`) VALUES (1, '科幻', 'scifi', 0, 0);
INSERT INTO `type` (`type_id`, `type_name`, `type_slug`, `type_status`, `type_rank`) VALUES (11, '动作', 'action', 0, 0);
INSERT INTO `type` (`type_id`, `type_name`, `type_slug`, `type_status`, `type_rank`) VALUES (37, '自然', 'scifi2', 0, 0);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int unsigned NOT NULL AUTO_INCREMENT,
  `group_id` smallint unsigned NOT NULL DEFAULT '1',
  `email` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login_ip` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_login_time` datetime DEFAULT NULL,
  `password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reg_ip` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reg_time` datetime DEFAULT NULL,
  `status` tinyint unsigned NOT NULL DEFAULT '0',
  `username` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `plan_id` int DEFAULT NULL,
  `plan_expiration_time` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  KEY `type_id` (`group_id`) USING BTREE,
  KEY `user_name` (`username`) USING BTREE,
  KEY `user_reg_time` (`reg_time`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`user_id`, `group_id`, `email`, `last_login_ip`, `last_login_time`, `password`, `reg_ip`, `reg_time`, `status`, `username`, `plan_id`, `plan_expiration_time`) VALUES (1, 1, 'admin@gmail.com', '127.0.0.1', '2024-04-08 16:25:32', '$2a$10$E17H1nI5JlyMpLfj8tMX2eYos.h7r27hkyEMIzGqpET7tWSStTQCa', '127.0.0.1', '2024-03-21 23:22:17', 0, 'admin', 3, '2030-04-23 00:00:00');
INSERT INTO `user` (`user_id`, `group_id`, `email`, `last_login_ip`, `last_login_time`, `password`, `reg_ip`, `reg_time`, `status`, `username`, `plan_id`, `plan_expiration_time`) VALUES (24, 4, 'test001333@qq.com', '127.0.0.1', '2024-04-07 15:14:25', '$2a$10$NC2GZsJDUiNtthcZZ9ZQ6eQzI1AZ0HAlKu21E69iF26/UHEg7K0yW', '127.0.0.1', '2024-04-07 12:51:48', 0, 'test00123333', NULL, '2024-04-28 13:19:44');
INSERT INTO `user` (`user_id`, `group_id`, `email`, `last_login_ip`, `last_login_time`, `password`, `reg_ip`, `reg_time`, `status`, `username`, `plan_id`, `plan_expiration_time`) VALUES (25, 2, 'asd0002@qq.com', '127.0.0.1', '2024-04-07 22:08:49', '$2a$10$5FzG66QyNFVECwD4L7rFkeD.bpbf9Bbv3Lbvb3fIRuw3..MMNqiyO', '127.0.0.1', '2024-04-07 22:08:29', 0, 'asd0002', NULL, NULL);
INSERT INTO `user` (`user_id`, `group_id`, `email`, `last_login_ip`, `last_login_time`, `password`, `reg_ip`, `reg_time`, `status`, `username`, `plan_id`, `plan_expiration_time`) VALUES (26, 4, 'fdsadasd@qq.com', '127.0.0.1', '2024-04-08 16:32:39', '$2a$10$ScXH3r5J9CqT.fwG47HF2eoMzc1bivf0rM3S3hFc0slM0ChVPBU5G', '127.0.0.1', '2024-04-08 16:24:20', 1, 'fdsadasd', 1, '2024-04-28 00:00:00');
COMMIT;

-- ----------------------------
-- Table structure for user_favorites
-- ----------------------------
DROP TABLE IF EXISTS `user_favorites`;
CREATE TABLE `user_favorites` (
  `favorite_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `vod_id` int DEFAULT NULL,
  PRIMARY KEY (`favorite_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2059616258 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of user_favorites
-- ----------------------------
BEGIN;
INSERT INTO `user_favorites` (`favorite_id`, `user_id`, `vod_id`) VALUES (-1925017598, 1, 130);
INSERT INTO `user_favorites` (`favorite_id`, `user_id`, `vod_id`) VALUES (-477982718, 1, 112);
INSERT INTO `user_favorites` (`favorite_id`, `user_id`, `vod_id`) VALUES (755142657, 1, 110);
INSERT INTO `user_favorites` (`favorite_id`, `user_id`, `vod_id`) VALUES (1371705346, 1, 113);
COMMIT;

-- ----------------------------
-- Table structure for user_group
-- ----------------------------
DROP TABLE IF EXISTS `user_group`;
CREATE TABLE `user_group` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `group_status` tinyint unsigned NOT NULL DEFAULT '0',
  `group_type` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`group_id`) USING BTREE,
  KEY `group_status` (`group_status`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_group
-- ----------------------------
BEGIN;
INSERT INTO `user_group` (`group_id`, `group_name`, `group_status`, `group_type`) VALUES (1, '管理员', 0, 'admin');
INSERT INTO `user_group` (`group_id`, `group_name`, `group_status`, `group_type`) VALUES (2, '普通用户', 0, 'member');
INSERT INTO `user_group` (`group_id`, `group_name`, `group_status`, `group_type`) VALUES (3, '会员', 0, 'VIP');
INSERT INTO `user_group` (`group_id`, `group_name`, `group_status`, `group_type`) VALUES (4, '垃圾用户', 1, 'spam');
COMMIT;

-- ----------------------------
-- Table structure for user_plan_subscription
-- ----------------------------
DROP TABLE IF EXISTS `user_plan_subscription`;
CREATE TABLE `user_plan_subscription` (
  `subscription_id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `plan_id` int unsigned NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  PRIMARY KEY (`subscription_id`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE,
  KEY `plan_id` (`plan_id`) USING BTREE,
  CONSTRAINT `user_plan_subscription_fk1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_plan_subscription_fk2` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`plan_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_plan_subscription
-- ----------------------------
BEGIN;
INSERT INTO `user_plan_subscription` (`subscription_id`, `user_id`, `plan_id`, `start_date`, `end_date`) VALUES (1, 1, 1, '2024-04-02 13:44:13', '2024-04-02 13:44:15');
COMMIT;

-- ----------------------------
-- Table structure for vod
-- ----------------------------
DROP TABLE IF EXISTS `vod`;
CREATE TABLE `vod` (
  `vod_id` int NOT NULL AUTO_INCREMENT,
  `type_id` int NOT NULL,
  `group_id` int NOT NULL DEFAULT '1',
  `vod_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_sub` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_status` int NOT NULL DEFAULT '0',
  `vod_tag` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_pic` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_pic_thumb` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_pic_slide` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_actor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_director` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_writer` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_blurb` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `vod_remarks` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_pubdate` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_state` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_level` int DEFAULT NULL,
  `vod_copyright` int DEFAULT '0',
  `vod_hits` int DEFAULT NULL,
  `vod_hits_day` int DEFAULT NULL,
  `vod_hits_week` int DEFAULT NULL,
  `vod_hits_month` int DEFAULT NULL,
  `vod_duration` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_time` int DEFAULT NULL,
  `vod_time_add` int DEFAULT NULL,
  `vod_douban_id` int DEFAULT NULL,
  `vod_douban_score` decimal(3,1) DEFAULT NULL,
  `vod_play_from` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vod_play_url` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`vod_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of vod
-- ----------------------------
BEGIN;
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (1, 1, 2, '首尔之春2', NULL, NULL, 0, NULL, NULL, 'https://file.uhsea.com/2403/e421e1e61b5c8175dc7db2bd62c6c70a8S.webp', NULL, 'https://file.uhsea.com/2403/47b995a7f671f5cfb0db6dd9bdb03ec32U.webp', '黄政民 / 郑雨盛 / 李星民 / 朴解浚 / 金成畇 / 朴勋', '金成洙', '金成洙', '1979年10月26日，时任韩国总统的朴正熙被自己的亲信射杀，局势顿时波谲云诡。为调查此事，陆军保安司令官全斗光（黄政民 饰）被任命为联合调查总部部长，而这个天生反骨的男人趁机扩大自己的势力，拉帮结伙，培植亲信，狼子野心昭然若揭。为了牵制全斗光，参谋总长任命将军李泰信（郑雨盛 饰）担任首都警备司令官，以防肘腋之变。与此同时，全斗光感受到来自总长的威胁，于是纠集亲信密谋逮捕总长，试图先下手为强。谁曾想全的人马急于求成，在未能逼迫代总统签署逮捕令之前便展开行动。成王败寇，一旦失败就会成为韩国的叛国者。一不做二不休的全斗光索性揭竿而起。\r\n　　而孤军奋战的李泰信，将秉承最朴素的信念与叛军展开对抗……', '更新1080P', NULL, NULL, 1, 0, 999, NULL, NULL, NULL, NULL, NULL, 1711794506, NULL, NULL, 'dbm3u8', '1080P$https://vod6.bdzybf7.com/20231122/YBpX6ZjZ/index.m3u8#1440P$https://vod6.bdzybf7.com/20231122/YBpX6ZjZ/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (108, 11, 2, '双面特工', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220407-2/897f825f928bf18a709e413a654ed54b.jpg', NULL, NULL, '克里斯·库珀,瑞恩·菲利普,劳拉·琳妮,卡罗利娜·达韦纳,', '比利·雷,', '', 'FBI初级特工艾瑞克（Ryan Phillippe 饰）被总部从一件外围任务中召回，奉命监视有重大叛国嫌疑的FBI信息安全部主管罗伯特（Chris Cooper 饰），罗伯特与苏联特工周璇二十余年，但', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1649317145, NULL, NULL, 'dbyun$$$dbm3u8', '正片$https://vod2.bdzybf7.com/share/eB1oc1XTojn6ZQHk#1$https://vod6.bdzybf7.com/share/LU2UbMea8d2XKcUw#2$https://vod6.bdzybf7.com/share/naalR9Z1imb0va6t#1080P$https://vod6.bdzybf7.com/share/sRc792rvHSGa9M4J$$$正片$https://vod2.bdzybf7.com/20220330/ACGozXzG/index.m3u8#1$https://vod6.bdzybf7.com/20230704/bQ3tkB3Q/index.m3u8#2$https://vod6.bdzybf7.com/20230704/Lg8riQXF/index.m3u8#1080P$https://vod6.bdzybf7.com/20230704/fFjfo1la/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (109, 11, 2, '佐罗', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240124-1/2fe4da38e6e4f8d0fb3eba823e556b3e.jpg', NULL, NULL, '阿兰·德龙,奥塔维亚·皮科洛,恩佐·塞鲁西科,穆斯塔什,吉雅科莫·罗西·斯图尔特', '杜奇奥·泰萨利', '', '西班牙人在南美洲殖民统治时代，苛捐杂税民不聊生。新总督米格尔在上任途中被杀，临死时把官印交与好友“欧洲第一剑士”唐迭戈（阿兰·德龙AlainDelon饰），要其承继遗志。三个月后，新总督突然出现，不过', '更新10', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1706057142, NULL, NULL, 'dbyun$$$dbm3u8', '1$https://vod6.bdzybf7.com/share/sLEDH0wDze8uoV7b#2$https://vod6.bdzybf7.com/share/Pw9qxmfz3bvpHGEt#3$https://vod6.bdzybf7.com/share/dZiLCJ6TPd25Wi9U#4$https://vod6.bdzybf7.com/share/C75h8r0PdfGeF3xl#5$https://vod6.bdzybf7.com/share/rc87zPAhisIwDyOL#6$https://vod6.bdzybf7.com/share/bUsmluuNVy5j7yiU#7$https://vod6.bdzybf7.com/share/BVtQNTUi7R6bUr1c#8$https://vod6.bdzybf7.com/share/BXhrDVsYuHVHwSK1#9$https://vod6.bdzybf7.com/share/JgM8lqCnwTFzJYH0#10$https://vod6.bdzybf7.com/share/Ngtro2RrRu3DjUoW$$$1$https://vod6.bdzybf7.com/20240123/7hxbb15f/index.m3u8#2$https://vod6.bdzybf7.com/20240125/GkUlsGAa/index.m3u8#3$https://vod6.bdzybf7.com/20240219/UDbL8etB/index.m3u8#4$https://vod6.bdzybf7.com/20240306/xg5TX48k/index.m3u8#5$https://vod6.bdzybf7.com/20240306/lmdn0geI/index.m3u8#6$https://vod6.bdzybf7.com/20240306/rA19UFqW/index.m3u8#7$https://vod6.bdzybf7.com/20240306/942DJ2Sd/index.m3u8#8$https://vod6.bdzybf7.com/20240306/towW7wk9/index.m3u8#9$https://vod6.bdzybf7.com/20240308/IIrV8174/index.m3u8#10$https://vod6.bdzybf7.com/20240312/3r6436Cr/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (110, 11, 2, '我本是高山', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240308-1/1109cd3bb37f00330bbf1c73e76f80bf.jpg', NULL, NULL, '海清,陈永胜,柴烨,王玥婷,万国鹏,美朵达瓦 ,赵瑞婷,罗解艳,郭莉娜,潘家艳,杨颜嘉,刘雅瑟,杨皓宇,胡歌,张丰毅,李晨,秦海璐,刘奕君,孙少兰,李依晓,吴妍妍', '郑大圣,杨瑾', '', '这是一个坚毅的女人和一群刚刚毕业还很稚嫩的老师，带着一百多个女孩成功逆天改命的故事，是关于爱、青春、热血和命运……影片根据云南丽江华坪女子高级中学校长张桂梅真实事迹改编。', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709888643, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/ZwfpuXDnaEksm7AC$$$1080P$https://vod6.bdzybf7.com/20240308/SDE7rlzc/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (111, 11, 2, '绅士们', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220530-2/aafc9993015c64f249cbfeccfa3c2ae7.jpg', NULL, NULL, '马修·麦康纳,查理·汉纳姆,休·格兰特,亨利·戈尔丁', '盖·里奇', '', '美国移民Mickey Pearson（马修·麦康纳 饰）成功在英国伦敦建立大麻帝国，发了大财后，他试图将资产转卖给一个美国富豪。然而风声走漏，一连串的阴谋及谎言开始从Mickey展开…私家侦探Flet', '更新8', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1653897301, NULL, NULL, 'dbm3u8$$$dbyun', '正片$https://vod2.bdzybf7.com/20220330/BfyosS99/index.m3u8#1$https://vod6.bdzybf7.com/20240308/7XAmbgFn/index.m3u8#2$https://vod6.bdzybf7.com/20240308/cFoDOK5d/index.m3u8#3$https://vod6.bdzybf7.com/20240308/ZddxOx18/index.m3u8#4$https://vod6.bdzybf7.com/20240308/IrqbVq4A/index.m3u8#5$https://vod6.bdzybf7.com/20240308/Ta8XzEXX/index.m3u8#6$https://vod6.bdzybf7.com/20240308/IfoK6OWh/index.m3u8#7$https://vod6.bdzybf7.com/20240308/XMzlOHsQ/index.m3u8#8$https://vod6.bdzybf7.com/20240308/l4kQddHV/index.m3u8$$$正片$https://vod2.bdzybf7.com/share/cMV8j6WGfPhyRcDZ#1$https://vod6.bdzybf7.com/share/35kT5EQGzQryIate#2$https://vod6.bdzybf7.com/share/Jlz1yuLmWxjlemz2#3$https://vod6.bdzybf7.com/share/i7HN5R8T31uU9pVD#4$https://vod6.bdzybf7.com/share/9l7XWDu5c6G1U7HH#5$https://vod6.bdzybf7.com/share/1yc0zlnGDWAo4nqq#6$https://vod6.bdzybf7.com/share/feUTGp3MDnh5QsTw#7$https://vod6.bdzybf7.com/share/4U1pnQul9Mk0KgXR#8$https://vod6.bdzybf7.com/share/nTt05woBErd1LSUN');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (112, 11, 2, '裂战', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240307-1/e8895ac6df621d48d6c325a37c2b74bc.jpg', NULL, NULL, '安志杰,王清亭,释彦能,李梦,韩彦博,夏若妍,张晶,赵菁,陈升卫', '关越', '', '受温室效应的影响，全球各地极端自然灾害频发，为抵御自然灾害对植物的影响，星火种子公司利用基因编译技术，培育研制出了超级橡胶种子SR-2，受到东南亚DB公司邀请前往新山角一带试种植。国际安保队长林翔带队', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709825834, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/avnmFZ9FxyZ2of8F$$$1080P$https://vod6.bdzybf7.com/20240307/fOFzPoq5/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (113, 11, 2, '特种突袭之觉醒', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240307-1/81102f17d3047a62418a623a68e4cfeb.jpg', NULL, NULL, '赵英龙,马驰,王鹤贺,田牧童,杨璐嘉', '何自强', '', '退伍特种兵柯北，在一次国外旅行中，莫名地卷入黑帮交易。为保护妻儿与黑势力交手，却意外偶遇当年的宿敌——杀手野狗。妻儿被掳，生死下落不明。钱版交易，家国抉择两难。柯北不愿战友冒险，更不愿为小家损害家国利', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709825827, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/WfA5QyequDCuqTaY$$$1080P$https://vod6.bdzybf7.com/20240307/OUYufBz2/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (114, 11, 2, '郊游', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220530-3/b518a0aae751825a73d63b02a420f252.jpg', NULL, NULL, '李康生,陆弈静,陈湘琪,杨贵媚,', '蔡明亮,', '', '小康是无用之人，在车水马龙中高举广告招牌维生，即便狂风暴雨亦屹立不摇。他举牌、点烟、尿尿，再举牌、点烟、尿尿，任车阵喧嚣从身旁呼啸而过。小康的生命中只有两个孩子，他们一起吃饭、一起刷牙、一起更衣，一起', '更新12', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1653897509, NULL, NULL, 'dbm3u8$$$dbyun', '正片$https://vod2.bdzybf7.com/20220330/ccj2yiXq/index.m3u8#1$https://vod6.bdzybf7.com/20240217/ABRZqzb0/index.m3u8#2$https://vod6.bdzybf7.com/20240217/k9TyjFnJ/index.m3u8#3$https://vod6.bdzybf7.com/20240219/sN03Ot3I/index.m3u8#4$https://vod6.bdzybf7.com/20240219/ShBSaFoy/index.m3u8#5$https://vod6.bdzybf7.com/20240222/yYOMCdGj/index.m3u8#6$https://vod6.bdzybf7.com/20240223/ZIiInahi/index.m3u8#7$https://vod6.bdzybf7.com/20240224/eICkzr0u/index.m3u8#8$https://vod6.bdzybf7.com/20240225/3zATDreC/index.m3u8#9$https://vod6.bdzybf7.com/20240303/tmE3Ix0T/index.m3u8#10$https://vod6.bdzybf7.com/20240303/G2GQM5tI/index.m3u8#11$https://vod6.bdzybf7.com/20240303/acfM365S/index.m3u8#12$https://vod6.bdzybf7.com/20240304/15ZrlkHD/index.m3u8$$$正片$https://vod2.bdzybf7.com/share/TmKtrW6dr4qwWB53#1$https://vod6.bdzybf7.com/share/8oTgHHj5MPqxHTcF#2$https://vod6.bdzybf7.com/share/Ng5hGwVgztMCrGRF#3$https://vod6.bdzybf7.com/share/03U77XFlLdvjXO1N#4$https://vod6.bdzybf7.com/share/64XWoZiRjmojVIKE#5$https://vod6.bdzybf7.com/share/YjmV02IEmmyLNkdZ#6$https://vod6.bdzybf7.com/share/FjrDWaGDchRbOBBf#7$https://vod6.bdzybf7.com/share/rwF5aW2w2qfDg2Ct#8$https://vod6.bdzybf7.com/share/XvD9AU995LW2XJgI#9$https://vod6.bdzybf7.com/share/8t22VWOqWsKsFz6D#10$https://vod6.bdzybf7.com/share/7Uq1wgzUXbRWcLKD#11$https://vod6.bdzybf7.com/share/md8Ro08RvgkEnXOT#12$https://vod6.bdzybf7.com/share/90dEGGvZlLeLOJHE');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (116, 11, 2, '湘西诡事', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240303-1/1d7d7097faed2a4812c21530a80ef933.jpg', NULL, NULL, '蒲巴甲,王婉中,赵燕国彰,克拉拉,尚铁龙,岳冬峰', '李立铭', '', '人走后按照封门村当地习俗，需要入夜下葬，棺内却莫名出现一具女尸，引得全村百姓不安。众百姓贴悬赏告示，欲征集高人道长前来镇压。神秘道长风冷清深入凶宅破阴气时，使出下斗绝技才得脱身，暴露了自己原为倒斗门淘', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709479452, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/F8PSSmbA5QGm9G4H$$$1080P$https://vod6.bdzybf7.com/20240303/yGBvWZ93/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (117, 11, 2, '虎王·王者归来', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240303-1/60ed61cbbe2b7a321540eeff011f6a66.jpg', NULL, NULL, '内详', '内详', '', '内详', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709479444, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/FlzvYtfWDbqqxhM8$$$1080P$https://vod6.bdzybf7.com/20240303/wZAekCy5/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (118, 11, 2, '狄仁杰之通天玄案', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240224-1/5cf830c0088d62cc49bbf0cedc4a423d.jpg', NULL, NULL, '魏巍,高洋,郑希怡,梁缘,巫迪文,沈雪炜,惠祥意,李军,张欢,聂新源', '童辉', '', '唐时，太平公主做了个骑着“银雪白马”驰骋月下的“仙境之梦”，女方士玄姬为其释梦，白马为“天马”，并令公主“梦想成真”。玄姬受宠。此时大唐神探狄仁杰侦破了一起“灭门案”，却竟是因为“天马”而酿成的一幕生', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1708763679, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/YBk5SAzaXohFcNYr$$$1080P$https://vod6.bdzybf7.com/20240223/sJDfEQke/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (119, 11, 2, '美国小说', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240224-1/002a3a3e54ffc20b321d91eb447f8da8.jpg', NULL, NULL, '杰弗里·怀特,翠西·艾利斯·罗斯,约翰·奥提兹,埃里卡·亚历山大,莱斯利·格塞斯,亚当·布罗迪,凯斯·大卫,伊萨·雷,斯特林·K·布朗,迈拉·卢克利希亚·泰勒,雷蒙德·安东尼·托马斯,奥基里特·奥诺多瓦,米利亚姆·肖尔,迈克尔·西里尔·克赖顿,派特里克·费斯克勒,尼尔·勒纳,J·C·麦肯泽,詹·哈里斯,贝茨·怀尔德,迈克尔·吉布林', '柯德·杰弗森', '', '以出版行业的角度聚焦将“少数群体的声音”进行商品化。', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1708761572, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/QNaBZCIB4BLwSgQP$$$1080P$https://vod6.bdzybf7.com/20240223/Ijy80Kzq/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (120, 11, 2, '怒潮', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220530-1/74eb82e20789a25c8db64476047d29cb.jpg', NULL, NULL, '张平,周凤山,关淑贞,刘秉章,翟春华', '史文炽', '', '　　1927年，4.12和5.21两起反革命事变发生后，革命转入低潮。农协主席邱金（张平 饰）与敌博斗中负伤，被特派员罗大成（周凤山 饰）救出。罗大成在农民运动讲习所聆听过毛泽东的教海，深知组织群众、', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1648836566, NULL, NULL, 'dbyun$$$dbm3u8', '正片$https://vod2.bdzybf7.com/share/uhfV0XqXnJpwSGe2#1080P$https://vod6.bdzybf7.com/share/n2RmvUwAlqO66N3W$$$正片$https://vod2.bdzybf7.com/20220330/6hT1h04P/index.m3u8#1080P$https://vod6.bdzybf7.com/20240223/vHMpwfbA/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (121, 11, 2, '恶果', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220602-1/694741811458056d5989cd956fc8c583.png', NULL, NULL, '王美心', '洪雷', '', '一个独居的老头去世了，相熟的街坊亲友来简单给他办了办白事。街坊在老头的葬礼上闲聊,提到了他和他儿子的往事，在两人的对错上各执一词。街坊们思考儿子是否也会像父亲那样对待自己的儿子时，儿子带着孙子出现在葬', '更新HD', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1646541292, NULL, NULL, 'dbm3u8$$$dbyun', '正片$https://vod2.bdzybf7.com/20220329/kCrCQDJZ/index.m3u8#HD$https://vod6.bdzybf7.com/20240220/hJqTCgI2/index.m3u8$$$正片$https://vod2.bdzybf7.com/share/iwIfMzJ9iGwiaSZH#HD$https://vod6.bdzybf7.com/share/7Fdq7lWBIFPnnrAk');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (122, 11, 2, '艾琳', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240320-1/09553cb52d148e7cabc091a42fd9d8df.jpg', NULL, NULL, '托马辛·麦肯齐,安妮·海瑟薇,谢伊·惠格姆,希芳·法隆,欧文·泰格,托妮·帕塔诺,萨姆·尼沃拉,威廉·希尔,皮特·麦克罗比,彼得冯伯格,帕特里克·努南,杰佛逊·怀特,亚历山大·詹姆森,帕特里克·瑞安·伍德,加文·K·巴菲尔德,梅森·佩托格拉索,斯宾塞·巴恩斯,马克·哈夫利斯,布伦丹·伯克,朱利安·加维兰内斯', '威廉·奥尔德罗伊德', '', '电影根据OttessaMoshfegh的同名小说改编。故事发生在1964年马萨诸塞州的一个严冬。年轻的艾琳在监狱当秘书，当迷人的咨询师瑞贝卡成为她的新同事，她情不自禁地被对方深深吸引。在瑞贝卡透露了一', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1710912364, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/NgaFEuD1AHj6wtuw$$$1080P$https://vod6.bdzybf7.com/20240105/39XOu06S/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (123, 11, 2, '小镇双雄', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240319-1/0535e61cd00ca0d20bfd48b792e5ff9a.jpg', NULL, NULL, '谢震伟,裴兴雷,孔芮', '刘子斌', '', '影片描述了两位小镇青年宏升和磊子在传承和摇滚的两种音乐之路上的文化碰撞，在寻求音乐梦想之路过程中的经历和磨难后，以自创曲目《贺兰英雄》意外在网络爆红，故事的最终磊子和宏升回到了小镇一起演出了一曲《东方', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1710858217, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/2Jv7ndGl5P2QAhwP$$$1080P$https://vod6.bdzybf7.com/20231121/EGpAbs0e/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (127, 11, 2, '杰西卡', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240319-1/eb9a1d071cb2a0576f2401ff4466f58d.jpeg', NULL, NULL, '傑西卡', '皮特·欧斯', '', '为了逃避跟踪狂凯文的杰西卡一路自驾到了新墨西哥州，在那里遇见了多年未见的好友埃琳娜。埃琳娜听说了杰西卡的遭遇后便提议让她在自己的住所一段时间。然而，本不应该出现的凯文却毫无征兆地出现在了埃琳娜的住所附', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1710800435, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/PAVhcJKUkQb5rXvB$$$1080P$https://vod6.bdzybf7.com/20230704/yguspKgo/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (128, 11, 2, '双面特工', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220407-2/897f825f928bf18a709e413a654ed54b.jpg', NULL, NULL, '克里斯·库珀,瑞恩·菲利普,劳拉·琳妮,卡罗利娜·达韦纳,', '比利·雷,', '', 'FBI初级特工艾瑞克（Ryan Phillippe 饰）被总部从一件外围任务中召回，奉命监视有重大叛国嫌疑的FBI信息安全部主管罗伯特（Chris Cooper 饰），罗伯特与苏联特工周璇二十余年，但', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1649317145, NULL, NULL, 'dbyun$$$dbm3u8', '正片$https://vod2.bdzybf7.com/share/eB1oc1XTojn6ZQHk#1$https://vod6.bdzybf7.com/share/LU2UbMea8d2XKcUw#2$https://vod6.bdzybf7.com/share/naalR9Z1imb0va6t#1080P$https://vod6.bdzybf7.com/share/sRc792rvHSGa9M4J$$$正片$https://vod2.bdzybf7.com/20220330/ACGozXzG/index.m3u8#1$https://vod6.bdzybf7.com/20230704/bQ3tkB3Q/index.m3u8#2$https://vod6.bdzybf7.com/20230704/Lg8riQXF/index.m3u8#1080P$https://vod6.bdzybf7.com/20230704/fFjfo1la/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (129, 11, 2, '佐罗', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240124-1/2fe4da38e6e4f8d0fb3eba823e556b3e.jpg', NULL, NULL, '阿兰·德龙,奥塔维亚·皮科洛,恩佐·塞鲁西科,穆斯塔什,吉雅科莫·罗西·斯图尔特', '杜奇奥·泰萨利', '', '西班牙人在南美洲殖民统治时代，苛捐杂税民不聊生。新总督米格尔在上任途中被杀，临死时把官印交与好友“欧洲第一剑士”唐迭戈（阿兰·德龙AlainDelon饰），要其承继遗志。三个月后，新总督突然出现，不过', '更新10', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1706057142, NULL, NULL, 'dbyun$$$dbm3u8', '1$https://vod6.bdzybf7.com/share/sLEDH0wDze8uoV7b#2$https://vod6.bdzybf7.com/share/Pw9qxmfz3bvpHGEt#3$https://vod6.bdzybf7.com/share/dZiLCJ6TPd25Wi9U#4$https://vod6.bdzybf7.com/share/C75h8r0PdfGeF3xl#5$https://vod6.bdzybf7.com/share/rc87zPAhisIwDyOL#6$https://vod6.bdzybf7.com/share/bUsmluuNVy5j7yiU#7$https://vod6.bdzybf7.com/share/BVtQNTUi7R6bUr1c#8$https://vod6.bdzybf7.com/share/BXhrDVsYuHVHwSK1#9$https://vod6.bdzybf7.com/share/JgM8lqCnwTFzJYH0#10$https://vod6.bdzybf7.com/share/Ngtro2RrRu3DjUoW$$$1$https://vod6.bdzybf7.com/20240123/7hxbb15f/index.m3u8#2$https://vod6.bdzybf7.com/20240125/GkUlsGAa/index.m3u8#3$https://vod6.bdzybf7.com/20240219/UDbL8etB/index.m3u8#4$https://vod6.bdzybf7.com/20240306/xg5TX48k/index.m3u8#5$https://vod6.bdzybf7.com/20240306/lmdn0geI/index.m3u8#6$https://vod6.bdzybf7.com/20240306/rA19UFqW/index.m3u8#7$https://vod6.bdzybf7.com/20240306/942DJ2Sd/index.m3u8#8$https://vod6.bdzybf7.com/20240306/towW7wk9/index.m3u8#9$https://vod6.bdzybf7.com/20240308/IIrV8174/index.m3u8#10$https://vod6.bdzybf7.com/20240312/3r6436Cr/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (130, 11, 2, '我本是高山', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240308-1/1109cd3bb37f00330bbf1c73e76f80bf.jpg', NULL, NULL, '海清,陈永胜,柴烨,王玥婷,万国鹏,美朵达瓦 ,赵瑞婷,罗解艳,郭莉娜,潘家艳,杨颜嘉,刘雅瑟,杨皓宇,胡歌,张丰毅,李晨,秦海璐,刘奕君,孙少兰,李依晓,吴妍妍', '郑大圣,杨瑾', '', '这是一个坚毅的女人和一群刚刚毕业还很稚嫩的老师，带着一百多个女孩成功逆天改命的故事，是关于爱、青春、热血和命运……影片根据云南丽江华坪女子高级中学校长张桂梅真实事迹改编。', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709888643, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/ZwfpuXDnaEksm7AC$$$1080P$https://vod6.bdzybf7.com/20240308/SDE7rlzc/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (131, 11, 2, '绅士们', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220530-2/aafc9993015c64f249cbfeccfa3c2ae7.jpg', NULL, NULL, '马修·麦康纳,查理·汉纳姆,休·格兰特,亨利·戈尔丁', '盖·里奇', '', '美国移民Mickey Pearson（马修·麦康纳 饰）成功在英国伦敦建立大麻帝国，发了大财后，他试图将资产转卖给一个美国富豪。然而风声走漏，一连串的阴谋及谎言开始从Mickey展开…私家侦探Flet', '更新8', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1653897301, NULL, NULL, 'dbm3u8$$$dbyun', '正片$https://vod2.bdzybf7.com/20220330/BfyosS99/index.m3u8#1$https://vod6.bdzybf7.com/20240308/7XAmbgFn/index.m3u8#2$https://vod6.bdzybf7.com/20240308/cFoDOK5d/index.m3u8#3$https://vod6.bdzybf7.com/20240308/ZddxOx18/index.m3u8#4$https://vod6.bdzybf7.com/20240308/IrqbVq4A/index.m3u8#5$https://vod6.bdzybf7.com/20240308/Ta8XzEXX/index.m3u8#6$https://vod6.bdzybf7.com/20240308/IfoK6OWh/index.m3u8#7$https://vod6.bdzybf7.com/20240308/XMzlOHsQ/index.m3u8#8$https://vod6.bdzybf7.com/20240308/l4kQddHV/index.m3u8$$$正片$https://vod2.bdzybf7.com/share/cMV8j6WGfPhyRcDZ#1$https://vod6.bdzybf7.com/share/35kT5EQGzQryIate#2$https://vod6.bdzybf7.com/share/Jlz1yuLmWxjlemz2#3$https://vod6.bdzybf7.com/share/i7HN5R8T31uU9pVD#4$https://vod6.bdzybf7.com/share/9l7XWDu5c6G1U7HH#5$https://vod6.bdzybf7.com/share/1yc0zlnGDWAo4nqq#6$https://vod6.bdzybf7.com/share/feUTGp3MDnh5QsTw#7$https://vod6.bdzybf7.com/share/4U1pnQul9Mk0KgXR#8$https://vod6.bdzybf7.com/share/nTt05woBErd1LSUN');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (133, 11, 2, '特种突袭之觉醒', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240307-1/81102f17d3047a62418a623a68e4cfeb.jpg', NULL, NULL, '赵英龙,马驰,王鹤贺,田牧童,杨璐嘉', '何自强', '', '退伍特种兵柯北，在一次国外旅行中，莫名地卷入黑帮交易。为保护妻儿与黑势力交手，却意外偶遇当年的宿敌——杀手野狗。妻儿被掳，生死下落不明。钱版交易，家国抉择两难。柯北不愿战友冒险，更不愿为小家损害家国利', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709825827, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/WfA5QyequDCuqTaY$$$1080P$https://vod6.bdzybf7.com/20240307/OUYufBz2/index.m3u8');
INSERT INTO `vod` (`vod_id`, `type_id`, `group_id`, `vod_name`, `vod_sub`, `vod_en`, `vod_status`, `vod_tag`, `vod_class`, `vod_pic`, `vod_pic_thumb`, `vod_pic_slide`, `vod_actor`, `vod_director`, `vod_writer`, `vod_blurb`, `vod_remarks`, `vod_pubdate`, `vod_state`, `vod_level`, `vod_copyright`, `vod_hits`, `vod_hits_day`, `vod_hits_week`, `vod_hits_month`, `vod_duration`, `vod_time`, `vod_time_add`, `vod_douban_id`, `vod_douban_score`, `vod_play_from`, `vod_play_url`) VALUES (135, 11, 2, '周处除三害', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240303-1/c35f8db3b6aa780bfb6f434d3141f8b4.jpg', NULL, NULL, '阮经天,袁富华,陈以文,王净,谢琼煖,李李仁,刘子铨,曾珮瑜,陈秉佑 ,游安顺,郑有杰,盛鉴,吴奕蓉,黄迪扬,曾向镇,沈威年,杨迦恩,曾皓泽,郑永岳,张启乐,苏耀庭,练家豪,李明哲,廖威迪,罗振佑,王又正,林君柔,黄瀚德,刘子朋,罗能华,许莉廷,林瑞华,刘禾育,郭容腾,李年雄,许德城,黄惠卿,刘昕昊', '黄精甫', '', '通缉犯陈桂林（阮经天饰）生命将尽，却发现自己在通缉榜上只排名第三，他决心查出前两名通缉犯的下落，并将他们一一除掉。陈桂林以为自己已成为当代的周处除三害，却没想到永远参不透的贪嗔痴，才是人生终要面对的罪', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709481528, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/Fjqlg042iWLQmZdA$$$1080P$https://vod6.bdzybf7.com/20240303/vSdbYitc/index.m3u8');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
