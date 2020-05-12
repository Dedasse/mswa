-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql.metropolia.fi
-- Generation Time: May 12, 2020 at 04:12 PM
-- Server version: 10.1.41-MariaDB
-- PHP Version: 7.2.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mikaely`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `fk_period_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `fk_teacher_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `fk_period_id`, `name`, `fk_teacher_id`) VALUES
(1, 1, 'Smart', 8),
(2, 1, 'Verkot', 10),
(3, 1, 'Linux', 11),
(4, 1, 'Digitaalitekniikka', 1),
(5, 3, 'C#', 7),
(6, 3, 'Unity', 7),
(7, 3, 'Tietokannat', 4),
(8, 2, 'Android', 6),
(9, 2, 'Hyvinvointiteknologia', 12),
(10, 2, 'Java', 3),
(11, 4, 'Web-tekniikat', 5),
(12, 4, 'Matematiikka', 2),
(13, 4, 'Digitaalinen media', 14),
(14, 4, 'Fysiikka', 13),
(15, 4, 'Viestintä', 9),
(16, 2, 'Viestintä', 9),
(17, 2, 'Matematiikka', 2),
(18, 2, 'Fysiikka', 13),
(19, 3, 'Matematiikka', 2),
(20, 3, 'Fysiikka', 13),
(21, 1, 'Matematiikka', 2),
(22, 1, 'Fysiikka', 13),
(23, 1, 'Englanti', 15),
(24, 3, 'Englanti', 15);

-- --------------------------------------------------------

--
-- Table structure for table `course_infos`
--

CREATE TABLE `course_infos` (
  `info_id` int(11) NOT NULL,
  `fk_course_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `information` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course_infos`
--

INSERT INTO `course_infos` (`info_id`, `fk_course_id`, `name`, `information`) VALUES
(1, 1, 'Smart', 'Kurssin aikana opiskellaan C-ohjelmointia aloittelijatasolla. Kurssin lopputyönä ohjelmoidaan monenlaisia\r\nsensoreita hyödyntävä robotti suorittamaan useita eri tehtäviä. Lopputyössä yhdistyvät muiden kurssien aikana opitut aiheet \r\nniin, että C-ohjelmointikielen lisäksi opiskelijalla tulee olla jokseenkin hallussa myös Linux, verkkotyöskentely ja \r\ndigitaalitekniikan erilaiset menetelmät.'),
(2, 1, 'Verkot', 'Kurssin tavoitteena on tutustuttaa opiskelija verkkojen maailmaan. Aiheina kurssilla ovat niin langalliset \r\nkuin langattomatkin verkot, ja läpi käydään kaikki 4G- ja Bluetooth-yhteyksistä erilaisiin kaapelityyppeihin ja \r\nverkkojen tietoturvaan unohtamatta kuitenkaan verkkoprotokollia tai tiedonsiirron eri menetelmiä.'),
(3, 1, 'Linux', 'Kurssin aikana käydään läpi Linux-perusteita, kuten käyttöjärjestelmän itsensä asennus, peruskomentoja \r\nsekä tiedosto-oikeuksien ja käyttäjien hallintaa. Kurssin päätteeksi tavoitteena on luoda yhteys Raspberry Pi -tietokoneen \r\n(tai vastaavan) ja robotin välille käyttäen MQTT-protokollaa ja WLAN-reititintä.'),
(4, 1, 'Digitaalitekniikka', 'Kurssilla tutustutaan tiedon eri lajeihin, niiden käsittelyyn, tiedon analogisiin ja \r\ndigitaalisiin esitystapoihin, lukujärjestelmiin (binääri- ja desimaaliluvut ym.) ja loogisiin funktioihin (AND, OR, NOT ym.).'),
(5, 1, 'Matematiikka', 'Kurssin aikana muistuvat mieleen kolmion trigonometria ja muut trigonometriset funktiot. Lisäksi \r\nkäsitellään eksponenttia ja erilaisia logaritmifunktioita.'),
(6, 1, 'Fysiikka', 'Kurssin pääaiheina ovat sähkövirta, resistanssi, Ohmin lait sekä Kirchhoffin virta- ja jännitelait.'),
(7, 1, 'Englanti', 'Kurssilla käsitellään muodollisen ja tuttavallisen kielen eroja, lähdeviittauksia ja parafraaseja. \r\nLisäksi kurssin aikana pidetään työhaastatteluharjoitus, jossa opiskelijat ryhmissä haastattelevat toisiaan kuin oikeassa \r\ntyöhaastattelutilanteessa.'),
(8, 2, 'Java', 'Kurssilla käydään läpi Java-ohjelmoinnin alkeita. Kurssin päätavoitteena on opettaa opiskelijoille perusteet, \r\njoita he voivat hyödyntää toteuksen myöhemmässä Android-ohjelmointiosiossa. Aiheisiin kuuluvat mm. tietojoukot \r\n(array, collection ym.) ja olio-ohjelmointi.'),
(9, 2, 'Android', 'Kurssilla keskitytään Java-ohjelmoinnin Android-osuuteen. Opiskelijat oppivat Android-kehityksestä ja \r\nsuunnittelevat ja ohjelmoivat oppimansa pohjalta lopputyönään ryhmissä mobiilisovelluksen, joka tavalla tai toisella liittyy \r\nhyvinvointi- tai terveysteknologiaan.'),
(10, 2, 'Hyvinvointiteknologia', 'Kurssin aikana tutustutaan kaikenlaiseen hyvinvointiteknologiaan. Tällä tarkoitetaan erilaisia \r\ntekniikoita, joilla omaa hyvinvointia voi edistää ja seurata. Lisäksi käydään läpi terveysteknologiaa, jota on lähinnä \r\nkäytössä sairaaloissa sairauksien diagnosointia, ehkäisyä ja hoitoa varten.'),
(11, 2, 'Viestintä', 'Kurssilla perehdytään viestinnän taitojen syventämiseen. Keskiössä on ajatus, jonka mukaisesti puhetapa \r\non tärkeämpi kuin itse sisältö. Kurssin lopputyönä pidetään ns. ohjelmapuhe, jossa opiskelija hyödyntää oppimaansa ja puhuu muulle \r\nryhmälle vakuuttavasti vapaavalintaisesta aiheesta.'),
(12, 2, 'Matematiikka', 'Kurssilla opitaan lukujoukoista ja -järjestelmistä sekä suurelaskennasta, ja verestetään ensimmäisen ja \r\ntoisen asteen yhtälöiden laskutaitoja.'),
(13, 2, 'Fysiikka', 'Kurssilla käydään läpi jatkuvuuden laki ja dynamiikan peruslaki. Lisäksi opitaan mekaanisesta ja \r\nkineettisestä energiasta, niiden säilyvyydestä sekä toisiinsa olennaisesti liittyvistä tehosta ja työstä.'),
(14, 3, 'C#', 'Kurssin tarkoitus on paljolti sama kuin Mobiilit terveyssovellukset -toteutuksen Java-osion. Kurssilla \r\nkäydään läpi C#-ohjelmointikielen alkeita. Näin opiskelija saa tarvittavat tiedot ja taidot lopputyön suorittamista varten.'),
(15, 3, 'Unity', 'Toteutuksen lopputyönä opiskelijat rakentavat ryhmissä pienen pelin Unity-pelimoottorissa. C#-kielen \r\nhyödyntäminen lopputyössä saattaa jäädä jokseenkin vähäiseksi, sillä Unity-ohjelma sisältää monia kiertoteitä varsinaisen \r\nohjelmoinnin välttämiseksi.'),
(16, 3, 'Tietokannat', 'Kurssilla tutustutaan relaatiotietokannoissa käytettävään SQL-kyselykieleen. Opiskelijat luovat omat \r\ntietokantansa, joiden avulla kurssin tehtävät suoritetaan. Tietokantojen ja SQL:n merkitys muussa toteutuksessa on \r\nvähäinen, mutta se toimii pohjana myöhempiä kursseja varten.'),
(17, 3, 'Matematiikka', 'Kurssin aikana palautetaan mieleen yhtälöiden muodostamista ja ratkaisua sekä yhtälöpareja ja suoria. \r\nSuorien yhteydessä koordinaatistoja tietysti käsitellään myös. Lisäksi tutustutaan matriisien eli reaaliluvuista muodostuvien \r\ntaulukoiden perusteisiin.'),
(18, 3, 'Fysiikka', 'Kurssin aiheita ovat mm. kvantittunut sähkövaraus, Coulombin laki, sähkökenttä ja superpositioperiaate. \r\nAiemmalta kurssilta tuttua energian säilymislakia sivutaan myös.'),
(19, 3, 'Englanti', 'Tällä kurssilla harjoitellaan CV:n ja työhakemuksen tekoa. Opiskelijat pitävät myös ryhmissä esitelmän \r\nvalitsemastaan IT-alan yrityksestä englannin kielellä. Lopputyönä tehdään vaativa TOEFL-testi, jonka suorittamiseen \r\nkuluu useampi päivä.'),
(20, 4, 'Digitaalinen media', 'Kurssin aikana opiskelijat oppivat valo- ja videokuvauksen sekä kuvan- ja videonkäsittelyn \r\nperustaitoja. Aiheisiin kuuluvat mm. erilaiset värimallit (RGB, CMYK ym.), vektori- ja bittikarttakuvien erot ja kuvan \r\nresoluutio. Lopputyönä toteutetaan ryhmissä ns. videosprintit, joissa opiskelijat pääsevät testaamaan oppimiaan taitoja \r\nkäytännössä.'),
(21, 4, 'HTML, CSS ja JavaScript', 'Kurssin sisältöihin kuuluuvat HTML, CSS ja JavaScript, jotka liittyvät kaikki olennaisesti \r\ntoisiinsa. HTML-merkintäkielen avulla luodaan verkkosivujen runko, CSS-tyyliohjeilla ulkoasu ja JavaScript-\r\nohjelmointikielellä varsinainen toiminnallisuus. Opiskelija oppii kaikkien näiden perusteet kurssin aikana.'),
(22, 4, 'Matematiikka', 'Kurssilla käydään läpi lukujoukkoja ja erilaisia peruslaskutoimituksia liittyen mm. murtolukuihin \r\nja potenssiin. Tämän lisäksi aiheina ovat yksiköt ja niiden muunnokset sekä symboliyhtälöt.'),
(23, 4, 'Fysiikka', 'Kurssin aiheina ovat tasainen ja tasaisesti kiihtyvä liike sekä vinoheittoliike. Kurssin sisältö on osittain \r\nhyvin samankaltainen kuin toteutuksen matematiikan kurssin, sillä luennoilla käsitellään myös suurelaskentaa ja yksiköiden \r\nmuunnoksia.'),
(24, 4, 'Viestintä', 'Kurssin päätavoitteena on alaantutustumistehtävä, jonka aikana opiskelijat käyvät pienryhmissä tutustumassa \r\npaikalliseen IT-yritykseen ja tekevät siitä esitelmän muulle ryhmälle. Vierailusta kirjoitetaan myös monisivuinen, \r\nkirjallinen raportti. Raporttia kirjoittaessa tarkoitus on perehtyä tiettyjen standardien ja tehokkaan kirjoitustyylin \r\npuitteissa kirjoittamiseen.');

-- --------------------------------------------------------

--
-- Table structure for table `periods`
--

CREATE TABLE `periods` (
  `period_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `periods`
