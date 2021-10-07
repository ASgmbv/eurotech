import {
	Box,
	Button,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	HStack,
	Link,
	Stack,
	useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { MotionBox } from "./motion";
import { sitemap } from "../lib/config";
import Logo from "../components/icons";

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	const [hoveredIdx, setHoveredIdx] = useState(null);

	return (
		<Box
			position="sticky"
			top="0"
			bg="brandBlue"
			zIndex="99"
			boxShadow="0 5px 12px rgb(77 124 142 / 25%)"
			py="4"
		>
			<Container maxW="container.xl">
				<Flex justifyContent="space-between" alignItems="center">
					<NextLink href="/">
						<a>
							<Logo />
						</a>
					</NextLink>

					<AnimateSharedLayout>
						<HStack
							align="center"
							spacing="8"
							display={["none", null, "flex"]}
							onMouseLeave={() => {
								setHoveredIdx(null);
							}}
						>
							{sitemap
								.filter((el) => el.title !== "Contact Us")
								.map(({ title, link }, idx) => {
									return (
										<NextLink key={link} href={link} passHref>
											<Link
												color="white"
												position="relative"
												onMouseEnter={() => {
													setHoveredIdx(idx);
												}}
												_hover={{
													textTransform: "none",
												}}
											>
												{title}
												{hoveredIdx === idx && (
													<AnimatePresence>
														<MotionBox
															key={idx}
															layoutId="hovered"
															position="absolute"
															left="0"
															right="0"
															bottom="-10px"
															height="2px"
															bg="white"
															transition={{
																opacity: { duration: 2 },
															}}
															exit={{
																opacity: 0,
																transition: { duration: 2 },
															}}
														></MotionBox>
													</AnimatePresence>
												)}
											</Link>
										</NextLink>
									);
								})}
						</HStack>
					</AnimateSharedLayout>

					<HStack spacing="8" display={["none", null, "flex"]}>
						<NextLink href="/contacts" passHref>
							<Link
								color="white"
								_hover={{
									textTransform: "none",
								}}
							>
								Contact Us
							</Link>
						</NextLink>

						<NextLink href="/#form">
							<a>
								<Button
									colorScheme="whiteAlpha"
									color="white"
									variant="outline"
								>
									Request a quote
								</Button>
							</a>
						</NextLink>
					</HStack>

					{/* for mobile */}
					<HamburgerIcon
						as="button"
						display={["block", null, "none"]}
						ref={btnRef}
						onClick={onOpen}
						boxSize="5"
						color="white"
					/>

					<Drawer
						isOpen={isOpen}
						placement="left"
						onClose={onClose}
						finalFocusRef={btnRef}
					>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerCloseButton />
							<DrawerHeader>
								<Heading size="sm">Italia Outdoor Living</Heading>
							</DrawerHeader>

							<DrawerBody>
								<Stack spacing="8" my="50px">
									{sitemap.map(({ title, link }) => {
										return (
											<NextLink key={link} href={link} passHref>
												<Link>{title}</Link>
											</NextLink>
										);
									})}
								</Stack>
								<NextLink href="/">
									<a>
										<Button variant="outline">Get Estimate</Button>
									</a>
								</NextLink>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
