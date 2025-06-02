-- Création de la base
CREATE DATABASE IF NOT EXISTS trouve_artisan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE trouve_artisan;

-- Création du user
CREATE USER 'artisan_user'@'localhost' IDENTIFIED BY 'admin';


--Création table T_Categorie
CREATE TABLE IF NOT EXISTS `trouve_artisan`.`T_Categorie` 
(`id_categorie` INT NOT NULL AUTO_INCREMENT , 
`nom` VARCHAR (50) NOT NULL , PRIMARY KEY (`id_categorie`)) ENGINE = InnoDB; 

--alimentation T_Categorie
insert into `trouve_artisan`.`T_Categorie` (`id_categorie`, `nom`)
VALUES  ('1', 'Alimentation'),
('2', 'Bâtiment'),
('3','Fabrication'),
('4','Services') ;


--Création T_Ville
CREATE TABLE IF NOT EXISTS `trouve_artisan`.`T_Ville`
(`id_ville` INT NOT NULL AUTO_INCREMENT , 
`nom` VARCHAR (50) NOT NULL , PRIMARY KEY (`id_ville`)) ENGINE = InnoDB; 


--Alimentation T_Ville
insert into `trouve_artisan`.`T_Ville` (`id_ville`, `nom`)
VALUES  ('1','Lyon'),
('2','Montélimar'),
('3','Evian'),
('4','Chamonix'),
('5','Bourg-en-bresse'),
('6','Vienne'),
('7','Aix-les-bains'),
('8','Annecy'),
('9','Le Puy-en-Velay'),
('10','Saint-Priest'),
('11','Chambéry'),
('12','Romans-sur-Isère'),
('13','Annonay'),
('14','Valence') ;


--Création T_artisan
CREATE TABLE IF NOT EXISTS `trouve_artisan`.`T_Artisan`
(`id_artisan` INT NOT NULL AUTO_INCREMENT , 
`nom` VARCHAR (50) NOT NULL ,
`note` DECIMAL (5,2),
`A_propos` TEXT , 
`email` VARCHAR (50), 
`site_web` VARCHAR (50), 
`top` BOOLEAN,
 PRIMARY KEY (`id_artisan`)) ENGINE = InnoDB;


--Rajout de la clé etrangére dans table T_Specialité
ALTER TABLE `trouve_artisan`.`T_Specialite`
ADD COLUMN `id_categorie`  INT NOT NULL,
ADD CONSTRAINT `T_Categorie`
  FOREIGN KEY (`id_categorie`) REFERENCES `trouve_artisan`.`T_Categorie`(`id_categorie`)

--Rajout des clé etrangére dans T_Artisan : 
ALTER TABLE `trouve_artisan`.`T_Artisan`
ADD COLUMN `id_specialite`  INT NOT NULL,
ADD COLUMN `id_ville` INT NOT NULL,
ADD CONSTRAINT `T_Specialite`
  FOREIGN KEY (`id_specialite`) REFERENCES `trouve_artisan`.`T_Specialite`(`id_specialite`),
ADD CONSTRAINT `T_Ville`
  FOREIGN KEY (`id_ville`) REFERENCES `trouve_artisan`.`T_Ville`(`id_ville`);

--Alimentation Spécialité
USE trouve_artisan;
INSERT INTO T_Specialite (`id_specialite`, `nom`,`id_categorie`)
VALUES ('1','Boucher','1'),
('2','Boulanger','1'),
('3','Chocolatier','1'),
('4','Traiteur','1'),
('5','Chauffagiste','2'),
('6','Electricien','2'),
('7','Menuisier','2'),
('8','Plombier','2'),
('9','Bijoutier','3'),
('10','Couturier','3'),
('11','Ferronier','3'),
('12','Coiffeur','4'),
('13','Fleuriste','4'),
('14','Toiletteur','4'),
('15','Webdesign','4');

--Alimentation artisan : 
USE trouve_artisan;
INSERT INTO T_Artisan (`id_artisan`, `nom`,`id_specialite`,`id_ville`,
 `note`, `a_propos`,`email`, `site_web`, `top`)
VALUES ('1','Boucherie Dumont','1','1','4.5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','boucherie.dumond@gmail.com','','0'),
('2','Au pain chaud','2','2','4.8','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','aupainchaud@hotmail.com','','1'),
('3','Chocolaterie Labbé','3','1','4.9','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','chocolaterie-labbe@gmail.com','https://chocolaterie-labbe.fr','1'),
('4','Traiteur Truchon','4','1','4.1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','contact@truchon-traiteur.fr','https://truchon-traiteur.fr','0'),
('5','Orville Salmons','5','3','5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','o-salmons@live.com','','1'),
('6','Mont Blanc Eléctricité','6','4','4.5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','contact@mont-blanc-electricite.com','https://mont-blanc-electricite.com','0'),
('7','Boutot & fils','7','5','4.7','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','boutot-menuiserie@gmail.com','https://boutot-menuiserie.com','0'),
('8','Vallis Bellemare','8','6','4','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','v.bellemare@gmail.com','https://plomberie-bellemare.com','0'),
('9','Claude Quinn','9','7','4.2','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','claude.quinn@gmail.com','','0'),
('10','Amitee Lécuyer','10','8','4.5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','a.amitee@hotmail.com','https://lecuyer-couture.com','0'),
('11','Ernest Carignan','11','9','5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','e-carigan@hotmail.com','','0'),
('12','Royden Charbonneau','12','10','3.8','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','r.charbonneau@gmail.com','','0'),
('13','Leala Dennis','12','11','3.8','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','l.dennos@hotmail.fr','https://coiffure-leala-chambery.fr','0'),
('14','Cest suphair','12','12','4.1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','sup-hair@gmail.com','https://sup-hair.fr','0'),
('15','Le monde des fleurs','13','13','4.6','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','contact@le-monde-des-fleurs-annonay.fr','https://le-monde-des-fleurs-annonay.fr','0'),
('16','Valérie Laderoute','14','14','4.5','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','v-laredoute@gmail.com','','0'),
('17','CM Graphisme','15','14','4.4','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ','contact@cm-graphisme.com','https://cm-graphisme.com','0');


