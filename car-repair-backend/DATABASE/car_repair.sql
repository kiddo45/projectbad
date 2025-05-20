-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2025 at 12:11 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_repair`
--

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `PlateNumber` varchar(20) NOT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Model` varchar(50) DEFAULT NULL,
  `ManufacturingYear` int(11) DEFAULT NULL,
  `DriverPhone` varchar(20) DEFAULT NULL,
  `MechanicName` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `PaymentNumber` int(11) NOT NULL,
  `RecordNumber` int(11) DEFAULT NULL,
  `AmountPaid` decimal(10,2) DEFAULT NULL,
  `PaymentDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `servicerecord`
--

CREATE TABLE `servicerecord` (
  `RecordNumber` int(11) NOT NULL,
  `PlateNumber` varchar(20) DEFAULT NULL,
  `ServiceCode` int(11) DEFAULT NULL,
  `ServiceDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `ServiceCode` int(11) NOT NULL,
  `ServiceName` varchar(100) DEFAULT NULL,
  `ServicePrice` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`ServiceCode`, `ServiceName`, `ServicePrice`) VALUES
(1, 'Pincage', 10000.00),
(10, 'REVISION MOTEL', 20000.00),
(11, 'REVISION MOTEL', 20000.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`PlateNumber`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`PaymentNumber`),
  ADD KEY `RecordNumber` (`RecordNumber`);

--
-- Indexes for table `servicerecord`
--
ALTER TABLE `servicerecord`
  ADD PRIMARY KEY (`RecordNumber`),
  ADD KEY `PlateNumber` (`PlateNumber`),
  ADD KEY `ServiceCode` (`ServiceCode`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`ServiceCode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `PaymentNumber` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `servicerecord`
--
ALTER TABLE `servicerecord`
  MODIFY `RecordNumber` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `ServiceCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`RecordNumber`) REFERENCES `servicerecord` (`RecordNumber`);

--
-- Constraints for table `servicerecord`
--
ALTER TABLE `servicerecord`
  ADD CONSTRAINT `servicerecord_ibfk_1` FOREIGN KEY (`PlateNumber`) REFERENCES `car` (`PlateNumber`),
  ADD CONSTRAINT `servicerecord_ibfk_2` FOREIGN KEY (`ServiceCode`) REFERENCES `services` (`ServiceCode`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
