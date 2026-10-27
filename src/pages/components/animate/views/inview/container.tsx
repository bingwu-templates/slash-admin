import { m } from "motion/react";
import { useMemo } from "react";
import Cover3 from "@/assets/images/cover/cover_3.jpg";
import MotionContainer from "@/components/animate/motion-container";
import { getVariant } from "@/components/animate/variants";
import { themeVars } from "@/theme/theme.css";

const TEXT = "SlashAdmin";
const IMAGES = Array.from({ length: 5 }, (_, index) => ({ id: `cover-${index}`, src: Cover3 }));
type Props = {
	isText: boolean;
	isMulti: boolean;
	variant: string;
};
export default function ContainerView({ isText, variant, isMulti }: Props) {
	const varients = useMemo(() => getVariant(variant), [variant]);
	const imgs = useMemo(() => (isMulti ? IMAGES : IMAGES.slice(0, 1)), [isMulti]);

	return (
		<div
			key={variant}
			className="h-[480px] overflow-auto rounded-lg flex flex-col items-center justify-center"
			style={{ backgroundColor: themeVars.colors.background.neutral }}
		>
			{isText ? (
				<MotionContainer key="text" className="flex h-[480px] items-center justify-center font-bold md:text-6xl">
					{TEXT.split("").map((letter) => (
						<m.div key={letter} variants={varients}>
							{letter}
						</m.div>
					))}
				</MotionContainer>
			) : (
				<MotionContainer
					key={isMulti ? "multi-image" : "single-image"}
					className="flex flex-col items-center justify-center gap-6"
				>
					{imgs.map((img) => (
						<m.img
							key={img.id}
							src={img.src}
							style={{
								objectFit: "cover",
								width: "240px",
								height: isMulti ? "36px" : "240px",
								margin: "auto",
								borderRadius: "8px",
							}}
							variants={varients}
						/>
					))}
				</MotionContainer>
			)}
		</div>
	);
}
