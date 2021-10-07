import {
	Box,
	Circle,
	Container,
	Divider,
	Flex,
	Grid,
	Heading,
	Icon,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import { MdLocationOn, MdMailOutline, MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import NextLink from "next/link";
import { info, sitemap } from "../lib/config";
import Logo from "./icons";

const Footer = () => {
	return (
		<Box as="footer" bg="#283646">
			<Divider />
			<Container maxW="container.xl">
				<Grid
					templateColumns={[
						"1fr",
						null,
						"repeat(2, 1fr)",
						"repeat(4, 1fr)",
					]}
					gap="50px"
					pt="80px"
					pb="50px"
					color="white"
				>
					<Stack spacing="4">
						<NextLink href="/">
							<a>
								<Logo />
							</a>
						</NextLink>
						<Text>Italian Outdoor Living Group We build luxury</Text>
					</Stack>

					<Box>
						<Heading as="h3" size="md" mb="6" color="brandBlue">
							Sitemap
						</Heading>
						<Stack spacing="2">
							{sitemap.map(({ title, link }) => {
								return (
									<NextLink key={link} href={link} passHref>
										<Link>{title}</Link>
									</NextLink>
								);
							})}
						</Stack>
					</Box>

					<Box>
						<Heading as="h3" size="md" mb="6" color="brandBlue">
							Get In Touch
						</Heading>
						<Stack spacing="5">
							<Stack direction="row" spacing="4">
								<Icon as={MdPhone} boxSize="5" />
								<Text fontSize="sm">{info.phone}</Text>
							</Stack>
							<Stack direction="row" spacing="4">
								<Icon as={MdMailOutline} boxSize="5" />
								<Text fontSize="sm">{info.email}</Text>
							</Stack>

							<Stack direction="row" spacing="4">
								<Icon as={MdLocationOn} boxSize="5" />
								<Text fontSize="sm">
									260 Lafayette Place, Englewood N.J. 07631
								</Text>
							</Stack>
						</Stack>
					</Box>

					<Stack spacing="6">
						<Heading as="h3" size="md" color="brandBlue">
							Our Socials
						</Heading>
						<Stack direction="row" spacing="4">
							<Link
								href="https://www.instagram.com/italiaoutdoorlivingroup"
								isExternal
							>
								<Circle
									bg={"brandBlue"}
									boxSize="8"
									_hover={{
										bg: "#A032C2",
									}}
									transition="background-color 0.3s"
								>
									<Icon as={FaInstagram} color="white" />
								</Circle>
							</Link>
							<Link>
								<Circle
									bg="brandBlue"
									boxSize="8"
									_hover={{
										bg: "facebook.500",
									}}
									transition="background-color 0.3s"
								>
									<Icon as={FaFacebookF} color="white" />
								</Circle>
							</Link>
							<Link
								href="https://www.youtube.com/user/italiaoutdoorlivin"
								isExternal
							>
								<Circle
									bg="brandBlue"
									boxSize="8"
									_hover={{
										bg: "red.500",
									}}
									transition="background-color 0.3s"
								>
									<Icon as={FaYoutube} color="white" />
								</Circle>
							</Link>
							<Link>
								<Circle
									bg="brandBlue"
									boxSize="8"
									_hover={{
										bg: "twitter.500",
									}}
									transition="background-color 0.3s"
								>
									<Icon as={FaTwitter} color="white" />
								</Circle>
							</Link>
						</Stack>
						<Text>
							Follow our social media to see the latest news and posts
							from our company
						</Text>
					</Stack>
				</Grid>
				<Divider colorScheme="blue" />
				<Divider colorScheme="blue" />
				<Flex py="4" justifyContent="space-between" color="white">
					<Text as="span" fontSize="sm">
						© Eurotech
					</Text>
					<Text as="span" fontSize="sm">
						Made by Nomad Soft LLC
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
