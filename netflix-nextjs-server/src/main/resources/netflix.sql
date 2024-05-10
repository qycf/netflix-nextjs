/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80030 (8.0.30)
 Source Host           : localhost:3306
 Source Schema         : netflix

 Target Server Type    : MySQL
 Target Server Version : 80030 (8.0.30)
 File Encoding         : 65001

 Date: 10/05/2024 19:15:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for options
-- ----------------------------
DROP TABLE IF EXISTS `options`;
CREATE TABLE `options`  (
  `option_id` int NOT NULL AUTO_INCREMENT,
  `option_key` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `option_value` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`option_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of options
-- ----------------------------
INSERT INTO `options` VALUES (6, 'mail_account', '{\"host\":\"smtp.qq.com\",\"port\":\"465\",\"from\":\"766479917@qq.com\",\"user\":\"766479917@qq.com\",\"pass\":\"jbeaiglnstlibchb\"}');
INSERT INTO `options` VALUES (7, 'site_settings', '{\"siteTitle\":\"Netflix for Next.js\",\"siteLogo\":\"https://qu2u-com-1305976148.cos.ap-guangzhou.myqcloud.com/Netflix_2015_logo.svg\",\"siteFavicon\":\"http://localhost:3000/favicon.ico\",\"siteDescription\":\"在线观赏 Netflix（网飞）电影与节目，或直接串流至智能电视、游戏机、PC、Mac、手机、平板电脑等多种装置。\",\"siteKeywords\":\"Netflix,观赏电影, 线上电影, 观赏电视, 线上电视, 线上节目, 观赏节目, 串流电影, 串流电视, 即时串流, 电影, 观赏电影, 在线观赏电视, 不必下载, 完整电影\",\"siteRegisterStatus\":true}');

-- ----------------------------
-- Table structure for payments
-- ----------------------------
DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments`  (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `payment_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `pay_method` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `pid` int NOT NULL,
  `epay_key` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `payment_status` int NOT NULL,
  `payment_platform` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`payment_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of payments
-- ----------------------------
INSERT INTO `payments` VALUES (1, '支付宝', 'http://huohuafu.com/', 'alipay', 1094, 'FiwB5pYi5QFbhMfrf9IqeGF91rwKKQwM', 0, '火花支付');
INSERT INTO `payments` VALUES (2, '微信', 'http://huohuafu.com/', 'wxpay', 1094, 'FiwB5pYi5QFbhMfrf9IqeGF91rwKKQwM', 0, '火花支付');

-- ----------------------------
-- Table structure for plans
-- ----------------------------
DROP TABLE IF EXISTS `plans`;
CREATE TABLE `plans`  (
  `plan_id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `plan_duration_days` int UNSIGNED NOT NULL,
  `plan_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `plan_price` decimal(10, 2) NOT NULL DEFAULT 0.00,
  `plan_status` tinyint NOT NULL DEFAULT 0,
  PRIMARY KEY (`plan_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of plans
-- ----------------------------
INSERT INTO `plans` VALUES (1, '基本123', 30, '快速,高清,无广告', 9.90, 0);
INSERT INTO `plans` VALUES (2, '标准', 90, '描述,3,4', 28.88, 0);
INSERT INTO `plans` VALUES (3, '高级', 372, '描述2', 88.88, 0);

-- ----------------------------
-- Table structure for trade
-- ----------------------------
DROP TABLE IF EXISTS `trade`;
CREATE TABLE `trade`  (
  `trade_id` int NOT NULL AUTO_INCREMENT,
  `trade_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `trade_money` decimal(10, 2) NULL DEFAULT NULL,
  `user_id` int NOT NULL,
  `trade_no` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `out_trade_no` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` datetime NULL DEFAULT NULL,
  `pay_time` datetime NULL DEFAULT NULL,
  `trade_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pay_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `request_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `payment_platform` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`trade_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of trade
-- ----------------------------
INSERT INTO `trade` VALUES (11, '标准', 28.88, 1, '202404071306510', NULL, '2024-04-07 13:08:14', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` VALUES (12, '标准', 28.88, 1, '202404071306510', NULL, '2024-04-07 13:08:56', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` VALUES (13, '高级', 88.88, 1, '202404071309109', NULL, '2024-04-07 13:09:14', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` VALUES (14, '标准', 28.88, 1, '202404071309363', NULL, '2024-04-07 13:09:39', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` VALUES (15, '标准', 28.88, 1, '202404071309363', NULL, '2024-04-07 13:10:28', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` VALUES (16, '标准', 28.88, 1, '202404071309363', NULL, '2024-04-07 13:10:45', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` VALUES (17, '基本', 9.99, 1, '202404071311469', NULL, '2024-04-07 13:11:47', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` VALUES (18, '基本', 9.99, 1, '202404071313333', NULL, '2024-04-07 13:13:34', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` VALUES (19, '基本', 1.00, 1, '202404071315494', NULL, '2024-04-07 13:15:50', '2024-04-07 13:16:32', 'TRADE_SUCCESS', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` VALUES (20, '基本', 1.00, 24, '202404071319044', NULL, '2024-04-07 13:19:06', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');
INSERT INTO `trade` VALUES (21, '基本', 1.00, 25, '202404072208341', NULL, '2024-04-07 22:08:37', NULL, 'TRADE_TIMEOUT', 'alipay', '::1', '火花支付');
INSERT INTO `trade` VALUES (22, '基本', 1.00, 26, '202404081624273', NULL, '2024-04-08 16:24:30', NULL, 'TRADE_TIMEOUT', 'alipay', '::1', '火花支付');
INSERT INTO `trade` VALUES (23, '基本123', 9.90, 27, '202404161233295', NULL, '2024-04-16 12:33:30', NULL, 'TRADE_TIMEOUT', 'alipay', '127.0.0.1', '火花支付');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `type_id` int NOT NULL AUTO_INCREMENT,
  `type_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_slug` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_status` int NOT NULL DEFAULT 0,
  `type_rank` int NOT NULL DEFAULT 0,
  PRIMARY KEY (`type_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES (1, '科幻', 'scifi', 0, 0);
INSERT INTO `type` VALUES (11, '动作', 'action', 0, 0);
INSERT INTO `type` VALUES (37, '自然', 'scifi2', 0, 0);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `group_id` smallint UNSIGNED NOT NULL DEFAULT 1,
  `email` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login_ip` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `last_login_time` datetime NULL DEFAULT NULL,
  `password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reg_ip` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `reg_time` datetime NULL DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL DEFAULT 0,
  `username` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `plan_id` int NULL DEFAULT NULL,
  `plan_expiration_time` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `type_id`(`group_id` ASC) USING BTREE,
  INDEX `user_name`(`username` ASC) USING BTREE,
  INDEX `user_reg_time`(`reg_time` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 1, '6201160@gmail.com', '127.0.0.1', '2024-04-27 15:07:52', '$2a$10$OQ0x/j2uGgicl1I1yU7RY.VIyv6e3VdwqCLAaCk3NdnHTwt2W3t5K', '127.0.0.1', '2024-03-21 23:22:17', 0, 'admin', 3, '2030-04-23 00:00:00');
INSERT INTO `user` VALUES (24, 4, 'test001333@qq.com', '127.0.0.1', '2024-04-07 15:14:25', '$2a$10$NC2GZsJDUiNtthcZZ9ZQ6eQzI1AZ0HAlKu21E69iF26/UHEg7K0yW', '127.0.0.1', '2024-04-07 12:51:48', 0, 'test00123333', 1, '2024-04-28 13:19:44');
INSERT INTO `user` VALUES (25, 2, 'asd0002@qq.com', '127.0.0.1', '2024-04-07 22:08:49', '$2a$10$5FzG66QyNFVECwD4L7rFkeD.bpbf9Bbv3Lbvb3fIRuw3..MMNqiyO', '127.0.0.1', '2024-04-07 22:08:29', 0, 'asd0002', NULL, NULL);
INSERT INTO `user` VALUES (26, 4, 'fdsadasd@qq.com', '127.0.0.1', '2024-04-08 16:32:39', '$2a$10$oGe5tXjeoCLLFh0U0..jWe6MfydrNoCzRlIFYnrSURQ2gibvHS/Ta', '127.0.0.1', '2024-04-08 16:24:20', 1, 'fdsadasd', 1, '2024-04-28 00:00:00');
INSERT INTO `user` VALUES (27, 2, 'asdasd@qq.com', '127.0.0.1', '2024-04-16 12:33:20', '$2a$10$goJWGN5B22UOf9gJVRPljOcbZ4VmtgwHJ0e7VW0wB7j0DdUQKph6e', '127.0.0.1', '2024-04-16 12:26:40', 0, 'admin1', NULL, NULL);
INSERT INTO `user` VALUES (28, 2, 'test001@qq.com', '127.0.0.1', '2024-04-27 13:48:16', '$2a$10$NdfejC6AhbwdQAG2o13G/uUI76a7QZCLsdQfAgtVeLD7toXM46TyK', '127.0.0.1', '2024-04-16 12:34:12', 0, 'test001', NULL, NULL);

-- ----------------------------
-- Table structure for user_favorites
-- ----------------------------
DROP TABLE IF EXISTS `user_favorites`;
CREATE TABLE `user_favorites`  (
  `favorite_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int UNSIGNED NOT NULL,
  `vod_id` int NOT NULL,
  PRIMARY KEY (`favorite_id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  INDEX `vod_id`(`vod_id` ASC) USING BTREE,
  INDEX `user_id_2`(`user_id` ASC, `vod_id` ASC) USING BTREE,
  CONSTRAINT `fk_user_favorites_vod` FOREIGN KEY (`vod_id`) REFERENCES `vod` (`vod_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_favorites
-- ----------------------------
INSERT INTO `user_favorites` VALUES (2, 1, 112);
INSERT INTO `user_favorites` VALUES (1, 1, 130);
INSERT INTO `user_favorites` VALUES (3, 2, 112);

-- ----------------------------
-- Table structure for user_group
-- ----------------------------
DROP TABLE IF EXISTS `user_group`;
CREATE TABLE `user_group`  (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `group_status` tinyint UNSIGNED NOT NULL DEFAULT 0,
  `group_type` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`group_id`) USING BTREE,
  INDEX `group_status`(`group_status` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_group
-- ----------------------------
INSERT INTO `user_group` VALUES (1, '管理员', 0, 'admin');
INSERT INTO `user_group` VALUES (2, '普通用户', 0, 'member');
INSERT INTO `user_group` VALUES (3, '会员', 0, 'VIP');
INSERT INTO `user_group` VALUES (4, '垃圾用户', 0, 'spam');

-- ----------------------------
-- Table structure for user_plan_subscription
-- ----------------------------
DROP TABLE IF EXISTS `user_plan_subscription`;
CREATE TABLE `user_plan_subscription`  (
  `subscription_id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int UNSIGNED NOT NULL,
  `plan_id` int UNSIGNED NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  PRIMARY KEY (`subscription_id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  INDEX `plan_id`(`plan_id` ASC) USING BTREE,
  CONSTRAINT `user_plan_subscription_fk1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_plan_subscription_fk2` FOREIGN KEY (`plan_id`) REFERENCES `plans` (`plan_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_plan_subscription
-- ----------------------------
INSERT INTO `user_plan_subscription` VALUES (1, 1, 1, '2024-04-02 13:44:13', '2024-04-02 13:44:15');

-- ----------------------------
-- Table structure for vod
-- ----------------------------
DROP TABLE IF EXISTS `vod`;
CREATE TABLE `vod`  (
  `vod_id` int NOT NULL AUTO_INCREMENT,
  `type_id` int NOT NULL,
  `group_id` int NOT NULL DEFAULT 1,
  `vod_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_sub` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_en` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_status` int NOT NULL DEFAULT 0,
  `vod_tag` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_pic` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_pic_thumb` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_pic_slide` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_actor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_director` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_writer` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_blurb` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `vod_remarks` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_pubdate` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_state` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_level` int NULL DEFAULT NULL,
  `vod_copyright` int NULL DEFAULT 0,
  `vod_hits` int NULL DEFAULT NULL,
  `vod_hits_day` int NULL DEFAULT NULL,
  `vod_hits_week` int NULL DEFAULT NULL,
  `vod_hits_month` int NULL DEFAULT NULL,
  `vod_duration` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_time` int NULL DEFAULT NULL,
  `vod_time_add` int NULL DEFAULT NULL,
  `vod_douban_id` int NULL DEFAULT NULL,
  `vod_douban_score` decimal(3, 1) NULL DEFAULT NULL,
  `vod_play_from` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `vod_play_url` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  PRIMARY KEY (`vod_id`) USING BTREE,
  INDEX `fk_vod_type`(`type_id` ASC) USING BTREE,
  CONSTRAINT `fk_vod_type` FOREIGN KEY (`type_id`) REFERENCES `type` (`type_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 88638 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of vod
-- ----------------------------
INSERT INTO `vod` VALUES (1, 1, 2, '首尔之春', NULL, NULL, 0, NULL, NULL, 'https://file.uhsea.com/2403/e421e1e61b5c8175dc7db2bd62c6c70a8S.webp', NULL, 'https://file.uhsea.com/2403/47b995a7f671f5cfb0db6dd9bdb03ec32U.webp', '黄政民 / 郑雨盛 / 李星民 / 朴解浚 / 金成畇 / 朴勋', '金成洙', '金成洙', '1979年10月26日，时任韩国总统的朴正熙被自己的亲信射杀，局势顿时波谲云诡。为调查此事，陆军保安司令官全斗光（黄政民 饰）被任命为联合调查总部部长，而这个天生反骨的男人趁机扩大自己的势力，拉帮结伙，培植亲信，狼子野心昭然若揭。为了牵制全斗光，参谋总长任命将军李泰信（郑雨盛 饰）担任首都警备司令官，以防肘腋之变。与此同时，全斗光感受到来自总长的威胁，于是纠集亲信密谋逮捕总长，试图先下手为强。谁曾想全的人马急于求成，在未能逼迫代总统签署逮捕令之前便展开行动。成王败寇，一旦失败就会成为韩国的叛国者。一不做二不休的全斗光索性揭竿而起。\r\n　　而孤军奋战的李泰信，将秉承最朴素的信念与叛军展开对抗……', '更新1080P', NULL, NULL, 1, 0, 999, NULL, NULL, NULL, NULL, NULL, 1713070231, NULL, NULL, 'dbm3u8', '1080P$https://vod6.bdzybf7.com/20231122/YBpX6ZjZ/index.m3u8#1440P$https://vod6.bdzybf7.com/20231122/YBpX6ZjZ/index.m3u8');
INSERT INTO `vod` VALUES (108, 11, 2, '双面特工', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220407-2/897f825f928bf18a709e413a654ed54b.jpg', NULL, NULL, '克里斯·库珀,瑞恩·菲利普,劳拉·琳妮,卡罗利娜·达韦纳,', '比利·雷,', '', 'FBI初级特工艾瑞克（Ryan Phillippe 饰）被总部从一件外围任务中召回，奉命监视有重大叛国嫌疑的FBI信息安全部主管罗伯特（Chris Cooper 饰），罗伯特与苏联特工周璇二十余年，但', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1649317145, NULL, NULL, 'dbyun$$$dbm3u8', '正片$https://vod2.bdzybf7.com/share/eB1oc1XTojn6ZQHk#1$https://vod6.bdzybf7.com/share/LU2UbMea8d2XKcUw#2$https://vod6.bdzybf7.com/share/naalR9Z1imb0va6t#1080P$https://vod6.bdzybf7.com/share/sRc792rvHSGa9M4J$$$正片$https://vod2.bdzybf7.com/20220330/ACGozXzG/index.m3u8#1$https://vod6.bdzybf7.com/20230704/bQ3tkB3Q/index.m3u8#2$https://vod6.bdzybf7.com/20230704/Lg8riQXF/index.m3u8#1080P$https://vod6.bdzybf7.com/20230704/fFjfo1la/index.m3u8');
INSERT INTO `vod` VALUES (109, 11, 2, '佐罗', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240124-1/2fe4da38e6e4f8d0fb3eba823e556b3e.jpg', NULL, NULL, '阿兰·德龙,奥塔维亚·皮科洛,恩佐·塞鲁西科,穆斯塔什,吉雅科莫·罗西·斯图尔特', '杜奇奥·泰萨利', '', '西班牙人在南美洲殖民统治时代，苛捐杂税民不聊生。新总督米格尔在上任途中被杀，临死时把官印交与好友“欧洲第一剑士”唐迭戈（阿兰·德龙AlainDelon饰），要其承继遗志。三个月后，新总督突然出现，不过', '更新10', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1706057142, NULL, NULL, 'dbyun$$$dbm3u8', '1$https://vod6.bdzybf7.com/share/sLEDH0wDze8uoV7b#2$https://vod6.bdzybf7.com/share/Pw9qxmfz3bvpHGEt#3$https://vod6.bdzybf7.com/share/dZiLCJ6TPd25Wi9U#4$https://vod6.bdzybf7.com/share/C75h8r0PdfGeF3xl#5$https://vod6.bdzybf7.com/share/rc87zPAhisIwDyOL#6$https://vod6.bdzybf7.com/share/bUsmluuNVy5j7yiU#7$https://vod6.bdzybf7.com/share/BVtQNTUi7R6bUr1c#8$https://vod6.bdzybf7.com/share/BXhrDVsYuHVHwSK1#9$https://vod6.bdzybf7.com/share/JgM8lqCnwTFzJYH0#10$https://vod6.bdzybf7.com/share/Ngtro2RrRu3DjUoW$$$1$https://vod6.bdzybf7.com/20240123/7hxbb15f/index.m3u8#2$https://vod6.bdzybf7.com/20240125/GkUlsGAa/index.m3u8#3$https://vod6.bdzybf7.com/20240219/UDbL8etB/index.m3u8#4$https://vod6.bdzybf7.com/20240306/xg5TX48k/index.m3u8#5$https://vod6.bdzybf7.com/20240306/lmdn0geI/index.m3u8#6$https://vod6.bdzybf7.com/20240306/rA19UFqW/index.m3u8#7$https://vod6.bdzybf7.com/20240306/942DJ2Sd/index.m3u8#8$https://vod6.bdzybf7.com/20240306/towW7wk9/index.m3u8#9$https://vod6.bdzybf7.com/20240308/IIrV8174/index.m3u8#10$https://vod6.bdzybf7.com/20240312/3r6436Cr/index.m3u8');
INSERT INTO `vod` VALUES (110, 11, 2, '我本是高山', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240308-1/1109cd3bb37f00330bbf1c73e76f80bf.jpg', NULL, NULL, '海清,陈永胜,柴烨,王玥婷,万国鹏,美朵达瓦 ,赵瑞婷,罗解艳,郭莉娜,潘家艳,杨颜嘉,刘雅瑟,杨皓宇,胡歌,张丰毅,李晨,秦海璐,刘奕君,孙少兰,李依晓,吴妍妍', '郑大圣,杨瑾', '', '这是一个坚毅的女人和一群刚刚毕业还很稚嫩的老师，带着一百多个女孩成功逆天改命的故事，是关于爱、青春、热血和命运……影片根据云南丽江华坪女子高级中学校长张桂梅真实事迹改编。', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709888643, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/ZwfpuXDnaEksm7AC$$$1080P$https://vod6.bdzybf7.com/20240308/SDE7rlzc/index.m3u8');
INSERT INTO `vod` VALUES (111, 11, 2, '绅士们', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220530-2/aafc9993015c64f249cbfeccfa3c2ae7.jpg', NULL, NULL, '马修·麦康纳,查理·汉纳姆,休·格兰特,亨利·戈尔丁', '盖·里奇', '', '美国移民Mickey Pearson（马修·麦康纳 饰）成功在英国伦敦建立大麻帝国，发了大财后，他试图将资产转卖给一个美国富豪。然而风声走漏，一连串的阴谋及谎言开始从Mickey展开…私家侦探Flet', '更新8', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1653897301, NULL, NULL, 'dbm3u8$$$dbyun', '正片$https://vod2.bdzybf7.com/20220330/BfyosS99/index.m3u8#1$https://vod6.bdzybf7.com/20240308/7XAmbgFn/index.m3u8#2$https://vod6.bdzybf7.com/20240308/cFoDOK5d/index.m3u8#3$https://vod6.bdzybf7.com/20240308/ZddxOx18/index.m3u8#4$https://vod6.bdzybf7.com/20240308/IrqbVq4A/index.m3u8#5$https://vod6.bdzybf7.com/20240308/Ta8XzEXX/index.m3u8#6$https://vod6.bdzybf7.com/20240308/IfoK6OWh/index.m3u8#7$https://vod6.bdzybf7.com/20240308/XMzlOHsQ/index.m3u8#8$https://vod6.bdzybf7.com/20240308/l4kQddHV/index.m3u8$$$正片$https://vod2.bdzybf7.com/share/cMV8j6WGfPhyRcDZ#1$https://vod6.bdzybf7.com/share/35kT5EQGzQryIate#2$https://vod6.bdzybf7.com/share/Jlz1yuLmWxjlemz2#3$https://vod6.bdzybf7.com/share/i7HN5R8T31uU9pVD#4$https://vod6.bdzybf7.com/share/9l7XWDu5c6G1U7HH#5$https://vod6.bdzybf7.com/share/1yc0zlnGDWAo4nqq#6$https://vod6.bdzybf7.com/share/feUTGp3MDnh5QsTw#7$https://vod6.bdzybf7.com/share/4U1pnQul9Mk0KgXR#8$https://vod6.bdzybf7.com/share/nTt05woBErd1LSUN');
INSERT INTO `vod` VALUES (112, 11, 2, '裂战', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240307-1/e8895ac6df621d48d6c325a37c2b74bc.jpg', NULL, NULL, '安志杰,王清亭,释彦能,李梦,韩彦博,夏若妍,张晶,赵菁,陈升卫', '关越', '', '受温室效应的影响，全球各地极端自然灾害频发，为抵御自然灾害对植物的影响，星火种子公司利用基因编译技术，培育研制出了超级橡胶种子SR-2，受到东南亚DB公司邀请前往新山角一带试种植。国际安保队长林翔带队', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709825834, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/avnmFZ9FxyZ2of8F$$$1080P$https://vod6.bdzybf7.com/20240307/fOFzPoq5/index.m3u8');
INSERT INTO `vod` VALUES (113, 11, 2, '特种突袭之觉醒', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240307-1/81102f17d3047a62418a623a68e4cfeb.jpg', NULL, NULL, '赵英龙,马驰,王鹤贺,田牧童,杨璐嘉', '何自强', '', '退伍特种兵柯北，在一次国外旅行中，莫名地卷入黑帮交易。为保护妻儿与黑势力交手，却意外偶遇当年的宿敌——杀手野狗。妻儿被掳，生死下落不明。钱版交易，家国抉择两难。柯北不愿战友冒险，更不愿为小家损害家国利', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709825827, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/WfA5QyequDCuqTaY$$$1080P$https://vod6.bdzybf7.com/20240307/OUYufBz2/index.m3u8');
INSERT INTO `vod` VALUES (114, 11, 2, '郊游', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220530-3/b518a0aae751825a73d63b02a420f252.jpg', NULL, NULL, '李康生,陆弈静,陈湘琪,杨贵媚,', '蔡明亮,', '', '小康是无用之人，在车水马龙中高举广告招牌维生，即便狂风暴雨亦屹立不摇。他举牌、点烟、尿尿，再举牌、点烟、尿尿，任车阵喧嚣从身旁呼啸而过。小康的生命中只有两个孩子，他们一起吃饭、一起刷牙、一起更衣，一起', '更新12', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1653897509, NULL, NULL, 'dbm3u8$$$dbyun', '正片$https://vod2.bdzybf7.com/20220330/ccj2yiXq/index.m3u8#1$https://vod6.bdzybf7.com/20240217/ABRZqzb0/index.m3u8#2$https://vod6.bdzybf7.com/20240217/k9TyjFnJ/index.m3u8#3$https://vod6.bdzybf7.com/20240219/sN03Ot3I/index.m3u8#4$https://vod6.bdzybf7.com/20240219/ShBSaFoy/index.m3u8#5$https://vod6.bdzybf7.com/20240222/yYOMCdGj/index.m3u8#6$https://vod6.bdzybf7.com/20240223/ZIiInahi/index.m3u8#7$https://vod6.bdzybf7.com/20240224/eICkzr0u/index.m3u8#8$https://vod6.bdzybf7.com/20240225/3zATDreC/index.m3u8#9$https://vod6.bdzybf7.com/20240303/tmE3Ix0T/index.m3u8#10$https://vod6.bdzybf7.com/20240303/G2GQM5tI/index.m3u8#11$https://vod6.bdzybf7.com/20240303/acfM365S/index.m3u8#12$https://vod6.bdzybf7.com/20240304/15ZrlkHD/index.m3u8$$$正片$https://vod2.bdzybf7.com/share/TmKtrW6dr4qwWB53#1$https://vod6.bdzybf7.com/share/8oTgHHj5MPqxHTcF#2$https://vod6.bdzybf7.com/share/Ng5hGwVgztMCrGRF#3$https://vod6.bdzybf7.com/share/03U77XFlLdvjXO1N#4$https://vod6.bdzybf7.com/share/64XWoZiRjmojVIKE#5$https://vod6.bdzybf7.com/share/YjmV02IEmmyLNkdZ#6$https://vod6.bdzybf7.com/share/FjrDWaGDchRbOBBf#7$https://vod6.bdzybf7.com/share/rwF5aW2w2qfDg2Ct#8$https://vod6.bdzybf7.com/share/XvD9AU995LW2XJgI#9$https://vod6.bdzybf7.com/share/8t22VWOqWsKsFz6D#10$https://vod6.bdzybf7.com/share/7Uq1wgzUXbRWcLKD#11$https://vod6.bdzybf7.com/share/md8Ro08RvgkEnXOT#12$https://vod6.bdzybf7.com/share/90dEGGvZlLeLOJHE');
INSERT INTO `vod` VALUES (116, 11, 2, '湘西诡事', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240303-1/1d7d7097faed2a4812c21530a80ef933.jpg', NULL, NULL, '蒲巴甲,王婉中,赵燕国彰,克拉拉,尚铁龙,岳冬峰', '李立铭', '', '人走后按照封门村当地习俗，需要入夜下葬，棺内却莫名出现一具女尸，引得全村百姓不安。众百姓贴悬赏告示，欲征集高人道长前来镇压。神秘道长风冷清深入凶宅破阴气时，使出下斗绝技才得脱身，暴露了自己原为倒斗门淘', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709479452, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/F8PSSmbA5QGm9G4H$$$1080P$https://vod6.bdzybf7.com/20240303/yGBvWZ93/index.m3u8');
INSERT INTO `vod` VALUES (117, 11, 2, '虎王·王者归来', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240303-1/60ed61cbbe2b7a321540eeff011f6a66.jpg', NULL, NULL, '内详', '内详', '', '内详', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709479444, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/FlzvYtfWDbqqxhM8$$$1080P$https://vod6.bdzybf7.com/20240303/wZAekCy5/index.m3u8');
INSERT INTO `vod` VALUES (118, 11, 2, '狄仁杰之通天玄案', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240224-1/5cf830c0088d62cc49bbf0cedc4a423d.jpg', NULL, NULL, '魏巍,高洋,郑希怡,梁缘,巫迪文,沈雪炜,惠祥意,李军,张欢,聂新源', '童辉', '', '唐时，太平公主做了个骑着“银雪白马”驰骋月下的“仙境之梦”，女方士玄姬为其释梦，白马为“天马”，并令公主“梦想成真”。玄姬受宠。此时大唐神探狄仁杰侦破了一起“灭门案”，却竟是因为“天马”而酿成的一幕生', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1708763679, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/YBk5SAzaXohFcNYr$$$1080P$https://vod6.bdzybf7.com/20240223/sJDfEQke/index.m3u8');
INSERT INTO `vod` VALUES (119, 11, 2, '美国小说', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240224-1/002a3a3e54ffc20b321d91eb447f8da8.jpg', NULL, NULL, '杰弗里·怀特,翠西·艾利斯·罗斯,约翰·奥提兹,埃里卡·亚历山大,莱斯利·格塞斯,亚当·布罗迪,凯斯·大卫,伊萨·雷,斯特林·K·布朗,迈拉·卢克利希亚·泰勒,雷蒙德·安东尼·托马斯,奥基里特·奥诺多瓦,米利亚姆·肖尔,迈克尔·西里尔·克赖顿,派特里克·费斯克勒,尼尔·勒纳,J·C·麦肯泽,詹·哈里斯,贝茨·怀尔德,迈克尔·吉布林', '柯德·杰弗森', '', '以出版行业的角度聚焦将“少数群体的声音”进行商品化。', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1708761572, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/QNaBZCIB4BLwSgQP$$$1080P$https://vod6.bdzybf7.com/20240223/Ijy80Kzq/index.m3u8');
INSERT INTO `vod` VALUES (120, 11, 2, '怒潮', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220530-1/74eb82e20789a25c8db64476047d29cb.jpg', NULL, NULL, '张平,周凤山,关淑贞,刘秉章,翟春华', '史文炽', '', '　　1927年，4.12和5.21两起反革命事变发生后，革命转入低潮。农协主席邱金（张平 饰）与敌博斗中负伤，被特派员罗大成（周凤山 饰）救出。罗大成在农民运动讲习所聆听过毛泽东的教海，深知组织群众、', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1648836566, NULL, NULL, 'dbyun$$$dbm3u8', '正片$https://vod2.bdzybf7.com/share/uhfV0XqXnJpwSGe2#1080P$https://vod6.bdzybf7.com/share/n2RmvUwAlqO66N3W$$$正片$https://vod2.bdzybf7.com/20220330/6hT1h04P/index.m3u8#1080P$https://vod6.bdzybf7.com/20240223/vHMpwfbA/index.m3u8');
INSERT INTO `vod` VALUES (121, 11, 2, '恶果', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220602-1/694741811458056d5989cd956fc8c583.png', NULL, NULL, '王美心', '洪雷', '', '一个独居的老头去世了，相熟的街坊亲友来简单给他办了办白事。街坊在老头的葬礼上闲聊,提到了他和他儿子的往事，在两人的对错上各执一词。街坊们思考儿子是否也会像父亲那样对待自己的儿子时，儿子带着孙子出现在葬', '更新HD', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1646541292, NULL, NULL, 'dbm3u8$$$dbyun', '正片$https://vod2.bdzybf7.com/20220329/kCrCQDJZ/index.m3u8#HD$https://vod6.bdzybf7.com/20240220/hJqTCgI2/index.m3u8$$$正片$https://vod2.bdzybf7.com/share/iwIfMzJ9iGwiaSZH#HD$https://vod6.bdzybf7.com/share/7Fdq7lWBIFPnnrAk');
INSERT INTO `vod` VALUES (122, 11, 2, '艾琳', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240320-1/09553cb52d148e7cabc091a42fd9d8df.jpg', NULL, NULL, '托马辛·麦肯齐,安妮·海瑟薇,谢伊·惠格姆,希芳·法隆,欧文·泰格,托妮·帕塔诺,萨姆·尼沃拉,威廉·希尔,皮特·麦克罗比,彼得冯伯格,帕特里克·努南,杰佛逊·怀特,亚历山大·詹姆森,帕特里克·瑞安·伍德,加文·K·巴菲尔德,梅森·佩托格拉索,斯宾塞·巴恩斯,马克·哈夫利斯,布伦丹·伯克,朱利安·加维兰内斯', '威廉·奥尔德罗伊德', '', '电影根据OttessaMoshfegh的同名小说改编。故事发生在1964年马萨诸塞州的一个严冬。年轻的艾琳在监狱当秘书，当迷人的咨询师瑞贝卡成为她的新同事，她情不自禁地被对方深深吸引。在瑞贝卡透露了一', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1710912364, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/NgaFEuD1AHj6wtuw$$$1080P$https://vod6.bdzybf7.com/20240105/39XOu06S/index.m3u8');
INSERT INTO `vod` VALUES (123, 11, 2, '小镇双雄', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240319-1/0535e61cd00ca0d20bfd48b792e5ff9a.jpg', NULL, NULL, '谢震伟,裴兴雷,孔芮', '刘子斌', '', '影片描述了两位小镇青年宏升和磊子在传承和摇滚的两种音乐之路上的文化碰撞，在寻求音乐梦想之路过程中的经历和磨难后，以自创曲目《贺兰英雄》意外在网络爆红，故事的最终磊子和宏升回到了小镇一起演出了一曲《东方', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1710858217, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/2Jv7ndGl5P2QAhwP$$$1080P$https://vod6.bdzybf7.com/20231121/EGpAbs0e/index.m3u8');
INSERT INTO `vod` VALUES (127, 11, 2, '杰西卡', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240319-1/eb9a1d071cb2a0576f2401ff4466f58d.jpeg', NULL, NULL, '傑西卡', '皮特·欧斯', '', '为了逃避跟踪狂凯文的杰西卡一路自驾到了新墨西哥州，在那里遇见了多年未见的好友埃琳娜。埃琳娜听说了杰西卡的遭遇后便提议让她在自己的住所一段时间。然而，本不应该出现的凯文却毫无征兆地出现在了埃琳娜的住所附', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1710800435, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/PAVhcJKUkQb5rXvB$$$1080P$https://vod6.bdzybf7.com/20230704/yguspKgo/index.m3u8');
INSERT INTO `vod` VALUES (128, 11, 2, '双面特工', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220407-2/897f825f928bf18a709e413a654ed54b.jpg', NULL, NULL, '克里斯·库珀,瑞恩·菲利普,劳拉·琳妮,卡罗利娜·达韦纳,', '比利·雷,', '', 'FBI初级特工艾瑞克（Ryan Phillippe 饰）被总部从一件外围任务中召回，奉命监视有重大叛国嫌疑的FBI信息安全部主管罗伯特（Chris Cooper 饰），罗伯特与苏联特工周璇二十余年，但', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1649317145, NULL, NULL, 'dbyun$$$dbm3u8', '正片$https://vod2.bdzybf7.com/share/eB1oc1XTojn6ZQHk#1$https://vod6.bdzybf7.com/share/LU2UbMea8d2XKcUw#2$https://vod6.bdzybf7.com/share/naalR9Z1imb0va6t#1080P$https://vod6.bdzybf7.com/share/sRc792rvHSGa9M4J$$$正片$https://vod2.bdzybf7.com/20220330/ACGozXzG/index.m3u8#1$https://vod6.bdzybf7.com/20230704/bQ3tkB3Q/index.m3u8#2$https://vod6.bdzybf7.com/20230704/Lg8riQXF/index.m3u8#1080P$https://vod6.bdzybf7.com/20230704/fFjfo1la/index.m3u8');
INSERT INTO `vod` VALUES (129, 11, 2, '佐罗', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240124-1/2fe4da38e6e4f8d0fb3eba823e556b3e.jpg', NULL, NULL, '阿兰·德龙,奥塔维亚·皮科洛,恩佐·塞鲁西科,穆斯塔什,吉雅科莫·罗西·斯图尔特', '杜奇奥·泰萨利', '', '西班牙人在南美洲殖民统治时代，苛捐杂税民不聊生。新总督米格尔在上任途中被杀，临死时把官印交与好友“欧洲第一剑士”唐迭戈（阿兰·德龙AlainDelon饰），要其承继遗志。三个月后，新总督突然出现，不过', '更新10', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1706057142, NULL, NULL, 'dbyun$$$dbm3u8', '1$https://vod6.bdzybf7.com/share/sLEDH0wDze8uoV7b#2$https://vod6.bdzybf7.com/share/Pw9qxmfz3bvpHGEt#3$https://vod6.bdzybf7.com/share/dZiLCJ6TPd25Wi9U#4$https://vod6.bdzybf7.com/share/C75h8r0PdfGeF3xl#5$https://vod6.bdzybf7.com/share/rc87zPAhisIwDyOL#6$https://vod6.bdzybf7.com/share/bUsmluuNVy5j7yiU#7$https://vod6.bdzybf7.com/share/BVtQNTUi7R6bUr1c#8$https://vod6.bdzybf7.com/share/BXhrDVsYuHVHwSK1#9$https://vod6.bdzybf7.com/share/JgM8lqCnwTFzJYH0#10$https://vod6.bdzybf7.com/share/Ngtro2RrRu3DjUoW$$$1$https://vod6.bdzybf7.com/20240123/7hxbb15f/index.m3u8#2$https://vod6.bdzybf7.com/20240125/GkUlsGAa/index.m3u8#3$https://vod6.bdzybf7.com/20240219/UDbL8etB/index.m3u8#4$https://vod6.bdzybf7.com/20240306/xg5TX48k/index.m3u8#5$https://vod6.bdzybf7.com/20240306/lmdn0geI/index.m3u8#6$https://vod6.bdzybf7.com/20240306/rA19UFqW/index.m3u8#7$https://vod6.bdzybf7.com/20240306/942DJ2Sd/index.m3u8#8$https://vod6.bdzybf7.com/20240306/towW7wk9/index.m3u8#9$https://vod6.bdzybf7.com/20240308/IIrV8174/index.m3u8#10$https://vod6.bdzybf7.com/20240312/3r6436Cr/index.m3u8');
INSERT INTO `vod` VALUES (130, 11, 2, '我本是高山', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240308-1/1109cd3bb37f00330bbf1c73e76f80bf.jpg', NULL, NULL, '海清,陈永胜,柴烨,王玥婷,万国鹏,美朵达瓦 ,赵瑞婷,罗解艳,郭莉娜,潘家艳,杨颜嘉,刘雅瑟,杨皓宇,胡歌,张丰毅,李晨,秦海璐,刘奕君,孙少兰,李依晓,吴妍妍', '郑大圣,杨瑾', '', '这是一个坚毅的女人和一群刚刚毕业还很稚嫩的老师，带着一百多个女孩成功逆天改命的故事，是关于爱、青春、热血和命运……影片根据云南丽江华坪女子高级中学校长张桂梅真实事迹改编。', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709888643, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/ZwfpuXDnaEksm7AC$$$1080P$https://vod6.bdzybf7.com/20240308/SDE7rlzc/index.m3u8');
INSERT INTO `vod` VALUES (131, 11, 2, '绅士们', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20220530-2/aafc9993015c64f249cbfeccfa3c2ae7.jpg', NULL, NULL, '马修·麦康纳,查理·汉纳姆,休·格兰特,亨利·戈尔丁', '盖·里奇', '', '美国移民Mickey Pearson（马修·麦康纳 饰）成功在英国伦敦建立大麻帝国，发了大财后，他试图将资产转卖给一个美国富豪。然而风声走漏，一连串的阴谋及谎言开始从Mickey展开…私家侦探Flet', '更新8', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1653897301, NULL, NULL, 'dbm3u8$$$dbyun', '正片$https://vod2.bdzybf7.com/20220330/BfyosS99/index.m3u8#1$https://vod6.bdzybf7.com/20240308/7XAmbgFn/index.m3u8#2$https://vod6.bdzybf7.com/20240308/cFoDOK5d/index.m3u8#3$https://vod6.bdzybf7.com/20240308/ZddxOx18/index.m3u8#4$https://vod6.bdzybf7.com/20240308/IrqbVq4A/index.m3u8#5$https://vod6.bdzybf7.com/20240308/Ta8XzEXX/index.m3u8#6$https://vod6.bdzybf7.com/20240308/IfoK6OWh/index.m3u8#7$https://vod6.bdzybf7.com/20240308/XMzlOHsQ/index.m3u8#8$https://vod6.bdzybf7.com/20240308/l4kQddHV/index.m3u8$$$正片$https://vod2.bdzybf7.com/share/cMV8j6WGfPhyRcDZ#1$https://vod6.bdzybf7.com/share/35kT5EQGzQryIate#2$https://vod6.bdzybf7.com/share/Jlz1yuLmWxjlemz2#3$https://vod6.bdzybf7.com/share/i7HN5R8T31uU9pVD#4$https://vod6.bdzybf7.com/share/9l7XWDu5c6G1U7HH#5$https://vod6.bdzybf7.com/share/1yc0zlnGDWAo4nqq#6$https://vod6.bdzybf7.com/share/feUTGp3MDnh5QsTw#7$https://vod6.bdzybf7.com/share/4U1pnQul9Mk0KgXR#8$https://vod6.bdzybf7.com/share/nTt05woBErd1LSUN');
INSERT INTO `vod` VALUES (133, 11, 2, '特种突袭之觉醒', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240307-1/81102f17d3047a62418a623a68e4cfeb.jpg', NULL, NULL, '赵英龙,马驰,王鹤贺,田牧童,杨璐嘉', '何自强', '', '退伍特种兵柯北，在一次国外旅行中，莫名地卷入黑帮交易。为保护妻儿与黑势力交手，却意外偶遇当年的宿敌——杀手野狗。妻儿被掳，生死下落不明。钱版交易，家国抉择两难。柯北不愿战友冒险，更不愿为小家损害家国利', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709825827, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/WfA5QyequDCuqTaY$$$1080P$https://vod6.bdzybf7.com/20240307/OUYufBz2/index.m3u8');
INSERT INTO `vod` VALUES (135, 11, 2, '周处除三害', NULL, NULL, 0, NULL, NULL, 'https://pic1.bdzyimg.com/upload/vod/20240303-1/c35f8db3b6aa780bfb6f434d3141f8b4.jpg', NULL, NULL, '阮经天,袁富华,陈以文,王净,谢琼煖,李李仁,刘子铨,曾珮瑜,陈秉佑 ,游安顺,郑有杰,盛鉴,吴奕蓉,黄迪扬,曾向镇,沈威年,杨迦恩,曾皓泽,郑永岳,张启乐,苏耀庭,练家豪,李明哲,廖威迪,罗振佑,王又正,林君柔,黄瀚德,刘子朋,罗能华,许莉廷,林瑞华,刘禾育,郭容腾,李年雄,许德城,黄惠卿,刘昕昊', '黄精甫', '', '通缉犯陈桂林（阮经天饰）生命将尽，却发现自己在通缉榜上只排名第三，他决心查出前两名通缉犯的下落，并将他们一一除掉。陈桂林以为自己已成为当代的周处除三害，却没想到永远参不透的贪嗔痴，才是人生终要面对的罪', '更新1080P', NULL, '', NULL, 0, NULL, NULL, NULL, NULL, NULL, 2024, 1709481528, NULL, NULL, 'dbyun$$$dbm3u8', '1080P$https://vod6.bdzybf7.com/share/Fjqlg042iWLQmZdA$$$1080P$https://vod6.bdzybf7.com/20240303/vSdbYitc/index.m3u8');
INSERT INTO `vod` VALUES (155, 1, 2, 'test00001', NULL, NULL, 0, NULL, NULL, 'https://file.uhsea.com/2403/e421e1e61b5c8175dc7db2bd62c6c70a8S.webp', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, 1713244729, NULL, NULL, NULL, '1080P$https://qu2u-com-1305976148.cos.ap-guangzhou.myqcloud.com/%E8%9B%A4%E8%9F%86%E6%9C%AC%E6%98%AF%E7%97%B4%E6%83%85%E7%A7%8D.mp4');
INSERT INTO `vod` VALUES (88633, 1, 0, '逆天奇案2（国）', '', 'nitianqian2guo', 0, '', '', 'https://pic1.bdzyimg.com/upload/vod/20240416-1/ac5a186b6bc083059d4d5fd6abfc8c75.jpg', '', '', '陈展鹏,林夏薇,黄智贤,蒋祖曼,张颕康,刘佩玥,方力申,冯盈盈,高钧贤,姜大卫,麦玲玲,梁小冰,李国麟,陈嘉辉,张雷,黄庭锋,郭柏妍,郑俊弘,董敬文,李启杰,林子超,赵璧渝,海俊杰,容天佑,朱汇林,张子丰,张本立,尹光,菊梓乔,黄韵材,陈少邦,罗毓仪,庄思明,谢雪心,林伟,李龙基,黎燕珊,潘志文,刘桂芳,陈狄克,吴香伦,陈荣峻,梁皓楷,阮嘉敏,周丽欣,吴紫韵,杜燕歌,姚宏远,卫志豪,黄耀煌,方绍聪,王菲,黄嘉乐,林熹瞳,吴沚默,刘纬民,王贤志,马国明,炎明熹,杜大伟', '刘家豪,陈志江,张乾文,何嘉华,张伯仁,欧耀杰,黄芷苓', '', '杀虎案真凶子乐伏法，事情告一段落。干探浚森与韦力继续智破重重奇案。二人调查一宗国际杀手肆虐香港的严重案件，利用超级计算机在网络中追寻线索成功破案，却没想到无意中发现子乐被捕前，曾发送加密讯息及巨额加密', '更新11', '', '', 0, 0, 0, 0, 0, 0, '', 2024, 1713334259, 0, 0.0, 'dbyun$$$dbm3u8', '11$https://vod6.bdzybf7.com/20240415/LZtZhfXB/index.m3u8');
INSERT INTO `vod` VALUES (88637, 1, 2, '大奉打更人', NULL, NULL, 0, '', NULL, 'https://pic1.bdzyimg.com/upload/vod/20240417-1/7fdf44b87c09ad0f8cb7d22599264f3f.jpg', NULL, '', '王鹤棣,田曦薇,刘奕君,晏紫东,岳旸,张晓晨,毛晓慧,范帅琦,刘美含,张淼怡,冯晖,丁笑滢,闫佩伦,王润泽,王伊瑶,李洪涛,李梦颖,姜贞羽,张宸逍,康亢,倪虹洁,刘钧,范世錡,杜淳,邱心志,陈小纭,陈意涵', '邓科', '', '现代打工人杨凌，意外进入到充满玄幻色彩的大奉王朝，并且改头换面成为一名监察百官、为大奉百姓破案的打更人铜锣——许七安。他凭借现代所学所能，运用科学知识和推理特长，成功破获一桩桩离奇案件，被誉为大奉断案', '更新杀青大吉', NULL, '大陆', NULL, 0, 0, NULL, NULL, NULL, '', 2024, 1713337796, 0, 0.0, 'dbyun$$$dbm3u8', '杀青大吉$https://vod6.bdzybf7.com/20240328/jse5D6al/index.m3u8');

-- ----------------------------
-- Table structure for watch_history
-- ----------------------------
DROP TABLE IF EXISTS `watch_history`;
CREATE TABLE `watch_history`  (
  `watch_id` int NOT NULL AUTO_INCREMENT,
  `vod_id` int NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  `create_time` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`watch_id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  INDEX `vod_id`(`vod_id` ASC) USING BTREE,
  CONSTRAINT `fk_watch_history_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_watch_history_vod` FOREIGN KEY (`vod_id`) REFERENCES `vod` (`vod_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of watch_history
-- ----------------------------
INSERT INTO `watch_history` VALUES (1, 108, 1, '2024-04-10 14:40:10');
INSERT INTO `watch_history` VALUES (2, 109, 1, '2024-04-25 14:40:10');
INSERT INTO `watch_history` VALUES (10, 112, 1, '2024-04-25 14:17:58');
INSERT INTO `watch_history` VALUES (11, 117, 1, '2024-04-10 21:39:15');
INSERT INTO `watch_history` VALUES (12, 130, 1, '2024-04-12 19:09:06');
INSERT INTO `watch_history` VALUES (13, 1, 1, '2024-04-16 13:27:36');
INSERT INTO `watch_history` VALUES (14, 111, 1, '2024-04-10 21:41:22');
INSERT INTO `watch_history` VALUES (15, 88637, 1, '2024-04-17 20:49:26');

SET FOREIGN_KEY_CHECKS = 1;
