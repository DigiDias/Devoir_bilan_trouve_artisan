-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: trouve_artisan
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_ville`
--

DROP TABLE IF EXISTS `t_ville`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_ville` (
  `id_ville` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ville`
--

LOCK TABLES `t_ville` WRITE;
/*!40000 ALTER TABLE `t_ville` DISABLE KEYS */;
INSERT INTO `t_ville` VALUES (1,'Lyon'),(2,'Montélimar'),(3,'Evian'),(4,'Chamonix'),(5,'Bourg-en-bresse'),(6,'Vienne'),(7,'Aix-les-bains'),(8,'Annecy'),(9,'Le Puy-en-Velay'),(10,'Saint-Priest'),(11,'Chambéry'),(12,'Romans-sur-Isère'),(13,'Annonay'),(14,'Valence');
/*!40000 ALTER TABLE `t_ville` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-03 10:18:56
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: trouve_artisan
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_categorie`
--

DROP TABLE IF EXISTS `t_categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_categorie` (
  `id_categorie` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_categorie`
--

LOCK TABLES `t_categorie` WRITE;
/*!40000 ALTER TABLE `t_categorie` DISABLE KEYS */;
INSERT INTO `t_categorie` VALUES (1,'Alimentation'),(2,'Bâtiment'),(3,'Fabrication'),(4,'Services');
/*!40000 ALTER TABLE `t_categorie` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-03 10:18:55
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: trouve_artisan
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_specialite`
--

DROP TABLE IF EXISTS `t_specialite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_specialite` (
  `id_specialite` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `id_categorie` int(11) NOT NULL,
  PRIMARY KEY (`id_specialite`),
  KEY `T_Categorie` (`id_categorie`),
  CONSTRAINT `T_Categorie` FOREIGN KEY (`id_categorie`) REFERENCES `t_categorie` (`id_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_specialite`
--

LOCK TABLES `t_specialite` WRITE;
/*!40000 ALTER TABLE `t_specialite` DISABLE KEYS */;
INSERT INTO `t_specialite` VALUES (1,'Boucher',1),(2,'Boulanger',1),(3,'Chocolatier',1),(4,'Traiteur',1),(5,'Chauffagiste',2),(6,'Electricien',2),(7,'Menuisier',2),(8,'Plombier',2),(9,'Bijoutier',3),(10,'Couturier',3),(11,'Ferronier',3),(12,'Coiffeur',4),(13,'Fleuriste',4),(14,'Toiletteur',4),(15,'Webdesign',4);
/*!40000 ALTER TABLE `t_specialite` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-03 10:18:55
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: trouve_artisan
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_artisan`
--

DROP TABLE IF EXISTS `t_artisan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_artisan` (
  `id_artisan` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `note` decimal(5,2) DEFAULT NULL,
  `A_propos` text DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `site_web` varchar(50) DEFAULT NULL,
  `top` tinyint(1) DEFAULT NULL,
  `id_specialite` int(11) NOT NULL,
  `id_ville` int(11) NOT NULL,
  PRIMARY KEY (`id_artisan`),
  KEY `T_Specialite` (`id_specialite`),
  KEY `T_Ville` (`id_ville`),
  CONSTRAINT `T_Specialite` FOREIGN KEY (`id_specialite`) REFERENCES `t_specialite` (`id_specialite`),
  CONSTRAINT `T_Ville` FOREIGN KEY (`id_ville`) REFERENCES `t_ville` (`id_ville`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_artisan`
--

LOCK TABLES `t_artisan` WRITE;
/*!40000 ALTER TABLE `t_artisan` DISABLE KEYS */;
INSERT INTO `t_artisan` VALUES (1,'Boucherie Dumont',4.50,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','boucherie.dumond@gmail.com','',0,1,1),(2,'Au pain chaud',4.80,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','aupainchaud@hotmail.com','',1,2,2),(3,'Chocolaterie Labbé',4.90,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','chocolaterie-labbe@gmail.com','https://chocolaterie-labbe.fr',1,3,1),(4,'Traiteur Truchon',4.10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','contact@truchon-traiteur.fr','https://truchon-traiteur.fr',0,4,1),(5,'Orville Salmons',5.00,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','o-salmons@live.com','',1,5,3),(6,'Mont Blanc Eléctricité',4.50,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','contact@mont-blanc-electricite.com','https://mont-blanc-electricite.com',0,6,4),(7,'Boutot & fils',4.70,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','boutot-menuiserie@gmail.com','https://boutot-menuiserie.com',0,7,5),(8,'Vallis Bellemare',4.00,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','v.bellemare@gmail.com','https://plomberie-bellemare.com',0,8,6),(9,'Claude Quinn',4.20,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','claude.quinn@gmail.com','',0,9,7),(10,'Amitee Lécuyer',4.50,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','a.amitee@hotmail.com','https://lecuyer-couture.com',0,10,8),(11,'Ernest Carignan',5.00,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','e-carigan@hotmail.com','',0,11,9),(12,'Royden Charbonneau',3.80,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','r.charbonneau@gmail.com','',0,12,10),(13,'Leala Dennis',3.80,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','l.dennos@hotmail.fr','https://coiffure-leala-chambery.fr',0,12,11),(14,'Cest suphair',4.10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','sup-hair@gmail.com','https://sup-hair.fr',0,12,12),(15,'Le monde des fleurs',4.60,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','contact@le-monde-des-fleurs-annonay.fr','https://le-monde-des-fleurs-annonay.fr',0,13,13),(16,'Valérie Laderoute',4.50,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','v-laredoute@gmail.com','',0,14,14),(17,'CM Graphisme',4.40,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','contact@cm-graphisme.com','https://cm-graphisme.com',0,15,14);
/*!40000 ALTER TABLE `t_artisan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-03 10:18:56
