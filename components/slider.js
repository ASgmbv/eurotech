import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	IconButton,
	Stack,
	Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { MotionBox, MotionHeading } from "./motion";

const BannerSlider = () => {
	const slides = [
		{
			img: "/slider1.jpg",
			title: "Welcome to Italia Outdoor Living",
			subtitle:
				"For over 2 decades, Italia Outdoor Living has been Long Island's leading provider of concrete pool construction and custom outdoor landscaping for nearly 20 years, and with good reasons.",
		},
		{
			img: "/slider2.jpg",
			title: "Trust your landscape to Professionals",
			subtitle:
				"We are experts in marble, travertine patios, walkaways, lighting, landscaping, pergolas, outdoor pavilions, and pool houses.",
		},

		{
			img: "/slider3.jpg",
			title: "We Build Luxury",
			subtitle:
				"A beautiful backyard gives your property another dimension, another level of extravagance that serves as a perfect place to relax or entertain family, friends, and guests, if you want a pool for your property, there really is only one place to call, Italia Outdoor Living.",
		},
	];

	const [page, setPage] = useState(0);
	const { img, title } = slides[page];
	const animation = useAnimation();

	useEffect(() => {
		animation.start({
			opacity: 1,
		});
	}, [page, animation]);

	return (
		<Box
			width="100%"
			height="500px"
			display="flex"
			position="relative"
			overflow="hidden"
			justifyContent="center"
			alignItems="center"
		>
			<AnimatePresence>
				<MotionBox
					key={title}
					bg={`url(${img})`}
					backgroundSize="cover"
					backgroundPosition="center"
					position="absolute"
					top="0"
					bottom="0"
					left="0"
					right="0"
					zIndex="-1"
					_after={{
						content: '""',
						position: "absolute",
						width: "100%",
						height: "100%",
						bg: "rgba(0, 0, 0, 0.6)",
					}}
					initial={{
						opacity: 0,
					}}
					animate={{
						scale: 1.1,
						opacity: 1,
					}}
					exit={{
						opacity: 0,
					}}
					transition={{
						scale: { duration: 10 },
						opacity: { duration: 1 },
					}}
				></MotionBox>
			</AnimatePresence>

			<Container maxW="container.xl" height="100%">
				<Flex
					height="100%"
					position="relative"
					alignItems="center"
					justifyContent="space-between"
				>
					<IconButton
						display={["none", null, "block"]}
						color="white"
						borderRadius="0"
						variant="outline"
						onClick={() => {
							if (page > 0) {
								setPage((prev) => (prev - 1) % slides.length);
							}
						}}
						_hover={{
							color: "white",
							bg: "saryy",
						}}
						_active={{
							transform: "scale(1.1)",
						}}
						borderColor="saryy"
						icon={<ChevronLeftIcon />}
					/>
					<Flex flexDir="column" flex="1" alignItems="center">
						<Text as="span" color="brandBlue" mb="6">
							LETS TALK ABOUT YOUR IDEAS
						</Text>
						<Box overflow="hidden" mb="20" mt="2">
							<AnimatePresence exitBeforeEnter>
								<MotionHeading
									key={title + page}
									color="white"
									textTransform="uppercase"
									fontSize={["3xl", null, "4xl"]}
									textAlign="center"
									transition={{
										duration: 0.3,
										delay: 0,
									}}
									initial={{
										opacity: 0,
									}}
									animate={{
										opacity: 1,
									}}
									exit={{
										opacity: 0,
										transition: {
											duration: 0.3,
										},
									}}
								>
									{title}
								</MotionHeading>
							</AnimatePresence>
						</Box>
						<Stack direction="row" spacing="6" mb="6">
							<Button
								bg="brandBlue"
								color="white"
								borderRadius="0"
								colorScheme="blue"
								size="lg"
							>
								Our Services
							</Button>
							<Button
								variant="outline"
								color="white"
								borderRadius="0"
								size="lg"
								colorScheme="gray"
								_hover={{
									color: "gray.700",
									bg: "gray.50",
								}}
							>
								Our Projects
							</Button>
						</Stack>
						<Stack direction="row" spacing="4">
							<IconButton
								display={["block", null, "none"]}
								color="white"
								borderRadius="0"
								size="sm"
								variant="outline"
								onClick={() => {
									if (page > 0) {
										setPage((prev) => (prev - 1) % slides.length);
									}
								}}
								_hover={{
									color: "white",
									bg: "saryy",
								}}
								_active={{
									transform: "scale(1.1)",
								}}
								borderColor="saryy"
								icon={<ChevronLeftIcon />}
							/>
							<IconButton
								display={["block", null, "none"]}
								size="sm"
								color="white"
								borderRadius="0"
								variant="outline"
								onClick={() => {
									setPage((prev) => (prev + 1) % slides.length);
								}}
								_hover={{
									color: "white",
									bg: "saryy",
								}}
								_active={{
									transform: "scale(1.1)",
								}}
								borderColor="saryy"
								icon={<ChevronRightIcon />}
							/>
						</Stack>
					</Flex>

					<IconButton
						display={["none", null, "block"]}
						color="white"
						borderRadius="0"
						variant="outline"
						onClick={() => {
							setPage((prev) => (prev + 1) % slides.length);
						}}
						_hover={{
							color: "white",
							bg: "saryy",
						}}
						_active={{
							transform: "scale(1.1)",
						}}
						borderColor="saryy"
						icon={<ChevronRightIcon />}
					/>
				</Flex>
			</Container>
		</Box>
	);
};

export default BannerSlider;
