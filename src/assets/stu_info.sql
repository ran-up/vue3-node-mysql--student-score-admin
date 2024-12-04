/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : vue-node-mysql--student-score-admin

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 04/12/2024 22:19:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for stu_info
-- ----------------------------
DROP TABLE IF EXISTS `stu_info`;
CREATE TABLE `stu_info`  (
  `id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '学生id，唯一项',
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '学生姓名',
  `gender` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '学生性别',
  `chinese` int(0) NULL DEFAULT NULL COMMENT '语文成绩',
  `math` int(0) NULL DEFAULT NULL COMMENT '数学成绩',
  `english` int(0) NULL DEFAULT NULL COMMENT '英语成绩',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '《Vue.js+Node.js全栈开发实战（第二版） (王金柱 编著)Chinese (Z-Library)》第十三章学生成绩管理系统项目练习' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of stu_info
-- ----------------------------
INSERT INTO `stu_info` VALUES (18, '站三', '男', 8, 98, 19);
INSERT INTO `stu_info` VALUES (20, '李思龙', '女', 78, 98, 67);

SET FOREIGN_KEY_CHECKS = 1;
