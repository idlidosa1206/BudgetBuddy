-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2023 at 06:22 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `budget_buddy`
--

-- --------------------------------------------------------

--
-- Table structure for table `budget`
--

CREATE TABLE `budget` (
  `budget_id` int(20) NOT NULL,
  `due_date` date DEFAULT NULL,
  `user_id` varchar(20) NOT NULL,
  `expected_amt` float NOT NULL,
  `cat_id` varchar(20) NOT NULL,
  `b_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` varchar(20) NOT NULL,
  `cat_name` varchar(35) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`, `description`) VALUES
('c01', 'Others', 'Those things that don\'t fall under any category.\r\nThose expenses are miscellaneous.'),
('c02', 'Household', 'Contains :\r\n1.grocery\r\n2.billing\r\n3.cleaning\r\netc'),
('c03', 'medical', 'medical bills'),
('c04', 'food', 'processed food, vegetables, fruits, and any food consumed outside'),
('c05', 'travel', 'all travels from basic bus travel to even international flights'),
('c06', 'leisure', 'all kinds of leisure and money that can be spent on your pastimes'),
('c07', 'education', 'school, college , University - all kinds of bills related to education');

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `exp_id` int(20) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `exp_date` date NOT NULL,
  `cat_id` varchar(20) NOT NULL,
  `exp_description` text DEFAULT NULL,
  `spent_amt` float NOT NULL,
  `mthd_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `income`
--

CREATE TABLE `income` (
  `user_id` varchar(20) NOT NULL,
  `inc_src` text DEFAULT NULL,
  `amount` float NOT NULL,
  `inc_date` date NOT NULL,
  `income_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `income`
--

INSERT INTO `income` (`user_id`, `inc_src`, `amount`, `inc_date`, `income_id`) VALUES
('idlidosa', 'job', 60000, '2023-11-01', 1),
('geegee', 'job', 65000, '2023-11-02', 2),
('gtika', 'job', 65000, '2023-10-01', 3),
('j_bis06', 'job', 70000, '2023-11-01', 4),
('say240', 'job', 90000, '2023-11-01', 5);

-- --------------------------------------------------------

--
-- Table structure for table `loan`
--

CREATE TABLE `loan` (
  `loan_id` int(20) NOT NULL,
  `description` text DEFAULT NULL,
  `user_id` varchar(20) NOT NULL,
  `loan_src` varchar(35) DEFAULT 'others',
  `exp_id` int(20) NOT NULL,
  `cat_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` varchar(20) NOT NULL,
  `u_name` varchar(35) NOT NULL,
  `email` varchar(35) NOT NULL,
  `pass` varchar(8) NOT NULL,
  `reg_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `u_name`, `email`, `pass`, `reg_date`) VALUES
('geegee', 'Geetika  Khandelwaal', 'geetika@gmail.com', '13869', '2023-11-16'),
('gtika', 'Geethika Anomolu', 'geethika@gmail.com', '123', '2023-11-16'),
('idlidosa', 'Uttara Kamat', 'idlidosa@gmail.com', '1290', '2023-11-16'),
('j_bis06', 'Joyee Biswas', 'joyee@test.com', '123', '2023-11-16'),
('say240', 'Sayali Kadam', 'say@gmail.com', '123', '2023-11-16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `budget`
--
ALTER TABLE `budget`
  ADD PRIMARY KEY (`budget_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`exp_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `income`
--
ALTER TABLE `income`
  ADD PRIMARY KEY (`income_id`,`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `loan`
--
ALTER TABLE `loan`
  ADD PRIMARY KEY (`loan_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `exp_id` (`exp_id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `budget`
--
ALTER TABLE `budget`
  MODIFY `budget_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `exp_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `income`
--
ALTER TABLE `income`
  MODIFY `income_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `loan`
--
ALTER TABLE `loan`
  MODIFY `loan_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `budget`
--
ALTER TABLE `budget`
  ADD CONSTRAINT `budget_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `budget_ibfk_2` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`);

--
-- Constraints for table `expenses`
--
ALTER TABLE `expenses`
  ADD CONSTRAINT `expenses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `expenses_ibfk_2` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`);

--
-- Constraints for table `income`
--
ALTER TABLE `income`
  ADD CONSTRAINT `income_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `loan`
--
ALTER TABLE `loan`
  ADD CONSTRAINT `loan_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `loan_ibfk_2` FOREIGN KEY (`exp_id`) REFERENCES `expenses` (`exp_id`),
  ADD CONSTRAINT `loan_ibfk_3` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
