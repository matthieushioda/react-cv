import React from "react";
import { CardHeader as MuiCardHeader, Chip } from "@mui/material";

import Typography from "./Typography";

export interface CardHeaderProps {
	title: string;
	chip?: string;
}

function CardHeader({ ...props }: CardHeaderProps): React.ReactElement {
	return (
		<MuiCardHeader
			title={
				<Typography variant="h6" color="text.title">
					{props.title}
				</Typography>
			}
			action={
				props.chip && (
					<Chip
						key={props.chip}
						label={props.chip}
						sx={{ color: "text.primary", backgroundColor: "text.secondary" }}
					/>
				)
			}
			sx={{
				display: "flex",
				padding: 4,
				backgroundColor: "primary.main",
			}}
		/>
	);
}

export default CardHeader;
