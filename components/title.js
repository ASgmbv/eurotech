import { Box } from "@chakra-ui/react";
import { MotionHeading } from "./motion";
import { useFadeIn } from "../lib/hooks";

const Title = ({ children, ...props }) => {
	const [ref, animation, variants] = useFadeIn();

	return (
		<Box py="10" {...props}>
			<MotionHeading
				ref={ref}
				color="brandBlue"
				initial="hidden"
				animate={animation}
				variants={variants}
				fontSize={["2xl", null, "3xl"]}
			>
				{children}
			</MotionHeading>
		</Box>
	);
};

export default Title;