--

INSERT INTO `periods` (`period_id`, `name`) VALUES
(1, 'Älykkäät IoT laitteet'),
(2, 'Mobiilit terveyssovellutukset'),
(3, 'Pelikehitys'),
(4, 'Web-tekniikat ja digitaalinen media');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `teacher_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `picture` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`teacher_id`, `name`, `picture`) VALUES
(1, 'Antti Koivumäki', 'bb042cb34651d9098a9ff9a9b226e339'),
(2, 'Birgitta Nenonen-Andersson', 'bc8f44cf648d143327fb0a54feb84dc4'),
(3, 'Hannu Markkanen', '8fb72e9a7b7e7796a35680af2ee91f22'),
(4, 'Heini Puuska', '3171755a88e5a0392c04dcba1c8c0e96'),
(5, 'Ilkka Kylmäniemi', 'c1696e80b4a134a05f3e3a883ad58c37'),
(6, 'Jarkko Vuori', '3456d9e248bbcc3a37ef2b0b267d39fd'),
(7, 'Jorma Räty', 'e033b65b260b50ec8fec4fff8b4c0123'),
(8, 'Joseph Hotchkiss', '73d69170df4a22b48027fdfd8d823356'),
(9, 'Jussi Alhorinne', '43836e3262c46d0ca785b6dd3362e7a5'),
(10, 'Marko Uusitalo', 'f9cf9b2f215014972a4dadb5145edeed'),
(11, 'Saana Vallius', 'e033b65b260b50ec8fec4fff8b4c0123'),
(12, 'Sakari Lukkarinen', 'd5ed32495ea5c6b7eb560e6669a52696'),
(13, 'Timo Salin', '088c19a47268e18b8b62103593a988e5'),
(14, 'Toni Spännari', '768965f6f498480f5148a5a87a796460'),
(15, 'Ulla Paatola', 'd57efa691f719ef5cd333848543c7ece'),
(44, 'Koira', 'dfe6bed5dae87c1bb501094f9646509e'),
(46, 'AASI', '542666251a31d8cbdae2b0e29c1a8ea0'),
(48, 'TAUNO', '3a27b173324b36cfa8421dc000a371ee');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `isAdmin`) VALUES
(1, 'Mikael Ylivaara', 'mikaely@metropolia.fi', '$2a$10$5RzpyimIeuzNqW7G8seBiOzBiWBvrSWroDomxMa0HzU6K2ddSgixS', 1),
(2, 'Roni Hänninen', 'ronihan@metropolia.fi', '$2a$10$H7bXhRqd68DjwFIVkw3G1OpfIdRWIRb735GvvzCBeuMhac/ZniGba', 1),
(3, 'Jan Lindholm', 'janlind@metropolia.fi', '$2a$15$dRPLgT3zHUeZW8rdPBvXQeCoc7mwm8crP0isdc7ImvWweQXLFoIOG', 1),
(4, 'Tarzan K', 'tarzank@metropolia.fi', '$2a$15$ObBeU5PGYXy2QCybySJaE.B.GpR72YrcVdgQC8Yujpe2AhUliiP9C', 0),
(5, 'Tarzan w', 'tarzanw@metropolia.fi', '$2a$15$ASqAyxvGPbFYwCv0i18lWersO37CMay2BWUBQDoKOATTr0GdD/sVe', NULL),
(8, 'AASI', 'AASI@A.fi', '$2a$15$5CDqLKcIHpUA0dXX8aXbY.9oXS2j6mT6k0ZRhjO8s/8Zrq.i7B.wG', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_notes`
--

