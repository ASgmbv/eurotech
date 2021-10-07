import {
	AspectRatio,
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Grid,
	Heading,
	Image,
	Input,
	Stack,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Footer from "../components/footer";
import Header from "../components/header";
import {
	Clock,
	Folder,
	Money,
	Project,
	Specialist,
	Time,
} from "../components/icons";
import BannerSlider from "../components/slider";
import Title from "../components/title";
import { getPageTitle } from "../lib/config";

const items = [
	{
		icon: <Specialist />,
		title: "Qualified Specialists",
		desc:
			"Massa consectetur montes, sed in pulvinar sed. Mollis faucibus nisl vitae orci purus",
	},
	{
		icon: <Clock />,
		title: "Rich History",
		desc:
			"Hardscape Construction  company, with more than 30 years of experience",
	},
	{
		icon: <Money />,
		title: "Fair Price",
		desc: "We pride ourselves by providing quality work at a fair price.",
	},
	{
		icon: <Project />,
		title: "State-Of-The-Art Technology",
		desc:
			"True artisan style to the work ensuring every aspect is up to our high standards",
	},
	{
		icon: <Time />,
		title: "In Time Work Completion",
		desc:
			"Massa consectetur montes, sed in pulvinar sed. Mollis faucibus nisl vitae orci purus",
	},
	{
		icon: <Folder />,
		title: "Any Difficulty Projects",
		desc:
			"Massa consectetur montes, sed in pulvinar sed. Mollis faucibus nisl vitae orci purus",
	},
];

const WhyUs = () => {
	return (
		<Container maxW="container.xl" mb="20">
			<Title>
				<Text as="span" color="#464646">
					Why
				</Text>{" "}
				Euro Tech Contracting
			</Title>
			<Grid
				templateColumns={[
					"repeat(1, 1fr)",
					"repeat(2, 1fr)",
					"repeat(3, 1fr)",
				]}
				gap="6"
			>
				{items.map(({ icon, title, desc }, idx) => (
					<Flex
						key={idx}
						flexDir="column"
						padding="4"
						border="1px solid"
						borderColor="brandBlue"
					>
						<Flex alignItems="center" mb="4">
							{icon}
							<Heading size="sm" ml="4" color="#5C5C5C">
								{title}
							</Heading>
						</Flex>
						<Text color="#ACAEAF">{desc}</Text>
					</Flex>
				))}
			</Grid>
		</Container>
	);
};

const services = [
	{
		title: "Pavers",
		desc:
			"Frank Lombardi has been installing pavers for a lifetime. 30 years of experience make us the best Paver installer in New Jersey!",
		photo: "/slider1.jpg",
	},
	{
		title: "Lanscaping",
		desc:
			"Frank Lombardi has been installing pavers for a lifetime. 30 years of experience make us the best Paver installer in New Jersey!",
		photo: "/slider2.jpg",
	},
	{
		title: "Concrete",
		desc:
			"Frank Lombardi has been installing pavers for a lifetime. 30 years of experience make us the best Paver installer in New Jersey!",
		photo: "/slider3.jpg",
	},
];

const Services = () => {
	return (
		<Container maxW="container.xl" py="20">
			<Grid
				templateColumns={[
					"repeat(1, 1fr)",
					"repeat(2, 1fr)",
					"repeat(4, 1fr)",
				]}
				gap={[10, null, 6]}
			>
				<Stack
					spacing="3"
					border="5px solid"
					borderColor="#F2F2F2"
					padding="4"
					alignItems="flex-start"
				>
					<Heading fontSize={["2xl"]}>
						Services{" "}
						<Text as="span" color="brandBlue">
							We Offer
						</Text>
					</Heading>
					<Divider />
					<Text color="#ACAEAF" fontWeight="semibold">
						Eurotech Contracting, Frank Lombardi, is a one stop, family
						owned, Hardscape Construction company, with more than 30 years
						of experience. We take pride in everything we do. It’s in our
						products, our design and our workmanship. We bring true
						artisan style to the work while using state-of-the-art
						technology.
					</Text>
					<Button
						variant="link"
						size="sm"
						colorScheme="blue"
						color="brandBlue"
						fontWeight="semibold"
					>
						SEE ALL SERVICES
					</Button>
				</Stack>
				{services.map(({ title, desc, photo }, idx) => (
					<Flex key={idx} flexDirection="column" alignItems="flex-start">
						<AspectRatio ratio={4 / 2} width="100%" mb="4">
							<Image src={photo} alt={title} />
						</AspectRatio>

						<Heading size="md" mb="4">
							{title}
						</Heading>

						<Text flex="1" color="#ACAEAF" mb="4">
							{desc}
						</Text>

						<Button
							variant="link"
							size="sm"
							colorScheme="blue"
							color="brandBlue"
							fontWeight="semibold"
						>
							LEARN MORE
						</Button>
					</Flex>
				))}
			</Grid>
		</Container>
	);
};

const About = () => {
	return (
		<Box bg="#3C3C3C">
			<Container maxW="container.xl" py="20">
				<Grid
					templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
					gap="20"
				>
					<Box color="white">
						<Heading size="lg">
							About{" "}
							<Text as="span" color="brandBlue">
								Euro Tech Contracting
							</Text>
						</Heading>
						<Divider mb="6" />
						<Text color="#ACAEAF" lineHeight="taller">
							Eurotech Contracting, Frank Lombardi, is a one stop, family
							owned, Hardscape Construction company, with more than 30
							years of experience. We take pride in everything we do.
							It’s in our products, our design and our workmanship. We
							bring true artisan style to the work while using
							state-of-the-art technology. And we get our hands dirty
							too. Every day, we’re in the field, on the job ensuring
							every aspect is up to our high standards.
						</Text>
					</Box>
					<Box border="1px solid #D8D8D8" padding="6" textAlign="center">
						<Stack spacing="8" color="#D8D8D8">
							<Heading size="lg" textDecor="underline" color="white">
								Request a{" "}
								<Text as="span" color="brandBlue">
									Free Quote
								</Text>
							</Heading>
							<Input
								borderRadius="0"
								size="lg"
								placeholder="Your name"
							/>
							<Input
								borderRadius="0"
								size="lg"
								placeholder="Your E-mail"
							/>
							<Textarea borderRadius="0" placeholder="Your message" />
							<Button
								size="lg"
								borderRadius="0"
								colorScheme="blue"
								bg="brandBlue"
								fontSize="md"
							>
								SEND
							</Button>
						</Stack>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
};

const news = [
	{
		photo: "/slider1.jpg",
		title: "Cutting-Edge Construction with Old-World Style",
		desc:
			"It’s not surprising that long-time New Jersey resident, Frank Lombardi, pays attention to old-world details and craftsmanship. He was born and raised in Moiano, Italy, and developed an...",
	},
	{
		photo: "/slider2.jpg",
		title: "Lombardi’s reputation",
		desc:
			"Within a few years, Lombardi’s reputation had become so well known in the contracting community that some of the most visible and sought-after projects in the area were awarded to his now family...",
	},
	{
		photo: "/slider3.jpg",
		title: "Our design and Our workmanship",
		desc:
			"Like those old-world craftsmen, we take pride in everything we do. It’s in our products, our design and our workmanship. We bring true artisan style to the work while using state-of-the-art...",
	},
];

const News = () => {
	return (
		<Container maxW="container.xl" pb="20">
			<Title>
				<Text as="span" color="#464646">
					Latest
				</Text>{" "}
				News
			</Title>
			<Grid
				templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
				gap="6"
			>
				{news.map(({ photo, title, desc }, idx) => (
					<Flex
						key={idx}
						flexDirection="column"
						alignItems="flex-start"
						boxShadow="-4px -4px 4px rgba(197, 197, 197, 0.25), 4px 4px 4px rgba(197, 197, 197, 0.25);"
					>
						<AspectRatio ratio={4 / 2} width="100%" mb="4">
							<Image src={photo} alt={title} />
						</AspectRatio>

						<Heading size="md" mb="4" px="4">
							{title}
						</Heading>

						<Text flex="1" color="#ACAEAF" mb="4" px="4">
							{desc}
						</Text>

						<Button
							p="4"
							variant="link"
							size="sm"
							colorScheme="blue"
							color="brandBlue"
							fontWeight="semibold"
						>
							LEARN MORE
						</Button>
					</Flex>
				))}
			</Grid>
		</Container>
	);
};

const Ideas = () => {
	return (
		<Box
			py="20"
			backgroundImage="/slider1.jpg"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			position="relative"
			_before={{
				content: "''",
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(60, 60, 60, 0.8)",
			}}
		>
			<Container maxW="container.xl">
				<Flex flexDirection="column" alignItems="center">
					<Heading size="lg" mb="10" color="white" zIndex="1">
						We help bring your ideas to life
					</Heading>
					<Stack direction={["column", null, "row"]} spacing="6">
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
							OUR SERVICES
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
							OUR PRICES
						</Button>
						<Button
							bg="brandBlue"
							color="white"
							borderRadius="0"
							colorScheme="blue"
							size="lg"
						>
							GET IN TOUCH
						</Button>
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
};

export default function Home() {
	return (
		<>
			<NextSeo
				title={getPageTitle("Home")}
				description="Luxury outdoor living space. Call now to get a free estimate."
			/>
			<Box>
				<Header />
				<BannerSlider />
				<Services />
				<About />
				<WhyUs />
				<Ideas />
				<News />
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6426.634716995149!2d-73.64645483233754!3d40.82829860482112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c285fc696789f3%3A0x99d5327787464f6b!2s133%20Glenwood%20Rd%2C%20Glenwood%20Landing%2C%20NY%2011547%2C%20USA!5e0!3m2!1sen!2skg!4v1632828517438!5m2!1sen!2skg"
					width="100%"
					height="400"
					style={{
						border: 0,
					}}
					loading="lazy"
				></iframe>
				<Footer />
			</Box>
		</>
	);
}
