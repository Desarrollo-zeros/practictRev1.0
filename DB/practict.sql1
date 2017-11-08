/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 100126
Source Host           : localhost:3306
Source Database       : practict

Target Server Type    : MYSQL
Target Server Version : 100126
File Encoding         : 65001

Date: 2017-10-16 16:01:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for asignatura
-- ----------------------------
DROP TABLE IF EXISTS `asignatura`;
CREATE TABLE `asignatura` (
  `idAsignatura` varchar(10) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `Periodo_idPeriodo` varchar(10) NOT NULL,
  PRIMARY KEY (`idAsignatura`),
  KEY `fk_Asignatura_Periodo1_idx` (`Periodo_idPeriodo`),
  CONSTRAINT `fk_Asignatura_Periodo1` FOREIGN KEY (`Periodo_idPeriodo`) REFERENCES `periodo` (`idPeriodo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of asignatura
-- ----------------------------

-- ----------------------------
-- Table structure for ci_sessions
-- ----------------------------
DROP TABLE IF EXISTS `ci_sessions`;
CREATE TABLE `ci_sessions` (
  `id` varchar(128) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `timestamp` int(10) unsigned NOT NULL DEFAULT '0',
  `data` blob NOT NULL,
  PRIMARY KEY (`id`,`ip_address`),
  KEY `ci_sessions_timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ci_sessions
-- ----------------------------
INSERT INTO `ci_sessions` VALUES ('tgvmbcjean8u2iucji7uc0mnhuou69ud', '::1', '1508187601', '');

-- ----------------------------
-- Table structure for controlcerrarsesioncorreo
-- ----------------------------
DROP TABLE IF EXISTS `controlcerrarsesioncorreo`;
CREATE TABLE `controlcerrarsesioncorreo` (
  `idUsuario` int(10) DEFAULT NULL,
  `correoElectronico` varchar(50) DEFAULT NULL,
  `codigoCerrarSesion` varchar(50) DEFAULT NULL,
  `fechaUso` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `activo` int(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of controlcerrarsesioncorreo
-- ----------------------------

-- ----------------------------
-- Table structure for controlsesiones
-- ----------------------------
DROP TABLE IF EXISTS `controlsesiones`;
CREATE TABLE `controlsesiones` (
  `idUsuario` int(10) NOT NULL AUTO_INCREMENT,
  `fechaOnline` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ip` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of controlsesiones
-- ----------------------------

-- ----------------------------
-- Table structure for docente
-- ----------------------------
DROP TABLE IF EXISTS `docente`;
CREATE TABLE `docente` (
  `Usuario_idUsuario` varchar(10) NOT NULL,
  `Institución_idInstitución` varchar(10) NOT NULL,
  PRIMARY KEY (`Usuario_idUsuario`,`Institución_idInstitución`),
  KEY `fk_Usuario_has_Institución_Institución1_idx` (`Institución_idInstitución`),
  KEY `fk_Usuario_has_Institución_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Usuario_has_Institución_Institución1` FOREIGN KEY (`Institución_idInstitución`) REFERENCES `institución` (`idInstitución`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_Institución_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of docente
-- ----------------------------

-- ----------------------------
-- Table structure for grupo
-- ----------------------------
DROP TABLE IF EXISTS `grupo`;
CREATE TABLE `grupo` (
  `Asignatura_idAsignatura` varchar(10) NOT NULL,
  `Docente_Usuario_idUsuario` varchar(10) NOT NULL,
  `Docente_Institución_idInstitución` varchar(10) NOT NULL,
  PRIMARY KEY (`Asignatura_idAsignatura`,`Docente_Usuario_idUsuario`,`Docente_Institución_idInstitución`),
  KEY `fk_Asignatura_has_Docente_Docente1_idx` (`Docente_Usuario_idUsuario`,`Docente_Institución_idInstitución`),
  KEY `fk_Asignatura_has_Docente_Asignatura1_idx` (`Asignatura_idAsignatura`),
  CONSTRAINT `fk_Asignatura_has_Docente_Asignatura1` FOREIGN KEY (`Asignatura_idAsignatura`) REFERENCES `asignatura` (`idAsignatura`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Asignatura_has_Docente_Docente1` FOREIGN KEY (`Docente_Usuario_idUsuario`, `Docente_Institución_idInstitución`) REFERENCES `docente` (`Usuario_idUsuario`, `Institución_idInstitución`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of grupo
-- ----------------------------

-- ----------------------------
-- Table structure for institución
-- ----------------------------
DROP TABLE IF EXISTS `institución`;
CREATE TABLE `institución` (
  `idInstitución` varchar(10) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `dirección` varchar(45) NOT NULL,
  `teléfono` varchar(45) NOT NULL,
  `códigoDeContrato` varchar(45) DEFAULT NULL,
  `estado` varchar(1) NOT NULL,
  PRIMARY KEY (`idInstitución`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of institución
-- ----------------------------

-- ----------------------------
-- Table structure for paciente
-- ----------------------------
DROP TABLE IF EXISTS `paciente`;
CREATE TABLE `paciente` (
  `idPaciente` int(11) NOT NULL,
  `nombres` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `dirección` varchar(45) NOT NULL,
  `Institución_idInstitución` varchar(10) NOT NULL,
  PRIMARY KEY (`idPaciente`),
  KEY `fk_Paciente_Institución1_idx` (`Institución_idInstitución`),
  CONSTRAINT `fk_Paciente_Institución1` FOREIGN KEY (`Institución_idInstitución`) REFERENCES `institución` (`idInstitución`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of paciente
-- ----------------------------

-- ----------------------------
-- Table structure for periodo
-- ----------------------------
DROP TABLE IF EXISTS `periodo`;
CREATE TABLE `periodo` (
  `idPeriodo` varchar(10) NOT NULL,
  `fechaDeInicio` datetime NOT NULL,
  `fechaDeFinalización` datetime NOT NULL,
  PRIMARY KEY (`idPeriodo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of periodo
-- ----------------------------

-- ----------------------------
-- Table structure for procedimiento
-- ----------------------------
DROP TABLE IF EXISTS `procedimiento`;
CREATE TABLE `procedimiento` (
  `idProcedimiento` varchar(10) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `Asignatura_idAsignatura` varchar(10) NOT NULL,
  PRIMARY KEY (`idProcedimiento`),
  KEY `fk_Procedimiento_Asignatura1_idx` (`Asignatura_idAsignatura`),
  CONSTRAINT `fk_Procedimiento_Asignatura1` FOREIGN KEY (`Asignatura_idAsignatura`) REFERENCES `asignatura` (`idAsignatura`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of procedimiento
-- ----------------------------

-- ----------------------------
-- Table structure for reporte
-- ----------------------------
DROP TABLE IF EXISTS `reporte`;
CREATE TABLE `reporte` (
  `idReporte` varchar(10) NOT NULL,
  `observaciones` varchar(200) NOT NULL,
  `Usuario_idUsuario` varchar(10) NOT NULL,
  `Periodo_idPeriodo` varchar(10) NOT NULL,
  `Asignatura_idAsignatura` varchar(10) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`idReporte`),
  KEY `fk_Reporte_Usuario1_idx` (`Usuario_idUsuario`),
  KEY `fk_Reporte_Periodo1_idx` (`Periodo_idPeriodo`),
  KEY `fk_Reporte_Asignatura1_idx` (`Asignatura_idAsignatura`),
  CONSTRAINT `fk_Reporte_Asignatura1` FOREIGN KEY (`Asignatura_idAsignatura`) REFERENCES `asignatura` (`idAsignatura`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reporte_Periodo1` FOREIGN KEY (`Periodo_idPeriodo`) REFERENCES `periodo` (`idPeriodo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reporte_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of reporte
-- ----------------------------

-- ----------------------------
-- Table structure for sesiones
-- ----------------------------
DROP TABLE IF EXISTS `sesiones`;
CREATE TABLE `sesiones` (
  `idSession` varchar(255) NOT NULL,
  `idUsuario` int(10) NOT NULL,
  `cerrar` int(255) NOT NULL DEFAULT '0',
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idSession`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sesiones
-- ----------------------------

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `idUsuario` varchar(10) NOT NULL,
  `nombres` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `rol` varchar(1) NOT NULL,
  `correoElectronico` varchar(45) NOT NULL,
  `claveDeAcceso` varchar(255) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `cambioClaveDeAcceso` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO `usuario` VALUES ('1', 'carlos', 'castilla', '3043651232', '5', 'carloscastilla31@gmail.com', 'D1979057FD7E4CC00201140D80296F2CDE298015F1A181161CF952F46B79725E', '1', 'D1979057FD7E4CC00201140D80296F2CDE298015F1A181161CF952F46B79725E');
SET FOREIGN_KEY_CHECKS=1;
