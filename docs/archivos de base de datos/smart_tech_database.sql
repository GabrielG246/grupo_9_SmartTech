CREATE DATABASE  IF NOT EXISTS `smart_tech_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `smart_tech_db`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: smart_tech_db
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total` decimal(11,2) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `users_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_id` (`users_id`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,1650.00,'2022-09-04 00:00:00','2022-09-04 00:00:00',NULL,1);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartshasproducts`
--

DROP TABLE IF EXISTS `cartshasproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cartshasproducts` (
  `carts_id` int NOT NULL,
  `products_id` int NOT NULL,
  `amount` int DEFAULT NULL,
  KEY `carts_id` (`carts_id`),
  KEY `products_id` (`products_id`),
  CONSTRAINT `cartshasproducts_ibfk_1` FOREIGN KEY (`carts_id`) REFERENCES `carts` (`id`),
  CONSTRAINT `cartshasproducts_ibfk_2` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartshasproducts`
--

LOCK TABLES `cartshasproducts` WRITE;
/*!40000 ALTER TABLE `cartshasproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `cartshasproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(255) NOT NULL,
  `specifications` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (19,'Samsung Galaxy S20 Fan Edition',80000,'Si buscás tener todo en un solo dispositivo, el nuevo Samsung Galaxy S20 Fan Edition es el celular ideal. Este teléfono fue creado para fanáticos de todo tipo: videojuegos, fotos, videos y redes sociales.','Cámara principal : 12 mpx con flash LED | Triple | Zoom digital 30x | Zoom óptico 3x,  Display: 6.5\'\' Full HD+ Super Amoled,  Procesador: Octa Core 2.8 GHz, 2.4 GHz, 1.8 GHz','#000000','product-1651633212479.png'),(20,'Motorola Edge 30 Pro',150000,'Selfies de alta resolución. Sacá increíbles fotos de ultra alta resolución con la cámara especial para selfies de 60 mpx. ','Cámara principal: 50 mpx con Flash LED | Triple | Zoom digital 10x, Display:6,67\'\' FHD+ OLED, Procesador:Octa Core 2.9 GHz, Cámara frontal: 60 mpx, Sistema Operativo: Android 12','#5d5b5b','product-1651634189484.webp'),(22,'iPhone 7 Plus',85000,'Con un acabado que se destaca y construido con el indestructible aluminio, el Apple iPhone 7 Plus es más delgado y resistente','Cámara principal: 12 mpx | Zoom óptico 2x | Zoom digital 10x | Dual , Display: 5.5\'\' HD LED IPS , Procesador. A10 - Chip A10 Fusion con arquitectura de 64 bits, Sistema Operativo: iOS 10','#000000','product-1651638115836.avif'),(23,'Motorola Moto G71',65000,'Pantalla más brillante. La pantalla OLED Max Vision FHD+ de 6.4\'\' ofrece imágenes nítidas y colores negros más profundos con brillo y contraste únicos','Cámara principal: 50 mpx con flash LED | Triple | Zoom digital 10x , Display : 6.43\'\' Full HD+ OLED , Procesador: Octa Core 2.2 GHz, Sistema Operativo: Android 11, Memoria RAM: 6 GB','#00d0fa','product-1651638815863.png'),(24,'Samsung Galaxy A53',85000,'La simplicidad se lleva todas las miradas. El Samsung Galaxy A53 está diseñado para destacarse.','Cámara principal :64 mpx con flash LED | Zoom digital 10x | Zoom óptico 2x , Display: 6.5\'\' Full HD+ Super Amoled , Procesador: Octa Core 2.4 GHz , Memoria RAM: 6 GB','#121111','product-1651639220083.png'),(26,'iPhone X',110000,'El iPhone que rompió con todos los diseños de smartphone de Apple. El iPhone X  vino a romper con todos los moldes que has conocido en cuestión de diseño por parte de iPhone.','Cámara principal: 12 mpx con flash Quad-LED | Zoom óptico | Zoom digital 10x , Display :5.8\'\' HD OLED , Procesador : A11 - Chip A11 Bionic con arquitectura de 64 bits,  Memoria Interna: 64 GB','#0f0f0f','product-1651639843714.jpg'),(27,'Moto E20',29000,'Máximo rendimiento, el mejor diseño y materiales de primera calidad que convierten a este smartphone en una opción ideal si tenés que comprarte uno nuevo o hacer un buen regalo.','Cámara principal : 13 mpx con flash LED | Dual | Zoom digital 4x,  Display: 6.52\'\' HD+ , Procesador : Octa Core 1.6 GHz, Memoria RAM: 2 GB,  Sistema Operativo: Android 11 GO Edition','#9a9898','product-1651640265898.png'),(28,'TCL 20 SE',43000,'es el  que te va a acompañar durante todo el día. Ver una película en la pantalla inmersiva,capturar recuerdos únicos con la cámara y mucho más','Cámara principal :45 mpx con flash LED | Quad | Zoom digital 4x, Display: 6.82\'\' Full HD+ OLED, Procesador: Octa Core 1.6 GHz, 1.8 GHz, Memoria RAM: 6 GB, Cámara frontal: 13 mpx','#0dd3d0','product-1651641165168.png'),(30,'iPhone XS Max',125000,'Gracias a sus funciones para usuarios con problemas de visión, audición, aprendizaje, lectoescritura y habilidades físicas y motoras, el dispositivo más personal del mundo está al alcance de todos','Cámara principal : Cámara dual de 12 Mpx con gran angular y teleobjetivo, Display: Pantalla Super Retina HD, Procesador: Chip A12 Bionic, Modo Retrato con efecto bokeh avanzado y Control de Profundidad','#ffffff','product-1651642208688.png'),(32,'Samsung Galaxy A03 Core',22000,'Maximizá tu vista. Ampliá tu visión con la pantalla Infinity-V de 6,5 pulgadas de Galaxy A03 Core y mira lo que te estuviste perdiendo.','Cámara principal :8 mpx con flash LED | Zoom digital 5x, Display :6.5\'\' HD+, Procesador :Octa Core 1.6GHz, 1.2GHz, Memoria RAM: 2 GB, Sistema Operativo: Android 11 Go, Memoria Interna: 32 GB','#201e1e','product-1651642750771.png'),(33,'Motorola Moto G200',90000,'Optimiza tus experiencias de entretenimiento, creatividad y conectividad con el procesador superpotente Qualcomm® Snapdragon™ 888+','Cámara principal: 108 mpx con flash Dual LED | Triple | Zoom digital 10x, Display :6.78\'\' Full HD+ IPS , Procesador :Octa Core 2.95 GHz , Cámara frontal: 16 mpx , Sistema Operativo: Android 11','#2481e5','product-1651717484855.png'),(34,'IPhone 11',150000,'Optimiza tus experiencias de entretenimiento, creatividad y conectividad con el procesador superpotente Qualcomm® Snapdragon™ 888+','Display : LCD Multi-Touch de 6.1 pulgadas (diagonal) sin marco y con tecnología IPS, Procesador : Chip A13 Bionic Cámaras: Sistema de dos cámaras de 12 MP: ultra gran angular y gran angular, Sistema Operativo: iOS 15','#5f04e7','product-1651717953439.png'),(36,'iPhone 11 Pro',180000,'Nunca viste un celular tan completo y moderno. La posibilidad de disfrutar de un equipo de nivel profesional está a un paso de ser tu nueva realidad.','Cámara principal :12 mpx con flash True Tone | Zoom digital 6x | Zoom óptico 2x | Triple , Display: 5,8\'\' HDR Procesador: A13 Bionic Neural Engine de tercera generación, Cámara frontal: 12 mpx , Sistema Operativo: iOS 13','#509587','product-1651720999433.png'),(37,'Samsung Galaxy A12',40000,'Es el compañero ideal para todos los fanáticos de la fotografía porque permite capturar detalles más nítidos gracias a la cámara principal de 48MP','Cámara principal: 48 mpx con Flash LED | Cuádruple | Zoom digital 10x, Display: 6.5\'\' HD+, Procesador: Octa Core 2 GHz, Modelo: SM-A127M (Exynos) , Sistema Operativo: Android 10, Memoria RAM: 4 GB','#2e2828','product-1651722017930.jpg'),(38,'Samsung Galaxy S22 Ultra',229000,'El primer Galaxy S con S Pen integrado.Expulsalo desde la parte inferior del smartphone para escribir, hacer un dibujo o controlar tu Smartphone','Cámara principal: 108 mpx con flash Dual LED | Triple | Zoom digital 100x, Display: 6.8\'\' Quad HD+ Dynamic Amoled 2x, Procesador: Octa Core 2.99 GHz, 2.4 GHz, 1.7 GHz, Cámara frontal: 40 mpx, Sistema Operativo: Android 12','#242424','product-1651722895536.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Cliente'),(2,'Administrador');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220408012402-create-roles-table.js'),('20220408013607-create-users-table.js'),('20220409062953-create-products-table.js.js'),('20220409071125-create-carts-table.js.js'),('20220409081234-create-cartsHasProducts-table.js.js'),('20220413223653-addUserImageField.js'),('20220417212359-addProductImageFieldInProductsTable.js.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `roles_id` int DEFAULT NULL,
  `userImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`),
  KEY `roles_id` (`roles_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'erik','bejarano','erikbejarano@gmail.com','testeo','Erik23',1,'defaultUserImage.png'),(10,'Leandro','Gomez','leandrogomez@gmail.com','$2b$11$d2ydk5MeEbvX5/ZT1BusBuKar1r4SID8ipXX8Oo4sK0H.zfVg5zgG','Leandro23',2,'defaultUserImage.png'),(11,'Gabriel','Garcia','gabrielgarcia@gmail.com','$2b$11$Z6z8WhnRJRaEZcaM5AdmOOWLiD74FJRW.rY4NKevVyINtQoLbbj4i','Gabriel10',2,'defaultUserImage.png'),(12,'Brad','Pitt','bradpitt@gmail.com','$2b$11$Gn07ppfAAbQtybxurqgbneojXbRl15SBxRqRfpALaIrm6Cv97oqWe','brad13',1,'userImage-1651939863218.webp'),(13,'Antonio','Banderas ','antoniobanderas@gmail.com','$2b$11$/32n//Gg.yHu2iONDq/iEeGpdvKoKNwOPnsLZoodVjly2U/MO1cgm','antonio23',1,'userImage-1652108523329.jpg'),(15,'George','Clooney','georgeclooney@gmail.com','$2b$11$3FuUgqB.63BH0R/VN1dd4ONxP0WweWsJrMZE3W6jRKcUwI/FaQsee','George',1,'userImage-1652109284779.webp'),(16,'Angelina','Jolie','angelinajolie@gmail.com','$2b$11$sJavGE9Biydvz9VwIhjVPeED/G18s0U3nS.irAzu5cudx33veacPK','angie89',1,'userImage-1652110475819.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-09 12:43:12
