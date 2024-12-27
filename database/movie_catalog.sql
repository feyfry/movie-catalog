-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 26, 2024 at 01:53 PM
-- Server version: 8.0.30
-- PHP Version: 8.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie_catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `year` int NOT NULL,
  `synopsis` text,
  `genre` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `year`, `synopsis`, `genre`, `created_at`) VALUES
(1, 'The Matrix', 1999, 'A computer programmer discovers a mysterious world...', 'Sci-Fi', '2024-12-26 10:15:20'),
(2, 'Inception', 2010, 'A skilled thief enters people\'s dreams to steal their secrets...', 'Sci-Fi/Action', '2024-12-26 10:15:21'),
(3, 'The Shawshank Redemption', 1994, 'Two imprisoned men bond over several years, finding solace and redemption...', 'Drama', '2024-12-26 10:15:22'),
(4, 'Pulp Fiction', 1994, 'Various interconnected stories of Los Angeles criminals...', 'Crime/Drama', '2024-12-26 10:15:23'),
(5, 'The Dark Knight', 2008, 'Batman faces his greatest challenge against the mysterious Joker...', 'Action/Drama', '2024-12-26 10:15:24'),
(6, 'Forrest Gump', 1994, 'A slow-witted but kind-hearted man witnesses and influences several historical events...', 'Drama/Comedy', '2024-12-26 10:15:25'),
(7, 'Avatar', 2009, 'A paraplegic marine dispatched to a distant moon becomes torn between two worlds...', 'Sci-Fi/Adventure', '2024-12-26 10:15:26'),
(8, 'Titanic', 1997, 'A seventeen-year-old aristocrat falls in love with a poor artist aboard the ill-fated ship...', 'Romance/Drama', '2024-12-26 10:15:27'),
(9, 'The Lord of the Rings: Fellowship of the Ring', 2001, 'A hobbit begins a journey to destroy a powerful ring...', 'Fantasy/Adventure', '2024-12-26 10:15:28'),
(10, 'Jurassic Park', 1993, 'Scientists create a wildlife park of cloned dinosaurs...', 'Adventure/Sci-Fi', '2024-12-26 10:15:29'),
(11, 'The Godfather', 1972, 'The aging patriarch of an organized crime dynasty transfers control to his son...', 'Crime/Drama', '2024-12-26 10:15:30'),
(12, 'Star Wars: A New Hope', 1977, 'A young farm boy joins a galactic rebellion against an evil empire...', 'Sci-Fi/Adventure', '2024-12-26 10:15:31'),
(13, 'The Silence of the Lambs', 1991, 'An FBI cadet must receive help from an imprisoned cannibal to catch a serial killer...', 'Thriller/Crime', '2024-12-26 10:15:32'),
(14, 'Fight Club', 1999, 'An insomniac office worker forms an underground fighting club...', 'Drama/Thriller', '2024-12-26 10:15:33'),
(15, 'The Lion King', 1994, 'A young lion prince must overcome tragedy and take his rightful place as king...', 'Animation/Drama', '2024-12-26 10:15:34'),
(16, 'Gladiator', 2000, 'A Roman general seeks vengeance against the corrupt emperor who murdered his family...', 'Action/Drama', '2024-12-26 10:15:35'),
(17, 'The Terminator', 1984, 'A cyborg assassin is sent back in time to kill the mother of humanity\'s future savior...', 'Sci-Fi/Action', '2024-12-26 10:15:36'),
(18, 'The Green Mile', 1999, 'Death row guards discover a mysterious inmate with supernatural healing powers...', 'Drama/Fantasy', '2024-12-26 10:15:37'),
(19, 'Saving Private Ryan', 1998, 'During WWII, soldiers embark on a mission to save a paratrooper whose brothers have been killed...', 'War/Drama', '2024-12-26 10:15:38'),
(20, 'Schindler\'s List', 1993, 'A German businessman saves the lives of more than a thousand Jewish refugees...', 'Drama/History', '2024-12-26 10:15:39'),
(21, 'The Avengers', 2012, 'Earth\'s mightiest heroes must come together to save the world from an alien invasion...', 'Action/Sci-Fi', '2024-12-26 10:15:40'),
(22, 'Goodfellas', 1990, 'The story of a young man\'s rise through the ranks of a mob family...', 'Crime/Drama', '2024-12-26 10:15:41'),
(23, 'The Departed', 2006, 'An undercover cop and a mole in the police force attempt to identify each other...', 'Crime/Thriller', '2024-12-26 10:15:42'),
(24, 'The Social Network', 2010, 'The founding of Facebook and the resulting lawsuits...', 'Drama/Biography', '2024-12-26 10:15:43'),
(25, 'Back to the Future', 1985, 'A teenager accidentally travels back in time and must ensure his parents fall in love...', 'Sci-Fi/Adventure', '2024-12-26 10:15:44'),
(26, 'Alien', 1979, 'The crew of a commercial spacecraft encounter a deadly extraterrestrial...', 'Sci-Fi/Horror', '2024-12-26 10:15:45'),
(27, 'The Pianist', 2002, 'A Polish Jewish musician struggles to survive the Nazi occupation...', 'Drama/War', '2024-12-26 10:15:46'),
(28, 'The Shining', 1980, 'A family becomes isolated at a hotel where sinister forces threaten them...', 'Horror/Drama', '2024-12-26 10:15:47'),
(29, 'E.T. the Extra-Terrestrial', 1982, 'A young boy befriends a stranded alien and helps him return home...', 'Sci-Fi/Family', '2024-12-26 10:15:48'),
(30, 'Die Hard', 1988, 'A New York cop battles terrorists who have taken over a Los Angeles building...', 'Action/Thriller', '2024-12-26 10:15:49'),
(31, 'A Beautiful Mind', 2001, 'The story of John Nash, a brilliant mathematician who struggled with mental illness...', 'Drama/Biography', '2024-12-26 10:15:50'),
(32, 'The Sixth Sense', 1999, 'A child psychologist helps a young boy who claims to see dead people...', 'Drama/Thriller', '2024-12-26 10:15:51'),
(33, 'The Exorcist', 1973, 'A mother seeks help for her daughter who is possessed by a demonic entity...', 'Horror', '2024-12-26 10:15:52'),
(34, 'Raiders of the Lost Ark', 1981, 'An archaeologist races against Nazi forces to find a powerful religious artifact...', 'Adventure/Action', '2024-12-26 10:15:53'),
(35, 'The Princess Bride', 1987, 'A swashbuckling tale of true love and high adventure...', 'Fantasy/Romance', '2024-12-26 10:15:54'),
(36, 'The Big Lebowski', 1998, 'A laid-back bowling enthusiast gets caught up in a case of mistaken identity...', 'Comedy/Crime', '2024-12-26 10:15:55'),
(37, 'Jaws', 1975, 'A police chief attempts to protect a beach town from a giant great white shark...', 'Thriller/Adventure', '2024-12-26 10:15:56'),
(38, 'Good Will Hunting', 1997, 'A janitor at MIT has a gift for mathematics but needs help from a psychologist...', 'Drama', '2024-12-26 10:15:57'),
(39, 'The Usual Suspects', 1995, 'A sole survivor tells of the twisty events leading up to a horrific gun battle...', 'Crime/Thriller', '2024-12-26 10:15:58'),
(40, 'Eternal Sunshine of the Spotless Mind', 2004, 'A couple undergoes a medical procedure to erase each other from their memories...', 'Romance/Sci-Fi', '2024-12-26 10:15:59'),
(41, 'The Breakfast Club', 1985, 'Five high school students from different cliques form unexpected bonds during detention...', 'Drama/Comedy', '2024-12-26 10:16:00'),
(42, 'The Matrix Reloaded', 2003, 'Neo continues his fight against the machines while searching for answers...', 'Sci-Fi/Action', '2024-12-26 10:16:01'),
(43, 'The Silence of the Lambs', 1991, 'An FBI trainee seeks help from an imprisoned cannibal killer to catch another serial killer...', 'Thriller/Crime', '2024-12-26 10:16:02'),
(44, 'Blade Runner', 1982, 'A blade runner must pursue and terminate four replicants who have returned to Earth...', 'Sci-Fi/Thriller', '2024-12-26 10:16:03'),
(45, 'The Great Gatsby', 2013, 'A writer is drawn into the captivating world of the enigmatic millionaire Jay Gatsby...', 'Drama/Romance', '2024-12-26 10:16:04'),
(46, 'Interstellar', 2014, 'A team of explorers travel through a wormhole in search of a new home for humanity...', 'Sci-Fi/Adventure', '2024-12-26 10:16:05'),
(47, 'The Wolf of Wall Street', 2013, 'Based on the true story of Jordan Belfort, from his rise to wealth to his fall involving crime and corruption...', 'Biography/Crime', '2024-12-26 10:16:06'),
(48, 'Braveheart', 1995, 'Scottish warrior William Wallace leads his countrymen in a rebellion against the English...', 'Biography/War', '2024-12-26 10:16:07'),
(49, 'The Grand Budapest Hotel', 2014, 'The adventures of a legendary concierge and his trusted lobby boy...', 'Comedy/Drama', '2024-12-26 10:16:08'),
(50, 'La La Land', 2016, 'A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles...', 'Musical/Romance', '2024-12-26 10:16:09'),
(51, 'The Revenant', 2015, 'A frontiersman on a fur trading expedition fights for survival after being mauled by a bear...', 'Adventure/Drama', '2024-12-26 10:16:10'),
(52, 'No Country for Old Men', 2007, 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong...', 'Crime/Thriller', '2024-12-26 10:16:11'),
(53, 'American Beauty', 1999, 'A sexually frustrated suburban father has a mid-life crisis...', 'Drama', '2024-12-26 10:16:12'),
(54, 'Gone with the Wind', 1939, 'A manipulative woman and a roguish man conduct a turbulent romance during the Civil War...', 'Drama/Romance', '2024-12-26 10:16:13'),
(55, 'Memento', 2000, 'A man with short-term memory loss attempts to track down his wife\'s murderer...', 'Mystery/Thriller', '2024-12-26 10:16:14'),
(56, 'The Wizard of Oz', 1939, 'Dorothy is swept away to a magical land and seeks the Wizard\'s help to return home...', 'Fantasy/Musical', '2024-12-26 10:16:15'),
(57, '2001: A Space Odyssey', 1968, 'An enigmatic monolith affects human evolution through the ages...', 'Sci-Fi', '2024-12-26 10:16:16'),
(58, 'Seven', 1995, 'Two detectives track a serial killer who uses the seven deadly sins as motifs...', 'Crime/Mystery', '2024-12-26 10:16:17'),
(59, 'Casablanca', 1942, 'A cynical expatriate struggles to decide whether to help his former lover and her fugitive husband...', 'Drama/Romance', '2024-12-26 10:16:18'),
(60, 'One Flew Over the Cuckoo\'s Nest', 1975, 'A criminal pleads insanity and is admitted to a mental institution...', 'Drama', '2024-12-26 10:16:19'),
(61, 'Rocky', 1976, 'A small-time boxer gets a rare chance to fight the heavyweight champion...', 'Drama/Sport', '2024-12-26 10:16:20'),
(62, 'Apocalypse Now', 1979, 'During the Vietnam War, a U.S. Army officer is sent on a dangerous mission into Cambodia...', 'War/Drama', '2024-12-26 10:16:21'),
(63, 'The Prestige', 2006, 'Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate illusion...', 'Drama/Mystery', '2024-12-26 10:16:22'),
(64, 'The Graduate', 1967, 'A disillusioned college graduate finds himself torn between his older lover and her daughter...', 'Comedy/Drama', '2024-12-26 10:16:23'),
(65, 'The Sound of Music', 1965, 'A woman leaves an Austrian convent to become a governess to a Naval officer widower...', 'Musical/Drama', '2024-12-26 10:16:24'),
(66, 'A Clockwork Orange', 1971, 'A violent delinquent undergoes an experimental aversion therapy treatment...', 'Crime/Sci-Fi', '2024-12-26 10:16:25'),
(67, 'The Bridge on the River Kwai', 1957, 'British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors...', 'War/Drama', '2024-12-26 10:16:26'),
(68, 'The Deer Hunter', 1978, 'An in-depth examination of the ways in which the Vietnam War impacts three friends...', 'War/Drama', '2024-12-26 10:16:27'),
(69, 'Stand By Me', 1986, 'Four young friends go on a journey to find the body of a missing boy...', 'Drama/Adventure', '2024-12-26 10:16:28'),
(70, 'Gandhi', 1982, 'The life of the lawyer who became the famed leader of the Indian revolts against the British...', 'Biography/Drama', '2024-12-26 10:16:29'),
(71, 'The Thing', 1982, 'Scientists in the Antarctic are confronted by a shape-shifting alien...', 'Horror/Sci-Fi', '2024-12-26 10:16:30'),
(72, 'Dead Poets Society', 1989, 'An English teacher inspires his students through his teaching of poetry...', 'Drama', '2024-12-26 10:16:31'),
(73, 'Heat', 1995, 'A group of professional bank robbers start to feel the heat from police...', 'Crime/Drama', '2024-12-26 10:16:32'),
(74, 'The Truman Show', 1998, 'An insurance salesman discovers his entire life is a TV show...', 'Drama/Comedy', '2024-12-26 10:16:33'),
(75, 'Full Metal Jacket', 1987, 'A pragmatic U.S. Marine observes the dehumanizing effects of the Vietnam War...', 'War/Drama', '2024-12-26 10:16:34'),
(76, 'A Few Good Men', 1992, 'Military lawyers defend Marines accused of murder...', 'Drama/Crime', '2024-12-26 10:16:35'),
(77, 'Groundhog Day', 1993, 'A weatherman finds himself inexplicably living the same day over and over again...', 'Comedy/Fantasy', '2024-12-26 10:16:36'),
(78, 'The Terminator 2: Judgment Day', 1991, 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her son...', 'Action/Sci-Fi', '2024-12-26 10:16:37');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int NOT NULL,
  `movie_id` int NOT NULL,
  `user_id` int NOT NULL,
  `rating` int NOT NULL,
  `comment` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `movie_id`, `user_id`, `rating`, `comment`, `created_at`) VALUES
(8, 1, 9, 5, 'Keren', '2024-12-26 13:05:33'),
(9, 2, 9, 5, 'Mantap!', '2024-12-26 13:12:45'),
(10, 3, 9, 5, 'Bagus bgt filmnya', '2024-12-26 13:27:40'),
(11, 4, 9, 5, 'Aseli, keren parah!', '2024-12-26 13:28:16'),
(12, 5, 9, 5, 'Nostalgia', '2024-12-26 13:29:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(9, 'faiz', 'faiz@gmail.com', 'pbkdf2:sha256:600000$eZfdizAhbtbjcfYZ$080127609ebdecbabb2e8fa9f182ea2db7b78134e045ce1446616119de202b15', '2024-12-26 13:05:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
