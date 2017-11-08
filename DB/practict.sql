-- MySQL dump 10.16  Distrib 10.1.26-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: practict
-- ------------------------------------------------------
-- Server version	10.1.26-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ci_sessions`
--

DROP TABLE IF EXISTS `ci_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ci_sessions` (
  `id` varchar(128) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `timestamp` int(10) unsigned NOT NULL DEFAULT '0',
  `data` blob NOT NULL,
  PRIMARY KEY (`id`,`ip_address`),
  KEY `ci_sessions_timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ci_sessions`
--

LOCK TABLES `ci_sessions` WRITE;
/*!40000 ALTER TABLE `ci_sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `ci_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `controlcerrarsesioncorreo`
--

DROP TABLE IF EXISTS `controlcerrarsesioncorreo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `controlcerrarsesioncorreo` (
  `idUsuario` int(10) DEFAULT NULL,
  `correoElectronico` varchar(50) DEFAULT NULL,
  `codigoCerrarSesion` varchar(50) DEFAULT NULL,
  `fechaUso` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `activo` int(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `controlcerrarsesioncorreo`
--

LOCK TABLES `controlcerrarsesioncorreo` WRITE;
/*!40000 ALTER TABLE `controlcerrarsesioncorreo` DISABLE KEYS */;
/*!40000 ALTER TABLE `controlcerrarsesioncorreo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `controlsesiones`
--

DROP TABLE IF EXISTS `controlsesiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `controlsesiones` (
  `idUsuario` int(10) NOT NULL AUTO_INCREMENT,
  `fechaOnline` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ip` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `controlsesiones`
--

LOCK TABLES `controlsesiones` WRITE;
/*!40000 ALTER TABLE `controlsesiones` DISABLE KEYS */;
/*!40000 ALTER TABLE `controlsesiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modulo`
--

DROP TABLE IF EXISTS `modulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modulo` (
  `idModulo` int(11) NOT NULL AUTO_INCREMENT,
  `nombreModulo` varchar(50) DEFAULT NULL,
  `numeroDeCredito` int(11) DEFAULT NULL,
  PRIMARY KEY (`idModulo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulo`
--

LOCK TABLES `modulo` WRITE;
/*!40000 ALTER TABLE `modulo` DISABLE KEYS */;
/*!40000 ALTER TABLE `modulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sesiones`
--

DROP TABLE IF EXISTS `sesiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sesiones` (
  `idSession` varchar(255) NOT NULL,
  `idUsuario` int(10) NOT NULL,
  `cerrar` int(255) NOT NULL DEFAULT '0',
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idSession`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sesiones`
--

LOCK TABLES `sesiones` WRITE;
/*!40000 ALTER TABLE `sesiones` DISABLE KEYS */;
/*!40000 ALTER TABLE `sesiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idUsuario` int(12) NOT NULL AUTO_INCREMENT,
  `Pnombre` varchar(45) NOT NULL,
  `Snombre` varchar(45) NOT NULL,
  `Papellido` varchar(45) NOT NULL,
  `Sapellido` varchar(45) NOT NULL,
  `correoElectronico` varchar(45) NOT NULL,
  `claveDeAcceso` varchar(255) NOT NULL,
  `estado` int(1) NOT NULL DEFAULT '1',
  `cambioClaveDeAcceso` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'carlos123','dasd','sada','asdas','carloscastilla31@gmail.com','BDE7DB439A3BB59CA4ED8BBDDA763ABF77D3671BA966C78DF31854E509859E48',1,'0'),(2,'','','','','admin@admin.com','8CF63C0A89B9D721F18FCBC09DA0C824AD561C77C7E5D9148AFCA927AB50457D',1,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarioacceso`
--

DROP TABLE IF EXISTS `usuarioacceso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarioacceso` (
  `idUsuario` int(11) NOT NULL,
  `rol` int(11) NOT NULL DEFAULT '1',
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `usuarioacceso_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarioacceso`
--

LOCK TABLES `usuarioacceso` WRITE;
/*!40000 ALTER TABLE `usuarioacceso` DISABLE KEYS */;
INSERT INTO `usuarioacceso` VALUES (1,1),(2,2);
/*!40000 ALTER TABLE `usuarioacceso` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-05 23:11:08


CREATE TABLE ModuloDocente(
idUsuario int(12) NOT NULL,
idModulo int(11) NOT NULL,
CONSTRAINT MD_idUsuario_fk FOREIGN KEY(idUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT MD_idModulo_fk FOREIGN KEY(idModulo) REFERENCES modulo(idModulo)
);

CREATE TABLE procedimiento(
idProcedimiento INT(12) NOt NULL AUTO_INCREMENT,
nombreProcedimiento VARCHAR(30) NOT NULL,
idModulo int(11) NOT NULL,
estado int(1) NOT NULL default 1,
CONSTRAINT Procedimiento_idProcedimiento_pk PRIMARY KEY(idProcedimiento),
CONSTRAINT Procedimiento_idModulo_fk FOREIGN KEY(idModulo) REFERENCES modulo(idModulo)
);