CREATE TABLE `user_notes` (
  `note_id` int(11) NOT NULL,
  `who_id` int(11) NOT NULL,
  `where_to` int(11) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_notes`
--

INSERT INTO `user_notes` (`note_id`, `who_id`, `where_to`, `message`) VALUES
(3, 3, 3, 'kato kokki'),
(4, 2, 5, 'Cato Cokki'),
(6, 1, 2, 'lol');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `fk_period_id` (`fk_period_id`);

--
-- Indexes for table `course_infos`
--
ALTER TABLE `course_infos`
  ADD PRIMARY KEY (`info_id`),
  ADD KEY `fk_course_id` (`fk_course_id`);

--
-- Indexes for table `periods`
--
ALTER TABLE `periods`
  ADD PRIMARY KEY (`period_id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`teacher_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_notes`
--
ALTER TABLE `user_notes`
  ADD PRIMARY KEY (`note_id`),
  ADD KEY `who_id` (`who_id`),
  ADD KEY `where_to` (`where_to`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `course_infos`
--
ALTER TABLE `course_infos`
  MODIFY `info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `teacher_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_notes`
--
ALTER TABLE `user_notes`
  MODIFY `note_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`fk_period_id`) REFERENCES `periods` (`period_id`),
  ADD CONSTRAINT `courses_ibfk_2` FOREIGN KEY (`fk_period_id`) REFERENCES `periods` (`period_id`),
  ADD CONSTRAINT `courses_ibfk_3` FOREIGN KEY (`fk_period_id`) REFERENCES `periods` (`period_id`);

--
-- Constraints for table `course_infos`
--
ALTER TABLE `course_infos`
  ADD CONSTRAINT `course_infos_ibfk_1` FOREIGN KEY (`fk_course_id`) REFERENCES `courses` (`course_id`);

--
-- Constraints for table `user_notes`
--
ALTER TABLE `user_notes`
  ADD CONSTRAINT `user_notes_ibfk_1` FOREIGN KEY (`who_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `user_notes_ibfk_2` FOREIGN KEY (`where_to`) REFERENCES `course_infos` (`info_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
