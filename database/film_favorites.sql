-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2021 at 07:01 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `filmfav`
--

-- --------------------------------------------------------

--
-- Table structure for table `film_favorites`
--

CREATE TABLE `film_favorites` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `film_favorites`
--

INSERT INTO `film_favorites` (`id`, `title`, `user_id`, `createdAt`, `updatedAt`) VALUES
(4, 'Fantasy Island', 2, '2021-01-18 05:50:00', '2021-01-18 05:50:00'),
(5, 'Spider-man', 2, '2021-01-18 05:50:17', '2021-01-18 05:50:17'),
(6, '365 Days', 2, '2021-01-18 05:50:31', '2021-01-18 05:50:31'),
(7, 'Amar', 2, '2021-01-18 05:55:08', '2021-01-18 05:55:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `film_favorites`
--
ALTER TABLE `film_favorites`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `film_favorites`
--
ALTER TABLE `film_favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
