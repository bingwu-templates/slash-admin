import { useMemo } from "react";
import MotionViewport from "@/components/animate/motion-viewport";
import { getVariant } from "@/components/animate/variants";
import { Card } from "@/ui/card";
import { themeVars } from "@/theme/theme.css";

type Props = {
	variant: string;
};
const ITEMS = Array.from({ length: 40 }, (_, index) => index + 1);
export default function ContainerView({ variant }: Props) {
	const varients = useMemo(() => getVariant(variant), [variant]);

	return (
		<div
			key={variant}
			className="h-[480px] overflow-auto rounded-lg px-20"
			style={{ backgroundColor: themeVars.colors.background.neutral }}
		>
			{ITEMS.map((itemNumber) => (
				<MotionViewport key={itemNumber} variants={varients} className="mt-4">
					<Card>
						<span className="text-center">Item {itemNumber}</span>
					</Card>
				</MotionViewport>
			))}
		</div>
	);
}
